import './input.scss'
import inputmask from "../../../../node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions.js";
import '../../../../node_modules/air-datepicker/dist/js/datepicker.js'
import 'air-datepicker/dist/css/datepicker.min.css'

$(function(){
  $('.input_datepicker').datepicker();
  $('.input_datepicker-range').datepicker({
    dateFormat: 'd M',
    multipleDates: 2,
    multipleDatesSeparator: ' - ',
    range: true,
  });
});
inputmask('99.99.9999').mask('.input_mask-date');
