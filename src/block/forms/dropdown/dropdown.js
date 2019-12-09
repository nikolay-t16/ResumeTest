import './dropdown.scss';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import './item-quantity-dropdown.scss';

$(function() {
  $(".dropdown").iqDropdown({
    minItems: 1,
    maxItems: 5,
    selectionText: "passenger",
    textPlural: "passengers",
    onChange: function(id, count, totalItems) {
      console.log(id, count, totalItems);
      $('.iqdropdown-selection').text('testtt');
    },
    beforeDecrement: function(id, itemCount) {
      if (id === "adult") {
        return itemCount.adult > itemCount.infant;
      }
      return true;
    },
    beforeIncrement: function(id, itemCount) {
      if (id === "infant") {
        return itemCount.adult > itemCount.infant;
      }
      return true;
    }
  });
});
