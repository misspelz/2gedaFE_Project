import { FaStar } from "react-icons/fa";
import ProductImage from "assets/images/sample-product.png";
import "./product-dash.css";

const ProductDash = () => {
	return (
		<div className="product-card-container">
			<div className="product-image-wrapper">
				<img src={ProductImage} alt="" />
			</div>
			<div className="product-details">
				<h3>Hair dryer</h3>
				<div className="rating-wrapper">
					<FaStar className="rating-star" />
					<span>4.5</span>
					<div className="rating-circle"></div> <p>180+ Reviews</p>
				</div>
				<h5>₦2,350.00</h5>
			</div>
		</div>
	);
};

export default ProductDash;
