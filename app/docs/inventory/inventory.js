import { inventoryOverviewDocs } from "./overview/overview";

import { steelDocs } from "./materials/steel";
import { cementDocs } from "./materials/cement";
import { civilDocs } from "./materials/civil";
import { mepDocs } from "./materials/mep";
import { assetsDocs } from "./materials/assets";

import { fuelDocs } from "./categories/fuel";
import { groceryDocs } from "./categories/grocery";
import { clientOfficeDocs } from "./categories/client-office";
import { decOfficeDocs } from "./categories/dec-office";
import { othersDocs } from "./categories/others";
import { specialItemsDocs } from "./categories/special-items";
import { bitumenDocs } from "./categories/bitumen";

import { totalInventoryDocs } from "./stock/total";
import { stockStatusDocs } from "./stock/status";
import { reservationsDocs } from "./stock/reservations";
import { blockingDocs } from "./stock/blocking";

export const inventoryDocs = {
  Overview: inventoryOverviewDocs,

  /* MATERIALS */
  "Steel Inventory": steelDocs,
  "Cement Inventory": cementDocs,
  Civil: civilDocs,
  MEP: mepDocs,
  Assets: assetsDocs,

  /* CATEGORIES */
  Fuel: fuelDocs,
  Grocery: groceryDocs,
  "Client Office Supplies": clientOfficeDocs,
  "DEC Office Supplies": decOfficeDocs,
  Others: othersDocs,
  "Special Items": specialItemsDocs,
  "Bitumen Materials": bitumenDocs,

  /* STOCK */
  "Total Inventory": totalInventoryDocs,
  "Stock Status": stockStatusDocs,
  "Stock Reservations": reservationsDocs,
  "Stock Blocking": blockingDocs,
};