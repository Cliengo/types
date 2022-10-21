export type QuestionNode = {
  _id: string;
  order: number;
  ancestors: string[];
  parent: string;
  internalName: string;
  label: string;
}
