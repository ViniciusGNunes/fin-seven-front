# FinSeven

A personal finance tracker that brings expenses, investments, debts, money owed to you, and savings goals into one place.

**Live:** [finseven.vercel.app](https://finseven.vercel.app) · **Backend:** [FinSeven](https://github.com/ViniciusGNunes/FinSeven)

## What it does

- **Dashboard:** an overview of your finances.
- **Expenses and calendar:** record transactions with categories, payment methods, and recurrence, then see income and expenses day by day.
- **Investments:** track fixed income, variable income, and crypto, with contributions, liquidations, portfolio cash, and growth over time.
- **Debts:** follow balances, interest, installments, and payments. A debt can generate its own expenses automatically.
- **Receivables:** split a cost with other people and track who has paid you back.
- **Goals:** set monthly investment, debt reduction, spending cap, savings, or portfolio targets, with optional automatic tracking.
- **Accounts:** sign in with email and password, Google, GitHub, Discord, or X. Email confirmation and password reset included.

## Engineering highlights

- **Multi-provider authentication:** ASP.NET Core Identity with JWT in a cookie, plus four OAuth flows (Google, GitHub, Discord, X). The frontend guards private routes with Next.js `proxy.ts`.
- **Live market data:** the backend pulls CDI and IPCA from the Banco Central do Brasil, stock and crypto quotes from brapi, Coinbase, and Binance, and exchange rates from AwesomeAPI. It falls back to default rates when a provider is down.
- **Financial domain modeling:** investments with fixed-rate yield and profit/loss, debts with amortization state, and goals linked to debts and categories.
- **Transactional email** through Resend for confirmation and password reset.

## Stack

| | |
| --- | --- |
| Frontend | Next.js 16, React 19 (React Compiler), TypeScript, Ant Design 6, Sass, Axios |
| Backend | ASP.NET Core 9, EF Core 9, ASP.NET Core Identity, PostgreSQL |
| Integrations | Google, GitHub, Discord, and X OAuth; Resend; brapi; Banco Central do Brasil |
