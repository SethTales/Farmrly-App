import {initializeCrudMenu} from './crudMenu.js';
import {initializeNewGardenFormValidation} from './newGardenFormValidation.js';

var appInitialize = (function() {  

    $ = jQuery

    $(document).ready(function() {
        initializeCrudMenu();
        initializeNewGardenFormValidation();
    });

}());

