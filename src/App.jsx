import Inbox from './pages/inbox';
import Booking from './pages/booking';
import Payment from './pages/payment';
import Expense from './pages/expense';
import CarUnit from './pages/car-unit';
import Reminder from './pages/reminder';
import Calendar from './pages/calendar';
import Layout from './components/Layout';
import Dashboard from './pages/dashboard';
import ClientList from './pages/customer';
import EachCarUnit from './pages/each-car-unit';
import BookingDetails from './pages/booking-details';
import Inspection from './pages/inspection';
import CustomerProfileDocument from './pages/customer-profile-document';
import BookingCrentCar from './pages/booking-crent-car';
import SelectVehicle from './pages/select-vehicle';
import AddSchedule from './pages/add-schedule';
import PaymentForm from './pages/payment-form';
import AdditionalPaymentForm from './pages/additional-payment-form';
import BookingConfirmation from './pages/booking-confirmation';
import AwaitingPayment from './pages/awaiting-payment';
import Settings from './pages/settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="booking" element={<Booking />} />
          <Route path="payment" element={<Payment />} />
          <Route path="expense" element={<Expense />} />
          <Route path="car-unit" element={<CarUnit />} />
          <Route path="reminder" element={<Reminder />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="customer" element={<ClientList />} />
          <Route path="car-unit/:id" element={<EachCarUnit />} />
          <Route path="booking/:id" element={<BookingDetails />} />
          <Route path="booking/:id/inspection" element={<Inspection />} />
          <Route path="customer-profile-document" element={<CustomerProfileDocument />} />
          <Route path="booking-crent-car" element={<BookingCrentCar />} />
          <Route path="select-vehicle" element={<SelectVehicle />} />
          <Route path="add-schedule" element={<AddSchedule />} />
          <Route path="payment-form" element={<PaymentForm />} />
          <Route path="additional-payment-form" element={<AdditionalPaymentForm />} />
          <Route path="booking-confirmation" element={<BookingConfirmation />} />
          <Route path="awaiting-payment" element={<AwaitingPayment />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
