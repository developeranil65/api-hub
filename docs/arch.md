# API-HUB — Architecture Overview

### Purpose
Define the high-level architecture for the API-HUB project — covering system components, data flow, and deployment strategy.

---

## ⚙ System Components

| Layer | Technology | Description |
|--------|-------------|-------------|
| *Frontend* | Next.js + Tailwind | Web dashboard for publishers, consumers, and admin. |
| *Backend* | Node.js + Express + Zod | API gateway handling auth, API publishing, subscriptions, and analytics. |
| *Database* | PostgreSQL | Persistent store for users, APIs, subscriptions, plans, and usage logs. |
| *Cache & Jobs* | Redis | Used for rate-limiting, background job queues, and usage aggregation. |
| *Auth* | NextAuth | Authentication via credentials or OAuth. |
| *Infra & Deploy* | Docker + Terraform + CI/CD (GitHub Actions → Render/Vercel) | Automated deployment pipeline and infra-as-code setup. |
| *Real-Time Layer* | WebSocket | Used for live analytics updates on dashboard. |
| *Monitoring* | Sentry / Health endpoint | Tracks uptime and error metrics. |

![image](./arch%20image.png)

---

## Simplified Data Flow

1. Consumer requests API using API Key.  
2. Gateway validates key, checks Redis rate limit.  
3. If valid → proxy or log usage → response to consumer.  
4. Usage logs batched to Redis Streams → periodic aggregation job writes to DB.  
5. Analytics endpoint and WebSocket push live usage to dashboards.  
6. Billing simulation uses monthly usage data → generates invoice-like summary.

---

## Core Data Models

| Entity | Description |
|---------|--------------|
| User | Base table for publishers/consumers/admin. |
| API | Registered API with metadata. |
| Plan | Defines pricing tier and rate-limit caps. |
| Subscription | Connects user ↔ API ↔ plan. |
| ApiKey | Generated for each subscription. |
| UsageLog | Tracks requests per subscription. |
| BillingEvent | Simulated invoices or overages. |

---

## Deployment Overview

*Environment:*  
- Staging: auto-deployed on every push to dev via GitHub Actions.  
- Production: manual deploy from main after CI passes.

*Infrastructure:*  
- Docker Compose for local dev.  
- Terraform defines:
  - PostgreSQL instance
  - Redis cache
  - App containers (frontend/backend)
  - Network + secrets

---

## Security Considerations
- Store secrets in environment variables.
- Enforce Zod validation on all inputs.
- Use HTTPS + CORS properly.
- Rate-limit both public endpoints and API usage.

---

## Week 1 Deliverable
Ensure a “Hello World” backend + frontend are deployed on staging and connected via CI/CD.