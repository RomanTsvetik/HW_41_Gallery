"use strict"

// const myWorker = new Worker("js/photos.js");

// myWorker.onmessage = ({data}) => {
//     console.log(data);
//     let gallery = document.querySelector('#gallery');


//     for(let i = 0; i < data.imgs.length; i++) {
//         const img = document.createElement('img');
//         img.src  = data.imgs[i];
//         gallery.append(img);

//         if(i > 10) break;
//     }
// };

const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.append(container)



fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${localStorage.getItem('id')}`)
    //загружаем данные в json формате
    .then(response => response.json())
    .then(photos => photos.forEach(photo => {
        // общий блок для фотки
        const image_wrap = document.createElement('div');
        image_wrap.setAttribute('class', 'image_wrap')

        //фото
        const image = document.createElement('img');
        image.setAttribute('id', `${photo.id}`);
        image.setAttribute('class', 'photo');

        //название фото
        const title = document.createElement('h3');
        title.setAttribute('class', 'photo_title');
        title.innerHTML = photo.title;

        image_wrap.append(image);
        image_wrap.append(title);        
        
        container.append(image_wrap)

        image.innerHTML = photo.title
        console.log(image)
    }))

// console.log(localStorage.getItem('id'))


