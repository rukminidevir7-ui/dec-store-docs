import { consumptionDocs } from "./consumption";
import { blockDocs } from "./block";
import { trendsDocs } from "./trends";
import { vendorDocs } from "./vendor";
import { reorderDocs } from "./reorder";
import { procurementDocs } from "./procurement";
import { transferDocs } from "./transfer";

export const analyticsDocs = {
  "Consumption Ledger": consumptionDocs,
  "Block/Activity Consumption": blockDocs,
  "Stock Trends": trendsDocs,
  "Vendor Performance": vendorDocs,
  "Reorder Planning": reorderDocs,
  "Procurement Flow": procurementDocs,
  "Transfer Check": transferDocs,
};