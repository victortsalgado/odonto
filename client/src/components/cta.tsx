import { Calendar, MessageSquare, TrendingUp } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-dark-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-radial from-secondary-500/10 to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            dangerouslySetInnerHTML={{
              __html: "Pronto para Revolucionar Sua <span class='text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500'>Clínica Odontológica?</span>"
            }}
          ></h2>
          <p className="text-lg md:text-xl text-dark-300 mb-10 max-w-2xl mx-auto">
            Junte-se a dezenas de clínicas que já automatizaram seus processos, reduziram custos operacionais, eliminaram tarefas repetitivas e aumentaram o faturamento com nossas soluções de automação inteligente.
          </p>
          
          {/* Benefícios destacados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass rounded-lg p-6">
              <Calendar className="w-10 h-10 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Agendamentos</h3>
              <p className="text-dark-300">Automatize todos seus agendamentos e lembretes</p>
            </div>
            <div className="glass rounded-lg p-6">
              <MessageSquare className="w-10 h-10 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-dark-300">Atendimento automático e personalizado</p>
            </div>
            <div className="glass rounded-lg p-6">
              <TrendingUp className="w-10 h-10 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Resultados</h3>
              <p className="text-dark-300">Aumente receitas e reduza custos operacionais</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="bg-gradient-to-r from-secondary-400 to-secondary-600 text-white rounded-full px-8 py-4 font-medium hover:opacity-90 transition-opacity">
              Agendar Demonstração Gratuita
            </a>
            <a href="#" className="glass text-white rounded-full px-8 py-4 font-medium hover:bg-dark-800 transition-colors">
              Falar com Especialista
            </a>
          </div>
          
          <p className="mt-6 text-dark-400">
            Implementação assistida e garantia de satisfação de 30 dias. Sem contratos de fidelidade.
          </p>
        </div>
      </div>
    </section>
  );
}
