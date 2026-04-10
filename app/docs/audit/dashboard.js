export const auditDashboardDocs = {
  title: "Audit Dashboard",

  description:
    "The Audit Dashboard provides a centralized view of stock audit activities, tracking audit progress, variance identification, approval workflows, and closure status to ensure accurate inventory control and compliance.",

  sections: [
    {
      heading: "Audit Overview",
      content:
        "• View total number of audits created within the selected period\n• Monitor audits currently in progress (Open audits)\n• Track completed audits (Closed audits)\n• Identify audit lines pending approval before final closure\n• Get a quick snapshot of audit workload and status distribution\n\nThe dashboard helps users quickly understand the current audit situation without opening individual audit records.",
      image: "/docs/audit/audit-dashboard.png",
    },
    {
      heading: "Stock Audit Workflow",
      content:
        "Stock Audit follows a structured workflow to ensure accurate verification and controlled adjustments:\n\n• Count → Physical stock counting is performed at yard/store level\n• Variance → System compares physical count with system stock and identifies differences\n• Reason → User provides justification for variance (damage, loss, excess, etc.)\n• Approval → Variance entries are reviewed and approved by authorized personnel\n• Adjustment → Stock is adjusted in the system based on approved variance\n• Closure → Audit is finalized and locked to prevent further changes\n\nThis flow ensures transparency, accountability, and traceability of all inventory corrections.",
    },
    {
      heading: "Key Audit Metrics",
      content:
        "• Total Audits → Total number of audit records created\n• Open Audits → Audits that are still in progress and not yet completed\n• Closed Audits → Audits that are verified, approved, and finalized\n• Approval Required Lines → Number of variance entries pending approval\n\nThese KPIs help in monitoring audit efficiency and identifying bottlenecks in the approval or closure process.",
    },
    {
      heading: "Audit Control & Compliance",
      content:
        "• Ensures physical stock matches system stock through verification\n• Tracks all inventory discrepancies with proper audit trail\n• Prevents unauthorized stock adjustments without approval\n• Maintains accountability through approval workflow\n• Supports compliance and internal control requirements\n\nAudit Dashboard acts as a control layer to maintain inventory accuracy and reduce financial or operational risks.",
    },
    {
      heading: "User Actions & Usage",
      content:
        "• Review audit summary before starting new audits\n• Monitor pending approvals and take necessary action\n• Track open audits to ensure timely completion\n• Verify closure status to confirm audit completion\n• Use dashboard insights to plan periodic stock audits\n\nThis helps users manage audits efficiently and maintain continuous inventory accuracy.",
    },
  ],
};