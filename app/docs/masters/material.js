export const materialDocs = {
  title: "Material Master",

  description:
    "Manage and maintain all materials used in the system with proper categorization, attributes, and units.",

  sections: [
    {
      heading: "Material Master Overview",
      content:
        "The Material Master page is used to create, view, and manage all materials used across projects.\n\nMain Features:\n\n• Material List → Displays all materials (e.g., Fly Ash, Concrete, Steel)\n• Material Details → Shows type, category, sub-category, unit, and storage zone\n• Attributes → Additional material-specific information\n\nFilters & Controls:\n\n• Search Bar → Search by description, category, or code\n• Category Filter → Filter materials by category\n• Sub-Category Filter → Filter by sub-category\n• Sort Options:\n  - Description\n  - Category\n  - Code\n\nTop Actions:\n\n• Upload Item Master → Bulk upload materials using Excel\n• Item Count → Shows total number of materials\n\nMaterial Card Details:\n\n• Material Name → e.g., Fly Ash\n• Tags → Category, Sub-category, Zone\n• Unit → Default unit (Nos, MT, etc.)\n\nMaterial Information Section:\n\n• Type → Material type\n• Category → Main classification\n• Sub-Category → Detailed classification\n• Code Number → Unique identifier (if available)\n• Storage Zone → Assigned zone (Civil, Electrical, etc.)\n• Suggested Unit → Default unit for transactions\n\nAttributes Section:\n\n• Additional configurable properties of material\n\nThis page ensures standardized material definition across the system.",
      image: "/docs/master/material-master-1.png",
    },

    {
      heading: "Upload Item Master",
      content:
        "Steps:\n\n• Click 'Upload Item Master'\n• Select the Excel file\n• Upload and confirm",
      video: "/docs/master/material-master-video.mp4",
    },
  ],
};