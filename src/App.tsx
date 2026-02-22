import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Menu, 
  X, 
  ArrowRight, 
  Github, 
  Twitter, 
  Instagram,
  Search,
  Facebook,
  Linkedin,
  Youtube,
  Send, // Using 'Send' for Telegram
  Bookmark
} from 'lucide-react';
import { Post, Comment, Author } from './types';
import { INITIAL_POSTS, AUTHORS } from './constants';

export default function App() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Display 4 posts per page
  const [savedPostIds, setSavedPostIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('savedPostIds');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Lifestyle', 'Travel', 'Design', 'Productivity', 'Saved'];

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleAddComment = (postId: string, text: string) => {
    if (!text.trim()) return;
    const newComment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      author: 'Guest User',
      text,
      timestamp: 'Just now'
    };
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
    ));
  };

  const handleSavePost = (postId: string) => {
    setSavedPostIds(prevSavedPostIds => {
      const newSavedPostIds = prevSavedPostIds.includes(postId)
        ? prevSavedPostIds.filter(id => id !== postId)
        : [...prevSavedPostIds, postId];
      localStorage.setItem('savedPostIds', JSON.stringify(newSavedPostIds));
      return newSavedPostIds;
    });
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || activeCategory === 'Saved'
      ? (activeCategory === 'Saved' ? savedPostIds.includes(post.id) : true)
      : post.category === activeCategory;
    
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Social Sharing Functions
  const getShareUrl = (platform: string, post: Post) => {
    const postUrl = `${window.location.origin}/post/${post.id}`;
    const text = encodeURIComponent(post.title + ' - ' + post.excerpt);

    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${postUrl}&text=${text}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${encodeURIComponent(post.title)}&summary=${text}`;
      case 'youtube': // YouTube doesn't have a direct share API for arbitrary content like this
        return 'https://www.youtube.com/'; // Redirect to YouTube homepage or channel
      case 'telegram':
        return `https://t.me/share/url?url=${postUrl}&text=${text}`;
      default:
        return '#';
    }
  };

  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">Lumina</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium hover:text-black/60 transition-colors">Journal</a>
              <a href="#" className="text-sm font-medium hover:text-black/60 transition-colors">Archive</a>
              <a href="#" className="text-sm font-medium hover:text-black/60 transition-colors">About</a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-black/5 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Journal</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Archive</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">About</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                  Creative Journal
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
                  Capturing the <br />
                  <span className="italic text-black/40">unseen</span> moments.
                </h1>
                <p className="text-lg text-gray-600 max-w-lg mb-8 leading-relaxed">
                  I'm a designer and photographer based in London, exploring the intersection of technology, minimalism, and human experience.
                </p>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-all group">
                    Read Latest <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors"><Github size={20} /></a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/portrait/800/1000" 
                    alt="Hero" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-black/5 hidden md:block">
                  <p className="font-serif italic text-xl">"Less is more."</p>
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">— Ludwig Mies van der Rohe</p>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent" />
        </section>

        {/* Categories / Filter */}
        <section className="py-12 border-y border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              <AnimatePresence mode="popLayout">
                {currentPosts.map((post, index) => {
                  const author = AUTHORS.find(a => a.id === post.authorId);
                  return (
                    <motion.article
                      layout
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col group"
                    >
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 card-hover">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 uppercase tracking-widest font-medium">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>5 min read</span>
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-4 group-hover:text-black/70 transition-colors">
                          {post.title}
                        </h2>
                        {author && (
                          <div className="flex items-center gap-3 mb-6">
                            <img 
                              src={author.avatar} 
                              alt={author.name} 
                              className="w-8 h-8 rounded-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <p className="text-sm font-medium text-black">{author.name}</p>
                              <p className="text-xs text-gray-500 line-clamp-1">{author.bio}</p>
                            </div>
                          </div>
                        )}
                        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        {/* Interaction Bar */}
                        <div className="flex items-center justify-between pt-6 border-t border-black/5">
                          <div className="flex items-center gap-6">
                            <button 
                              onClick={() => handleLike(post.id)}
                              className="flex items-center gap-2 group/btn"
                            >
                              <Heart 
                                size={20} 
                                className={`transition-colors ${post.likes > 0 ? 'fill-red-500 text-red-500' : 'group-hover/btn:text-red-500'}`} 
                              />
                              <span className="text-sm font-medium">{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 group/btn">
                              <MessageCircle size={20} className="group-hover/btn:text-blue-500 transition-colors" />
                              <span className="text-sm font-medium">{post.comments.length}</span>
                            </button>
                            <button 
                              onClick={() => handleSavePost(post.id)}
                              className="flex items-center gap-2 group/btn"
                            >
                              <Bookmark 
                                size={20} 
                                className={`transition-colors ${savedPostIds.includes(post.id) ? 'fill-yellow-500 text-yellow-500' : 'group-hover/btn:text-yellow-500'}`} 
                              />
                              <span className="text-sm font-medium">Save</span>
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => openShareWindow(getShareUrl('twitter', post))}
                              className="p-2 hover:bg-blue-100/50 text-blue-500 rounded-full transition-colors"
                              title="Share on Twitter"
                            >
                              <Twitter size={18} />
                            </button>
                            <button 
                              onClick={() => openShareWindow(getShareUrl('facebook', post))}
                              className="p-2 hover:bg-blue-600/10 text-blue-600 rounded-full transition-colors"
                              title="Share on Facebook"
                            >
                              <Facebook size={18} />
                            </button>
                            <button 
                              onClick={() => openShareWindow(getShareUrl('linkedin', post))}
                              className="p-2 hover:bg-blue-700/10 text-blue-700 rounded-full transition-colors"
                              title="Share on LinkedIn"
                            >
                              <Linkedin size={18} />
                            </button>
                            <button 
                              onClick={() => openShareWindow(getShareUrl('telegram', post))}
                              className="p-2 hover:bg-blue-400/10 text-blue-400 rounded-full transition-colors"
                              title="Share on Telegram"
                            >
                              <Send size={18} />
                            </button>
                            <button 
                              onClick={() => openShareWindow(getShareUrl('youtube', post))}
                              className="p-2 hover:bg-red-600/10 text-red-600 rounded-full transition-colors"
                              title="Visit YouTube (no direct post share)"
                            >
                              <Youtube size={18} />
                            </button>
                          </div>
                        </div>

                        {/* Comment Section (Simplified) */}
                        <div className="mt-6 space-y-4">
                          {post.comments.length > 0 && (
                            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                              {post.comments.map(comment => (
                                <div key={comment.id} className="text-sm">
                                  <span className="font-bold mr-2">{comment.author}</span>
                                  <span className="text-gray-600">{comment.text}</span>
                                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">{comment.timestamp}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          <CommentInput onAdd={(text) => handleAddComment(post.id, text)} />
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    currentPage === i + 1 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="font-serif text-xl font-bold tracking-tight">Lumina</span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed">
                A personal space for thoughts, experiments, and visual stories. Built with passion and a focus on simplicity.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Archive</a></li>
                <li><a href="#" className="hover:text-black transition-colors">About Me</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Get the latest stories delivered to your inbox.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-black/5 outline-none"
                />
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Join</button>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 uppercase tracking-widest">© 2024 Lumina Journal. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-400 hover:text-black uppercase tracking-widest">Privacy</a>
              <a href="#" className="text-xs text-gray-400 hover:text-black uppercase tracking-widest">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CommentInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        className="w-full bg-gray-100 border-none rounded-full px-4 py-2 pr-12 text-sm focus:ring-2 focus:ring-black/5 outline-none transition-all"
      />
      <button 
        type="submit"
        disabled={!text.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-black disabled:text-gray-300 transition-colors"
      >
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
