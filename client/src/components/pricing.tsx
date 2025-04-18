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
  const starterFeatures = [
    { text: "Agendamento via WhatsApp 24/7" },
    { text: "Lembretes e confirmações automáticas" },
    { text: "Formulários digitais pré-consulta" },
    { text: "Suporte técnico via e-mail" },
    { text: "Implementação em até 2 semanas" }
  ];

  const professionalFeatures = [
    { text: "Tudo do plano Inicial, mais:" },
    { text: "Follow-up e reativação automáticos" },
    { text: "Controle de estoque integrado" },
    { text: "Faturamento e NF-e automatizados" },
    { text: "Suporte prioritário via WhatsApp" },
    { text: "Dashboard de KPIs personalizado" }
  ];

  const enterpriseFeatures = [
    { text: "Tudo do plano Profissional, mais:" },
    { text: "Marketing e captação automatizados" },
    { text: "Multi-unidades com gestão centralizada" },
    { text: "Integrações personalizadas" },
    { text: "Consultoria estratégica mensal" },
    { text: "Implementação prioritária VIP" }
  ];

  return (
    <section id="pricing" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos Personalizados para Seu Consultório
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho da sua clínica odontológica. Todos incluem implementação assistida e suporte técnico, sem necessidade de conhecimentos técnicos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan
            title="Inicial"
            description="Para clínicas pequenas com até 2 cadeiras"
            price="R$497"
            period="/mês"
            features={starterFeatures}
            cta="Começar Gratuitamente"
            icon={<CalendarClock className="w-6 h-6 text-secondary-400" />}
          />
          
          <PricingPlan
            title="Profissional"
            description="Para clínicas médias com 3 a 5 cadeiras"
            price="R$997"
            period="/mês"
            features={professionalFeatures}
            cta="Agendar Demonstração"
            isPopular={true}
            tag="MAIS POPULAR"
            icon={<MessageSquare className="w-6 h-6 text-secondary-400" />}
          />
          
          <PricingPlan
            title="Premium"
            description="Para clínicas e redes com 6+ cadeiras"
            price="R$1.997"
            period="/mês"
            features={enterpriseFeatures}
            cta="Falar com Especialista"
            icon={<BarChart3 className="w-6 h-6 text-secondary-400" />}
          />
        </div>
        
        {/* Garantia */}
        <div className="mt-16 text-center">
          <div className="glass py-6 px-8 rounded-xl inline-block">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-secondary-400 mr-2" />
              <h3 className="text-xl font-bold">Implementação assistida e garantia de satisfação de 30 dias. Sem contratos de fidelidade.</h3>
            </div>
            <p className="text-dark-300">
              Agende uma demonstração gratuita hoje e descubra como a automação 
              <br />pode transformar sua clínica odontológica em poucas semanas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
