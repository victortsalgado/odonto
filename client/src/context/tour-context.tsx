import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Shepherd from "shepherd.js";
import type { Tour, Step } from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";

interface TourContextType {
  startTour: () => void;
  endTour: () => void;
  isTourActive: boolean;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

interface TourProviderProps {
  children: ReactNode;
}

export function TourProvider({ children }: TourProviderProps) {
  const [isTourActive, setIsTourActive] = useState(false);
  const [tourInstance, setTourInstance] = useState<Tour | null>(null);

  // Inicializar o tour
  useEffect(() => {
    // Criar nova instância do tour
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: "shepherd-theme-custom",
        scrollTo: { behavior: "smooth", block: "center" }
      },
      useModalOverlay: true
    });

    // Adicionar os passos
    tour.addStep({
      id: "welcome",
      attachTo: {
        element: "body",
        on: "bottom" as any
      },
      buttons: [
        {
          action: () => tour.cancel(),
          classes: "shepherd-button-secondary",
          text: "Pular Tour"
        },
        {
          action: () => tour.next(),
          text: "Próximo"
        }
      ],
      classes: "shepherd-welcome",
      title: "Bem-vindo ao DentalAuto!",
      text: "Vamos mostrar como nossa plataforma pode transformar sua clínica odontológica. Siga este breve tour!"
    });

    tour.addStep({
      id: "hero",
      attachTo: {
        element: "#hero-section",
        on: "bottom"
      },
      buttons: [
        {
          action: () => tour.back(),
          text: "Anterior"
        },
        {
          action: () => tour.next(),
          text: "Próximo"
        }
      ],
      title: "Automação End-to-End",
      text: "DentalAuto oferece automação completa para clínicas odontológicas, desde agendamento até faturamento."
    });

    tour.addStep({
      id: "features",
      attachTo: {
        element: "#features",
        on: "top"
      },
      buttons: [
        {
          action: () => tour.back(),
          text: "Anterior"
        },
        {
          action: () => tour.next(),
          text: "Próximo"
        }
      ],
      title: "Principais Recursos",
      text: "Conheça todos os recursos disponíveis para otimizar seus processos e aumentar a eficiência operacional."
    });

    tour.addStep({
      id: "pricing",
      attachTo: {
        element: "#pricing",
        on: "top"
      },
      buttons: [
        {
          action: () => tour.back(),
          text: "Anterior"
        },
        {
          action: () => tour.next(),
          text: "Próximo"
        }
      ],
      title: "Planos Personalizados",
      text: "Escolha o plano ideal para o tamanho da sua clínica. Todos incluem implementação assistida."
    });

    tour.addStep({
      id: "faq",
      attachTo: {
        element: "#faq",
        on: "top"
      },
      buttons: [
        {
          action: () => tour.back(),
          text: "Anterior"
        },
        {
          action: () => tour.next(),
          text: "Próximo"
        }
      ],
      title: "Perguntas Frequentes",
      text: "Encontre respostas para dúvidas comuns sobre implementação e resultados esperados."
    });

    tour.addStep({
      id: "finish",
      attachTo: {
        element: "body",
        on: "bottom" as any
      },
      buttons: [
        {
          action: () => tour.back(),
          text: "Anterior"
        },
        {
          action: () => {
            tour.complete();
            setIsTourActive(false);
            localStorage.setItem("dentalAutoTourSeen", "true");
          },
          text: "Finalizar Tour"
        }
      ],
      title: "Comece Agora!",
      text: "Pronto para revolucionar sua clínica odontológica? Agende uma demonstração ou fale com um consultor!"
    });

    // Configurar eventos
    tour.on("complete", () => {
      setIsTourActive(false);
      localStorage.setItem("dentalAutoTourSeen", "true");
    });

    tour.on("cancel", () => {
      setIsTourActive(false);
      localStorage.setItem("dentalAutoTourSeen", "true");
    });

    // Salvar a instância
    setTourInstance(tour);

    // Verificar se o usuário já viu o tour
    const tourSeen = localStorage.getItem("dentalAutoTourSeen");
    
    // Iniciar o tour automaticamente para novos visitantes após 2 segundos
    if (!tourSeen) {
      const timer = setTimeout(() => {
        tour.start();
        setIsTourActive(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const startTour = () => {
    if (tourInstance) {
      tourInstance.start();
      setIsTourActive(true);
    }
  };

  const endTour = () => {
    if (tourInstance) {
      tourInstance.cancel();
      setIsTourActive(false);
    }
  };

  return (
    <TourContext.Provider value={{ startTour, endTour, isTourActive }}>
      {children}
    </TourContext.Provider>
  );
}

export function useTour() {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error("useTour must be used within a TourProvider");
  }
  return context;
}