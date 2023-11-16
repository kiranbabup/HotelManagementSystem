import HeaderComponent from "../commonComponents/headerComponent/HeaderComponent";
import "./myBookings.css";
import bed from "../assets/images/bed9.jpeg";
const MyBookingsPage = () => {
    return(
        <div className="MyBookingsPage">
            <HeaderComponent/>
            <div className="dummyDiv"></div>
            <div className="bookingsDisplayArea">
                <div className="bookingsCard">
                    <img className="bookingImage" src={bed} alt="bedImage" />
                    <div className="bookingInfo">
                        <div className="hotelName">Hotel Name</div>
                        <div className="bookingDetails">Booking details</div>
                        <div className="booked">Booked</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyBookingsPage;