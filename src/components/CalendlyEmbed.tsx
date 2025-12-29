import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
  className?: string;
  minWidth?: string;
  height?: string;
}

const CalendlyEmbed = ({ 
  url = "https://calendly.com/propertycopydesk/roi-call",
  className = "",
  minWidth = "320px",
  height = "630px"
}: CalendlyEmbedProps) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    script.setAttribute("async", "true");
    head?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth, height }}
    />
  );
};

export default CalendlyEmbed;
