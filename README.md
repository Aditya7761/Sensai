# Sensai – AI Career Coach (Full-Stack Application with AI Integration)
A full-stack, AI-powered career coaching platform built using **Next.js**, **React**, **Tailwind CSS**, **Prisma**, **NeonDB**, **Inngest**, and **Clerk**. The application helps users explore career paths, generate resumes and cover letters, get mock interviews, and receive personalized industry insights using **Google Gemini AI**.

---

## 🚀 Features

### ✅ Authentication & Onboarding
- Secure sign-in/sign-up using **Clerk**
- User onboarding with career goal collection

### 🧠 AI-Powered Career Insights
- Personalized insights using **Gemini AI**
- Industry-specific recommendations and trend reports

### 📄 Resume & Cover Letter Builder
- Clean Markdown editor with PDF export
- Pre-filled career data for quick customization

### 🤖 Interview Preparation
- AI-generated questions based on user’s industry
- Real-time evaluation and performance feedback

### 📊 Dashboard & Analytics
- Visual stats of user progress
- Resume quality score, mock interview attempts, and more

### 🔁 Scheduled Background Tasks
- Serverless cron jobs using **Inngest**
- Periodic career insights refresh

### 🌐 Industry Insights & Career Scope

This feature provides **real-time, data-driven insights** into the current state and future outlook of various career paths and industries. It helps users make smarter career decisions by offering the following:

- **📊 Market Outlook**  
  Displays a dynamic, AI-generated market sentiment indicator — such as "Positive" or "Negative" — along with a refresh cycle (e.g., updates every 6 days). This helps users stay informed about the overall health of the job market.

- **📈 Industry Growth**  
  Shows the projected growth rate of a user’s selected industry (e.g., **2.5%**), giving context about stability and future potential in that sector. Useful for long-term career planning.

- **🔥 Demand Level**  
  Highlights the hiring demand for the user’s role or industry in a clear, visual way (e.g., “High” demand with a green bar). Helps users target high-opportunity fields.

- **🛠 Top Skills**  
  AI-curated list of the most valuable skills for the chosen career path — e.g.,  
  `Python`, `SQL`, `Machine Learning`, `Financial Modeling`, `Data Analysis`.  
  This allows users to focus their upskilling on what's actually in demand.

- **💸 Salary Ranges by Role**  
  A clear salary breakdown for different job roles including **minimum**, **median**, and **maximum** salaries — visualized through bar charts. For example:

  | Role               | Min (₹K) | Median (₹K) | Max (₹K) |
  |--------------------|----------|-------------|----------|
  | Financial Analyst   | ~65      | ~90         | ~125     |
  | Data Scientist      | ~85      | ~130        | ~175     |
  | Software Engineer   | ~70      | ~110        | ~150     |
  | Investment Banker   | ~95      | ~140        | ~260     |
  | Risk Manager        | ~70      | ~100        | ~130     |

> These salary figures help users set realistic expectations and confidently negotiate job offers.
