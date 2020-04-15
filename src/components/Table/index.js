import React, { useEffect, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTable, usePagination } from 'react-table';
import Propstype from 'prop-types';
import * as Icon from 'react-feather';
import TableLoader from './TableLoader';

function Table({ columns, list, to, fetchData, loading }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    pageOptions,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: list.entities,
      initialState: {
        pageIndex: list.pageIndex - 1,
        pageSize: list.pageSize,
      },
      manualPagination: true,
      pageCount: list.pageCount,
    },
    usePagination,
  );
  const [width, setWidth] = useState();
  useEffect(() => {
    const table = document.getElementById('table');
    setWidth(table.clientWidth);
    fetchData(pageIndex + 1, pageSize);
  }, [pageIndex, pageSize]);
  return loading ? (
    <TableLoader width={width} />
  ) : (
    <div className="table-responsive tx-14" id="table">
      <table className="table table-hover table-striped mg-b-0 tx-14" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex mg-t-10 align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </div>
          <div>
            <input
              className="form-control form-small wd-50 mg-l-10"
              type="number"
              value={pageIndex + 1 || 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
          </div>{' '}
          <select
            className="form-control form-small wd-80 mg-l-10"
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        <ul className="pagination pagination-space mg-b-0">
          <li className={`page-item ${!canPreviousPage ? 'disabled' : ''}`}>
            <button type="button" className="page-link page-link-icon" onClick={() => gotoPage(0)}>
              <Icon.ChevronsLeft size={18} />
            </button>
          </li>
          <li className={`page-item ${!canPreviousPage ? 'disabled' : ''}`}>
            <button
              type="button"
              className="page-link page-link-icon"
              onClick={() => previousPage()}
            >
              <Icon.ChevronLeft size={18} />
            </button>
          </li>
          <li className={`page-item ${!canNextPage ? 'disabled' : ''}`}>
            <button type="button" className="page-link page-link-icon" onClick={() => nextPage()}>
              <Icon.ChevronRight size={18} />
            </button>
          </li>
          <li className={`page-item ${!canNextPage ? 'disabled' : ''}`}>
            <button
              type="button"
              className="page-link page-link-icon"
              onClick={() => gotoPage(pageCount - 1)}
            >
              <Icon.ChevronsRight size={18} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

Table.propTypes = {
  columns: Propstype.array,
  list: Propstype.object,
  to: Propstype.string,
  fetchData: Propstype.func,
  loading: Propstype.bool,
};

export default memo(Table);
