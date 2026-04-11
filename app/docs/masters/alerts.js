export const alertsDocs = {
  title: "Alerts",
  description: "Configure system alerts and notifications.",

  sections: [
    {
      heading: "Alerts Overview",
      content:
        "Alerts page is used to configure system notifications based on defined rules and thresholds.\n\nPurpose:\n\n• Monitor important conditions like low stock and QC issues\n• Trigger alerts when thresholds are crossed\n• Notify users through selected channels\n• Ensure timely action and prevent operational issues\n\nMain Elements:\n\n• Add Alert → Create new alert rule\n• Rule → Type of alert (e.g., Low Stock, QC Reject)\n• Threshold → Condition for triggering alert\n• Channel → Notification type (In-App, etc.)\n• Status → ON / OFF\n• Action → Enable / Disable alert",
      image: "/docs/master/alerts-1.png",
    },

    {
      heading: "Add Alert",
      content:
        "Steps:\n\n• Click 'Add Alert'\n\n• Rule\n• Threshold\n• Channel\n• Enabled\n\n• Click 'Add'",
      video: "/docs/master/alerts-video.mp4",
    },
  ],
};