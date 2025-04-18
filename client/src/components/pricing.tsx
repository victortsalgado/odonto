import { useLanguage } from "@/context/language-context";
import { Check, CalendarClock, MessageSquare, TrendingUp, FileText, BarChart3 } from "lucide-react";

type PlanFeature = {
  text: string;
};

type PricingPlanProps = {
  title: string;
  description: string;
  price: string;
  period: string;
  features: PlanFeature[];
  cta: string;
  isPopular?: boolean;
  tag?: string;
  icon?: React.ReactNode;
};

function PricingPlan({
  title,
  description,
  price,
  period,
  features,
  cta,
  isPopular = false,
  tag,
  icon
}: PricingPlanProps) {
  return (
    <div className={`glass rounded-xl p-8 border ${isPopular ? 'border-2 border-secondary-400' : 'border-dark-700'} relative transition-transform duration-300 hover:-translate-y-2`}>
      {isPopular && tag && (
        <div className="absolute top-0 right-0 bg-secondary-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          {tag}
        </div>
      )}
      
      <div className="mb-6 flex items-center">
        {icon && <div className="mr-4 bg-secondary-500/20 p-3 rounded-full">{icon}</div>}
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-dark-400">{description}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-dark-400">{period}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-secondary-400 mt-0.5 mr-2" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="#" 
        className={`block text-center ${isPopular ? 'bg-gradient-to-r from-secondary-400 to-secondary-600 text-white hover:opacity-90 transition-opacity' : 'glass text-white hover:bg-dark-800 transition-colors'} rounded-full px-6 py-3 font-medium`}
      >
        {cta}
      </a>
    </div>
  );
}

export function Pricing() {
  const { t } = useLanguage();

  const starterFeatures = [
    { text: t("pricing.starter.feature1") },
    { text: t("pricing.starter.feature2") },
    { text: t("pricing.starter.feature3") },
    { text: t("pricing.starter.feature4") }
  ];

  const professionalFeatures = [
    { text: t("pricing.professional.feature1") },
    { text: t("pricing.professional.feature2") },
    { text: t("pricing.professional.feature3") },
    { text: t("pricing.professional.feature4") },
    { text: t("pricing.professional.feature5") }
  ];

  const enterpriseFeatures = [
    { text: t("pricing.enterprise.feature1") },
    { text: t("pricing.enterprise.feature2") },
    { text: t("pricing.enterprise.feature3") },
    { text: t("pricing.enterprise.feature4") },
    { text: t("pricing.enterprise.feature5") }
  ];

  return (
    <section id="pricing" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan
            title={t("pricing.starter.title")}
            description={t("pricing.starter.description")}
            price={t("pricing.starter.price")}
            period={t("pricing.starter.period")}
            features={starterFeatures}
            cta={t("pricing.starter.cta")}
            icon={<CalendarClock className="w-6 h-6 text-secondary-400" />}
          />
          
          <PricingPlan
            title={t("pricing.professional.title")}
            description={t("pricing.professional.description")}
            price={t("pricing.professional.price")}
            period={t("pricing.professional.period")}
            features={professionalFeatures}
            cta={t("pricing.professional.cta")}
            isPopular={true}
            tag={t("pricing.professional.tag")}
            icon={<MessageSquare className="w-6 h-6 text-secondary-400" />}
          />
          
          <PricingPlan
            title={t("pricing.enterprise.title")}
            description={t("pricing.enterprise.description")}
            price={t("pricing.enterprise.price")}
            period={t("pricing.enterprise.period")}
            features={enterpriseFeatures}
            cta={t("pricing.enterprise.cta")}
            icon={<BarChart3 className="w-6 h-6 text-secondary-400" />}
          />
        </div>
        
        {/* Garantia */}
        <div className="mt-16 text-center">
          <div className="glass py-6 px-8 rounded-xl inline-block">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-secondary-400 mr-2" />
              <h3 className="text-xl font-bold">Garantia de Satisfação</h3>
            </div>
            <p className="text-dark-300">
              Insatisfeito? Cancele nos primeiros 30 dias e receba reembolso integral.
              <br />Sem burocracia, sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
