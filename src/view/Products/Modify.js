import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TitleModify from '../../components/Title/TitleModify';
import FormPanelCURD from '../../components/FormPanelCURD';
import modelForm from './modelForm';
import * as ProductsAction from '../../store/actions/products';
import * as CategoriesAction from '../../store/actions/categories';

function Modify() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isRefresh, setIsRefresh] = useState(false);
  const detail = useSelector(state => state.products.detail);
  const all = useSelector(state => state.categories.all);
  if (all) {
    const defaultOption = {
      id: 0,
      value: 0,
      name: 'None',
    };
    modelForm[2].options = [...[defaultOption], ...all];
  }

  let title = 'Add New Product';
  if (id) {
    title = 'Edit Product';
  }

  function submitCallback() {
    const name = modelForm[0].value;
    const categoryId = modelForm[2].value;
    const image = modelForm[3].value;
    const listImage = modelForm[4].value;
    const shortDescriptions = modelForm[5].value;
    const descriptions = modelForm[6].value;
    debugger;
    if (id) {
      
    } else {

    }
  }

  function refreshData() {
    modelForm.forEach(input => {
      delete input.value;
    });
    setIsRefresh(!isRefresh);
  }

  if (detail != null && id) {
    modelForm[0].value = detail.name;
    modelForm[1].value = detail.slug;
    const categoryId = detail.Categories[0].id;
    modelForm[2].value = categoryId;
    modelForm[3].value = `${process.env.CDN}${detail.image}`;
    const listImage = detail.ProductImages.map(img => `${process.env.CDN}${img.path}`);
    modelForm[4].value = listImage;
    modelForm[5].value = detail.descriptions;
    modelForm[6].value = detail.shortDescriptions;
  }

  useEffect(() => {
    refreshData();
    dispatch(CategoriesAction.getAllCategory());
    if (id) {
      dispatch(ProductsAction.getProduct(id));
    }
  }, []);

  return (
    <>
      <TitleModify name={title} to="products" />
      <div className="card w-100">
        <div className="card-body">
          <FormPanelCURD
            submitCallback={submitCallback}
            model={modelForm}
            loading={false}
            refreshData={refreshData}
          />
        </div>
      </div>
    </>
  );
}

export default Modify;
