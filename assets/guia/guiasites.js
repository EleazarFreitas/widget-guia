jQuery('.outras__flickity').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: true,
  wrapAround: false,
  autoPlay: false,
  autoPlay: 6500,
  selectedAttraction: 0.01,
  friction: 0.15,
  imagesLoaded: true,
  pageDots: false,
  groupCells: false,
});
jQuery('.interna__flickity').flickity({
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: true,
  autoPlay: 6500,
  selectedAttraction: 0.01,
  friction: 0.15,
  imagesLoaded: true,
  pageDots:false,
});

$('.suites__faded__flickity').flickity({
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  imagesLoaded: true,
  pageDots: false,
  prevNextButtons: false,
});

$('.suites__flickity').flickity({
   contain: true,
   wrapAround: true,
   prevNextButtons: true,
   autoPlay: true,
   autoPlay: 6500,
   imagesLoaded: true,
   pageDots: false,
     // fade: true,
     pauseAutoPlayOnHover: true,
});
$('.suites-imgs__flickity').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: true,
  autoPlay: 6500,
  imagesLoaded: true,
  pageDots: false,
    // fade: true,
    pauseAutoPlayOnHover: true,
});
$('.motel__flickity').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false,
  wrapAround: false,
  autoPlay: true,
  autoPlay: 6500,
  selectedAttraction: 0.01,
  friction: 0.15,
  imagesLoaded: true,
  pageDots: false,
});
$('.outras_suites__flickity').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: true,
  wrapAround: false,
  autoPlay: false,
  autoPlay: 6500,
  selectedAttraction: 0.01,
  friction: 0.15,
  imagesLoaded: true,
  pageDots: false,
  groupCells: true,
});
$('.cortesia__flickity').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: true,
  autoPlay: 6500,
  selectedAttraction: 0.01,
  friction: 0.15,
  imagesLoaded: true,
  pageDots: false,
});
$('.banner__flickity').flickity({
    cellAlign: 'center',
    contain: true,
    prevNextButtons: true,
    wrapAround: true,
    autoPlay: true,
    autoPlay: 6500,
    selectedAttraction: 0.01,
    friction: 0.15,
    imagesLoaded: true,
    pageDots: false,
    fade: true,
});
var posicao = jQuery(".headroom--pinned").css("transform");
var validaMenu = jQuery( ".navbar-toggle" ).hasClass( "collapsed" );

jQuery('.toggle-ativo').click(function() {
jQuery('#nav--mobile').toggleClass('invisible-mb');
jQuery(this).toggleClass('invisible-mb');
  jQuery('#toggle-mobile').toggleClass('active')
});
jQuery('#toggle-mobile').click(function() {
jQuery('.toggle-ativo').toggleClass('active').toggleClass('invisible-mb');
 jQuery('.navbar-collapse').toggleClass('menu-ativo');
 jQuery('body').toggleClass('travaScroll');
 jQuery('#nav--mobile').toggleClass('invisible-mb');
});

jQuery('#toggle').on('click', function (e) {
  jQuery('#btn-menu').toggleClass('btn-light');
});

jQuery('#toggle-mobile').on('click', function (e) {
  jQuery('#btn-mob').toggleClass('btn-light');
});

// jQuery('#toggle').click(function() {
//    jQuery(".button_container").toggleClass('active');
//    jQuery(this).toggleClass('active');
//    jQuery('#overlay').toggleClass('open');
//    jQuery('.logo').toggleClass('hidden');
//   });
//
//   jQuery('#toggle-mobile').click(function() {
//      jQuery(".button_container").toggleClass('active');
//      jQuery(this).toggleClass('active');
//      jQuery('#overlay').toggleClass('open');
//      jQuery('.logo').toggleClass('hidden');
//     });

jQuery(window).on( "scroll", function(){
  var menuAberto = jQuery('#navbar-mobile').hasClass('in');
  if (menuAberto) {
    jQuery("#toggle-mobile").trigger( "click" );
  }
} );

 document.onkeydown = function(evt) {
   var menuAberto = jQuery('#navbar-mobile').hasClass('in');
 if (menuAberto) {
   evt = evt || window.event;
   if (evt.keyCode == 27) {
     jQuery("#toggle-mobile").trigger( "click" );
   }
 }
};
  // jQuery(".suites__nome").each(function( index ) {
  //    var nomeSuite =  jQuery(this).text();
  //    var suite = nomeSuite.split("Suíte ");
  //    jQuery(this).text(suite[1]);
  //  });

   function ocultaSuite(nome){
     jQuery(nome).each(function( index ) {
        var nomeSuite =  jQuery(this).text();
        var suite = nomeSuite.split("Suíte ");
        jQuery(this).text(suite[1]);
      });
   }

ocultaSuite(".suite__title");
ocultaSuite(".suite__descrip");

var periodo = sessionStorage.getItem("periodo");

function validaPeriodo(per){
  var css = jQuery('[data-css="periodo"]');
  if(per){
    css.attr('href','assets/css/'+per+'.css');
  }else{
    var date = new Date();
    var hours = date.getHours();

    if(hours < 18 && hours > 6){
      css.attr('href','assets/css/light.css');
    }else{
      css.attr('href','assets/css/dark.css');
    }
  }
}

jQuery(".btn-periodo").on('click',function(){
  var dataPer = jQuery(this).attr('data-periodo');
  sessionStorage.setItem("periodo", dataPer);
  periodo = sessionStorage.getItem("periodo")
  validaPeriodo(periodo);
});

validaPeriodo(periodo);

 var paginaAtual = location.href.substring(location.href.lastIndexOf('/') + 1);
if (paginaAtual == "localizacao" || paginaAtual == "localizacao.php") {
  jQuery(".localizacao").remove();
}
