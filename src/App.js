import Topnav from './components/Nav/TopBar'
import Sidebar from './components/Nav/SideBar'
import Users from './components/Users/User'
import SmsConfig from './components/Users/smsConfig'
import SmsTemplate from './components/Users/smsTemplate'
import Edit from './components/Users/EditUser'
import AddUser from './components/Users/AddUser'
import Employees from './components/Employees/Employee'
import AddEmployees from './components/Employees/AddEmployee'
import Purchase from './components/Purchase/Purchase'
import AddPurchase from './components/Purchase/AddPurchase'
import ReturnInvoice from './components/Purchase/ReturnInvoice'
import CustomerList from './components/Customers/CustomerList'
import GuestList from './components/Customers/GuestList'
import Setting from './components/Settings/Setting'
import BookingList from './components/RoomReserve/BookingList'
import CheckIn from './components/RoomReserve/CheckIn'
import CheckOut from './components/RoomReserve/CheckOut'
import BookingReport from './components/Reports/BookingReport'
import PurchaseReport from './components/Reports/PurchaseReport'
import StockReport from './components/Reports/StockReport'

import Home from './pages/Home'
import Login from './components/Login/Login'
import Missing from './pages/Missing'
import Unauthorised from './pages/Unauthorised'

import { useStateContext } from "./components/Context/ContextProvider";
import { Routes, Route } from "react-router-dom"

const App = () => {

  const { activeMenu } = useStateContext();

  return (
    <main>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-72 fixed">
              <Sidebar />
            </div>
          ) : (
            <div>
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "min-h-screen md:ml-72 w-full  "
                : "w-full min-h-screen flex-2"
            }
          >
            <div>
              <Topnav />
            </div>
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/sms-config" element={<SmsConfig />}/>
                <Route path="/sms-template" element={<SmsTemplate />}/>
                <Route path="/add" element={<AddUser />}/>
                <Route path="/edit/:id" element={<Edit />}/>
                <Route path="/employees" element={<Employees />}/>
                <Route path="/add-employees" element={<AddEmployees />}/>
                <Route path="/purchase"element={<Purchase />}/>
                <Route path="/add-purchase"element={<AddPurchase />}/>
                <Route path="/return-invoice"element={<ReturnInvoice />}/>
                <Route path="/customers" element={<CustomerList />}/>
                <Route path="/guest-list" element={<GuestList />}/>
                <Route path="/booking-report" element={<BookingReport />}/>
                <Route path="/purchase-report" element={<PurchaseReport />}/>
                <Route path="/stock-report" element={<StockReport />}/>
                <Route path="/booking-list" element={<BookingList />}/>        
                <Route path="/checkin" element={<CheckIn />}/>        
                <Route path="/checkout" element={<CheckOut />}/>        
                <Route path="/settings" element={<Setting />}/>        
                <Route path="/unauthorised"   element={<Unauthorised />}/>
                <Route path="*" element={<Missing />}Missing/>
              </Routes>
            </div>
          </div>
        </div>
      </main>
  )
}

export default App