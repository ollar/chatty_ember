import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('header/site-logo', 'Integration | Component | header/site logo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{header/site-logo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#header/site-logo}}
      template block text
    {{/header/site-logo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
