import './dropdown.scss'

function getItemValue (count, labelDeclensions) {

  if (labelDeclensions.length < 3 || count < 0) {
    return '';
  }
  if (
    [0, 5, 6, 7, 8, 9].indexOf(count % 10) >= 0
    || [11, 12, 13, 14].indexOf(count % 100) >= 0
  ) {
    return `${count} ${labelDeclensions[0]}`;
  }
  if (count % 10 === 1) {
    return `${count} ${labelDeclensions[1]}`;
  }
  if ([2, 3, 4].indexOf(count % 10) >= 0) {
    return `${count} ${labelDeclensions[2]}`;
  }
}
function getDropdownItemsData (dropdown) {
  const items = [];
  $(dropdown).find('.dropdown__item').each(function() {
    const value = +$(this).find('.dropdown__item-control-value').text();
    const labelDeclensions = $(this).data('label_declensions') || [];
    const item = {
      value,
      labelDeclensions,
    };
    items.push(item);
  });
  return items;
}

function setMultiValue(dropdown) {
  const dropdownLabelTag = dropdown.find('.dropdown__label');
  const placeholder = dropdownLabelTag.data('placeholder');
  const itemsData = getDropdownItemsData(dropdown);
  let label = '';
  const count = itemsData.length > 2 ? 2 : itemsData.length;
  for (let i = 0; i < count; i++) {
    const item = itemsData[i];
    if (label.length > 0) {
      label += ', ';
    }
    const itemLabel = getItemValue(item.value, item.labelDeclensions);
    label += itemLabel;
  }
  if (itemsData.length > 2) {
    label += '...';
  }
  const valueTag =  dropdownLabelTag.find('.dropdown__value');
  const newValue = label === '' ? placeholder: label;
  valueTag.text(newValue);

}

$(function() {
  $('.dropdown').each(function() {
    const dropdown = $(this);
    const dropdownItems = $(this).find('.dropdown__items');
    const dropdownLabelTag = $(this).find('.dropdown__label');
    dropdownLabelTag.click(function() {
      const isOpen = $(this).hasClass('dropdown_state-open');
      if (!isOpen) {
        $(this).addClass('dropdown_state-open');
      }
      dropdownItems.slideToggle(400, () => {
        if (isOpen) {
          $(this).removeClass('dropdown_state-open');
        }
      });
    });
    $(this).find('.dropdown__item').each(function() {

      const valueTag = $(this).find('.dropdown__item-control-value');
      const addBtn = $(this).find('.dropdown__item-control-add');
      const removeBtn = $(this).find('.dropdown__item-control-remove');
      addBtn.click(function() {
        valueTag.html(+valueTag.html() + 1);
        setMultiValue(dropdown);
      });

      removeBtn.click(function() {
        const val = +valueTag.html();
        if (val !== 0) {
          valueTag.html(val === 0 ? 0 : val - 1);
          setMultiValue(dropdown);
        }
      });

    });
    setMultiValue(dropdown);

  });

});
