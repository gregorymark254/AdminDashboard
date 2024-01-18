import Topnav from './components/Nav/TopBar';
import Sidebar from './components/Nav/SideBar';
import Users from './components/Users/User';
import EditUser from './components/Users/EditUser';
import AddUser from './components/Users/AddUser';
import Setting from './components/Settings/Setting';
import Balance from './components/Account/Balance';
import Payments from './components/Account/Payments';
import Reviews from './components/Uploads/Reviews';
import VideoUploads from './components/Uploads/VideoUplods';

import Home from './pages/Home';
import Login from './components/Login/Login';
import Missing from './pages/Missing';
import Unauthorised from './pages/Unauthorised';

import { useStateContext } from './components/Context/ContextProvider';
import useToken from './components/Context/UseToken';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const { activeMenu } = useStateContext();

  const { accessToken, setAccessToken } = useToken();
  if (!accessToken) {
    return <Login setAccessToken={setAccessToken} />;
  }

  return (
    <main>
      <div className='flex relative'>
        {activeMenu
          ? (
            <div className='w-72 fixed'>
              <Sidebar />
            </div>
            )
          : (
            <div>
              <Sidebar />
            </div>
            )}
        <div
          className={
              activeMenu
                ? 'min-h-screen md:ml-72 w-full  '
                : 'w-full min-h-screen flex-2'
            }
        >
          <div>
            <Topnav />
          </div>
          <div>
            <Routes>
              {/* dashboard  */}
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/users' element={<Users />} />
              <Route path='/user/add' element={<AddUser />} />
              <Route path='/user/edit/:id' element={<EditUser />} />
              <Route path='/account-balance' element={<Balance />} />
              <Route path='/payments' element={<Payments />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/video-uploads' element={<VideoUploads />} />
              <Route path='/settings' element={<Setting />} />
              <Route path='/unauthorised' element={<Unauthorised />} />
              <Route path='*' element={<Missing />} Missing />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
