import React, { useEffect, useMemo, memo, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Icon from 'react-feather';
import TitleList from '../../components/Title/TitleList';
import * as CategoriesAction from '../../store/actions/categories';
import Table from '../../components/Table';
import Delete from '../../components/Modal/Delete';

function Category() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [isGetList, setIsGetList] = useState(false);
  const typingRef = useRef(null);

  const list = useSelector(state => state.categories.list);
  const loading = useSelector(state => state.categories.loadingList);
  const detail = useSelector(state => state.categories.detail);
  const deleteItem = useSelector(state => state.categories.delete);

  function handleSearch(e) {
    setSearch(e.target.value);
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    typingRef.current = setTimeout(() => {
      setIsGetList(!isGetList);
    }, 500);
  }

  const columns = useMemo(() => [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Slug',
      accessor: 'slug',
    },
    {
      Header: 'Parent',
      accessor: 'parent.name',
    },
    {
      id: 'edit',
      accessor: 'id',
      Cell: value => {
        const id = value.cell.value;
        return (
          <>
            {/* <Link className="btn btn-xs btn-info mg-r-5" to={`/categories/${id}`}>
              <Icon.Eye />
              View
            </Link> */}
            <Link className="btn btn-xs btn-warning mg-r-5" to={`/categories/modify/${id}`}>
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
  const [isOpenModel, setIsOpenModel] = useState(false);

  const showModelDelete = id => {
    dispatch(CategoriesAction.getCategory(id));
    setIsOpenModel(true);
  };

  const closeModal = () => {
    setIsOpenModel(false);
  };

  const onDelete = () => {
    dispatch(CategoriesAction.deleteCategory(detail.id));
  };

  useEffect(() => {
    dispatch(CategoriesAction.fetchCategories({ page, pageSize, search }));
  }, [deleteItem, page, pageSize, isGetList]);

  const fetchData = (pageIndex, pageSize) => {
    setPage(pageIndex);
    setPageSize(pageSize);
  };

  return (
    <>
      <TitleList name="Categories" to="categories" />
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
                to="/categories"
                fetchData={fetchData}
                loading={loading}
              />
            )}
          </div>
        </div>
      </div>
      <Delete
        title="DELETE CATEGORY"
        isOpen={isOpenModel}
        item={detail}
        onRequestClose={closeModal}
        onDelete={onDelete}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default memo(Category);
