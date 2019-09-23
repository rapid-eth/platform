import Provider from "./Provider";
import Injection from "./Portal";
import Component from "./Component";
import withContext from "./withContext";
import Api from "./api.js";

export const PortalProvider = Provider
export const PortalComponent = Component
export const PortalInjection = Injection
export const PortalWithContext = withContext
export const PortalApi = Api

export default {
  PortalProvider,
  PortalComponent,
  PortalInjection,
  PortalWithContext,
  PortalApi,
}
