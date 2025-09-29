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
              <img 
                src="https://customer-assets.emergentagent.com/job_041d947b-c392-44a0-8a73-ec2e8e1b6062/artifacts/xt8024o8_file_000000003d9462468e13d4fece119786.png"
                alt="Arigami Digital Logo"
                className="h-10 w-10 object-contain"
              />
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
                <a href="tel:+380637123814" className="text-white hover:text-blue-400 transition-colors">
                  +380 (63) 712-38-14
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Email</div>
                <a href="mailto:arigamidigital@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                  arigamidigital@gmail.com
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm">WhatsApp</div>
                <a href="https://wa.me/380637123814" className="text-white hover:text-blue-400 transition-colors">
                  +380 (63) 712-38-14
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