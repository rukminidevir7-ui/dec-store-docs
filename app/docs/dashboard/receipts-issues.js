const receiptsIssuesTabs = [
  // =====================================================
  // 1️⃣ RECEIPTS & QUALITY CHECK
  // =====================================================
  {
    tab: "Receipts & Quality Check",

    sections: [
      {
        heading: "Receipt Throughput & Quality",
        content:
          "• View receipt documents and inward quantity\n• Track inward value and accepted quantity\n• Monitor rejected, damaged, and short receipt quantities\n• Check pending QC lots for inspection status\n• Analyze vendor-wise receipt value distribution\n• View QC status distribution (Approved / Rejected / Pending)",
        image: "/docs/dashboard/receipts-quality-1.png",
      },
      {
        heading: "QC Aging & Trends",
        content:
          "• Track pending QC aging by time buckets\n• Compare accepted, rejected, and damaged quantities\n• Monitor daily and weekly inward trends",
        image: "/docs/dashboard/receipts-quality-2.png",
      },
    ],
  },

  // =====================================================
  // 2️⃣ ISSUES & CONSUMPTION
  // =====================================================
  {
    tab: "Issues & Consumption",

    sections: [
      {
        heading: "Issue Control KPIs",
        content:
          "• View today issue quantity and value\n• Track MTD issue value and returnable issue quantity\n• Monitor non-returnable issues and pending acknowledgements\n• Identify high consumption variance items\n• Track pending material returns",
        image: "/docs/dashboard/issues-consumption-1.png",
      },
      {
        heading: "Consumption Insights",
        content:
          "• Analyze top consumed materials\n• Track location-wise material usage\n• Compare contractor-wise consumption\n• Compare theoretical vs actual consumption",
        image: "/docs/dashboard/issues-consumption-2.png",
      },
      {
        heading: "Consumption Monitoring",
        content:
          "• View block / tower / floor consumption heatmap\n• Track daily and weekly issue trends\n• Monitor returnable issue vs return trends",
        image: "/docs/dashboard/issues-consumption-3.png",
      },
    ],
  },

  // =====================================================
  // 3️⃣ TRANSFERS, GATE PASS & RETURNABLES
  // =====================================================
  {
    tab: "Transfers, Gate Pass & Returnables",

    sections: [
      {
        heading: "Movement & Gate Pass Overview",
        content:
          "• Track open transfers and pending acknowledgements\n• Monitor transit loss and damage quantities\n• View open gate passes and overdue returnables\n• Track scrap outward count\n• Monitor transfer closure and RGP aging\n• View returnable recovery percentage and pending closures",
        image: "/docs/dashboard/transfers-1.png",
      },
      {
        heading: "Transfer & Return Tracking",
        content:
          "• Compare transfer dispatch vs receipt\n• View gate pass type distribution\n• Track open vs closed transfers\n• View pending transfer receipts list\n• Monitor overdue returnables list\n• Track gate pass pending closures\n• Analyze contractor-wise overdue returnables\n• Track pending transfer aging buckets",
        image: "/docs/dashboard/transfers-2.png",
      },
    ],
  },
];

export const receiptsIssuesDocs = {
  title: "Receipts, Issues & Movements",

  description:
    "This module provides a complete view of material flow including receipts, quality checks, consumption, transfers, and returnable tracking. It helps users monitor inward materials, control consumption, and manage logistics efficiently across sites.",

  tabs: receiptsIssuesTabs,
  sections: receiptsIssuesTabs.flatMap((tab) => tab.sections),
};