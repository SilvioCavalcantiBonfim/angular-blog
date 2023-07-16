import { Comment } from "./comment.type"

export type Article = {
  id: string,
  title: string,
  created_at: string,
  updated_at: string,
  comments: Comment[],
  Author: {email: string, full_name: string},
  thumb: string
}