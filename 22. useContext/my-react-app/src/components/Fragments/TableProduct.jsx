import { useState, useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkModeContext";

const TableProduct = (props) => {
  const { products } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const totalPriceRef = useRef(null);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className={`table-auto text-left ${isDarkMode && "text-white"}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr className="text-sm" key={item.id}>
                <td>{product.title.substring(0, 15)}...</td>
                <td>USD {product.price.toLocaleString("en-US", { styles: "currency", currency: "USD" })}</td>
                <td>{item.qty}</td>
                <td>USD {(item.qty * product.price).toLocaleString("en-US", { styles: "currency", currency: "USD" })}</td>
              </tr>
            );
          })}
        <tr className="font-bold" ref={totalPriceRef}>
          <td colSpan={3}>
            <p>Total Price</p>
          </td>
          <td>
            <p>USD {totalPrice.toLocaleString("en-US", { styles: "currency", currency: "USD" })}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableProduct;
