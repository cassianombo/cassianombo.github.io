import { useLocale } from "../i18n/LanguageContext";

const skillGroups = [
  {
    titleKey: "skills.primary",
    skills: ["React", ".NET", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    titleKey: "skills.production",
    skills: [
      "Docker",
      "GraphQL",
      "Next.js",
      "OracleSQL",
      "Jest",
      "Redis",
      "WPF",
    ],
  },
  {
    titleKey: "skills.familiar",
    skills: ["Angular", "NestJS", "React Native", "Python", "Java"],
  },
];

const Skills = () => {
  const { t } = useLocale();

  return (
    <section id="skills" className="scroll-mt-24 flex flex-col gap-8">
      <h2 className="title text-2xl sm:text-3xl">{t("skills.title")}</h2>
      <div className="surface overflow-hidden divide-y divide-border">
        {skillGroups.map((group) => (
          <div key={group.titleKey} className="p-4 sm:p-6">
            <h3 className="text-sm font-semibold leading-none">
              {t(group.titleKey)}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
