import { Fragment } from "react/jsx-runtime";
export default function StocksReport({ dashboardData }) {
  return (
    <div className="base-container">
      <div className="current-stocks">
        <p className="h3  text-danger">
          current stock
          <span className="bg-warning">{dashboardData.CurrentStocks}</span>
        </p>
      </div>
    </div>
  );
}
