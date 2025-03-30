
import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { toast } from 'sonner';
import { useBlog, BlogPost } from '@/contexts/BlogContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface EditPostModalProps {
  post: BlogPost;
  onClose: () => void;
}

const EditPostModal: React.FC<EditPostModalProps> = ({ post, onClose }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [category, setCategory] = useState(post.category);
  const [imageUrl, setImageUrl] = useState(post.imageUrl);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { updatePost } = useBlog();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !category.trim() || !imageUrl.trim()) {
      toast.error('Please fill out all fields');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      updatePost(post.id, {
        title,
        content,
        category,
        imageUrl
      });
      
      toast.success('Post updated successfully');
      onClose();
      setIsSubmitting(false);
    }, 800); // Simulate API call
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gym-darkergray border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl">Edit Post</DialogTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-4 h-8 w-8 p-0 text-white/70 hover:text-white hover:bg-white/10"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <label htmlFor="edit-title" className="text-white block mb-2">
              Post Title
            </label>
            <Input
              id="edit-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="bg-white/5 border-white/10 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="edit-category" className="text-white block mb-2">
              Category
            </label>
            <select
              id="edit-category"
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
            <label htmlFor="edit-imageUrl" className="text-white block mb-2">
              Image URL
            </label>
            <Input
              id="edit-imageUrl"
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
            <label htmlFor="edit-content" className="text-white block mb-2">
              Content
            </label>
            <Textarea
              id="edit-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              className="min-h-[200px] bg-white/5 border-white/10 text-white"
              required
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              className="mr-2 bg-transparent border-white/20 text-white hover:bg-white/10"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gym-red hover:bg-opacity-90 text-white"
              disabled={isSubmitting}
            >
              <Save className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPostModal;
