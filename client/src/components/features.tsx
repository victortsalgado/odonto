import { 
  CalendarClock, 
  ClipboardCheck, 
  MessageSquareText, 
  PackageCheck, 
  LineChart, 
  BarChart3,
  FileImage,
  Share2 
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
  const features = [
    {
      icon: <CalendarClock className="w-6 h-6 text-secondary-400" />,
      title: "Agendamento & Lembretes",
      description: "Chatbot WhatsApp inteligente para agendamentos 24/7, confirmações e lembretes automáticos via SMS/e-mail com possibilidade de reagendamento. Reduza faltas em até 70% e maximize sua agenda.",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-secondary-400" />,
      title: "Fluxo de Recepção",
      description: "Formulários digitais pré-consulta enviados automaticamente, anamnese online integrada ao prontuário e check-in digital para eliminar papéis e reduzir o tempo de espera na recepção em até 80%.",
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-secondary-400" />,
      title: "Follow-up e Reativação",
      description: "Sequências automáticas pós-consulta com instruções personalizadas, mensagens de recuperação para pacientes com tratamentos incompletos e campanhas de reativação. Aumente a taxa de retorno em até 45%.",
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-secondary-400" />,
      title: "Controle de Estoque",
      description: "Monitoramento automático do consumo de materiais por procedimento, integração com sistemas de gestão existentes, alertas de nível mínimo e sugestões de compra baseadas em histórico e sazonalidade.",
    },
    {
      icon: <LineChart className="w-6 h-6 text-secondary-400" />,
      title: "Faturamento & Financeiro",
      description: "Emissão automática de notas fiscais, geração de boletos/links de pagamento, conciliação bancária integrada e relatórios financeiros personalizados para diferentes convênios e procedimentos.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-secondary-400" />,
      title: "Relatórios & KPIs",
      description: "Dashboards interativos atualizados em tempo real, métricas essenciais para gestão (ticket médio, taxa de conversão, LTV, etc) e relatórios enviados automaticamente para sócios e gestores conforme periodicidade definida.",
    },
    {
      icon: <FileImage className="w-6 h-6 text-secondary-400" />,
      title: "Prontuário & Imagens Digitais",
      description: "Armazenamento centralizado de radiografias, fotos e documentos de pacientes com acesso seguro via nuvem, backup automático e categorização inteligente por IA.",
    },
    {
      icon: <Share2 className="w-6 h-6 text-secondary-400" />,
      title: "Marketing & Indicações",
      description: "Fluxos de nutrição com conteúdo educativo, sistema de incentivo a indicações com tracking e recompensas, e campanhas sazonais automatizadas para tratamentos específicos.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Automação Completa de Ponta a Ponta
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Uma solução abrangente que automatiza todos os processos operacionais da sua clínica, desde o primeiro contato até o pós-tratamento, permitindo que você foque no que realmente importa: cuidar dos pacientes.
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
