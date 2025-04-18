import { useLanguage } from "@/context/language-context";
import { Check, Share2, Users, TrendingUp } from "lucide-react";

export function Showcase() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-secondary-500/10 to-transparent rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Consultório odontológico com pacientes satisfeitos" 
                className="rounded-xl relative z-10" 
              />
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-5 glass p-3 rounded-lg shadow-glass text-white z-20 flex items-center space-x-2 text-sm">
                <Share2 className="w-5 h-5 text-secondary-400" />
                <span>Compartilhamentos</span>
              </div>
              
              <div className="absolute bottom-1/4 -right-5 glass p-3 rounded-lg shadow-glass text-white z-20 flex items-center space-x-2 text-sm">
                <Users className="w-5 h-5 text-secondary-400" />
                <span>Novos pacientes</span>
              </div>
              
              <div className="absolute -bottom-5 left-1/3 glass p-3 rounded-lg shadow-glass text-white z-20 flex items-center space-x-2 text-sm">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>+40% captação</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pl-16 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("showcase.title")}
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              {t("showcase.description")}
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-secondary-400 mt-0.5 mr-2" />
                <span>{t("showcase.benefit1")}</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-secondary-400 mt-0.5 mr-2" />
                <span>{t("showcase.benefit2")}</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-secondary-400 mt-0.5 mr-2" />
                <span>{t("showcase.benefit3")}</span>
              </li>
            </ul>
            
            <a href="#" className="bg-gradient-to-r from-secondary-400 to-secondary-600 text-white rounded-full px-8 py-3 font-medium hover:opacity-90 transition-opacity inline-block">
              {t("showcase.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
