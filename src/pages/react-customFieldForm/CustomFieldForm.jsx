import { Fragment, useEffect, useState } from "react";
import fieldMapping from "./components/FieldMapping.json";
import axios from "axios";

export default function CustomFieldForm() {
  const [productformData, setProductFormData] = useState(null);

  useEffect(() => {
    console.log("fieldMapping=====>", fieldMapping);
  }, []);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setProductFormData({ ...productformData, [fieldName]: fieldValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      productformData &&
      productformData.length != 0 &&
      productformData != null
    ) {
      let endpointURL = "https://fakestoreapi.com/products";
      let payload = {
        id: productformData["product-id"],
        title: productformData["product-title"],
        price: productformData["product-price"],
        description: productformData["product-description"],
        category: productformData["product-category"],
        image: productformData["product-image"],
      };
      let response = await axios.post(endpointURL, payload);

      console.log("Api Response =====>", response.data);
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <p className="h1 text-priamry text-center"> Example Product Form </p>
      </div>
      <div className="form">
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            {fieldMapping &&
              fieldMapping.length != 0 &&
              fieldMapping.map((value, index) => {
                return (
                  <Fragment>
                    {value.fieldDisabled != true &&
                        <label for={value.fieldID}> {value.fieldLabel} </label> }
                    
                    {value.fieldType == "textarea" && value.fieldDisabled != true ? (
                      <textarea
                        name={value.fieldName}
                        className={value.fieldClassName}
                        row={value.fieldRowSize}
                        col={value.fieldColumnSize}
                      ></textarea>
                    ) : value.fieldType == "select" && value.fieldDisabled != true ? (
                      <select className={value.fieldClassName}>
                        {value.options.map((value) => (
                          <option value={value}> {value}</option>
                        ))}
                      </select>
                    ) : (
                     value.fieldDisabled != true &&
                      <input
                        type={value.fieldType}
                        name={value.fieldName}
                        className={value.fieldClassName}
                        onChange={handleChange}
                      />
                    )}
                  </Fragment>
                );
              })}
          </div>
        </form>
      </div>
    </div>
  );
}
