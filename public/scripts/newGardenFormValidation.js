export {initializeNewGardenFormValidation};

'use strict';

$ = jQuery;

/* ==================== private methods ==================== */

function bindEvents()
{
    $("#gardenWidth, #gardenLength").keyup(validateSizeInputs);
};

function validateSizeInputs()
{
    //BUG: If a size input value is > 300 but <=1000 and units are feet, then the user switches to the other input, then changes to meters, the input
    //box that has the number 301-1000 does not throw an error
    //BUG: If the create new garden menu is opened, then closed, both input fields show 'Value required'
    var units = getUnitsOfMeasure();
    var selected = getFocusedInputElementId();
    var value = getFocusedInputValue(selected);
    var error = getErrorSpanElementId(selected);
    validateGardenDimension(units, value, error);
}

function getUnitsOfMeasure()
{
    var unitsOfMeasure = $("[name='units']:checked").val();
    return unitsOfMeasure;
};

function getFocusedInputElementId()
{
    var selectedInput = $(document.activeElement).attr("id");
    return selectedInput;
}

function getFocusedInputValue(selectedInput)
{
    var selectedInputValue = $("#" + selectedInput).val();
    return selectedInputValue;
}

function getErrorSpanElementId(selectedInput)
{
    var errorSpan;
    console.log(selectedInput);
    if (selectedInput == "gardenWidth") {
        errorSpan = $("#widthError").attr("id");
    }
    else if (selectedInput == 'gardenLength') {
        errorSpan = $("#lengthError").attr("id");
    }
    return errorSpan;
    
}

function validateGardenDimension(units, inputValue, errorElement)
{
    errorElement = "#" + errorElement;
    switch(units) {
        case "feet":
            if(inputValue.match(/[a-zA-z]/))
            {
                $(errorElement).text("Enter a number between 1 & 1000");
            }
            else if(inputValue == "")
            {
                $(errorElement).text("Value required");
            }
            else if (inputValue < 1 |(inputValue > 1000) && (inputValue != "")) {
                $(errorElement).text("Enter a number between 1 & 1000");
            }
            else if(inputValue >= 1 |(inputValue <= 1000)) {
                $(errorElement).text("");
            }
            break;
        case "meters":
            if(inputValue.match(/[a-zA-z]/))
            {
                $(errorElement).text("Enter a number between 1 & 300");
            }
            else if(inputValue == "")
            {
                $(errorElement).text("Value required");
            }
            else if(inputValue < 1 |(inputValue > 300)) {
                $(errorElement).text("Enter a number between 1 & 300");
            }
            else if(inputValue >= 1 |(inputValue <= 300)) {
                $(errorElement).text("");
            }
            break;
    }
};

/* ==================== public methods ==================== */

function initializeNewGardenFormValidation()
{
    bindEvents();
};