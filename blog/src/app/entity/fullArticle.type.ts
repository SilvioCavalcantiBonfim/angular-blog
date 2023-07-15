import { Comment } from "./comment.type"

export type FullArticle = {
  title: string,
  content: string,
  created_at: string,
  updated_at: string,
  thumb: string,
  Author: {
    full_name: string,
    email?: string
  },
  comments: Comment[]
}