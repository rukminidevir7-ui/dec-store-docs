export const steelDocs = {
  title: "Steel Specs",
  description: "Define steel specifications and standard weight calculations for steel bars.",

  sections: [
    {
      heading: "Steel Specs – Diameter & Weight Master",
      content:
        "This screen defines standard steel bar specifications based on diameter and weight calculations.\n\nTable Overview:\n\nEach row represents a standard steel diameter with pre-defined weight values used across the system.\n\n• Diameter → Size of steel bar (e.g., 8mm, 10mm, 12mm up to 40mm)\n• Unit Weight (kg/m) → Standard weight per meter for that diameter\n• Weight per 12m Bar (kg) → Total weight of a standard 12-meter bar\n• Weight per 12m Bar (MT) → Same weight converted into metric tons\n\nPurpose of Table:\n\n• Standardizes steel weight calculations across system\n• Avoids manual calculation errors during inward/issue\n• Ensures accurate quantity-to-weight conversion\n• Used in MRN (Material Receipt), Issue, and Consumption tracking\n\nTheoretical Weight Formula:\n\n• The system uses a predefined formula to calculate steel weight:\n\nTheoretical (MT) = (Pieces × Length × Unit Weight) / 1000\n\nExplanation:\n\n• Pieces → Number of steel bars\n• Length → Length of each bar (default: 12 meters)\n• Unit Weight → Weight per meter from table\n• Division by 1000 converts kg to metric tons\n\nSystem Usage:\n\n• Auto-calculates steel weight during inward entry\n• Validates vendor supplied weight vs theoretical weight\n• Helps in variance analysis and audit\n• Supports QC and rejection tracking\n\nNote:\n\n• All values are based on standard IS specifications\n• Length is typically considered as 12m unless specified otherwise\n• These values are critical for accurate inventory and billing",
      image: "/docs/master/steel-specs.png",
    },
  ],
};