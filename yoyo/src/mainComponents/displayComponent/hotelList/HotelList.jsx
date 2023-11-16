import { useEffect, useState } from 'react';
import './HotelList.css';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HotelList=()=> {
    const [Hotels, setHotels] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products?skip=5&limit=6").then((res) => {
      setHotels(res.data.products);
    });
  }, []);
  return (
    <div className="HotelList">
        {
        Hotels.map((hotel) => {
        return (
            <div className='eachHotelCard'>
                <div className='hotelCardLeft'>
                    <img className='hotelCardImg' src={hotel.thumbnail} alt="img" />
                </div>
                <div className='hotelCardRight'>
                    <div className='topRight'>
                        <h3>{hotel.title}</h3>
                        <p>{hotel.description}</p>
                        <p className="rating">
                            <span>{hotel.rating} ☆ </span> ({hotel.stock} ratings)
                        </p>
                    </div>
                    <div className='bottomRight'>
                        <h3>Price :${hotel.price}</h3>
                        <Link to={`/hotel/${hotel.id}`} >
                            <Button variant="contained" color="primary" >view details</Button>
                        </Link>
                        <Button variant="contained" color="error">Book</Button>
                    </div>
                </div>
            </div>
        )})}
    </div>
  );
}

export default HotelList;
