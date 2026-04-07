import { issueSlipDocs } from "./issue-slip";
import { directIssueDocs } from "./direct-issue";
import { returnableIssuesDocs } from "./returnable-issues";
import { fuelAllotmentDocs } from "./fuel-allotment";
import { siteTransfersDocs } from "./site-transfers";
import { internalTransfersDocs } from "./internal-transfers";

export const outwardDocs = {
  "Issue Slip": issueSlipDocs,
  "Direct Issue": directIssueDocs,
  "Returnable Issues": returnableIssuesDocs,
  "Fuel Allotment": fuelAllotmentDocs,
  "Site Transfers": siteTransfersDocs,
  "Internal Transfers": internalTransfersDocs,
};