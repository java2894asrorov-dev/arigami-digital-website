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
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-display font-bold text-2xl">ARIGAMI</div>
                <div className="text-base text-blue-400 font-mono font-bold uppercase tracking-wider">DIGITAL</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Створюємо ефективні рекламні кампанії з повним контролем результату. 
              Ваш успіх - наш пріоритет.
            </p>
            
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61576144653610" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/arigami.digital/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
              <a href="https://wa.me/380637123814" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
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