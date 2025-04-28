Personal Finance Tracker 💸
A powerful and intuitive Personal Finance Tracker built with Next.js 14, React, MongoDB, Recharts, and shadcn/ui. This application helps you track, categorize, and visualize your income, expenses, and budgets with ease.

🚀 Features
Add Transactions: Add income and expenses with details like name, amount, and category (e.g., Food, Shopping, Lifestyle).
Categorization: Easily categorize transactions for better tracking.
Visual Analytics: Interactive bar and pie charts for expense visualization.
Tooltips: View category percentages directly in charts.
User-Friendly UI: Full dark-mode background with a smooth and responsive interface.
Quick Actions: Clear all transactions with a single click.
Mobile-Friendly: Fully responsive design for all devices.
🧩 Tech Stack
Framework: Next.js 14 (App Router)
Frontend: React
Database: MongoDB
Charting: Recharts
UI Components: shadcn/ui
Styling: TailwindCSS
📂 Project Structure
Code
personal-finance-tracker/
├── app/
│   ├── api/
│   │   └── transactions/
│   │       ├── route.js
│   ├── components/
│   │   ├── AddTransaction.js
│   │   ├── Transactions.js
│   │   ├── ExpensesBarChart.js
│   │   └── ExpensesPieChart.js
├── lib/
│   └── mongodb.js
├── models/
│   └── transaction.js
├── public/
│   └── (static files)
├── styles/
│   └── globals.css
├── .env.local
├── package.json
├── next.config.js
└── README.md
🚀 Getting Started
Follow these steps to set up and run the project locally:

1. Clone the Repository
bash
git clone https://github.com/YaswanthPalivela/Personal-Finance-Tracker.git
cd Personal-Finance-Tracker
2. Install Dependencies
bash
npm install

4. Run the Development Server
Start the development server:

bash
npm run dev
Access the application in your browser:
http://localhost:3000
🧠 Key Concepts
Next.js App Router: Server and client components.
MongoDB with Mongoose: CRUD operations for managing transactions.
Recharts: Visualize financial data with interactive charts.
TailwindCSS: Create a responsive and modern UI.
Error Handling: Optimistic UI updates for better user experience.

📊 Screenshots
Add Transaction Form
List of Transactions with Date and Category
Animated Bar Chart and Pie Chart
Dark Mode Background (Slate-900)
(Add screenshots here to enhance the documentation.)

⚡ Future Enhancements
User Authentication (Login / Signup)
Export Transactions to Excel or CSV
Monthly Budgets and Progress Tracking
Recurring Transactions Support
Push Notifications for Budgeting Reminders

🤝 Contributing
Contributions are welcome! Feel free to:

Open issues for bugs or feature requests.
Submit pull requests for improvements or fixes.
Suggest enhancements to make this tracker even better!
📜 License
This project is open-source and free to use under the MIT License.

💬 Contact
For any inquiries, feel free to reach out:

Email: yaswanthnani998#gmail.com
GitHub: YaswanthPalivela
✨ Thank you for using Personal Finance Tracker! Together, let's make managing finances easier. 🚀
