import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkModeContext";
import Button from "../Elements/Button";
import { TotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const username = useLogin();
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const totalPrice = useContext(TotalPrice);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="navbar flex flex-row justify-end items-center gap-x-4 bg-blue-800 text-white py-2 px-4">
      <p>{username}</p>
      <Button onClick={handleLogout}>Logout</Button>
      <div className="flex bg-black text-white rounded-md py-2 px-4">
        Item: {totalCart} | Price: ${totalPrice.total.toLocaleString("en-US", { styles: "currency", currency: "USD" })}
      </div>
      <Button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Dark" : "Light"}</Button>
    </div>
  );
};

export default Navbar;
