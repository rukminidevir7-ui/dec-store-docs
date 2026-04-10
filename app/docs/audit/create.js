export const createAuditDocs = {
  title: "Create Audit",

  description:
    "Create Audit is used to perform physical stock verification by comparing system stock with actual counted stock. It enables users to identify variances, capture reasons, and proceed with approval and adjustment workflows.",

  sections: [
    {
      heading: "Load Count Sheet",
      content:
        "• Click 'Load Count Sheet' to fetch all materials available in the selected yard/location\n• System loads stock data including Material Name, Category, and UOM\n• Displays Book Quantity (system stock) for each material\n• Initializes Physical Quantity field for entering actual counted stock\n• Variance is automatically calculated based on Book vs Physical\n• Status is auto-derived (Matched / Excess / Shortage)\n\nThis step prepares the audit sheet by bringing system stock into a working grid for physical verification.",
      image: "/docs/audit/create-audit-1.png",
    },
    {
      heading: "Physical Count Entry & Variance Analysis",
      content:
        "• Enter Physical Quantity based on actual counted stock\n• System auto-calculates Variance = Physical - Book\n• Variance % is also calculated for deviation tracking\n• Select Reason for variance (Damage, Loss, Theft, Measurement Error, etc.)\n• Status updates dynamically:\n  - MATCHED → No difference\n  - EXCESS → Physical > Book\n  - SHORTAGE → Physical < Book\n\n• Each material line acts as an independent audit record\n• Helps identify discrepancies at item level\n• Enables accurate root cause tracking for stock differences\n\nThis step is the core of audit where actual stock is validated against system records.",
      image: "/docs/audit/create-audit-2.png",
    },
    {
      heading: "Audit Workflow Execution",
      content:
        "After completing count entry, the audit follows structured workflow:\n\n• Count → Physical stock entry completed\n• Variance → System identifies differences automatically\n• Reason → User selects appropriate reason for each variance\n• Approval → Submitted audit requires authorization approval\n• Adjustment → Approved variances update system stock\n• Closure → Audit is finalized and locked\n\nThis ensures controlled stock correction with full audit trail.",
    },
    {
      heading: "Clear Sheet Functionality",
      content:
        "• Click 'Clear Sheet' to remove loaded audit data\n• Resets all entered physical quantities and variance calculations\n• Clears the grid and returns to initial state\n• Used when user wants to restart audit process\n• Prevents incorrect submissions by allowing clean re-entry\n\nThis ensures flexibility and avoids data errors during audit preparation.",
    },
    {
      heading: "Key Controls & Best Practices",
      content:
        "• Always verify yard/location before loading count sheet\n• Ensure physical counting is completed before data entry\n• Avoid leaving variance without reason\n• Double-check high variance items before submission\n• Submit audit only after full verification\n• Ensure approvals are completed before adjustment\n\nFollowing these ensures accuracy, accountability, and compliance in stock audits.",
    },
  ],
};