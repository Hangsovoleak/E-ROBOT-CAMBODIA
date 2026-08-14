import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, QrCode, LogIn, User, LogOut, Heart, CheckCircle2, ChevronDown, ShieldCheck, Mail } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import AuthModal from "./AuthModal";

import ERobotLogo from "../assets/ERobot.png";
import DonationQR from "../assets/QR.jpg"; 

// ----------------------------------------------------
// Navigation Items - Easy to maintain & extend
// ----------------------------------------------------
const NAV_ITEMS = [
  { to: "/", label: "ទំព័រដើម" },
  { to: "/about", label: "អំពីយើង" },
  { to: "/services", label: "សកម្មភាព" },
  { to: "/contact", label: "ទំនាក់ទំនង" },
  { to: "/sharings", label: "ការចែករំលែក" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState("login"); // "login" | "signup"
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // Donation state
  const [donateAmount, setDonateAmount] = useState("");
  const [donateSuccess, setDonateSuccess] = useState(false);
  const [donating, setDonating] = useState(false);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const donationPanelRef = useRef(null);

  // Reset avatar error state when currentUser changes
  useEffect(() => {
    setAvatarError(false);
  }, [currentUser]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
      if (donationPanelRef.current && !donationPanelRef.current.contains(event.target)) {
        setDonationModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
    setDonationModalOpen(false);
  };

  const handleOpenAuth = (tab = "login") => {
    setAuthTab(tab);
    setAuthModalOpen(true);
    closeAll();
  };

  const handleConfirmDonation = async () => {
    try {
      setDonating(true);
      await addDoc(collection(db, "donations"), {
        userId: currentUser ? currentUser.uid : null,
        userName: currentUser ? (currentUser.displayName || "អនាមិក") : "អ្នកឧបត្ថម្ភ",
        userEmail: currentUser ? currentUser.email : "anonymous@erobot.org",
        amount: donateAmount || "តាមទឹកចិត្ត",
        paymentMethod: "ABA Pay QR",
        status: "completed",
        timestamp: serverTimestamp()
      });
      setDonateSuccess(true);
      setDonateAmount("");
    } catch (err) {
      console.error("Donation recording error:", err);
    } finally {
      setDonating(false);
    }
  };

  const getProviderName = () => {
    if (!currentUser) return "Email";
    const providerData = currentUser.providerData?.[0];
    if (providerData?.providerId === "google.com") return "Google Account";
    return "Email / Password";
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            onClick={closeAll} 
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
          >
            <img 
              src={ERobotLogo} 
              alt="E-Robot Cambodia" 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-slate-200 shadow-xs transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg leading-tight group-hover:text-[#0E79B2] transition-colors">
                E-ROBOT
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase hidden sm:block">
                CAMBODIA
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1.5 flex-1 justify-center list-none m-0 p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap block ${
                      isActive
                        ? "text-[#0E79B2] bg-sky-50 border border-sky-200/80 font-bold shadow-2xs"
                        : "text-slate-700 border border-transparent hover:text-[#0E79B2] hover:bg-slate-100/80"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            
            {/* Donation Button */}
            <button
              onClick={() => {
                setDonateSuccess(false);
                setDonationModalOpen(!donationModalOpen);
                setUserDropdownOpen(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border shadow-2xs cursor-pointer active:scale-95 flex items-center gap-2 ${
                donationModalOpen
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>{donationModalOpen ? "បិទ" : "ឧបត្ថម្ភពួកយើង"}</span>
            </button>

            {/* Authenticated User Profile in Navbar Dropdown */}
            {currentUser ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className={`flex items-center gap-2.5 pl-1.5 pr-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-2xs border ${
                    userDropdownOpen
                      ? "bg-sky-50 border-sky-300 text-[#0E79B2] ring-2 ring-sky-100"
                      : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800"
                  }`}
                >
                  {currentUser.photoURL && !avatarError ? (
                    <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-sky-400/60 shadow-2xs bg-slate-100 flex items-center justify-center">
                      <img
                        src={currentUser.photoURL}
                        alt=""
                        onError={() => setAvatarError(true)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-[#0E79B2] text-white font-bold flex items-center justify-center text-xs shadow-2xs shrink-0">
                      {(currentUser.displayName || currentUser.email || "U")[0].toUpperCase()}
                    </div>
                  )}
                  <span className="text-xs font-bold max-w-[120px] truncate">
                    {currentUser.displayName || "គណនី"}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${userDropdownOpen ? "rotate-180 text-[#0E79B2]" : ""}`} />
                </button>

                {/* Profile Card Dropdown */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2.5 w-72 bg-white border border-slate-200 rounded-3xl p-4 shadow-2xl z-50 animate-in fade-in duration-150">
                    
                    {/* Header Info */}
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                      {currentUser.photoURL && !avatarError ? (
                        <div className="w-11 h-11 rounded-2xl overflow-hidden shrink-0 border border-sky-300 shadow-2xs bg-slate-100 flex items-center justify-center">
                          <img
                            src={currentUser.photoURL}
                            alt=""
                            onError={() => setAvatarError(true)}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-11 h-11 rounded-2xl bg-[#0E79B2] text-white font-extrabold flex items-center justify-center text-sm shadow-2xs shrink-0">
                          {(currentUser.displayName || currentUser.email || "U")[0].toUpperCase()}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                          <span className="text-[10px] font-extrabold text-[#0E79B2] uppercase tracking-wider">សមាជិក E-ROBOT</span>
                        </div>
                        <p className="text-xs font-extrabold text-slate-900 truncate m-0">
                          {currentUser.displayName || "E-Robot Member"}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5 m-0 font-medium">
                          {currentUser.email}
                        </p>
                      </div>
                    </div>

                    {/* Account Details */}
                    <div className="py-3 space-y-2 border-b border-slate-100">
                      <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <User className="w-3.5 h-3.5 text-[#0E79B2] shrink-0" />
                          ប្រភេទគណនី:
                        </span>
                        <strong className="text-slate-900 font-bold">{getProviderName()}</strong>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          ស្ថានភាព:
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-[10px] border border-emerald-200">
                          បានផ្ទៀងផ្ទាត់
                        </span>
                      </div>
                    </div>

                    {/* Logout Action */}
                    <button
                      onClick={() => { setUserDropdownOpen(false); logout(); navigate("/"); }}
                      className="w-full mt-3 py-2.5 px-3 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs active:scale-95"
                    >
                      <LogOut className="w-4 h-4 text-red-500 shrink-0" />
                      <span>ចាកចេញពីគណនី</span>
                    </button>

                  </div>
                )}
              </div>
            ) : (
              /* Single Login Button for Unauthenticated User */
              <button
                onClick={() => handleOpenAuth("login")}
                className="px-5 py-2 rounded-full text-xs font-bold bg-[#0E79B2] hover:bg-[#0C6C9F] text-white transition-all duration-200 cursor-pointer border-none shadow-xs hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
              >
                <LogIn className="w-4 h-4 shrink-0" />
                <span>ចូលគណនី</span>
              </button>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 transition-colors border-none bg-transparent cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-md px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
            
            {/* Authenticated User Status Card in Mobile Menu */}
            {currentUser && (
              <div className="p-4 bg-sky-50/80 border border-sky-200/80 rounded-2xl space-y-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  {currentUser.photoURL && !avatarError ? (
                    <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-sky-400 shadow-2xs bg-slate-100 flex items-center justify-center">
                      <img
                        src={currentUser.photoURL}
                        alt=""
                        onError={() => setAvatarError(true)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-[#0E79B2] text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                      {(currentUser.displayName || currentUser.email || "U")[0].toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-extrabold text-slate-900 m-0 truncate">{currentUser.displayName || "Member"}</p>
                    <p className="text-[11px] text-slate-500 m-0 mt-0.5 truncate">{currentUser.email}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-sky-200/60 text-xs">
                  <span className="text-slate-600 text-[11px] font-medium">វិធីសាស្ត្រ: <strong>{getProviderName()}</strong></span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-[10px] border border-emerald-200">
                    សមាជិក
                  </span>
                </div>
              </div>
            )}

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeAll}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive 
                        ? "bg-sky-50 text-[#0E79B2] font-bold border border-sky-200/80" 
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-2" />

            {/* Mobile Actions */}
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); setDonationModalOpen(true); }} 
                className="w-full py-2.5 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500 shrink-0" />
                <span>ឧបត្ថម្ភពួកយើង</span>
              </button>

              {!currentUser ? (
                <button 
                  onClick={() => handleOpenAuth("login")} 
                  className="w-full py-2.5 bg-[#0E79B2] hover:bg-[#0C6C9F] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <LogIn className="w-4 h-4 shrink-0" />
                  <span>ចូលគណនី</span>
                </button>
              ) : (
                <button 
                  onClick={() => { closeAll(); logout(); navigate("/"); }} 
                  className="w-full py-2.5 bg-red-50 border border-red-200 text-red-600 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-4 h-4 shrink-0" />
                  <span>ចាកចេញពីគណនី</span>
                </button>
              )}
            </div>

          </div>
        )}

        {/* Donation QR Floating Modal */}
        {donationModalOpen && (
          <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 z-50 w-full max-w-sm px-4" ref={donationPanelRef}>
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl text-center flex flex-col items-center relative animate-in fade-in duration-200">
              <button 
                onClick={() => setDonationModalOpen(false)} 
                className="absolute top-4 right-4 h-7 w-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-xs border-none cursor-pointer hover:text-slate-900 transition-colors"
              >
                ✕
              </button>

              <div className="h-11 w-11 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-3 mt-1">
                <QrCode className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-slate-900 m-0">
                ឧបត្ថម្ភគាំទ្រពួកយើង
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1.5 mb-4 px-2 leading-relaxed">
                សូមស្កែន QR Code ខាងក្រោមដើម្បីឧបត្ថម្ភដល់ក្រុមការងារ E-ROBOT
              </p>

              <div className="w-52 h-52 bg-slate-50 border border-slate-200 rounded-2xl p-3 shadow-inner flex items-center justify-center overflow-hidden mb-4">
                <img 
                  src={DonationQR} 
                  alt="Donation ABA Pay QR Code" 
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
                />
              </div>

              {/* Firestore Donation Recording */}
              <div className="w-full pt-3 border-t border-slate-100">
                {donateSuccess ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>បានកត់ត្រាការឧបត្ថម្ភ! អរគុណច្រើន</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="ចំនួនប្រាក់ (ឧទាហរណ៍: $5)"
                      value={donateAmount}
                      onChange={(e) => setDonateAmount(e.target.value)}
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0E79B2]"
                    />
                    <button
                      onClick={handleConfirmDonation}
                      disabled={donating}
                      className="w-full py-2 bg-[#0E79B2] hover:bg-[#0C6C9F] text-white text-xs font-bold rounded-xl border-none cursor-pointer transition-all shadow-xs disabled:opacity-50"
                    >
                      {donating ? "កំពុងកត់ត្រា..." : "កត់ត្រាការឧបត្ថម្ភក្នុងប្រព័ន្ធ"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialTab={authTab}
      />
    </>
  );
}