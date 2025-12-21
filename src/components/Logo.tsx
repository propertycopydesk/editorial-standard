const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
        PROPERTY
      </span>
      <div className="w-16 h-px bg-accent my-1" />
      <span className="font-serif text-lg md:text-xl tracking-[0.3em] text-foreground">
        COPY DESK
      </span>
    </div>
  );
};

export default Logo;
