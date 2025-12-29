import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

interface BlogPostCardProps {
  post: BlogPost;
  variant?: "featured" | "default" | "compact";
}

const BlogPostCard = ({ post, variant = "default" }: BlogPostCardProps) => {
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (variant === "compact") {
    return (
      <Link 
        to={`/blog/${post.slug}`}
        className="flex gap-4 group py-3 border-b border-border last:border-0"
      >
        <div className="flex-1">
          <h4 className="font-serif text-sm text-foreground group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">{formattedDate}</p>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link 
        to={`/blog/${post.slug}`}
        className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img 
            src={post.heroImage} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs font-sans font-medium rounded">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground text-sm font-sans mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{post.readTime} min read</span>
            </div>
            
            <span className="flex items-center gap-1 text-accent text-sm font-sans font-medium group-hover:gap-2 transition-all">
              Read more <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-[16/9] bg-muted relative overflow-hidden">
        <img 
          src={post.heroImage} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs font-sans font-medium rounded">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm font-sans mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>{post.readTime} min read</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
