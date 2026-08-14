import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, User, UserPlus, AlertCircle, CheckCircle2 } from "lucide-react";
import ERobotLogo from "../assets/ERobot.png";

export default function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { loginWithGoogle, signUpWithEmail } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      setSubmitting(true);
      await loginWithGoogle();
      setSuccess("បង្កើតគណនីជោគជ័យ!");
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      console.error(err);
      setError(
        err.code === "auth/popup-closed-by-user"
          ? "ការចុះឈ្មោះត្រូវបានលុបចោល"
          : "មិនអាចចុះឈ្មោះតាម Google បានទេ"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!displayName || !email || !password) {
      setError("សូមបំពេញព័ត៌មានអោយបានគ្រប់គ្រាន់");
      return;
    }

    if (password !== confirmPassword) {
      setError("លេខសម្ងាត់ផ្ទៀងផ្ទាត់មិនត្រូវគ្នាទេ");
      return;
    }

    if (password.length < 6) {
      setError("លេខសម្ងាត់ត្រូវតែមានយ៉ាងតិច ៦ តួអក្សរ");
      return;
    }

    try {
      setSubmitting(true);
      await signUpWithEmail(email, password, displayName);
      setSuccess("បង្កើតគណនីជោគជ័យ!");
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("អ៊ីមែលនេះមានគណនីរួចហើយ");
      } else {
        setError("មានបញ្ហាកើតឡើង! សូមព្យាយាមម្តងទៀត");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[85vh] bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

        {/* Logo & Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link to="/">
            <img 
              src={ERobotLogo} 
              alt="E-Robot Cambodia" 
              className="w-16 h-16 rounded-full border border-slate-200 mb-3 hover:scale-105 transition-transform shadow-xs" 
            />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">បង្កើតគណនីថ្មី</h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            ចូលរួមជាមួយពួកយើងដើម្បីទទួលបានឱកាសថ្មីៗ
          </p>
        </div>

        {/* Alert Messages */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-700 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-emerald-700 text-xs font-semibold">
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
          <span>ចុះឈ្មោះតាម Google</span>
        </button>

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full border-t border-slate-200" />
          <span className="absolute px-3 bg-white text-slate-400 text-xs uppercase font-medium">
            ឬចុះឈ្មោះតាមអ៊ីមែល
          </span>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="ឈ្មោះពេញ"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0E79B2] transition-all"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              placeholder="អ៊ីមែល"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0E79B2] transition-all"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="password"
              placeholder="លេខសម្ងាត់"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0E79B2] transition-all"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="password"
              placeholder="ផ្ទៀងផ្ទាត់លេខសម្ងាត់"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0E79B2] transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 py-3 bg-[#0E79B2] hover:bg-[#0C6C9F] text-white rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xs active:scale-[0.98] border-none cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <UserPlus className="w-4 h-4" />
            <span>{submitting ? "កំពុងដំណើរការ..." : "ចុះឈ្មោះ"}</span>
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-6 text-center text-xs text-slate-500 font-medium">
          មានគណនីរួចហើយ?{" "}
          <Link to="/login" className="text-[#0E79B2] font-bold hover:underline">
            ចូលប្រើប្រាស់
          </Link>
        </div>
      </div>
    </div>
  );
}
