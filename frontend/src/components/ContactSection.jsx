import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Заявка надіслана! Ми зв\'яжемося з вами найближчим часом.');
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const services = [
    'Таргетована реклама в META',
    'Реклама в TikTok',
    'Google Ads',
    'Брендинг',
    'SMM',
    'Індивідуальна консультація'
  ];

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
                    <Label htmlFor="name">Ім'я *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше ім'я"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+380 (63) 712-38-14"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Послуга</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Оберіть послугу</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Повідомлення</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Розкажіть про ваш проект або задайте питання..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-lg font-medium group"
                  >
                    ВІДПРАВИТИ ЗАЯВКУ
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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