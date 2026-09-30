# คู่มือและคำสั่งสำหรับการ Deploy โปรเจกต์ (Deployment Guide)

เอกสารนี้รวบรวมขั้นตอนและคำสั่งที่จำเป็นทั้งหมดสำหรับการ Deploy ขึ้น **Cloudflare Pages** และการจัดการ/Deploy **Sanity Studio / Schema**

---

## 1. การ Deploy เว็บไซต์ขึ้น Cloudflare Pages

### 1.1 การเตรียมตัวก่อน Deploy
ตรวจสอบให้แน่ใจว่าได้ตั้งค่า Environment Variables ที่จำเป็นในโปรเจกต์ หรือบน Dashboard ของ Cloudflare แล้ว:
- `RESEND_API_KEY`: API Key สำหรับส่งอีเมลแจ้งเตือนการจอง (เช่น `re_xxxxxxxxxxxxxxxxxxxx`)
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: รหัส Project ID ของ Sanity
- `NEXT_PUBLIC_SANITY_DATASET`: เช่น `production`

---

### 1.2 วิธีที่ 1: Deploy ผ่านเครื่องโดยตรง (CLI)

> ⚠️ **ข้อสำคัญ:** ต้องทำการ Login บัญชี Cloudflare ก่อนเริ่ม Deploy (ทำเพียงครั้งแรก หรือเมื่อ Token หมดอายุ)

1. **เข้าสู่ระบบ Cloudflare:**
   ```bash
   npx wrangler login
   ```
   *(ระบบจะเปิดหน้าต่าง Browser ให้กดปุ่ม Allow เพื่อยืนยันการเข้าสู่ระบบ)*

2. **Build สำหรับ Production:**
   ```bash
   npm run build
   ```

3. **Deploy โฟลเดอร์ผลลัพธ์ (`out`) ไปยัง Cloudflare Pages:**
   ```bash
   npx wrangler pages deploy out --project-name sr-travel
   ```
   *หรือใช้คำสั่งสั้น:*
   ```bash
   npm run pages:deploy
   ```

---

### 1.3 วิธีที่ 2: Deploy อัตโนมัติผ่าน GitHub (Git Integration บน Cloudflare Dashboard)

1. ไปที่ [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**
2. เลือก Repository: `Arthy001/srtravel`
3. ตั้งชื่อโปรเจกต์: `sr-travel`
4. ตั้งค่า Build Settings:
   - **Framework preset:** `Next.js (Static Export)` หรือ `None`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. เพิ่ม **Environment Variables** ในหน้า Settings > Variables and Secrets:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
6. กด **Save and Deploy** (หลังจากนี้เมื่อ `git push` ขึ้น GitHub ระบบจะ Deploy ให้อัตโนมัติ)

---

## 2. การจัดการและ Deploy Sanity (CMS & Studio)

### 2.1 เข้าใช้งาน Studio ภายในเว็บ (Embedded Studio)
โปรเจกต์นี้ฝัง Sanity Studio ไว้ภายใน Next.js App Router อยู่แล้วที่ Route `/studio`:
- **URL ภายในเครื่อง:** `http://localhost:3001/studio`
- **URL บน Production:** `https://<your-domain>/studio`

---

### 2.2 การ Deploy Sanity Studio แบบ Standalone (ผ่าน Sanity CLI)

หากต้องการ Deploy Sanity Studio ไปยัง Subdomain ของ Sanity (เช่น `https://<your-project>.sanity.studio`):

1. **ล็อกอิน Sanity CLI:**
   ```bash
   npx sanity login
   ```

2. **Deploy Studio:**
   ```bash
   npx sanity deploy
   ```

---

### 2.3 การ Deploy Sanity GraphQL API / Schema (ถ้ามีการใช้งาน GraphQL)

```bash
npx sanity graphql deploy
```

---

## 3. สรุปคำสั่งด่วน (Cheatsheet) เรียงตามลำดับการทำงาน

| ขั้นตอน | งานที่ต้องทำ | คำสั่ง |
| :---: | :--- | :--- |
| **1** | **ล็อกอิน Cloudflare (ทำครั้งแรก)** | `npx wrangler login` |
| **2** | **Build ไฟล์โปรเจกต์** | `npm run build` |
| **3** | **Deploy ขึ้น Cloudflare Pages** | `npx wrangler pages deploy out --project-name sr-travel` *(หรือ `npm run pages:deploy`)* |
| **-** | **ล็อกอิน Sanity (สำหรับจัดการ CMS)** | `npx sanity login` |
| **-** | **Deploy Sanity Studio Standalone** | `npx sanity deploy` |
