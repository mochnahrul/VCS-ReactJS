const Button = (props) => {
  const { children, variant = "bg-black text-white" } = props;
  return (
    <button className={`font-semibold ${variant} rounded-md h-10 px-6`} type="submit">
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center items-center bg-teal-500 min-h-screen">
      <div className="flex flex-row gap-x-3">
        <Button variant="bg-sky-800 text-white">Submit</Button>
        <Button variant="bg-violet-800 text-white">Submit</Button>
        <Button variant="bg-rose-800 text-white">Submit</Button>
      </div>
    </div>
  );
}

export default App;
