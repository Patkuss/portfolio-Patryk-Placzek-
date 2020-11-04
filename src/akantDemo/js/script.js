window.addEventListener("scroll", function(){
    let menuArea = document.querySelector('.header_area');
    let menuContainer = document.querySelector('.menu_container');

    if(window.pageYOffset > 0) {
        menuArea.classList.add("sticky");
        menuContainer.classList.add("sticky_container");
    } else {
        menuArea.classList.remove("sticky");
        menuContainer.classList.add("sticky_container");
    }
});

$(function () {
    $("#ticket-checkbox").click(function () {
        if ($(this).is(":checked")) {
            $("#ticket").show();
            document.getElementById("ticket").required = true;
        } else {
            $("#ticket").hide();
            document.getElementById("ticket").required = false;
        }
    });
});

$(function () {
    $("#facture-checkbox").click(function () {
        if ($(this).is(":checked")) {
            $("#facture-area").show();
            document.getElementById("fa_company").required = true;
            document.getElementById("fa_nip").required = true;
            document.getElementById("fa_email").required = true;
            document.getElementById("fa_postcode").required = true;
            document.getElementById("fa_city").required = true;
            document.getElementById("fa_street").required = true;
            document.getElementById("fa_house").required = true;
            document.getElementById("fa_apartment").required = true;
        } else {
            $("#facture-area").hide();
            document.getElementById("fa_company").required = false;
            document.getElementById("fa_nip").required = false;
            document.getElementById("fa_email").required = false;
            document.getElementById("fa_postcode").required = false;
            document.getElementById("fa_city").required = false;
            document.getElementById("fa_street").required = false;
            document.getElementById("fa_house").required = false;
            document.getElementById("fa_apartment").required = false;
        }
    });
});

$(document).ready(function () {
    $('#datepicker').datepicker({
        format: "dd-mm-yyyy",
        maxViewMode: 2,
        language: "pl",
        orientation: "bottom auto",
        autoclose: true,
        todayHighlight: true
    });
});

function passwordHider() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function passwordHiderReg() {
    var x = document.getElementById("passwordInputReg1");
    var y = document.getElementById("passwordInputReg2");
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
}

$(document).ready(function(){
    $("#allOrderForm").click(function(){
        var senderForm = $('#senderForm');
        var recipientForm = $('#recipientForm');
        var factureForm = $('#factureForm');
        var dateForm = $('#dateForm');
        var isChecked = $("#facture-checkbox").is(":checked");

        if (senderForm[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else if (recipientForm[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else if (isChecked) {
            if (factureForm[0].checkValidity() === false) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                console.log(ok)
            }
        } else if (dateForm[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            console.log(last)
            window.location.href='confirmation.html';
        }
        senderForm.addClass('was-validated');
        recipientForm.addClass('was-validated');
        dateForm.addClass('was-validated');
        factureForm.addClass('was-validated');
    });
});

$("#regForm").click(function(event) {
    var vForm = $(this);
    if (vForm[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
        console.log(ok)
    }
    vForm.addClass('was-validated');
});

$("#loginForm").click(function(event) {
    var vForm = $(this);
    if (vForm[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
        console.log(ok)
    }
    vForm.addClass('was-validated');
});

$(document).ready(function () {
    location.hash && $(location.hash + '.collapse').collapse('show');
});

$('input.payment-checkbox').on('change', function() {
    $('input.payment-checkbox').not(this).prop('checked', false);
});