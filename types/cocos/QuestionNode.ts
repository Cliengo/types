export type QuestionNode = {
  _id: string;
  order: number;
  ancestors: string[];
  descendants: string[];
  parent: string;
  internalName: string;
  responseOptions: string[];
}
