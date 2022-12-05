if (window.innerWidth >= 1000 && window.innerWidth <= 1599) {
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
    let ourFirendsSlider = document.getElementById('small-catalog-slider-id');
    let ourFirendsAllDiv = document.getElementById('small-catalog-id');

    ourFirendsAllDiv.className = 'catalog-grid-alter-small';
    console.log(ourFirendsAllDiv.className);
    ourFirendsSlider.appendChild(ourFirendsAllDiv);

    let arrL = document.getElementById('left-id');

    let arrR = document.getElementById('right-id');

    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //   shuffle();

    function GenerateCards() {
      for (let j = 0; j < 8; j++) {
        // for (let j = 0; j < 3; j++) {
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
          image.style.cssText = `width:294px; height:294px;`;
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
      offSet -= 970;
      clickR++;
      ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
      // }
      if (clickR >= 3) {
        setTimeout(() => {
          ourFirendsSlider.innerHTML = '';
          offSet = 0;
          ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
          GenerateCards();
          ourFirendsSlider.appendChild(ourFirendsAllDiv);
        }, 1000);

        clickR = 0;
      }
    });

    arrL.addEventListener('click', () => {
      clickL++;
      offSet += 970;
      ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
      if (clickL >= 3) {
        setTimeout(() => {
          ourFirendsSlider.innerHTML = '';
          offSet = -971;
          offSet = -1941;
          offSet = -2911;
          offSet = -3881;
          ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
          GenerateCards();
          ourFirendsSlider.appendChild(ourFirendsAllDiv);
        }, 1000);
        clickL = 0;
      }
    });
  }
}
