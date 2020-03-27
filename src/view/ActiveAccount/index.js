import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { activeAccount } from '../../apis/auth';

function ActiveAccount() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const checkActive = async () => {
      try {
        const result = await activeAccount(id);
        const { status } = result;
        if (status === 200) {
          setIsSuccess(true);
        }
      } catch (err) {
        const { response } = err;
        setError(response.data.message);
      }
      setIsLoading(false);
    };
    checkActive();
  }, [id]);

  return (
    <div className="content content-fixed">
      <div className="container d-flex justify-content-center">
        <div className="mx-wd-300 d-flex flex-column align-items-center justify-content-center">
          <div className="wd-80p wd-sm-300 mg-b-15">
            <img src="/signup-success.png" className="img-fluid" alt="" />
          </div>
          <h4 className="tx-20 tx-sm-24">Active Account</h4>
          {isLoading === true ? (
            <div>
              <div className="spinner-grow spinner-grow-sm" role="status" />
              <div className="spinner-grow spinner-grow-sm" role="status" />
              <div className="spinner-grow spinner-grow-sm" role="status" />
            </div>
          ) : (
            ''
          )}
          {isSuccess === true ? (
            <Link to="/login" className="btn btn-brand-02 mg-sm-l-10 mg-t-10">
              Go to Login
            </Link>
          ) : (
            ''
          )}
          {error && <p className="text-danger">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default ActiveAccount;
