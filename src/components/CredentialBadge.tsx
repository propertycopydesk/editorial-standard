import { LucideIcon } from "lucide-react";

interface CredentialBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CredentialBadge = ({ icon: Icon, title, description }: CredentialBadgeProps) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-muted rounded">
      <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div>
        <h4 className="font-sans font-medium text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground font-sans">{description}</p>
      </div>
    </div>
  );
};

export default CredentialBadge;
