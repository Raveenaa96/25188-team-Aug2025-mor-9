import { Fragment, useState } from "react";
import CustomerDetails from "./componets/CustomerDetails";
import SalesDetails from "./componets/SalesDetails";
import StocksReport from "./componets/StocksReport";

export default function DashboardMainPage() {

  const [dashboardData, setDashboardData] = useState({
    totalCustomerCount: 100,
    totalSalesDetails: 2500000,
    CurrentStocks: "400 unit",
  });

  const [customers, setCustomers] = useState([
    {
      customerID: 1,
      customerName: "saravanan",
    },
    {
      customerID: 2,
      customerName: "vinoth",
    },
  ]);
  const [salesReport,setSalesReport] = useState([
     {
        date : "11-01-2025",
        sales: "12,00,000"

     },
     {
        date: "11-08-2025",
        sales: "12,00,000"
        
     }
  ])

  return (
    <div className="base-container">
      <div className="heading">
        <p className="text-center h3">Dashboard Page </p>
      </div>

      <div className="customer-details pt-5">
        <CustomerDetails 
          dashboardData={dashboardData} 
          customers={customers}
        />
      </div>

      <div className="sales-details-information pt-5">
        <SalesDetails 
            dashboardData={dashboardData} 
            salesReport = { salesReport }
            
        />
      </div>

      <div className="current-stock-report pt-5">
        <StocksReport dashboardData={dashboardData} />
      </div>
    </div>
  );
}
