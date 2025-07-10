import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components/index";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(login(userData)); // don't wrap inside `{ userData }`
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.warn("User not logged in:", error.message);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [dispatch]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          Todo: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
