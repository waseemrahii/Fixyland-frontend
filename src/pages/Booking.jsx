import HeroSection from "../components/about/HeroSection";
import BookingForm from "../components/Booking/BookingForm";
import RoomsSection from "../components/Booking/RoomsSection";

export default function Booking() {
  return (
    <div className="min-h-screen">
      <HeroSection title="Booking " />
     <BookingForm />
     <RoomsSection />
     </div>
  );
}
