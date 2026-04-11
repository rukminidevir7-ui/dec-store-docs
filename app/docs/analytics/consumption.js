export const consumptionDocs = {
  title: "Consumption Ledger",
  description: "Track material consumption and usage details.",

  sections: [
    {
      heading: "Usage Register",
      content:
        "The Usage Register provides a clear view of how materials are consumed across projects and activities.\n\n" +
        "It helps users understand:\n\n" +
        "• Material usage based on block or activity\n" +
        "• Comparison between BOQ and Non-BOQ consumption\n" +
        "• Project vs Utility usage distribution\n\n" +
        "Equipment Fuel Consumption (Separate Register):\n\n" +
        "• Tracks fuel usage for equipment like excavators\n" +
        "• Maintains a separate log to avoid duplication\n" +
        "• Helps monitor daily fuel consumption entries",
      
      image: "/docs/analytics/consumption-1.png",
    },

    {
      heading: "Filters & Consumption Lines",
      content:
        "This section helps users find and understand detailed consumption data easily.\n\n" +

        "Filters:\n\n" +
        "• Select date range to view specific period data\n" +
        "• Filter by project or material\n" +
        "• Choose class, BOQ type, and usage type\n" +
        "• Helps quickly find required records\n\n" +

        "Consumption Lines:\n\n" +
        "• Displays detailed material usage entries\n" +
        "• Includes opening, issued, returned, and net quantity\n" +
        "• Shows estimated value for each entry\n" +
        "• Helps track daily consumption clearly",
      
      image: "/docs/analytics/consumption-2.png",
    },
  ],
};

