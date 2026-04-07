"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  ArrowUpRight,
  ArrowDownLeft,
  Layers,
  RotateCcw,
  Map,
  Trash2,
  CheckCircle,
  FileText,
  BarChart2,
  Settings,
} from "lucide-react";

type MenuSelect = {
  section: string;
  key: string | null;
};

type DocsSidebarProps = {
  onSelect: (data: MenuSelect) => void;
  activeSection?: string;
  activeKey?: string;
  collapsed?: boolean;
};

export default function DocsSidebar({ onSelect, activeSection, activeKey, collapsed = false }: DocsSidebarProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({ Dashboard: true });

  const toggleMenu = (name: string, level: number) => {
    setOpenMenus((prev) => {
      if (level === 0) {
        return { [name]: !prev[name] };
      }
      return { ...prev, [name]: !prev[name] };
    });
  };

  const getDefaultKey = (item: any) => {
    if (item.key) return item.key;
    if (item.children && item.children.length > 0) {
      return item.children[0].key || item.children[0].name;
    }
    return null;
  };

  const renderMenuItem = (item: any, level: number = 0, section: string = "") => {
    const isOpen = !!openMenus[item.name];
    const hasChildren = item.children && item.children.length > 0;
    const indentStyle = { paddingLeft: `${level * 16}px` };
    const isSelected =
      (!hasChildren && item.key && activeSection === section && activeKey === item.key) ||
      (collapsed && level === 0 && activeSection === item.name);
    const Icon = item.icon || FileText;

    if (collapsed && level > 0) {
      return null;
    }

    return (
      <div key={item.name}>
        <div
          onClick={() => {
            if (hasChildren && !collapsed) {
              toggleMenu(item.name, level);
            } else if (hasChildren) {
              onSelect({ section: item.name, key: getDefaultKey(item) });
            } else {
              onSelect({ section: section || item.name, key: item.key });
            }
          }}
          style={collapsed ? undefined : indentStyle}
          className={`flex items-center cursor-pointer rounded px-3 py-2 ${
            collapsed ? "justify-center" : "justify-between"
          } ${
            isSelected
              ? "bg-purple-100 text-purple-800 font-semibold"
              : "text-gray-700 hover:bg-gray-100 hover:text-purple-700"
          }`}
        >
          <div className={`flex items-center gap-2 ${collapsed ? "justify-center" : ""}`}>
            {Icon && <Icon size={16} className="text-slate-500" />}
            {!collapsed && <span className={level > 0 ? "text-sm" : "font-medium"}>{item.name}</span>}
          </div>
          {!collapsed && hasChildren && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        </div>

        {hasChildren && isOpen && !collapsed && (
          <div className="mt-1 flex flex-col gap-1">
            {item.children.map((sub: any) => renderMenuItem(sub, level + 1, section || item.name))}
          </div>
        )}
      </div>
    );
  };

  const menu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      key: "Dashboard",
      children: [
        { name: "Dashboard Overview", key: "Dashboard" },
        { name: "Store Summary", key: "Store Summary" },
        { name: "Receipts & Issues", key: "Receipts & Issues" },
        { name: "Stock Control", key: "Stock Control" },
        { name: "Consumption", key: "Consumption" },
        { name: "Registers", key: "Registers" },
      ],
    },
    {
      name: "Inward",
      icon: ArrowUpRight,
      children: [
        { name: "MRN", key: "MRN" },
        { name: "Fuel Register", key: "Fuel Register" },
        { name: "From Site Transfer", key: "From Site Transfer" },
      ],
    },
    {
      name: "Outward",
      icon: ArrowDownLeft,
      children: [
        { name: "Issue Slip", key: "Issue Slip" },
        { name: "Direct Issue", key: "Direct Issue" },
        { name: "Returnable Issues", key: "Returnable Issues" },
        { name: "Fuel Allotment", key: "Fuel Allotment" },
        { name: "Site Transfers", key: "Site Transfers" },
        { name: "Internal Transfers", key: "Internal Transfers" },
      ],
    },
    {
      name: "Inventory",
      icon: Layers,
      children: [
        { name: "Overview", key: "Overview" },
        {
          name: "Materials",
          children: [
            { name: "Steel Inventory", key: "Steel Inventory" },
            { name: "Cement Inventory", key: "Cement Inventory" },
            { name: "Civil", key: "Civil" },
            { name: "MEP", key: "MEP" },
            { name: "Assets", key: "Assets" },
          ],
        },
        {
          name: "Categories",
          children: [
            { name: "Fuel", key: "Fuel" },
            { name: "Grocery", key: "Grocery" },
            { name: "Client Office Supplies", key: "Client Office Supplies" },
            { name: "DEC Office Supplies", key: "DEC Office Supplies" },
            { name: "Others", key: "Others" },
            { name: "Special Items", key: "Special Items" },
            { name: "Bitumen Materials", key: "Bitumen Materials" },
          ],
        },
        {
          name: "Stock",
          children: [
            { name: "Total Inventory", key: "Total Inventory" },
            { name: "Stock Status", key: "Stock Status" },
            { name: "Stock Reservations", key: "Stock Reservations" },
            { name: "Stock Blocking", key: "Stock Blocking" },
          ],
        },
      ],
    },
    {
      name: "Returns",
      icon: RotateCcw,
      children: [
        { name: "Overview", key: "Overview" },
        { name: "Material Returns", key: "Material Returns" },
        { name: "Returnable Returns", key: "Returnable Returns" },
        { name: "RGP Tracker", key: "RGP Tracker" },
      ],
    },
    {
      name: "Yard Map",
      icon: Map,
      children: [
        { name: "Yard Map", key: "Yard Map" },
        { name: "Temporary Stores", key: "Temporary Stores" },
      ],
    },
    {
      name: "Scrap",
      icon: Trash2,
      children: [
        { name: "Scrap Inward", key: "Scrap Inward" },
        { name: "Scrap Store", key: "Scrap Store" },
      ],
    },
    {
      name: "Quality Checks",
      icon: CheckCircle,
      children: [
        { name: "QC Inspections", key: "QC Inspections" },
        { name: "Rejections Register", key: "Rejections Register" },
        { name: "QC Return to Vendor", key: "QC Return to Vendor" },
        { name: "Batch Traceability", key: "Batch Traceability" },
        { name: "Expiry Monitor", key: "Expiry Monitor" },
        { name: "Test Certificates", key: "Test Certificates" },
      ],
    },
    {
      name: "Audit & Risk Register",
      icon: FileText,
      children: [
        { name: "Audit Dashboard", key: "Audit Dashboard" },
        { name: "Create Audit", key: "Create Audit" },
        { name: "Variance & Adjustment", key: "Variance & Adjustment" },
        { name: "Audit History", key: "Audit History" },
        { name: "Loss Register", key: "Loss Register" },
        { name: "Activity Log", key: "Activity Log" },
      ],
    },
    {
      name: "Analytics",
      icon: BarChart2,
      children: [
        { name: "Consumption Ledger", key: "Consumption Ledger" },
        { name: "Block/Activity Consumption", key: "Block/Activity Consumption" },
        { name: "Stock Trends", key: "Stock Trends" },
        { name: "Vendor Performance", key: "Vendor Performance" },
        { name: "Reorder Planning", key: "Reorder Planning" },
        { name: "Procurement Flow", key: "Procurement Flow" },
        { name: "Transfer Check", key: "Transfer Check" },
      ],
    },
    { name: "User Guidance", icon: FileText },
    {
      name: "Masters & Settings",
      icon: Settings,
      children: [
        { name: "Material Master", key: "Material Master" },
        { name: "Returnables Master", key: "Returnables Master" },
        { name: "Steel Specs", key: "Steel Specs" },
        { name: "Vendor Master", key: "Vendor Master" },
        { name: "Project Master", key: "Project Master" },
        { name: "Yard Master", key: "Yard Master" },
        { name: "Units", key: "Units" },
        { name: "Zone Rules", key: "Zone Rules" },
        { name: "Users & Roles", key: "Users & Roles" },
        { name: "Approval Workflows", key: "Approval Workflows" },
        { name: "Tolerances", key: "Tolerances" },
        { name: "Alerts", key: "Alerts" },
        { name: "Integrations", key: "Integrations" },
      ],
    },
    // { name: "User Guidance", icon: FileText },
  ];

  return (
    <div
      className={`flex h-full flex-col bg-white overflow-hidden ${
        collapsed ? "items-center py-4 px-2" : "p-4"
      }`}
    >
      {/* 🔥 TOP BAR */}
      <div
        className={`mb-4 flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!collapsed ? (
          <>
            {/* LOGO / TITLE */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Documentation
              </div>
              <div className="text-lg font-semibold text-slate-900">
                DEC Store Docs
              </div>
            </div>

            {/* ✅ TOGGLE BUTTON */}
            <button
              onClick={() =>
                onSelect({ section: "TOGGLE_SIDEBAR", key: null })
              }
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition"
            >
              <Menu size={18} />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            {/* LOGO */}
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white">
              DS
            </div>

            {/* TOGGLE */}
            <button
              onClick={() =>
                onSelect({ section: "TOGGLE_SIDEBAR", key: null })
              }
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition"
            >
              <Menu size={18} />
            </button>
          </div>
        )}
      </div>

      {/* 🔥 MENU */}
      <div
        className={`flex-1 overflow-y-auto pb-4 ${
          collapsed ? "space-y-2" : "pr-1"
        }`}
      >
        {menu.map((item) => renderMenuItem(item, 0, item.name))}
      </div>
    </div>
  );
}