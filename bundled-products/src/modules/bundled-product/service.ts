import { MedusaService } from "@medusajs/framework/utils"
import { Bundle } from "./models/bundle";
import { BundleItem } from "./models/bundle-item";

export default class BundledProductModuleService extends MedusaService({
  Bundle,
  BundleItem,
}) {
}
