import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: '',
    business: '',
    request: '',
    instagram: '',
    service: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Создаем FormData для отправки в Google Forms
      const googleFormData = new FormData();
      
      // Соответствие полей вашей Google формы
      // Примерные entry ID (нужно будет получить реальные)
      googleFormData.append('entry.123456789', formData.name); // Ваше Ім'я
      googleFormData.append('entry.987654321', formData.phone); // Номер для зв'язку  
      googleFormData.append('entry.456789123', formData.telegram); // Телеграм
      googleFormData.append('entry.789123456', formData.business); // Чим ви займатесь
      googleFormData.append('entry.321654987', formData.request); // Основний запит
      googleFormData.append('entry.654987321', formData.instagram); // посилання на Instagram
      googleFormData.append('entry.159753486', formData.service); // Яка послуга вас цікавить
      
      // Отправляем в вашу Google форму
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLScPTPBVvl4aMeZ2DQ5u921kfvqMwzTwSvfXzv8df-bWtB23XQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      });
      
      toast.success('Заявка надіслана! Ми зв\'яжемося з вами протягом 15 хвилин ⚡');
      
      // Очищаем форму
      setFormData({
        name: '',
        phone: '',
        telegram: '',
        business: '',
        request: '',
        instagram: '',
        service: ''
      });
      
    } catch (error) {
      console.error('Помилка відправки:', error);
      toast.error('Помилка відправки заявки. Спробуйте ще раз або зв\'яжіться з нами напрямую.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+380 (63) 712-38-14',
      action: 'Зателефонувати',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'arigamidigital@gmail.com',
      action: 'Написати лист',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+380637123814',
      action: 'Написати в WhatsApp',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Готові розпочати?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Отримайте безкоштовну консультацію та дізнайтеся, як ми можемо допомогти вашому бізнесу зрости
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Залишити заявку
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше ім'я *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше ім'я"
                      required
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Номер для зв'язку *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+380 (63) 712-38-14"
                        required
                        className="h-12"
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telegram">Телеграм</Label>
                      <Input
                        id="telegram"
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleInputChange}
                        placeholder="@your_username"
                        className="h-12"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business">Чим ви займаєтесь? (Яка у вас ніша?) *</Label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      placeholder="Опишіть вашу діяльність..."
                      required
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instagram">Посилання на Instagram</Label>
                    <Input
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      placeholder="https://instagram.com/your_account"
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Яка послуга вас цікавить? *</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Оберіть послугу</option>
                      <option value="Таргетована реклама">Таргетована реклама</option>
                      <option value="Google Ads (Контекстна)">Google Ads (Контекстна)</option>
                      <option value="SMM">SMM</option>
                      <option value="Таргет + SMM">Таргет + SMM</option>
                      <option value="Таргет + Google">Таргет + Google</option>
                      <option value="Комплекс 3 в 1">Комплекс 3 в 1</option>
                      <option value="Сайт/Каталог/Лендінг">Сайт/Каталог/Лендінг</option>
                      <option value="Дизайн креативів/Логотип">Дизайн креативів/Логотип</option>
                      <option value="Розвиток бренду під ключ">Розвиток бренду під ключ</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="request">Який ваш основний запит?</Label>
                    <Textarea
                      id="request"
                      name="request"
                      value={formData.request}
                      onChange={handleInputChange}
                      placeholder="Розкажіть детальніше про ваші потреби..."
                      rows={4}
                      className="resize-none"
                      disabled={isLoading}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-lg font-medium group"
                  >
                    {isLoading ? 'ВІДПРАВЛЯЄМО...' : 'ВІДПРАВИТИ ЗАЯВКУ'}
                    {!isLoading && <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Або зв'яжіться з нами
                </h3>
                
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${method.bgColor} rounded-full flex items-center justify-center`}>
                            <IconComponent className={`h-6 w-6 ${method.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-500">{method.title}</div>
                            <div className="font-medium text-gray-900">{method.value}</div>
                          </div>
                          <div className={`text-sm ${method.color} font-medium`}>
                            {method.action}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick CTA */}
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 text-white">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-semibold mb-4">
                    Потрібна термінова консультація?
                  </h4>
                  <p className="mb-6 opacity-90">
                    Зателефонуйте прямо зараз та отримайте відповіді на всі питання
                  </p>
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => window.open('tel:+380637123814', '_self')}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium"
                  >
                    ЗАТЕЛЕФОНУВАТИ ЗАРАЗ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;