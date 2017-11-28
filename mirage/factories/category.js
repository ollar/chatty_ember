import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  pattern() {
    return faker.hacker.phrase();
  },
  template() {
    return faker.hacker.phrase();
  },
});
