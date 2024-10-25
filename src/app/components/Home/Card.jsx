"use client";

import React, { useState, useEffect } from "react";
import CardData from "../../data/CardData"; // Ensure this path is correct
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Card = () => {
  // Set initial states for each card image index
  const [imageIndexes, setImageIndexes] = useState(Array(CardData.length).fill(0));

  useEffect(() => {
    const intervals = CardData.map((_, index) =>
      setInterval(() => {
        setImageIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          newIndexes[index] = (newIndexes[index] + 1) % imagesForCard(index).length;
          return newIndexes;
        });
      }, 5000) // Change every 5 seconds
    );

    // Clean up intervals on component unmount
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  // Function to return image array for each card
  const imagesForCard = (index) => {
    switch (index) {
      case 0:
        return ["/img1.svg", "/img2.svg", "/img3.svg"];
      case 1:
        return ["/img4.svg", "/img5.svg"];
      case 2:
        return ["/img6.svg", "/img7.svg"];
      default:
        return ["/img1.svg"];
    }
  };

  return (
    <div className="">
      <div>
        <div className="widthclass">
          {CardData.map((item, index) => (
            // <Fade key={`fade-${index}`} direction={index === 1 ? "right" : "left"}>
              <div
                className={`grid md:grid-cols-2 items-center ${index === 1 ? "md:flex-row-reverse" : ""}`}
                key={`card-${index}`}
              >
                <div className={`p-10 ${index === 1 ? "md:order-last" : ""}`} key={`text-${index}`}>
                  <h1 className="text-4xl font-32 font-medium leading-10">{item.name}</h1>
                  <p className="text-lg font-16 text-[#00000099] font-normal leading-6 mt-5">{item.para}</p>
                  <ul className="mt-5">
                    {[item.list, item.list1, item.list2, item.list3, item.list4].map((listItem, listIndex) => 
                      listItem && (
                        <li key={`list-${index}-${listIndex}`} className="mb-5 font-14 font-normal leading-4 text-[#000000] flex items-center gap-3">
                          <Image src={item.logo} alt="List item icon" width={20} height={20} />
                          {listItem}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className={`flex ${index % 2 === 0 ? "justify-center md:justify-end" : ""}`} key={`image-${index}`}>
                  <Fade key={imageIndexes} duration={2000}>

                  <Image
                    src={imagesForCard(index)[imageIndexes[index]]}
                    alt="Card image"
                    width={460}
                    height={428}
                    />
                    </Fade>
                </div>
              </div>
            // </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
