// Au clic on selectionne la class .color
$('.color').click(function () {
    // on crée une variable idColor, avec this et on lui attribut son id personel
    var idColor = $(this).attr('id');
    // on applique a la div texte par son id (#texte) la methode css pour changer sa couleur et la variable idColor
    $('#texte').css('color', idColor);
});