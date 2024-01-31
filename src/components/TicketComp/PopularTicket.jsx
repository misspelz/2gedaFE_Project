import { useEffect, useState } from "react";
import SmallTicketCard from "../Dashboard/smallTicket";
import { url } from "../../utils";
// import preloader from "./Animation - 1703321875032 (1).json";
import { Skeleton } from "@mui/material";

const PopularTicket = ({ handleEventDetailContainerClick }) => {
  const [responseData, setResponseData] = useState([]);
  const [ setIsloading] = useState(null);

  const cachedPopularTicket = localStorage.getItem("PopularTicket");

  const PopularTicketArray = JSON.parse(cachedPopularTicket);

  useEffect(() => {
    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      try {
        const response = await fetch(`${url}/ticket/event-popular/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          console.log("Response not ok");
        }

        const responseBody = await response.json();
        console.log(responseBody);
        setResponseData(responseBody);
        localStorage.setItem("PopularTicket", JSON.stringify(responseBody));
        console.log("response data", responseData);
        // Move setIsLoading inside the try block if you want it to be set only on success
        setIsloading(true);

        // Check if responseData is not null before mapping
      } catch (error) {
        console.log(error);
      } finally {
        console.log("We goood");
      }
    };

    // Call the async function
    makeRequest();
  }, [responseData, setIsloading]);

  return (
    <div className="trending-product-container">
      <div className="product-ind">Popular events</div>
      <div className="product-card-row">
        {responseData !== null && responseData.length > 0 ? (
          responseData.map((item, index) => (
            <SmallTicketCard
              key={index} // Add a unique key for each item in the map function
              eventId={item.id}
              description={item.desc}
              formatedDate={item.formated_date}
              location={item.location}
              eventImage={item.image}
              handleEventDetailContainerClick={handleEventDetailContainerClick}
            />
          ))
        ) : (
          <>
            {PopularTicketArray && PopularTicketArray.length > 0 ? (
              PopularTicketArray.map((item, index) => (
                <SmallTicketCard
                  key={index} // Add a unique key for each item in the map function
                  eventId={item.id}
                  description={item.desc}
                  formatedDate={item.formated_date}
                  location={item.location}
                  eventImage={item.image}
                  handleEventDetailContainerClick={
                    handleEventDetailContainerClick
                  }
                />
              ))
            ) : (
              <>
                <div style={{ height: 200, width: "45%", marginRight: 20 }}>
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={120}
                    style={{ borderRadius: 5 }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem" }}
                    style={{ borderRadius: 5 }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem" }}
                    width={"50%"}
                    style={{ borderRadius: 5 }}
                    animation="wave"
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PopularTicket;
