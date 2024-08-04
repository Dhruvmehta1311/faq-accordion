/* eslint-disable react/prop-types */
const accordionData = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Frontend Mentor has both free and premium challenges. The free challenges include a variety of projects, while the premium subscription unlocks all challenges and additional features.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use the projects you complete on Frontend Mentor in your portfolio. It's a great way to showcase your skills and the work you've done.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "You can ask for help in the Frontend Mentor community forums or join the community on social media platforms. There are many experienced developers and learners willing to assist.",
  },
];

function App() {
  return <AccordionSkeleton accordionData={accordionData} />;
}

function AccordionSkeleton({ accordionData }) {
  return (
    <div>
      <img
        className="w-full hidden  sm:block"
        src="./src/assets/images/background-pattern-desktop.svg"
      />
      <img
        className="sm:hidden  w-full"
        src="./src/assets/images/background-pattern-mobile.svg"
      />
      <div className="bg-light-pink min-h-screen relative flex flex-col items-center">
        <div className="bg-white rounded-lg absolute top-[-15%] p-8 flex flex-col gap-12 max-w-[650px] w-[90%]">
          <div className="flex gap-4">
            <img src="./src/assets/images/icon-star.svg" />
            <p className="font-bold text-5xl ">FAQs</p>
          </div>
          <div className="flex flex-col gap-4">
            {accordionData.map((accordion) => (
              <AccordionComponent
                key={accordion.question}
                accordion={accordion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionComponent({ accordion }) {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div className="flex justify-between">
        <p className="font-bold">{accordion.question}</p>
        <img className="" src="./src/assets/images/icon-minus.svg" />
      </div>
      <p className="text-dark-purple font-semibold">{accordion.answer}</p>
    </div>
  );
}

export default App;
