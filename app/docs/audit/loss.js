export const lossDocs = {
  title: "Loss Register",

  description:
    "Tracks material losses, categorization, approval workflow, and financial impact. This module ensures proper recording, validation, and accountability for inventory losses.",

  sections: [
    {
      heading: "Loss Register Overview",
      content:
        "The Loss Register provides a centralized view of all inventory losses recorded in the system.\n\nIt captures loss details such as material, quantity, category, reason, financial impact, and approval status. This ensures transparency and proper tracking of material wastage or damage across the site.\n\nKey summary metrics include:\n\n• Total Entries → Total number of loss records\n• Pending Approval → Loss entries awaiting authorization\n• Total Value → Overall financial impact of losses\n• Approved Value → Value of losses approved and accounted\n\nThis helps management monitor loss trends and control unnecessary wastage.",
      image: "/docs/audit/loss-register-1.png",
    },

    {
      heading: "Loss Reports Table",
      content:
        "The Loss Reports table displays all recorded loss entries in a structured format.\n\nEach row contains:\n\n• Date → When the loss occurred\n• Material → Affected material/item\n• Quantity → Quantity lost with unit\n• Category → Type of loss (Wastage, Damage, Theft, etc.)\n• Reason → Explanation of the loss\n• Value → Financial impact of the loss\n• Status → Approval state (Approved / Pending)\n• Actions → Approval or tracking details\n\nExample:\nCement (OPC 53) – 5 Bags lost due to moisture damage.\n\nThis table acts as an official loss log for audit and financial tracking.",
       image: "/docs/audit/loss-register-2.png",
      },
    {
  heading: "Add Loss Entry",
  content:
    "Steps:\n\n• Click '+ Add Loss Entry'\n• Select Material\n• Enter Quantity and Unit\n• Choose Loss Category\n• Enter Reason for loss\n• Enter Financial Impact (₹)\n• Click 'Add Loss Entry'\n\nOptional:\n• Click 'Cancel' to clear the form\n\nBest Practices:\n• Always enter a clear and valid reason\n• Ensure quantity and value are accurate\n• Use correct category for proper reporting\n• Avoid duplicate entries",

  video: "/docs/audit/loss-entry-video.mp4",
},

    {
      heading: "Loss Approval Workflow",
      content:
        "Loss entries follow an approval process:\n\n1. Entry Created → Recorded by store/user\n2. Pending Approval → Awaiting authorization\n3. Approved → Verified and accepted\n4. Recorded in Financial Impact → Reflected in reports\n\nApproved losses are considered final and affect inventory valuation.\n\nThis workflow ensures controlled and authorized handling of losses.",
    },

    {
      heading: "Business Importance",
      content:
        "The Loss Register is critical for:\n\n• Controlling material wastage\n• Identifying damage patterns\n• Preventing misuse or theft\n• Financial accountability\n• Audit compliance\n\nWithout this module, inventory discrepancies cannot be properly justified or tracked.",
    },
  ],
};