import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, TrendingUp, Zap, Rocket, Heart } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="text-3d">Наша Місія</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ми не просто робимо рекламу — ми створюємо майбутнє вашого бізнесу
            </p>
          </motion.div>

          {/* Main mission content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                  Маркетинг — це <span className="text-blue-600">серце</span> кожного успішного бізнесу
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  У світі, де щосекунди з'являються тисячі нових компаній, виживають лише ті, хто вміє правильно розказати про себе. Маркетинг — це не витрати, це <strong className="text-purple-600">інвестиція у ваше майбутнє</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Кожен долар, вкладений у якісну рекламу, повертається десятикратно. Ми знаємо, як зробити ваш голос почутим серед мільйонів інших.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Наша Філософія</h4>
                    <p className="text-gray-600">
                      Ми віримо, що кожен бізнес має свою унікальну історію. Наше завдання — розказати її так, щоб світ слухав із захопленням.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 border border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <Rocket className="h-16 w-16 mb-6 mx-auto" />
                  <h3 className="text-2xl font-bold mb-4 text-center">Чому маркетинг — це №1?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>Без клієнтів немає бізнесу</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>Перше враження визначає все</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>Конкуренція не спить</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>Ваша історія заслуговує на увагу</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom icons grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {[
              { icon: Target, label: 'Точне таргетування' },
              { icon: Lightbulb, label: 'Креативні ідеї' },
              { icon: TrendingUp, label: 'Зростання ROI' },
              { icon: Zap, label: 'Швидкі результати' },
              { icon: Heart, label: 'Лояльні клієнти' },
              { icon: Rocket, label: 'Масштабування' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;