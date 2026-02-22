import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { Post, Author, Project } from './types';
import { INITIAL_POSTS, AUTHORS, PROJECTS } from './constants';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);
  const [posts] = useState<Post[]>(INITIAL_POSTS);
  const [postsPerPage, setPostsPerPage] = useState(4); // Display 4 posts per page in the blog section
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', ...new Set(INITIAL_POSTS.map(post => post.category))];

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen font-sans bg-yellow-400 text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-400/80 backdrop-blur-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Lumina</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-sm font-medium hover:text-black/70 transition-colors">Work</a>
              <a href="#insights" className="text-sm font-medium hover:text-black/70 transition-colors">Blog</a>
              <a href="#about" className="text-sm font-medium hover:text-black/70 transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium hover:text-black/70 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-md text-black hover:bg-black/10 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
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
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-yellow-400 border-b border-black/10 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#work" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5">Work</a>
                <a href="#insights" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5">Blog</a>
                <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5">About</a>
                <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/portfolio-hero/1920/1080?blur=2" 
              alt="Professional Photography Background" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400 to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            >
              Crafting <span className="italic text-black/70">Digital</span> Experiences.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto mb-10"
            >
              I'm a multidisciplinary designer and developer passionate about creating impactful and intuitive web solutions.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center gap-3 bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/80 transition-all group shadow-lg"
            >
              Read Latest <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center gap-6 mt-12"
            >
              <a href="#" className="p-3 hover:bg-black/10 rounded-full transition-colors" aria-label="Twitter"><Twitter size={24} /></a>
              <a href="#" className="p-3 hover:bg-black/10 rounded-full transition-colors" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="#" className="p-3 hover:bg-black/10 rounded-full transition-colors" aria-label="Github"><Github size={24} /></a>
              <a href="#" className="p-3 hover:bg-black/10 rounded-full transition-colors" aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href="#" className="p-3 hover:bg-black/10 rounded-full transition-colors" aria-label="Email"><Mail size={24} /></a>
            </motion.div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 bg-yellow-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">My <span className="italic text-black/70">Work</span>.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {PROJECTS.map(project => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col group card-hover bg-yellow-300 rounded-xl overflow-hidden shadow-lg border border-black/10 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-black/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-black/70 mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <a href={project.link} className="inline-flex items-center gap-3 bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold text-base hover:bg-black/80 transition-all group/link shadow-md">
                      View Project <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="text-center mt-16">
              <button className="inline-flex items-center gap-3 bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold text-base hover:bg-black/80 transition-all group shadow-md">
                View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="insights" className="py-20 bg-yellow-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Latest <span className="italic text-black/70">Insights</span>.</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors
                    ${activeCategory === category ? 'bg-black text-yellow-400' : 'bg-yellow-300 text-black hover:bg-yellow-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map(post => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col group card-hover bg-yellow-300 rounded-xl overflow-hidden shadow-lg border border-black/10 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-black/80 transition-colors">
                      {post.title}
                    </h3>
                    {(() => {
                      const author = AUTHORS.find(a => a.id === post.authorId);
                      return author && (
                        <div className="flex items-center gap-3 mb-4">
                          <img 
                            src={author.avatar} 
                            alt={author.name} 
                            className="w-8 h-8 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <p className="text-sm font-medium text-black">{author.name}</p>
                        </div>
                      );
                    })()}
                    <p className="text-black/70 mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <a href="#" className="inline-flex items-center gap-3 bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold text-base hover:bg-black/80 transition-all group/link shadow-md">
                      Read More <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-16">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-2 bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold text-base hover:bg-black/80 transition-all group shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredPosts.length / postsPerPage)))}
                disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
                className="inline-flex items-center gap-2 bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold text-base hover:bg-black/80 transition-all group shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </section>
        <section id="about" className="min-h-screen bg-yellow-600 py-20 flex items-center justify-center">
          <h2 className="text-4xl font-bold">About Me</h2>
        </section>
        <section id="contact" className="min-h-screen bg-yellow-700 py-20 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Contact</h2>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-yellow-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Lumina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
