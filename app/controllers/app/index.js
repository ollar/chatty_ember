import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  bots: computed.readOnly('model.bots'),
});
