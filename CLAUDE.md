# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start development server (with auto-reload)
node server.js
# or if nodemon is preferred:
npx nodemon server.js

# Test database connection
node test-db.js
```

Note: `npm start` in package.json is misconfigured (points to `nodemon hola`). Use the commands above directly.

## Architecture

**Real estate property management system** ("INMOBILIARIA VIVES LARA") — a Node.js/Express REST API with a vanilla HTML/CSS/JS frontend served as static files.

### Stack
- **Backend:** Express.js (v5) on Node.js
- **Database:** PostgreSQL via `pg` pool — Neon serverless instance configured in `.env` as `DATABASE_URL`
- **Auth:** JWT (8h expiry) + bcrypt password hashing
- **File uploads:** Multer — images stored locally in `public/uploads/`
- **Frontend:** Static HTML pages in `public/` (no build step, no framework)

### Key files
- `server.js` — entire backend: middleware, auth, all API routes
- `db.js` — exports a `pg.Pool` instance used throughout `server.js`
- `public/*.html` — individual pages; each fetches its data from the API using `fetch()` and manages its own JWT token from `localStorage`

### Database schema (3 tables)
- `usuarios` — users with fields: `id`, `nombre`, `email`, `password_hash`, `rol` (`admin`/`editor`), `activo`
- `propiedades` — property listings with extensive fields (price, type, location, dimensions, amenities, status `borrador`/`publicado`)
- `propiedad_multimedia` — images linked to properties (`propiedad_id`, `url`, `es_principal`, `orden`)

### Auth flow
1. `POST /api/login` validates credentials and returns a JWT
2. Protected routes use `verificarToken` middleware (reads `Authorization: Bearer <token>` header)
3. Admin-only routes additionally call `verificarAdmin` middleware
4. Frontend stores token in `localStorage` and attaches it to all API requests

### Image upload flow
Multer stores files to `public/uploads/` with `{timestamp}-{random}{ext}` filenames. URLs are saved in `propiedad_multimedia` as `/uploads/filename`. On property deletion, associated image files are deleted from disk before the DB rows are removed.

### Role model
- `admin` — full access including user management
- `editor` — can manage properties but cannot access user management endpoints
