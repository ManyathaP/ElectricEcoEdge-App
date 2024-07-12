import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Authentication from './components/Authentication';
import Admin from './components/Admin';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import DisposeMenu from './components/DisposeMenu';
import TrackOrder from './components/TrackOrder';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import EditProfile from './components/EditProfile';
import RewardsPage from './components/RewardsPage';
import AdminDashboard from './components/AdminDashboard';
import MainComponent from './components/MainComponent';
import ItemForm from './components/ItemForm';
import ComputerList from './components/ComputerList'; // Import the ComputerList component
import WatchesList from './components/WatchesLIst';
import LaptopList from './components/LaptopList';
import MobileList from './components/MobileLIst';
import TabletList from './components/TabletList';
import OtherItemList from './components/OtherItemList';
import Rewards from './components/Rewards';


function App() {
  const [user, setUser] = useState({
    name: 'Manyatha',
    profilePicture: 'https://via.placeholder.com/150'
  });

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <div className="bg-gray-900 text-white">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user-login" element={<Authentication onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/admin-login" element={<Admin />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route
              path="/rewards-page"
              element={
                <ProtectedRoute user={user}>
                  <RewardsPage />
                </ProtectedRoute>
              }
            />
            <Route path="/customers" element={<Authentication onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dispose"
              element={
                <ProtectedRoute user={user}>
                  <DisposeMenu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dispose/:itemType"
              element={
                <ProtectedRoute user={user}>
                  <ItemForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/track-order"
              element={
                <ProtectedRoute user={user}>
                  <TrackOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute user={user}>
                  <Profile profilePicture={user.profilePicture} name={user.name} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rewards"
              element={
                <ProtectedRoute user={user}>
                  <div>Rewards Page</div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/customer-support"
              element={
                <ProtectedRoute user={user}>
                  <div>Customer Support Page</div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/about-us"
              element={
                <ProtectedRoute user={user}>
                  <div>About Us/Support Us Page</div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute user={user} requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/main-component" element={<MainComponent />} />
            <Route
              path="/computers"
              element={
                <ProtectedRoute user={user} requiredRole="admin">
                  <ComputerList /> {/* Ensure this route points to the ComputerList component */}
                </ProtectedRoute>
              }
            />

            <Route
              path="/watches"
              element={
                <ProtectedRoute user={user} requiredRole="admin">
                  <WatchesList/> {/* Ensure this route points to the ComputerList component */}
                </ProtectedRoute>
              }
            />

          <Route
              path="/laptops"
              element={
                <ProtectedRoute user={user} requiredRole="admin">
                  <LaptopList/> {/* Ensure this route points to the ComputerList component */}
                </ProtectedRoute>
              }
            />

         <Route
              path="/mobiles"
              element={
                <ProtectedRoute user={user} requiredRole="admin">
                  <MobileList/> {/* Ensure this route points to the ComputerList component */}
                </ProtectedRoute>
              }
            />

         <Route
              path="/tablets"
              element={
                <ProtectedRoute user={user} requiredRole="admin">
                  <TabletList/> {/* Ensure this route points to the ComputerList component */}
                </ProtectedRoute>
              }
            />

         <Route
              path="/other_items"
              element={
                <ProtectedRoute user={user} requiredRole="admin">
                  <OtherItemList/> {/* Ensure this route points to the ComputerList component */}
                </ProtectedRoute>
              }
            />

            <Route
              path="/rewards"
              element={
                <ProtectedRoute user={user} requiredRole="admin">
                  <Rewards/> {/* Ensure this route points to the ComputerList component */}
                </ProtectedRoute>
              }
            />

<Route
              path="/rewards-page"
              element={
                <ProtectedRoute user={user} requiredRole="admin">
                  <RewardsPage/> {/* Ensure this route points to the ComputerList component */}
                </ProtectedRoute>
              }
            />




          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
