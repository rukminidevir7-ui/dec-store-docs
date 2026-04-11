export const scrapStoreDocs = {
  title: "Scrap Store",
  description: "Manage stored scrap materials.",

  sections: [
    {
      heading: "Scrap Store Overview",
      content:
        "Scrap Store is used to track available scrap stock and record scrap sales.\n\nPurpose:\n\n• Monitor scrap inventory\n• Track source of scrap (QC rejection / returns)\n• Record scrap sales transactions\n• Track revenue generated from scrap\n\nMain Elements:\n\n• Scrap Stock → Available scrap materials\n• Scrap Sales → Sales history of scrap\n\nTable Fields (Scrap Stock):\n\n• Material\n• Quantity\n• Source\n\nTable Fields (Scrap Sales):\n\n• Sale No\n• Date\n• Buyer\n• Value (₹)",
      image: "/docs/scrap/store.png",
    },

    {
      heading: "Record Scrap Sale",
      content:
        "Steps:\n\n• Click 'Record Scrap Sale'\n• Internal Reference\n• Buyer\n• Date\n• Vehicle / Dispatch Reference\n• Material\n• Qty\n• Unit\n• Rate\n• Remarks\n• Click 'Record Sale'\n\nOptional:\n• Click 'Cancel'",
      video: "/docs/scrap/store-video.mp4",
    },
  ],
};