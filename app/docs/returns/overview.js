export const returnsOverviewDocs = {
  title: "Returns Overview",

  description:
    "Provides a consolidated view of material returns, returnable receipts, and RGP tracking. Helps monitor return activities, pending issues, and return trends across sites.",

  sections: [
    {
      heading: "Returns Dashboard Summary",
      content:
        "The Returns Overview dashboard gives a quick snapshot of all return-related activities in the system.\n\nKey metrics include:\n\n• Material Returns → Total return transactions and quantity received back\n• Returnable Receipts → Items received from returnable tracking (including damaged/missing)\n• Open RGPs → Gate passes still open or overdue\n• Outstanding Returnable Issues → Items issued but not yet returned\n\nThese indicators help users quickly identify pending returns and track material movement.",
      image: "/docs/returns/returns-overview-1.png",
    },

    {
      heading: "Top Materials Returned",
      content:
        "This section highlights the most frequently returned materials based on quantity.\n\n• Bubble size represents total returned quantity\n• Helps identify high-return materials\n• Useful for analyzing wastage, damage, or excess issue patterns\n\nExample:\n• River Sand → Highest returned quantity\n• Cement → Moderate returns\n\nThis insight helps improve inventory planning and reduce unnecessary returns.",
    },

    {
      heading: "Return Activity Trend",
      content:
        "Displays monthly return activity over a selected time period (e.g., last 6 months).\n\n• Tracks number of return transactions per month\n• Combines material returns and returnable receipts\n• Helps identify seasonal or operational trends\n\nExample:\n• Peak in January → High return activity\n• Low activity in other months\n\nThis helps management understand return patterns and operational efficiency.",
    },

    {
      heading: "RGP Status Snapshot",
      content:
        "Provides a quick overview of Returnable Gate Pass (RGP) status.\n\n• Shows total RGP documents\n• Highlights open and overdue RGPs\n• Tracks issued, returned, and closed statuses\n\nExample:\n• 1 Open (Overdue) RGP → Requires immediate attention\n\nUsers can navigate to RGP Tracker to close pending gate passes and avoid delays.",
    },

    {
      heading: "Navigation & Actions",
      content:
        "Quick actions available from the dashboard:\n\n• Open Material Returns → View and manage return entries\n• Open Returnable Returns → Track returnable items\n• RGP Tracker → Manage gate pass lifecycle\n\nThese shortcuts help users quickly access detailed modules for further action.",
    },

    {
      heading: "Business Importance",
      content:
        "The Returns Overview module is critical for:\n\n• Tracking material returns from site\n• Managing returnable inventory (tools, equipment)\n• Monitoring pending and overdue returns\n• Reducing material loss and wastage\n• Improving inventory accuracy\n\nThis ensures better control over material movement and accountability across projects.",
    },
  ],
};