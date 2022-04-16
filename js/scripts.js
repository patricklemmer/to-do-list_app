function newItem() {
  //Adds a new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === ' ') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }
}