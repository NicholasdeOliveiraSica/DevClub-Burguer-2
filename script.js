
const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './assets/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './assets/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './assets/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './assets/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './assets/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './assets/monstruoso-vegan.png' },
]

const list = document.querySelector(".list")
const buttonMenu = document.querySelector(".show-all")
const buttonDiscount = document.querySelector(".apply-discount")
const buttonVegan = document.querySelector(".only-vegan")
const buttonTotal = document.querySelector(".show-total")
const background = document.querySelector("picture")
const totalDiv = document.querySelector(".total")

let siteContent = ''
let totalContent = ''
let atualPrice = 0
let lastArray

buttonMenu.addEventListener("click", () => showList(menuOptions))
buttonDiscount.addEventListener("click", apllyDiscount)
buttonVegan.addEventListener("click", showVegan)
buttonTotal.addEventListener("click", showTotal)

function showTotal() {
    totalContent = ''
    totalContent += `
        <h1>Total<h1>
        <p>${toMoney(atualPrice)}<p>
        `
    if(!siteContent == '') totalDiv.innerHTML = totalContent
    console.log(siteContent)
}

function showVegan() {
    const justVegan = menuOptions.filter(item => item.vegan)
    showList(justVegan)
}

function apllyDiscount() {
    const newPrices = lastArray.map(item => ({
        ...item,
        price: item.price * 0.9
    }))
    showList(newPrices)
}

function showList(array) {
    background.style.visibility = 'hidden'
    siteContent = ''
    atualPrice = 0
    array.forEach(item => {
        
        siteContent += `
            <li>
                <img src="${item.src}" alt="Foto do ${item.name}">
                <p>${item.name}</p>
                <p class="price">${toMoney(item.price)}</p>
            </li>
            `
        atualPrice += item.price
    });

    lastArray = array

    totalContent = ''
    totalDiv.innerHTML = totalContent

    list.innerHTML = siteContent
}

function toMoney(value) {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}