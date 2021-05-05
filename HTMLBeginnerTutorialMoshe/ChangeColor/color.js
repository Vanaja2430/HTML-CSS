const divs = document.querySelectorAll('.grid-item');
Array.from(divs).forEach(div => {
    div.addEventListener('click', classToggler);
});

const colors = ['forest', 'field', 'beach', 'mine', 'ocean'];
let	enumerator = 0;

function classToggler() {
if (enumerator < colors.length+1){
  	enumerator+=1;
  }
 else {enumerator=0};


this.classList.add(colors[enumerator]);
this.classList.remove(colors[enumerator-1]);
const yellows = document.querySelectorAll('.beach')
const infoLabel = document.querySelector('#info')
infoLabel.innerHTML = "There are " + yellows.length + " yellow box(es)." 
};