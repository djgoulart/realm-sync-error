import Realm from "realm";
import { AnswerOption, IAnswerOptionObject } from "./AnswerOption";

type IQuestion = {
  answerOptions: Realm.List<AnswerOption>;
  order?: number;
  title?: string;
};

type IQuestionObject = IQuestion & Realm.Object;

class Question extends Realm.Object {
  order!: number;
  title!: string;
  answerOptions!: Realm.List<AnswerOption>;

  static schema = {
    name: 'Question',
    embedded: true,
    properties: {
      order: 'int?',
      title: 'string?',
      answerOptions: 'AnswerOption[]',
    },
  }
};

export { Question, IQuestionObject }
