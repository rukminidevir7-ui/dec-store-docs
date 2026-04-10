export const materialReturnsDocs = {
  title: "Material Returns",

  description:
    "Handles the return of issued materials from site back to store. Ensures proper tracking, quantity validation, and inventory updates.",

  sections: [
    {
      heading: "Material Returns Overview",
      content:
        "Material Returns module is used to record materials returned from site to store.\n\nIt helps in:\n\n• Updating stock when materials are returned\n• Tracking returned quantities against issued items\n• Reducing wastage and excess consumption\n• Maintaining accurate inventory records\n\nEach return is linked to previously issued materials for proper traceability.",
      image: "/docs/returns/material-returns-1.png",
    },

    {
      heading: "Create Material Return",
      content:
        "Steps:\n\n• Click 'Create Material Return'\n• Verify Return Number (Auto-generated)\n• Select Return Date\n• Select Site / Project\n• Select Reference Issue (if applicable)\n• Add Material\n• Enter Return Quantity\n• Select Unit\n• Add Remarks (optional)\n• Click 'Save' or 'Submit'\n",
      video: "/docs/returns/material-return-video.mp4",
    },

    {
      heading: "Business Importance",
      content:
        "Material Returns are important for:\n\n• Recovering unused materials\n• Reducing project cost\n• Improving stock accuracy\n• Tracking excess issue patterns\n• Supporting audit and reconciliation\n\nProper return management ensures efficient material utilization.",
    },
    
  ],
};