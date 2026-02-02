import { Link } from "react-router-dom";

const SimpleFooter = () => {
  return (
    <footer className="bg-muted py-10">
      <div className="container mx-auto px-6 max-w-[1200px] text-center">
        {/* Logo */}
        <p className="text-xl font-semibold text-foreground mb-4">
          PropertyCopyDesk
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-4">
          <Link
            to="/about"
            className="text-[15px] text-muted-foreground hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-[15px] text-muted-foreground hover:underline"
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className="text-[15px] text-muted-foreground hover:underline"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-[15px] text-muted-foreground hover:underline"
          >
            Terms
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground/70">
          © {new Date().getFullYear()} PropertyCopyDesk. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SimpleFooter;
