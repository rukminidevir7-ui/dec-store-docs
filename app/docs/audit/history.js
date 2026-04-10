export const historyDocs = {
  title: "Audit History",

  description:
    "Audit History provides a complete record of all previously conducted stock audits, including their status, type, and execution details. It enables users to review past audits, track completion, and ensure audit compliance over time.",

  sections: [
    {
      heading: "Audit History Overview",
      content:
        "The Audit History screen displays a tabular view of all audits conducted in the system.\n\nEach row represents a completed or recorded audit instance and provides a quick summary of key audit details. This helps users track audit activities over time and verify that audits are conducted as per schedule.",
      image: "/docs/audit/audit-history-1.png",
    },
    {
      heading: "Audit Details Columns",
      content:
        "Each audit entry contains the following key fields:\n\n• Audit No → Unique identifier for each audit (e.g., AUDIT-001)\n• Date → The date on which the audit was conducted\n• Store / Site → Location where the audit was performed\n• Type → Audit type (e.g., Full Stock, Partial, Cycle Count)\n• Items → Total number of items/materials included in the audit\n• Status → Final state of the audit (Completed / Open / In Progress)\n\nThese fields provide a quick and structured summary of every audit conducted.",
    },
    {
      heading: "Audit Status Understanding",
      content:
        "The Status field indicates the lifecycle stage of each audit:\n\n• COMPLETED → Audit process finished (Count → Variance → Approval → Adjustment → Closure)\n• OPEN → Audit initiated but not completed\n• IN PROGRESS → Counting or validation still ongoing\n\nIn the current screen, all audits are marked as COMPLETED, indicating that they have successfully passed through the full audit workflow.",
    },
    {
      heading: "Audit Traceability & Compliance",
      content:
        "Audit History plays a critical role in ensuring traceability and compliance:\n\n• Maintains historical record of all audits\n• Enables audit verification for internal and external audits\n• Helps identify audit frequency and adherence to policies\n• Provides evidence for stock validation and financial reconciliation\n\nThis ensures transparency and accountability in inventory management.",
    },
    {
      heading: "How It Connects to Audit Workflow",
      content:
        "Audit History represents the final stage of the audit lifecycle:\n\n• Create Audit → Audit initiated\n• Count → Physical stock captured\n• Variance → Differences identified\n• Approval → Authorized validation\n• Adjustment → Stock updated in system\n• Closure → Audit finalized\n\nOnce closed, audits are stored in Audit History for future reference and analysis.",
    },
    {
      heading: "Key Usage Scenarios",
      content:
        "• Reviewing past audits for discrepancies\n• Verifying whether audits were completed on time\n• Cross-checking stock corrections made during audits\n• Supporting financial and compliance audits\n• Tracking audit performance across locations\n\nThis screen acts as a central repository for all audit records.",
    },
  ],
};