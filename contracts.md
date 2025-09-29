# API Contracts для Arigami Digital Landing Page

## Огляд архітектури
- Frontend: React з shadcn/ui компонентами
- Backend: FastAPI з MongoDB
- Mock данi: `/src/data/mockData.js` (потрібно буде замінити на API дзвінки)

## API Endpoints для реалізації

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (обов'язково)",
  "email": "string (обов'язково, email формат)", 
  "phone": "string (необов'язково)",
  "service": "string (необов'язково)",
  "message": "string (необов'язково)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Заявка успішно надіслана",
  "id": "contact_id"
}
```

### 2. Newsletter Subscription
**Endpoint:** `POST /api/newsletter`

**Request Body:**
```json
{
  "email": "string (обов'язково, email формат)",
  "name": "string (необов'язково)"
}
```

### 3. Services Information
**Endpoint:** `GET /api/services`

**Response:**
```json
[
  {
    "id": 1,
    "title": "string",
    "description": "string",
    "features": ["string"],
    "price": "string",
    "duration": "string"
  }
]
```

## MongoDB Models

### ContactFormSubmission Model
```python
class ContactFormSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    service: Optional[str] = None
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"  # new, contacted, closed
```

### Service Model
```python
class Service(BaseModel):
    id: int
    title: str
    description: str
    features: List[str]
    price: str
    duration: str
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
```

## Frontend Integration Points

### Contact Form Component (`/src/components/ContactSection.jsx`)
**Поточний стан:** Використовує mock функцію `handleSubmit`
**Потрібні зміни:**
1. Замінити toast.success на реальний API дзвінок
2. Додати обробку помилок
3. Додати стан завантаження під час відправки форми

```javascript
// Замінити цей код:
const handleSubmit = (e) => {
  e.preventDefault();
  toast.success('Заявка надіслана! Ми зв\'яжемося з вами найближчим часом.');
  console.log('Form submitted:', formData);
  setFormData({...});
};

// На цей:
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    const response = await fetch(`${BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      toast.success('Заявка надіслана! Ми зв\'яжемося з вами найближчим часом.');
      setFormData({name: '', email: '', phone: '', service: '', message: ''});
    } else {
      throw new Error('Помилка відправки');
    }
  } catch (error) {
    toast.error('Помилка відправки заявки. Спробуйте ще раз.');
  } finally {
    setIsLoading(false);
  }
};
```

## Google Forms Integration
**Альтернативний варіант:** Замість власного backend можна використати Google Forms

### Конфігурація Google Form:
1. Створити Google Form з полями: Ім'я, Email, Телефон, Послуга, Повідомлення
2. Отримати action URL форми
3. Змінити форму для відправки на Google

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append('entry.123456789', name); // замінити на реальні entry IDs
  formData.append('entry.987654321', email);
  // ... інші поля
  
  try {
    await fetch('https://docs.google.com/forms/d/e/GOOGLE_FORM_ID/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });
    toast.success('Заявка надіслана!');
  } catch (error) {
    toast.error('Помилка відправки');
  }
};
```

## Mock Data Removal
Файли для очищення від mock даних:
- `/src/data/mockData.js` - видалити після реалізації API
- Компоненти, які використовують статичні дані з mockData

## Додаткові покращення
1. **Analytics:** Додати Google Analytics/Facebook Pixel для відстеження конверсій
2. **Captcha:** Додати reCAPTCHA для захисту форми від спаму
3. **Email notifications:** Налаштувати автоматичні email повідомлення при отриманні заявок
4. **Admin panel:** Створити простий админ-інтерфейс для перегляду заявок

## Пріоритети реалізації
1. **Високий:** Contact form API endpoint
2. **Середній:** Services API (якщо планується динамічне управління)
3. **Низький:** Newsletter subscription (якщо потрібно)

## Тестування
Після реалізації backend потрібно протестувати:
1. Відправку контактної форми
2. Валідацію полів форми
3. Обробку помилок
4. Збереження даних в MongoDB
5. Email нотифікації (якщо реалізовано)