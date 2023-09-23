import Button from "./components/Elements/Button";

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
