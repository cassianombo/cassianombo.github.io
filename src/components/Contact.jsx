const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-github-text mb-4">
          <span className="text-gradient">Contact</span>
        </h2>
        <p className="text-github-text-secondary mb-8">
          Looking for an engineer who cares about quality and impact? Let’s
          talk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:34hugooliveira@gmail.com"
            className="flex items-center gap-3 bg-github-bg-secondary border border-github-border rounded-lg px-6 py-4 hover:border-accent/50 transition-colors w-full sm:w-[320px] justify-center cursor-pointer">
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-github-text hover:text-accent transition-colors text-lg">
              34hugooliveira@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/34hugooliveira/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-github-bg-secondary border border-github-border rounded-lg px-6 py-4 hover:border-accent/50 transition-colors w-full sm:w-[320px] justify-center cursor-pointer">
            <svg
              className="w-5 h-5 text-accent"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-github-text hover:text-accent transition-colors text-lg">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
