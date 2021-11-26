const categoryItemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemsRef.length}`);

categoryItemsRef.forEach(element => {
    const titleOfCategoryRef = element.querySelector('h2');
    const numberOfElementsRef = element.querySelectorAll('li');
    
    console.log(`Category: ${titleOfCategoryRef.textContent}`);
    console.log(`Elements: ${numberOfElementsRef.length}`);
});

