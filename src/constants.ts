import { Post, Author } from './types';

export const AUTHORS: Author[] = [
  {
    id: 'author-1',
    name: 'Jane Doe',
    bio: 'A passionate writer and traveler exploring the world.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    id: 'author-2',
    name: 'John Smith',
    bio: 'Tech enthusiast and minimalist designer.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
];

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    title: 'The Art of Mindful Living',
    excerpt: 'Discover simple practices to bring mindfulness into your daily routine and enhance your well-being.',
    content: 'Full content of the mindful living post...', 
    image: 'https://picsum.photos/seed/mindful/800/600',
    date: '2023-10-26',
    likes: 15,
    comments: [],
    category: 'Lifestyle',
    authorId: 'author-1',
  },
  {
    id: '2',
    title: 'Exploring the Hidden Gems of Kyoto',
    excerpt: 'A travel guide to the serene temples and vibrant streets less traveled in Japan.',
    content: 'Full content of the Kyoto travel post...', 
    image: 'https://picsum.photos/seed/kyoto/800/600',
    date: '2023-10-20',
    likes: 8,
    comments: [],
    category: 'Travel',
    authorId: 'author-1',
  },
  {
    id: '3',
    title: 'Minimalist Design Principles for Web',
    excerpt: 'How embracing minimalism can lead to more effective and aesthetically pleasing web interfaces.',
    content: 'Full content of the minimalist design post...', 
    image: 'https://picsum.photos/seed/design/800/600',
    date: '2023-10-15',
    likes: 22,
    comments: [],
    category: 'Design',
    authorId: 'author-2',
  },
  {
    id: '4',
    title: 'Boost Your Productivity with These 5 Apps',
    excerpt: 'A curated list of applications that can help streamline your workflow and enhance focus.',
    content: 'Full content of the productivity apps post...', 
    image: 'https://picsum.photos/seed/productivity/800/600',
    date: '2023-10-10',
    likes: 10,
    comments: [],
    category: 'Productivity',
    authorId: 'author-2',
  },
];

export const PROJECTS = [
  {
    id: 'project-1',
    title: 'E-commerce Redesign',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    description: 'A complete redesign of a popular e-commerce platform focusing on user experience and conversion rates.',
    link: '#',
  },
  {
    id: 'project-2',
    title: 'Mobile App Development',
    image: 'https://picsum.photos/seed/mobileapp/800/600',
    description: 'Developed a cross-platform mobile application for a startup, integrating real-time data synchronization.',
    link: '#',
  },
  {
    id: 'project-3',
    title: 'Brand Identity & Website',
    image: 'https://picsum.photos/seed/branding/800/600',
    description: 'Created a comprehensive brand identity package and a responsive website for a new creative agency.',
    link: '#',
  },
  {
    id: 'project-4',
    title: 'Data Visualization Dashboard',
    image: 'https://picsum.photos/seed/dashboard/800/600',
    description: 'Designed and implemented an interactive data visualization dashboard for business intelligence.',
    link: '#',
  },
];
