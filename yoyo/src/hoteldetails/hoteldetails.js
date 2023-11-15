import axios from "axios";
import "./hoteldetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function HotelDetails() {
  const { id } = useParams();
  const [proDetail, UpProDetail] = useState([]);
  const [Proimage, UpImages] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      UpProDetail(res.data);
      UpImages(res.data.images);
      console.log(res.data);
    });
  });
  return (
    <div className="detail-container">
      <h2 className="title">{proDetail.title}</h2>
      <div className="line"></div>
      <div className="image-container">
        {Proimage.map((image, index) => (
          <img className="eachimage" src={image} alt="click" key={index}></img>
        ))}
      </div>
      <div className="extra-details">
        <h3> Description : {proDetail.description}</h3>
        <div className="brand">
        {/* <h3> Brand : {proDetail.brand} </h3> */}
          <h3> Price : ${proDetail.price}</h3>
          <h3> Rating : {proDetail.rating} ⭐</h3>
          
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
