

import {initModals} from './modules/modals/init-modals.js';
import {burger, hidesMenu} from './modules/burger-menu/burger-menu.js';
import {activeHeader} from './modules/active-header/active-header.js';
import {phoneInputs} from './modules/mask-input-tel/mask-input-tel.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initModals();
    burger();
    hidesMenu();
    activeHeader();
    phoneInputs;
  });
});
