const searchName = document.getElementById("search-name");
const products = document.querySelectorAll(".product-item");
const btnFilter = document.querySelectorAll(".filter");
const btnSearchPrice = document.getElementById("search-price");
const minPriceValue = document.getElementById("min-price");
const maxPriceValue = document.getElementById("max-price");

const changeClassBtn = filter => {
    btnFilter.forEach(button => {
        button.dataset.filter === filter
            ? button.classList.add("selected")
            : button.classList.remove("selected")
    })
};

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


const btnFilterHandler = event => {
    const filter = event.target.dataset.filter;
    changeClassBtn(filter);

    products.forEach(product => {
        const category = product.dataset.category;
        if(filter === "all"){
            product.style.display="block";
        }else {
            filter === category
                ? product.style.display="block"
                : product.style.display="none"
        }
    })
};

const searchPriceHandler = () => {
    products.forEach(product => {
        const price = product.children[2].children[0].innerText;
        if(!minPriceValue.value){
            +price < maxPriceValue.value
                ?  product.style.display = "block"
                : product.style.display = "none"
        }else if(!maxPriceValue.value) {
            +price > minPriceValue.value
                ?  product.style.display = "block"
                : product.style.display = "none"
        } else if(+price > minPriceValue.value  && +price < maxPriceValue.value){
            product.style.display="block";
        }else {
            product.style.display="none";
        }
    })
};


searchName.addEventListener("keyup" , filterByName);
btnFilter.forEach(item => {
    item.addEventListener("click" , btnFilterHandler);
})
btnSearchPrice.addEventListener("click" , searchPriceHandler);

