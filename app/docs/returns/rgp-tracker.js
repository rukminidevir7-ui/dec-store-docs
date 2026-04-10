export const rgpTrackerDocs = {
  title: "RGP Tracker",

  description:
    "Tracks returnable gate passes (RGP) and monitors open, overdue, and financial risk items.",

  sections: [
    {
      heading: "RGP Tracker Screen",
      content:
        "This screen shows all issued returnable gate passes and their current status.\n\nTop Alert:\n\n• Financial Risk →  when RGP is open for more than 15 days\n\nTable Fields:\n\n• Gate Pass No → Unique RGP number (e.g., GP-0001)\n• Date → Date of issue\n• From → To → Movement between locations (Site A → Site B)\n• Items → Item name and quantity\n• Days Open → Number of days since issue\n• Status → Current state (Issued / Returned)\n• Risk Badge → Financial Risk if overdue\n• Action → Mark as Returned\n\nThis helps track all open and overdue returnable movements.",
      image: "/docs/returns/rgp-tracker-1.png",
    },

    
  ],
};