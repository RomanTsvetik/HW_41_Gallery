"use strict"

const gallery = document.querySelector('#gallery');
let list = document.createElement('ul');
gallery.append(list);


// запрашиваем данные по всем альбомам
fetch('https://jsonplaceholder.typicode.com/albums/')
    //загружаем данные в json формате
    .then(response => response.json())
    // .then(album => console.log(album))

    // генерирую список, в который вывожу список альбомов, элементы списка ссылки.
    .then(albums => albums.forEach(album => {
        let listItem = document.createElement('li');
        listItem.setAttribute('id', `${album.id}`);
        listItem.innerHTML = album.title;
        list.append(listItem);
        console.log(album)
    }))
    

gallery.addEventListener('click', e => {
    // const albums = e.target.querySelectorAll('li');
    localStorage.setItem('id', e.target.id)
    redirectToNewPage()
    // console.log(e.target)    
})


// перевод на другую строку 
function redirectToNewPage() {
    window.location.href = "/album_page.html";    
}