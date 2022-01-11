// <DOG API CODE>
let timer;
let deleteFirstPhotoDelay;
let apiSlideShow = document.querySelector("#api-slideshow");
let breedId = document.querySelector("#breed");

async function start() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createBreedList(data.message);
  } catch (e) {
    alert("There was a problem fetching the breed list.");
  }
}

start();

function createBreedList(breedList) {
  breedId.innerHTML = `
  <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList)
          .map(function (breed) {
            return `<option>${breed}</option>`;
          })
          .join("")}
      </select>
  `;
}

async function loadByBreed(breed) {
  switch (breed != "Choose a dog breed") {
    case false:
      apiSlideShow.style.height = 0;
      break;
    default:
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await response.json();
      createSlideshow(data.message);
      apiSlideShow.style.height = "100vh";
      break;
  }
}

function createSlideshow(images) {
  let currentPosition = 0;
  clearInterval(timer);
  clearTimeout(deleteFirstPhotoDelay);

  if (images.length > 1) {
    apiSlideShow.innerHTML = `
    <div class="slide"
              style="background-image: url('${images[0]}')">
          </div>
          <div class="slide"
              style="background-image: url('${images[1]}')">
          </div>
    `;

    currentPosition += 2;
    if (images.length == 2) currentPosition = 0;
    timer = setInterval(nextSlide, 3000);
  } else {
    apiSlideShow.innerHTML = `
    <div class="slide"
              style="background-image: url('${images[0]}')">
          </div>
          <div class="slide">
          </div>
    `;
  }

  function nextSlide() {
    apiSlideShow.insertAdjacentHTML(
      "beforeend",
      `
    <div class="slide"
            style="background-image: url('${images[currentPosition]}')">
        </div>
    `
    );

    deleteFirstPhotoDelay = setTimeout(function () {
      document.querySelector(".slide").remove();
    }, 1000);

    if (currentPosition + 1 >= images.length) {
      currentPosition = 0;
    } else {
      currentPosition++;
    }
  }
}
// <DOG API CODE>
