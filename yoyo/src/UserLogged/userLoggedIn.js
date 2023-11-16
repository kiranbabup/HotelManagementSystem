import { useEffect, useState } from "react";
import "./userLoggedIn.css";
import axios from "axios";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
// import { Checkbox } from "@mui/material";
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import hotelData from "../assets/hotelData.json"

function UserLoggedIn({searchTerm}) {
const [filteredHotels, setFilteredHotels] = useState([]);

 
  useEffect(() => {
    const filtered = hotelData.filter((hotel) =>
    hotel.hotelName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredHotels(filtered);

  }, [searchTerm]);

 



  return (
    <div className="Container">
      <div className="filters">

      </div>
      <div className="hotels">
        {filteredHotels.map((hotel) => {
        return (
          
          <div className="each-hotel" key={hotel.id}>
            <img src={hotel.imagee} alt="img" />
            <div className="hotel-info">
              <h3>{hotel.hotelName}</h3>
              <p>{hotel.hotelAddress}</p>
              <p className="rating">
                {" "}
                <span>{hotel.rating} ☆ </span> ({hotel.stock} ratings)
              </p>
              <p >Sanitized <CheckBoxOutlinedIcon sx={{background:"none",color:"black", marginTop:"5px"}}  /></p>
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
              {console.log(hotel)}
              <div className="price-booking">
              <div>
                <h3>₹ {hotel.price}</h3>
                <p>+180 taxes and fee per room per one night.</p>

              </div>

                <Link to={`/hotel/${hotel.id}`} className="muibutton-view"> <Button className="btn btn-view" variant="contained" color="primary" >view details</Button></Link>
                
                <Button className="btn btn-buy"variant="contained" color="error">Book</Button>
              </div>
            </div>
          
          </div>
        );
      })}

      </div>
    </div>
  );
}
export default UserLoggedIn;
