import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, BarChart3, Palette, Award } from 'lucide-react';

const AboutSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Повний контроль',
      description: 'Ми контролюємо кожен етап рекламної кампанії - від стратегії до результату. Ваш бюджет працює максимально ефективно.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: BarChart3,
      title: 'Стратегія та аналітика',
      description: 'Глибокий аналіз ринку, конкурентів і аудиторії. Кожне рішення базується на даних, а не на здогадках.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Palette,
      title: 'Креативність',
      description: 'Додаємо нотку мистецтва у кожен проект. Створюємо креативи, які не просто продають, а захоплюють.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Award,
      title: 'Персональний підхід',
      description: 'Кожен бізнес унікальний. Розробляємо індивідуальні стратегії під ваші цілі, аудиторію та бюджет.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Main About Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900">
                  Чому обирають 
                  <span className="text-blue-600"> Arigami Digital</span>?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ми не просто запускаємо рекламу - ми створюємо результат. Наш підхід базується на трьох китах: 
                  контролі, стратегії та креативності.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Контроль на кожному етапі</h4>
                    <p className="text-gray-600">Від планування до звітності - ви завжди знаєте, що відбувається з вашою рекламою</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Аналітичний підхід</h4>
                    <p className="text-gray-600">Всі рішення базуються на даних та ретельному аналізі ринку і конкурентів</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Творчий підхід</h4>
                    <p className="text-gray-600">Креативність та мистецтво роблять вашу рекламу незабутньою</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm opacity-80">Задоволених клієнтів</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-2xl font-bold">5x</div>
                    <div className="text-sm opacity-80">Зростання ROI</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">Ваш успіх -</div>
                  <div className="text-2xl opacity-90">наш пріоритет</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-200 rounded-full blur-xl opacity-40"></div>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${advantage.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className={`h-8 w-8 ${advantage.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;