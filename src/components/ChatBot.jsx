import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import robotAnim from "../assets/animations/robot.json";
import "./ChatBot.css";

const CloseIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);

/* ── Your deployed Cloudflare Worker URL ──
   After you deploy the worker (see /worker/README.md), paste its URL here.
   You can also override it at build time with VITE_CHAT_API_URL. */
const CHAT_API_URL =
  import.meta.env.VITE_CHAT_API_URL || "https://aekank-chat.aekankpatel.workers.dev";

const SUGGESTIONS = [
  "What's Aekank's background?",
  "Tell me about his projects",
  "What are his strongest skills?",
  "Is he open to opportunities?",
];

const GREETING = {
  role: "assistant",
  content:
    "Hi, I'm Savi — Aekank's AI assistant. Ask me anything about his background, projects, skills, or experience.",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const send = async (text) => {
    const question = (text ?? input).trim();
    if (!question || loading) return;

    const nextMessages = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      // send only the conversation turns (skip the local greeting)
      const history = nextMessages
        .filter((m) => m !== GREETING)
        .slice(-10)
        .map(({ role, content }) => ({ role, content }));

      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) {
        const msg =
          res.status === 429
            ? "I'm getting a lot of questions right now — please try again in a moment."
            : "Something went wrong reaching the assistant. Please try again.";
        setMessages((m) => [...m, { role: "assistant", content: msg }]);
        return;
      }

      const data = await res.json();
      const reply = data.reply?.trim() || "Sorry, I couldn't come up with an answer.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Network error — please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="cbRoot">
      {open && (
        <div className="cbPanel" role="dialog" aria-label="Chat with Aekank's AI assistant">
          <div className="cbHeader">
            <div className="cbHeaderTitle">
              <span className="cbAvatar">
                <Lottie animationData={robotAnim} loop autoplay />
              </span>
              <div>
                <div className="cbName">Savi</div>
                <div className="cbStatus"><span className="cbDot" />Aekank's AI assistant</div>
              </div>
            </div>
            <button className="cbClose" onClick={() => setOpen(false)} aria-label="Close chat" type="button">
              <CloseIcon />
            </button>
          </div>

          <div className="cbMessages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`cbMsg cbMsg--${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="cbMsg cbMsg--assistant cbTyping">
                <span /><span /><span />
              </div>
            )}
            {messages.length <= 1 && !loading && (
              <div className="cbSuggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} className="cbSuggestion" type="button" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="cbInputRow">
            <textarea
              ref={inputRef}
              className="cbInput"
              rows={1}
              placeholder="Ask a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <button
              className="cbSend"
              type="button"
              onClick={() => send()}
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}

      <button
        className={`cbBubble ${open ? "cbBubble--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        type="button"
      >
        {open ? <CloseIcon /> : <Lottie className="cbBubbleLottie" animationData={robotAnim} loop autoplay />}
      </button>
    </div>
  );
}
