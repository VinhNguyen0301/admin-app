import React from "react";

interface TabsButtonProps {
  tabs: string[]; // Array of tab names
  selectedTab: string; // Name of the selected tab
  onTabClick: (tab: string) => void; // Callback function to handle tab clicks
}

const TabsButton: React.FC<TabsButtonProps> = ({
  tabs,
  selectedTab,
  onTabClick,
}) => {
  return (
    <div>
      <ul className="mt-4 flex flex-wrap justify-center text-center text-sm font-medium text-gray-500 dark:text-gray-400">
        {tabs.map((tab, index) => (
          <li key={index} className="rounded-sm border border-gray-300">
            <a
              href="#"
              className={`inline-block  px-2 py-1 ${
                selectedTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              }`}
              onClick={() => onTabClick(tab)}
              style={{ fontSize: "0.8rem" }}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsButton;
