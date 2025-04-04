
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { CalendarDays, User, Clock, ArrowRight } from 'lucide-react';
import { useBlog } from '@/contexts/BlogContext';

const BlogPage = () => {
  const { posts, loading } = useBlog();
  
  useEffect(() => {
    // Update page title for SEO
    document.title = 'Power House Gym - Blog';
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="py-20 bg-gym-darkgray">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="text-gym-red uppercase tracking-wider font-medium">Our Blog</span>
            <h1 className="heading-lg text-white mt-2 mb-6">Fitness Insights</h1>
            <p className="text-white/80 leading-relaxed">
              Stay informed with the latest fitness trends, nutrition advice, and training tips from 
              our team of experts to help you achieve your goals.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="glass-card rounded-xl overflow-hidden animate-pulse">
                  <div className="h-52 bg-white/10"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 w-16 bg-white/10 rounded-full"></div>
                    <div className="h-6 w-3/4 bg-white/10 rounded"></div>
                    <div className="h-4 w-full bg-white/10 rounded"></div>
                    <div className="h-4 w-11/12 bg-white/10 rounded"></div>
                    <div className="pt-4 flex justify-between">
                      <div className="h-3 w-16 bg-white/10 rounded"></div>
                      <div className="h-3 w-20 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="img-hover-zoom h-52 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517836357463-dcaaa73c36f2?w=800&auto=format&fit=crop&q=80';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs bg-gym-red/10 text-gym-red px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center text-white/60 text-xs">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-white/70 mb-4 line-clamp-3">{post.content}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center">
                          <User className="h-4 w-4 text-white/60 mr-1" />
                          <span className="text-white/60 text-xs">Admin</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-white/60 mr-1" />
                          <span className="text-white/60 text-xs">5 min read</span>
                        </div>
                      </div>
                      <button className="mt-5 inline-flex items-center text-gym-red hover:text-white transition-colors font-medium text-sm">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-3 text-center text-white/70 py-10">
                  No blog posts found. Check back soon for new content!
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
