import './input.scss'
import inputmask from "../../../../node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions.js";

inputmask('99.99.9999').mask('.input_mask-date');
