# Nong Hung Phi — Portfolio

Backend Developer Intern portfolio (React + Vite + Tailwind). Design system: **Kinetic Precision**.

## Quick start

```bash
cd web
npm install
npm run dev
```

## Docker

```bash
docker compose up -d --build
```

Open http://localhost:8080

## Vercel (khuyên dùng — vercel.app)

Deploy miễn phí, URL dạng `https://portfolio-xxx.vercel.app`, tự build mỗi lần push.

### Cách 1 — Import từ GitHub (dễ nhất)

1. Đăng nhập [vercel.com](https://vercel.com) → **Add New Project**
2. Import repo **Gabriel-HP415/Portfolio**
3. **Root Directory:** để trống (repo root) — file `vercel.json` đã cấu hình build thư mục `web/`
4. **Environment Variables** (tùy chọn): `VITE_WEB3FORMS_ACCESS_KEY` = access key Web3Forms
5. **Deploy** → xong trong ~1 phút

### Cách 2 — CLI

```bash
npm i -g vercel
cd D:\NHP\Portfolio\Portfolio
vercel
```

Lần đầu chọn link GitHub account; production: `vercel --prod`.

### Lưu ý

| Nền tảng | Base URL |
|----------|----------|
| **Vercel** | `/` (domain gốc, không cần `/Portfolio/`) |
| **GitHub Pages** | `/Portfolio/` (workflow đã set `VITE_BASE_PATH`) |

Có thể dùng **cả hai**: Vercel cho link chính gửi recruiter, GitHub Pages làm backup.

---

## GitHub Pages (chạy trên web GitHub)

**URL sau khi bật:** https://gabriel-hp415.github.io/Portfolio/

### Bật lần đầu (trên github.com)

1. Vào repo **Portfolio** → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Push code lên nhánh `main` (workflow tự build & deploy)

### Cập nhật site

Mỗi lần `git push origin main`, GitHub Actions build lại và cập nhật site (1–3 phút).

Theo dõi tiến trình: tab **Actions** trên repo.

### Web3Forms trên Pages (tùy chọn)

**Settings** → **Secrets and variables** → **Actions** → New secret:

- Name: `VITE_WEB3FORMS_ACCESS_KEY`
- Value: access key từ https://web3forms.com

Không thêm secret thì form vẫn dùng **Open in Gmail** (mailto).

## Structure

| Path | Description |
|------|-------------|
| `web/` | React application |
| `UI/` | HTML design references |
| `docs/` | Design specification |

## Contact form

- **Default:** opens Gmail with pre-filled message (no API key).
- **Optional:** set `VITE_WEB3FORMS_ACCESS_KEY` in `.env` for silent submit. See `web/README.md`.

## Author

- **GitHub:** [Gabriel-HP415](https://github.com/Gabriel-HP415)
- **Email:** nonghungphi412005@gmail.com
