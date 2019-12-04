import 'ion-rangeslider/js/ion.rangeSlider.min';
import './range-slider.scss';
import './range-slider-ion.scss';

$(function () {
  $('.range-slider').each(function () {
    const slider = $(this).find('.range-slider__slider-input');
    if(slider.length) {
      const fromLabel = $(this).find('.range-slider__header-value-min');
      const toLabel = $(this).find('.range-slider__header-value-max');
      $(slider).ionRangeSlider({
        onChange: function (data) {
          fromLabel.html(data.from_pretty);
          toLabel.html(data.to_pretty);
        }
      });
    }
  });
})
