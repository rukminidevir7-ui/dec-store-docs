export const returnablesDocs = {
  title: "Returnables Master",

  description: "Manage returnable materials like tools and equipment.",

  sections: [
    {
      heading: "Returnables Master Screen",
      content:
        "This screen is used to manage all returnable items such as tools, shuttering materials, and equipment.\n\nSearch & Navigation:\n\n• Search Bar → Quickly find items using item code, description, or category\n• Add Item Button → Opens form to create a new returnable item\n\nReturnables Table Overview:\n\nEach row represents a returnable item with complete tracking configuration.\n\n• Item Code → Unique identifier for each returnable item (e.g., SHUT-01)\n• Description → Name of the item (e.g., Shuttering Plates, Props)\n• Category → Type of returnable (Shuttering / Power Tools / etc.)\n• Unit → Measurement unit used for tracking (Nos, Set, etc.)\n\nControl & Tracking Fields:\n\n• Max Return Days → Maximum allowed duration before item must be returned\n• Inspection Frequency → Time interval for checking item condition (e.g., every 30/60/90 days)\n• Security → Indicates whether deposit/recovery is applicable (Yes / No)\n\nStatus Management:\n\n• Status → Shows whether item is ACTIVE and available for issue/return\n\nPurpose of Screen:\n\n• Standardize all returnable items\n• Define return timelines and inspection rules\n• Enable tracking of tools issued to site\n• Support return, damage, and recovery workflows",
      image: "/docs/master/returnables-master-1.png",
    },

    {
      heading: "Add Returnable Item",
      content:
        "Steps:\n\n• Click 'Add Item'\n• Item Code\n• Category\n• Description\n• Unit\n• Max Return Days\n• Inspection Frequency\n• Security / recovery applicable\n\n• Click 'Add Item''",
      video: "/docs/master/returnables-master-video.mp4",
    },
  ],
};