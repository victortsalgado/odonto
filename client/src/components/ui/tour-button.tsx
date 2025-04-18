import React from "react";
import { HelpCircle } from "lucide-react";
import { useTour } from "@/context/tour-context";
import { useLanguage } from "@/context/language-context";

export function TourButton() {
  const { startTour } = useTour();
  const { t, language } = useLanguage();
  
  // Texto do tooltip baseado no idioma
  const tooltipText = language === "pt" ? "Iniciar Tour Guiado" : "Start Guided Tour";

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      title={tooltipText}
    >
      <button
        onClick={startTour}
        className="bg-secondary-500 hover:bg-secondary-600 text-white rounded-full p-3 shadow-lg flex items-center transition-transform transform hover:scale-110"
      >
        <HelpCircle className="w-6 h-6" />
      </button>
    </div>
  );
}