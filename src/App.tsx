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
import RoadmapArticle from "./pages/RoadmapArticle";
import RecessionArticle from "./pages/RecessionArticle";
import SchemaArticle from "./pages/SchemaArticle";
import CommissionArticle from "./pages/CommissionArticle";
import SEOPlaybookArticle from "./pages/SEOPlaybookArticle";
import RedfInChatGPTArticle from "./pages/RedfinChatGPTArticle";
import RentVsBuyAIArticle from "./pages/RentVsBuyAIArticle";
import ZillowVsChatGPTArticle from "./pages/ZillowVsChatGPTArticle";
import BuyersMarketsArticle from "./pages/BuyersMarketShiftArticle.tsx";
import CommissionDiscoveryArticle from "./pages/CommissionDiscoveryArticle";
import FirstTimeBuyersArticle from "./pages/FirstTimeBuyersArticle";
import SALTDeductionArticle from "./pages/SALTDeductionArticle";
import PriceCutsRelistingsArticle from "./pages/PriceCutsRelistingsArticle";
import SFAustinAIContentArticle from "./pages/SFAustinAIContentArticle";

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
          <Route path="/blog/the-60-day-ai-visibility-roadmap-for-real-estate-agents" element={<RoadmapArticle />} />
          <Route path="/blog/local-authority-vs-paid-ads-which-strategy-survives-a-recession" element={<RecessionArticle />} />
          <Route path="/blog/schema-markup-for-real-estate-the-missing-piece-in-your-ai-strategy" element={<SchemaArticle />} />
          <Route path="/blog/commission-compression-2026-how-top-agents-build-market-moats" element={<CommissionArticle />} />
          <Route path="/blog/the-seo-playbook-just-split-in-two-heres-what-actually-changed" element={<SEOPlaybookArticle />} />
          <Route path="/blog/redfin-realtor-chatgpt-ai-search-agents" element={<RedfInChatGPTArticle />} />
          <Route path="/blog/rent-vs-buy-ai-search-question" element={<RentVsBuyAIArticle />} />
          <Route path="/blog/listing-found-zillow-not-chatgpt" element={<ZillowVsChatGPTArticle />} />
          <Route path="/blog/38-metros-buyers-markets-agent-content" element={<BuyersMarketsArticle />} />
          <Route path="/blog/commission-squeeze-discovery-problem" element={<CommissionDiscoveryArticle />} />
          <Route path="/blog/first-time-buyers-40-year-low-content-strategy" element={<FirstTimeBuyersArticle />} />
          <Route path="/blog/salt-deduction-changed-real-estate-content" element={<SALTDeductionArticle />} />
          <Route path="/blog/record-price-cuts-relistings-ai-visibility" element={<PriceCutsRelistingsArticle />} />
          <Route path="/blog/san-francisco-austin-ai-content-lesson" element={<SFAustinAIContentArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
