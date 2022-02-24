import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import WelcomeScreen from './screens/welcome/WelcomeScreen';
import PhoneNumber from './screens/phone_number/PhoneNumber';
import PhoneNumberConfirm from './screens/phone_number_confirm/PhoneNumberConfirm';
import Registration from './screens/register/Registration';
import Payment from './screens/payment/Payment';
import ProfileCreated from './screens/profile_created/ProfileCreated';
import MainMenu from './screens/main_menu/MainMenu';
import PresentsList from './screens/presents_list/PresentsList';
import EventNumber from './screens/gifts/gift_number/EventNumber';
import GiftSum from './screens/gifts/gift_sum/GiftSum';
import GiftPayments from './screens/gifts/gift_payments/GiftPayments';
import GiftGreeting from './screens/gifts/gift_greeting/GiftGreeting';
import GiftCreditCard from './screens/gifts/gift_credit_card/GiftCreditCard';
import GiftPaymentSuccess from './screens/gifts/gift_payment_success/GiftPaymentSuccess';
import EventSearch from './screens/events/event_search/EventSearch';
import CalendarScreen from './screens/events/calendar/CalendarScreen';
import EventFound from './screens/events/event_found/EventFound';
import EventNotFound from './screens/events/event_not_found/EventNotFound';
import EventCreate from './screens/events/event_create/EventCreate';
import EventCreatePayment from './screens/events/event_create_payment/EventCreatePayment';
import EventCreateCode from './screens/events/event_create_code/EventCreateCode';
import EventCreateCategory from './screens/events/event_create_category/EventCreateCategory';
import EventCreateForm from './screens/events/event_create_form/EventCreateForm';
import EventCreateAddImage from './screens/events/event_create_add_image/EventCreateAddImage';
import EventCreateGuests from './screens/events/event_create_guests/EventCreateGuests';
import EventCreateGuestsList from './screens/events/event_create_guests_list/EventCreateGuestsList';
import EventCreateGuestListFinal from './screens/events/event_create_guest_list_final/EventCreateGuestListFinal';
import GuestInvitationLetter from './screens/guests/guest_invitation_letter/GuestInvitationLetter';
import GuestInvitationLetterSent from './screens/guests/guest_invitation_letter_sent/GuestInvitationLetterSent';
import EventSummary from './screens/events/event_summary/EventSummary';
import GiftsReceived from './screens/gifts/gifts_received/GiftsReceived';
import ContactUs from './screens/contact_us/ContactUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
      <Route path="/" element={<WelcomeScreen/>} />
      
      <Route path="/loggedin" element={<PresentsList/>} />
        <Route path="/loggedin2" element={<MainMenu/>}/>
        <Route path="/phone" element={<PhoneNumber/>} />
        <Route path="/phoneconfirm" element={<PhoneNumberConfirm/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/profilecreated" element={<ProfileCreated/>} />
        <Route path="/giftsum" element={<GiftSum/>} />
        <Route path="/giftpayments" element={<GiftPayments/>} />
        <Route path="/giftgreetings" element={<GiftGreeting/>} />
        <Route path="/giftcreditcard" element={<GiftCreditCard/>} />
        <Route path="/giftpaymentsuccess" element={<GiftPaymentSuccess/>} />
        <Route path="/eventcreatecode" element={<EventCreateCode/>} />
        <Route path="/calendar" element={<CalendarScreen/>} />
        <Route path="/eventsearch" element={<EventSearch/>} />
        <Route path="/eventfound" element={<EventFound/>} />
        <Route path="/eventnotfound" element={<EventNotFound/>} />
        <Route path="/eventcreate" element={<EventCreate/>} />
        <Route path="/eventcreatepayment" element={<EventCreatePayment/>} />

       
        <Route path="/eventcreatecategory" element={<EventCreateCategory/>} />
        <Route path="/eventcreateform" element={<EventCreateForm/>} />
        <Route path="/eventcreateaddimage" element={<EventCreateAddImage/>} />
        <Route path="/eventcreateguests" element={<EventCreateGuests/>} />
        <Route path="/eventcreateguestslist" element={<EventCreateGuestsList/>} />
        <Route path="/eventcreateguestlistfinal" element={<EventCreateGuestListFinal/>} />
        <Route path="/guestinvitationletter" element={<GuestInvitationLetter/>} />
        <Route path="/guestinvitationlettersent" element={<GuestInvitationLetterSent/>} />
        <Route path="/eventsummary" element={<EventSummary/>} />
        <Route path="/giftsreceived" element={<GiftsReceived/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      
      </Routes>
      
      </BrowserRouter>
   
   
    </div>
  );
}

export default App;
