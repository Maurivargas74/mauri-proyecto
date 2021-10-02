$(document).ready( function() {

       var asunt = [
        "Consulta", "Sugerencia", "Reclamo", "Garantía" ,"Otros"
    ];
    $( "#asunto" ).autocomplete({source: asunt });
  } );