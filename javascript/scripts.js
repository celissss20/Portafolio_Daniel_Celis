$(document).ready(function(){
    $('.proyects-buttons .category-item[category="all"]').addClass('ct_item_active');

    //Filtrando los productos *************************
    $('.category-item').click(function(){
        var catProdutc = $(this).attr('category');
        console.log(catProdutc);

        //Agregar la clase active de CSS al ítem seleccionado
        $('.category-item').removeClass('ct_item_active');
        $(this).addClass('ct_item_active');

        //Ocultando productos-----------------
        $('.proyects-box').css('transform', 'scale(0)');

        function hideProduct() {
            $('.proyects-box').hide();
        }
        setTimeout(hideProduct,700);

        //Mostrando productos-----------------
        function showProducts() {
            $('.proyects-box').hide(); // Ocultar todos los proyectos

            // Filtrar proyectos basados en las clases de categoría seleccionadas
            var selectedCategory = '.' + $('.ct_item_active').attr('category');
            $(selectedCategory).show().css('transform', 'scale(1)');
        }
        setTimeout(showProducts,700);
    });

    //Mostrando todos los productos-----------------
    $('.category-item[category="all"]').click(function(){
        function showAll() {
            $('.proyects-box').show().css('transform', 'scale(1)');
        }
        setTimeout(showAll,700);
    });


    /*Carrusel*/
    

});

