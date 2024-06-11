import Image from "next/image";
import ExploreAccordion from "./ExploreAccordion";
import Monitoring from "./Monitoring";
import Observability from "./Observability";
import Governance from "./Governance";

const Faq = () => {
  return (
    <div>
      <div className="widthclass p-10">
        <ul className="flex items-center justify-around mt-10">
          <li className="font-20 fontsemibold leading-6 opacity-60">
            Features
          </li>
          <li className="font-20 fontsemibold leading-6 opacity-60">Basic</li>
          <li className="font-20 fontsemibold leading-6 opacity-60">
            Specialist
          </li>
          <li className="font-20 fontsemibold leading-6 opacity-60">
            Enterprise
          </li>
        </ul>

        <ExploreAccordion />

        <div>
          <h1 className="font-36 font-inter font-bold leading-10 flex justify-center items-center mt-10">
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
