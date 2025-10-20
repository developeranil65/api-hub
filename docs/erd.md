## Core Data Models

| Table | Purpose |
|---------|--------------|
| User | Store all user accounts (publishers, consumers, admin) |
| API | API's published by users (metadata, ownership) |
| Plan | API specific plans (pricing and rate limits) |
| Subscription | Link between consumers and APIs under chosen plan |
| ApiKey | Unique key for each subscription, used for auth and tracking |
| UsageLog | Daily usage data per key. Aggregated for analytics |
| BillingEvent | Simulated billing event per month |

![image](./erd%20image.png)