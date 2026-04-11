export const toleranceDocs = {
  title: "Tolerances",
  description: "Define acceptable variance limits.",

  sections: [
    {
      heading: "Tolerances Overview",
      content:
        "Tolerances page is used to define acceptable limits for stock differences, QC rejection, and purchase receipt variations.\n\nPurpose:\n\n• Control acceptable stock variance during audits\n• Define QC rejection limits for quality checks\n• Restrict excess quantity during PO receipt\n• Ensure compliance and reduce inventory discrepancies\n\nMain Elements:\n\n• Stock Variance Limit (%) → Maximum allowed difference between book and physical stock\n• QC Reject Reference (%) → Acceptable rejection % for quality control\n• PO Receipt Allowed Excess (%) → Maximum excess allowed over PO quantity\n\nAction:\n\n• Click 'Save Tolerances' to apply settings",
      image: "/docs/master/tolerances-1.png",
    },

    // {
    //   heading: "Set Tolerances",
    //   content:
    //     "Steps:\n\n• Enter Stock Variance Limit (%)\n• Enter QC Reject Reference (%)\n• Enter PO Receipt Allowed Excess (%)\n\n• Click 'Save Tolerances'",
    //   video: "/docs/master/tolerances-video.mp4",
    // },
  ],
};