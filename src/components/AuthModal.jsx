import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { X, Lock, Mail, User, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AuthModal({ isOpen, onClose, initialTab = "login" }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { loginWithGoogle, loginWithEmail, signUpWithEmail } = useAuth();

  // Keep activeTab synchronized whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setError("");
      setSuccess("");
      setEmail("");
      setPassword("");
      setDisplayName("");
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const handleReset = () => {
    setError("");
    setSuccess("");
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const handleSwitchTab = (tab) => {
    handleReset();
    setActiveTab(tab);
  };

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      setSubmitting(true);
      await loginWithGoogle();
      setSuccess("ចូលប្រើប្រាស់ជោគជ័យ!");
      setTimeout(() => {
        onClose();
        handleReset();
      }, 1000);
    } catch (err) {
      console.error(err);
      setError(
        err.code === "auth/popup-closed-by-user"
          ? "ការចូលប្រើត្រូវបានលុបចោល"
          : "មិនអាចចូលប្រើប្រាស់តាម Google បានទេ សូមព្យាយាមម្តងទៀត"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("សូមបញ្ចូលអ៊ីមែល និងលេខសម្ងាត់");
      return;
    }

    if (activeTab === "signup" && !displayName) {
      setError("សូមបញ្ចូលឈ្មោះរបស់អ្នក");
      return;
    }

    if (password.length < 6) {
      setError("លេខសម្ងាត់ត្រូវតែមានយ៉ាងតិច ៦ តួអក្សរ");
      return;
    }

    try {
      setSubmitting(true);
      if (activeTab === "signup") {
        await signUpWithEmail(email, password, displayName);
        setSuccess("បង្កើតគណនីជោគជ័យ!");
      } else {
        await loginWithEmail(email, password);
        setSuccess("ចូលប្រើប្រាស់ជោគជ័យ!");
      }
      setTimeout(() => {
        onClose();
        handleReset();
      }, 1000);
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("អ៊ីមែលនេះមានគណនីរួចហើយ");
      } else if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        setError("អ៊ីមែល ឬលេខសម្ងាត់មិនត្រឹមត្រូវទេ");
      } else {
        setError("មានបញ្ហាកើតឡើង! សូមព្យាយាមម្តងទៀត");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 transition-opacity animate-in fade-in duration-200"
      onClick={() => { onClose(); handleReset(); }}
    >
      <div 
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => { onClose(); handleReset(); }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center cursor-pointer hover:text-slate-900 hover:bg-slate-200 transition-colors border-none"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 m-0">
            {activeTab === "login" ? "ចូលប្រើប្រាស់ E-ROBOT" : "បង្កើតគណនី E-ROBOT"}
          </h2>
          <p className="text-xs text-slate-500 mt-1.5 font-medium">
            {activeTab === "login" ? "សូមបញ្ចូលព័ត៌មានគណនីរបស់អ្នកដើម្បីចូលប្រើ" : "បំពេញព័ត៌មានខាងក្រោមដើម្បីចុះឈ្មោះគណនីថ្មី"}
          </p>
        </div>

        {/* Error / Success Alerts */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-700 text-xs font-semibold animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-emerald-700 text-xs font-semibold animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>{success}</span>
          </div>
        )}

        {/* Google OAuth Button */}
        <button
          type="button"
          disabled={submitting}
          onClick={handleGoogleSignIn}
          className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-2xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-3 transition-all shadow-2xs active:scale-[0.98] cursor-pointer disabled:opacity-50"
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.24v3.15C3.26 21.39 7.37 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.24C.45 8.19 0 10.04 0 12s.45 3.81 1.24 5.39l4.04-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.61 1.24 6.61l4.04 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
            />
          </svg>
          <span>បន្តជាមួយ Google</span>
        </button>

        {/* Divider */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="w-full border-t border-slate-200" />
          <span className="absolute px-3 bg-white text-slate-400 text-xs uppercase font-medium">
            ឬ
          </span>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {activeTab === "signup" && (
            <div className="relative flex items-center">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 pointer-events-none z-10">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="ឈ្មោះពេញ"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                style={{ paddingLeft: "2.75rem" }}
                className="w-full pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0E79B2] transition-all"
                required={activeTab === "signup"}
              />
            </div>
          )}

          <div className="relative flex items-center">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 pointer-events-none z-10">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              placeholder="អ៊ីមែល"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingLeft: "2.75rem" }}
              className="w-full pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0E79B2] transition-all"
              required
            />
          </div>

          <div className="relative flex items-center">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 pointer-events-none z-10">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type="password"
              placeholder="លេខសម្ងាត់"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingLeft: "2.75rem" }}
              className="w-full pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0E79B2] transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-1.5 py-3 bg-[#0E79B2] hover:bg-[#0C6C9F] text-white rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xs active:scale-[0.98] border-none cursor-pointer disabled:opacity-50"
          >
            {submitting ? "កំពុងដំណើរការ..." : activeTab === "login" ? "ចូលប្រើប្រាស់" : "បង្កើតគណនី"}
          </button>
        </form>

        {/* Footer Prompt Link */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 text-center">
          {activeTab === "login" ? (
            <p className="text-xs text-slate-600 font-medium m-0">
              មិនទាន់មានគណនីមែនទេ?{" "}
              <button
                type="button"
                onClick={() => handleSwitchTab("signup")}
                className="text-[#0E79B2] font-bold hover:underline border-none bg-transparent cursor-pointer ml-1"
              >
                ចុះឈ្មោះនៅទីនេះ
              </button>
            </p>
          ) : (
            <p className="text-xs text-slate-600 font-medium m-0">
              មានគណនីរួចហើយមែនទេ?{" "}
              <button
                type="button"
                onClick={() => handleSwitchTab("login")}
                className="text-[#0E79B2] font-bold hover:underline border-none bg-transparent cursor-pointer ml-1"
              >
                ចូលប្រើនៅទីនេះ
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
