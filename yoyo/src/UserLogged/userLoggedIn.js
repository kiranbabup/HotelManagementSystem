import { useEffect, useState } from "react";
import "./userLoggedIn.css";
import axios from "axios";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
function UserLoggedIn() {
  const [Hotels, SetHotels] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      // console.log(res);
      SetHotels(res.data.products);
    });
  }, []);
  return (
        <div className="Container">
      <div className="hotels">
        {Hotels.map((hotel) => {
        return (
          
          <div className="each-hotel" key={hotel.id}>
            <img src={hotel.thumbnail} alt="img" />
            <div className="hotel-info">
              <h3>{hotel.title}</h3>
              <p>{hotel.description}</p>
              <p className="rating">
                {" "}
                <span>{hotel.rating} ☆ </span> ({hotel.stock} ratings)
              </p>
              {/* <p className="services">Sanitized <CheckCircleOutlineIcon color="danger" fontSize="medium" style={{ strokeWidth: '10px !important' }} className="checkcircleicon" /></p> */}
              {console.log(hotel)}
              <div className="price-booking">
                <h3>Price :${hotel.price}</h3>

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
