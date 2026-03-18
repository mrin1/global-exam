This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Here is a ultra-short version of the **README.md** for your project.

---

# 📑 Invoice Generator (Next.js + Zustand)

A professional, local-first billing application for creating, managing, and exporting invoices.

### 🚀 Core Features
* **Auth:** Register/Login with **Yup** validation.
* **State:** **Zustand** + **LocalStorage** (data persists on refresh).
* **Billing:** Dynamic item rows with real-time tax/total calculation.
* **Export:** Professional PDF generation via **jsPDF**.

### 🛠️ Tech Stack
* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS + Lucide Icons
* **Forms:** React Hook Form

### 📂 Quick Structure
* `src/app/hooks/useStore.ts` – Global state & LocalStorage logic.
* `src/app/components/` – UI parts (Auth, Table, Summary).
* `src/app/page.tsx` – Main App Controller.

### ⚙️ Setup
1. `npm install zustand jspdf html2canvas lucide-react react-hook-form @hookform/resolvers yup`
2. `npm run dev`

---

**Would you like me to help you prepare a 30-second "Elevator Pitch" to describe this project to an interviewer?**