export type Article = {
  id: string,
  title: string,
  created_at: string,
  updated_at: string,
  comments: any[],
  Author: {email: string, full_name: string},
  thumb: string
}