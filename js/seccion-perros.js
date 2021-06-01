

$(document).ready(function () {

    var nroTotalImagenes = 10;
    var nroColumnasPorFila = 5;
    var selectorTablaHTML = "#lista-perros"
    var url = "https://api.TheDogAPI.com/v1/images/search?limit=" + nroTotalImagenes


    //carga raza de Perros en Select
    if ($('#raza_perros').length > 0) {
        $.ajax({
            method: "GET",
            url: "https://api.TheDogAPI.com/v1/breeds?limit=10&page=0",
            dataType: "json",
            data: {}
        }).done(json => json.forEach(element => {
            $('#raza_perros').append(new Option(element.name, element.id));
        })
        );
    }

    //Traer raza seleccionada
    $('#raza_perros').change(function () {
        if ($('table tbody').find('img').length > 0) {
            var razaId = $(this).children(':selected').val();
            var UrlApi = 'https://api.TheDogAPI.com/v1/images/search?breed_ids=' + razaId;

            if (razaId == "0") {
                generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url, "Ver Detalle");
            } else {
                generar_galeria_imagenes_Raza(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, UrlApi, "Ver Detalle");
            }
        }
    });

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url, "Ver Detalle");
});

function getBtnActionURL() {
    return "https://api.thedogapi.com/v1/images/search?limit=1";
}