const searchName = document.getElementById("search-name");
const products = document.querySelectorAll(".product-item");




const filterByName = event => {
    const searchValue = event.target.value.toLowerCase().trim();

    products.forEach(product => {
        const productName = product.children[1].innerText.toLowerCase();
        if(productName.includes(searchValue)){
            product.style.display="block";
        }else {
            product.style.display="none";
        }
    })
};


searchName.addEventListener("keyup" , filterByName);

