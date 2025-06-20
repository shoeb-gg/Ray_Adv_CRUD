# 🚀 Products REST API

A modern, scalable REST API built with **NestJS** for managing products with full CRUD operations.

## ✨ Features

- 🎯 **Complete CRUD Operations** - Create, Read, Update, Delete products
- 🛡️ **Robust Error Handling** - Comprehensive error responses with proper HTTP status codes
- 📊 **Modern Database Stack** - PostgreSQL with Prisma ORM
- 🏗️ **Clean Architecture** - Modular, maintainable, and scalable code structure
- 🔒 **Type Safety** - Full TypeScript implementation
- 📋 **Consistent API Responses** - Standardized JSON response format

## 🏛️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client Apps   │    │   NestJS API    │    │   Supabase      │
│                 │────│                 │────│   PostgreSQL    │
│ Web/Mobile/etc  │    │  Controllers    │    │   Database      │
└─────────────────┘    │  Services       │    └─────────────────┘
                       │  Prisma ORM     │
                       └─────────────────┘
```

### 🛠️ Tech Stack

- **🟢 NestJS** - Progressive Node.js framework
- **🐘 PostgreSQL** - Powerful relational database (hosted on Supabase)
- **☁️ Supabase** - Modern database platform with real-time capabilities
- **🔺 Prisma** - Next-generation ORM for seamless database operations
- **📘 TypeScript** - Type-safe JavaScript development

## 🚀 Quick Start

### Prerequisites

- 📦 Node.js (v20 or higher)

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/shoeb-gg/Ray_Adv_CRUD
   cd Ray_Adv_CRUD
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   ```bash
   # Ask the owner of this repository for the .env file

   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   ```

5. **Start the application**

   ```bash
   npm start
   ```

🎉 **API will be running at** `http://localhost:6009`

## 📡 API Endpoints

| Method    | Endpoint       | Description        | Status Code |
| --------- | -------------- | ------------------ | ----------- |
| 🟢 POST   | `/product`     | Create new product | 201         |
| 🔵 GET    | `/product`     | Get all products   | 200         |
| 🔵 GET    | `/product/:id` | Get product by ID  | 200/404     |
| 🟡 PUT    | `/product/:id` | Update product     | 200/404     |
| 🔴 DELETE | `/product/:id` | Delete product     | 200/404     |

### 📋 Sample Request/Response

**POST /products**

```json
{
  "name": "Ruchi Chanachur",
  "description": "Crispy Chanachur",
  "price": 50,
  "inStock": true
}
```

**Response**

```json
{
  "data": {
    "id": 1,
    "name": "Ruchi Chanachur",
    "description": "Crispy Chanachur",
    "price": 50,
    "inStock": true,
    "createdAt": "2025-06-20T15:13:56.266Z",
    "updatedAt": "2025-06-20T15:13:56.266Z"
  },
  "success": true,
  "message": "Product Created Successfully!",
  "status": 201
}
```

## 🗄️ Database Schema

```sql
model Products {
  id          Int      @id @default(autoincrement())
  name        String   @db.VarChar(255)
  description String?  @db.Text
  price       Decimal  @db.Decimal(10,2)
  inStock     Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Happy Coding!** 🎉 If you found this helpful, don't forget to ⭐ star the repository!
