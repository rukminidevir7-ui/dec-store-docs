import { returnsOverviewDocs } from "./overview";
import { materialReturnsDocs } from "./material-returns";
import { returnableReturnsDocs } from "./returnable-returns";
import { rgpTrackerDocs } from "./rgp-tracker";

export const returnsDocs = {
  Overview: returnsOverviewDocs,
  "Material Returns": materialReturnsDocs,
  "Returnable Returns": returnableReturnsDocs,
  "RGP Tracker": rgpTrackerDocs,
};