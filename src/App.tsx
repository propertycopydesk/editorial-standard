import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import BlogPost from "./pages/BlogPost";
import ChatGPTArticle from "./pages/ChatGPTArticle";
import AIVisibilityArticle from "./pages/AIVisibilityArticle";
import NotFound from "./pages/NotFound";
import ZillowArticle from "./pages/ZillowArticle";
import PerplexityArticle from "./pages/PerplexityArticle";
import AgentsArticle from "./pages/AgentsArticle";

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
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/service" element={<Navigate to="/" replace />} />
          <Route path="/consulting" element={<Navigate to="/" replace />} />
          <Route path="/blog/the-real-estate-agents-guide-to-ranking-in-perplexity-chatgpt-and-gemini" element={<PerplexityArticle />} />
          {/* pricing route removed */}
          <Route path="/blog/5-real-estate-agents-who-dominate-ai-search" element={<AgentsArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
