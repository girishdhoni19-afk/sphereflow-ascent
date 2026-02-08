import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const Brief = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vision, setVision] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const { error: dbError } = await supabase
        .from("briefs")
        .insert({ name, email, vision });

      if (dbError) throw dbError;

      await supabase.functions.invoke("send-brief-email", {
        body: { name, email, vision },
      });

      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("Brief submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="brief" className="px-6 py-32 md:px-16">
      <AnimatedSection>
        <div className="shimmer-hover mx-auto max-w-2xl rounded-3xl border border-subtle bg-card-glass p-10 md:p-14">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-subtle bg-accent/20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-semibold tracking-wider text-foreground">
                  Your vision is in our inbox.
                </h3>
                <p className="text-muted-foreground">
                  Expect a response within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="mb-2 text-3xl font-semibold tracking-widest text-foreground md:text-4xl">
                  Submit a Brief
                </h2>
                <p className="mb-10 text-muted-foreground">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border border-subtle bg-transparent px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border border-subtle bg-transparent px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    required
                    disabled={isSubmitting}
                  />
                  <textarea
                    placeholder="Tell us about your project / vision"
                    value={vision}
                    onChange={(e) => setVision(e.target.value)}
                    rows={5}
                    className="resize-none rounded-xl border border-subtle bg-transparent px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    required
                    disabled={isSubmitting}
                  />

                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}

                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium tracking-wider text-background transition-opacity hover:opacity-80 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </MagneticButton>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Brief;
