export type Settings = {
  title: string,
  subtitle: string,
  carousel: {amount: number, time: number},
  theme: string[],
  articles: {
    total: number,
    per_page: number
  }
}