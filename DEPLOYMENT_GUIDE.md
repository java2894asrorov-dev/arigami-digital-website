# 📋 Инструкции по настройке домена и получению сайта

## 🌐 Как получить entry ID для полной интеграции Google Forms

**ВАЖНО:** Сейчас форма интегрирована, но нужно получить правильные entry ID для каждого поля.

### Шаги для получения entry ID:

1. **Откройте вашу Google форму:** https://forms.gle/61vKVxPuwwoiUmAu8
2. **Нажмите F12** (открыть Developer Tools)
3. **Перейдите на вкладку "Network"**
4. **Заполните форму** тестовыми данными
5. **Нажмите "Submit"**
6. **В Network найдите запрос "formResponse"**
7. **Скопируйте entry ID для каждого поля**

### Пример того, что вы увидите:
```
entry.123456789: "Имя пользователя"
entry.987654321: "+380671234567" 
entry.456789123: "@telegram_user"
entry.789123456: "Мой бизнес"
entry.321654987: "Мой запрос"
entry.654987321: "https://instagram.com/account"
entry.159753486: "Таргетована реклама"
```

### После получения entry ID замените в коде:
В файле `/app/frontend/src/components/ContactSection.jsx` найдите:
```javascript
googleFormData.append('entry.123456789', formData.name); // <- ЗАМЕНИТЬ
googleFormData.append('entry.987654321', formData.phone); // <- ЗАМЕНИТЬ
// и так далее...
```

---

## 🚀 Настройка домена arigamidigital.com

### Вариант 1: Netlify (РЕКОМЕНДУЮ) ⭐
**Простейший способ для статических сайтов**

1. **Зарегистрируйтесь на Netlify:** https://netlify.com
2. **Подключите GitHub репозиторий** (см. инструкцию ниже)
3. **В настройках домена добавьте:** `arigamidigital.com`
4. **Настройте DNS** у регистратора домена:
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

### Вариант 2: Vercel
1. **Зарегистрируйтесь на Vercel:** https://vercel.com
2. **Импортируйте репозиторий**
3. **Добавьте домен в настройках**

### Вариант 3: Свой хостинг
- **Shared hosting:** HostGator, Bluehost
- **VPS:** DigitalOcean, Vultr
- **Облако:** AWS, Google Cloud

---

## 📁 Как скачать и получить доступ к сайту

### Способ 1: Скачать файлы напрямую
```bash
# Создайте архив всего проекта
cd /app
tar -czf arigami-website.tar.gz frontend/ backend/ contracts.md

# Или скачайте только frontend
tar -czf arigami-frontend.tar.gz frontend/
```

### Способ 2: Создание GitHub репозитория

1. **Создайте новый репозиторий на GitHub:**
   - Название: `arigami-digital-website`
   - Сделайте его приватным или публичным

2. **Загрузите код:**
```bash
cd /app
git init
git add .
git commit -m "Initial Arigami Digital website"
git branch -M main
git remote add origin https://github.com/ВАШ_USERNAME/arigami-digital-website.git
git push -u origin main
```

### Способ 3: Экспорт для хостинга

**Для production сборки:**
```bash
cd /app/frontend
npm run build
# Папка build/ будет содержать готовый сайт для хостинга
```

---

## 🔧 Файлы для изменения контента

### Основной контент:
- `/app/frontend/src/components/HeroSection.jsx` - Главная секция
- `/app/frontend/src/components/ServicesSection.jsx` - Услуги
- `/app/frontend/src/components/AboutSection.jsx` - О компании
- `/app/frontend/src/components/ContactSection.jsx` - Контакты
- `/app/frontend/src/data/mockData.js` - Данные и настройки

### Стили и дизайн:
- `/app/frontend/src/App.css` - Основные стили
- `/app/frontend/src/index.css` - Цветовая палитра
- `/app/frontend/tailwind.config.js` - Настройки Tailwind

### Настройки:
- `/app/frontend/package.json` - Зависимости
- `/app/frontend/.env` - URL backend (если нужен)

---

## ⚡ Быстрый деплой на Netlify

### Автоматическая сборка:
1. **Подключите GitHub репозиторий к Netlify**
2. **Настройки сборки:**
   ```
   Build command: cd frontend && npm run build
   Publish directory: frontend/build
   ```
3. **Каждый push автоматически обновит сайт**

### Настройки для SPA (Single Page Application):
Создайте файл `/app/frontend/public/_redirects`:
```
/*    /index.html   200
```

---

## 📋 Checklist перед деплоем

- [ ] Получены entry ID от Google Forms
- [ ] Обновлены entry ID в коде
- [ ] Протестирована отправка формы
- [ ] Зарегистрирован домен arigamidigital.com
- [ ] Создан GitHub репозиторий
- [ ] Настроен хостинг (Netlify/Vercel)
- [ ] Настроены DNS записи
- [ ] Проверена работа сайта на домене

---

## 💡 Дополнительные возможности

### Google Analytics:
Добавьте в `/app/frontend/public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Facebook Pixel:
```html
<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

---

## 🆘 Служба поддержки

Если возникнут проблемы:
1. **GitHub Issues** - создайте issue в репозитории
2. **Документация хостинга** - Netlify/Vercel docs
3. **Консоль браузера** - F12 для отладки

**Сайт готов к запуску! 🚀**