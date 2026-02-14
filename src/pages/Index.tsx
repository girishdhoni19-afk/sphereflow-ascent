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
        <section className="flex justify-center px-6 py-12 md:px-16 md:py-16">
          <div className="w-full max-w-[860px]">
            <video
              autoPlay
              muted
              playsInline
              className="mx-auto w-full rounded-2xl object-contain"
              style={{ maxHeight: '450px' }}
              aria-hidden="true"
            >
              <source
                src="https://res.cloudinary.com/dookkg2ys/video/upload/v1771076609/InShot_20260214_190555009_akkua0.mp4"
                type="video/mp4"
              />
            </video>
          </div>
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
