import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.hacker.noun()} ${faker.hacker.verb()}`;
  },
  enabled: true,
  created() {
    return faker.date.past();
  },
  modified() {
    return faker.date.between(this.created, faker.date.recent());
  },
  logo() {
    return faker.image.abstract();
  },
  telegram: false,
});
