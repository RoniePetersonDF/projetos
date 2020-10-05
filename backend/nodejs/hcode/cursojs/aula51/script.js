const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of paragrafos) {
    p.style.backgroundColor = 'rgb(17, 86, 102)';
    p.style.color = '#fff';
}