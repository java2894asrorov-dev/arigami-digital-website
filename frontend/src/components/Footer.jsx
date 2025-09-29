import React from 'react';
import { Separator } from './ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Таргетована реклама META',
    'Реклама TikTok',
    'Google Ads',
    'Брендинг',
    'SMM',
    'Консультації'
  ];

  const quickLinks = [
    { name: 'Послуги', href: '#services' },
    { name: 'Про нас', href: '#about' },
    { name: 'Контакти', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="font-display font-bold text-2xl">ARIGAMI</div>
                <div className="text-sm text-blue-400 font-mono uppercase tracking-wider">DIGITAL</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Створюємо ефективні рекламні кампанії з повним контролем результату. 
              Ваш успіх - наш пріоритет.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-current"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-current"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-current"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Telegram</span>
                <div className="w-6 h-6 bg-current"></div>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Наші послуги</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Контакти</h4>
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm">Телефон</div>
                <a href="tel:+380671234567" className="text-white hover:text-blue-400 transition-colors">
                  +380 (67) 123-45-67
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Email</div>
                <a href="mailto:hello@arigami.digital" className="text-white hover:text-blue-400 transition-colors">
                  hello@arigami.digital
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Telegram</div>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  @arigami_digital
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="font-medium mb-3">Швидкі посилання</h5>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Arigami Digital. Всі права захищені.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Умови використання
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;