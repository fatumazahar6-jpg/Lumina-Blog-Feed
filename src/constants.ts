import { Post } from './types';

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    title: 'The Art of Minimalist Living',
    excerpt: 'Discover how stripping away the excess can lead to a more fulfilling and focused creative life.',
    content: 'Minimalism is not just about owning fewer things; it is about making room for what truly matters...',
    image: 'https://picsum.photos/seed/minimal/800/600',
    date: 'Oct 24, 2023',
    likes: 42,
    category: 'Lifestyle',
    comments: [
      { id: 'c1', author: 'Alex Rivers', text: 'This really resonated with me. I started decluttering last week!', timestamp: '2 hours ago' }
    ]
  },
  {
    id: '2',
    title: 'Exploring the Hidden Alleys of Tokyo',
    excerpt: 'A photographic journey through the neon-lit backstreets and quiet shrines of Japans capital.',
    content: 'Tokyo is a city of contrasts. One moment you are in a bustling intersection, the next in a silent alley...',
    image: 'https://picsum.photos/seed/tokyo/800/600',
    date: 'Nov 12, 2023',
    likes: 128,
    category: 'Travel',
    comments: []
  },
  {
    id: '3',
    title: 'Future of Web Design in 2024',
    excerpt: 'Bento grids, brutalism, and the return of organic shapes. What to expect in the coming year.',
    content: 'Design trends are cyclical, but the shift towards more expressive and personal interfaces is clear...',
    image: 'https://picsum.photos/seed/design/800/600',
    date: 'Dec 05, 2023',
    likes: 89,
    category: 'Design',
    comments: [
      { id: 'c2', author: 'Sarah Chen', text: 'Bento grids are everywhere now! Great writeup.', timestamp: '1 day ago' }
    ]
  },
  {
    id: '4',
    title: 'Morning Rituals for Productivity',
    excerpt: 'How I structured my first hour of the day to maximize deep work and mental clarity.',
    content: 'The first hour sets the tone for the rest of the day. For me, it starts with no screens...',
    image: 'https://picsum.photos/seed/morning/800/600',
    date: 'Jan 15, 2024',
    likes: 56,
    category: 'Productivity',
    comments: []
  }
];
