 
document.getElementById('AddBtn').addEventListener('click',function () {
    const titleInput = document.getElementById('title-input');
    const authorInput = document.getElementById('author-input');
    const yearInput = document.getElementById('year-input');
   
    
if (titleInput.value==''|| authorInput.value==''|| yearInput.value=='' ) {
    alert('please fill up all the inputs');
}
else{
    const newRow = document.createElement('tr');
    const newTitle = document.createElement('th');
    newTitle.innerHTML=titleInput.value;
    newRow.appendChild(newTitle);
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML=authorInput.value;
    newRow.appendChild(newAuthor)
    const newYear = document.createElement('th');
    newYear.innerHTML=yearInput.value;
    newRow.appendChild(newYear);
    bookList.appendChild(newRow);
}
    document.getElementById('title-input').value='';
    document.getElementById('author-input').value='';
    document.getElementById('year-input').value='';

 })
