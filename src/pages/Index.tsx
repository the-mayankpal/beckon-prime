import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import SocialProof from "@/components/SocialProof";
import ImageGrid from "@/components/ImageGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(220_15%_10%)] via-background to-[hsl(220_15%_4%)]">
      {/* Subtle ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Main content */}
      <div className="relative w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
        <Header />
        
        {/* Hero Section */}
        <section className="text-center pt-16 sm:pt-24 pb-20 space-y-8">
          <h1 
            className="text-[clamp(40px,6vw,64px)] font-bold text-foreground leading-[1.1] tracking-[-0.02em] max-w-[720px] mx-auto animate-fade-up opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            Be First in Line for the Future
          </h1>
          
          <p 
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed animate-fade-up opacity-0 animation-delay-100"
            style={{ animationFillMode: 'forwards', color: 'rgba(255,255,255,0.65)' }}
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
        <section className="pb-16">
          <ImageGrid />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
