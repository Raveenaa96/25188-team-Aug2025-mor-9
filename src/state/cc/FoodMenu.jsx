import { Component } from "react";

export default class FoodMenu extends Component {

  constructor() {
    super();
    this.state = {
      heading: "Simple Food Menu - State Management",
      restaurantName: "Spice Junction",
      dishes: [
        "Paneer Butter Masala",
        "Chicken Biryani",
        "Veg Fried Rice",
        "Mutton Curry",
        "Gobi Manchurian"
      ],
      restaurantDetails: {
        location: "Coimbatore",
        openingHours: "10:00 AM - 11:00 PM",
        cuisineType: "South Indian & Chinese",
        rating: "4.5 / 5"
      }
    };
  }

  render() {
    return (
      <div className="base-container">
        <div className="heading">
          <h1>{this.state.heading}</h1>
        </div>

        <div className="restaurant-name">
          <p>Restaurant Name: {this.state.restaurantName}</p>
        </div>

        <div className="food-menu">
          <h4>Available Dishes</h4>
          <ol type="1">
            {this.state.dishes && this.state.dishes.length !== 0 ? (
              this.state.dishes.map((item, index) => {
                return <li key={index}>{item}</li>;
              })
            ) : (
              <li>No dishes available</li>
            )}
          </ol>
        </div>

        <div className="restaurant-details">
          <h3>Restaurant Details</h3>
          <div className="details">
            <p>Location: {this.state.restaurantDetails.location}</p>
            <p>Opening Hours: {this.state.restaurantDetails.openingHours}</p>
            <p>Cuisine Type: {this.state.restaurantDetails.cuisineType}</p>
            <p>Rating: {this.state.restaurantDetails.rating}</p>
          </div>
        </div>
      </div>
    );
  }
}
