import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Map from "./Map";
import { barChartDataDailyTraffic } from "./variables/charts";
import { barChartOptionsDailyTraffic } from "./variables/charts";
import BarChart from "./BarChart/BarChart";
import TabsButton from "./TabsButton";
import tableData from "./table-data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

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
    <div className="w-full rounded-lg bg-[##F4F7FD] p-16 shadow-lg">
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6">
          <div>
            <FontAwesomeIcon
              icon={faChartSimple}
              className="ml-4 text-[#A8A7FB]"
            />
            <FontAwesomeIcon icon={faClock} className=" ml-4" />
            <FontAwesomeIcon icon={faChartLine} className=" ml-4" />
          </div>

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

          <div className="flex pt-4">
            <p className="grow text-center font-popi text-2xl font-bold  text-[#1E285C]">
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

          <div className="flex pt-4">
            <p className="grow text-center font-popi text-2xl font-bold text-[#1E285C]">
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
              <th className="border border-blue-100 bg-[#0F0D2D] px-6 py-2 text-center font-medium text-white">
                Product{" "}
                <span className="ml-2">
                  <FontAwesomeIcon icon={faSort} />
                </span>
              </th>
              <th className="border border-blue-100 bg-[#0F0D2D] px-6 py-2 text-center font-medium text-white">
                Transaction
                <span className="ml-2">
                  <FontAwesomeIcon icon={faSort} />
                </span>
              </th>
              <th className="border border-blue-100 bg-[#0F0D2D] px-6 py-2 text-center font-medium text-white">
                US Dollar Value
                <span className="ml-2">
                  <FontAwesomeIcon icon={faSort} />
                </span>
              </th>
              <th className="border border-blue-100 bg-[#0F0D2D]  px-6 py-2 text-center font-medium text-white">
                Quantity
                <span className="ml-2">
                  <FontAwesomeIcon icon={faSort} />
                </span>
              </th>
              <th className="border border-blue-100 bg-[#0F0D2D] px-6  py-2 text-center font-medium text-white">
                Containers
                <span className="ml-2">
                  <FontAwesomeIcon icon={faSort} />
                </span>
              </th>
              <th className="border border-blue-100 bg-[#0F0D2D] px-6 py-2 text-center font-medium text-white">
                Weight
                <span className="ml-2">
                  <FontAwesomeIcon icon={faSort} />
                </span>
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
