import { useLanguage } from "@/context/language-context";

export function CTA() {
  const { t } = useLanguage();

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
              __html: t("cta.title").replace(
                "<span>",
                "<span class='text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500'>"
              )
            }}
          ></h2>
          <p className="text-lg md:text-xl text-dark-300 mb-10 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="bg-gradient-to-r from-secondary-400 to-secondary-600 text-white rounded-full px-8 py-4 font-medium hover:opacity-90 transition-opacity">
              {t("cta.primary")}
            </a>
            <a href="#" className="glass text-white rounded-full px-8 py-4 font-medium hover:bg-dark-800 transition-colors">
              {t("cta.secondary")}
            </a>
          </div>
          
          <p className="mt-6 text-dark-400">
            {t("cta.note")}
          </p>
        </div>
      </div>
    </section>
  );
}
