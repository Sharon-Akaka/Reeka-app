import "./App.css";
import Nav from "./components/Nav";
import FirstSection from "./components/FirstSection";
import CustomCard from "./components/CustomCard";
import FinalSection from "./components/FinalSection";
import Footer from "./components/Footer";
import connectCard from "./assets/connect_cards_full_screen.svg";
import paymentCard from "./assets/payment_full_screen.svg";
import bookingsCard from "./assets/check_in.svg";
import finalDashboard from "./assets/dashboard_final.svg";
import dashboardResponsive from "./assets/dashboard_responsive.png";
import paymentResponsive from "./assets/payment_responsive.png";
import formResponsive from "./assets/form_responsive.png";
import bookingsResponsive from "./assets/calendar_responsive.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <FirstSection />
      <div className="section-spacing">
        <CustomCard
          tag="Property Management"
          heading="Unified Property Management: Seamlessly Integrate with Airbnb, Booking.com, and More"
          body="Experience interoperable property management by integrating all your tools into one simple, efficient dashboard"
        />
        <img
          src={connectCard}
          alt="Connect card"
          className="image-style default-image"
        />
        <img
          src={formResponsive}
          alt="Payment card"
          className="image-style small-image"
        />
      </div>
      <div className="section-spacing">
        <img
          src={paymentCard}
          alt="Payment card"
          className="image-style default-image"
        />
        <img
          src={paymentResponsive}
          alt="Payment card"
          className="image-style small-image"
          id="paymentResponsive"
        />
        <CustomCard
          tag="Payment Options"
          heading="Flexible Payment Options: Local and International Currencies Welcome"
          body="Accommodate a global clientele with versatile payment solutions tailored for both Local and international transactions."
        />
      </div>
      <div className="section-spacing">
        <CustomCard
          tag="Bookings"
          heading="Seamless Direct Booking: Elevate Your Guest’s Experience"
          body="Manage private bookings professionally. From reservation to payment, ensure your guests enjoy a smooth and hassle-free experience"
        />
        <img
          src={bookingsCard}
          alt="Bookings card"
          className="image-style default-image"
        />
        <img
          src={bookingsResponsive}
          alt="Payment card"
          className="image-style small-image"
        />
      </div>
      <div className="last-section-spacing">
        <CustomCard
          tag="Data Analysis"
          heading="Data-Driven Insights: Your Business at a Glance"
          body="Make informed decisions with comprehensive data on occupancy rates, revenue,and property status, all available in an easy-to-read format."
        />
        <img
          src={finalDashboard}
          alt="Final dashboard"
          className="image-style default-image"
        />
        <img
          src={dashboardResponsive}
          alt="Payment card"
          className="image-style small-image"
        />
      </div>
      <FinalSection />
      <Footer />
    </div>
  );
}

export default App;
