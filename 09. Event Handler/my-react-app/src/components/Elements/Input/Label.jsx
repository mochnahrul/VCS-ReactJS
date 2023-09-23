const Label = (props) => {
  const { children, htmlfor } = props;
  return (
    <label htmlFor={htmlfor} className="inline-block font-semibold text-sm mb-2">
      {children}
    </label>
  );
};

export default Label;
