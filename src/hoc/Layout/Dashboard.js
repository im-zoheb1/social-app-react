import React from 'react';

import navbarLinks from 'js/navbarData';
import Sidenav from 'components/Navbar/Sidenav';
// import image  for testing
import Image from 'assets/images/user.png';

const Dashboard = (props) => {
  const user = {
    img: Image,
    fullname: 'Zohaib Khan',
    username: 'im_zoheb',
  };

  return (
    <div className="viewport">
      <div className="dashboard">
        <Sidenav navbarLinks={navbarLinks} user={user} />
        {props.children}
      </div>
    </div>
  );
};

export default Dashboard;
