import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { X, Lock, Mail, User, AlertCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AuthModal({ isOpen, onClose, initialTab = "login" }) {
  const { t } = useLanguage();
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
      setSuccess(t.auth.successLogin);
      setTimeout(() => {
        onClose();
        handleReset();
      }, 1000);
    } catch (err) {
      console.error(err);
      setError(
        err.code === "auth/popup-closed-by-user"
          ? "Cancelled"
          : t.auth.errGeneric
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
      setError(t.auth.errFillAll);
      return;
    }

    if (activeTab === "signup" && !displayName) {
      setError(t.auth.errFillAll);
      return;
    }

    if (password.length < 6) {
      setError(t.auth.errPassLength);
      return;
    }

    try {
      setSubmitting(true);
      if (activeTab === "signup") {
        await signUpWithEmail(email, password, displayName);
        setSuccess(t.auth.successSignUp);
      } else {
        await loginWithEmail(email, password);
        setSuccess(t.auth.successLogin);
      }
      setTimeout(() => {
        onClose();
        handleReset();
      }, 1000);
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError(t.auth.errEmailInUse);
      } else if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        setError(t.auth.errInvalidCred);
      } else {
        setError(t.auth.errGeneric);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#192048]/60 transition-opacity animate-in fade-in duration-200"
      onClick={() => { onClose(); handleReset(); }}
    >
      <div 
        className="relative w-full max-w-md bg-white border border-[#192048]/15 rounded-sm p-6 sm:p-8 shadow-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => { onClose(); handleReset(); }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F7F7F7] text-[#192048] flex items-center justify-center cursor-pointer hover:bg-[#192048]/10 transition-colors border-none"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-[#192048] m-0">
            {activeTab === "login" ? t.auth.modalLoginTitle : t.auth.modalSignUpTitle}
          </h2>
          <p className="text-xs text-[#192048]/70 mt-1.5 font-medium">
            {activeTab === "login" ? t.auth.modalLoginSub : t.auth.modalSignUpSub}
          </p>
        </div>

        {/* Error / Success Alerts */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-[#FF383C] rounded-sm flex items-center gap-2 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#FF383C]" />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 rounded-sm flex items-center gap-2 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>{success}</span>
          </div>
        )}

        {/* Google OAuth Button */}
        <button
          type="button"
          disabled={submitting}
          onClick={handleGoogleSignIn}
          className="w-full py-3 px-4 bg-[#F7F7F7] hover:bg-[#192048]/5 text-[#192048] border border-[#192048]/15 rounded-sm font-bold text-xs sm:text-sm flex items-center justify-center gap-3 transition-colors shadow-none cursor-pointer disabled:opacity-50"
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
          <span>{t.auth.googleText}</span>
        </button>

        {/* Divider */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="w-full border-t border-[#192048]/10" />
          <span className="absolute px-3 bg-white text-[#192048]/50 text-xs uppercase font-medium">
            {t.auth.or}
          </span>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {activeTab === "signup" && (
            <div className="relative flex items-center">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#192048]/40 pointer-events-none z-10">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder={t.auth.fullName}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                style={{ paddingLeft: "2.75rem" }}
                className="w-full pr-4 py-3 bg-[#F7F7F7] border border-[#192048]/15 rounded-sm text-xs sm:text-sm text-[#192048] placeholder-[#192048]/40 focus:outline-none transition-colors"
                required={activeTab === "signup"}
              />
            </div>
          )}

          <div className="relative flex items-center">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#192048]/40 pointer-events-none z-10">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              placeholder={t.auth.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingLeft: "2.75rem" }}
              className="w-full pr-4 py-3 bg-[#F7F7F7] border border-[#192048]/15 rounded-sm text-xs sm:text-sm text-[#192048] placeholder-[#192048]/40 focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="relative flex items-center">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#192048]/40 pointer-events-none z-10">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type="password"
              placeholder={t.auth.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingLeft: "2.75rem" }}
              className="w-full pr-4 py-3 bg-[#F7F7F7] border border-[#192048]/15 rounded-sm text-xs sm:text-sm text-[#192048] placeholder-[#192048]/40 focus:outline-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-1.5 py-3 bg-[#192048] hover:bg-[#232b57] text-white rounded-sm font-bold text-xs sm:text-sm transition-colors border-none cursor-pointer disabled:opacity-50 shadow-none"
          >
            {submitting ? t.auth.submitting : activeTab === "login" ? t.auth.loginTitle : t.auth.signUpTitle}
          </button>
        </form>

        {/* Footer Prompt Link */}
        <div className="mt-4 pt-3.5 border-t border-[#192048]/10 text-center">
          {activeTab === "login" ? (
            <p className="text-xs text-[#192048]/70 font-medium m-0">
              {t.auth.noAccount}{" "}
              <button
                type="button"
                onClick={() => handleSwitchTab("signup")}
                className="text-[#FF383C] font-bold hover:underline border-none bg-transparent cursor-pointer ml-1"
              >
                {t.auth.signUpHere}
              </button>
            </p>
          ) : (
            <p className="text-xs text-[#192048]/70 font-medium m-0">
              {t.auth.hasAccount}{" "}
              <button
                type="button"
                onClick={() => handleSwitchTab("login")}
                className="text-[#FF383C] font-bold hover:underline border-none bg-transparent cursor-pointer ml-1"
              >
                {t.auth.loginHere}
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
