
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBlog } from '@/contexts/BlogContext';

const Blog = () => {
  const { posts, loading } = useBlog();
  
  // Take only the first 3 posts for the homepage
  const displayPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-gym-lightgray">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <span className="text-gym-red uppercase tracking-wider font-medium">
            Latest News
          </span>
          <h2 className="heading-md text-white mt-2 mb-6">
            Stay Updated with Our Blog
          </h2>
          <p className="text-white/80 leading-relaxed">
            Get the latest fitness tips, workout routines, and nutrition advice
            from our blog. Stay informed and achieve your fitness goals with
            Power House Gym.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
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
            {displayPosts.length > 0 ? (
              displayPosts.map((post) => (
                <article key={post.id} className="glass-card rounded-xl overflow-hidden animate-fade-in">
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
                    <span className="text-sm bg-gym-red/10 text-gym-red px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-white/60 text-sm">5 min read</span>
                      <span className="text-white/60 text-sm">{post.date}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-3 text-center text-white/70 py-10">
                No blog posts found.
              </div>
            )}
          </div>
        )}

        <div className="text-center mt-12 animate-fade-in">
          <Link
            to="/blog"
            className="inline-flex items-center text-gym-red hover:text-white transition-colors font-medium"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
