import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-800 min-h-screen">
      <div className="flex flex-wrap justify-center items-start">
        <div className="w-1/4 px-2">
          <CardProduct>
            <CardProduct.Header image="/images/figure-1.jpg" alt="Figure 1" />
            <CardProduct.Body name="Figure Female" price="IDR 1.000K">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </CardProduct.Body>
          </CardProduct>
        </div>
        <div className="w-1/4 px-2">
          <CardProduct>
            <CardProduct.Header image="/images/figure-1.jpg" alt="Figure 1" />
            <CardProduct.Body name="Figure Female" price="IDR 1.000K">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </CardProduct.Body>
          </CardProduct>
        </div>
        <div className="w-1/4 px-2">
          <CardProduct>
            <CardProduct.Header image="/images/figure-1.jpg" alt="Figure 1" />
            <CardProduct.Body name="Figure Female" price="IDR 1.000K">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </CardProduct.Body>
          </CardProduct>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
