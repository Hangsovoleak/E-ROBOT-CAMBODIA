import React, { useState } from "react";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const { currentUser } = useAuth();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage(null);

    const inputEmail = email.trim() || (currentUser ? currentUser.email : "");

    if (!inputEmail) {
      setMessage({ type: "error", text: "សូមបញ្ចូលអ៊ីមែលរបស់អ្នក" });
      return;
    }

    try {
      setLoading(true);

      const subRef = collection(db, "subscribers");
      const q = query(subRef, where("email", "==", inputEmail));
      const querySnap = await getDocs(q);

      if (!querySnap.empty) {
        setMessage({ type: "success", text: "អ៊ីមែលនេះបានជាវព័ត៌មានរួចរាល់ហើយ! អរគុណសម្រាប់ការគាំទ្រ" });
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

      setMessage({ type: "success", text: "អរគុណសម្រាប់ការជាវព័ត៌មានប្រចាំខែរបស់ E-ROBOT!" });
      setEmail("");
    } catch (err) {
      console.error("Subscription error:", err);
      setMessage({ type: "error", text: "មានបញ្ហាកើតឡើង! សូមព្យាយាមម្តងទៀត" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 bg-white">
      <div 
        className="
          container 
          bg-slate-50/70
          border 
          border-slate-200 
          rounded-3xl 
          p-6 
          sm:p-10 
          lg:p-12 
          flex 
          flex-col 
          items-center 
          text-center 
          shadow-xs 
          relative 
          overflow-hidden
        "
      >
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight m-0">
          តាមដានព័ត៌មានថ្មីៗជាមួយយើង
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed mt-2.5 sm:mt-3.5 font-medium">
          ចូលរួមជាមួយសហគមន៍ E-ROBOT ដើម្បីស្វែងយល់ពីបច្ចេកវិទ្យាថ្មីៗ និងទទួលបានចំណេះដឹងបន្ថែមពីលើអ្វីដែលអ្នកបានរៀននៅសាលា។
        </p>

        {/* Feedback Alert */}
        {message && (
          <div className={`mt-4 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 max-w-md ${
            message.type === "success" 
              ? "bg-emerald-50 border border-emerald-200 text-emerald-700" 
              : "bg-red-50 border border-red-200 text-red-700"
          }`}>
            {message.type === "success" ? <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> : <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />}
            <span>{message.text}</span>
          </div>
        )}

        {/* Form Container - Responsive for both mobile and laptop */}
        <form onSubmit={handleSubscribe} className="w-full max-w-xl mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={currentUser ? `អ៊ីមែលរបស់អ្នក: ${currentUser.email}` : "បញ្ចូលអ៊ីមែលរបស់អ្នក"}
            className="
              w-full 
              h-12 
              sm:h-13 
              px-5 
              rounded-2xl 
              sm:rounded-full 
              text-slate-900 
              text-xs 
              sm:text-sm 
              bg-white 
              border 
              border-slate-300 
              shadow-2xs 
              focus:bg-white
              focus:outline-none 
              focus:border-[#0E79B2] 
              transition-all
            "
          />

          <button 
            type="submit"
            disabled={loading}
            className="
              w-full
              sm:w-auto
              h-12
              sm:h-13
              px-7 
              bg-[#0E79B2] 
              text-white 
              text-xs 
              sm:text-sm 
              font-bold 
              rounded-2xl
              sm:rounded-full 
              transition-all 
              duration-200 
              border-none 
              cursor-pointer 
              hover:bg-[#0C6C9F] 
              active:scale-95 
              shadow-xs
              flex 
              items-center 
              justify-center
              gap-2
              shrink-0
              disabled:opacity-50
            "
          >
            <Send className="w-4 h-4" />
            <span>{loading ? "កំពុងផ្ញើ..." : "ចុះឈ្មោះ"}</span>
          </button>
        </form>

      </div>
    </section>
  );
}