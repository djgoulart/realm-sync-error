import Realm from "realm";

type IAuthor = {
  _id?: string;
  _partition?: string;
  active?: boolean;
  domain?: string;
  domainGroup?: string;
  edifyId?: number;
  email?: string;
  name?: string;
}

type IAuthorObject = IAuthor & Realm.Object;

class Author {
  _id?: string;
  _partition?: string;
  active?: boolean;
  domain?: string;
  domainGroup?: string;
  edifyId?: number;
  email?: string;
  name?: string;

  static schema = {
    name: 'Author',
    embedded: true,
    properties: {
      _id: 'string?',
      _partition: 'string?',
      active: 'bool?',
      domain: 'string?',
      domainGroup: 'string?',
      edifyId: 'int?',
      email: 'string?',
      name: 'string?',
    },
  }
}

export { Author, IAuthorObject }
