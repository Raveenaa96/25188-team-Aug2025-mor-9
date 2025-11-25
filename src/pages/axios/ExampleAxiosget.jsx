import axios from "axios";
import { Fragment, useEffect, useState } from "react";

export default function ExampleAxiosget() {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    //getProductsasyncAwait();
    getProductsFromPromise();
  }, []);

  const getProductsasyncAwait = async () => {
    let endPointURL = "https://fakestoreapi.com/products";

    const response = await axios.get(endPointURL);

    if (response && response.data) {
      setRecords(response.data);
    }
  };

  const getProductsFromPromise = () => {
    let endPointURL = "https://fakestoreapi.com/products";
    axios
      .get(endPointURL)
      .then((response) => setRecords(response?.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="base-container">
      <div className="heading text-center text-primary">
        <p className="h1">React Fetch GET API</p>
      </div>
      <div className="products-information d-flex flex-row flex-wrap gap-5 m-5">
        {records &&
          records.length != 0 &&
          records.map((value, index) => {
            const { category, description, image, price, title, rating } =
              value;
            return (
              <Fragment key={index}>
                <div className="card " style={{ width: "18rem" }}>
                  <div className="card-header">
                    <div className="card-image">
                      <img
                        src={image}
                        className="img-fluid card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="title">
                      <p className="h2">{title.substring(0, 5)}</p>
                    </div>
                    <div className="card-text">
                      <p>{category}</p>
                      <p> Rs. {price}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary ms-4">Buy Now</button>
                  </div>
                </div>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}
