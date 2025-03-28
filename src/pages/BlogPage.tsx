
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { CalendarDays, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = 'Power House Gym - Blog';
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: '10 Effective Ways to Build Muscle Mass',
      excerpt: 'Discover science-backed strategies to maximize muscle growth and strength through proper training and nutrition.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80',
      date: 'October 12, 2023',
      author: 'Alex Johnson',
      readTime: '6 min read',
      category: 'Training',
    },
    {
      id: 2,
      title: 'Nutrition Guide: Eating for Performance',
      excerpt: 'Learn how to fuel your workouts with the right balance of macronutrients for optimal performance and recovery.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80',
      date: 'September 28, 2023',
      author: 'Sarah Miller',
      readTime: '8 min read',
      category: 'Nutrition',
    },
    {
      id: 3,
      title: 'The Benefits of High-Intensity Interval Training',
      excerpt: 'Explore how HIIT can transform your fitness routine and deliver maximum results in minimum time.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
      date: 'September 15, 2023',
      author: 'Mike Williams',
      readTime: '5 min read',
      category: 'Cardio',
    },
    {
      id: 4,
      title: 'Mind-Muscle Connection: The Key to Better Results',
      excerpt: 'Understanding the science behind the mind-muscle connection and how it can significantly improve your workout quality.',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800&auto=format&fit=crop&q=80',
      date: 'September 5, 2023',
      author: 'David Chen',
      readTime: '7 min read',
      category: 'Training',
    },
    {
      id: 5,
      title: 'Best Recovery Strategies for Serious Athletes',
      excerpt: 'Discover proven recovery techniques that help reduce soreness and prepare your body for the next training session.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
      date: 'August 22, 2023',
      author: 'Lisa Thompson',
      readTime: '9 min read',
      category: 'Recovery',
    },
    {
      id: 6,
      title: 'Designing Your Perfect Workout Plan',
      excerpt: 'Learn how to create a balanced and effective workout routine tailored to your specific goals and lifestyle.',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=80',
      date: 'August 10, 2023',
      author: 'James Wilson',
      readTime: '10 min read',
      category: 'Planning',
    },
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="img-hover-zoom h-52 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
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
                  <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-white/60 mr-1" />
                      <span className="text-white/60 text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-white/60 mr-1" />
                      <span className="text-white/60 text-xs">{post.readTime}</span>
                    </div>
                  </div>
                  <button className="mt-5 inline-flex items-center text-gym-red hover:text-white transition-colors font-medium text-sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
