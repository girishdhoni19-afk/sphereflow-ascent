import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const Brief = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit
  };

  return (
    <section id="brief" className="px-6 py-32 md:px-16">
      <AnimatedSection>
        <div className="mx-auto max-w-2xl rounded-3xl border border-subtle bg-card-glass p-10 md:p-14">
          <h2 className="mb-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
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
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-subtle bg-transparent px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              required
            />
            <textarea
              placeholder="Tell us about your project / vision"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="resize-none rounded-xl border border-subtle bg-transparent px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              required
            />
            <button
              type="submit"
              className="mt-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Submit
            </button>
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Brief;
