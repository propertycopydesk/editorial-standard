import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ChatGPTArticle from "./pages/ChatGPTArticle";
import AIVisibilityArticle from "./pages/AIVisibilityArticle";
import NotFound from "./pages/NotFound";
import ZillowArticle from "./pages/ZillowArticle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/how-real-estate-agents-get-cited-by-chatgpt" element={<ChatGPTArticle />} />
          <Route path="/blog/why-your-real-estate-website-doesnt-show-up-in-chatgpt" element={<AIVisibilityArticle />} />
          <Route path="/blog/ai-visibility-for-real-estate-agents-why-zillow-leads-wont-save-you" element={<ZillowArticle />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* pricing route removed */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
