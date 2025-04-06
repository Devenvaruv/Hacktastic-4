"use client";

import React, { useState, useEffect } from "react";
import "../styles/chatbot.css";

export default function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [greeted, setGreeted] = useState(false); // ✅ Track if greeted

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // ✅ Trigger greeting when modal opens for the first time
  useEffect(() => {
    if (isOpen && !greeted) {
      greetUser();
    }
  }, [isOpen]);

  async function greetUser() {
    setLoading(true);
    setGreeted(true); // Prevent greeting again

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: "Greet the user" }),
      });

      const data = await res.json();
      setMessages([
        {
          role: "assistant",
          content:
            data.assistantMessage || "Hi! How can I help you today?",
        },
      ]);
    } catch (err) {
      console.error("Greeting failed:", err);
      setMessages([
        {
          role: "assistant",
          content: "Hi! I'm here to help — feel free to ask anything.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const handleSend = async () => {
    if (!userInput.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: userInput }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: userInput }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.assistantMessage }]);
      setUserInput("");
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="chatbot-float-button" onClick={toggleModal}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/14/14558.png"
          width="50"
          height="50"
          alt="Chat"
          className="chat-logo"
        />
      </button>

      {isOpen && (
        <div className="chatbot-modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="chat-header">
            <h2>Chatbot</h2>
            <button className="chatbot-close-button" onClick={toggleModal}>×</button>
          </div>

          <div className="message-list">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                <div className="role">{msg.role === "assistant" ? "Assistant" : "You"}</div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: msg.content.replace(/\n/g, "<br>"),
                  }}
                ></div>
              </div>
            ))}
            {loading && <div className="typing-indicator">Assistant is typing…</div>}
          </div>

          <div className="input-container">
            <input
              className="chat-input"
              type="text"
              value={userInput}
              placeholder="Type a message..."
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              disabled={loading}
            />
            <button className="send-button" onClick={handleSend} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
