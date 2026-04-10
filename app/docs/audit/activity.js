export const activityDocs = {
  title: "Activity Log",

  description:
    "Provides a complete, immutable history of all system activities including creation, updates, approvals, and status changes. Ensures full traceability and audit compliance.",

  sections: [
    {
      heading: "Activity Log Overview",
      content:
        "The Activity Log records every action performed in the system, ensuring transparency and accountability.\n\nAll operations such as creation, approval, modification, and status updates are automatically logged.\n\nKey Features:\n\n• Immutable Records → No deletion of logs\n• Full Traceability → Track who did what and when\n• Audit Compliance → Supports internal and external audits\n• Real-time Tracking → Captures system activities instantly\n\nThis ensures that every inventory and audit-related action is fully traceable.",
      image: "/docs/audit/activity-log-1.png",
    },

    {
      heading: "Understanding Activity Log Table",
      content:
        "Each row in the Activity Log represents a recorded system action.\n\nFields explanation:\n\n• Timestamp → Date and time of the action\n• Transaction Type → Type of process (MRN, Outward, Audit, etc.)\n• Reference (Ref) → Unique document number (e.g., MRN-884)\n• Action → Operation performed (Created, Approved, Updated)\n• Field → Field that was modified (if applicable)\n• Old → New → Shows value change (e.g., Draft → Approved)\n• User → Person who performed the action\n• Reason → Optional comment or justification\n\nExample:\n• OUT-0001 → Status changed from Draft to Approved by Store Head\n• MRN-884 → Created by Store Keeper\n\nThis helps track exact changes in the system.",
    },

    {
      heading: "Search and Filter Activities",
      content:
        "Users can quickly find specific records using search and filters.\n\nSteps:\n\n• Use search bar to find by Ref, User, or Action\n• Select filter dropdown to filter by transaction type\n• Review matching activity records instantly\n\nThis makes it easy to track specific transactions or user actions.",
    },

    {
      heading: "Types of Activities Tracked",
      content:
        "The system logs various types of actions:\n\n• Created → New record added\n• Updated → Existing record modified\n• Approved → Record approved by authority\n• Cancelled → Record cancelled\n• Status Changes → Workflow transitions (Draft → Approved)\n\nEach action is recorded with user and timestamp for accountability.",
    },

    {
      heading: "Business Importance",
      content:
        "The Activity Log is critical for:\n\n• Audit tracking and compliance\n• Investigating discrepancies\n• Monitoring user actions\n• Ensuring data integrity\n• Preventing unauthorized changes\n\nSince logs cannot be deleted, it guarantees a reliable audit trail for the system.",
    },
  ],
};