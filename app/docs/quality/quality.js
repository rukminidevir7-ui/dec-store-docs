import { qcInspectionDocs } from "./qc-inspections";
import { rejectionsDocs } from "./rejections";
import { qcReturnDocs } from "./qc-return";
import { batchDocs } from "./batch";
import { expiryDocs } from "./expiry";
import { certificatesDocs } from "./certificates";

export const qualityDocs = {
  "QC Inspections": qcInspectionDocs,
  "Rejections Register": rejectionsDocs,
  "QC Return to Vendor": qcReturnDocs,
  "Batch Traceability": batchDocs,
  "Expiry Monitor": expiryDocs,
  "Test Certificates": certificatesDocs,
};