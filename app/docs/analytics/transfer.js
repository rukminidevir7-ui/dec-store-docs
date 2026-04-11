export const transferDocs = {
  title: "Transfer Check",
  description: "Monitor transfer accuracy.",

  sections: [
    {
      heading: "Transfer Reconciliation Overview",
      content:
        "This screen helps users track and verify material transfers between sites.\n\n" +

        "Summary Cards:\n\n" +
        "• Total Transfers → Total number of transfers\n" +
        "• Reconciled → Completed and matched transfers\n" +
        "• In Transit → Materials currently moving\n" +
        "• Open/Pending → Transfers not yet completed\n\n" +

        "Search & Filter:\n\n" +
        "• Search by transfer ID, site, project, or dispatch reference\n" +
        "• Filter to view all or only pending transfers\n\n" +

        "Transfer Details Table:\n\n" +
        "• Shows transfer number and date\n" +
        "• Displays source and destination (From → To)\n" +
        "• Shows project and dispatch reference\n" +
        "• Receiving MRN indicates material received status\n" +
        "• Reconciliation status shows current stage (In Transit, Completed, etc.)\n\n" +

        "Overall:\n\n" +
        "• Ensures materials are properly transferred and received\n" +
        "• Helps avoid missing or mismatched records\n" +
        "• Improves tracking and control between sites",
      
      image: "/docs/analytics/transfer.png",
    },
  ],
};