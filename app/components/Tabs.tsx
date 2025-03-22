"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

type TabsProps = {
  children: ReactNode;
  defaultTab?: string;
  className?: string;
};

type TabProps = {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export function Tabs({ children, defaultTab, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || "");

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabList must be used within Tabs");
  const { setActiveTab } = context;

  const childrenArray = React.Children.toArray(children);

  return (
    <div>
      {/* Mobile dropdown */}
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-400 focus:outline-none focus:ring-indigo-400 sm:text-sm"
          onChange={(e) => {
            const selectedTab = childrenArray.find(
              (child: any) => child.props.label === e.target.value,
            ) as any;
            if (selectedTab) {
              setActiveTab(selectedTab.props.id);
            }
          }}
        >
          {React.Children.map(children, (child: any) => (
            <option key={child.props.id}>{child.props.label}</option>
          ))}
        </select>
      </div>

      {/* Desktop tabs */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav
            aria-label="Tabs"
            className={`-mb-px flex space-x-8 ${className}`}
          >
            {children}
          </nav>
        </div>
      </div>
    </div>
  );
}

export function Tab({ id, label, className = "" }: Omit<TabProps, "children">) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab must be used within Tabs");

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === id;

  return (
    <button
      onClick={() => setActiveTab(id)}
      aria-current={isActive ? "page" : undefined}
      className={`whitespace-nowrap border-b-2 px-1 py-2.5 text-sm transition-colors ${
        isActive
          ? "border-slate-900 font-medium text-slate-900"
          : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
      } ${className}`}
    >
      {label}
    </button>
  );
}

export function TabPanels({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function TabPanel({
  id,
  children,
  className = "",
}: Omit<TabProps, "label">) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabPanel must be used within Tabs");

  const { activeTab } = context;
  if (activeTab !== id) return null;

  return <div className={className}>{children}</div>;
}
