import axios from "axios";
import "./hoteldetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "@mui/material";
import ImageSlider from "./imageslider";
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import hotelData from "../assets/hotelData.json"
function HotelDetails() {
  const { id } = useParams();
  const [proDetail, UpProDetail] = useState(hotelData);
  const [Proimage, UpImages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [booked, setBooked] = useState(false);

  const [bookingInfo, setBookingInfo] = useState({
    hotelName: "",
    hotelAddress: "",
    rooms: 1,
    persons: 1,
    contactNumber: "",
    userEmail: "",
  });

  useEffect(() => {
  
      const hotel = hotelData.find((hotel) => hotel.id === parseInt(id));

      if (hotel) {
        UpProDetail(hotel);
        UpImages(hotel.images);
        setBookingInfo({
          hotelName: hotel.hotelName,
          hotelAddress: hotel.hotelAddress,
          rooms: 1,
          persons: 1,
          contactNumber: "",
          userEmail: "",
        });
      } else {
        console.error(`Hotel with id ${id} not found`);
      }
  }, [id]);

  const handleBookClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
    
    console.log("Booking submitted:", bookingInfo);


    setBookingInfo({
      hotelName: proDetail.hotelName,
      hotelAddress: proDetail.hotelAddress,
      rooms: 1,
      persons: 1,
      contactNumber: "",
      userEmail: "",
    });
    setShowForm(false);
    const timeoutId = setTimeout(() => {
      setBooked(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <>
      <div className="detail-container">
        {showForm ? (
          <div className="booking-form">
            <form onSubmit={handleBookSubmit}>
              <label>Hotel Name:</label>
              <input
                type="text"
                name="hotelName"
                value={bookingInfo.hotelName}
                onChange={handleInputChange}
                readOnly // to make it read-only
              />
              <label>Hotel Address:</label>

              <input
                type="text"
                name="hotelAddress"
                value={bookingInfo.hotelAddress}
                onChange={handleInputChange}
                readOnly // to make it read-only
              />
              <label>Number of Rooms:</label>

              <input
                type="number"
                name="rooms"
                value={bookingInfo.rooms}
                onChange={handleInputChange}
              />
              <label>Number of Persons:</label>

              <input
                type="number"
                name="persons"
                value={bookingInfo.persons}
                onChange={handleInputChange}
              />
              <label>Contact Number:</label>

              <input
                type="tel"
                name="contactNumber"
                value={bookingInfo.contactNumber}
                onChange={handleInputChange}
              />
              <label>User Email:</label>

              <input
                type="email"
                name="userEmail"
                value={bookingInfo.userEmail}
                onChange={handleInputChange}
              />
              <button type="submit">Book</button>
            </form>
          </div>
        ) : (
          <div>
            
            <div className="image-container">
              <ImageSlider />
      </div>
        <div className="extra-details">
              <h3> {proDetail.hotelAddress    }</h3>
              <div className="brand">
                <h3> Price : ${proDetail.price}</h3>
                <h3> Rating : {proDetail.rating} ⭐</h3>
              </div>
              <div className="facilities">
                <div>
                <CheckCircleOutlinedIcon/>
                Reception
                </div>
                <div>
                <WifiOutlinedIcon/>
                Free Wifi
                </div>
                <div>
                <CheckCircleOutlinedIcon/>
                Care Taker
                </div>
                <div>
                +10 More
                </div>
                </div>
              <button onClick={handleBookClick}>Book Now</button>
            </div>
            </div>
           
        )}
          </div>
      {booked ? (
        <Alert
          severity="success"
          sx={{ position: "absolute", bottom: 15, right: 10 }}
        >
          Your hotel is Booked -<strong>check it out!</strong>
        </Alert>
      ) : null}
    </>
  );
}

export default HotelDetails;
