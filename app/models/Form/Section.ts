import Realm from "realm";
import { Question } from "./Question";

type ISection = {
  active?: boolean;
  name?: string;
  order?: number;
  questions: Realm.List<Question>;
  visibleForTypes: Realm.List<string>;
};

type ISectionObject = ISection & Realm.Object;

class Section {
  active?: boolean;
  name?: string;
  order?: number;
  questions: Realm.List<Question>;
  visibleForTypes: Realm.List<string>;

  static schema = {
    name: 'Section',
    embedded: true,
    properties: {
      active: 'bool?',
      name: 'string?',
      order: 'int?',
      questions: 'Question[]',
      visibleForTypes: 'string[]',
    },
  }
};

export { Section, ISectionObject }
