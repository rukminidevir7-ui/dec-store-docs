export const storeSummaryDocs = {
   title: "Store Summary",

  description:
    "The Store Summary tab provides a comprehensive overview of inventory health, stock valuation, movement trends, and operational alerts. It enables users to monitor key metrics, identify risks, and take timely actions for efficient inventory management.",

  sections: [
    {
      heading: "Inventory Position",
      content:
        "The Inventory Position section displays key inventory KPIs that provide a quick snapshot of the current stock status. It includes total inventory value, number of active stock lines, active items, low stock items, and out-of-stock items. These metrics help users understand overall inventory health, identify shortages, and monitor stock availability in real time.",
      image: "/docs/store-summary/inventory-position.png",
    },
    {
      heading: "Daily Flow & Pending Actions",
      content:
        "This section highlights daily stock movement and pending operational tasks. It includes today’s inward and issue values, pending QC lots, pending returnable items, and dead stock value. These insights help users track daily activity, identify bottlenecks, and take immediate corrective actions to maintain smooth operations.",
      image: "/docs/store-summary/daily-flow.png",
    },
    {
      heading: "Stock Value by Category",
      content:
        "Displays the distribution of inventory value across different categories using a visual donut chart. This helps users quickly identify which categories contribute the most to inventory value. Users can interact with the chart to drill down into category-level details and analyze material distribution.",
      image: "/docs/store-summary/category-value.png",
    },
    {
      heading: "Monthly Inward vs Issue vs Closing",
      content:
        "This section provides a comparative view of monthly inward (received stock), issue (consumed stock), and closing stock values. It helps users analyze stock trends over time, identify consumption patterns, and monitor stock balance. Users can click on specific months to drill down into detailed transaction data.",
      image: "/docs/store-summary/monthly-trends.png",
    },
    {
      heading: "Top 10 Items by Stock Value",
      content:
        "Lists the top 10 items contributing the highest value to the inventory. Each item is displayed with its stock value, helping users identify high-value materials and prioritize monitoring. This section is useful for controlling inventory costs and focusing on critical items.",
      image: "/docs/store-summary/top-items.png",
    },
    {
      heading: "Stock Aging Buckets",
      content:
        "Groups inventory based on the duration it has been held in stock, such as 0–30 days, 31–60 days, 61–90 days, and above 90 days. This helps identify slow-moving and non-moving items, enabling users to take actions such as redistribution, liquidation, or procurement adjustments.",
      image: "/docs/store-summary/stock-aging.png",
    },
    {
      heading: "Critical Stock Alerts",
      content:
        "Highlights items that require immediate attention due to low stock levels or critical thresholds. It displays item name, quantity, and value, allowing users to quickly take replenishment actions and avoid operational disruptions.",
      image: "/docs/store-summary/critical-alerts.png",
    },
    {
      heading: "Top Value Locked Items",
      content:
        "Displays items where significant inventory value is locked due to low or no movement. It includes item codes, names, and quantities, helping users identify inefficiencies and take corrective measures such as usage optimization or stock clearance.",
      image: "/docs/store-summary/locked-items.png",
    },
    {
      heading: "Pending Action Summary",
      content:
        "Provides a summarized view of all pending operational actions, including QC approvals, returns, transfers, and gate pass closures. This helps users track pending tasks and ensure timely completion of all inventory-related operations.",
      image: "/docs/store-summary/pending-summary.png",
    },
    // {
    //   heading: "System Notes",
    //   content:
    //     "The Store Summary dashboard is powered by live application data. In cases where backend aggregations are not available, values are calculated from transaction-level data. The system ensures consistent data display and handles empty states gracefully to maintain usability.",
    //   image: "/docs/store-summary/system-notes.png",
    // },
  ],
};