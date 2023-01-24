export type AssignPriority = 'TRIGGER' | 'INTERVENED' | 'ROUND_ROBIN';

export enum TEMPLATE_CODE {
  LEAD = 'lead',
  AUTOCONFIG = 'autoconfig',
  ADVANCEDCONVERSATION = 'advancedConversation',
  ECOMMERCE = 'ecommerce',
  TIENDANUBE = 'tiendaNube',
}

export type ChatbotConfigLang = 'es' | 'en' | 'pt';

export enum QuestionResponseType {
  TEXT = 'TEXT',
  NONE = 'NONE',
  NAME = 'NAME',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  REGEX = 'REGEX',
  EMAIL_OR_PHONE = 'EMAIL_OR_PHONE',
  LIST = 'LIST',
}

export type Question = {
  _id: string;
  id: number;
  order: number;
  interface_configuration: {
    restricted_actions: string[];
    label: string;
  };
  text: string[];
  retry_text: string[];
  disabled: boolean;
  question_type: 'text/plain' | string;
  parent?: string;
  children?: Question[];
  response_type: QuestionResponseType;
  response_options: string[];
  assigned_to: string[];
  slot_id: string;
  is_default_question: boolean;
  conditions_to_show: {
    [key: string]: JsonObject;
  };
  required: boolean;
  alternative_texts: {
    _id: string;
    name: 'business-hours' | 'offline-mode';
    text: string;
    conditions_to_show: {
      all: string[];
    };
  }[];
  autodetect: JsonValue[];
  actions: JsonObject[];
  internal_name: string;
  tag: string | null;
  go_to_internal_name?: string | null;
};

export type interfaceConfig =
  | 'canBeDeleted' // can have the trash icon
  | 'canBeEdited' // can have the pencil icon
  | 'canBeMarkedAsRequired' // can have the required checkbox
  | 'canBeDisabled' // can have the switch on/off
  | 'canBeMoved' // can use drag and drop
  | 'canChangeResponseType' // can change the response type
  | 'isHidden' // can't be seen
  | 'isReadOnly' // can't be edited and hace the lock icon
  | 'canHaveChildrens'; // can have childrens

export interface ChatbotConfig {
  id: string;
  _id?: string;
  website_id: string;
  company_id: string;
  chatbotName: string;
  tags: string[];
  creation_date: string;
  update_date: string;
  assign_priority: AssignPriority[];
  template_code: TEMPLATE_CODE;
  lang: ChatbotConfigLang;
  group_conditions: JsonValue[];
  question_list: Question[];
  shut_up_message?: string;
  special_messages: {
    are_you_there: string[];
    finding_operator_start: string;
    finding_operator_timeout: string;
  };
  welcome_back_messages: {
    channel: string;
    type: string;
    enabled: boolean;
    fire_after: number;
    has_custom_text: boolean;
    messages: {
      type: string | null;
      text: string[];
      response_type: string;
      response_options: string[];
      internal_name: string | null;
    }[];
    _id: string;
  }[];
}
