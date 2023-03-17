
//function newItem() {
//let li = document.createElement("li");
//let inputValue = document.getElementById("input").value;
//let text = document.createTextNode(inputValue);
//li.appendChild(text);
//if (inputValue === '') {
//   alert("You must write something!");
// } else {
// let list = document.querySelector('#list');
//  list.appendChild(li);
// }
// function crossOut() {
//     li.classList.toggle("strike");
// }
// li.addEventListener("dblclick", crossOut);
//let crossOutButton = document.createElement("crossOutButton");
// crossOutButton.appendChild(document.createTextNode("X"));
// li.appendChild(crossOutButton);
// crossOutButton.addEventListener("click", deleteListItem);
// function deleteListItem() {
//     li.classList.add("delete")
// }
// $('#list').sortable();
//};
function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = document.createTextNode(inputValue);
    li.append(text);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let list = $('#list');
        list.append(li);
    }

    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);

    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
        li.addClass('delete');
    }

    $('#list').sortable();
};
