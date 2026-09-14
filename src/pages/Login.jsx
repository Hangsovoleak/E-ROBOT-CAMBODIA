import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, LogIn, AlertCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import ERobotLogo from "../assets/ERobot.png";

export default function Login() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { loginWithGoogle, loginWithEmail } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      setSubmitting(true);
      await loginWithGoogle();
      setSuccess(t.auth.successLogin);
      setTimeout(() => navigate("/"), 800);
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

    try {
      setSubmitting(true);
      await loginWithEmail(email, password);
      setSuccess(t.auth.successLogin);
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      console.error(err);
      if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        setError(t.auth.errInvalidCred);
      } else {
        setError(t.auth.errGeneric);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] bg-[#F7F7F7] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-[#192048]/15 rounded-sm p-8 shadow-none relative overflow-hidden">

        <div className="flex flex-col items-center text-center mb-8">
          <Link to="/">
            <img 
              src={ERobotLogo} 
              alt="E-Robot Logo" 
              className="w-16 h-16 rounded-full border border-[#192048]/20 mb-3" 
            />
          </Link>
          <h1 className="text-2xl font-black text-[#192048]">{t.auth.loginTitle}</h1>
          <p className="text-xs text-[#192048]/70 mt-1 font-medium">
            {t.auth.loginSub}
          </p>
        </div>

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
          <span>{t.auth.googleSignIn}</span>
        </button>

        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full border-t border-[#192048]/10" />
          <span className="absolute px-3 bg-white text-[#192048]/50 text-xs uppercase font-medium">
            {t.auth.orEmailLogin}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#192048]/40" />
            <input
              type="email"
              placeholder={t.auth.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#F7F7F7] border border-[#192048]/15 rounded-sm text-xs sm:text-sm text-[#192048] placeholder-[#192048]/40 focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#192048]/40" />
            <input
              type="password"
              placeholder={t.auth.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#F7F7F7] border border-[#192048]/15 rounded-sm text-xs sm:text-sm text-[#192048] placeholder-[#192048]/40 focus:outline-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 py-3 bg-[#192048] hover:bg-[#232b57] text-white rounded-sm font-bold text-xs sm:text-sm transition-colors border-none cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 shadow-none"
          >
            <LogIn className="w-4 h-4" />
            <span>{submitting ? t.auth.submitting : t.auth.loginTitle}</span>
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-[#192048]/70 font-medium">
          {t.auth.noAccount}{" "}
          <Link to="/signup" className="text-[#FF383C] font-bold hover:underline">
            {t.auth.signUpHere}
          </Link>
        </div>
      </div>
    </div>
  );
}
