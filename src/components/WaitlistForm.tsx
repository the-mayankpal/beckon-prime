import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255);

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from("waitlist")
        .insert({ email: validation.data });

      if (error) {
        if (error.code === "23505") {
          toast.error("You're already on the waitlist!");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
        return;
      }
      
      toast.success("You're on the list! We'll be in touch soon.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
