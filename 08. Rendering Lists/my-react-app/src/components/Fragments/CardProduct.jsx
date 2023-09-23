import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="card flex flex-col bg-white border rounded-lg w-full">{children}</div>;
};

const Header = (props) => {
  const { image, alt } = props;
  return (
    <div className="card-header rounded-t-lg overflow-hidden">
      <img src={image} className="w-full pointer-events-none" alt={alt} />
    </div>
  );
};

const Body = (props) => {
  const { children, name, price } = props;
  return (
    <div className="card-body flex flex-col gap-y-4 p-3">
      <h6 className="font-semibold text-xl">{name}</h6>
      <div className="flex flex-col">
        <p className="font-medium">{price}</p>
        <p className="text-base">{children}</p>
      </div>
      <Button>Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
