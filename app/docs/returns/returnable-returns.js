export const returnableReturnsDocs = {
  title: "Returnable Returns",

  description:
    "Tracks return of issued returnable items like shuttering plates, tools, etc.",

  sections: [
  
    {
      heading: "Record Return",
      content:
        "Steps:\n\n• Click 'Record Return'\n• Select Original Issue Ref\n• Select Return Date\n• Verify Item (auto-filled)\n• Enter Returned Quantity\n• Enter Damaged Quantity (if any)\n• Enter Missing Quantity (if any)\n• Enter Return Condition (Good / Damaged)\n• Select Destination Yard\n• Enter Penalty / Recovery (₹ if applicable)\n• Enter Checked By\n• Click 'Record Return'\n",
      video: "/docs/returns/returnable-return-video.mp4",
    },
    {
      heading: "Returnable Returns Screen",
      content:
        "This screen shows all returnable return entries.\n\nTable Fields:\n\n• Return Ref → Unique return number (e.g., RRET-001)\n• Original Issue → Reference issue number (e.g., RISS-001)\n• Return Date → Date of return\n• Item → Name of returnable item\n• Returned → Quantity returned\n• Damaged → Damaged quantity\n• Missing → Missing quantity\n• Condition → Item condition (Good / Damaged)\n• Status → Return status (Received)\n\nTop Actions:\n\n• Search → Find by return ref / issue ref / item\n• Record Return → Add new return entry",
      image: "/docs/returns/returnable-returns-1.png",
    },
  ],
};