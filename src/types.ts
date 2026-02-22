export interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  likes: number;
  comments: Comment[];
  category: string;
}
