import { Fragment } from "react/jsx-runtime";

export default function BasicTableView({ tableheading, tableData }) {
   
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

                  console.log("value======>",value.length)
                   
                     return <Fragment key={index}>
                                          <tr>
                                              <td>{value.colum1}</td>
                                              <td>{value.colum2}</td>
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
