import { useLanguage } from "@/context/language-context";
import { 
  CalendarClock, 
  ClipboardCheck, 
  MessageSquareText, 
  PackageCheck, 
  LineChart, 
  BarChart3 
} from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="glass rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2">
      <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-dark-300">{description}</p>
    </div>
  );
}

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <CalendarClock className="w-6 h-6 text-secondary-400" />,
      title: t("features.timeTracking.title"),
      description: t("features.timeTracking.description"),
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-secondary-400" />,
      title: t("features.invoicing.title"),
      description: t("features.invoicing.description"),
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-secondary-400" />,
      title: t("features.payment.title"),
      description: t("features.payment.description"),
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-secondary-400" />,
      title: t("features.client.title"),
      description: t("features.client.description"),
    },
    {
      icon: <LineChart className="w-6 h-6 text-secondary-400" />,
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-secondary-400" />,
      title: t("features.language.title"),
      description: t("features.language.description"),
    },
  ];

  return (
    <section id="features" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
