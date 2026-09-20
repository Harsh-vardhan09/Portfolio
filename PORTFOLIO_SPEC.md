# Next.js Developer Portfolio

## 1. Project Overview

Build a modern developer portfolio using **Next.js** that showcases:

* About me
* Education
* Work experience
* Technical skills
* Projects
* Certifications
* Achievements
* Open-source contributions
* Contact information
* GitHub / LinkedIn / LeetCode profiles

The portfolio should allow projects and certificates to be added or updated without changing the main UI components.

---

# 2. Tech Stack

## Frontend

* Next.js
* TypeScript
* React
* Tailwind CSS
* Framer Motion / GSAP for animations
* Lucide React for icons

## Deployment

* Vercel

## Optional Backend / Storage

Initially, no backend is required.

Use local data files:

```text
src/data/
├── projects.ts
├── certificates.ts
├── experience.ts
└── skills.ts
```

Later, this can be converted to:

* PostgreSQL
* Prisma
* Supabase
* CMS
* Admin dashboard

---

# 3. Main Pages

## Home

Route:

```text
/
```

Sections:

1. Hero
2. About
3. Experience
4. Skills
5. Projects
6. Certifications
7. Achievements
8. Contact

---

## Projects

Route:

```text
/projects
```

Display all projects.

Each project should contain:

* Project name
* Short description
* Full description
* Technologies
* GitHub URL
* Live URL
* Project image
* Project year
* Featured status
* Contributors
* Users / usage numbers
* Hackathon information

Example:

```ts
{
  title: "AthLead",
  slug: "athlead",
  description: "AI-powered sports analytics and ranking platform.",
  year: 2025,
  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "JWT",
    "REST API"
  ],
  github: "",
  live: "",
  image: "/projects/athlead.png",
  featured: true
}
```

---

# 4. Project Details Page

Route:

```text
/projects/[slug]
```

Example:

```text
/projects/athlead
```

The project page should contain:

## Project Overview

Explain what the project does.

## Problem

What problem does the project solve?

## Solution

How the project solves the problem.

## Features

Example:

* User authentication
* Dashboard
* Analytics
* Ranking system
* AI-powered analysis

## Tech Stack

Show technologies as badges.

## Architecture

Optional architecture diagram.

## Screenshots

Display project screenshots.

## Links

* GitHub
* Live Demo
* Documentation
* Video Demo

## Contributions

Show:

* Number of contributors
* Number of users
* Hackathon selection
* Personal contribution

---

# 5. Projects From Resume

## AthLead

### Title

AthLead – AI Sports Analytics & Ranking Platform

### Year

2025

### Description

AI-powered platform built to help athletes and coaches analyze performance and rank talent using data-driven insights.

### Resume Information

* 15+ contributors
* 100+ users
* Selected for Smart India Hackathon 2025 at institution

### Tech Stack

```text
React.js
Node.js
Express.js
MongoDB
Python
JWT
REST API
```

### Links

Add later:

```text
GitHub:
Live Demo:
Demo Video:
```

---

## OTP Autofill

### Title

OTP Autofill – Chrome Extension

### Year

2026

### Description

Chrome extension that securely auto-fills OTPs from Gmail using Google OAuth 2.0 and the Gmail API.

### Resume Information

* Manifest V3
* Gmail API
* Google OAuth 2.0
* 1,000+ views across LinkedIn and X

### Tech Stack

```text
React
TypeScript
Vite
Tailwind CSS
Chrome Extension APIs
Gmail API
OAuth 2.0
```

### Links

Add later:

```text
GitHub:
Chrome Web Store:
Demo:
```

---

# 6. Experience Page

Route:

```text
/experience
```

Display experience as a timeline.

---

## GAIL

### SDE Intern

**Gas Authority of India Limited (GAIL)**

```text
June 2026 – July 2026
```

### Technologies

```text
C#
ASP.NET
.NET
Blazor
REST APIs
```

### Responsibilities

* Built an event management portal.
* Reduced manual coordination and administrative effort by 80%.
* Led a team of 5 developers.
* Coordinated tasks and reviewed progress.
* Collaborated with stakeholders to translate requirements into software solutions.
* Reduced requirements rework by 85%.

---

## Vyor AI

### Full Stack Developer Intern

**Vyor AI**

```text
May 2026 – Present
```

### Technologies

```text
Turborepo
Next.js
Node.js
Prisma
PostgreSQL
AWS EC2
AWS S3
REST APIs
```

### Responsibilities

* Architected and scaffolded a CRM platform.
* Built secure REST APIs.
* Designed database models.
* Led a team of 4 developers.
* Worked on an ERP system adopted by 10+ schools.
* Built backend APIs and data models.
* Worked with cross-functional teams to align frontend and backend development.

---

# 7. Skills Section

Display skills grouped into categories.

## Languages

```text
JavaScript
TypeScript
Java
Python
C#
```

## Frameworks & Libraries

```text
React
Next.js
Node.js
Express.js
ASP.NET
Blazor
GSAP
React Native
```

## Databases

```text
PostgreSQL
SQL
MongoDB
MySQL
Supabase
```

## Cloud & DevOps

```text
AWS EC2
AWS S3
Docker
Kubernetes
Redis
Turborepo
Linux
```

## Developer Tools

```text
Git
GitHub
IntelliJ IDEA
Prisma Studio
Obsidian
```

---

# 8. Certifications

Route:

```text
/certifications
```

Certificates should be displayed as cards.

Each certificate should contain:

* Certificate name
* Issuing organization
* Issue date
* Certificate image/PDF
* Credential ID
* Verification URL
* Skills
* Download button

---

## Certificate Data Structure

```ts
{
  title: "AWS Certified AI Practitioner",
  issuer: "Amazon Web Services",
  date: "May 2026",
  credentialId: "",
  verificationUrl: "",
  image: "/certificates/aws-ai-practitioner.png",
  pdf: "/certificates/aws-ai-practitioner.pdf",
  skills: [
    "Artificial Intelligence",
    "AWS"
  ]
}
```

---

# 9. Certificates To Add

## AWS Certified AI Practitioner

```text
Issuer: AWS
Certification: AWS Certified AI Practitioner (AIF-C01)
Date: May 2026
```

Upload:

```text
/public/certificates/aws-ai-practitioner.pdf
```

Optional preview image:

```text
/public/certificates/aws-ai-practitioner.png
```

---

## AWS Certified Cloud Practitioner

```text
Issuer: AWS
Certification: AWS Certified Cloud Practitioner (CLF-C02)
Date: February 2026
```

Upload:

```text
/public/certificates/aws-cloud-practitioner.pdf
```

---

# 10. Certificate Upload System

## Version 1 – Simple

Store certificates inside:

```text
public/certificates/
```

Example:

```text
public/
└── certificates/
    ├── aws-ai-practitioner.pdf
    ├── aws-ai-practitioner.png
    ├── aws-cloud-practitioner.pdf
    └── aws-cloud-practitioner.png
```

Then reference them from the data file.

---

# 11. Future Certificate Admin System

Later, create:

```text
/admin/certificates
```

Admin should be able to:

* Upload certificate
* Upload certificate preview
* Enter certificate name
* Enter issuer
* Enter date
* Add credential ID
* Add verification URL
* Edit certificate
* Delete certificate
* Reorder certificates

For this version, use:

```text
Next.js
PostgreSQL
Prisma
Cloudinary / S3
```

---

# 12. Achievements

Create an achievements section.

## GSSoC

```text
GirlScript Summer of Code (GSSoC)

15+ pull requests merged
```

## Smart India Hackathon

```text
Selected for Smart India Hackathon 2025
at institution level.
```

## Hackathons

Display:

* Hackathon name
* Project
* Position/result
* Year
* Certificate
* GitHub
* Demo

---

# 13. About Section

Keep the About section short.

Example structure:

```text
I'm a Computer Science student and Full Stack Developer
interested in building scalable web applications, developer
tools, and AI-powered products.

I work primarily with JavaScript, TypeScript, React, Next.js,
Node.js, databases, and cloud technologies.
```

Do not make this section too large.

---

# 14. Hero Section

Hero should contain:

```text
HARSH VARDHAN

Full Stack Developer

Building scalable web applications and developer-focused products.

[View Projects]
[Download Resume]
[Contact Me]
```

Social links:

```text
GitHub
LinkedIn
LeetCode
Email
```

Resume:

```text
/public/resume.pdf
```

---

# 15. Contact Section

Display:

```text
Email
LinkedIn
GitHub
```

Optional contact form:

```text
Name
Email
Message
Send Message
```

For the first version, the form can simply open an email client.

Later:

```text
Resend
Nodemailer
Email API
```

can be added.

---

# 16. Navbar

Navbar:

```text
Home
About
Experience
Projects
Skills
Certifications
Achievements
Contact
```

Actions:

```text
GitHub
Resume
Theme Toggle
```

On mobile:

```text
Hamburger Menu
```

---

# 17. UI Design

Use a clean developer-focused design.

## Design Goals

* Minimal
* Modern
* Professional
* Responsive
* Fast
* Accessible
* Good typography
* Subtle animations

Avoid:

* Too many animations
* Excessive gradients
* Huge text everywhere
* Too many colors
* Overly complicated layouts

---

# 18. Animations

Use animations only where they improve the experience.

Examples:

### Hero

* Text fade-in
* Slight movement

### Project cards

* Hover animation
* Image scale

### Experience

* Timeline reveal

### Skills

* Staggered appearance

### Certificates

* Card hover

Use:

```text
Framer Motion
```

or:

```text
GSAP
```

Do not use both unless necessary.

---

# 19. Suggested Folder Structure

```text
portfolio/
│
├── public/
│   ├── certificates/
│   │   ├── aws-ai-practitioner.pdf
│   │   ├── aws-ai-practitioner.png
│   │   ├── aws-cloud-practitioner.pdf
│   │   └── aws-cloud-practitioner.png
│   │
│   ├── projects/
│   │   ├── athlead.png
│   │   └── otp-autofill.png
│   │
│   └── resume.pdf
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── certifications/
│   │   │   └── page.tsx
│   │   │
│   │   └── experience/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── certifications/
│   │   ├── achievements/
│   │   └── contact/
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── certificates.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── achievements.ts
│   │
│   └── lib/
│
├── package.json
└── README.md
```

---

# 20. Data-Driven Architecture

Do not hardcode project information directly inside components.

Instead:

```text
projects.ts
       ↓
ProjectsSection
       ↓
ProjectCard
       ↓
ProjectDetails
```

Similarly:

```text
certificates.ts
       ↓
CertificatesSection
       ↓
CertificateCard
```

This makes adding a new project as simple as adding an object.

---

# 21. Project Data Model

```ts
type Project = {
  title: string
  slug: string
  description: string
  year: number
  technologies: string[]

  image?: string

  github?: string
  live?: string
  demo?: string

  featured?: boolean

  contributors?: number
  users?: number

  highlights?: string[]
}
```

---

# 22. Certificate Data Model

```ts
type Certificate = {
  title: string
  issuer: string
  date: string

  image?: string
  pdf?: string

  credentialId?: string
  verificationUrl?: string

  skills?: string[]
}
```

---

# 23. Experience Data Model

```ts
type Experience = {
  company: string
  role: string

  startDate: string
  endDate?: string

  description: string[]

  technologies: string[]

  location?: string
}
```

---

# 24. SEO

Add:

```text
Title
Description
Open Graph image
Twitter/X metadata
Favicon
```

Example title:

```text
Harsh Vardhan | Full Stack Developer
```

Example description:

```text
Portfolio of Harsh Vardhan, a Full Stack Developer
building scalable web applications and developer tools.
```

Add:

```text
sitemap.xml
robots.txt
```

---

# 25. Responsive Design

The portfolio must work on:

```text
Mobile
Tablet
Laptop
Desktop
```

Test at:

```text
320px
375px
768px
1024px
1440px
```

---

# 26. Performance

Use Next.js features wherever possible:

* Server Components
* next/image
* Static generation
* Dynamic metadata
* Lazy loading
* Optimized fonts

Avoid unnecessary client components.

Only use `"use client"` where interaction is actually required.

---

# 27. Future Admin Dashboard

After the public portfolio is complete, optionally add:

```text
/admin
```

Dashboard:

```text
Dashboard
│
├── Projects
│   ├── Add
│   ├── Edit
│   └── Delete
│
├── Certificates
│   ├── Upload
│   ├── Edit
│   └── Delete
│
├── Experience
│   ├── Add
│   ├── Edit
│   └── Delete
│
└── Achievements
    ├── Add
    ├── Edit
    └── Delete
```

Authentication:

```text
Clerk / Auth.js
```

Database:

```text
PostgreSQL
Prisma
```

File storage:

```text
AWS S3
Cloudinary
```

---

# 28. Development Phases

## Phase 1 – Setup

* Create Next.js project
* Configure TypeScript
* Configure Tailwind
* Configure fonts
* Create basic layout
* Create navbar/footer

## Phase 2 – Portfolio

Implement:

* Hero
* About
* Skills
* Experience
* Projects
* Certifications
* Achievements
* Contact

## Phase 3 – Project Pages

Add:

```text
/projects
/projects/[slug]
```

Add project screenshots and external links.

## Phase 4 – Certificates

Add:

* Certificate cards
* PDF preview
* Download
* Verification links

## Phase 5 – Animations

Add:

* Page transitions
* Scroll animations
* Card animations
* Hover effects

## Phase 6 – SEO & Performance

Add:

* Metadata
* OG image
* Sitemap
* Robots
* Image optimization
* Performance optimization

## Phase 7 – Deployment

Deploy to:

```text
Vercel
```

Connect:

```text
GitHub → Vercel → Production
```

---

# 29. Important Links To Add Later

The resume currently provides:

```text
Email:
harsh.vardhanp0901@gmail.com

LinkedIn:
linkedin/in/harsh-vardhan-hv

GitHub:
github/Harsh-vardhan09

LeetCode:
leetcode/u/Aarsh-HV
```

Add the complete URLs in the portfolio data once confirmed.

For each project, add:

```text
GitHub URL
Live URL
Demo URL
Documentation URL
```

For each certificate, add:

```text
Certificate PDF
Certificate preview
Credential ID
Verification URL
```

---

# 30. Final Goal

The final portfolio should feel like a real developer product rather than simply an online version of the resume.

The resume provides the initial content, while the portfolio should expand it with:

```text
Resume
   ↓
Portfolio
   ↓
Projects
   ├── Description
   ├── Screenshots
   ├── Architecture
   ├── Tech Stack
   ├── GitHub
   ├── Live Demo
   └── Contributions

Certificates
   ├── Preview
   ├── PDF
   ├── Credential ID
   └── Verification

Experience
   ├── Company
   ├── Role
   ├── Responsibilities
   └── Technologies
```

The first version should remain **simple and static**. Build the public portfolio first using TypeScript data files. Only add PostgreSQL, Prisma, authentication, S3/Cloudinary, and an admin dashboard if you actually need to manage the portfolio dynamically later.
