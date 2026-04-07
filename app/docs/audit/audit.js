import { auditDashboardDocs } from "./dashboard";
import { createAuditDocs } from "./create";
import { varianceDocs } from "./variance";
import { historyDocs } from "./history";
import { lossDocs } from "./loss";
import { activityDocs } from "./activity";

export const auditDocs = {
  "Audit Dashboard": auditDashboardDocs,
  "Create Audit": createAuditDocs,
  "Variance & Adjustment": varianceDocs,
  "Audit History": historyDocs,
  "Loss Register": lossDocs,
  "Activity Log": activityDocs,
};