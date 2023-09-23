import { Fragment, useState, useEffect, useContext } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import TableProduct from "../components/Fragments/TableProduct";
import { getProducts } from "../services/product.service";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkModeContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={`flex flex-row justify-between items-start min-h-screen py-16 ${isDarkMode && "bg-slate-800"}`}>
        <div className="w-2/3 px-4">
          <div className="flex flex-wrap gap-y-4">
            {products.length > 0 &&
              products.map((product) => (
                <div className="w-1/3 flex px-2" key={product.id}>
                  <CardProduct>
                    <CardProduct.Header image={product.image} alt={product.title} id={product.id} />
                    <CardProduct.Body name={product.title} price={product.price} id={product.id}>
                      {product.description}
                    </CardProduct.Body>
                  </CardProduct>
                </div>
              ))}
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold text-2xl text-blue-800">Cart</p>
            <TableProduct products={products} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
