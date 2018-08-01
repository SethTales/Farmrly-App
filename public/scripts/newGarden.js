export {initializeNewGarden};

'use strict';

$ = jQuery;

/* ==================== private methods ==================== */

function bindEvents()
{
    $("#gardenWidth").keyup(validateGardenWidth);
};

function getUnits()
{
    var unitsOfMeasure = $("[name='units']:checked").val();
    return unitsOfMeasure;
};

function validateGardenWidth()
{
    var units = getUnits();
    var gardenWidth = $("#gardenWidth").val();
    
    // TODO: Make the validation work when the up/down arrows are pressed on the number input field 

    switch(units) {
        case "feet":
            if (gardenWidth < 1 || gardenWidth > 1000) {
                $("#widthError").text("Enter a number between 1 & 1000");
            }
            else if (gardenWidth >= 1 || gardenWidth <= 1000) {
                $("#widthError").text("");
            }
            break;
        case "meters":
            if (gardenWidth < 1 || gardenWidth > 300) {
                $("#widthError").text("Enter a number between 1 & 300");
            }
            else if (gardenWidth >= 1 || gardenWidth <= 300) {
                $("#widthError").text("");
            }
            break;
    };    
};

function validateGardenLength()
{
    var gardenLength = $("gardenLength").val();
};

/* ==================== public methods ==================== */

function initializeNewGarden()
{
    bindEvents();
};