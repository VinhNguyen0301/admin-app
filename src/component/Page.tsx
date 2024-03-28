import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Map from "./Map";
import { barChartDataDailyTraffic } from "./variables/charts";
import { barChartOptionsDailyTraffic } from "./variables/charts";
import BarChart from "./BarChart/BarChart";
import TabsButton from "./TabsButton";
import tableData from "./table-data.json";

interface TableRow {
  product: string;
  transaction: string;
  usDollarValue: string;
  quantity: string;
  containers: string;
  weight: string;
}
// interface TableProps {
//   data: TableRow[];
// }

const Page: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Transactions");
  const [data, setData] = useState<TableRow[]>([]);

  const tabs = [
    "Transactions",
    "Dollar Value",
    "Quantity",
    "Containers",
    "Weight",
  ];

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    setData(tableData);
  }, []);

  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 shadow-lg">
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6">
          <div style={{ height: "400px" }}>
            <BarChart
              chartData={barChartDataDailyTraffic}
              chartOptions={barChartOptionsDailyTraffic}
            />
          </div>
          <TabsButton
            tabs={tabs}
            selectedTab={selectedTab}
            onTabClick={handleTabClick}
          />

          <div className="flex pt-6">
            <p className="grow text-center font-popi text-2xl font-medium text-[#5E37FF]">
              Product Transactions Chart
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <div style={{ height: "400px" }}>
            <Map />
          </div>
          <TabsButton
            tabs={tabs}
            selectedTab={selectedTab}
            onTabClick={handleTabClick}
          />

          <div className="flex pt-6">
            <p className="grow text-center font-popi text-2xl font-medium text-[#5E37FF]">
              Product Volume by Country
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <div className="relative grow rounded-full border-2 border-gray-300">
          <input
            className=" mr-2  w-full rounded-full border-gray-300 px-4  py-3 pl-10"
            type="text"
            name="search"
            placeholder="Filter by product name"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <table className="w-full border-collapse  rounded-lg bg-white shadow-lg">
          <thead>
            <tr>
              <th className="border border-blue-100 bg-[#A3AED0] px-6 py-2 text-center">
                Product
              </th>
              <th className="border border-blue-100 bg-[#A3AED0] px-6 py-2 text-center">
                Transaction
              </th>
              <th className="border border-blue-100 bg-[#A3AED0] px-6 py-2 text-center">
                US Dollar Value
              </th>
              <th className="border border-blue-100 bg-[#A3AED0] px-6 py-2 text-center">
                Quantity
              </th>
              <th className="border border-blue-100 bg-[#A3AED0] px-6 py-2 text-center">
                Containers
              </th>
              <th className="border border-blue-100 bg-[#A3AED0] px-6 py-2 text-center">
                Weight
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200"
              >
                <td className="border px-6 py-2 text-center">{row.product}</td>
                <td className="border px-6 py-2 text-center">
                  {row.transaction}
                </td>
                <td className="border px-6 py-2 text-center">
                  {row.usDollarValue}
                </td>
                <td className="border px-6 py-2 text-center">{row.quantity}</td>
                <td className="border px-6 py-2 text-center">
                  {row.containers}
                </td>
                <td className="border px-6 py-2 text-center">{row.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="gap-2">
        <Pagination />
      </div>
    </div>
  );
};

export default Page;
