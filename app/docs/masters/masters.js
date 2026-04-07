import { materialDocs } from "./material";
import { returnablesDocs } from "./returnables";
import { steelDocs } from "./steel";
import { vendorDocs } from "./vendor";
import { projectDocs } from "./project";
import { yardDocs } from "./yard";
import { unitsDocs } from "./units";
import { zoneDocs } from "./zone";
import { usersDocs } from "./users";
import { approvalDocs } from "./approval";
import { toleranceDocs } from "./tolerance";
import { alertsDocs } from "./alerts";
import { integrationsDocs } from "./integrations";

export const mastersDocs = {
  "Material Master": materialDocs,
  "Returnables Master": returnablesDocs,
  "Steel Specs": steelDocs,
  "Vendor Master": vendorDocs,
  "Project Master": projectDocs,
  "Yard Master": yardDocs,
  Units: unitsDocs,
  "Zone Rules": zoneDocs,
  "Users & Roles": usersDocs,
  "Approval Workflows": approvalDocs,
  Tolerances: toleranceDocs,
  Alerts: alertsDocs,
  Integrations: integrationsDocs,
};