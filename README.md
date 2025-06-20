# 🎨 CreativeHub Registration

A responsive, accessible registration platform built with **Next.js App Router**, **Tailwind CSS**, and **Prisma ORM**. Designed for creative professionals and collaborators to seamlessly sign up, share expertise, and join a growing community.

---

## 🚀 Features

- ✍️ Elegant and mobile-first registration form
- 🌒 Dark mode toggle with Tailwind’s `dark:` variant
- 🔁 Real-time form validation with react-hook-form
- 🗂 PostgreSQL integration powered by Prisma
- ✅ Success screen with conditional rendering
- 🌐 Easily extensible for events, teams, and roles
- 📦 Clean file structure using `src/app/` and modular components

---

## 📂 Project Structure

src/
├── app/             # App Router pages & API
│   ├── page.tsx     # Main registration page
│   ├── success/     # Confirmation screen
│   └── api/register/
│       └── route.ts # POST handler for form submissions
├── components/      # Reusable UI components (Form, Inputs, ThemeToggle, etc.)
├── lib/             # Prisma client & helpers
├── prisma/          # schema.prisma
└── styles/          # Tailwind or animation overrides

---

## 🧪 Getting Started

1.Clone the repo:

```bash
git clone https://github.com/segni49/Creative-Hub-Registration.git
cd creativehub-registration
```

2.Install dependencies**:

```bash
npm install

3.Configure environment:

Create a `.env` file:

```env
DATABASE_URL="your_postgres_connection_url"
```

4.Set up Prisma:

```bash
npx prisma migrate dev --name init
```

5.Run the dev server:

```bash
npm run dev
```

---

## 💡 Technologies

- [Next.js 14 (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vercel](https://vercel.com/) (deployment)

---

## 🧠 Customization

Thinking of extending the project? Here are some ideas:

- 🎯 Add user authentication (NextAuth)
- 🗃 Admin dashboard to view/manage submissions
- 🌍 Multilingual support
- 📧 Email confirmations using Resend or Nodemailer

---

## 👋 Connect

Crafted with care by **[Segni Abera](https://github.com/Segni49) && [fetiya abdurehim]()
If you find this project helpful, feel free to ⭐️ the repo or contribute!

---

> “Creativity thrives when the right tools meet the right people. Welcome to the hub.” 🌟

Would you like a `CONTRIBUTING.md` template, issue labels, or deployment guide next? Let's give this project the polish it deserves. 💼✨
