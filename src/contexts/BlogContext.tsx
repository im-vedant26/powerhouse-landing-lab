
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  where,
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from 'sonner';

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  imageUrl: string;
  createdAt?: Timestamp;
};

type BlogContextType = {
  posts: BlogPost[];
  loading: boolean;
  addPost: (post: Omit<BlogPost, 'id' | 'date' | 'createdAt'>) => Promise<boolean>;
  updatePost: (id: string, updatedPost: Partial<BlogPost>) => Promise<boolean>;
  deletePost: (id: string) => Promise<boolean>;
  getPostById: (id: string) => BlogPost | undefined;
  searchPosts: (query: string) => BlogPost[];
  refreshPosts: () => Promise<void>;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Initial sample data (will be used if no posts exist in Firestore)
const initialPosts: Omit<BlogPost, 'id' | 'createdAt'>[] = [
  {
    title: '5 Tips for a Healthier Lifestyle',
    content: 'Discover simple yet effective strategies to improve your overall health and well-being.',
    category: 'Fitness',
    date: 'Nov 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-dcaaa73c36f2?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Effective Home Workout Routines',
    content: 'Stay fit from the comfort of your home with these easy-to-follow workout routines.',
    category: 'Workouts',
    date: 'Nov 10, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1552611026-768999931993?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'The Importance of Protein in Your Diet',
    content: 'Learn why protein is essential for muscle growth and overall health, and how to incorporate it into your diet.',
    category: 'Nutrition',
    date: 'Nov 05, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1560787375-51f824c6faf4?w=800&auto=format&fit=crop&q=80'
  }
];

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch posts from Firestore
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'blog_posts'));
      
      if (querySnapshot.empty) {
        // If no posts exist yet, seed with initial data
        await seedInitialPosts();
        await fetchPosts(); // Fetch again after seeding
        return;
      }
      
      const fetchedPosts: BlogPost[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedPosts.push({
          id: doc.id,
          title: data.title,
          content: data.content,
          category: data.category,
          date: data.date,
          imageUrl: data.imageUrl,
          createdAt: data.createdAt
        });
      });
      
      // Sort by createdAt descending (newest first)
      fetchedPosts.sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return b.createdAt.seconds - a.createdAt.seconds;
      });
      
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts: ", error);
      toast.error("Failed to load blog posts");
    } finally {
      setLoading(false);
    }
  };

  // Seed initial posts if no posts exist
  const seedInitialPosts = async () => {
    try {
      const batch = [];
      for (const post of initialPosts) {
        batch.push(addDoc(collection(db, 'blog_posts'), {
          ...post,
          createdAt: serverTimestamp()
        }));
      }
      await Promise.all(batch);
      console.log("Initial blog posts seeded successfully");
    } catch (error) {
      console.error("Error seeding initial posts: ", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async (post: Omit<BlogPost, 'id' | 'date' | 'createdAt'>) => {
    try {
      const newPost = {
        ...post,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        }),
        createdAt: serverTimestamp()
      };
      
      await addDoc(collection(db, 'blog_posts'), newPost);
      await fetchPosts(); // Refresh posts after adding
      return true;
    } catch (error) {
      console.error("Error adding post: ", error);
      return false;
    }
  };

  const updatePost = async (id: string, updatedPost: Partial<BlogPost>) => {
    try {
      const postRef = doc(db, 'blog_posts', id);
      
      // Remove id and createdAt if they exist in the updatedPost object
      const { id: _, createdAt: __, ...updateData } = updatedPost;
      
      await updateDoc(postRef, updateData);
      await fetchPosts(); // Refresh posts after updating
      return true;
    } catch (error) {
      console.error("Error updating post: ", error);
      return false;
    }
  };

  const deletePost = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'blog_posts', id));
      await fetchPosts(); // Refresh posts after deleting
      return true;
    } catch (error) {
      console.error("Error deleting post: ", error);
      return false;
    }
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

  const refreshPosts = async () => {
    await fetchPosts();
  };

  return (
    <BlogContext.Provider value={{ 
      posts, 
      loading,
      addPost, 
      updatePost, 
      deletePost, 
      getPostById,
      searchPosts,
      refreshPosts
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
