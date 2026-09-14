import React, { useState } from "react";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const { currentUser } = useAuth();
  const { t } = useLanguage();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage(null);

    const inputEmail = email.trim() || (currentUser ? currentUser.email : "");

    if (!inputEmail) {
      setMessage({ type: "error", text: t.subscribe.error });
      return;
    }

    try {
      setLoading(true);

      const subRef = collection(db, "subscribers");
      const q = query(subRef, where("email", "==", inputEmail));
      const querySnap = await getDocs(q);

      if (!querySnap.empty) {
        setMessage({ type: "success", text: t.subscribe.success });
        setEmail("");
        return;
      }

      await addDoc(subRef, {
        email: inputEmail,
        userId: currentUser ? currentUser.uid : null,
        userName: currentUser ? (currentUser.displayName || "") : null,
        subscribedAt: serverTimestamp(),
        source: "website_footer"
      });

      setMessage({ type: "success", text: t.subscribe.success });
      setEmail("");
    } catch (err) {
      console.error("Subscription error:", err);
      setMessage({ type: "error", text: t.subscribe.error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-6 bg-transparent">
      <div 
        className="container bg-[#192048] border border-[#192048] rounded-sm p-6 sm:p-10 flex flex-col items-center text-center shadow-none relative overflow-hidden"
      >
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight m-0">
          {t.subscribe.title}
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed mt-2 font-medium">
          {t.subscribe.desc}
        </p>

        {/* Feedback Alert */}
        {message && (
          <div className={`mt-4 px-4 py-2.5 rounded-sm text-xs font-semibold flex items-center gap-2 max-w-md ${
            message.type === "success" 
              ? "bg-emerald-50 text-emerald-700" 
              : "bg-red-50 text-red-700"
          }`}>
            {message.type === "success" ? <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> : <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />}
            <span>{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubscribe} className="w-full max-w-lg mt-6 flex flex-col sm:flex-row gap-2.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={currentUser ? `Email: ${currentUser.email}` : t.subscribe.placeholder}
            className="
              w-full 
              h-11 
              px-4 
              rounded-sm 
              text-[#192048] 
              text-xs 
              sm:text-sm 
              bg-white 
              border 
              border-white 
              shadow-none
              focus:outline-none 
            "
          />

          <button 
            type="submit"
            disabled={loading}
            className="
              w-full
              sm:w-auto
              h-11
              px-6 
              bg-[#FF383C] 
              text-white 
              text-xs 
              sm:text-sm 
              font-bold 
              rounded-sm
              transition-colors 
              duration-200 
              border-none 
              cursor-pointer 
              hover:bg-[#e02d31] 
              shadow-none
              flex 
              items-center 
              justify-center
              gap-2
              shrink-0
              disabled:opacity-50
            "
          >
            <Send className="w-4 h-4" />
            <span>{loading ? t.subscribe.submitting : t.subscribe.button}</span>
          </button>
        </form>

      </div>
    </section>
  );
}