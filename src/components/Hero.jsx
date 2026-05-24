import { useLocale } from "../i18n/LanguageContext";
import PortraitStack from "./PortraitStack";
import SocialLinks from "./SocialLinks";

const scrollToContact = (event) => {
  event.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, "", "/#contact");
};

const Hero = () => {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      className="scroll-mt-24 flex w-full flex-col gap-8 md:gap-10">
      <div className="flex w-full flex-col items-center gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <PortraitStack />

        <div className="flex w-full min-w-0 flex-col items-center text-center md:items-start md:text-left">
          <h1 className="title text-balance text-3xl sm:text-4xl md:text-5xl">
            {t("hero.title")}
          </h1>

          <p className="mt-2 text-sm font-medium sm:text-base">
            {t("hero.subtitle")}
          </p>

          <p className="mt-4 max-w-sm text-balance text-sm leading-relaxed text-foreground sm:text-base">
            {t("hero.experience")}
          </p>

          <p className="mt-4 max-w-sm text-balance text-sm leading-relaxed text-foreground sm:text-base">
            {t("hero.contactBefore")}
            <a
              href="/#contact"
              onClick={scrollToContact}
              className="underline-offset-4 transition-opacity hover:underline">
              {t("hero.contactLink")}
            </a>
            {t("hero.contactAfter")}{" "}
            <a
              href="/#contact"
              onClick={scrollToContact}
              aria-label={t("hero.scrollToContact")}
              className="relative top-1 inline-flex items-center text-foreground transition-opacity hover:opacity-80">
              <svg
                className="size-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden>
                <path d="m7 7 10 10" />
                <path d="M17 7v10H7" />
              </svg>
            </a>
          </p>

          <section className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href={t("hero.cvHref")}
              target="_blank"
              rel="noopener noreferrer">
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:h-9">
                <span className="font-semibold">{t("hero.resume")}</span>
                <svg
                  className="ml-2 size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden>
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
              </button>
            </a>
            <SocialLinks />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
