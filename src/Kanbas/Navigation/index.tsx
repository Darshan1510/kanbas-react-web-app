import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaShareSquare,
  FaRegQuestionCircle,
  FaMicrophone,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    {
      name: "Account",
      icon: <FaUserCircle className="fa-2x" />,
    },
    {
      name: "Dashboard",
      icon: <FaTachometerAlt className="text-danger fa-2x" />,
    },
    {
      name: "Courses",
      icon: <FaBook className="text-danger fa-2x" />,
    },
    {
      name: "Calendar",
      icon: <FaRegCalendarAlt className="text-danger fa-2x" />,
    },
    {
      name: "Inbox",
      icon: <FaInbox className="text-danger fa-2x" />,
    },
    {
      name: "History",
      icon: <FaHistory className="text-danger fa-2x" />,
    },
    {
      name: "Studio",
      icon: <FaMicrophone className="text-danger fa-2x" />,
    },
    {
      name: "Commons",
      icon: <FaShareSquare className="text-danger fa-2x" />,
    },
    {
      name: "Help",
      icon: <FaRegQuestionCircle className="text-danger fa-2x" />,
    },
  ];
  const { pathname } = useLocation();
  return (
    <div className="h-100">
      <ul className="wd-kanbas-navigation">
        <li>
          <a href="http://northeastern.edu">
            <img src="https://imgur.com/TFsDSJy.jpg" alt="Northeastern University Logo" />
          </a>
        </li>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.name) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.name}`}>
              {link.icon}
              <br />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;
