import { NavLink } from 'react-router-dom';

const Sidenav = (props) => {
  const linkItems = props.navbarLinks.map((link, index) => {
    return (
      <NavLink to={link.href} key={index} activeClassName="active" className="sidenav__link">
        <div className="sidenav__link__icon">
          {window.location.pathname === link.href ? (
            <i className={`${link.iconSolid} sidenav__link--icon`}></i>
          ) : (
            <i className={`${link.icon} sidenav__link--icon`}></i>
          )}
        </div>
        <div className="sidenav__link--text">{link.text}</div>
      </NavLink>
    );
  });

  return (
    <nav className="sidenav">
      <div className="sidenav__inner">
        <div className="sidenav__user-info">
          <div className="sidenav__user-img">
            <img className="sidenav__user-img--img" src={props.user.img} alt={props.user.username} />
          </div>
          <div className="sidenav--user-fullname">{props.user.fullname}</div>
          <div className="sidenav--user-username">@{props.user.username}</div>
        </div>
        <div className="sidenav__links">{linkItems}</div>
      </div>
    </nav>
  );
};

export default Sidenav;
