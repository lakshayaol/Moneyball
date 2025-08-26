# 💸 Moneyball — AI-Powered Daily Expense Tracker

Moneyball is an **AI-driven** daily expense tracker built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Get smart spending insights, just manage your expenses effortlessly.

---

## 🌟 Features

- 🤖 **AI insights** — Smart recommendations for budgeting and spending habits.
- ⚡ **Fast & dynamic** with modern frontend architecture.
- 📱 **Fully responsive** — Seamless experience on mobile, tablet, and desktop.
- 🌿 **Clean Tailwind UI** — Styled with modular simplicity.

---

## 📁 Project Structure

```plaintext
.
├── app/                      # Next.js App Router pages and layouts
├── components/               # Reusable UI components
├── contexts/                 # React Context providers (for dark/light theme)
├── lib/                      # Helper utilities and API functions
├── prisma/                   # Database schema and ORM setup (Prisma)
├── public/                   # Static assets (icons, images, fonts)
├── types/                    # TypeScript type definitions
├── .gitignore
├── README.md
├── middleware.ts             # Custom middleware (for clerk authentication)
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
````

---

## 🛠️ Tech Stack

* **Next.js 14 (App Router)**
* **TypeScript**
* **React 18**
* **Tailwind CSS**
* **Prisma ORM**
* **Vercel Hosting**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/lakshayaol/Moneyball.git
cd Moneyball
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root and add your database URL and clerk and openrouter API keys accordingly:

```env
NEXT_PUBLIC_VERCEL_URL=http://localhost:3000
DATABASE_URL = 

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = 

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

OPENROUTER_API_KEY= 
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Then visit **`http://localhost:3000`** to view your app live.

---

## 🧠 How It Works

1. You input your daily expenses through the UI.
2. The data is sent to the backend (via fetched API routes or Prisma).
3. AI logic processes expense patterns and delivers helpful insights.
4. Insights and expense history are rendered on the frontend for easy tracking and analysis.

---

## 👨‍💻 Developer

Built with ❤️ by **Lakshay Aol**

* 💼 [LinkedIn](https://www.linkedin.com/in/lakshay-aol/)
* 🛠️ [GitHub](https://github.com/lakshayaol)

---

## 🧾 License

Released under the **MIT License**. Feel free to use, adapt, and contribute!
