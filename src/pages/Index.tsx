import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import SocialProof from "@/components/SocialProof";
import ImageGrid from "@/components/ImageGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-[hsl(220_15%_10%)] via-background to-[hsl(220_15%_4%)] flex flex-col">
      {/* Subtle ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Main content */}
      <div className="relative w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col h-full">
        <Header />
        
        {/* Hero Section */}
        <section className="text-center py-6 space-y-4 flex-shrink-0">
          <h1 
            className="text-[clamp(32px,5vw,56px)] font-bold text-foreground leading-[1.1] tracking-[-0.02em] max-w-[720px] mx-auto animate-fade-up opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            Be First in Line for the Future
          </h1>
          
          <p 
            className="text-sm sm:text-base max-w-lg mx-auto leading-relaxed animate-fade-up opacity-0 animation-delay-100"
            style={{ animationFillMode: 'forwards', color: 'rgba(255,255,255,0.65)' }}
          >
            We're building something awesome — and you're invited. Join our waitlist to get early access, exclusive updates, and a sneak peek before anyone else.
          </p>
          
          <div 
            className="pt-2 animate-fade-up opacity-0 animation-delay-200"
            style={{ animationFillMode: 'forwards' }}
          >
            <WaitlistForm />
          </div>
          
          <div 
            className="opacity-0 animate-fade-up animation-delay-300"
            style={{ animationFillMode: 'forwards' }}
          >
            <SocialProof />
          </div>
        </section>
        
        {/* Image Grid - takes remaining space */}
        <section className="flex-1 min-h-0 pb-2">
          <ImageGrid />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
