export {initializeCrudMenu};

'use strict';

$ = jQuery;

/* ==================== private methods ==================== */

function bindEvents() {
    $("#new").click(openNewGardenMenu);
    $("#open, #save, #delete").click(openGardenPlansMenu);
    $("#newGardenCloseButton").click(closeNewGardenMenu);
    $("#gardenPlansCloseButton").click(closeGardenPlansMenu);
};

function openNewGardenMenu() {
    $("#newGardenSidenav").css('width', '30%');
    setTimeout(function () {
        $("#newGardenForm").css('display', 'contents');
        $("#newGardenCloseButton").css('display', 'block');
    }, 500);
};

function closeNewGardenMenu() {
    $("#newGardenForm, #newGardenCloseButton").css('display', 'none');
    $("#newGardenSidenav").css('width', '0%');
};

function openGardenPlansMenu() {
    $("#gardenPlansSidenav").css('width', '30%');
    setTimeout(function () {
        $("#gardenPlansCloseButton").css('display', 'block');
    }, 500);
};

function closeGardenPlansMenu() {
    $("#gardenPlansCloseButton").css('display', 'none');
    $("#gardenPlansSidenav").css('width', '0%');
};

/* ==================== public methods ==================== */

function initializeCrudMenu()
{
    bindEvents();
};

