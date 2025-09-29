import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Таргетована реклама в META',
      description: 'Facebook та Instagram реклама з високою конверсією. Налаштування аудиторій, створення креативів та оптимізація кампаній.',
      features: ['Аналіз аудиторії', 'A/B тестування креативів', 'Оптимізація бюджету', 'Детальна аналітика'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      id: 2,
      title: 'Реклама в TikTok',
      description: 'Вірусний контент та ефективні рекламні кампанії в найпопулярнішій соціальній мережі серед молоді.',
      features: ['Трендовий контент', 'Таргетування Gen Z', 'Вертикальні відео', 'Інфлюенсер маркетинг'],
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      id: 3,
      title: 'Google Ads',
      description: 'Пошукова та контекстна реклама для максимального охоплення потенційних клієнтів у момент їхнього пошуку.',
      features: ['Ключові слова', 'Пошукова реклама', 'Медійна реклама', 'Shopping кампанії'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      id: 4,
      title: 'Брендинг',
      description: 'Створення унікального образу вашого бренду: від логотипу до повної айдентики та позиціонування на ринку.',
      features: ['Логотип і айдентика', 'Брендбук', 'Позиціонування', 'Дизайн система'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      id: 5,
      title: 'SMM',
      description: 'Комплексне ведення соціальних мереж: контент-план, створення постів, взаємодія з аудиторією та аналітика.',
      features: ['Контент-план', 'Створення контенту', 'Комьюніті менеджмент', 'SMM аналітика'],
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700'
    },
    {
      id: 6,
      title: 'Індивідуальні консультації',
      description: 'Персональний підхід до кожного бізнесу. Розробляємо унікальну рекламну стратегію під ваші цілі та бюджет.',
      features: ['Аналіз бізнесу', 'Стратегія реклами', 'Менторство', 'Постійна підтримка'],
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Наші послуги
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Повний спектр цифрового маркетингу для зростання вашого бізнесу
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden h-full"
              >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg`}></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => {
                    // Прокрутка к секции контактов для заказа услуги
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                    
                    // Автоматически выбираем услугу в форме
                    const serviceSelect = document.getElementById('service');
                    if (serviceSelect) {
                      serviceSelect.value = service.title;
                      serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                  }}
                  className={`group/btn flex items-center ${service.textColor} font-medium hover:gap-2 transition-all duration-200`}
                >
                  Детальніше
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;