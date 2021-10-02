$(document).ready(function () {
    
var icons = {
    headers:"ui-icon-caret-1-e",
    activeHeader :"ui-icon-caret-1-e"


};
    $( "#accordion" ).accordion({
    icons:icons,
    heightStyle:"content"

  } );

  $("input[type=checkbox],input[type=radio]").checkboxradio();

  var asunt = [
    "Consulta", "Sugerencia", "Reclamo", "Garantía" ,"Otros"
];
$( "#asunto" ).autocomplete({source: asunt });


$( "#tienda" ).selectmenu();

$( "#fechaSolicitud" ).datepicker();


$("#enviar").button();


});





