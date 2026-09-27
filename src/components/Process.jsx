import React, { useEffect, useRef, useState } from "react";

export default function Process() {
  const [isChatActive, setIsChatActive] = useState(false);
  const [message, setMessage] = useState("");
  const [showToggle, setShowToggle] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const processRef = useRef(null);
  const inputRef = useRef(null);
  const messagesRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Halo. Ada yang ingin kamu bangun hari ini?",
    },
  ]);

  /* =====================================================
     DETECT PROCESS SECTION
  ====================================================== */

  useEffect(() => {
    const section = processRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowToggle(!entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);


  /* =====================================================
     AUTO SCROLL CHAT
  ====================================================== */

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop =
        messagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);


  /* =====================================================
     OPEN FROM FLOATING TOGGLE
  ====================================================== */

  const handleOpenChat = () => {
    setIsChatActive(true);

    processRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      inputRef.current?.focus();
    }, 850);
  };


  /* =====================================================
     SEND MESSAGE
  ====================================================== */

  const handleSend = () => {
    const cleanMessage = message.trim();

    if (!cleanMessage || isTyping) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: cleanMessage,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text:
            "Menarik. Ceritakan sedikit lebih detail tentang kebutuhan atau ide yang ingin kamu bangun.",
        },
      ]);

      setIsTyping(false);
    }, 1000);
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };


  return (
    <>
      {/* =====================================================
          PROCESS / AI CHATROOM
      ====================================================== */}

      <section
        ref={processRef}
        className={`process-section ${
          isChatActive ? "process-chat-active" : ""
        }`}
        id="process"
      >

        <div className="process-chat">

          {/* HEADER */}

          <div className="chat-header"> GMW AI</div>


          {/* CHAT */}

          <div
            className="chat-messages"
            ref={messagesRef}
          >

            <div className="chat-intro">

              <span>
                AI CONSULTANT (Testimony)
              </span>

              <h2>
                Masih penasaran apa itu GMW?
                <br />
                <em>Yuk bisa tanya disini.</em>
              </h2>

            </div>


            {messages.map((item) => (
              <div
                key={item.id}
                className={`chat-message ${item.sender}`}
              >

                {item.sender === "ai" && (
                  <span className="message-label">
                    AI
                  </span>
                )}

                <div className="message-bubble">
                  {item.text}
                </div>

              </div>
            ))}


            {isTyping && (
              <div className="chat-message ai">

                <span className="message-label">
                  AI
                </span>

                <div className="message-bubble typing">

                  <i></i>
                  <i></i>
                  <i></i>

                </div>

              </div>
            )}

          </div>


          {/* INPUT */}

          <div className="chat-input-area">

            <div className="chat-input-wrap">

              <textarea
                ref={inputRef}
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Tulis ide atau kebutuhanmu..."
                rows="1"
              />

              <button
                className={`chat-send ${
                  message.trim() ? "ready" : ""
                }`}
                onClick={handleSend}
                disabled={
                  !message.trim() ||
                  isTyping
                }
                aria-label="Send message"
              >

                <span className="send-text">
                  Send
                </span>

                <span className="send-arrow">
                  ↗
                </span>

              </button>

            </div>

            <small>
              Enter untuk mengirim
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          FLOATING TOGGLE
          HANYA MUNCUL DI LUAR PROCESS
      ====================================================== */}

      {showToggle && (
        <button
          className={`ai-floating-toggle ${
            isChatActive
              ? "toggle-open"
              : ""
          }`}
          onClick={handleOpenChat}
          aria-label="Open AI consultant"
        >

          <span className="toggle-inner">

            <span className="toggle-ai">
              AI
            </span>

            <span className="toggle-send">
              ↗
            </span>

          </span>

        </button>
      )}

    </>
  );
}