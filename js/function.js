$(function(){

   // PLUGIN JS SOCIAL  MEDIA SOCIAIS
   
   $('#social-share').jsSocials({
        shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
    });

    //

    // PLUGIN MASK INPUTS 

    $('input[name=telefone]').mask('(99)99999-9999');
    $('input[name=data]').mask('99/99/9999');

   

   
});