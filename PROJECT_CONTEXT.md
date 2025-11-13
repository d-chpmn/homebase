# 🏠 Homebase — Project Context

**Last Updated:** November 12, 2025

---

## 📋 Overview

**Homebase** is a web-based command center for loan officers and real estate agents to collaborate, educate clients, and manage transactions more efficiently.

**Core Value Prop:**
- Loan officers can quickly educate clients on loan topics using pre-written, AI-powered explanations.
- Realtors and loan officers can collaborate seamlessly.
- Homebuyers get a polished, professional digital experience.
- All three user types stay organized and connected.

---

## 👥 Primary Users

1. **Loan Officers (LOs)** — core users
   - Log in and use Homebase as their daily workspace for managing buyers, deals, and partner relationships.

2. **Realtors (Referral Partners)** — secondary users
   - Collaborate with LOs, share clients, and eventually create home searches for buyers.

3. **Homebuyers** — limited access (Phase 2+)
   - Receive personalized info, see progress, and interact with their loan officer or agent through updates and educational tools.

---

## 🔁 Core Workflows (MVP)

### 1. 🧭 **Dashboard / Hub**
- Landing page after login for loan officers.
- Displays quick links: "To-Do," "Messages," "Quotes," "Topics," etc.
- **MVP scope:** Static/mock version with navigation to other sections.

### 2. 🗂️ **Topic & Resource Hub**
- Loan officers click a topic (e.g., *Gift Funds, Co-signer, Schedule C income*).
- Get AI-powered, pre-written explanations or visual aids to explain concepts to clients on calls.
- **MVP scope:** List of topics with expandable descriptions; mock data.

### 3. 💬 **Messaging & Notes**
- Internal area for quick notes on clients or partners.
- Eventually integrate real messaging (Phase 2+).
- **MVP scope:** Simple note-taking UI; mock data.

### 4. 🧾 **Quick Quote / Calculator Tool**
- Simple frontend tool to estimate loan payments or affordability ranges.
- Already exists in the `/calculators` folder.
- **MVP scope:** Integrate into the app or link from Dashboard.

### 5. 🔍 **Realtor Home Search (Future Phase)**
- Realtors create saved searches for clients (like MLS).
- Buyers receive alerts when new matching properties appear.
- **Timeline:** Phase 3 (3–6 months out).

---

## 🧱 Architecture & Tech Stack

| Layer                | Tool/Tech                             | Purpose                                   |
| -------------------- | ------------------------------------- | ----------------------------------------- |
| **Frontend**         | React 19 + Vite 7                     | Core app + fast dev environment           |
| **Styling**          | Tailwind CSS                          | Rapid design, consistent theming          |
| **Routing**          | React Router v6 (HashRouter)          | Client-side page navigation               |
| **State Management** | React Context (Phase 1) → Redux later | Handle user, topic, and session data      |
| **Backend**          | Node.js + Express (Phase 2+)          | API + database                            |
| **Database**         | Firebase or MongoDB (Phase 2+)        | User data, topics, notes, quotes          |
| **Deployment**       | GitHub Pages (now) → Vercel/AWS later | Static hosting (MVP); full hosting later  |
| **Auth (future)**    | Firebase Auth or Supabase             | User login and role-based access          |

---

## 🎨 Design & Branding

- **Primary Color:** Navy Blue `#00305B`
- **Accent Color:** Yellow `#FEBC42`
- **Typography:** Clean, professional (suggest: Inter or similar sans-serif)
- **Style:** Elegant, professional, slightly tech-forward (trustworthy but modern)
- **Tone:** Clear, friendly, expert

---

## 📅 Roadmap

### **Phase 1: Foundation & MVP Skeleton (Weeks 1–2)**
- ✅ Environment setup (Vite, Tailwind, Routing)
- ✅ Basic routing & page structure
- 🔄 Build Dashboard + Topic Hub skeleton
- Build Messaging + To-Do pages with mock data
- Integrate calculators into the app
- Deploy to GitHub Pages for internal demo

### **Phase 2: Interactivity & Backend (Weeks 3–6)**
- Add interactivity (buttons, forms, state)
- Connect to a mock or real API
- Implement Firebase Auth (optional MVP; consider Phase 3)
- Deploy to Vercel or AWS for production demo
- Gather feedback from 2–3 loan officers

### **Phase 3: Scale & Features (Months 2–3)**
- Add Realtor Home Search
- Implement real authentication & role-based access
- Add property + buyer data sync
- Refine UI and branding
- Performance optimization

---

## 📝 Development Guidelines

### **File Structure**
```
src/
  pages/          # Route pages (Dashboard, Topics, Messaging, Quotes, ToDo)
  components/     # Reusable components (Navbar, Card, Modal, etc.)
  context/        # React Context providers (auth, data, etc.)
  hooks/          # Custom React hooks
  utils/          # Helpers, API calls, formatters
  assets/         # Images, icons, fonts
  App.jsx         # Main app + router
  main.jsx        # Vite entry point
```

### **Component Naming**
- Use PascalCase for components (e.g., `Dashboard.jsx`, `TopicCard.jsx`).
- Use kebab-case for file names if needed for clarity (e.g., `user-profile.jsx`).

### **Styling**
- Use Tailwind utility classes for all styles; avoid custom CSS unless necessary.
- Use brand colors via Tailwind config (define custom colors in `tailwind.config.js`).
- Keep components responsive (mobile-first approach).

### **State Management**
- Use React Context for user, auth, and app-wide state (Phase 1).
- Transition to Redux Toolkit if state becomes complex (Phase 2+).
- Keep component state local when possible.

### **Routing**
- Use React Router v6 patterns: `<Routes>`, `<Route>`, `<Link>`, `useNavigate`.
- HashRouter ensures GitHub Pages compatibility (no server redirects needed).

---

## 🚀 Deployment

### **Current (MVP)**
- GitHub Pages: `https://d-chpmn.github.io/homebase`
- Push to `gh-pages` branch via `npm run deploy` (builds with Vite, publishes `dist/`).

### **Future (Production)**
- Migrate to Vercel or AWS for full backend + auth support.
- Custom domain setup (e.g., `homebase.loanapp.com`).

---

## 🔄 Next Immediate Steps

1. Merge Vite migration PR (`migrate/vite` → `main`).
2. Build out Dashboard + Topic Hub skeleton pages with mock data.
3. Create reusable component library (Card, Button, Modal, etc.).
4. Deploy MVP demo link for internal feedback.
5. Plan Phase 2 backend + auth work.

---

## 📞 Questions to Revisit

- Should we use Firebase Auth for Phase 1, or defer to Phase 2?
- How many "topics" will we have initially? (Affects UI design)
- What's the priority: Dashboard polish or Topic Hub features?
- Do we need to integrate the calculators directly, or link to them?

---

## 🎯 Success Metrics (MVP)

- [ ] Loan officers can navigate all main pages (Dashboard, Topics, Messages, Quotes, To-Do).
- [ ] Pages load fast (Vite dev + build optimizations).
- [ ] Design uses brand colors and looks professional.
- [ ] GitHub Pages deployment works reliably.
- [ ] Positive feedback from 2–3 internal testers.

---

**Document Owner:** d-chpmn  
**Last Review:** November 12, 2025
