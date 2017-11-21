import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  attachRhythmGrid() {
    var rhythm = parseInt($(document.body).css('line-height'));
    var windowHeight = document.documentElement.scrollHeight;
    var rhythmHelper = $('<div />');

    rhythmHelper.css({
      'position': 'absolute',
      'top': 0, 'left': 0, 'right': 0, 'bottom': 0,
      'background-image': 'linear-gradient(#e3e 0, #e3e 1px, transparent 1px)',
      'background-size': `10px ${rhythm}px`,
      'height': `${windowHeight}px`,
      'pointerEvents': 'none',
    });

    $(document.body).append(rhythmHelper);
  },

  didInsertElement() {
    this.attachRhythmGrid();
  }
});
