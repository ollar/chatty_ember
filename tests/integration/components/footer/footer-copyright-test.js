import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('footer/footer-copyright', 'Integration | Component | footer/footer copyright', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{footer/footer-copyright}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#footer/footer-copyright}}
      template block text
    {{/footer/footer-copyright}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
