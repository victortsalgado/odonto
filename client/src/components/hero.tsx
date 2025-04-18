import { useLanguage } from "@/context/language-context";
import { CalendarDays, CheckCircle, Clock } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-20 pb-32 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              dangerouslySetInnerHTML={{
                __html: t("hero.title").replace(
                  "<span>",
                  "<span class='text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500'>"
                )
              }}
            ></h1>
            <p className="text-lg md:text-xl text-dark-300 mb-8 max-w-lg">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="bg-gradient-to-r from-secondary-400 to-secondary-600 text-white text-center rounded-full px-8 py-3 font-medium hover:opacity-90 transition-opacity">
                {t("hero.cta.trial")}
              </a>
              <a href="#" className="glass text-white text-center rounded-full px-8 py-3 font-medium hover:bg-dark-800 transition-colors">
                {t("hero.cta.demo")}
              </a>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-dark-900" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Dentista" />
                <img className="w-10 h-10 rounded-full border-2 border-dark-900" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Dentista" />
                <img className="w-10 h-10 rounded-full border-2 border-dark-900" src="https://images.unsplash.com/photo-1606265752439-1f18756111fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Dentista" />
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-dark-300">
                  {t("hero.rating")}
                </p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-secondary-500/20 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Consultório odontológico moderno" 
                className="rounded-xl shadow-2xl relative z-10" 
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-5 -left-5 glass p-3 rounded-lg shadow-glass text-white z-20 flex items-center space-x-2 text-sm">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{t("notifications.appointment")}</span>
              </div>
              
              <div className="absolute top-1/2 -right-5 glass p-3 rounded-lg shadow-glass text-white z-20 flex items-center space-x-2 text-sm">
                <CalendarDays className="w-5 h-5 text-secondary-300" />
                <span>{t("notifications.reminder")}</span>
              </div>

              <div className="absolute -bottom-5 left-1/3 glass p-3 rounded-lg shadow-glass text-white z-20 flex items-center space-x-2 text-sm">
                <Clock className="w-5 h-5 text-secondary-300" />
                <span>WhatsApp integrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
