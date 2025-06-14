import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, MessageCircle, Users2, FileQuestion, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full"> {/* Выравнивание по краям на десктопе */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatty</h1>
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            <Menu
              className={`w-6 h-6 text-primary transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
            />
          </button>

          {/* Menu Items (Visible on Desktop and when Hamburger is toggled on Mobile) */}
          <div className={`lg:flex items-center gap-4 ${menuOpen ? "flex flex-col absolute top-16 left-0 right-0 bg-base-100/90 p-4 transition-all duration-300" : "hidden"} lg:flex`}>
            {authUser && (
              <Link to={"/"} className="btn btn-sm gap-2 transition-colors py-2">
                <Users2 className="w-4 h-4" />
                <span>Chat</span>
              </Link>
              
              
            )}

            {/* <Link to={"/posts"} className="btn btn-sm gap-2 transition-colors py-2">
              <MessageCircle className="w-4 h-4" />
              <span>Posts</span>
            </Link> */}

            <Link to={"/settings"} className="btn btn-sm gap-2 transition-colors py-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </Link>

            <Link to={"/faq"} className="btn btn-sm gap-2 transition-colors py-2">
              <FileQuestion className="w-4 h-4" />
              <span>FAQ</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className="btn btn-sm gap-2 py-2">
                  <User className="size-5" />
                  <span>Profile</span>
                </Link>

                <button className="flex gap-2 items-center py-2" onClick={logout}>
                  <LogOut className="size-5" />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
