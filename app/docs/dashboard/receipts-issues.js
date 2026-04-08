const receiptsIssuesTabs = [
  // =====================================================
  // 1️⃣ RECEIPTS & QUALITY CHECK
  // =====================================================
  {
    tab: "Receipts & Quality Check",

    sections: [
      { heading: "Receipt Throughput", content: "This section provides a summary of all inward material activity. It includes total receipt documents, inward quantity, inward value, and accepted quantity after quality checks. Additional indicators such as rejected quantity, damaged quantity, short receipt quantity, and pending QC lots help track discrepancies and ensure accurate material intake.", image: "/docs/receipts/receipt-throughput.png", },
      {
        heading: "Quality & Compliance",
        content:
          "Displays quality-related metrics such as vendor rejection percentage, MRN closure aging, pending QC aging, and missing test certificate counts. These indicators help ensure compliance with quality standards and identify delays in inspection or documentation.",
        image: "/docs/receipts/quality-compliance.png",
      },
      {
        heading: "Vendor-wise Receipt Value",
        content:
          "Shows the distribution of inward value across different vendors in a horizontal bar chart. This helps identify major suppliers, analyze procurement concentration, and evaluate vendor contribution to inventory value.",
        image: "/docs/receipts/vendor-wise.png",
      },
      {
        heading: "QC Status Distribution",
        content:
          "Provides a donut chart representation of quality check outcomes including approved, rejected, and pending quantities. This helps users quickly understand the overall quality status of received materials.",
        image: "/docs/receipts/qc-status.png",
      },
      {
        heading: "Pending QC Aging",
        content:
          "Displays aging buckets for pending quality checks such as 0–2 days, 3–7 days, 8–15 days, and above 15 days. This helps track delays in QC processing and prioritize inspections.",
        image: "/docs/receipts/qc-aging.png",
      },
      {
        heading: "Acceptance vs Rejection vs Damage",
        content:
          "A stacked chart comparing accepted, rejected, and damaged quantities. This helps analyze quality performance trends and identify recurring issues in received materials.",
        image: "/docs/receipts/acceptance-chart.png",
      },
      {
        heading: "Inward Trends",
        content:
          "Displays daily or weekly inward trends using a line chart. It helps track material inflow patterns over time and identify peak or low activity periods.",
        image: "/docs/receipts/inward-trend.png",
      },
      {
        heading: "Operational Exceptions",
        content:
          "Lists important exceptions such as pending QC items, short/excess/damaged receipts, and missing test certificates. These alerts help users take immediate corrective actions.",
        image: "/docs/receipts/exceptions.png",
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
        heading: "Issue & Return Control KPIs",
        content:
          "Displays key metrics related to material issuance including today’s issue quantity, issue value, month-to-date issue value, returnable issue quantity, and non-returnable issue quantity. It also tracks pending acknowledgements, high consumption variance items, and pending material returns.",
        image: "/docs/issues/issue-kpi.png",
      },
      {
        heading: "Top Consumed Materials",
        content:
          "Lists the most consumed materials based on quantity or value. This helps identify high-usage items and monitor consumption patterns across projects.",
        image: "/docs/issues/top-consumed.png",
      },
      {
        heading: "Location-wise Issue",
        content:
          "Shows material consumption distribution across different locations or sites. Helps in tracking usage efficiency and identifying high-consumption areas.",
        image: "/docs/issues/location-wise.png",
      },
      {
        heading: "Contractor-wise Issue",
        content:
          "Displays material issued to different contractors. Useful for tracking contractor-level consumption and accountability.",
        image: "/docs/issues/contractor-wise.png",
      },
      {
        heading: "Theoretical vs Actual Consumption",
        content:
          "Compares planned (theoretical) consumption with actual usage. Helps identify variances, inefficiencies, or potential material wastage.",
        image: "/docs/issues/theoretical-vs-actual.png",
      },
      {
        heading: "Consumption Heatmap",
        content:
          "Visual representation of material consumption across blocks, towers, or floors. Helps quickly identify high-usage zones.",
        image: "/docs/issues/heatmap.png",
      },
      {
        heading: "Issue Trends",
        content:
          "Displays daily or weekly issue trends to track material outflow patterns and monitor consumption over time.",
        image: "/docs/issues/issue-trend.png",
      },
      {
        heading: "Returnable Tracking",
        content:
          "Tracks returnable materials issued and their return status. Includes recovery percentage and trend comparison.",
        image: "/docs/issues/return-trend.png",
      },
      {
        heading: "Pending & Exception Tracking",
        content:
          "Includes pending acknowledgements, high variance materials, abnormal consumption cases, and returnable tracking details to ensure operational control.",
        image: "/docs/issues/exceptions.png",
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
        heading: "Movement & Gate Pass Snapshot",
        content:
          "Provides a summary of transfer and gate pass activities including open transfers, pending acknowledgements, transit loss, transit damage, open gate passes, overdue returnables, and scrap outward count.",
        image: "/docs/transfers/movement-snapshot.png",
      },
      {
        heading: "Closure & Recovery",
        content:
          "Tracks transfer closure performance including average closure days, open returnable gate pass aging, recovery percentage, and pending gate pass closures.",
        image: "/docs/transfers/closure-recovery.png",
      },
      {
        heading: "Transfer Dispatch vs Receipt",
        content:
          "Compares dispatched vs received quantities for transfers, helping identify mismatches and delays in logistics.",
        image: "/docs/transfers/dispatch-vs-receipt.png",
      },
      {
        heading: "Gate Pass Distribution",
        content:
          "Displays distribution of gate pass types such as returnable (RGP) and non-returnable (NRGP). Helps understand movement patterns.",
        image: "/docs/transfers/gatepass-distribution.png",
      },
      {
        heading: "Transfer Status Analysis",
        content:
          "Shows open vs closed transfers over time, helping monitor pending logistics and closure efficiency.",
        image: "/docs/transfers/open-vs-closed.png",
      },
      {
        heading: "Pending Transfer & Returnables",
        content:
          "Lists pending transfer receipts and overdue returnables with details such as reference, source, destination, and due dates.",
        image: "/docs/transfers/pending-lists.png",
      },
      {
        heading: "Exception Tracking",
        content:
          "Tracks transit loss/damage cases and pending gate pass closures to ensure accountability and timely resolution.",
        image: "/docs/transfers/exceptions.png",
      },
      {
        heading: "Aging Analysis",
        content:
          "Displays aging of pending transfers and contractor-wise overdue returnables to identify delays and take corrective actions.",
        image: "/docs/transfers/aging.png",
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