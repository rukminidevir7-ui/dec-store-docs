export const steelDocs = {
  title: "Steel Inventory",
  description: "Tracks steel stock based on size and grade.",

  sections: [
    {
      heading: "Steel Inventory Overview",
      content:
        "This screen shows complete details of steel materials (TMT bars).\n\n" +

        "TMT Stock:\n\n" +
        "• Displays steel based on diameter (8mm, 10mm, etc.)\n" +
        "• Shows weight (MT) and number of pieces (Nos)\n" +
        "• Unit weight helps understand weight per meter\n\n" +

        "Stock Details:\n\n" +
        "• Theoretical Weight → Expected weight\n" +
        "• Actual Weight → Available stock weight\n" +
        "• Difference (Δ Weight) → Variation between expected and actual\n\n" +

        "Stock Status:\n\n" +
        "• OK → Stock is normal\n" +
        "• WATCH → Need attention\n" +
        "• CRITICAL → Immediate action required\n\n" +

        "Cut-Piece Bank:\n\n" +
        "• Shows remaining cut steel pieces\n" +
        "• Helps reuse leftover materials\n" +
        "• Reduces material wastage\n\n" +

        "Other Features:\n\n" +
        "• Search by diameter, weight, or pieces\n" +
        "• Filter stock levels\n" +
        "• Export data using CSV\n\n" +

        "Overall:\n\n" +
        "• Helps track steel stock in detail\n" +
        "• Useful for monitoring usage and reducing wastage\n" +
        "• Supports better inventory control",

      image: "/docs/inventory/materials/1.png",
    },

    {
      heading: "Stock vs Theoretical Comparison",
      content:
        "This screen compares expected weight with actual stock weight.\n\n" +

        "Theoretical Weight:\n\n" +
        "• Calculated based on number of pieces and standard weight\n" +
        "• Shows how much stock should be available\n\n" +

        "Book Weight (Site):\n\n" +
        "• Actual stock available in system\n" +
        "• Comes from inventory records\n\n" +

        "Difference:\n\n" +
        "• Shows variation between actual and expected weight\n" +
        "• Positive (+) means extra stock\n" +
        "• Negative (-) means shortage\n\n" +

        "Stock Status:\n\n" +
        "• OK → No major difference\n" +
        "• Helps verify stock accuracy\n\n" +

        "Overall:\n\n" +
        "• Helps identify mismatch in stock\n" +
        "• Useful for audit and verification\n" +
        "• Ensures correct inventory tracking",

      image: "/docs/inventory/materials/2.png",
    },
  ],
};