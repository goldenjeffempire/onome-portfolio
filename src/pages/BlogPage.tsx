import { useState, lazy, Suspense } from "react";

const Blog = lazy(() => import("../components/Blog"));
const BlogPost = lazy(() => import("../components/BlogPost"));

const BlogPage = () => {
  const [selectedBlogPost, setSelectedBlogPost] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <section id="blog" aria-label="Blog section">
          {selectedBlogPost ? (
            <BlogPost postId={selectedBlogPost} onBack={() => setSelectedBlogPost(null)} />
          ) : (
            <Blog onPostSelect={(postId) => setSelectedBlogPost(postId)} />
          )}
        </section>
      </Suspense>
    </div>
  );
};

export default BlogPage;
