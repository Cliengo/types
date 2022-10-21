import { AppQuestion } from "./AppQuestion"
import { QuestionNode } from "./QuestionNode"

export type QuestionListType = {
  nodes: QuestionNode[],
  store: Record<string, AppQuestion>,
}
