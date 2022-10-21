export interface Website {
  id: string;
  url: string;
  creationDate: Date;
  email: string;
  companyId: string;
  title: string;
  tags: string[];
  enableChat: boolean;
  labs: JsonObject;
  deleted: boolean;
  scriptInstalled: boolean;
  availableSmartTriggers: string[];
  assignPriority: string[];
  autoAssign: JsonValue[];
  wavyAccessToken?: string;
  type?: string;
  isWhatsAppChat: boolean;
}
