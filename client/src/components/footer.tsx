import { useLanguage } from "@/context/language-context";
import { Logo } from "./ui/logo";
import { Instagram, MessageSquare, Headset, Video } from "lucide-react";
import { SiMake, SiTiktok } from "react-icons/si";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-900 border-t border-dark-700 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="text-dark-300 mb-4 max-w-sm">
              {t("footer.about")}
            </p>
            
            {/* Tecnologias */}
            <div className="mb-5">
              <p className="text-dark-400 mb-2 text-sm">Tecnologias:</p>
              <div className="flex items-center space-x-3 text-dark-300">
                <div className="flex items-center">
                  <SiMake className="w-5 h-5 mr-1" />
                  <span className="text-sm">Make</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  <span className="text-sm">ChatGPT</span>
                </div>
                <div className="flex items-center">
                  <Headset className="w-4 h-4 mr-1" />
                  <span className="text-sm">API</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-dark-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-white transition-colors">
                <SiTiktok className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.product")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.product.features")}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.product.pricing")}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.product.integrations")}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.product.updates")}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.company.about")}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.company.blog")}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.company.careers")}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.company.contact")}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.resources.documentation")}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.resources.helpCenter")}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.resources.community")}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors">
                  {t("footer.resources.api")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-400 text-sm mb-4 md:mb-0">
              {t("footer.copyright")}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-dark-400 hover:text-white text-sm transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="text-dark-400 hover:text-white text-sm transition-colors">
                {t("footer.terms")}
              </a>
              <a href="#" className="text-dark-400 hover:text-white text-sm transition-colors">
                {t("footer.cookies")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
