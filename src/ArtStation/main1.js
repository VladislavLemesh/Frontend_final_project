

fetch('/src/artStation/Pck.json').then((result) => {
    result.json().then((result) =>{
        addIMG(result.first);
        addIMG(result.secondImage);
        addIMG(result.third);
    })

})


function addIMG(link){
    let nextImg = document.createElement('img');
    nextImg.src = link;
    let body = document.querySelector('body');
    body.append(nextImg);

}
