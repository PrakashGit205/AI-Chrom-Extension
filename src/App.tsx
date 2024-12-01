import { useEffect, useRef, useState } from "react";
import { callGeminiAI } from "./ApiCalls/gemini";
import "./App.css";
function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [question]);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await callGeminiAI(question);
    setLoading(false);
    if (response) {
      setAnswer(response);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        // width: "100vw",
        padding: "20px",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        fontFamily: "'Roboto', sans-serif",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          // width: "100vw",
          textAlign: "center",
        }}
      >
        <h1 className="heading-animation">Ask Gemini AI Anything</h1>

        <textarea
          ref={textareaRef}
          placeholder="Ask me anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          autoFocus
          style={{
            width: "90%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "16px",
            fontSize: "1rem",
            outline: "none",
            height: "auto",
            resize: "none",
            overflow: "hidden",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "12px",
            background: "#4a4e69",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#22223b")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#4a4e69")}
        >
          Ask
        </button>
        <div
          style={{
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              color: "#22223b",
            }}
          >
            Answer:
          </h2>
          <p
            style={{
              background: "#f8f9fa",
              padding: "15px",
              borderRadius: "8px",
              color: "#4a4e69",
              fontSize: "1rem",
              minHeight: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {loading
              ? "Loading.... "
              : answer || "Your answer will appear here."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
