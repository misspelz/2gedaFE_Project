import React from 'react';
import Card from "../Card";
import phone from "../../assets/phone.png";
import {
  FaCartPlus,
  FaConnectdevelop,
  FaMusic,
  FaTicketAlt,
  FaVideo,
  FaVoteYea,
} from "react-icons/fa";


const Features = () => {
      const cardData = [
        {
          heading: "Connect",
          icon: <FaConnectdevelop />,
          paragraph: "Connect with other 2geda user in your neigborhood",
        },
        {
          heading: "Stereo",
          icon: <FaMusic />,
          paragraph:
            "2geda is your Go-To app when it comes to the best choice of music",
        },
        {
          heading: "Commerce",
          icon: <FaCartPlus />,
          paragraph: "Commerce is your marketplace. Buy and sell goods.",
        },
        {
          heading: "Tv",
          icon: <FaVideo />,
          paragraph:
            "Movie upload and viewing has been made so easy with 2geda polls",
        },
        {
          heading: "Tickets",
          icon: <FaTicketAlt />,
          paragraph: "Buy, sell and promote your event tickets on 2geda ",
        },
        {
          heading: "Voting",
          icon: <FaVoteYea />,
          paragraph:
            "Creating polls and vote casting has been made simplified on 2geda",
        },
      ];
  return (
    <div className="features">
      <div className="why">
        <p className="text-purple" style={{ fontSize: "18px" }}>
          Our Features
        </p>
        <h2 className="heading-secondary">Unleash the Power of 2geda</h2>
      </div>
      <div className="flex feature flex-col md:flex-row items-stretch md:gap-8 h-full ">
        <div className="container mx-auto pt-9 md:flex-row items-center justify-center">
          <div className="cardGrid">
            {cardData.map((card, index) => (
              <Card
                key={index}
                heading={card.heading}
                icon={card.icon}
                paragraph={card.paragraph}
                layout={card.layout}
              />
            ))}
          </div>
        </div>
        <img src={phone} className="imag" alt="Aid" />
      </div>
    </div>
  );
}

export default Features
