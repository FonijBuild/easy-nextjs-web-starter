<div dir="rtl" align="right">

<div align="center">

# استارتر وب‌اپلیکیشن Next.js

**پایه‌ای Production-capable با Next.js برای SaaS، داشبورد، پورتال و اپلیکیشن‌های مجهز به هوش مصنوعی.**

[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?logo=github&logoColor=white)](https://github.com/easy-starter/easy-starter-nextjs-web-app/generate) [![CI](https://github.com/easy-starter/easy-starter-nextjs-web-app/actions/workflows/ci.yml/badge.svg)](https://github.com/easy-starter/easy-starter-nextjs-web-app/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) ![Status: foundation](https://img.shields.io/badge/status-foundation-orange) ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)

[English](README.md) · [مستندات](https://github.com/easy-starter/easy-starter-docs) · [گزارش مشکل](https://github.com/easy-starter/easy-starter-nextjs-web-app/issues/new/choose)

</div>

> [!IMPORTANT]
> این ریپوزیتوری در مرحله‌ی **Foundation** است. تا انتشار اولین نسخه‌ی پایدار، آن را Production-ready در نظر نگیرید.

## چه مشکلی را حل می‌کند؟

پوسته‌ی اپلیکیشن، جریان‌های کاربر، گیت‌های کیفیت و مرزهای اتصال موردنیاز محصولات وب احراز هویت‌شده را استاندارد می‌کند.

## این تمپلیت برای چه پروژه‌هایی مناسب است؟

- اپلیکیشن‌های SaaS
- پورتال مشتری
- داشبورد و ابزار داخلی
- محصولات عضویتی و اشتراکی
- وب‌اپلیکیشن‌های مجهز به AI

**مناسب این موارد نیست:** برای سایت‌های صرفاً مارکتینگ یا بک‌اندهای فروشگاهی Domain-heavy مناسب نیست.

## امکانات پایه

- گروه Routeهای عمومی و احراز هویت‌شده
- پایه‌ی داشبورد، Onboarding، حساب کاربری و Error State
- مرزهای Typed برای Environment و API
- هوک‌های تست، دسترس‌پذیری، Observability و CI
- پروفایل استقرار Docker و پلتفرم‌های مدیریت‌شده

توضیحات جزئی معماری، قراردادها، پروفایل‌های استقرار و روش توسعه در [`docs/`](docs/) قرار می‌گیرند. توسعه‌ی فیچر از [`specs/`](specs/) شروع می‌شود و قوانین ایجنت‌ها در [`AGENTS.md`](AGENTS.md) نگهداری می‌شوند.

## شروع سریع

۱. روی **Use this template** بزنید یا فرمان زیر را اجرا کنید:

```bash
gh repo create my-project --template easy-starter/easy-starter-nextjs-web-app --private --clone
cd my-project
```

۲. نام پروژه، متادیتای پکیج و متغیرهای محیطی را تنظیم کنید.
۳. پروژه را اجرا کنید:

```bash
cp .env.example .env.local
make setup
make dev
make check
```

۴. اولین مشخصات فیچر را در `specs/` بنویسید.
۵. فیچر را پیاده‌سازی کنید و `make check` را سبز نگه دارید.

## قرارداد همکاری

- قبل از تغییر کد، `AGENTS.md` و Spec مرتبط را بخوانید.
- پیش از افزودن Abstraction یا Dependency جدید، از الگوهای موجود استفاده کنید.
- Credential یا داده‌ی واقعی پروداکشن را Commit نکنید.
- پیش از Pull Request تمام Quality Checkهای ریپو را اجرا کنید.
- تصمیم‌های معماری را در `docs/decisions/` ثبت کنید.

## مستندات

از `docs/getting-started.md` شروع کنید. راهنمای کامل‌تر توسعه‌ی AI-first در [Easy Starter Docs](https://github.com/easy-starter/easy-starter-docs) نگهداری می‌شود.

## مشارکت و پشتیبانی

قوانین مشارکت در [`CONTRIBUTING.md`](CONTRIBUTING.md)، روش دریافت کمک در [`SUPPORT.md`](SUPPORT.md) و گزارش مسائل امنیتی در [`SECURITY.md`](SECURITY.md) قرار دارد.

## مجوز

این پروژه تحت [مجوز MIT](LICENSE) منتشر می‌شود.

</div>
