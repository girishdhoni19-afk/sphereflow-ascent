import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Brief from "@/components/Brief";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Brief />
      <footer className="border-t border-subtle px-6 py-10 text-center text-sm text-muted-foreground md:px-16">
        © {new Date().getFullYear()} SphereFlow. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
