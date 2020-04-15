import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Icon from 'react-feather';
import TitleList from '../../components/Title/TitleList';
import Table from '../../components/Table';
import * as ProductsAction from '../../store/actions/products';

function Products() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const list = useSelector(state => state.products.list);
  const loading = useSelector(state => state.products.loadingList);
  const deleteItem = null;
  const [isGetList, setIsGetList] = useState(false);
  const handleSearch = e => {};

  const fetchData = (pageIndex, pageSize) => {
    setPage(pageIndex);
    setPageSize(pageSize);
  };

  const columns = useMemo(() => [
    {
      Header: 'Image',
      Cell: row => {
        return (
          <div>
            <img
              height="34"
              width="23"
              src={`${process.env.CDN}${row.row.original.image}`}
              atl=""
            />
          </div>
        );
      },
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Category',
      accessor: 'Categories[0].name',
    },
    {
      id: 'edit',
      accessor: 'id',
      Cell: value => {
        const id = value.cell.value;
        return (
          <>
            <Link className="btn btn-xs btn-warning mg-r-5" to={`/products/modify/${id}`}>
              <Icon.Edit />
              Edit
            </Link>
            <button
              type="button"
              className="btn btn-xs btn-danger mg-r-5"
              onClick={() => showModelDelete(id)}
            >
              <Icon.Trash2 />
              Delete
            </button>
          </>
        );
      },
    },
  ]);

  useEffect(() => {
    dispatch(ProductsAction.fetchProducts({ page, pageSize, search }));
  }, [deleteItem, page, pageSize, isGetList]);

  const showModelDelete = id => {};

  return (
    <>
      <TitleList name="Products" to="products" />
      <div className="row row-xs">
        <div className="card w-100">
          <div className="card-body">
            <div className="wd-200 float-right mg-b-20">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                onChange={handleSearch}
                value={search}
              />
            </div>
            {list && (
              <Table
                list={list}
                columns={columns}
                to="/products"
                fetchData={fetchData}
                loading={loading}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
