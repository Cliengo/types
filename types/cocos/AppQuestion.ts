import { Question, QuestionResponseType } from "../ChatbotConfig"

export type AppQuestion = {
  _id: string,
    order: number,
    label: string,
    descriptions: string[],
    responseType: QuestionResponseType,
    ancestors: string[],
    responseOptions: string[],
    parent: string,
    internalName: string,
    showChildrens: boolean,
    disabled: boolean,
    required: boolean,
    assignedTo: string[],
    tag: string,
    alternativeTexts: Pick<Question['alternative_texts'][number], '_id' | 'text'>,
    isDefaultQuestion: boolean,
    interfaceConfig: {
      canBeDeleted: boolean,
      canBeEdited: boolean,
      canBeMarkedAsRequired: boolean,
      canBeDisabled: boolean,
      canBeMoved: boolean,
      canChangeResponseType: boolean,
      canHaveChildrens: boolean,
      isPremium: boolean,
      canCreateQuestions: boolean,
    }
}
