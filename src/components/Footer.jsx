import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Footer = () => {
  const { authUser, logout } = useAuthStore();

  return (
    <footer className="bg-blue-100 mt-10 py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Logo and name */}
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-lg bg-blue-200 flex items-center justify-center">
            💬
          </div>
          <h1 className="text-2xl font-bold text-blue-800">Chatty</h1>
        </div>

        {/* Footer navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-blue-700 text-lg font-medium">
          {authUser && (
            <Link to="/" className="hover:underline">Chat</Link>
          )}
          <Link to="/posts" className="hover:underline">Posts</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          {authUser && (
            <>
              <Link to="/profile" className="hover:underline">Profile</Link>
              <button onClick={logout} className="hover:underline">Logout</button>
            </>
          )}
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-6 text-center text-sm text-blue-600">
        © {new Date().getFullYear()} Chatty — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
