export const unitsDocs = {
  title: "Units",
  description: "Define measurement units used in inventory.",

  sections: [
    
    {
      heading: "Add Unit",
      content:
        "Steps:\n\n• Click 'Add Unit'\n• Code\n• Name\n• Type\n• Base Unit\n• Conversion Factor\n\n• Click 'Save'",
      video: "/docs/master/units-video.mp4",
    },
    {
      heading: "Units Overview",
      content:
        "Units page is used to define and manage measurement units used across the system.\n\nPurpose:\n\n• Standardize measurement units for materials\n• Enable unit conversion (Kg, MT, Bags, etc.)\n• Ensure accurate quantity and value calculations\n\nMain Elements:\n\n• Units List → Displays all units with type and conversion\n\nFields:\n\n• Code → Unit short name (e.g., Kg, MT, Nos)\n• Name → Full unit name\n• Type → Category (Weight / Volume / Count / Area / Length)\n• Base Unit → Reference unit for conversion\n• Factor → Conversion value to base unit",
      image: "/docs/master/units-1.png",
    },

  ],
};