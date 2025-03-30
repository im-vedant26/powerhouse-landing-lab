import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import AdminLayout from '@/components/admin/AdminLayout';
import { useBlog } from '@/contexts/BlogContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const AdminNewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Fitness');
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1517836357463-dcaaa73c36f2?w=800&auto=format&fit=crop&q=80');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { addPost } = useBlog();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !category.trim() || !imageUrl.trim()) {
      toast.error('Please fill out all fields');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      addPost({
        title,
        content,
        category,
        imageUrl
      });
      
      toast.success('Post created successfully');
      navigate('/admin/dashboard');
      setIsSubmitting(false);
    }, 800); // Simulate API call
  };

  return (
    <AdminLayout title="Create New Post">
      <Button 
        variant="outline" 
        className="mb-6 bg-transparent border-white/20 text-white hover:bg-white/10"
        onClick={() => navigate('/admin/dashboard')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Button>

      <Card className="glass-card border-white/10">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="text-white block mb-2">
                Post Title
              </label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
                className="bg-white/5 border-white/10 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="text-white block mb-2">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-10 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white"
                required
              >
                <option value="Fitness">Fitness</option>
                <option value="Workouts">Workouts</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Motivation">Motivation</option>
              </select>
            </div>

            <div>
              <label htmlFor="imageUrl" className="text-white block mb-2">
                Image URL
              </label>
              <Input
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
                className="bg-white/5 border-white/10 text-white"
                required
              />
              {imageUrl && (
                <div className="mt-3 rounded-md overflow-hidden h-32 w-full sm:w-48">
                  <img 
                    src={imageUrl} 
                    alt="Preview" 
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517836357463-dcaaa73c36f2?w=800&auto=format&fit=crop&q=80';
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="content" className="text-white block mb-2">
                Content
              </label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content here..."
                className="min-h-[200px] bg-white/5 border-white/10 text-white"
                required
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-gym-red hover:bg-opacity-90 text-white"
                disabled={isSubmitting}
              >
                <Save className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Saving...' : 'Save Post'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminNewPost;
