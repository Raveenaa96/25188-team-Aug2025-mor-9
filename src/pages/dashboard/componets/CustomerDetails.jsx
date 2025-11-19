import { Fragment } from "react/jsx-runtime"
import BasicTableView from "../../../core/generalComponents/BasicTableView"
export default function CustomerDetails({
        customers,
        dashboardData
    }){

    const transformedData = customers.map(item => ({
        colum1: item.customerID,
        colum2: item.customerName
    }));





    return (
        <div className="base-container">
            <div className="total-customer">
                    <p className="h3  text-danger">Total Customer: {dashboardData.totalCustomerCount} </p>
                </div>
                <div className="customer-list">
                    {/* <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Customer Name</th>
                            </tr>
                        </thead>
                        <tbody>
                             {
                                customers && customers.length != 0 ?
                                 customers.map((value,index)=>{
                                    return <Fragment key={index}>
                                          <tr>
                                              <td>{value.customerID}</td>
                                              <td>{value.customerName}</td>
                                          </tr>
                                    </Fragment>
                                 })
                                :
                                <tr>
                                    <td colSpan={2}> Currently No customer Found</td>
                                </tr>
                             }
                        </tbody>
                    </table> */}
                    <BasicTableView 
                        tableheading = {["Customer ID","Customer Name"]}
                        tableData = {transformedData}
                    />
                </div>
        </div>
    )
}