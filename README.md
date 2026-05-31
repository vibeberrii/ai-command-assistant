# 🤖 AI Command Assistant

AI-powered cross-platform command generator that converts natural language into commands for Linux, Windows CMD, and PowerShell.

## 🚀 Features

* Generate commands using natural language
* Supports:

  * 🐧 Linux
  * 🪟 Windows CMD
  * ⚡ PowerShell
* AI-powered command generation using Google Gemini
* Command safety analysis
* Risk classification (Safe / Caution / Dangerous)
* Copy command with one click
* Modern responsive UI built with React

---

## <img width="1352" height="809" alt="image" src="https://github.com/user-attachments/assets/b81e1fcb-2678-4291-84e1-e6fbeaedba96" />

<img width="1051" height="816" alt="image" src="https://github.com/user-attachments/assets/076fbce5-994d-45fb-84d8-3a13e9fdc227" />



### Example Query

```text
Delete folder named hello
```

### Output

```text
🐧 Linux
rm -r hello

🪟 Windows CMD
rmdir /s hello

⚡ PowerShell
Remove-Item hello -Recurse

Safety: Dangerous
Risk: 9/10
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* Node.js
* Express.js

### AI

* Google Gemini API

### Tools

* Git
* GitHub
* dotenv

---

## 📂 Project Structure

```text
ai-command-assistant/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/vibeberrii/ai-command-assistant.git
```

Move into the project folder:

```bash
cd ai-command-assistant
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Start the application:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

---


## 🎯 How It Works

1. User enters a natural language query.
2. React sends the query to the Express backend.
3. Backend sends the request to Google Gemini.
4. Gemini generates commands for Linux, CMD, and PowerShell.
5. Response is displayed with safety information.

---

## 📚 What I Learned

* Building full-stack applications
* React component development
* REST API integration
* Express.js backend development
* Environment variable management
* Git and GitHub workflows
* AI API integration with Gemini

---

## 🔮 Future Improvements

* Command Explainer Mode
* Error Fixer Mode
* Command History
* Command Categories
* Voice Input
* Dark/Light Theme
* Docker Support

---

## 👨‍💻 Author

**Bharat Salve**

GitHub: https://github.com/vibeberrii
