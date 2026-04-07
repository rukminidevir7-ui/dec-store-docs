import { dashboardPageDocs } from "./dashboard-page";
import { storeSummaryDocs } from "./store-summary";
import { receiptsIssuesDocs } from "./receipts-issues";
import { stockControlDocs } from "./stock-control";
import { consumptionDocs } from "./consumption-performance";
import { registersDocs } from "./registers-checks";

export const dashboardDocs = {
  Dashboard: dashboardPageDocs, 
  "Store Summary": storeSummaryDocs,
  "Receipts & Issues": receiptsIssuesDocs,
  "Stock Control": stockControlDocs,
  Consumption: consumptionDocs,
  Registers: registersDocs,
};