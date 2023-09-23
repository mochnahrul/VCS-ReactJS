import { Fragment, useState, useEffect, useRef } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  const totalPriceRef = useRef(null);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

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
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="navbar flex flex-row justify-end items-center gap-x-4 bg-blue-800 text-white py-2 px-4">
        <p>{username}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex flex-row justify-between items-start bg-slate-800 min-h-screen py-16">
        <div className="w-2/3 px-4">
          <div className="flex flex-wrap gap-y-4">
            {products.length > 0 &&
              products.map((product) => (
                <div className="w-1/3 flex px-2" key={product.id}>
                  <CardProduct>
                    <CardProduct.Header image={product.image} alt={product.title} id={product.id} />
                    <CardProduct.Body name={product.title} price={product.price} id={product.id} handler={handleAddToCart}>
                      {product.description}
                    </CardProduct.Body>
                  </CardProduct>
                </div>
              ))}
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold text-2xl text-white">Cart</p>
            <table className="table-auto text-white text-left">
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
