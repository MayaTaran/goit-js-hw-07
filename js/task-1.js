const getCategories = document.querySelector("ul#categories");
const getList = getCategories.querySelectorAll("li.item");
//console.log(getList);
console.log(`Number of categories: ${getList.length}`);

getList.forEach(item => {
    const categoryTitle = item.querySelector("h2").textContent;
    const elementList = item.querySelectorAll("ul li");
    const numberOfItems = elementList.length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberOfItems}`);
});


