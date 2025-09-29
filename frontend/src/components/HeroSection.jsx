import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Target, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Ваш бізнес заслуговує на
                  <span className="text-blue-600"> найкращу </span>
                  рекламу
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Створюємо ефективні рекламні кампанії з повним контролем результату. 
                  Стратегія + Аналітика + Креатив = Ваш успіх.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium group"
                >
                  РОЗПОЧАТИ ЗАРАЗ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    servicesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-medium"
                >
                  ДІЗНАТИСЯ БІЛЬШЕ
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">300%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Зростання продажів</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">∞</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Креативних ідей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Підтримка клієнтів</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Service Cards */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Таргетована реклама</h3>
                    <p className="text-sm text-gray-600">META, TikTok, Google</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Брендинг</h3>
                    <p className="text-sm text-gray-600">Створюємо унікальний образ</p>
                  </div>
                </div>

                <div className="space-y-6 pt-12">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">SMM</h3>
                    <p className="text-sm text-gray-600">Соціальні мережі</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Консультації</h3>
                    <p className="text-sm text-gray-600">Індивідуальний підхід</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;