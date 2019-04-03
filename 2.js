const root = document.querySelector('#root');
const input= document.querySelector('input[type="number"]')

input.addEventListener('keyup', getInputValue);
input.addEventListener('change', getInputValue);

function showCatPhoto(url){
    const html = `
    
    <img src="https://http.cat/${url}">
 
    `;
    root.innerHTML = html;
}

function getInputValue(e) {
    if (e.target.value > 0 && e.target.value < 999) {
        showCatPhoto(e.target.value);
    } else {
      alert('Lutfen gecerli bir deger girin!');
      e.target.value = null;
    }
  }
// getCatError(100);
showCatPhoto(100);