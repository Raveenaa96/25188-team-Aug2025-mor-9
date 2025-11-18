import { Fragment } from "react/jsx-runtime"
import BasicTableView from "../../../core/generalComponents/BasicTableView"
export default function SalesDetails( 
    {
        dashboardData,
        salesReport
    }



){

    
    const transformedData = salesReport.map(item => ({
        id: item.date,
        name: item.sales
    }));




    return (
        <div className="base-container">
             <div className="total-sales-report">
                    <p className="h3  text-danger">Total Sales Report <span className="text-primary">{dashboardData.totalSalesDetails}</span></p>
                </div>
             <div className="sales-detail-report">
                 {/* <table className="table table-border">
                        <thead>
                            <tr>
                                <th>Saleas Date</th>
                                <th>Sales Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                             {
                                salesReport && salesReport.length != 0 ?
                                 salesReport.map((value,index)=>{
                                    return <Fragment key={index}>
                                          <tr>
                                              <td>{value.date}</td>
                                              <td>{value.sales}</td>
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
                        tableheading={ ["Saleas Date","Saleas Amount"] }
                        tableData = {transformedData}
                    />
             </div>
        </div>
    )
}