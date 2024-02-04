const getCategories = categories.querySelectorAll("li.item");
//console.log(getCategories);
console.log(getCategories.length);
const getText = categories.querySelectorAll("h2");
//console.log(getText);

getText.forEach(element => {
    console.log(element.textContent);
});


