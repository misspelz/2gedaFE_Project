const data = [
  {
    img: "images/cat1.png",
    name: "Festival",
    total: "36",
  },
  {
    img: "images/cat2.png",
    name: "Concerts",
    total: "21",
  },
  {
    img: "images/cat3.png",
    name: "Fashion",
    total: "41 ",
  },
  {
    img: "images/cat4.png",
    name: "Others",
    total: "3",
  },
];
const EventCategory = () => {
  return (
    <div className="trending-product-container">
      <div className="product-ind">Event categories</div>
      <div className="product-card-row">
        {data.map((category, index) => (
          <div className="event-bx" key={index}>
            <div className="even-cat-box">
              <div className="image-category-bx">
                <img src={category.img} alt={category.name} />
              </div>
              <div className="event-cat-detail-bx">
                <div className="cat-name">{category.name}</div>
                <div className="tot-event">{category.total} events</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCategory;
