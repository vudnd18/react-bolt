import React from 'react';
import Modal from 'react-modal';
import PropTypes, { func } from 'prop-types';

const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: 0,
    width: '400px',
  },
};

function Delete({ title, isOpen, onRequestClose, item, onDelete, deleteItem }) {
  return (
    <Modal isOpen={isOpen} style={customStyle} onRequestClose={onRequestClose}>
      <div className="modal-header tx-sm-bold">{title}</div>
      {item ? (
        <>
          <div className="modal-body text-center">
            <h3 className="mg-t-5">Are you sure you want to delete ?</h3>
            <p>{item.name}</p>
          </div>
          <div className="modal-footer justify-content-center">
            <button type="submit" className="btn btn-danger mg-r-10" onClick={onDelete}>
              Delete
            </button>
            <button type="button" className="btn btn-secondary" onClick={onRequestClose}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        ''
      )}
      {deleteItem === true ? (
        <>
          <div className="modal-body text-center">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div>
                <img src="./modal/success.png" alt="success" width="100px" />
                <h3 className="mg-t-5">Success</h3>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-primary" onClick={onRequestClose}>
              Done
            </button>
          </div>
        </>
      ) : (
        ''
      )}
    </Modal>
  );
}

Delete.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  item: PropTypes.object,
  onDelete: PropTypes.func,
  deleteItem: PropTypes.bool,
};

export default Delete;
