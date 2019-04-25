$(document).ready(function() {

  function createDishElement (menuData) {

    const dishName = menuData.name;
    const dishDesc = menuData.description;
    const dishPrice = menuData.price;

    const $createName = $('<div>').addClass('menu-item-name').text(dishName);
    const $createDesc = $('<div>').addClass('menu-item-description').text(dishDesc);
    const $createPrice = $('<div>').addClass('menu-item-price').text('$'+dishPrice);
    const $createButton = $('<button>').addClass('btn btn-outline-secondary').text('Add');

  const $dish = $('<div>').addClass('menu-item').append($createName)
                                                .append($createPrice)
                                                .append($createDesc)
                                                .append($createButton);

  return $dish

  }

  function createDrinkElement (menuData) {

    const drinkName = menuData.name;
    const dishPrice = menuData.price;

    const $createName = $('<div>').addClass('menu-item-name').text(drinkName);
    const $createPrice = $('<div>').addClass('menu-item-price').text('$'+drinkPrice);
    const $createButton = $('<button>').addClass('btn btn-outline-secondary').text('Add');

  const $dish = $('<div>').addClass('menu-item').append($drinkName)
                                                .append($dirnkPrice)
                                                .append($createButton);

  return $dish

  }

  function createDessertElement (menuData) {

    const dessertName = menuData.name;
    const dessertDesc = menuData.description;
    const dessertPrice = menuData.price;

    const $createName = $('<div>').addClass('menu-item-name').text(dishName);
    const $createDesc = $('<div>').addClass('menu-item-description').text(dishDesc);
    const $createPrice = $('<div>').addClass('menu-item-price').text('$'+dishPrice);
    const $createButton = $('<button>').addClass('btn btn-outline-secondary').text('Add');

  const $dish = $('<div>').addClass('menu-item').append($createName)
                                                .append($createPrice)
                                                .append($createDesc)
                                                .append($createButton);

  return $dish

  }


  function renderMenu(menuArr) {
    // console.log("This is menuarr: ",menuArr);
    menuArr.forEach( (menuObj) => {
      console.log("This is menuObj: ", menuObj);

      if (menuObj.type === 'main'){
        $('.menu-section').append(createDishElement(menuObj))
      } else if (menuObj.type === 'drink') {
        $('.menu-section').append(createDrinkElement(menuObj))
      } else if (menuObj.type === 'dessert') {
        $('.menu-section').append(createDessertElement(menuObj))
      }
    })
  }

$( function() {

  $.ajax({
    url: "/menu",
    type: "GET",
    success: function(data) {
      console.log("this is data: ", data);
      renderMenu(data);
    }
  })
})




  // $(() => {
  //   $.ajax({
  //     method: "GET",
  //     url: "/api/users"
  //   }).done((foods) => {
  //     for(food of foods) {
  //     }
  //   });
    // .done( (bill) => {
    //   $("<div>").text(bill).appendTo($("body"));
    // })
  // });




})
