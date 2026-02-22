export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
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
  authorId: string;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
}
