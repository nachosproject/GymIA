import { useState, useRef, useEffect } from "react";

const systemPrompt = `Sos un entrenador personal experto y motivador llamado "CoachIA". Tu especialidad es crear rutinas de gimnasio completamente personalizadas.

Cuando el usuario te cuente su objetivo, nivel y disponibilidad, creá una rutina detallada con:
- Días de entrenamiento
- Ejercicios con series, repeticiones y descanso
- Consejos de forma y técnica
- Motivación personalizada

Respondé siempre en español, de forma clara, organizada y motivadora. Usá emojis para hacerlo más visual y ameno. Si el usuario no da suficiente info, preguntale amablemente por: objetivo (bajar de peso, ganar músculo, tonificar, resistencia), nivel (principiante, intermedio, avanzado), días disponibles por semana, y si tiene equipamiento o va al gimnasio.`;

const suggestions = [
  "Quiero bajar de peso, soy principiante y tengo 3 días por semana",
  "Busco ganar músculo, nivel intermedio, 5 días disponibles",
  "Quiero tonificar en casa sin equipamiento, 4 días",
  "Soy avanzado y quiero una rutina de fuerza completa",
];

export default function GymAgent() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "¡Hola! 💪 Soy **CoachIA**, tu entrenador personal con IA. Contame tu objetivo, nivel y cuántos días por semana podés entrenar, ¡y te armo una rutina personalizada al instante!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const apiMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          max_tokens: 1000,
          messages: [
            { role: "system", content: systemPrompt },
            ...apiMessages,
          ],
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "No pude generar una respuesta.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Hubo un error. Intentá de nuevo 🙏" }]);
    } finally {
      setLoading(false);
    }
  };

  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br/>");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)",
      fontFamily: "'Segoe UI', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        width: "100%",
        background: "linear-gradient(90deg, #ff4500, #ff8c00)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        boxShadow: "0 4px 30px rgba(255,69,0,0.4)",
      }}>
        <div style={{
          width: 44, height: 44,
          background: "rgba(0,0,0,0.3)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22,
        }}>💪</div>
        <div>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, letterSpacing: 1 }}>CoachIA</div>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>Entrenador Personal con IA</div>
        </div>
        <div style={{
          marginLeft: "auto",
          background: "rgba(0,0,0,0.2)",
          color: "#fff",
          fontSize: 11,
          padding: "4px 10px",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.2)",
        }}>● En línea</div>
      </div>

      {/* Chat container */}
      <div style={{
        flex: 1,
        width: "100%",
        maxWidth: 700,
        display: "flex",
        flexDirection: "column",
        padding: "20px 16px",
        gap: 16,
        overflowY: "auto",
        minHeight: "calc(100vh - 200px)",
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            gap: 10,
            alignItems: "flex-end",
          }}>
            {msg.role === "assistant" && (
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "linear-gradient(135deg, #ff4500, #ff8c00)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, flexShrink: 0,
              }}>💪</div>
            )}
            <div style={{
              maxWidth: "75%",
              background: msg.role === "user"
                ? "linear-gradient(135deg, #ff4500, #ff6a00)"
                : "rgba(255,255,255,0.06)",
              color: "#fff",
              padding: "12px 16px",
              borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              fontSize: 14,
              lineHeight: 1.6,
              border: msg.role === "assistant" ? "1px solid rgba(255,69,0,0.2)" : "none",
              boxShadow: msg.role === "user" ? "0 4px 20px rgba(255,69,0,0.3)" : "none",
            }}
              dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
            />
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "linear-gradient(135deg, #ff4500, #ff8c00)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
            }}>💪</div>
            <div style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,69,0,0.2)",
              borderRadius: "18px 18px 18px 4px",
              padding: "14px 18px",
              display: "flex", gap: 6, alignItems: "center",
            }}>
              {[0, 1, 2].map(j => (
                <div key={j} style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#ff4500",
                  animation: "bounce 1s infinite",
                  animationDelay: `${j * 0.2}s`,
                }} />
              ))}
            </div>
          </div>
        )}

        {/* Suggestions (only at start) */}
        {messages.length === 1 && !loading && (
          <div style={{ marginTop: 8 }}>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 10, textAlign: "center" }}>
              💡 Ejemplos para empezar:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => sendMessage(s)} style={{
                  background: "rgba(255,69,0,0.1)",
                  border: "1px solid rgba(255,69,0,0.3)",
                  color: "#ff8c00",
                  padding: "8px 14px",
                  borderRadius: 20,
                  fontSize: 12,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  maxWidth: 300,
                  textAlign: "left",
                }}
                  onMouseEnter={e => e.target.style.background = "rgba(255,69,0,0.2)"}
                  onMouseLeave={e => e.target.style.background = "rgba(255,69,0,0.1)"}
                >{s}</button>
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        width: "100%",
        maxWidth: 700,
        padding: "12px 16px 20px",
        display: "flex",
        gap: 10,
      }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
          placeholder="Contame tu objetivo, nivel y disponibilidad..."
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,69,0,0.3)",
            borderRadius: 25,
            padding: "12px 20px",
            color: "#fff",
            fontSize: 14,
            outline: "none",
          }}
        />
        <button
          onClick={() => sendMessage()}
          disabled={!input.trim() || loading}
          style={{
            width: 48, height: 48,
            borderRadius: "50%",
            background: input.trim() && !loading
              ? "linear-gradient(135deg, #ff4500, #ff8c00)"
              : "rgba(255,255,255,0.1)",
            border: "none",
            cursor: input.trim() && !loading ? "pointer" : "not-allowed",
            fontSize: 20,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
            flexShrink: 0,
            boxShadow: input.trim() && !loading ? "0 4px 20px rgba(255,69,0,0.4)" : "none",
          }}
        >🚀</button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,69,0,0.3); border-radius: 2px; }
      `}</style>
    </div>
  );
}
