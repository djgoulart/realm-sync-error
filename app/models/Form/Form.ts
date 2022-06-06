
import Realm from "realm";
import { Author } from "./Author";
import { Section } from "./Section";

type IForm = {
  _id?: Realm.BSON.ObjectId;
  _partition: string;
  active?: boolean;
  author?: Author;
  name: string;
  sections: Realm.List<Section>;
}

type IFormObject = IForm & Realm.Object;

class Form {
  _id?: Realm.BSON.ObjectId;
  _partition: string;
  active?: boolean;
  author?: Author;
  name: string;
  sections: Realm.List<Section>;

  static schema: Realm.ObjectSchema = {
    name: 'Form',
    properties: {
      _id: 'objectId?',
      _partition: 'string',
      active: 'bool?',
      author: 'Author',
      name: 'string',
      sections: 'Section[]',
    },
    primaryKey: '_id',
  }
}

export { Form, IFormObject }
