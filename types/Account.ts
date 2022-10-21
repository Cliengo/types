interface Labs {
  emptystate_leads: boolean;
  nexted_answers: boolean;
}

interface QuickstartSteps {
  CREATE_ACCOUNT_COMPLETED: boolean;
  CHOOSE_APPEARANCE_VISITED: boolean;
  CHOOSE_APPEARANCE_COMPLETED: boolean;
  CUSTOMIZE_CONVERSATION_VISITED: boolean;
  CUSTOMIZE_CONVERSATION_COMPLETED: boolean;
  CREATE_AUTOMATIC_REPLY_VISITED: boolean;
  CREATE_AUTOMATIC_REPLY_COMPLETED: boolean;
  INSTALL_CHATBOT_VISITED: boolean;
  INSTALL_CHATBOT_COMPLETED: boolean;
  COMPLETE_INFO_VISITED: boolean;
  COMPLETE_INFO_COMPLETED: boolean;
}

export interface Account {
  id: string;
  email: string;
  phone: string;
  name: string;
  contactName: string;
  taxId: string;
  creationDate: Date;
  whiteLabelId: string;
  whiteLabelName: string;
  isCliengoReseller: boolean;
  whiteLabelLogoUrl: string;
  whiteLabelEmail: string;
  taxIdName: string;
  leadCount: number;
  leadLimit: number;
  leadCountTotal: number;
  googleMccId: string;
  preSelectedLeads: number;
  language: string;
  timeZone: string;
  leadResetDate: Date;
  daysToLeadResetDate: number;
  vertical: string;
  companySize: string;
  businessTeamSize: string;
  registerRole: string;
  registerPhone: string;
  knowledgeOrigin: string;
  countryId: string;
  planCurrency: string;
  planName: string;
  labs: Labs;
  chatUrl: string;
  hasSubscription: boolean;
  forceChargebee: boolean;
  forceMercadoPago: boolean;
  quickstartSteps: QuickstartSteps;
  shouldFireScriptPixel: boolean;
  affiliateProgramCode: string;
  affiliate: string;
  allowReferralAccess: boolean;
  marketingCampaignsInfo: JsonObject;
  shouldFirePaymentPixel: boolean;
  hashId: string;
  hasInstalledScript: boolean;
  scriptInstallTimestamp: number;
  isWhatsAppFree: boolean;
  isWhatsAppBasic: boolean;
  showNewPlans: boolean;
  isWhitelabelFlex: boolean;
  hideLeads: boolean;
  autoBuyLeadPackageEnabled: boolean;
  autoBuyConversationPackageEnabled: boolean;
  customUOCLimit: number;
  autoRefreshContactsList: boolean;
  communicationChannels: string[];
  channel: string;
  ecommercePlatform: string;
  unitCountConversation: number;
  unitLimitConversation: number;
  unitHsm: number;
  unitLimitHsm: number;
  isMercadoPago1: boolean;
}
