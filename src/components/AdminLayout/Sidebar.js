import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Icon from 'react-feather';
import axiosService from '../../lib/axiosService';
import { privateRoutes } from '../Routes/RouterConstant';

function Sidebar() {
  const [stateSidebar, setStateSidebar] = useState('');
  const history = useHistory();
  const logOut = () => {
    axiosService.setHeader('Authorization', '');
    localStorage.removeItem(process.env.TOKEN);
    history.push('/login');
  };
  const toggleSidebar = () => {
    if (stateSidebar === '') {
      setStateSidebar('minimize');
    } else {
      setStateSidebar('');
    }
  };

  const renderPrivateRoutes = () => {
    const path = window.location.pathname;
    let xhtml = null;
    xhtml = privateRoutes.map(router => {
      const active = activeSiderbar(path, router.path);
      return (
        <li className={`nav-item ${active}`} key={router.id}>
          <Link className="nav-link" to={router.path}>
            {router.name}
          </Link>
        </li>
      );
    });
    return xhtml;
  };
  const activeSiderbar = (path, pathSiderbar) => {
    const arrayPath = path.split('/');
    const arraySiderbar = pathSiderbar.split('/');
    if (arrayPath[1] === arraySiderbar[1]) {
      return 'active';
    }
    return '';
  };
  return (
    <aside className={`aside aside-fixed ${stateSidebar}`}>
      <div className="aside-header">
        <button type="button" className="link-button" onClick={() => toggleSidebar()}>
          <Icon.Menu size={16} />
        </button>
      </div>
      <div className="aside-body">
        <div className="aside-loggedin">
          <div className="d-flex align-items-center justify-content-start">
            <button type="button" className="link-button avatar" href="">
              <img src="/img1.png" className="rounded-circle" alt="" />
            </button>
            <div className="aside-alert-link">
              <button type="button" className="link-button" onClick={() => logOut()}>
                <Icon.LogOut size={16} />
              </button>
            </div>
          </div>
        </div>
        <ul className="nav nav-aside">
          <li className="nav-label">Dashboard</li>
          {renderPrivateRoutes()}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
