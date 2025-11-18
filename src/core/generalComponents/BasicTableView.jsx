import { Fragment } from "react/jsx-runtime";

export default function BasicTableView({ tableheading, tableData }) {
    console.log("tableData====>",tableData)
  return (
    <div className="base-container">
      <table className="table table-border">
        <thead>
          <tr>
             {tableheading && tableheading.length != 0 && (
                tableheading.map((value,index)=>{
                    return <th> {value} </th>
                })
                 
             )}
          </tr>
        </thead>
        <tbody>
             {tableData && tableData.length !=0 ?
                tableData.map((value,index)=>{
                   
                     return <Fragment key={index}>
                                          <tr>
                                              <td>{value.id}</td>
                                              <td>{value.name}</td>
                                          </tr>
                                    </Fragment>
                })
              :
                <tr>
                    <td colSpan={tableData.length}>Currently No Records Found </td>
                </tr>
              
             }
        </tbody>
      </table>
    </div>
  );
}
