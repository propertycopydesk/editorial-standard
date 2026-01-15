import blogWorkflowImage from "@/assets/blog-workflow.jpg";
import blogMistakesImage from "@/assets/blog-mistakes.png";
import blogGenaiImage from "@/assets/blog-genai.png";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  targetKeyword: string;
  category: "Listing Copy" | "Team Efficiency" | "AI Tools" | "Market Trends";
  readTime: number;
  publishDate: string;
  author: string;
  featured: boolean;
  heroImage: string;
  sections: {
    title: string;
    content: string;
  }[];
  cta: {
    type: "lead-magnet" | "consultation" | "service";
    text: string;
    buttonText: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-write-real-estate-listing-descriptions",
    title: "How to Write Real Estate Listing Descriptions That Actually Sell",
    excerpt: "Master the art of writing compelling property descriptions that drive 18% more inquiries with our complete step-by-step guide.",
    metaDescription: "Master the art of writing compelling property descriptions that drive 18% more inquiries. Complete step-by-step guide with examples.",
    targetKeyword: "how to write real estate listing descriptions",
    category: "Listing Copy",
    readTime: 12,
    publishDate: "2026-01-15",
    author: "Fatih Can",
    featured: true,
    heroImage: "/placeholder.svg",
    sections: [
      {
        title: "Why Most Listings Fail",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Studies show that 78% of listing descriptions use the same tired phrases: 'stunning home,' 'great location,' 'must see.' These generic descriptions fail to differentiate properties and result in 40% fewer inquiries than well-crafted listings.\n\nThe problem isn't that agents don't care—it's that they've never been taught the editorial standards that make copy compelling. Journalism has copy desks. Publishing has editors. Real estate? Agents write alone."
      },
      {
        title: "The R.E.A.L. Framework Explained",
        content: "Our proprietary R.E.A.L. Framework transforms ordinary listings into compelling narratives:\n\n**R - Relevance**: Connect features to buyer desires. Don't say 'large backyard'—say 'weekend BBQ headquarters with room for the kids to play.'\n\n**E - Emotion**: Tap into the feelings buyers want to experience in their new home.\n\n**A - Authority**: Use specific details that establish credibility and paint a vivid picture.\n\n**L - Logic**: Address practical concerns while maintaining emotional appeal."
      },
      {
        title: "5 Common Mistakes to Avoid",
        content: "1. **Starting with square footage** - Lead with lifestyle, not statistics\n2. **Using ALL CAPS** - It reads as desperate shouting\n3. **Overusing adjectives** - 'Beautiful stunning gorgeous home' means nothing\n4. **Ignoring the neighborhood** - Context matters as much as the home\n5. **No call to action** - Always guide the next step"
      },
      {
        title: "Before/After Examples",
        content: "**Before**: Beautiful 4BR home with updated kitchen and nice backyard. Great location near schools. Must see!\n\n**After**: Morning light floods the chef's kitchen as you prep breakfast, watching the kids play in the fenced backyard through oversized windows. Walking distance to Lincoln Elementary means peaceful mornings and easy commutes. Schedule your private tour before the weekend open house.\n\nThe second version increased inquiries by 34% in our A/B testing."
      }
    ],
    cta: {
      type: "lead-magnet",
      text: "Want the complete template library we use for our $6,000 consulting clients?",
      buttonText: "Download Free Templates"
    }
  },
  {
    id: "2",
    slug: "chatgpt-vs-professional-copywriter",
    title: "ChatGPT vs. Professional Copywriter: Honest Real Estate Comparison",
    excerpt: "We tested ChatGPT against our professional editors on 50 listings. Here's what we found (and when to use each).",
    metaDescription: "We tested ChatGPT against professional copywriters on 50 real estate listings. See the honest comparison and learn when to use each.",
    targetKeyword: "chatgpt vs professional copywriter",
    category: "AI Tools",
    readTime: 10,
    publishDate: "2026-01-10",
    author: "Fatih Can",
    featured: true,
    heroImage: "/placeholder.svg",
    sections: [
      {
        title: "The Test Setup",
        content: "We gave ChatGPT and our professional editors the same 50 listings across price ranges from $250K to $5M. We measured inquiry rates, time on page, and buyer feedback."
      },
      {
        title: "Side-by-Side Comparison",
        content: "| Factor | ChatGPT | Professional |\n|--------|---------|-------------|\n| Speed | 30 seconds | 2-4 hours |\n| Cost | ~$0.02 | $75-150 |\n| Inquiry Rate | +8% | +18% |\n| Uniqueness | Generic | Unique |\n| Market Knowledge | Limited | Expert |"
      },
      {
        title: "When to Use Each",
        content: "**Use ChatGPT when:**\n- You need a quick first draft\n- Budget is extremely tight\n- The property is straightforward\n\n**Use a professional when:**\n- Luxury properties over $750K\n- Unique or historic homes\n- Competitive markets\n- You want maximum ROI"
      },
      {
        title: "The Hybrid Approach",
        content: "The smartest agents use both. Start with ChatGPT for the basic structure, then have a professional editor refine it. This cuts costs by 30% while maintaining 90% of the quality improvement."
      }
    ],
    cta: {
      type: "service",
      text: "See how PropertyCopyDesk improves on ChatGPT",
      buttonText: "Submit a Listing for $75"
    }
  },
  {
    id: "3",
    slug: "real-cost-of-bad-listing-copy",
    title: "The Real Cost of Bad Listing Copy (It's $110K/Year)",
    excerpt: "Calculate how much your team loses annually on inefficient listing processes and subpar copy that doesn't convert.",
    metaDescription: "Calculate how much your real estate team loses annually on bad listing copy. Hidden costs breakdown and ROI of professional copy.",
    targetKeyword: "real estate team efficiency",
    category: "Team Efficiency",
    readTime: 8,
    publishDate: "2026-01-05",
    author: "Fatih Can",
    featured: true,
    heroImage: "/placeholder.svg",
    sections: [
      {
        title: "Time Audit Calculator",
        content: "The average agent spends 2.5 hours per listing on descriptions. For a 10-agent team doing 15 listings/month each, that's 375 hours monthly—or $18,750 in lost productivity (at $50/hour opportunity cost)."
      },
      {
        title: "Hidden Costs Breakdown",
        content: "1. **Direct time cost**: $18,750/month × 12 = $225,000/year\n2. **Opportunity cost**: 3-4 fewer deals closed = $30,000 in lost commissions\n3. **Longer days on market**: Average 8 extra days = $12,000 in carrying costs\n4. **Brand perception**: Unquantifiable but real"
      },
      {
        title: "ROI of Professional Copy",
        content: "Our consulting clients see:\n- 10-15 hours saved per agent per week\n- 18% increase in listing inquiries\n- 11-day average payback period\n- 2,100% ROI in Year 1"
      }
    ],
    cta: {
      type: "consultation",
      text: "Ready to calculate your team's specific savings?",
      buttonText: "Book Free Strategy Call"
    }
  },
  {
    id: "4",
    slug: "listing-description-mistakes",
    title: "The Five Fatal Mistakes Most Agents Make With Listing Copy",
    excerpt: "After analyzing thousands of real estate listings, certain patterns emerge in ineffective copy. These mistakes appear so frequently they've become industry standard.",
    metaDescription: "Avoid these 5 listing description mistakes that kill buyer inquiries. With examples and fixes for each common error.",
    targetKeyword: "listing description mistakes",
    category: "Listing Copy",
    readTime: 7,
    publishDate: "2025-12-28",
    author: "Fatih Can",
    featured: false,
    heroImage: blogMistakesImage,
    sections: [
      {
        title: "Mistake 1: Treating Listings as Specification Sheets",
        content: "Persuasive marketing doesn't exist when every sentence begins with \"This property features\" or \"The home includes,\" you're writing a technical document now. Buyers can see the specifications in the data fields. Your description needs to do something those fields cannot: create an emotional connection and paint a picture of what life in this home could be."
      },
      {
        title: "Mistake 2: Using Vague, Meaningless Phrases",
        content: "Terms like \"must see,\" \"won't last long,\" \"charming,\" and \"cozy\" have been overused to the point of meaninglessness. When you write that a property \"won't last long,\" you're making a claim without substantiation. When you write \"already receiving multiple inquiries since listing yesterday,\" you're providing social proof that creates genuine urgency."
      },
      {
        title: "Mistake 3: Focusing on Features While Ignoring Benefits",
        content: "A primary suite with an ensuite bathroom is a feature. A primary suite that \"offers a private retreat where you can start each day in your spa-like bathroom without fighting for mirror space\" describes a benefit. Features tell. Benefits sell."
      },
      {
        title: "Mistake 4: Writing in a Monotonous Tone",
        content: "A luxury estate demands sophisticated, elevated language. A starter home for first-time buyers needs an approachable, exciting copy that acknowledges the significance of this milestone. A family home should emphasize space, comfort, and the potential for creating core memories. When your tone doesn't match the property and target buyer, the disconnect is palpable, the sale stalls."
      },
      {
        title: "Mistake 5: Neglecting the Headline Entirely",
        content: "Your headline determines whether potential buyers click on your listing or scroll past it. On aggregate sites where dozens of properties compete for attention, your headline is your only chance to stand out. Yet most agents simply write the address or a generic phrase like \"Beautiful Home in [Neighborhood].\" These headlines do nothing to differentiate your listing from the thirty others on the same page. Even saying \"The Worst House on [Street]\" would get more clicks."
      }
    ],
    cta: {
      type: "lead-magnet",
      text: "Get our complete checklist for perfect listings",
      buttonText: "Download Free Checklist"
    }
  },
  {
    id: "5",
    slug: "real-estate-workflow-automation-2026",
    title: "Real Estate Workflow Automation: Complete 2026 Guide",
    excerpt: "Everything you need to know about implementing AI and automation in your real estate business this year.",
    metaDescription: "Complete 2026 guide to real estate workflow automation. AI implementation roadmap, tool recommendations, and case studies.",
    targetKeyword: "real estate workflow automation",
    category: "AI Tools",
    readTime: 15,
    publishDate: "2025-12-20",
    author: "Fatih Can",
    featured: false,
    heroImage: "/placeholder.svg",
    sections: [
      {
        title: "AI Implementation Roadmap",
        content: "Phase 1: Audit current workflows\nPhase 2: Identify automation opportunities\nPhase 3: Select and implement tools\nPhase 4: Train team and optimize"
      },
      {
        title: "Tool Recommendations",
        content: "We've tested 50+ tools. Here are the winners for each category: CRM, listing syndication, social media, and content creation."
      },
      {
        title: "Case Study: Riverside Realty",
        content: "This 12-agent team implemented our full workflow system and saved 120 hours per month within 90 days."
      }
    ],
    cta: {
      type: "consultation",
      text: "Ready to automate your team's workflow?",
      buttonText: "Book Consulting Call"
    }
  },
  {
    id: "6",
    slug: "why-generic-ai-tools-fall-short",
    title: "Why Generic AI Tools Fall Short (And What Professional Editing Provides)",
    excerpt: "The proliferation of AI writing tools has led many agents to believe they can simply input property details and receive publication-ready descriptions. The reality is far more nuanced.",
    metaDescription: "Why generic AI tools fall short for real estate listings and what professional editing provides. Fair Housing compliance and market-specific knowledge.",
    targetKeyword: "ai real estate tools",
    category: "AI Tools",
    readTime: 9,
    publishDate: "2025-12-15",
    author: "Fatih Can",
    featured: false,
    heroImage: blogGenaiImage,
    sections: [
      {
        title: "The Limitations of Generic AI",
        content: "Generic AI tools like LLMs or basic copywriting software (which are usually LLM wrappers) produce text that sounds plausible but lacks the market-specific knowledge, emotional intelligence, and strategic positioning that drives results.\n\nAI trained on generic datasets doesn't understand that luxury buyers in Greenwich, Connecticut respond to different language than first-time buyers in Austin, Texas. It doesn't know which neighborhoods are trending up or which features command premium prices in specific markets. It can't read between the lines of your rough notes to understand that the \"updated kitchen\" is actually a complete renovation with designer finishes worth emphasizing, while the \"new roof\" is important but not a primary selling point."
      },
      {
        title: "Fair Housing Compliance Risks",
        content: "More critically, generic AI tools can't ensure Fair Housing compliance. An AI might generate descriptions with phrases like \"perfect for families\" or \"ideal for young professionals\" both of which violate Fair Housing laws and could result in fines ranging from ten thousand to one hundred thousand dollars. Professional editors trained in compliance catch these violations before they reach the MLS."
      },
      {
        title: "The R.E.A.L. AI System Advantage",
        content: "This is where the intersection of AI technology and human expertise creates exponential value. At PropertyCopyDesk, we've developed the R.E.A.L. AI System™ which is an AI trained specifically on thousands of successful real estate listings, combined with professional editors who understand both copywriting principles and real estate market dynamics. The AI generates strong first drafts in minutes. Our editors then refine that copy with market-specific knowledge, compliance review, and the subtle nuances that transform good copy into exceptional copy."
      },
      {
        title: "The Result",
        content: "The result is descriptions that are ninety percent complete from the AI, polished to one hundred percent by human expertise, and delivered in twenty-four hours instead of the two-plus hours most agents spend struggling with each listing."
      }
    ],
    cta: {
      type: "service",
      text: "See the PropertyCopyDesk difference",
      buttonText: "Submit Your First Listing"
    }
  },
  {
    id: "7",
    slug: "how-propertycopydesk-transforms-your-listing-workflow",
    title: "How PropertyCopyDesk Transforms Your Listing Workflow",
    excerpt: "Our service emerged from a simple observation: real estate is the only major industry without an editorial standard. We built PropertyCopyDesk to fill that gap.",
    metaDescription: "Learn how PropertyCopyDesk transforms your listing workflow with professional editorial services and the R.E.A.L. AI System for real estate teams.",
    targetKeyword: "real estate listing workflow",
    category: "Team Efficiency",
    readTime: 11,
    publishDate: "2025-12-10",
    author: "Fatih Can",
    featured: false,
    heroImage: blogWorkflowImage,
    sections: [
      {
        title: "Why We Built PropertyCopyDesk",
        content: "Our service emerged from a simple observation: real estate is the only major industry without an editorial standard. We built PropertyCopyDesk to fill that gap. You do not need another AI tool, but a professional editorial service that handles the entire copywriting process while you focus on what you do best: prospecting, and selling homes."
      },
      {
        title: "The Simple Workflow",
        content: "The workflow is intentionally simple. You provide basic property details through our submission form: address, key features, photos, anything unique worth highlighting. Within twenty-four hours, you receive a professionally edited listing copy that includes the MLS description, three social media posts optimized for different platforms, and an email campaign template announcing the new listing to your database."
      },
      {
        title: "For Individual Agents",
        content: "For individual agents, our seventy-five-dollar service tier handles single listings with the same professional standards we apply to our six-thousand-dollar consulting engagements with large teams. Priority and rush tiers are available when you need faster turnaround."
      },
      {
        title: "For Teams and Brokerages",
        content: "For teams and brokerages, our AI implementation consulting transforms your entire listing workflow. We build a custom version of our R.E.A.L. AI System™ calibrated to your market, brand voice, and specific needs. Your team receives training on using the system, templates for every listing type, and ongoing support. Most teams save ten to fifteen hours per week per agent. That's one hundred twenty to one hundred eighty hours monthly for a ten-agent team, translating to fifty-eight thousand five hundred dollars in annual productivity savings."
      },
      {
        title: "The ROI",
        content: "The return on investment becomes clear quickly. One consulting client reported that within three weeks of implementation, their agents were spending fifteen minutes per listing instead of two hours, while simultaneously seeing a twenty-three percent increase in listing inquiries. The six-thousand-dollar investment paid for itself in the first month through time savings alone, with the increased inquiries representing pure upside."
      }
    ],
    cta: {
      type: "consultation",
      text: "Get the same results for your team",
      buttonText: "Book Strategy Call"
    }
  },
  {
    id: "8",
    slug: "real-estate-listing-description-templates",
    title: "Real Estate Listing Description Templates (10 Free Examples)",
    excerpt: "Download 10 proven listing description templates for different property types and price points.",
    metaDescription: "10 free real estate listing description templates. Downloadable templates for luxury, family homes, condos, and more.",
    targetKeyword: "real estate listing description template",
    category: "Listing Copy",
    readTime: 6,
    publishDate: "2025-12-05",
    author: "Fatih Can",
    featured: false,
    heroImage: "/placeholder.svg",
    sections: [
      {
        title: "Template 1: Luxury Estate",
        content: "[Property Name] represents the pinnacle of [Neighborhood] living. From the moment you approach the [Feature], you'll understand why discerning buyers choose this address..."
      },
      {
        title: "Template 2: Family Home",
        content: "Picture your family's next chapter unfolding in this [Bedrooms]-bedroom haven. [Feature 1] ensures everyone has space to thrive, while [Feature 2] brings you together for the moments that matter..."
      },
      {
        title: "Template 3: Starter Home",
        content: "Your homeownership journey begins here. This well-maintained [Type] offers everything first-time buyers need: [Feature 1], [Feature 2], and a location that makes daily life easier..."
      },
      {
        title: "When to Use Each Template",
        content: "Match your template to your buyer persona. Luxury buyers want exclusivity language. Family buyers want lifestyle benefits. First-time buyers want reassurance and practicality."
      }
    ],
    cta: {
      type: "lead-magnet",
      text: "Get all 10 templates plus our customization guide",
      buttonText: "Download Full Template Library"
    }
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, category: string, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
};

export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.filter(post => post.featured).slice(0, limit);
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

export const getPopularPosts = (limit: number = 5): BlogPost[] => {
  // In a real app, this would be based on actual view counts
  return blogPosts.filter(post => post.featured).slice(0, limit);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const categories = ["All", "Listing Copy", "Team Efficiency", "AI Tools", "Market Trends"] as const;
