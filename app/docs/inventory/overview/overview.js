export const inventoryOverviewDocs = {
  title: "Inventory Overview",
  description:
    "Provides a complete view of inventory across all categories and materials.",

  sections: [
    {
      heading: "Inventory Overview Dashboard",
      content:
        "This screen gives a quick summary of all inventory data in one place.\n\n" +

        "Summary Cards:\n\n" +
        "• Total Inventory Value → Overall stock value\n" +
        "• General Materials → Value of non-steel materials\n" +
        "• Steel Stock → Value of steel materials\n" +
        "• Active SKU Lines → Number of materials with available stock\n\n" +

        "Consumption Snapshot:\n\n" +
        "• Shows top materials based on usage\n" +
        "• Net Qty = Issued - Returned\n" +
        "• Displays estimated value of consumed materials\n" +
        "• Helps identify high usage materials quickly\n\n" +

        "Quick Open:\n\n" +
        "• Direct links to detailed screens\n" +
        "• Total Inventory & Movements → Full stock details\n" +
        "• Steel Inventory → Steel-specific data\n" +
        "• Cement Inventory → Cement stock details\n" +
        "• Stock Status → Overall stock condition\n\n" +

        "Overall:\n\n" +
        "• Easy dashboard to monitor inventory\n" +
        "• Helps in quick decision making\n" +
        "• Gives complete stock visibility at a glance",

      image: "/docs/inventory/inventory-overview.png",
    },

    {
      heading: "Material Categories (MRR)",
      content:
        "This section shows inventory grouped by material categories.\n\n" +

        "Categories:\n\n" +
        "• Civil, MEP, Assets, Fuel, Grocery, Office Supplies, Others\n" +
        "• Each category represents a group of related materials\n\n" +

        "View Stock:\n\n" +
        "• Click 'View stock' to see detailed items in that category\n" +
        "• Helps users quickly navigate to required materials\n\n" +

        "Overall:\n\n" +
        "• Simple way to organize materials\n" +
        "• Easy navigation between different inventory categories\n" +
        "• Improves material tracking and management",

      image: "/docs/inventory/material-categories.png",
    },
  ],
};