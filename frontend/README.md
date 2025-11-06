# Invenza Frontend (Vite + React + TypeScript + Tailwind)

## Quick start

1. Extract the zip and open the folder in VS Code.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the dev server (Vite).
4. Open the shown localhost URL.

Notes:
- Tailwind is configured; if you run into issues, ensure your npm/node versions are recent.
- The app is a frontend-only demo. Authentication, Spring Security, and backend endpoints are not implemented here.
- Logo image is in `public/Invenza.png`. Replace it with your provided logo if needed.

Files of interest:
- `src/pages/Login.tsx` — Login screen with blue glass container.
- `src/pages/Dashboard.tsx` — Dashboard with header, search, add/delete, sample users, role & status dropdowns.

If you want I can:
- Add form validation.
- Wire this to your Spring backend (provide endpoints).
- Implement role-based routing and protected routes using a token simulation.
