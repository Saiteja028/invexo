import { useContext, useState } from "react";
import { UserCircle, Menu } from "lucide-react";
import Sidebar from "../Sidebar/SideBar";
import './Header.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainDashboard from "../mainDashboard/MainDashboard";
import LayoutContext from "../../../contextapi/LayoutContext";
import LoginContext from "../../../contextapi/loginpage/LoginContext";
export default function Header({onLogout,title}) {
  const {isSidebarOpen,setSidebarOpen} = useContext(LayoutContext)
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const {email, setEmail} = useContext(LoginContext)
  const {password, setPassword} = useContext(LoginContext)
  const navigate = useNavigate()
  const handleLogout = async ()=>{
      const response = await axios.post('http://localhost:3000/api/v1/auth/logout', {}, {
        withCredentials: true
      })
      try {
        if(response.status===200){
            alert('user is about to logout')
            navigate('/')
            setEmail('')
            setPassword('')
        }
      } catch (error) {
        console.log(error);
      }
  }
 
  return (
    <>
      <header className={`header ${isSidebarOpen? 'sidebar-open' : ''}`}>
        <button className="menu-btn" onClick={() => setSidebarOpen(prev => !prev)}>
          <Menu className="menu-icon" />
        </button>

        <div className="header-title">{title}</div>

        <div className="profile-menu">
          <button className="profile-icon-btn" onClick={() => setDropdownOpen(prev => !prev)}>
            <UserCircle className="profile-icon" />
          </button>

          {isDropdownOpen && (
            <div className="dropdown">
              <ul className="dropdown-list">
                {/* <li className="dropdown-item">Edit Profile</li>
                <li className="dropdown-item">Change Image</li> */}
                <li className="dropdown-item" onClick={handleLogout} >Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

     
        
        {isSidebarOpen && (

                <Sidebar closeSidebar={() => setSidebarOpen(false)} />
        )}

    </>
  );
}
