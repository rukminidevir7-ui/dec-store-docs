export const yardMapDocs = {
  title: "Yard Map",

  description:
    "Displays visual layout of site storage yards and zones using geo-data.",

  sections: [
    {
      heading: "Yard Map Screen",
      content:
        "This screen shows the visual layout of storage areas in the site.\n\nMain Elements:\n\n• Site Map → Displays yard and storage locations\n• Category Filters → Filter by Civil / Electrical / Plumbing / etc.\n• Upload Geo-Data → Upload map layout data\n• Yards → Outdoor or temporary storage locations (always visible)\n\nFilters:\n\n• All → Show all categories\n• Civil / Electrical / Plumbing → Filter specific materials\n\nThis helps users understand where materials are stored physically.",
      image: "/docs/yard/yard-map-1.png",
    },
    {
  heading: "Upload Geo-Fencing Data",
  content:
    "Steps:\n\n• Click 'Upload Geo-Data'\n• Upload popup will open\n• Review Supported Formats:\n  - JSON format with stores array\n  - GeoJSON format (FeatureCollection)\n• Click 'Download Template' (optional for reference)\n• Click 'Choose File' and select JSON file\n• Click Upload / Confirm\n\nSupported Formats:\n\n• JSON → Custom store layout structure\n• GeoJSON → Standard map-based format\n",
  video: "/docs/store/yard-map-video.mp4",
}

  ],
};