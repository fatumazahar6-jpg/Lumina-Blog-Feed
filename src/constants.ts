import { Post, Author } from './types';

export const AUTHORS: Author[] = [
  {
    id: 'author1',
    name: 'Eleanor Vance',
    bio: 'A minimalist designer and photographer, exploring the intersection of technology and human experience.',
    avatar: 'https://picsum.photos/seed/eleanor/100/100'
  },
  {
    id: 'author2',
    name: 'Marcus Thorne',
    bio: 'Travel writer and urban explorer with a passion for hidden gems and local cultures.',
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  },
  {
    id: 'author3',
    name: 'Sophia Lee',
    bio: 'Web design enthusiast and front-end developer, always on the lookout for the next big trend.',
    avatar: 'https://picsum.photos/seed/sophia/100/100'
  }
];

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
    ],
    authorId: 'author1'
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
    comments: [],
    authorId: 'author2'
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
    ],
    authorId: 'author3'
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
    comments: [],
    authorId: 'author1'
  }
];
