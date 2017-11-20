import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index/try-for-free', 'Integration | Component | index/try for free', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{index/try-for-free}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#index/try-for-free}}
      template block text
    {{/index/try-for-free}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
