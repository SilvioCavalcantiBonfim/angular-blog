export function thumb(article: {thumb: string}) {
  let rtThumb = '';
  if (article.thumb.length > 0) {
    rtThumb = article.thumb;
  }else{
    rtThumb = 'https://i.pinimg.com/564x/59/cc/12/59cc12dac1764894ab5b42bc956d98f2.jpg';
  }
  return rtThumb;
}