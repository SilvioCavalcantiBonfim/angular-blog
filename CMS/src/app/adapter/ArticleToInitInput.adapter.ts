import { Article } from '../entity/article.type';
import { InputInit } from '../entity/initInput.interface';

export function adapter(article: Article | null | undefined) {
  return {
    id: article?.id,
    title: article?.title,
    thumb: article?.thumb,
    content: article?.content,
  } as InputInit;
}
