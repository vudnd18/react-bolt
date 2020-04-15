import React from 'react';
import PropsType from 'prop-types';
import Modal from 'react-modal';
import Sidebar from './Sidebar';
import Header from './Header';

function AdminLayout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content content-components">
        <div className="">{children}</div>
      </div>
      <div className="backdrop" />
    </>
  );
}

Modal.setAppElement('#app');

AdminLayout.propTypes = {
  children: PropsType.array,
};

export default AdminLayout;
