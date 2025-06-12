import { Link } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar({ closeSidebar }) {
  
  return (
    <aside className="sidebar">
      <h3 style={{backgroundColor:'#9ef492'}}>INVEXO</h3>
      <nav className="sidebar-nav">
        {/* <Link to="/dashboard" className="sidebar-link" onClick={closeSidebar}>Home</Link> */}
        <Link to="/stocks" className="sidebar-link" onClick={closeSidebar}>Stocks</Link>
        <Link to="/markets" className="sidebar-link" onClick={closeSidebar}>Markets</Link>
        {/* <Link to="/dashboard" className="sidebar-link" onClick={closeSidebar}>Dashboard</Link> */}
      </nav>
    </aside>
  );
}
