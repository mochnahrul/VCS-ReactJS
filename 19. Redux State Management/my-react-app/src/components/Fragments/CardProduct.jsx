import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="card flex flex-col bg-white border rounded-lg w-full">{children}</div>;
};

const Header = (props) => {
  const { image, alt, id } = props;
  return (
    <div className="card-header rounded-t-lg overflow-hidden">
      <Link to={`/product/${id}`}>
        <img src={image} className="w-full h-60 object-cover pointer-events-none" alt={alt} />
      </Link>
    </div>
  );
};

const Body = (props) => {
  const { children, name, price, id, handler } = props;
  return (
    <div className="card-body flex flex-col gap-y-4 p-3">
      <h6 className="font-semibold text-xl">{name.substring(0, 15)}...</h6>
      <div className="flex flex-col">
        <p className="font-medium">USD {price.toLocaleString("en-US", { styles: "currency", currency: "USD" })}</p>
        <p className="text-base">{children.substring(0, 70)}...</p>
      </div>
      <Button onClick={() => handler(id)}>Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
