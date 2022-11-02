document.getElementById('donate-btn').onclick = function () {
  location.href = '../donate/index.html';
};

const catalogueImgArr = document.getElementsByClassName('grid-card');
for (let index = 0; index < catalogueImgArr.length; index++) {
  catalogueImgArr[index].onmouseenter = () => {
    catalogueImgArr[index].getElementsByTagName('img')[0].style.cssText = `
    transform: scale(1.1);
    transition: 1s;
    -webkit-filter: brightness(60%);
    -moz-filter: brightness(60%);
    -o-filter: brightness(60%);
    -ms-filter: brightness(60%);
    filter: brightness(60%);`;
    catalogueImgArr[index].getElementsByTagName('h6')[0].style.cssText = `
      width: 350px;
      text-align: center;
      margin: auto;
      transform: translate(0,-200px); 
      transition: 1s;
      color: white;
      font-size: 20px;
      font-family: "Roboto-500";
    `;
    catalogueImgArr[index].getElementsByTagName('p')[0].style.cssText = `
      width: 350px;
      margin: auto;
      text-align: center;
      transform: translate(0,-170px); 
      transition: 1s;
      color: white;
      font-size: 18px;
      font-family: "Roboto-400";
    `;
  };
  catalogueImgArr[index].onmouseleave = () => {
    catalogueImgArr[index].getElementsByTagName('img')[0].style.cssText = `
    transform: scale(1);
    transition: 1s;
    -webkit-filter: brightness(100%);
    -moz-filter: brightness(100%);
    -o-filter: brightness(100%);
    -ms-filter: brightness(100%);
    filter: brightness(100%);`;
    catalogueImgArr[index].getElementsByTagName('h6')[0].style.cssText = `
      transform: translate(0,0); 
      transition: 2s;
      color: black;
      font-size: 10px;
      font-family: "Roboto-500";
    `;
    catalogueImgArr[index].getElementsByTagName('p')[0].style.cssText = `
      transform: translate(0,0); 
      transition: 2s;
      color: black;
      font-size: 10px;
      font-family: "Roboto-400";
    `;
  };
  // console.log(catalogueImgArr[index].getElementsByTagName('p')[0].innerText);
  // console.log(catalogueImgArr[index].getElementsByTagName('h6')[0].innerText);
  // console.log(catalogueImgArr[index].getElementsByTagName('p')[0].innerText);
  // getElementsByTagName('a');
}
// catalogueImgArr.forEach((element) => {});
