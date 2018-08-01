import {initializeCrudMenu} from './crudMenu.js';
import {initializeNewGarden} from './newGarden.js';

var appInitialize = (function() {  

    $ = jQuery

    $(document).ready(function() {
        initializeCrudMenu();
        initializeNewGarden();
    });

}());

