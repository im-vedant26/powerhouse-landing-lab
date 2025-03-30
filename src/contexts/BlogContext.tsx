
import React, { createContext, useContext, useState, useEffect } from 'react';

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  imageUrl: string;
};

type BlogContextType = {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => void;
  updatePost: (id: string, updatedPost: Partial<BlogPost>) => void;
  deletePost: (id: string) => void;
  getPostById: (id: string) => BlogPost | undefined;
  searchPosts: (query: string) => BlogPost[];
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Initial sample data
const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Tips for a Healthier Lifestyle',
    content: 'Discover simple yet effective strategies to improve your overall health and well-being.',
    category: 'Fitness',
    date: 'Nov 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-dcaaa73c36f2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Effective Home Workout Routines',
    content: 'Stay fit from the comfort of your home with these easy-to-follow workout routines.',
    category: 'Workouts',
    date: 'Nov 10, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1552611026-768999931993?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'The Importance of Protein in Your Diet',
    content: 'Learn why protein is essential for muscle growth and overall health, and how to incorporate it into your diet.',
    category: 'Nutrition',
    date: 'Nov 05, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1560787375-51f824c6faf4?w=800&auto=format&fit=crop&q=80'
  }
];

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // In a real app, you'd fetch posts from an API
    const savedPosts = localStorage.getItem('blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(initialPosts);
      localStorage.setItem('blog_posts', JSON.stringify(initialPosts));
    }
  }, []);

  const savePosts = (updatedPosts: BlogPost[]) => {
    setPosts(updatedPosts);
    localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
  };

  const addPost = (post: Omit<BlogPost, 'id' | 'date'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    };
    
    const updatedPosts = [...posts, newPost];
    savePosts(updatedPosts);
  };

  const updatePost = (id: string, updatedPost: Partial<BlogPost>) => {
    const updatedPosts = posts.map(post => 
      post.id === id ? { ...post, ...updatedPost } : post
    );
    savePosts(updatedPosts);
  };

  const deletePost = (id: string) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    savePosts(updatedPosts);
  };

  const getPostById = (id: string) => {
    return posts.find(post => post.id === id);
  };

  const searchPosts = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowerCaseQuery) || 
      post.content.toLowerCase().includes(lowerCaseQuery)
    );
  };

  return (
    <BlogContext.Provider value={{ 
      posts, 
      addPost, 
      updatePost, 
      deletePost, 
      getPostById,
      searchPosts
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
