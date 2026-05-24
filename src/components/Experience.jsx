import { useEffect, useMemo, useRef, useState } from "react";

import { EXPERIENCE_KEYWORDS } from "../constants/keywords";
import { useLocale } from "../i18n/LanguageContext";
import { highlightKeywords } from "../utils/textHighlight";

const COLLAPSE_MS = 280;
const EXPAND_MS = 320;

const EducationPanel = ({ educationExperience, certifications }) => (
  <>
    <TimelineList companies={educationExperience} highlight />
    {certifications.length > 0 && (
      <div className="surface mt-6">
        <ul className="divide-y divide-border">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="flex flex-wrap items-start gap-3 p-4 text-sm sm:flex-nowrap sm:items-center sm:gap-4">
              {cert.logo && (
                <img
                  src={cert.logo}
                  alt=""
                  className="size-8 shrink-0 object-contain"
                />
              )}
              <div className="min-w-0 flex-1">
                <p className="font-medium leading-snug">{cert.title}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
              <time className="w-full shrink-0 text-xs tabular-nums text-muted-foreground sm:w-auto">
                {cert.period}
              </time>
            </li>
          ))}
        </ul>
      </div>
    )}
  </>
);

const CompanyAvatar = ({ logo, name, avatarClassName, logoClassName }) => (
  <span
    className={`relative flex size-10 shrink-0 overflow-hidden rounded-full border sm:size-12 ${
      avatarClassName ?? "bg-background"
    }`}>
    {logo ? (
      <img
        src={logo}
        alt=""
        className={logoClassName ?? "h-full w-full object-cover"}
      />
    ) : (
      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground">
        {name.charAt(0)}
      </span>
    )}
  </span>
);

const RoleBlock = ({ role, highlight }) => (
  <div>
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <p className="text-sm font-medium leading-none text-foreground/45">
        {role.title}
      </p>
      <time className="shrink-0 text-xs tabular-nums text-foreground/55 sm:whitespace-nowrap">
        {role.period}
      </time>
    </div>
    {role.bullets?.length > 0 && (
      <ul className="ml-4 mt-2 list-outside list-disc">
        {role.bullets.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed text-foreground/85">
            {highlight
              ? highlightKeywords(
                  item,
                  EXPERIENCE_KEYWORDS,
                  "font-semibold text-foreground",
                )
              : item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const TimelineList = ({ companies, highlight }) => (
  <div className="surface">
    <ul className="divide-y divide-border sm:ml-10 sm:divide-y-0 sm:border-l sm:border-border">
      {companies.map((company) => (
        <li
          key={`${company.company}-${company.roles[0]?.title}`}
          className="p-4 sm:relative sm:ml-10 sm:py-4 sm:pl-0">
          <div className="flex gap-3 sm:block">
            <div className="shrink-0 sm:absolute sm:-left-16 sm:top-4">
              <CompanyAvatar
                logo={company.logo}
                name={company.company}
                avatarClassName={company.avatarClassName}
                logoClassName={company.logoClassName}
              />
            </div>
            <div className="min-w-0 flex-1 sm:w-full">
              <h2 className="text-base font-semibold leading-snug">
                {company.company}
              </h2>
              <div className="mt-1.5 flex flex-col gap-2 sm:mt-2">
                {company.roles.map((role) => (
                  <RoleBlock
                    key={`${company.company}-${role.title}`}
                    role={role}
                    highlight={highlight}
                  />
                ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const { t, profile } = useLocale();
  const { workExperience, educationExperience, certifications } = profile;

  const tabs = useMemo(
    () => [
      { id: "work", label: t("experience.work") },
      { id: "education", label: t("experience.education") },
    ],
    [t],
  );

  const [activeTab, setActiveTab] = useState("work");
  const [visibleTab, setVisibleTab] = useState("work");
  const [panelPhase, setPanelPhase] = useState("open");
  const panelRef = useRef(null);
  const contentRef = useRef(null);

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;

    setActiveTab(tabId);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleTab(tabId);
      return;
    }

    if (panelPhase !== "open") return;
    setPanelPhase("collapse");
  };

  useEffect(() => {
    if (panelPhase !== "collapse") return;

    const panel = panelRef.current;
    const content = contentRef.current;
    if (!panel || !content) {
      setVisibleTab(activeTab);
      setPanelPhase("open");
      return;
    }

    const startHeight = content.scrollHeight;
    panel.style.overflow = "hidden";
    panel.style.height = `${startHeight}px`;

    const onCollapseEnd = (event) => {
      if (event.propertyName !== "height") return;
      panel.removeEventListener("transitionend", onCollapseEnd);
      setVisibleTab(activeTab);
      setPanelPhase("expand");
    };

    panel.addEventListener("transitionend", onCollapseEnd);

    requestAnimationFrame(() => {
      panel.style.transition = `height ${COLLAPSE_MS}ms cubic-bezier(0.4, 0, 1, 1), opacity ${COLLAPSE_MS}ms ease, transform ${COLLAPSE_MS}ms cubic-bezier(0.4, 0, 1, 1)`;
      panel.style.opacity = "0";
      panel.style.transform = "translateY(-12px)";
      panel.style.height = "0px";
    });

    return () => panel.removeEventListener("transitionend", onCollapseEnd);
  }, [panelPhase, activeTab]);

  useEffect(() => {
    if (panelPhase !== "expand") return;

    const panel = panelRef.current;
    const content = contentRef.current;
    if (!panel || !content) {
      setPanelPhase("open");
      return;
    }

    panel.style.height = "0px";
    panel.style.opacity = "0";
    panel.style.transform = "translateY(-12px)";

    const onExpandEnd = (event) => {
      if (event.propertyName !== "height") return;
      panel.removeEventListener("transitionend", onExpandEnd);
      panel.style.height = "";
      panel.style.overflow = "";
      panel.style.transition = "";
      panel.style.opacity = "";
      panel.style.transform = "";
      setPanelPhase("open");
    };

    panel.addEventListener("transitionend", onExpandEnd);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const endHeight = content.scrollHeight;
        panel.style.transition = `height ${EXPAND_MS}ms cubic-bezier(0, 0, 0.2, 1), opacity ${EXPAND_MS}ms ease, transform ${EXPAND_MS}ms cubic-bezier(0, 0, 0.2, 1)`;
        panel.style.height = `${endHeight}px`;
        panel.style.opacity = "1";
        panel.style.transform = "translateY(0)";
      });
    });

    return () => panel.removeEventListener("transitionend", onExpandEnd);
  }, [panelPhase, visibleTab]);

  return (
    <section id="experience" className="scroll-mt-24">
      <div
        role="tablist"
        className="relative mb-2 grid h-9 w-full grid-cols-2 rounded-lg bg-muted p-1 text-muted-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-1 left-1 top-1 w-[calc(50%-0.25rem)] rounded-md bg-background transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{
            transform:
              activeTab === "work" ? "translateX(0)" : "translateX(100%)",
          }}
        />
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      <div
        ref={panelRef}
        role="tabpanel"
        className="mt-2 origin-top overflow-hidden will-change-[height,opacity,transform]">
        <div ref={contentRef}>
          {visibleTab === "work" ? (
            <TimelineList companies={workExperience} highlight />
          ) : (
            <EducationPanel
              educationExperience={educationExperience}
              certifications={certifications}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
