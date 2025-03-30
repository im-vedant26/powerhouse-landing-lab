import React, { useState } from 'react';
import { Plus, Search, Pencil, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import AdminLayout from '@/components/admin/AdminLayout';
import { useBlog, BlogPost } from '@/contexts/BlogContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from '@/components/ui/alert-dialog';
import EditPostModal from '@/components/admin/EditPostModal';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [postToEdit, setPostToEdit] = useState<BlogPost | null>(null);
  const { posts, searchPosts, deletePost, getPostById } = useBlog();
  const navigate = useNavigate();

  const filteredPosts = searchQuery ? searchPosts(searchQuery) : posts;

  const handleDeletePost = () => {
    if (postToDelete) {
      deletePost(postToDelete);
      toast.success('Post deleted successfully');
      setPostToDelete(null);
    }
  };

  const handleEditClick = (id: string) => {
    const post = getPostById(id);
    if (post) {
      setPostToEdit(post);
    }
  };

  return (
    <AdminLayout title="Blog Posts">
      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white w-full"
          />
        </div>
        <Button 
          className="bg-gym-red hover:bg-opacity-90 text-white"
          onClick={() => navigate('/admin/new-post')}
        >
          <Plus className="mr-2 h-4 w-4" /> New Post
        </Button>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="glass-card p-8 text-center text-white/70">
          {searchQuery ? 'No posts match your search' : 'No posts yet. Create your first post!'}
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="glass-card overflow-hidden animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                <div className="img-hover-zoom h-40 md:h-full overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                    <div>
                      <span className="text-sm bg-gym-red/10 text-gym-red px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-white/60 text-sm ml-3">{post.date}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleEditClick(post.id)}
                      >
                        <Pencil className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => setPostToDelete(post.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-3">
                    {post.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!postToDelete} onOpenChange={() => setPostToDelete(null)}>
        <AlertDialogContent className="bg-gym-darkergray border-white/10 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-white/70">
              This action cannot be undone. This will permanently delete the blog post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent border-white/20 text-white hover:bg-white/10">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              className="bg-gym-red text-white hover:bg-gym-red/90"
              onClick={handleDeletePost}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit Post Modal */}
      {postToEdit && (
        <EditPostModal 
          post={postToEdit} 
          onClose={() => setPostToEdit(null)} 
        />
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;
