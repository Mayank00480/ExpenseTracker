let expenseAmount = document.getElementById('expenseAmount');
let expenseDescription = document.getElementById('expenseDescription');
let expenseCategory = document.getElementById('expenseCategory');
let items = document.querySelector('ul');
items.addEventListener('click',removeItem);
items.addEventListener('click',editItem);

function removeItem(e) {
   if(e.target.classList.contains('delete'))
   {
      if(confirm("Are you sure?"))
      {
           let del = e.target.parentElement;
           let data = del.firstChild.textContent;
           del.remove();
           let list = [];
           list = data.split(' ');
           console.log(list);
           expenseCategory.value = list[2];
           localStorage.removeItem(expenseCategory.value)
      }
   }
}
function editItem(e) {
   if(e.target.classList.contains('edit'))
   {
      let edit = e.target.parentElement;
      let data = edit.firstChild.textContent;
      console.log(data);
      let list = [];
      list = data.split(' ');
      console.log(list)
      edit.remove();

      expenseAmount.value = list[0];
      expenseCategory.value = list[2];
      expenseDescription.value = list[1];
      localStorage.removeItem(expenseCategory.value)
   }

}
let form = document.getElementById('addForm');
form.addEventListener('submit', onSubmit);
function onSubmit(e){
e.preventDefault();
if(expenseAmount.value == '' || expenseDescription.value == '' || expenseCategory.value == '') alert("Enter the Values");
else {
   let list =  document.createElement('li');
   list.style.listStyleType = 'none'
   list.style.margin = "10px";
   list.appendChild(document.createTextNode(`${expenseAmount.value} ${expenseDescription.value} ${expenseCategory.value}`));
   const deleteBtn = document.createElement('button');
   deleteBtn.className = 'delete';
   deleteBtn.textContent = "delete";
   console.log(deleteBtn);
   deleteBtn.style.position = 'relative';
   deleteBtn.style.left = '30px';
   
   const editBtn = document.createElement('button');
   editBtn.className = 'edit'
   editBtn.textContent = "edit"
   editBtn.style.position = 'relative';
   editBtn.style.left = '40px';
   localStorage.setItem(expenseCategory.value , expenseDescription.value);
   list.appendChild(deleteBtn);
   list.appendChild(editBtn);
   items.appendChild(list);
}
}