import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Figure 1",
    image: "/images/figure-1.jpg",
    price: "IDR 1.000K",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, autem!",
  },
  {
    id: 2,
    name: "Figure 2",
    image: "/images/figure-1.jpg",
    price: "IDR 1.250K",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur!",
  },
  {
    id: 1,
    name: "Figure 3",
    image: "/images/figure-1.jpg",
    price: "IDR 2.000K",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, animi!",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-800 min-h-screen">
      <div className="flex flex-wrap justify-center items-start">
        {products.map((product) => (
          <div className="w-1/4 flex px-2" key={product.id}>
            <CardProduct>
              <CardProduct.Header image={product.image} alt={product.name} />
              <CardProduct.Body name={product.name} price={product.price}>
                {product.description}
              </CardProduct.Body>
            </CardProduct>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
