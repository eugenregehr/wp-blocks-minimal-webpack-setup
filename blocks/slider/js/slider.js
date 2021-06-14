import $ from "jquery";
import Splide from '@splidejs/splide';

/**
 * initializeBlock
 *
 * Adds custom JavaScript to the block HTML.
 *
 * @date    15/4/19
 * @since   1.0.0
 *
 * @param   object $block The block jQuery element.
 * @param   object attributes The block attributes (only available when editing).
 * @return  void
 */
var initializeBlock = function ($block) {
  const el = $block.find('.slider')[0];
  new Splide(".slider", {
    perPage: 1,
    type: 'loop',
    autoplay: true,
    interval: 15000,
  }).mount();
}

// Initialize each block on page load (front end).
$(document).ready(function () {
  $('.slider').each(function () {
    initializeBlock($(this));
  });
});

// Initialize dynamic block preview (editor).
if (window.acf) {
  window.acf.addAction('render_block_preview/type=slider', initializeBlock);
}

