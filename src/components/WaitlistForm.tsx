import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("You're on the list! We'll be in touch soon.");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
    >
      <Input
        type="email"
        placeholder="name@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-12 bg-[hsl(var(--input-bg))] border-[hsl(var(--glass-border))] rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-all duration-200 hover:glow-accent hover:scale-[1.02] active:scale-[0.98]"
      >
        {isLoading ? "Joining..." : "Subscribe"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
