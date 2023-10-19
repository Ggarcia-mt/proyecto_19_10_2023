import { data } from "./data.js";
console.log(data);
const item = document.getElementById('item')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

let like = []
document.addEventListener('DOMContentLoaded', () => {
    loadData(data)
})
const loadData = data => {
    data.forEach(personaje => {
        const { id, name, img } = personaje
        templateCard.querySelector('h5').textcontent = name
        templateCard.querySelector('img').setAttribute('src', img)
        templateCard.querySelector('.btn-dark').dataset.id = id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    item.appendChild(fragment)
}
item.addEventListener('click', e =>{
    addLike(e)
})
const addLike = e =>{
    
    if (e.target.classList.contains('btn-dark')) {
        setLike(e.target.parentElement)
    }
}
const setLike = Objeto =>{
    const boton ={
        id: Objeto.querySelector('.btn-dark').dataset.id,
        cantidad:0
    } 
    if (like.hasOwnProperty(boton.id)) {
        boton.cantidad=like[boton.id].cantidad+1
        Objeto.querySelector('#like').textcontent=boton.cantidad
    };
    like[boton.id] ={...boton}
    console.log(like[boton.id]);
}
