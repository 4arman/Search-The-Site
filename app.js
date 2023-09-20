const btn = document.querySelector('.btn-1')
const input = document.querySelector('input')
const btnElements = document.querySelector('.btn')
const btnThis = document.querySelector('.btn-2')

function changeSitePlace (title) {
    return `<div class="btn"><a 
    href="https://${title.value}.com" target="_blank"><button 
    type="button">Search</button></a></div>`
}

btnThis.onclick = () => {
    btn.style = `display: flex; juctify-content: center; aligh-items: center;`
    btnElements.innerHTML = changeSitePlace(input)
}

