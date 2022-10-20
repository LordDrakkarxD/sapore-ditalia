import { createContext, useState, useEffect } from "react";

export const addFormItem = (formData, itemToAdd) => {
  const existingCartItem = formData.find(
    (formItem) => formItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    const newFormData = formData.filter(
      (formItem) => formItem.id !== itemToAdd.id
    );

    return [...newFormData, { ...itemToAdd }];
  }

  return [...formData, { ...itemToAdd }];
};

export const WindowPopUpBuyContext = createContext({
  counterB: true,
  setBCounter: () => {},
  productSelected: {},
  setProductSelected: () => {},
  itemsTotal: 1,
  setItemsTotal: () => {},
  formData: [],
  setFormData: () => {},
  addItemToForm: () => {},
  formTotal: 0,
  setFormTotal: () => {},
});

export const WindowPopUpBuyProvider = ({ children }) => {
  const [counterB, setBCounter] = useState(true);
  const [productSelected, setProductSelected] = useState({});
  const [itemsTotal, setItemsTotal] = useState(1);
  const [formData, setFormData] = useState([]);
  const [formTotal, setFormTotal] = useState(0);

  useEffect(() => {
    const newFormTotal = formData.reduce((acc, curr) => acc + curr.price, 0);
    setFormTotal(newFormTotal);
  }, [formData]);

  const addItemToForm = (itemToAdd) => {
    setFormData(addFormItem(formData, itemToAdd));
  };

  const value = {
    counterB,
    setBCounter,
    productSelected,
    setProductSelected,
    itemsTotal,
    setItemsTotal,
    formData,
    setFormData,
    addItemToForm,
    formTotal,
    setFormTotal,
  };

  return (
    <WindowPopUpBuyContext.Provider value={value}>
      {children}
    </WindowPopUpBuyContext.Provider>
  );
};
