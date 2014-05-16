// JavaScript Document
//Java for Email sent image (need to make this code work)
$('body').on('click','form button', function myfunction(e) {
    $('#sucess').removeClass('hide');
    $('#sucess').children().addClass('hide');
    $($(this).attr('href')).removeClass('hide');
    e.preventDefault();
});
//Java for alert box when email sent.
function myFunction()
{
alert("Message Sent!");
}

//scrolling
$('#home').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });
$('#work').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });
 $('#me').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });
 $('#contact').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });