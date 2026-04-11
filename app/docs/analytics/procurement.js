export const procurementDocs = {
  title: "Procurement Flow",
  description: "Manage procurement lifecycle.",

  sections: [
    {
      heading: "Procurement Pipeline Overview",
      content:
        "Procurement Pipeline tracks the complete flow of materials from request to delivery.\n\nPurpose:\n\n• Track materials from MRR → PO → MRN\n• Monitor ordered vs delivered quantities\n• Identify pending deliveries\n• Track procurement progress and status\n\nTop Summary Cards:\n\n• Open POs\n• Full Receipt\n• Partial Receipt\n• Total Pending\n\nMain Elements:\n\n• Search → Find using PO, MRR, vendor, material\n\nTable Fields:\n\n• MRR Ref\n• PO No\n• PO Date\n• Vendor\n• Material\n• Requested\n• Ordered (PO)\n• Delivered (MRN)\n• Pending\n• Progress\n• Status",
      image: "/docs/analytics/procurement.png",
    },
  ],
};