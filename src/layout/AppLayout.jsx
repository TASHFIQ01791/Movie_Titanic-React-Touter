import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Headers/Header";
import { Footer } from "./Footer";
import "../layout/loader.css";

export const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation)
  if (navigation.state === "loading") {
    return (
      <div className="loader">
        <div className="spinner"></div>
        Loading...
      </div>
    );
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
