// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Initialize GA4 (call this in main.tsx or App.tsx)
export const initGA4 = (measurementId: string) => {
  if (typeof window === 'undefined') return;
  
  // Add gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
  // Also log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, parameters);
  }
};

// Pre-defined event trackers
export const analytics = {
  // Page views
  pageView: (pagePath: string, pageTitle?: string) => {
    trackEvent('page_view', { page_path: pagePath, page_title: pageTitle || '' });
  },

  // Blog events
  blogPostView: (postSlug: string, postTitle: string) => {
    trackEvent('blog_post_view', { post_slug: postSlug, post_title: postTitle });
  },

  // Lead magnet events
  leadMagnetDownload: (magnet: string) => {
    trackEvent('lead_magnet_download', { magnet_name: magnet });
  },

  // Form submissions
  formSubmit: (formName: string, formLocation: string) => {
    trackEvent('form_submit', { form_name: formName, form_location: formLocation });
  },

  // CTA clicks
  ctaClick: (ctaName: string, ctaLocation: string) => {
    trackEvent('cta_click', { cta_name: ctaName, cta_location: ctaLocation });
  },

  // Calendly events
  calendlyClick: (buttonLocation: string) => {
    trackEvent('calendly_click', { button_location: buttonLocation });
  },

  calendlyBooking: (eventType: string) => {
    trackEvent('calendly_booking', { event_type: eventType });
  },

  // ROI Calculator
  roiCalculatorUsed: (agentCount: number, monthlySavings: number) => {
    trackEvent('roi_calculator_used', { agent_count: agentCount, monthly_savings: monthlySavings });
  },

  // Service orders
  serviceOrderStart: (tier: string, price: number) => {
    trackEvent('service_order_start', { tier, price });
  },

  // Waitlist signups
  waitlistSignup: (email: string) => {
    trackEvent('waitlist_signup', { signup_location: 'toolkit_waitlist' });
  },

  // Exit intent popup
  exitIntentShown: () => {
    trackEvent('exit_intent_shown');
  },

  exitIntentConverted: () => {
    trackEvent('exit_intent_converted');
  },

  // Newsletter signup
  newsletterSignup: (location: string) => {
    trackEvent('newsletter_signup', { signup_location: location });
  },

  // Social share
  socialShare: (platform: string, postSlug?: string) => {
    trackEvent('social_share', { platform, post_slug: postSlug || '' });
  },
};
