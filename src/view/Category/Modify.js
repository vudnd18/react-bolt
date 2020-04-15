import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TitleModify from '../../components/Title/TitleModify';
import modelForm from './modelForm';
import FormPanelCURD from '../../components/FormPanelCURD';
import * as CategoriesAction from '../../store/actions/categories';

function Modify() {
  const { id } = useParams();
  const [isRefresh, setIsRefresh] = useState(false);
  const loadingCreate = useSelector(state => state.categories.loadingCreate);
  const detail = useSelector(state => state.categories.detail);
  const dispatch = useDispatch();
  const parents = useSelector(state => state.categories.parents);

  if (parents) {
    const defaultOption = {
      id: 0,
      value: 0,
      name: 'None',
    };
    modelForm[2].options = [...[defaultOption], ...parents];
  }

  let title = 'Add New Category';
  if (id) {
    title = 'Edit Category';
  }

  const submitCallback = () => {
    const name = modelForm[0].value;
    const parentId = parseInt(modelForm[2].value) || 0;
    if (id) {
      dispatch(CategoriesAction.editCategory({ id, name, parentId }));
    } else {
      dispatch(CategoriesAction.createCategory({ name, parentId }));
    }
  };

  const refreshData = () => {
    modelForm.forEach(input => {
      delete input.value;
    });
    setIsRefresh(!isRefresh);
  };

  useEffect(() => {
    refreshData();
    dispatch(CategoriesAction.fetchParentCategories());
    if (id) {
      dispatch(CategoriesAction.getCategory(id));
    }
  }, [loadingCreate]);

  if (detail != null && id) {
    modelForm[0].value = detail.name;
    modelForm[1].value = detail.slug;
    modelForm[2].value = detail.parentId.toString();
  }
  return (
    <>
      <TitleModify name={title} to="categories" />
      <div className="card w-100">
        <div className="card-body">
          <FormPanelCURD
            submitCallback={submitCallback}
            model={modelForm}
            loading={loadingCreate}
            refreshData={refreshData}
          />
        </div>
      </div>
    </>
  );
}

export default Modify;
