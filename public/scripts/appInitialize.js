import {initializeCrudMenu} from './crudMenu.js';

var appInitialize = (function() {  

    $ = jQuery

    $(document).ready(function() {
        initializeCrudMenu();
    });

}());

