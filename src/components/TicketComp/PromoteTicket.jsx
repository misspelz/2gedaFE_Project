import "./style.css";
import SmallTicketPromoteCard from "../Dashboard/smallTicketsPromoted";

import { url } from "../../utils";
import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";

const PromoteTicket = ({
  handleContainerClick,
  handleEventDetailContainerClick,
}) => {
  const [responseData, setResponseData] = useState([]);
  const [ setIsloading] = useState(null);

  const PromoteTicket = localStorage.getItem("PromotedTicket");
  const PromoteTicketArray = JSON.parse(PromoteTicket);

  

  useEffect(() => {
    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      try {
        const response = await fetch(`${url}/ticket/event-past/`, {
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
        localStorage.setItem("PromotedTicket", JSON.stringify(responseBody));
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
      <div className="view-all-tic-bx">
        <div className="product-ind">Promoted events</div>
        <div className="view-ll" onClick={handleContainerClick}>
          View all
        </div>
      </div>
      <div className="product-card-row">
        {responseData !== null && responseData.length > 0 ? (
          responseData.map((item, index) => (
            <SmallTicketPromoteCard
              key={index} // Add a unique key for each item in the map function
              description={item.desc}
              eventId={item.id}
              formatedDate={item.formated_date}
              location={item.location}
              eventImage={item.image}
              handleEventDetailContainerClick={handleEventDetailContainerClick}
            />
          ))
        ) : (
          <>
            {PromoteTicketArray && PromoteTicketArray.length > 0 ? (
              PromoteTicketArray.map((item, index) => (
                <SmallTicketPromoteCard
                  key={index} // Add a unique key for each item in the map function
                  description={item.desc}
                  eventId={item.id}
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

                {/* <Skeleton variant="rounded" width={210} height={60} /> */}
                <div style={{ height: 200, width: "45%" }}>
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
                    width={"70%"}
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

export default PromoteTicket;
