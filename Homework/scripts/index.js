
const block = document.getElementById('block');

const elements = document.querySelectorAll('.tarakan');



const cursor = document.querySelector(".cursor"); 

const mouseMove = function (e) { 
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
};

document.addEventListener("mousemove", mouseMove);


elements.forEach(element => {
    element.style.display = 'none';
})

let lvl = 0;
let lenghtPage;
again.addEventListener('click', e => {
    lvl++;
    console.log("lvl: " + `${lvl}`)
    lenghtPage = e.pageX;
    clickElements();
});

function getRandomInt(max, min) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
  }
function clickElements(){
    again.disabled = true;
    elements.forEach(element => {
        element.style.display = 'block';
    })
    elements.forEach(element =>{
        let i = 0;
            let timerId = setInterval(() => {
                const widthStr = getComputedStyle(block).width;
                const width = +widthStr.substring(0,widthStr.indexOf('px'));
                const heightStr = getComputedStyle(block).height;
                const height = +heightStr.substring(0,heightStr.indexOf('px'));
    
                const minWidth = (lenghtPage - width)/2 + 70;
                const maxWidth = (lenghtPage - width)/2 + 550;
    
                element.style.left = getRandomInt(maxWidth,minWidth) + 'px';
                element.style.top = getRandomInt(160,13) + 'px';
                
                element.addEventListener('click', () => {
                    i = i + 1;
                    element.style.display = 'none';
                    if (i ==  elements.length) {
                        // Проверяем, не остались ли видимые элементы
                        if (Array.from(elements).every(el => el.style.display === 'none')) {
                            again.disabled = false;
                            alert('Victory! \nGet ready. Now it will be more difficult.\nGood luck!');
                            clearInterval(timerId);
                        }
                    }
                });

            },600);
    });
};
