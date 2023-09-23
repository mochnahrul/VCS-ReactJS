import { Fragment, useState, useEffect, useRef } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Figure 1",
    image: "/images/figure-1.jpg",
    price: 1000000,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, autem!",
  },
  {
    id: 2,
    name: "Figure 2",
    image: "/images/figure-1.jpg",
    price: 1250000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur!",
  },
  {
    id: 3,
    name: "Figure 3",
    image: "/images/figure-1.jpg",
    price: 2000000,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, animi!",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceRef = useRef(null);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
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

  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

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
        <p>{email}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex flex-row justify-between items-start bg-slate-800 min-h-screen py-16">
        <div className="w-2/3 px-4">
          <div className="flex flex-wrap gap-y-4">
            {products.map((product) => (
              <div className="w-1/3 flex px-2" key={product.id}>
                <CardProduct>
                  <CardProduct.Header image={product.image} alt={product.name} />
                  <CardProduct.Body name={product.name} price={product.price} id={product.id} handler={handleAddToCart}>
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
                {cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr className="text-sm" key={item.id}>
                      <td>{product.name}</td>
                      <td>Rp. {product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                      <td>{item.qty}</td>
                      <td>Rp. {(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                    </tr>
                  );
                })}
                <tr className="font-bold" ref={totalPriceRef}>
                  <td colSpan={3}>
                    <p>Total Price</p>
                  </td>
                  <td>
                    <p>Rp. {totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</p>
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
