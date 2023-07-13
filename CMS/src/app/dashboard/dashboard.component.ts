import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PermissionService } from '../Permission/permission.service';
import { APICommunicationService } from '../apicommunication/apicommunication.service';
import { ReplaySubject, distinctUntilChanged, map, of, switchMap, take } from 'rxjs';
import { Article } from '../entity/article.type';
import { SwitchComponent } from './switch/switch.component';
import { EditorComponent } from '../editor/editor.component';
import { adapter } from '../adapter/ArticleToInitInput.adapter';
import { Comment } from '../entity/comment.type';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {

  search: string = '';

  actions = [
    {
      icon: 'account_circle', title: 'Your Profile', action: () => {
        this.profileModal?.show.next(true);
      }
    },
    {
      icon: 'logout', title: 'Sign out', action: () => {
        this.permissions.logout();
      }
    },
  ];

  @ViewChild('switch') switch: SwitchComponent | undefined;
  @ViewChild('editor') editor: EditorComponent | undefined;
  @ViewChild('profileModal') profileModal: ProfileEditorComponent | undefined;

  // Refatoracao do fluxo do codigo
  id$: ReplaySubject<string | null> = new ReplaySubject<string | null>();

  article$: ReplaySubject<Article> = new ReplaySubject<Article>();

  articles$: ReplaySubject<Article[]> = new ReplaySubject<Article[]>();

  flow$: ReplaySubject<void> = new ReplaySubject<void>();

  flowList$: ReplaySubject<void> = new ReplaySubject<void>();
  // 


  profile: { full_name: string, email: string } = { full_name: '', email: '' };

  constructor(private permissions: PermissionService, private apiCommunication: APICommunicationService, private notification: NotificationService) {
    this.updateArticleList();
    apiCommunication.GetProfile().subscribe({
      next: r => this.profile = r,
      error: (err) => this.permissions.logout(),
    });
  }

  ngAfterViewInit(): void {
    this.EmitterId(null);
  }

  filter(array: Article[], query: string) {
    return array.filter(e => e.title.toLowerCase().includes(query.toLowerCase()))
  }

  updateArticleList() {

    this.flowList$.pipe(
      switchMap(() => this.apiCommunication.GetArticles())
    ).subscribe(this.articles$);

    this.flowList$.next();

  }

  adapter(a: any) {
    return adapter(a);
  }

  updateProfile(a: any) {
    this.apiCommunication.updateProfile(a)
      .subscribe({
        next: r => this.profile = r,
        error: (err) => this.permissions.logout(),
        complete: () => this.notification.add('GRAY', 'Perfil atualizado sucesso', 'account_circle', 5000)
      });
  }

  // reseta o observable do update do editor e seleciona outro artigo

  EmitterId(id: string | null) {

    this.id$.next(id);

    this.flow$.pipe(
      distinctUntilChanged(),
      switchMap(() => {
        if (id !== null)
          return this.apiCommunication.GetFullArticle(id).pipe(map(r => ({ ...r, id })));
        else {
          const clearArticle: Article = {
            title: '',
            content: '',
            created_at: '',
            updated_at: '',
            comments: []
          }
          return of(clearArticle);
        }
      })).subscribe(this.article$);

    this.flow$.next();
  }

  deleteComment(comment: Comment) {
    this.apiCommunication.deleteComment(comment.id).subscribe({
      complete: () => {
        this.EmitterId(comment.article_id);
        this.updateArticleList();
        this.notification.add('YELLOW', 'Comentário apagado com sucesso', 'speaker_notes_off', 5000);
      }
    });
  }

  delete(id: string) {
    this.apiCommunication.deleteArticle(id).subscribe({
      error: (err) => this.permissions.logout(),
      complete: () => {
        this.updateArticleList();
        this.EmitterId(null);
        this.notification.add('RED', 'Artigo apagado com sucesso', 'delete_forever', 5000);
      },
    });
  }
  //publica um novo artigo ou edita o artigo existente depende do id do artigo
  publish() {
    this.editor?.update.pipe(take(1)).subscribe({
      next: (input) => {
        if (input.title === '' || input.content === '')
          return
        const body = {
          title: input.title,
          content: input.content
        }
        if (input?.id) {
          this.apiCommunication.updateArticle(input.id, body).subscribe({
            error: (err) => this.permissions.logout(),
            complete: () => {
              this.updateArticleList();
              this.notification.add('BLUE', 'Artigo foi atualizado com sucesso.', 'public', 5000);
            }
          });
        } else {
          this.apiCommunication.createArticle(body).subscribe({
            next: (r) => {
              this.EmitterId(r.id);
            },
            error: (err) => this.permissions.logout(),
            complete: () => {
              this.updateArticleList();
              this.notification.add('GREEN', 'Artigo foi criado com sucesso.', 'public', 5000);
            }
          });
        }
      }
    })
  }
}
