import Image from "next/image";
import ExploreAccordion from "./ExploreAccordion";
import Monitoring from "./Monitoring";
import Observability from "./Observability";
import Governance from "./Governance";

const Faq = () => {
  return (
    <div>
      <div className="widthclass px-5 sm:px-20">
        <ul className="grid grid-cols-4">
          <li className="font-20 font-semibold leading-6 opacity-60">
            Features
          </li>
          <li className="font-20 font-semibold leading-6 opacity-60 flex justify-center items-center">Basic</li>
          <li className="font-20 font-semibold leading-6 opacity-60 flex justify-center items-center">
            Specialist
          </li>
          <li className="font-20 font-semibold leading-6 opacity-60 flex justify-center items-center">
            Enterprise
          </li>
        </ul>

        <ExploreAccordion />

        <div>
          <h1 className="font-36 font-bold leading-10 flex justify-center items-center mt-10">
            Monitoring Hub
          </h1>
            <Monitoring />
        </div>

        <div>
          <h1 className="font-36 font-inter font-bold leading-10 flex justify-center items-center mt-10">
            Observability Hub
          </h1>
            <Observability />
        </div>

        <div>
          <h1 className="font-36 font-inter font-bold leading-10 flex justify-center items-center mt-10">
            Governance Hub
          </h1>
            <Governance />
        </div>
      </div>
    </div>
  );
};

export default Faq;
