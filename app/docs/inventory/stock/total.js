export const totalInventoryDocs = {
  title: "Total Inventory",
  description: "Shows total stock value.",

  sections: [
    {
      heading: "Total Inventory Overview",
      content:
        "This screen shows complete inventory details with overall stock value and status.\n\n" +

        "Summary Cards:\n\n" +
        "• Total Inventory Value → Total value of all materials\n" +
        "• General Materials → Value of non-steel items\n" +
        "• Steel Stock → Value of steel materials\n" +
        "• Active Items → Number of materials currently in stock\n" +
        "• Low Stock Items → Materials below required level\n" +
        "• Out of Stock → Materials with zero quantity\n\n" +

        "What it helps:\n\n" +
        "• Quickly understand total stock position\n" +
        "• Identify low stock and out of stock items\n" +
        "• Monitor overall inventory health\n\n" +

        "Overall:\n\n" +
        "• Central place to view complete inventory data\n" +
        "• Helps in planning purchases and stock management",

      image: "/docs/inventory/stocks/total-inventory.png",
    },

    {
      heading: "Material Balances & Steel Stock Details",
      content:
        "This section shows detailed stock information for materials.\n\n" +

        "Balances View:\n\n" +
        "• Displays available quantity for each material\n" +
        "• Shows unit (Bags, Cft, etc.) and total value\n" +
        "• Helps understand how much stock is available\n\n" +

        "Steel Stock (TMT Bars):\n\n" +
        "• Shows stock based on diameter (8mm, 10mm, etc.)\n" +
        "• Displays weight (MT) and number of pieces\n" +
        "• Shows rate and total value for each size\n\n" +

        "Status:\n\n" +
        "• GOOD → Stock is sufficient\n" +
        "• WARNING → Stock is getting low\n" +
        "• CRITICAL → Immediate action required\n\n" +

        "Overall:\n\n" +
        "• Helps track material-wise stock clearly\n" +
        "• Useful for monitoring steel inventory in detail\n" +
        "• Supports better stock control and planning",

      image: "/docs/inventory/stocks/1.png",
    },

    {
      heading: "Steel Stock Status View",
      content:
        "This view gives a detailed breakdown of steel materials.\n\n" +

        "• Each row represents a steel size (diameter)\n" +
        "• Shows weight, pieces, rate, and total value\n" +
        "• Status helps quickly identify stock condition\n\n" +

        "Overall:\n\n" +
        "• Easy way to monitor steel stock levels\n" +
        "• Helps take quick decisions based on stock status",

      image: "/docs/inventory/stocks/2.png",
    },
  ],
};