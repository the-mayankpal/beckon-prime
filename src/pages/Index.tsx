import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import SocialProof from "@/components/SocialProof";
import ImageGrid from "@/components/ImageGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Ambient background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-[hsl(220_15%_4%)] pointer-events-none" />
      
      {/* Subtle glow effect */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Main container */}
      <div className="relative w-full max-w-[1200px] gradient-dark rounded-[20px] shadow-container overflow-hidden">
        <div className="p-6 sm:p-10 lg:p-12">
          <Header />
          
          {/* Hero Section */}
          <section className="text-center pt-12 pb-16 space-y-8">
            <h1 
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-foreground leading-[1.1] tracking-[-0.02em] animate-fade-up opacity-0"
              style={{ animationFillMode: 'forwards' }}
            >
              Be First in Line for the Future
            </h1>
            
            <p 
              className="text-base sm:text-lg text-secondary max-w-xl mx-auto leading-relaxed animate-fade-up opacity-0 animation-delay-100"
              style={{ animationFillMode: 'forwards', color: 'hsl(var(--text-secondary))' }}
            >
              We're building something awesome — and you're invited. Join our waitlist to get early access, exclusive updates, and a sneak peek before anyone else.
            </p>
            
            <div 
              className="pt-4 animate-fade-up opacity-0 animation-delay-200"
              style={{ animationFillMode: 'forwards' }}
            >
              <WaitlistForm />
            </div>
            
            <div 
              className="pt-2 opacity-0 animate-fade-up animation-delay-300"
              style={{ animationFillMode: 'forwards' }}
            >
              <SocialProof />
            </div>
          </section>
          
          {/* Image Grid */}
          <section className="pb-8">
            <ImageGrid />
          </section>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
