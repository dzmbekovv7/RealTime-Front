import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";  // Импортируем хук для навигации

import AuthImagePattern from "../components/AuthImagePattern";
import { Loader2, Lock, Mail, MessageSquare } from "lucide-react";
const ResetPasswordPage = () => {
    const [formData, setFormData] = useState({
      email: "",
      resetCode: "",
      newPassword: "",
      confirmPassword: "",
    });
    const { resetPassword, isResetting } = useAuthStore();
    const navigate = useNavigate();  // Инициализируем хук useNavigate

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.newPassword !== formData.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
      resetPassword(formData);
      navigate("/login");  // Перенаправление на страницу сброса пароля

    };
  
    return (
      <div className="h-screen grid lg:grid-cols-2">
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center items-center p-6 sm:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-2xl font-bold mt-2">Reset Your Password</h1>
              </div>
            </div>
  
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-base-content/40" />
                  </div>
                  <input
                    type="email"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Reset Code</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-base-content/40" />
                  </div>
                  <input
                    type="text"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="Enter reset code"
                    value={formData.resetCode}
                    onChange={(e) => setFormData({ ...formData, resetCode: e.target.value })}
                  />
                </div>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">New Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-base-content/40" />
                  </div>
                  <input
                    type="password"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="••••••••"
                    value={formData.newPassword}
                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                  />
                </div>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Confirm Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-base-content/40" />
                  </div>
                  <input
                    type="password"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>
              </div>
  
              <button type="submit" className="btn btn-primary w-full" disabled={isResetting}>
                {isResetting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          </div>
        </div>
  
        {/* Right Side - Image/Pattern */}
        <AuthImagePattern
          title={"Reset Your Password!"}
          subtitle={"Please follow the steps to reset your password and regain access."}
        />
      </div>
    );
  };
  
  export default ResetPasswordPage;
  