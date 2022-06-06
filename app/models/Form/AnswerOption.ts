import Realm from "realm";

type IAnswerOption = {
  description?: string;
  order?: number;
  title?: string;
  value?: number;
}

type IAnswerOptionObject = IAnswerOption & Realm.Object;

class AnswerOption extends Realm.Object {
  order!: number;
  title!: string;
  description!: string;
  value!: number;

  static schema = {
    name: 'AnswerOption',
    embedded: true,
    properties: {
      order: 'int?',
      title: 'string?',
      value: 'int?',
      description: 'string?',
    }
  }
}

export { AnswerOption, IAnswerOptionObject }

