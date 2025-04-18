import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl overflow-hidden accordion-item">
      <button 
        className="flex justify-between items-center w-full p-6 text-left" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`accordion-content px-6 pb-6 ${isOpen ? 'active' : ''}`}>
        <p className="text-dark-300">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const faqItems = [
    {
      question: "Quanto tempo leva para implementar todas as automações?",
      answer: "A implementação completa leva entre 2 a 4 semanas, dependendo da complexidade da sua clínica e dos sistemas já existentes. Começamos pelos módulos de maior impacto imediato: agendamento e lembretes. Cada módulo adicional é implementado gradualmente para garantir a adaptação da equipe e o máximo de resultados em cada etapa."
    },
    {
      question: "É necessário mudar meu sistema de gestão atual?",
      answer: "Não, nossas automações funcionam com praticamente qualquer sistema de gestão odontológica do mercado brasileiro. Utilizamos integrações nativas ou via API com Dental Office, Odontosys, SimplesWave, Dental Manager, entre outros. Em casos específicos, desenvolvemos conectores personalizados. A ideia é potencializar os sistemas que você já utiliza, não substituí-los."
    },
    {
      question: "Como funciona a implementação?",
      answer: "O processo começa com uma análise detalhada do seu fluxo atual e pontos de melhoria, seguida pela configuração das automações no Make e integração com seu WhatsApp Business, sistemas e ferramentas. Oferecemos treinamento para sua equipe e um período de acompanhamento próximo para ajustes. Nossos consultores de implementação garantem que tudo funcione perfeitamente e que sua equipe esteja confortável com as novas ferramentas."
    },
    {
      question: "Que resultados posso esperar e em quanto tempo?",
      answer: "Em média, nossas clínicas parceiras observam redução de 60% nas faltas já no primeiro mês, aumento de 30% na taxa de retorno de pacientes em 3 meses, e economia de 15-20% em custos operacionais com redução de trabalho manual. O ROI médio é de 3 a 5 vezes o investimento em um período de 6 meses, com aumento significativo na satisfação dos pacientes e redução da carga de trabalho administrativo da equipe."
    },
    {
      question: "Preciso ter conhecimento técnico para utilizar?",
      answer: "Absolutamente não. Nossa equipe configura tudo para você, e a interface de gerenciamento é extremamente intuitiva, desenvolvida especificamente para profissionais da área odontológica sem conhecimento técnico. Fornecemos treinamento completo para sua equipe e suporte contínuo. Mesmo as atualizações e manutenções do sistema são realizadas por nós, então você pode focar no atendimento aos pacientes."
    },
    {
      question: "As automações funcionam para qualquer especialidade odontológica?",
      answer: "Sim, temos soluções adaptadas para todas as especialidades. Para Ortodontia, automatizamos o acompanhamento entre consultas e lembretes de ajustes. Em Implantodontia, criamos fluxos específicos para o longo ciclo de tratamento. Na Odontopediatria, desenvolvemos comunicações especiais para os pais. Personalizamos cada automação conforme as particularidades da sua especialidade e fluxo de trabalho."
    },
    {
      question: "Quais são os requisitos técnicos para implementação?",
      answer: "O básico necessário é ter um número de WhatsApp Business (podemos ajudar a configurar), acesso ao seu sistema de gestão atual, e um computador com internet na recepção. Não é necessário trocar equipamentos nem instalar novos softwares complexos. Nossa solução é baseada em nuvem e se integra aos sistemas que você já utiliza."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a implementação e benefícios das automações para sua clínica odontológica. Se sua pergunta não estiver aqui, fale com um de nossos consultores.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
