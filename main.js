function addNewList() {
    alert('hello world!');
}

function addListItem() {
    console.log('hello world');
    const list = document.getElementById("grocery-list");
    const itemInput = document.getElementById("new-list-item");
    const newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}
function deleteListItem(item){
	//remove li element from OL element (item.parentNode)
	item.parentNode.removeChild(item);
}
function completeListItem(item){
	if (item.checked){
		//true if input is checked
		item.parentNode.style.textDecoration = "line-through";
	}
	else{
		item.parentNode.style.textDecoration = "none";
	}	
}
