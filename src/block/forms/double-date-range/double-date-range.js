import './double-date-range.scss';
import inputmask from "../../../../node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions.js";
import '../../../../node_modules/air-datepicker/dist/js/datepicker.js'
import 'air-datepicker/dist/css/datepicker.min.css'
$(function(){
    $('.double-date-range__input').datepicker();
});

inputmask('99.99.9999').mask('.double-date-range_date-mask');
