// Diables form default behaviour of refreshing on click of enter
$('#button').on('click', function (e) {
  e.preventDefault();
});

function newItem() {
  //Adds a new item to the list of items
  let li = $('<li></li>');
  let input = $('#input');
  let inputValue = input.val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  //Crossing out an item from the list of items
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //Adding the delete button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    li.addClass('delete')
  }

  //Reordering items
  $('#list').sortable();

  //Reset the input field
  input.val('');
}