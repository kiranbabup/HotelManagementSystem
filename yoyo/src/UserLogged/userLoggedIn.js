import { useEffect, useState } from "react";
import "./userLoggedIn.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import hotelData from "../assets/hotelData.json"

function UserLoggedIn({ searchTerm }) {
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    const filtered = hotelData.filter((hotel) =>
      hotel.hotelName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHotels(filtered);
  }, [searchTerm]);

  return (
    <div className="Container">
      {filteredHotels.map((hotel) => {
        return (
          <div className="each-hotel" key={hotel.id}>
            {/* {console.log(hotel)} */}
            <img className="eachHotelImage" src={hotel.imagee} alt="img" />
            <div className="hotel-info">
              <h3>{hotel.hotelName}</h3>
              <p>{hotel.hotelAddress}</p>
              <p className="rating">
                <span>{hotel.rating} ☆ </span> ({hotel.stock} ratings)
              </p>
              <p className="sanitized">Sanitized <CheckBoxOutlinedIcon sx={{ background: "none", color: "black", marginTop: "5px" }} /></p>
              <div className="facilities">
                <div className="facility"><CheckCircleOutlinedIcon /> Reception</div>
                <div className="facility"><WifiOutlinedIcon /> Free Wifi</div>
                <div className="facility"><CheckCircleOutlinedIcon /> Care Taker</div>
                <div className="facility">+10 More</div>
              </div>
              <div className="price-booking">
                <div>
                  <h3>Price: ${hotel.price}</h3>
                  <p>+18% taxes and fee per room per one night.</p>
                </div>
                <Link to={`/hotel/${hotel.id}`} className="muibutton-link">
                  <Button variant="contained" color="primary" >
                    view details</Button>
                </Link>
                {/* <Button className="btn btn-buy" variant="contained" color="error" onClick={()=>onBookClick()}>Book</Button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default UserLoggedIn;