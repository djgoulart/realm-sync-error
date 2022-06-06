import { createRealmContext } from '@realm/react';

import { AnswerOption } from './Form/AnswerOption';
import { Author } from './Form/Author';
import { Form } from './Form/Form';
import { Question } from './Form/Question';
import { Section } from './Form/Section';

const MainContext = createRealmContext({
  schema: [
    Form,
    Author,
    Section,
    Question,
    AnswerOption,
  ]
});

export { MainContext };
