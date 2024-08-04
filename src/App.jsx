import { useState } from "react";
import backgroundpatterndesktop from "./assets/images/background-pattern-desktop.svg";
import backgroundpatternmobile from "./assets/images/background-pattern-mobile.svg";
import iconplus from "./assets/images/icon-plus.svg";
import iconminus from "./assets/images/icon-minus.svg";
import iconstar from "./assets/images/icon-star.svg";

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
      <img className="w-full hidden  sm:block" src={backgroundpatterndesktop} />
      <img className="sm:hidden  w-full" src={backgroundpatternmobile} />
      <div className="bg-light-pink min-h-screen relative flex flex-col items-center">
        <div className="bg-white rounded-lg absolute top-[-15%] sm:top-[-28%] p-8 flex flex-col gap-12 max-w-[650px] w-[90%]">
          <div className="flex gap-4">
            <img src={iconstar} />
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
  const [isOpen, setIsOpen] = useState(false);
  function handleState() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div
      onClick={handleState}
      className="cursor-pointer flex flex-col gap-4 text-sm border-b mb-2"
    >
      <div className="flex justify-between">
        <p className="font-bold">{accordion.question}</p>
        {isOpen ? (
          <img className="cursor-pointer" src={iconminus} />
        ) : (
          <img className="cursor-pointer" src={iconplus} />
        )}
      </div>
      {isOpen ? (
        <p className="text-grayish-purple font-semibold mb-2">
          {accordion.answer}
        </p>
      ) : null}
    </div>
  );
}

export default App;
