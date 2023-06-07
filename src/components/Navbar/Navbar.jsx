import './index.css';
import Tooltip from '../Tooltip/Tooltip';

const Navbar = ({ toolTip, removeHover, addHover }) => {
  return (
    <div>
      <header className="navbar">
        <ul className="header">
          <li onMouseEnter={addHover} onMouseLeave={removeHover} id="menu_one">
            <p className="menu" id="menu_one">
              {' '}
              Categories
            </p>
            {toolTip.menu_one && <Tooltip id={'menu_one'} name="categories" />}
          </li>
          <li onMouseEnter={addHover} onMouseLeave={removeHover} id="menu_two">
            <p className="menu" id="menu_two">
              {' '}
              Udemy Business
            </p>
            {toolTip.menu_two && (
              <Tooltip id={'menu_two'} name="Udemy Business" />
            )}
          </li>
          <li
            onMouseEnter={addHover}
            onMouseLeave={removeHover}
            id="menu_three"
          >
            <p className="menu" id="menu_three">
              {' '}
              Instructor
            </p>
            {toolTip.menu_three && (
              <Tooltip id={'menu_three'} name="Instructor" />
            )}
          </li>
          <li onMouseEnter={addHover} onMouseLeave={removeHover} id="menu_four">
            <p className="menu" id="menu_four">
              {' '}
              My Learning
            </p>
            {toolTip.menu_four && (
              <Tooltip id={'menu_four'} name="My Learning" />
            )}
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
