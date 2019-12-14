import './dropdown.scss';
import '../icon-link/icon-link';

function getItemValue(count, labelDeclensions) {

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

function getDropdownItemsData(dropdown) {
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

function cleareDropdownItems(dropdown) {
  const items = [];
  $(dropdown).find('.dropdown__item').each(function() {
    $(this).find('.dropdown__item-control-value').text(0);
    const labelDeclensions = $(this).data('label_declensions') || [];
    const item = {
      value: 0,
      labelDeclensions,
    };
    items.push(item);
  });
  return items;
}

function setMultiValue(
  dropdown,
  dropdownLabelTag,
  valueTag,
  placeholder,
  cleareValue = false,
) {
  const itemsData = cleareValue ?
    cleareDropdownItems(dropdown) :
    getDropdownItemsData(dropdown);
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
  const newValue = label === '' ? placeholder : label;
  valueTag.text(newValue);

}

function setSingleValue(
  dropdown,
  dropdownLabelTag,
  valueTag,
  placeholder,
  labelDeclensions,
  cleareValue = false,
) {
  const itemsData = cleareValue ?
    cleareDropdownItems(dropdown) :
    getDropdownItemsData(dropdown);
  let label = '';
  let value = 0;
  for (let i = 0; i < itemsData.length; i++) {
    const item = itemsData[i];
    value += +item.value;
  }
  const newValue = value === 0 ?
    placeholder :
    getItemValue(value, labelDeclensions);
  valueTag.text(newValue);

}

function setValue(
  dropdown,
  dropdownLabelTag,
  valueTag,
  placeholder,
  labelDeclensions,
  isSingleValue,
  cleareValue = false) {
  if (isSingleValue) {
    setSingleValue(
      dropdown,
      dropdownLabelTag,
      valueTag,
      placeholder,
      labelDeclensions,
      cleareValue,
    );
  } else {
    setMultiValue(
      dropdown,
      dropdownLabelTag,
      valueTag,
      placeholder,
      cleareValue
    );
  }
}

function setDropDownItemsHandlers(
  dropdown, dropdownLabelTag, valueTag, placeholder, labelDeclensions,
  isSingleValue, applyBtn, cleareBtn) {
  dropdown.find('.dropdown__item').each(function() {
    const itemValueTag = $(this).find('.dropdown__item-control-value');
    const addBtn = $(this).find('.dropdown__item-control-add');
    const removeBtn = $(this).find('.dropdown__item-control-remove');

    addBtn.click(function() {
      itemValueTag.html(+itemValueTag.html() + 1);
      if (applyBtn === null) {
        setValue(
          dropdown,
          dropdownLabelTag,
          valueTag,
          placeholder,
          labelDeclensions,
          isSingleValue
        );
      }
    });

    removeBtn.click(function() {
      const val = +itemValueTag.html();
      if (val !== 0) {
        itemValueTag.html(val === 0 ? 0 : val - 1);
        if (applyBtn === null) {
          setValue(
            dropdown,
            dropdownLabelTag,
            valueTag,
            placeholder,
            labelDeclensions,
            isSingleValue
          );
        }
      }
    });

    if (applyBtn !== null) {
      applyBtn.click(function() {
        setValue(
          dropdown,
          dropdownLabelTag,
          valueTag,
          placeholder,
          labelDeclensions,
          isSingleValue
        );
      });
    }

    if (cleareBtn !== null) {
      cleareBtn.click(function() {
        setValue(
          dropdown,
          dropdownLabelTag,
          valueTag,
          placeholder,
          labelDeclensions,
          isSingleValue,
          true);
      });
    }
  });
}

$(function() {
  $('.dropdown').each(function() {
    const dropdown = $(this);
    const isSingleValue = dropdown.data('single_value') || false;
    const dropdownItems = dropdown.find('.dropdown__items');
    const haveApplyBtn = dropdownItems.data('apply_btn');
    const haveCleareBtn = dropdownItems.data('cleare_btn');
    const applyBtn = haveApplyBtn ? dropdownItems.find('.dropdown__apply-btn') : null;
    const cleareBtn = haveCleareBtn ? dropdownItems.find('.dropdown__cleare-btn') : null;
    const dropdownLabelTag = dropdown.find('.dropdown__label');
    const valueTag = dropdownLabelTag.find('.dropdown__value');
    const labelDeclensions = isSingleValue ? dropdownLabelTag.data(
      'label_declensions') : null;

    const placeholder = dropdownLabelTag.data('placeholder');
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
    setDropDownItemsHandlers(
      dropdown,
      dropdownLabelTag,
      valueTag,
      placeholder,
      labelDeclensions,
      isSingleValue,
      applyBtn,
      cleareBtn);
    setValue(
      dropdown,
      dropdownLabelTag,
      valueTag,
      placeholder,
      labelDeclensions,
      isSingleValue);
  });
});
