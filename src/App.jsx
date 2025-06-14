import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import RequestPasswordResetPage from "./pages/RequestResetPasswordPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import PostForm from "./components/PostForm";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import PostsPage from "./pages/PostsPage";
import { FAQ } from "./pages/FAQ";
import PredictForm from "./components/PricePredictorForm";
const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/confirmation" element={<ConfirmationPage />} /> {/* Новый маршрут */}
        <Route path="/requestreset" element={<RequestPasswordResetPage/>}></Route>
        <Route path="/reset-password" element={<ResetPasswordPage/>}></Route>
        <Route path="/posts" element={<PostsPage/>}></Route>
        <Route path="/create-post" element={<PostForm/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/predict" element={<PredictForm/>}></Route>
      </Routes>

      <Toaster />
    </div>
  );
};
export default App;