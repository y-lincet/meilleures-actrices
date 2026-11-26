$(function () {
  var $mainMenuItems =$('#main-menu ul').children('li');
  var totalMainMenuItems = $mainMenuItems.length;
  var openedIndex = 2; // Fiche ouverte par défaut au chargement (Jessica Alba)

  function init() {
    bindEvents();
    if (validIndex(openedIndex)) {
      animateItem($mainMenuItems.eq(openedIndex), true, 700);
    }
  }

  // Clic sur un portrait ou sur un bouton en bas de page
  function bindEvents() {
    $mainMenuItems.children('.images').on('click', function () {
      var newIndex = $(this).parent().index();
      checkAndAnimateItem(newIndex);
    });

    $('.button')
      .hover(
        function () { $(this).addClass('hovered'); },
        function () { $(this).removeClass('hovered'); }
      )
      .on('click', function () {
        var newIndex = $(this).index();
        checkAndAnimateItem(newIndex);
      });
  }

  function validIndex(index) {
    return index >= 0 && index < totalMainMenuItems;
  }

  // Ouvre ou ferme une fiche en faisant glisser l'image couleur par-dessus la noir & blanc
  function animateItem($item, toOpen, speed) {
    var $colorImage =$item.find('.color');
    var itemParam = toOpen ? { width: '420px' } : { width: '140px' };
    var colorImageParam = toOpen ? { left: '0px' } : { left: '140px' };

    $colorImage.stop(true, false).animate(colorImageParam, speed);$item.stop(true, false).animate(itemParam, speed);
  }

  // Gère l'ouverture/fermeture selon la fiche déjà active
  function checkAndAnimateItem(index) {
    if (openedIndex === index) {
      animateItem($mainMenuItems.eq(index), false, 250);
      openedIndex = -1;
    } else if (validIndex(index)) {
      if (validIndex(openedIndex)) {
        animateItem($mainMenuItems.eq(openedIndex), false, 250);
      }
      openedIndex = index;
      animateItem($mainMenuItems.eq(openedIndex), true, 250);
    }
  }

  init();
});