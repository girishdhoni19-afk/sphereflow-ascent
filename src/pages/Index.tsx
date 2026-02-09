import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhySphereFlow from "@/components/WhySphereFlow";
import Portfolio from "@/components/Portfolio";
import Brief from "@/components/Brief";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CursorGlow />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <section className="px-6 md:px-16">
          <video
            autoPlay
            muted
            playsInline
            className="w-full rounded-2xl"
            aria-hidden="true"
          >
            <source
              src="https://res.cloudinary.com/dookkg2ys/video/upload/v1770610888/1000038328_1_r8iiyi.mp4"
              type="video/mp4"
            />
          </video>
        </section>
        <Services />
        <WhySphereFlow />
        <Portfolio />
        <Brief />
        <footer className="border-t border-subtle px-6 py-8 md:px-16">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SphereFlow. All rights reserved.
            </span>
            <a
              href="mailto:sphereflow877@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              sphereflow877@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
