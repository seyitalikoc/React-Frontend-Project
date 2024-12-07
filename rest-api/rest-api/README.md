<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# NestJS REST API with Dockerized Database

Bu proje, **NestJS** framework'u kullanılarak geliştirilmiş bir **REST API** uygulamasıdır. Veritabanı olarak PostgreSQL kullanılmıştır.

## Proje Yapısı
- **NestJS**: Sunucu tarafında kullanılan backend framework.
- **PostgreSQL**: Veritabanı, Docker üzerinde çalışmaktadır.

## Başlarken

Bu adımlar, projenin yerel ortamda çalışmasını sağlamak için gerekenleri açıklamaktadır.

### Gereksinimler
- [Node.js](https://nodejs.org/) (LTS versiyon önerilir)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Adım 1: Depoyu Klonlayın
GitHub reposunu bilgisayarınıza klonlayarak başlayın.

```bash
git clone https://github.com/seyitalikoc/NestJs-Rest-API.git
cd restapi/project-name
```

### Adım 2: Bağımlılıkları Yükleyin
Projede kullanılan npm bağımlılıklarını yüklemek için şu komutu çalıştırın:
```bash
npm install
```

### Adım 3: Uygulamayı Çalıştırın
Uygulamayı yerel ortamda çalıştırmak için aşağıdaki komutu kullanın:

```bash
npm run start:dev
```

Uygulama, varsayılan olarak http://localhost:3000 adresinde çalışacaktır.


## API Kullanımı
### Başlangıçta Yapılacak İşlemler
- API'nin düzgün çalışabilmesi için, veritabanındaki gerekli tabloların oluşturulmuş olması gerekir. Bunun için bir migrasyon işlemi yapılabilir.
- NestJS'te kullanılan ORM (örneğin TypeORM veya Sequelize) ile veritabanı migrasyonlarını çalıştırabilirsiniz.

## Kullanılabilir Endpoints (USER)

### 1. `GET /users`
**Açıklama**: Kullanıcıların listesini döndürür.

- **Yöntem**: GET
- **URL**: `/users`

#### Örnek İstek:
```bash
GET  http://localhost:3000/users
```

### 2. `GET /users/:id`
**Açıklama**: Kullanıcıların listesini döndürür.

- **Yöntem**: GET
- **URL**: `/users/:id`

#### Gerekli Parametreler:
- **id**: Bİlgileri istenilen kullanıcın id'si (Integer).

#### Örnek İstek:
```bash
GET  http://localhost:3000/users/1
```

### 3. `POST /users/create`
**Açıklama**: Kullanıcı kaydı yapmak için kullanılır.

- **Yöntem**: POST
- **URL**: `/users/create`

#### Gerekli Parametreler:
- **name**: Kullanıcının  adı (String).
- **profession**: Kullanıcının işi (String).
- **username**: Kullanıcının kullanıcı adı (String).
- **password**: Kullanıcının şifresi (String).

#### Örnek İstek:
```bash
POST http://localhost:3000/users/create

{
  "name": "your-name",
  "profession": "your-profession",
  "username": "your-username",
  "password": "your-password"
}
```

### 4. `PATCH /users/:id`
**Açıklama**: Kullanıcı bilgilerini güncellemek için kullanılır.

- **Yöntem**: PATCH
- **URL**: `/users/:id`

#### Gerekli Parametreler:
- **id**: Güncellenecek olan kullanıcı id'si (Integer).
- **name**: Kullanıcının  adı (String).
- **profession**: Kullanıcının işi (String).
- **username**: Kullanıcının kullanıcı adı (String).
- **password**: Kullanıcının şifresi (String).

#### Örnek İstek:
```bash
PATCH http://localhost:3000/user/1

{
  "name": "your-name",
  "profession": "new-profession",
  "username": "new-username",
  "password": "new-password"
}
```


### 5. `PUT /users/:id`
**Açıklama**: Kullanıcı bilgilerini güncellemek için kullanılır.

- **Yöntem**: PUT
- **URL**: `/users/:id`

#### Gerekli Parametreler:
- **id**: Güncellenecek olan kullanıcı id'si (Integer).
- **name**: Kullanıcının  adı (String).
- **profession**: Kullanıcının işi (String).
- **username**: Kullanıcının kullanıcı adı (String).
- **password**: Kullanıcının şifresi (String).

#### Örnek İstek:
```bash
PUT http://localhost:3000/user/1

{
  "name": "your-name",
  "profession": "new-profession",
  "username": "new-username",
  "password": "new-password"
}
```


### 6. 'DELETE /users/:id'
**Açıklama**: Kullanıcıyı silmek için kullanılır.

- **Yöntem**: DELETE
- **URL**: `/users/:id`

#### Gerekli Parametreler:
- **id**: Kullanıcı id'si (Integer).

#### Örnek İstek:
```bash
DELETE http://localhost:3000/users/1
```

## Kullanılabilir Endpoints (LOGIN)

### 1. 'POST /login'
**Açıklama**: Kullanıcı girişi yapmak için kullanılır. Başarılı bir girişten sonra, kullanıcıya bir JWT token döner. Bu token, diğer korumalı API uç noktalarına erişim sağlamak için kullanılır.

- **Yöntem**: POST
- **URL**: `/login`

#### Gerekli Parametreler:
- **username**: Kullanıcı username'i (String).
- **password**: Kullanıcı şifresi (String).

#### Örnek İstek:
```bash
POST http://localhost:3000/login

{
  "username": "your-username"
  "password": "your-password"
}
```

### 2. 'POST /login/refresh'
**Açıklama**: JWT Token yenilemek için kullanılır.

- **Yöntem**: GET
- **URL**: `/event/id:eventId`

#### Gerekli Parametreler:
- **JWT TOKEN**: Kullanıcıya verdiğimiz token (Integer).

#### Örnek İstek:
```bash
POST http://localhost:3000/login/refresh
```

### 3. `GET /login/find/:username`
**Açıklama**: Belirtilen kullanıcı adına sahip kullanıcının bilgileriin getirir.

- **Yöntem**: GET
- **URL**: `/login/find/:username`

#### Gerekli Parametreler:
- **username**: İstenilen kullanıcının kullanıcı adı (String).

#### Örnek İstek:
```bash
POST http://localhost:3000/login/find/searching-username
```

### 4. `GET /login/profile`
**Açıklama**: Giriş yapmış olan kullanıcının bilgileriin gösterir.

- **Yöntem**: GET
- **URL**: `/login/profile`

#### Örnek İstek:
```bash
POST http://localhost:3000//login/profile
```

## Testler
### Birleşik Testler:
- Proje, NestJS'in sağladığı @nestjs/testing modülünü kullanarak test edilmiştir.
- API uç noktaları için birim testleri yazılmalıdır. Controller'lar ve Service'ler arasındaki bağımsızlık, testlerin yazılabilirliğini artırır.
- Herhangi bir değişiklikten önce, testlerin başarıyla geçip geçmediğini kontrol etmek önemlidir.

### E2E Testler:
- Entegre testler, supertest kullanılarak yazılabilir. Bu testler, tüm API akışlarını test etmek ve potansiyel hataları bulmak için önemlidir.
- Testleri çalıştırmak için npm run test:e2e komutunu kullanabilirsiniz.


## Proje Yapısı
```bash
.
├── src/
│   ├── app.module.ts           # Ana modül
│   ├── login/                  # Kullanıcı girişi ve jwt token yönetim modülü
│   ├── user/                   # Kullanıcı yönetimi modülü
│   └── guard/                  # Kimlik doğrulama modülü
└── README.md                   # Proje açıklaması
```

## Geliştirici Notları

### **API Güvenliği**
- **JWT (JSON Web Tokens)**: API erişimi için **JWT** kullanılır. Kullanıcı giriş yaptıktan sonra, her API isteğinde **Authorization** başlığında `Bearer <token>` göndermeniz gerekir.
  - Token'ın geçerliliği süresi dolduğunda, kullanıcı yeniden giriş yapmak zorunda kalacaktır.

- **Guard**: Bu yapı ile bazı endpointler **JWT TOKEN** olmadan bir dönüş yapmamaktadır. Örnek *"GET http://localhost:3000/user/events"* endpointi bunlardan bir tanesidir.

