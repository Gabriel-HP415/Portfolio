# Nong Hung Phi — Portfolio

Backend Developer Intern portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

Design system: **Kinetic Precision** (from `../UI/` mockups).

## Run locally

```bash
npm install
npm run dev
```

## Customize

| File | What to update |
|------|----------------|
| `src/data/profile.ts` | Email, GitHub, LinkedIn, CV path |
| `src/data/projects.ts` | Real project URLs, thumbnails, metrics |
| `src/data/experience.ts` | University name, dates |
| `public/cv-nong-hung-phi.pdf` | Your CV file |

## Contact form → Gmail

Dùng [Web3Forms](https://web3forms.com) (miễn phí, ổn định hơn FormSubmit).

### Cấu hình (làm 1 lần)

1. Mở **https://web3forms.com**
2. Nhập email: `nonghungphi412005@gmail.com` → **Create Access Key**
3. Copy Access Key
4. Tạo file `d:\NHP\Portfolio\.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=paste_key_here
```

5. Build lại Docker:

```powershell
cd d:\NHP\Portfolio
docker compose up -d --build
```

6. Gửi thử form tại http://localhost:8080 — tin nhắn sẽ vào Gmail.

**Dev local:** copy key vào `web/.env` rồi `npm run dev`.

## Build

```bash
npm run build
npm run preview
```

## Docker

From the repository root (`Portfolio/`):

```bash
# Build and run (http://localhost:8080)
docker compose up --build -d

# Stop
docker compose down
```

Or from `web/` only:

```bash
docker build -t nhp-portfolio .
docker run --rm -p 8080:80 nhp-portfolio
```
