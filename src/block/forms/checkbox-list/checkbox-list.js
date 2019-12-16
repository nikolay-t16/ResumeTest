import './checkbox-list.scss';
import '../checkbox/checkbox.js';

$('.checkbox-list_dropdown').each(function() {
  const dropdown = $(this);
  const icon = $(this).find('.checkbox-list__dropdown-icon');
  $(this)
    .find('.checkbox-list__header')
    .click(function() {
      const dropdownItems =  dropdown.find('.checkbox-list_dropdown-items');
      dropdownItems.slideToggle(function(){
        icon.text(icon.text() === 'expand_more' ? 'expand_less' : 'expand_more')
      });
    });
});
