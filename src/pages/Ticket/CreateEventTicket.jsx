import React from "react";
import { useEffect, useState } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import CreateEventTictetFromOne from "../../components/TicketComp/CreateEventTictetFromOne";
import CreateEventTictetFormTwo from "../../components/TicketComp/CreateEventTictetFormTwo";
import CreateEventTictetFormThree from "../../components/TicketComp/CreateEventTictetFormThree";
import SuccessTicketCreate from "./SuccessTicketCreate";
import EventOneContextProvider from "../../Context/EventContext/EventContextProvider";
import EventTwoContextProvider from "../../Context/EventContext/EventContextProviderTwo";

const CreateEventTicket = ({ handleCreatTicketCloseContainerClick }) => {
  const [isCreatTicketThreeOpen, setIsCreatTicketThreeOpen] = useState(false);
  const [isCreatTicketTwoOpen, setIsCreatTicketTwoOpen] = useState(false);
  const [isCreatTicketSucessOpen, setIsCreatTicketSucessOpen] = useState(false);

  const [isPlatforn, setIsPlatforn] = useState(false);
  const [image, setImage] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [eventImage, setEventImage] = useState(null);

  // Tickets "ticket_category": "VIP",
  // "ticket_price":300,
  // "ticket_quantity":100,
  // "is_free": false
  // const [ticketPrice, setTicketPrice] = useState("");
  // const [ticketQuantity, setTicketQuantity] = useState("");
  const [ticketFree] = useState(false);
  // const [ticketCategory, setTicketCategory] = useState("");
  const [tickets, setTickets] = useState([
    { name: "", quantity: "", price: "FREE TICKET" },
  ]);
  const [eventCategory, setEventCategory] = useState("");

  const [isPublic, setIsPublic] = useState(false);
  const [addToSales, setAddSales] = useState(false);
  // const [requestData, setRequestData] = useState(null);
  const [url, setUrl] = useState(null);

  const handleCreatTicketSucessClick = (e) => {
    e.preventDefault();
    setIsCreatTicketSucessOpen(false);
  };

  const handleCloseAllClick = () => {
    setIsCreatTicketSucessOpen(false);
    setIsCreatTicketTwoOpen(false);
    setIsCreatTicketThreeOpen(false);
    handleCreatTicketCloseContainerClick();
  };

  const handleCreatTicketTwoContainerClick = () => {
    setIsCreatTicketTwoOpen(true);
  };

  const handleCreatTicketTwoCloseContainerClick = () => {
    setIsCreatTicketTwoOpen(false);
  };
  const handleCreatTicketThreeContainerClick = () => {
    setIsCreatTicketThreeOpen(true);
  };
  const handleCreatTicketThreeCloseContainerClick = () => {
    setIsCreatTicketThreeOpen(false);
  };

  const handleBuyTicket = async () => {
    const token = localStorage.getItem("authTOken");

    console.log(token);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", ` Token ${token}`);
    myHeaders.append(
      "Content-Type",
      "multipart/form-data;boundary=r568376974984"
    );

    const formdata = new FormData();

    console.log(tickets);
    formdata.append("title", eventTitle);
    formdata.append("desc", eventDescription);
    formdata.append("platform", platformName);
    formdata.append("events_category_name", eventCategory);
    formdata.append("location", venueAddress);
    console.log(eventImage);
    formdata.append("events_category_image", eventImage);
    formdata.append("image", eventImage);
    formdata.append("is_paid", ticketFree);

    tickets.length > 0 &&
      tickets.forEach((ticket, index) => {
        if (ticket.price === "FREE TICKET") {
          formdata.append(
            "ticket",
            JSON.stringify({
              ticket_category: `${ticket.name}`,
              ticket_price: 0,
              ticket_quantity: ticket.quantity,
              is_free: true,
            })
          );
        } else {
          formdata.append(
            "ticket",
            JSON.stringify({
              ticket_category: `${ticket.name}`,
              ticket_price: ticket.price,
              ticket_quantity: ticket.quantity,
              is_free: false,
            })
          );
        }
      });

    formdata.append("is_public", isPublic);
    formdata.append("add_to_sales", addToSales);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${url}/ticket/events/`, requestOptions);
      const responseBody = await response.json();
      if (response.ok) {
        console.log(responseBody);
        setUrl(responseBody.share.url);
        setIsCreatTicketSucessOpen(true);
      } else {
        console.error("Error sending data to the backend:");
      }
    } catch (error) {
      console.error("Error sending data to the backend:", error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {tickets.length > 1 && console.log(tickets[0].name, tickets[0].price)}

      {!isCreatTicketSucessOpen && (
        <TicketSearchComp
          label={"Create event"}
          handleCloseContainerClick={handleCreatTicketCloseContainerClick}
          add={"add"}
        />
      )}
      <form action="" method="post">
        {!isCreatTicketTwoOpen && !isCreatTicketThreeOpen && (
          <EventOneContextProvider>
            <CreateEventTictetFromOne
              handleCreatTicketTwoContainerClick={
                handleCreatTicketTwoContainerClick
              }
              setImage={setImage}
              setEventTitle={setEventTitle}
              setEventDescription={setEventDescription}
              setVenueName={setVenueName}
              setVenueAddress={setVenueAddress}
              setPlatformName={setPlatformName}
              setWebsiteUrl={setWebsiteUrl}
              image={image}
              eventTitle={eventTitle}
              eventDescription={eventDescription}
              venueName={venueName}
              venueAddress={venueAddress}
              platformName={platformName}
              websiteUrl={websiteUrl}
              setIsPlatforn={setIsPlatforn}
              isPlatforn={isPlatforn}
              setEventImage={setEventImage}
            />
          </EventOneContextProvider>
        )}
        {!isCreatTicketThreeOpen && isCreatTicketTwoOpen && (
          <EventTwoContextProvider>
            <CreateEventTictetFormTwo
              handleCreatTicketTwoCloseContainerClick={
                handleCreatTicketTwoCloseContainerClick
              }
              handleCreatTicketThreeContainerClick={
                handleCreatTicketThreeContainerClick
              }
              tickets={tickets}
              setTickets={setTickets}
              eventCategory={eventCategory}
              setEventCategory={setEventCategory}
            />
          </EventTwoContextProvider>
        )}
        {!isCreatTicketSucessOpen && isCreatTicketThreeOpen && (
          <CreateEventTictetFormThree
            handleCreatTicketThreeCloseContainerClick={
              handleCreatTicketThreeCloseContainerClick
            }
            isCreatTicketSucessOpen={isCreatTicketSucessOpen}
            handleCloseAllClick={handleCloseAllClick}
            setIsPublic={setIsPublic}
            setAddSales={setAddSales}
            handleBuyTicket={handleBuyTicket}
            handleCreatTicketSucessClick={handleCreatTicketSucessClick}
          />
        )}
        {isCreatTicketSucessOpen && url && (
          <SuccessTicketCreate
            handleCloseAllClick={handleCloseAllClick}
            eventUrl={url}
          />
        )}
      </form>
    </>
  );
};

export default CreateEventTicket;
