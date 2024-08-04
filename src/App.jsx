function App() {
  return <AccordionSkeleton />;
}

function AccordionSkeleton() {
  return (
    <div>
      <img
        className="min-w-full"
        src="./src/assets/images/background-pattern-desktop.svg"
      />
      <div className="bg-light-pink min-h-screen relative flex flex-col items-center">
        <div className="bg-white absolute top-[-15%] p-8">
          <div className="flex gap-4">
            <img src="./src/assets/images/icon-star.svg" />
            <p className="font-bold text-5xl">FAQs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
