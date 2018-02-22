import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.hacker.noun()} ${faker.hacker.verb()}`;
  },
  enabled() {
    return faker.random.boolean();
  },
  created() {
    return faker.date.past();
  },
  modified() {
    return faker.date.between(this.created, faker.date.recent());
  },
  logo() {
    return faker.random.boolean() ? faker.image.image() : '';
  },
  telegram() {
    return faker.random.boolean();
  },
  whatsup() {
    return faker.random.boolean();
  },

  afterCreate(bot, server) {
    server.createList('category', 10, { bot });
  },
});
