
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Blog Post 1 */}
          <article className="glass-card rounded-xl overflow-hidden animate-fade-in">
            <div className="img-hover-zoom h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517836357463-dcaaa73c36f2?w=800&auto=format&fit=crop&q=80"
                alt="Fitness Tips"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm bg-gym-red/10 text-gym-red px-3 py-1 rounded-full">
                Fitness
              </span>
              <h3 className="text-lg font-bold text-white mt-2 mb-3">
                5 Tips for a Healthier Lifestyle
              </h3>
              <p className="text-white/70 mb-4 line-clamp-3">
                Discover simple yet effective strategies to improve your
                overall health and well-being.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-white/60 text-sm">5 min read</span>
                <span className="text-white/60 text-sm">Nov 15, 2023</span>
              </div>
            </div>
          </article>

          {/* Example Blog Post 2 */}
          <article className="glass-card rounded-xl overflow-hidden animate-fade-in">
            <div className="img-hover-zoom h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552611026-768999931993?w=800&auto=format&fit=crop&q=80"
                alt="Workout Routines"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm bg-gym-red/10 text-gym-red px-3 py-1 rounded-full">
                Workouts
              </span>
              <h3 className="text-lg font-bold text-white mt-2 mb-3">
                Effective Home Workout Routines
              </h3>
              <p className="text-white/70 mb-4 line-clamp-3">
                Stay fit from the comfort of your home with these easy-to-follow
                workout routines.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-white/60 text-sm">7 min read</span>
                <span className="text-white/60 text-sm">Nov 10, 2023</span>
              </div>
            </div>
          </article>

          {/* Example Blog Post 3 */}
          <article className="glass-card rounded-xl overflow-hidden animate-fade-in">
            <div className="img-hover-zoom h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560787375-51f824c6faf4?w=800&auto=format&fit=crop&q=80"
                alt="Nutrition Tips"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm bg-gym-red/10 text-gym-red px-3 py-1 rounded-full">
                Nutrition
              </span>
              <h3 className="text-lg font-bold text-white mt-2 mb-3">
                The Importance of Protein in Your Diet
              </h3>
              <p className="text-white/70 mb-4 line-clamp-3">
                Learn why protein is essential for muscle growth and overall
                health, and how to incorporate it into your diet.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-white/60 text-sm">6 min read</span>
                <span className="text-white/60 text-sm">Nov 05, 2023</span>
              </div>
            </div>
          </article>
        </div>

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
