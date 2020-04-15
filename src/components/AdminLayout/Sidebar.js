import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Icon from 'react-feather';
import axiosService from '../../lib/axiosService';
import { privateRoutes } from '../Routes/RouterConstant';

function Sidebar() {
  const [stateSidebar, setStateSidebar] = useState('');
  const history = useHistory();
  const logOut = () => {
    axiosService.removeHeader('Authorization');
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
        router.child ?? (
          <li className="nav-item" key={router.id}>
            <Link className={`nav-link ${active}`} to={router.path}>
              {router.name}
            </Link>
          </li>
        )
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
  const hideSidebar = () => {
    document.body.classList = '';
  };
  return (
    <div className={`sidebar sidebar-fixed sidebar-components ${stateSidebar}`}>
      <div className="sidebar-header ">
        <div className="d-flex justify-content-between w-100">
          <h5>Menu</h5>
          <button type="button" className="link-button" onClick={() => hideSidebar()}>
            <Icon.X size={16} />
          </button>
        </div>
      </div>
      <div className="sidebar-body">
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
        <ul className="sidebar-nav">{renderPrivateRoutes()}</ul>
      </div>
    </div>
  );
}

export default Sidebar;
