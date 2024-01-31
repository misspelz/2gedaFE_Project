import { useEffect, useState } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import SuccessTicketPurc from "./SuccessTicketPurc";
import { url } from "../../utils";

const ChooseTicket = ({
  handleCloseChooseClick,
  handleCloseAllClick,
  eventDetail,
}) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [ setResponseData] = useState(null);
  const [ setIsloading] = useState(null);

  const handleQuantityChange = (index, quantity) => {
    console.log(quantity);
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: quantity,
    }));
  };

  const handleSuccess = () => {
    setIsSuccessOpen(true);
  };

  const calculateTotal = () => {
    let total = 0;
    console.log(selectedQuantities);
    eventDetail.each_ticket.forEach((item, index) => {
      const quantity = selectedQuantities[index] || 0;
      console.log(quantity);
      total += item.price * quantity;
    });
    setTotalPrice(total);
  };

  const makePurchaseForEach = async () => {
    try {
      const ticketPurchase = eventDetail.each_ticket.forEach((item, index) => {
        makeRequest(item.id, index, item.price);
      });
      await ticketPurchase;
    } catch (error) {
    } finally {
      handleSuccess()
    }
  };

  const makeRequest = async (id, index, amount) => {
    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);

    const quantity = selectedQuantities[index] || 0;

    console.log(id, amount, quantity);
    const formData = {
      ticket_id: id,
      amount: amount,
      ticket_quantity: quantity,
      total_amount: quantity * amount,
    };
    try {
      const response = await fetch(`${url}/ticket/buy-ticket`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status === 400){
          try {
            const responseBody = await response.json();
            alert(responseBody.message[0]);
            window.location.href = responseBody.url[0]

          } catch (error) {
            
          }

        }
      } else {
        const responseBody = await response.json();
        alert("hello");
        setResponseData(responseBody);
        setIsloading(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally block executed");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const calculateTotal = () => {
      let total = 0;
      console.log(selectedQuantities);
      eventDetail.each_ticket.forEach((item, index) => {
        const quantity = selectedQuantities[index] || 0;
        console.log(quantity);
        total += item.price * quantity;
      });
      return total;
    };
    const value = calculateTotal();
    setTotalPrice(value);
  }, [selectedQuantities, eventDetail.each_ticket]); 
  return (
    <>
      {isSuccessOpen && (
      
        <SuccessTicketPurc handleCloseAllClick={handleCloseAllClick} />
      )}
      {!isSuccessOpen && (
        <div className="detail-bx-container bagw">
          <TicketSearchComp label={"Choose your ticket"} add={"add"} />
          {/* <TicketSearchComp
            label={"Choose your ticket"}
            handleCloseContainerClick={handleCloseChooseClick}
            add={"add"}
          /> */}
          <form>
            <div className="coose-tic-cont">
              <div className="tic-choser-box">
                <div className="row-choose">
                  <div className="event-name-choose">
                    {eventDetail && eventDetail.desc
                      ? eventDetail.desc
                      : "Unknown Event"}
                  </div>
                </div>
                {eventDetail &&
                  eventDetail.each_ticket.length > 0 &&
                  eventDetail.each_ticket.map((item, index) => (
                    <div key={index} className="row-choose">
                      <div className="reg-vp-con">
                        <div className="reg-vp-row">
                          <div className="reg-v-txt">
                            {item.category ? item.category : ""}
                          </div>
                          <div className="reg-vp-pric">
                            {item.price ? item.price : ""}
                          </div>
                        </div>
                        <div className="select-count">
                          <select
                            onChange={(e) => {
                              handleQuantityChange(index, e.target.value);
                              calculateTotal();
                            }}
                            name=""
                            id=""
                            className="select-inpcount"
                          >
                            {[0, 1, 2, 3, 4, 5].map((value) => (
                              <option key={value} value={value}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="tot-total-amt">
                <div className="tot-tst">Total</div>
                <div className="tot-amtt"># {totalPrice}</div>
              </div>

              <div className="choose-act-btn">
                <div className="act-btn-cont">
                  <button
                    type="button"
                    onClick={makePurchaseForEach}
                    className={`action-btn wid`}
                  >
                    Continue to payment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChooseTicket;
