import { Comment } from "./comment.type"

export type Article = {
  id?: string,
  title: string,
  thumb: string,
  content: string | null,
  created_at: string,
  updated_at: string,
  comments: Comment[]
}