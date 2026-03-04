import Inbox from './pages/inbox';
import Booking from './pages/booking';
import Payment from './pages/payment';
import Expense from './pages/expense';
import CarUnit from './pages/car-unit';
import Reminder from './pages/reminder';
import Settings from './pages/settings';
import Calendar from './pages/calendar';
import Layout from './components/Layout';
import Dashboard from './pages/dashboard';
import ClientList from './pages/customer';
import Inspection from './pages/inspection';
import AddSchedule from './pages/add-schedule';
import PaymentForm from './pages/payment-form';
import EachCarUnit from './pages/each-car-unit';
import SelectVehicle from './pages/select-vehicle';
import BookingDetails from './pages/booking-details';
import AwaitingPayment from './pages/awaiting-payment';
import BookingCrentCar from './pages/booking-crent-car';
import DocumentCarDetail from './pages/document-car-detail'; 
import ConsumerCarDetail from './pages/consumer-car-detail';
import BookingConfirmation from './pages/booking-confirmation';
import ConsumerPaymentForm from './pages/consumer-payment-form';
import ConsumerRegistrationCar from './pages/consumer-side-screen';
import AdditionalPaymentForm from './pages/additional-payment-form';
import CustomerProfileDocument from './pages/customer-profile-document';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InspectionPdfScreen from './pages/inspaction-pdf-screen';
import CarBookingAlert from './pages/car-alert-no-payment';
import CarAlertResponse from './pages/car-alert-no-answering';
import CarRefactorDemage from './pages/car-refactor-demage';
import AdditionalCustomerCharges from './pages/consumer-car-detail/additional-customer-charges';
import BookingReturnCondition from './pages/booking-return-condition';
import ActionCustomerCar from './pages/action-customer-car';
import CallScreenProfile from './pages/call-screen-profile';


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
          <Route path="booking-crent-car" element={<BookingCrentCar />} />
          <Route path="select-vehicle" element={<SelectVehicle />} />
          <Route path="add-schedule" element={<AddSchedule />} />
          <Route path="payment-form" element={<PaymentForm />} />
          <Route path="customer-profile-document" element={<CustomerProfileDocument />} />
          <Route path="additional-payment-form" element={<AdditionalPaymentForm />} />
          <Route path="booking-confirmation" element={<BookingConfirmation />} />
          <Route path="awaiting-payment" element={<AwaitingPayment />} />
          <Route path="settings" element={<Settings />} />
          <Route path="consumer-registration-car" element={<ConsumerRegistrationCar />} />
          <Route path="consumer-car-detail" element={<ConsumerCarDetail />} />
          <Route path="document-car-detail" element={<DocumentCarDetail />} />
          <Route path="consumer-payment-form" element={<ConsumerPaymentForm />} />
          <Route path="inspection-pdf-screen" element={<InspectionPdfScreen />} />
          <Route path="car-alert-no-payment" element={<CarBookingAlert />} />
          <Route path="car-alert-no-answering" element={<CarAlertResponse />} />
          <Route path="car-refactor-demage" element={<CarRefactorDemage />} />
          <Route path="additional-customer-charges" element={<AdditionalCustomerCharges />} />
          <Route path="booking-return-condition" element={<BookingReturnCondition />} />
          <Route path="action-customer-car" element={<ActionCustomerCar />} />
          <Route path="call-screen-profile" element={<CallScreenProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
