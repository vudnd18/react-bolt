import React, { memo } from 'react';
import * as Icon from 'react-feather';

function Header() {
  const showSidebar = () => {
    document.body.classList = 'sidebar-show';
  };
  return (
    <header className="navbar navbar-header navbar-header-fixed">
      <button
        type="button"
        id="sidebarMenuOpen"
        className="burger-menu link-button"
        onClick={() => showSidebar()}
      >
        <Icon.Menu />
      </button>
    </header>
  );
}

export default memo(Header);
