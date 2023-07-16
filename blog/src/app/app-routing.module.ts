import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }, 
  { path: 'article/:id', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) },
  { path: 'terms-and-condition', loadChildren: () => import('./terms-and-condition/terms-and-condition.module').then(m => m.TermsAndConditionModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
