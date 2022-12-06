// document.getElementById('donate-btn').onclick = function () {
//   location.href = '../donate/index.html';
// };

document.getElementById('logo-anchor').onclick = function () {
  location.href = './index.html';
};
window.onresize = function () {
  document.location.reload(true);
};
// document.getElementById('logo-anchor2').onclick = function () {
//   location.href = './index.html';
// };

// const catalogueImgArr = document.getElementsByClassName('grid-card');
// for (let index = 0; index < catalogueImgArr.length; index++) {
//   catalogueImgArr[index].onmouseenter = () => {
//     catalogueImgArr[index].getElementsByTagName('img')[0].style.cssText = `
//     transform: scale(1.1);
//     transition: 1s;
//     -webkit-filter: brightness(50%);
//     -moz-filter: brightness(50%);
//     -o-filter: brightness(50%);
//     -ms-filter: brightness(50%);
//     filter: brightness(50%);`;
//     catalogueImgArr[index].getElementsByTagName('h6')[0].style.cssText = `
//       width: 312px;
//       text-align: center;
//       margin: auto;
//       transform: translate(0,-230px);
//       transition: 1s;
//       color: white;
//       font-size: 20px;
//       font-family: "Roboto-500";
//     `;
//     catalogueImgArr[index].getElementsByTagName('p')[0].style.cssText = `
//       width: 312px;
//       margin: auto;
//       text-align: center;
//       transform: translate(0,-200px);
//       transition: 1s;
//       color: white;
//       font-size: 18px;
//       font-family: "Roboto-400";
//     `;
//   };
//   catalogueImgArr[index].onmouseleave = () => {
//     catalogueImgArr[index].getElementsByTagName('img')[0].style.cssText = `
//     transform: scale(1);
//     transition: 1s;
//     -webkit-filter: brightness(100%);
//     -moz-filter: brightness(100%);
//     -o-filter: brightness(100%);
//     -ms-filter: brightness(100%);
//     filter: brightness(100%);`;
//     catalogueImgArr[index].getElementsByTagName('h6')[0].style.cssText = `
//       transform: translate(0,0);
//       transition: 1s;
//       color: black;
//       font-family: "Roboto-500";
//       font-size: 16px;
//     `;
//     catalogueImgArr[index].getElementsByTagName('p')[0].style.cssText = `
//       transform: translate(0,0);
//       transition: 1s;
//       color: black;
//       font-family: "Roboto-300";
//       font-size: 15px;
//     `;
//   };
//   // console.log(catalogueImgArr[index].getElementsByTagName('p')[0].innerText);
//   // console.log(catalogueImgArr[index].getElementsByTagName('h6')[0].innerText);
//   // console.log(catalogueImgArr[index].getElementsByTagName('p')[0].innerText);
//   // getElementsByTagName('a');
// }
// catalogueImgArr.forEach((element) => {});

// window.onresize = function (event) {
//   if (document.body.clientWidth === '320px') {
//     document.location.reload(true);
//   }
// };

//POP UP REWIEW
if (window.innerWidth >= 320 && window.innerWidth <= 640) {
  function closePopUpnClear(element, cont) {
    element.remove();
    cont.style.display = 'none';
  }
  const testArr = document.querySelectorAll('.testimonials-item');
  const container = document.getElementById('popup-testimonial-id');
  const containerInner = document.getElementById('popup-testimonial-inner-id');
  const closeBtn = document.getElementById('popup-testimonial-btn-id');
  for (let i = 0; i < testArr.length; i++) {
    testArr[i].addEventListener('click', () => {
      let p_prime = testArr[i].cloneNode(true);
      if (containerInner.innerHTML === '') {
        container.style.display = 'block';
        containerInner.appendChild(p_prime);
      }

      document.getElementById('overlay-id').style.display = 'block';
      document.getElementById('overlay-id').style.backgroundColor =
        'rgba(0, 0, 0, 0.3)';
      document.getElementById('overlay-id').style.height = '4271px';
      // document.getElementById('overlay-id').style.top = '3300px';

      closeBtn.addEventListener('click', function () {
        containerInner.innerHTML = '';
        container.style.display = 'none';
      });
    });
  }
}

// const closeBtn = document.getElementById('popup-testimonial-btn-id');
// closeBtn.onclick = function () {
//   const container = document.getElementById('popup-testimonial-id');
//   container.innerHTML = '';
//   container.style.display = 'none';
// };
//////////////////////////
// PROGRESSBAR/CAROUSEL
const progressBarCar = document.getElementById('testimonials-container-id');
const radioBTNArr = document.querySelectorAll('.button-prop input');
for (let i = 0; i < radioBTNArr.length; i++) {
  // let offSet = -297;
  let offSet = 0;
  radioBTNArr[i].addEventListener('change', () => {
    if (window.innerWidth >= 1600) {
      offSet = -297;
    }
    if (window.innerWidth >= 1000 && window.innerWidth <= 1599) {
      offSet = -322;
    }

    progressBarCar.style.cssText = `transform: translateX(${
      offSet * i
    }px); transition: 1s;`;
  });
}

///////////////////////////////
// BURGER MENU

function toggleBurgerMenu() {
  document.getElementById('open-burger-menu-container-id').style.display =
    'none';
  const page = document.getElementsByTagName('body')[0];
  page.classList.remove('noscroll');
  document.getElementById('overlay-id').style.display = 'none';
  // document.getElementById('overlay-id').style.zIndex = 1001;
  document.getElementById('overlay-id').style.backgroundColor =
    'rgba(0, 0, 0, 0)';
}
document.body.addEventListener('click', toggleBurgerMenu, true);
document.getElementById('burger-control-id').onclick = function () {
  document.getElementById('open-burger-menu-container-id').style.display =
    'block';
  document.getElementById('open-burger-menu-container-id').style.position =
    'fixed';
  document.getElementById('open-burger-menu-container-id').style.zIndex = 1001;
  document.getElementById('overlay-id').style.display = 'block';
  document.getElementById('overlay-id').style.backgroundColor =
    'rgba(0, 0, 0, 0.3)';
  const page = document.getElementsByTagName('body')[0];
  page.classList.add('noscroll');
};

document.getElementById('burger-btn-menu-id').onclick = function (e) {
  e.stopPropagation();
  document.getElementById('open-burger-menu-container-id').style.display =
    'none';
};
//////////////////////////////////////////

fetch('./petsCarusel.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(data) {
  // if (window.innerWidth <= 640 && window.innerWidth !== 639) {
  //   window.onresize = function () {
  //     location.reload();
  //   };
  //   document.getElementById('open-burger-menu-container-id').className =
  //     'open-burger-menu-container-alt';
  // }
  /////////////////////////////////
  let ourFirendsSlider = document.getElementById('small-catalog-slider-id');
  let ourFirendsAllDiv = '';

  if (window.innerWidth >= 1600) {
    window.onresize = function () {
      location.reload();
    };
    document.getElementById('open-burger-menu-container-id').style.display =
      'none';
    ourFirendsAllDiv = document.getElementById('catalog-id');
    document.getElementById('small-catalog-id').style.display = 'none';
    ourFirendsAllDiv.className = 'catalog-grid';
  }
  if (window.innerWidth >= 1000 && window.innerWidth <= 1599) {
    window.onresize = function () {
      location.reload();
    };
    ourFirendsAllDiv = document.getElementById('small-catalog-id');
    document.getElementById('catalog-id').style.display = 'none';
    ourFirendsAllDiv.className = 'catalog-grid-alter-small';
  }

  // console.log(ourFirendsAllDiv.className);

  ourFirendsSlider.appendChild(ourFirendsAllDiv);

  let arrL = document.getElementById('left-id');

  let arrR = document.getElementById('right-id');

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //   shuffle();

  function GenerateCards() {
    for (let j = 0; j < 8; j++) {
      // for (let j = 0; j < 9; j++) {
      let randyBank = [];

      while (randyBank.length < 6) {
        let randy = randomInteger(0, 5);
        if (randyBank.includes(data[randy])) {
        } else {
          randyBank.push(data[randy]);
        }
      }

      for (let i = 0; i < randyBank.length; i++) {
        let petCard = document.createElement('div');
        petCard.className = 'grid-card';
        let image = document.createElement('img');
        if (window.innerWidth >= 1600) {
          image.style.cssText = `width:366px; height:366px;`;
        }
        if (window.innerWidth >= 1000 && window.innerWidth <= 1599) {
          image.style.cssText = `width:294px; height:294px;`;
        }
        let DietImage = document.createElement('img');
        let overLay = document.createElement('div');
        overLay.className = 'overlay';
        let catalogLegend = document.createElement('div');
        let catalogLegendInner = document.createElement('div');
        catalogLegend.className = 'catalog-legend';
        catalogLegendInner.className = 'catalog-legend-inner';
        let petName = document.createElement('h6');
        let petArea = document.createElement('p');

        image.src = randyBank[i].img;
        DietImage.src = randyBank[i].dietImg;
        petName.innerText = randyBank[i].name;
        petArea.innerText = randyBank[i].area;

        petCard.appendChild(image);
        petCard.appendChild(overLay);
        catalogLegendInner.appendChild(petName);
        catalogLegendInner.appendChild(petArea);
        catalogLegend.appendChild(catalogLegendInner);
        catalogLegend.appendChild(DietImage);
        petCard.appendChild(catalogLegend);
        ourFirendsAllDiv.appendChild(petCard);
      }
    }
  }
  GenerateCards();

  let offSet = 0;
  let clickR = 0;
  let clickL = 0;

  arrR.addEventListener('click', () => {
    if (window.innerWidth >= 1600) {
      offSet -= 1179;
    }
    if (window.innerWidth >= 1000 && window.innerWidth <= 1599) {
      offSet -= 970;
    }

    clickR++;
    ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;

    if (clickR >= 3) {
      // if (clickR >= 1) {
      if (window.innerWidth >= 1600) {
        offSet = 4716;
      }
      if (window.innerWidth >= 1000 && window.innerWidth <= 1599) {
        offSet = 0;
      }

      setTimeout(() => {
        ourFirendsSlider.innerHTML = '';
        ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
        GenerateCards();
        ourFirendsSlider.appendChild(ourFirendsAllDiv);
      }, 1000);

      clickR = 0;
    }
  });

  arrL.addEventListener('click', () => {
    clickL++;
    if (window.innerWidth >= 1600) {
      offSet += 1179;
    }
    if (window.innerWidth >= 1000 && window.innerWidth <= 1599) {
      offSet += 970;
    }

    ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
    if (clickL >= 3) {
      // if (clickL >= 1) {
      if (window.innerWidth >= 1600) {
        offSet = -3536;
      }
      if (window.innerWidth >= 1000 && window.innerWidth <= 1599) {
        offSet = -3881;
        offSet = -3875;
      }

      setTimeout(() => {
        ourFirendsSlider.innerHTML = '';

        ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
        GenerateCards();
        ourFirendsSlider.appendChild(ourFirendsAllDiv);
      }, 1000);
      clickL = 0;
    }
  });
}
