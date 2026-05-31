import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: query }),
      });

      const data = await res.json();
      setResponse(data.answer || data.error);
    } catch (error) {
      setResponse("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const getValue = (label) => {
    const regex = new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n\\w|$)`);
    const match = response.match(regex);
    return match ? match[1].trim() : "N/A";
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const safety = getValue("Safety");

  return (
    <div className="app">
      <div className="hero">
        <p className="tag">Cross-platform AI command generator</p>
        <h1>🤖 AI Command Assistant</h1>
        <p className="subtitle">
          Get commands for Linux, Windows CMD, and PowerShell with safety checks.
        </p>
      </div>

      <div className="searchBox">
        <textarea
          placeholder="Example: delete a folder named hello"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={handleAsk} disabled={loading}>
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </div>

      {response && (
        <div className="results">
          <div className="commandCard">
            <h2>🐧 Linux</h2>
            <code>{getValue("Linux")}</code>
            <button onClick={() => copyText(getValue("Linux"))}>Copy</button>
          </div>

          <div className="commandCard">
            <h2>🪟 Windows CMD</h2>
            <code>{getValue("Windows CMD")}</code>
            <button onClick={() => copyText(getValue("Windows CMD"))}>
              Copy
            </button>
          </div>

          <div className="commandCard">
            <h2>⚡ PowerShell</h2>
            <code>{getValue("PowerShell")}</code>
            <button onClick={() => copyText(getValue("PowerShell"))}>
              Copy
            </button>
          </div>

          <div className="infoPanel">
            <div
              className={`safety ${
                safety.includes("Dangerous")
                  ? "danger"
                  : safety.includes("Caution")
                  ? "caution"
                  : "safe"
              }`}
            >
              Safety: {safety}
            </div>

            <p>
              <strong>Risk:</strong> {getValue("Risk")}
            </p>

            <p>
              <strong>Explanation:</strong> {getValue("Explanation")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;