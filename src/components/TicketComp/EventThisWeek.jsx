import SmallTicketCardEvent from "../Dashboard/smallTicketEvent";
import { useEffect, useState } from "react";
import { url } from "../../utils";
import { Skeleton } from "@mui/material";

const EventThisWeek = ({
  handleWeekContainerClick,
  handleEventDetailContainerClick,
}) => {
  const [responseData, setResponseData] = useState([]);
  const [ setIsloading] = useState(null);
  const eventThisWeek = localStorage.getItem("eventThisWeek");
  const eventThisWeekArray = JSON.parse(eventThisWeek);

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
        console.log("response data", responseData);
        localStorage.setItem("eventThisWeek", JSON.stringify(responseBody));
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
        <div className="product-ind">Events this week</div>
        <div className="view-ll" onClick={handleWeekContainerClick}>
          View all
        </div>
      </div>
      <div className="product-card-row">
        {responseData !== null && responseData.length > 0 ? (
          responseData.map((item, index) => (
            <SmallTicketCardEvent
              key={index}
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
            {eventThisWeekArray && eventThisWeekArray.length > 0 ? (
              eventThisWeekArray.map((item, index) => (
                <SmallTicketCardEvent
                  key={index}
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

export default EventThisWeek;
