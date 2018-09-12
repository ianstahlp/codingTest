$(document).ready(function() {

    // TODO: Optimize this with a for loop for a more concise, less 
    // wordy function. Create a 


    $('#toggle1').on('click', function() {


        $('#toggle1 a').toggleClass("inactive");
        $('#toggle1 a i').toggleClass("fa-angle-up fa-angle-right");


    });

    $('#toggle2').on('click', function() {
        $('#toggle2 a').toggleClass("inactive");
        $('#toggle2 a i').toggleClass("fa-angle-up fa-angle-right");

    });

    $('#toggle3').on('click', function() {
        $('#toggle3 a').toggleClass("inactive");
        $('#toggle3 a i').toggleClass("fa-angle-up fa-angle-right");

    });
})