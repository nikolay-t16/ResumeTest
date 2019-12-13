import './dropdown.scss';

$(function() {
  $('.dropdown').each(function() {
    const dropdownItems = $(this).find('.dropdown__items');
    $(this).find('.dropdown__input').click(function() {
      const obj = $(this);
      const icon = obj.find('.dropdown__icon');
      const isClose =  icon.text() === 'expand_more';

      if (isClose) {
        obj.addClass('dropdown_state-open');
      }

      dropdownItems.slideToggle(400, () => {
        if (!isClose) {
          obj.removeClass('dropdown_state-open');
        }
        icon.text(isClose ? 'expand_less' : 'expand_more');
      });
    });
  });

});
