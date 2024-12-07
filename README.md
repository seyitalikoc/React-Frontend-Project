# React Frontend Project
Bu proje, NestJS, Stripe API ve React kullanarak geliştirilmiş bir REST API ve Frontend uygulamasıdır. Stripe ödeme sistemini entegre ederek, kullanıcıların ödeme yapabilmesini sağlayan bir platform oluşturulmuştur.

## Teknolojiler
- Backend: NestJS (Node.js framework)
- Frontend: React
- Ödeme Sistemi: Stripe API

## Proje Özeti
Bu proje, kullanıcıların ödeme işlemleri yapabilmesini sağlayan bir uygulama sunmaktadır. Stripe API kullanarak ödeme entegrasyonu sağlanmıştır. Kullanıcılar frontend üzerinden ödeme detaylarını girebilir ve ödeme işlemi backend tarafından işlenerek sonuçlandırılır.

## Kurulum ve Çalıştırma

### Depoyu Klonlayın
GitHub reposunu bilgisayarınıza klonlayarak başlayın.

```bash
git clone https://github.com/seyitalikoc/React-Frontend-Project.git
```

### Backend (NestJS)
#### Backend klasörüne gidin:
```bash
cd React-Frontend-Project/rest-api
```

#### Bağımlılıkları yükleyin:
```bash
npm install
```

#### Çevresel değişkenleri ayarlayın: .env dosyasına gerekli API anahtarlarını ekleyin.
```bash
STRIPE_SECRET_KEY=your_stripe_secret_key
```

#### Uygulamayı başlatın:
```bash
npm run start
```
Backend, varsayılan olarak http://localhost:4000 adresinde çalışacaktır.

### Frontend (React)
#### Frontend klasörüne gidin:
```bash
cd React-Frontend-Project/frontend
```

#### Bağımlılıkları yükleyin:
```bash
npm install
```

#### Uygulamayı başlatın:
```bash
npm start
```
Frontend, varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

### Stripe API Entegrasyonu
Stripe ile ödeme yapabilmek için Stripe hesabınızın API anahtarlarını almanız gerekmektedir. Bu anahtarları backend projelerinizdeki .env dosyasına eklemeniz yeterlidir.

- Stripe API'yi kullanabilmek için önce bir Stripe hesabı oluşturun.
- Hesabınızı oluşturduktan sonra API anahtarlarını alıp .env dosyasına ekleyin.

Stripe API, varsayılan olarak http://localhost:3001 adresinde çalışacaktır.

## Proje Yapısı
```bash
/rest-api
  ├── src
  │   ├── guard/
  │   ├── login/
  │   ├── user/
  │   └── app.module.ts
  ├── .env
  ├── package.json
  └── tsconfig.json

/frontend
  ├── src
  │   ├── App/
  │   ├── Pages/
  │   ├── asssets/css
  │   ├── components
  │   └── index.tsx
  ├── .env
  ├── package.json
  └── webpack.config.js

/stripe_api
  ├── index.js
  ├── package-lock.json
  └── package.json
```

## Kullanıcı Arayüzü
Frontend uygulaması, kullanıcıların ödeme yapabilmesini sağlayacak sade bir arayüze sahiptir. Kullanıcılar ödeme bilgilerini girdikten sonra, backend ödeme işlemini işleyip sonucu kullanıcıya bildirir.







