const myTimeout = setTimeout(menuUtama, 100);

function clear_body() {
  let body = document.getElementById("body");
  body.innerHTML = "";
  body.style.backgroundImage = "";
}

function menuUtama() {
  clear_body();
  let body = document.getElementById("body");
  body.innerHTML = `
        <div id="body">
            <div class="row justify-content-center text-center d-flex">
                <div>
                    <button id="start_btn" onclick="play_menu();">
                    <img src="Aset\\SIMPLE BUTTON\\BUTTON PLAY.png"/></button>
                </div>
                <div>
                    <button id="start_btn" onclick="about_menu();">
                        <img src="Aset\\SIMPLE BUTTON\\about usz.png"/>
                    </button>
                </div>
            </div>
        </div>`;
}

function about_menu() {
  clear_body();
  let body = document.getElementById("body");

  let row2 = document.createElement("div");
  body.innerHTML = `
  <h1 class="text-center">ABOUT LOTUS GROUP</h1>
  <div class="container text-center">
    <div class="row align-items-start">
      <div class="col">
        <div class="card">
          <img
            src="Aset//CAROLINE.Jpg"
            class="card-img-top"
            alt="..."
          />

          <div class="card-body">
            <h5 class="card-title">Caroline Susanto</h5>
            <p class="card-text">
              Halo Nama saya Caroline Susanto dengan NIM 00000071280 
              Saya Melakukan Pekerjaan Membuat Asset dan coding di Group ini.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="Aset/Steven.jpg"
            class="card-img-top"
            alt="..."
          />

          <div class="card-body">
            <h5 class="card-title">Ignatius Steven</h5>
            <p class="card-text">
            Halo Nama saya Ignatius Steven dengan NIM 00000070642 
            Saya bertugas sebagai debugger, program planner, dan membantu membangun algoritma dalam kelompok ini.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="Aset//Michael Vallent (00000071631).jpeg"
            class="card-img-top"
            alt="..."
          />

          <div class="card-body">
            <h5 class="card-title">Michael Vallent</h5>
            <p class="card-text">
            Halo Nama saya Michael Vallent dengan NIM 00000071631
                Dalam grup ini saya membuat Asset dan Coding
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="Aset/ASSET_GAME_CLICKER/stand toko.png"
            class="card-img-top"
            alt="..."
          />

          <div class="card-body">
            <h5 class="card-title">Reynata Prajnadi Tangajaya</h5>
            <p class="card-text">
                Halo Nama saya Reynata Prajnadi Tangjaya dengan NIM 00000070461, saya bertugas untuk membuat beberapa aset dan fitur yang digunakan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h1 class="text-start"  class="mt-3">References</h1>
  <ul class="reference">
    <li>
      idea game
      https://replit.com/talk/learn/How-to-Make-a-Responsive-Clicker-Game-in-HTML-CSS-JS/141212
    </li>
    <li>dot https://www.w3schools.com/tags/tag_ul.asp</li>
    <li>
      Text center
      https://getbootstrap.com/docs/5.3/utilities/text/#text-alignment
    </li>
    <li>
      Coloumn https://getbootstrap.com/docs/5.3/layout/columns/#how-they-work
    </li>
    <li>
      Place Holder
      https://getbootstrap.com/docs/5.3/components/placeholders/#about
    </li>
  </ul>
  <div class="col text-center"><button id="start_btn" onclick="menuUtama();"><img src="Aset\\SIMPLE BUTTON\\back.png"/></button></div>
  `;
}

function play_menu() {
  clear_body();

  let body = document.getElementById("body");
  body.innerHTML = `
        <div id="body">
<div id="page-wrapper" class="container">
    <div id="kotakatas" class="col">
      <div class="col-sm-4">
        <div id="info">
          <p id="appleCounter">
            money = <span id="showmoney" class="number">0</span>
          </p>
          <p id="gameOver"></p>
        </div>
      </div>
      <div class="col-sm-4">
        <div id="info">
          <p>
            per second =<span id="showmoneyPerSecond" class="number">0</span>
          </p>
          <p id="gameOver"></p>
        </div>
      </div>
      <div class="col-sm-4">
        <div id="info">
          <p>
            money per click =
            <span id="showmoneyPerClick" class="number">1</span>
          </p>
          <p id="gameOver"></p>
        </div>
      </div>
    </div>
    <div class="tampilan1" id="body">
    <img class="image1" src="Aset/ASSET_GAME_CLICKER/Untitled 04-01-2023 12-41-12.gif" />
    <img class="image2" src="Aset/ASSET_GAME_CLICKER/stand toko.png" />
    <img onclick="increment()" class="button1" />
    <img class="image3" src="Aset/ASSET_GAME_CLICKER/meja makan.png" />
    </div>

    <center>
      <!--TAMPILAN YANG BISA DI KLIK -->
      <!-- TAMPILAN YANG RESPONSIVE -->
      <div id="scroll">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6">
                <!-- GAMBAR -->
                <img
                  src="Aset/CHAR_ASSETS/monyet bayi.png"
                  class="itemImage"
                  style="width: 100px; height: 170px"
                />
              </div>
              <div class="col-sm-6">
                <!-- TEXT -->
                <div class="containerText">
                  <p>monyets: <span id="monyetNum">0</span></p>
                  <p>monyet cost: <span id="monyetCost">10</span></p>
                  <p>+1 money per second</p>
                </div>

                <!-- BUTTON -->
                <div class="buyButtonContainer">
                  <button onmousedown="buymonyet()" class="buyButton">Buy</button>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <img
                  src="Aset/CHAR_ASSETS/anak ayam.png"
                  class="itemImage"
                  style="width: 100px; height: 170px"
                />
              </div>
              <div class="col-sm-6">
                <div class="containerText">
                  <p>burung: <span id="burungNum">0</span></p>
                  <p>burung cost: <span id="burungCost">10</span></p>
                  <p>+1 money per Click</p>
                </div>
                <div class="buyButtonContainer">
                  <button onmousedown="buyburung()" class="buyButton">Buy</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6">
                <img
                  src="Aset/CHAR_ASSETS/kucing dewasa.png"
                  class="itemImage"
                  style="width: 100px; height: 170px"
                />
              </div>
              <div class="col-sm-6">
                <!-- TEXT -->
                <div class="containerText">
                  <p>kucing: <span id="kucingNum">0</span></p>
                  <p>kucing cost: <span id="kucingCost">30</span></p>
                  <p>+100 money per second</p>
                </div>

                <div class="buyButtonContainer">
                  <button onmousedown="buykucing()" class="buyButton">Buy</button>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <img
                  src="Aset/CHAR_ASSETS/Char_Idle.png"
                  class="itemImage"
                  style="width: 100px; height: 170px"
                />
              </div>
              <div class="col-sm-6">
                <div class="containerText">
                  <p>peri: <span id="periNum">0</span></p>
                  <p>peri cost: <span id="periCost">50</span></p>
                  <p>+1000 money per second</p>
                </div>
                <div class="buyButtonContainer">
                  <button onmousedown="buyperi()" class="buyButton">Buy</button>
                </div>
              </div>
            </div>
          </div>

          <!---- ENDING ------>
        </div>
      </div>
    </div>
    <div class="col text-center"><button id="start_btn" onclick="menuUtama();"><img src="Aset\\SIMPLE BUTTON\\back.png"/></button></div>
    </center>
    </div><!--Page Wrapper-->
</div>`;
}

// the things was run

var money = 0;
var moneyPerSecond = 0;
var moneyPerClick = 1;

// costs of items
var monyetCost = 10;
var kucingCost = 30;
var periCost = 50;
var burungCost = 10;

// how many items you have
var monyets = 0;
var kucing = 0;
var peri = 0;
var burungs = 0;

// ...

// function that gets called when you click the apple logo
function increment() {
  money += moneyPerClick; // adds the number of money per click to your total money

  // updates the HTML to show the new number of money
  document.getElementById("showmoney").innerText = parseInt(money);
}

// function that happens every second
setInterval(function () {
  money += moneyPerSecond; // adds the number of money per second to your total money
  document.getElementById("showmoney").innerText = parseInt(money); // uses DOM to change the number of money in the HTML
  if (money >= 99999) {
    // if it's higher than the world population
    document.getElementById("gameOver").innerText =
      "You won the game! Apple dominates the Earth!";
  }
}, 1000); // every 1000 milliseconds (1 second)

// will be called when user pressed buy button
function buymonyet() {
  if (money >= monyetCost) {
    money -= monyetCost; // subtracts cost money

    document.getElementById("showmoney").innerText = parseInt(money); // "updates" the HTML

    monyets++; // increments number of that item

    document.getElementById("monyetNum").innerText = parseInt(monyets);

    monyetCost += 10; // doubles price of that item

    document.getElementById("monyetCost").innerText = parseInt(monyetCost);

    moneyPerClick += 1; // increases number of money per second

    document.getElementById("showmoneyPerClick").innerText =
      parseInt(moneyPerClick);
  } else {
    // if there enough money
    alert("You don't have enough money!");
  }
}

function buyburung() {
  if (money >= burungCost) {
    money -= burungCost;

    document.getElementById("showmoney").innerText = parseInt(money);

    burungs++;

    document.getElementById("burungNum").innerText = parseInt(burungs);

    burungCost += 10;

    document.getElementById("burungCost").innerText = parseInt(burungCost);

    moneyPerClick += 1; // increases number of money per click

    document.getElementById("showmoneyPerClick").innerText =
      parseInt(moneyPerClick);
  } else {
    alert("You don't have enough money!");
  }
}
function buykucing() {
  if (money >= kucingCost) {
    money -= kucingCost; // subtracts cost money

    document.getElementById("showmoney").innerText = parseInt(money); // "updates" the HTML

    kucing++; // increments number of that item

    document.getElementById("kucingNum").innerText = parseInt(kucing);

    kucingCost *= 1.5;

    document.getElementById("kucingCost").innerText = parseInt(kucingCost);

    moneyPerSecond += 100; // hitungan di mulai dari 0 jadi 98

    document.getElementById("showmoneyPerSecond").innerText =
      parseInt(moneyPerSecond);
  } else {
    // if there enough money
    alert("You don't have enough money!");
  }
}

function buyperi() {
  if (money >= periCost) {
    money -= periCost; // subtracts cost money

    document.getElementById("showmoney").innerText = parseInt(money); // "updates" the HTML

    peri++; // increments number of that item

    document.getElementById("periNum").innerText = parseInt(peri);

    periCost *= 1.6;

    document.getElementById("periCost").innerText = parseInt(periCost);

    moneyPerSecond += 1000; // hitungan di mulai dari 0 jadi 999

    document.getElementById("showmoneyPerSecond").innerText =
      parseInt(moneyPerSecond);
  } else {
    // if there enough money
    alert("You don't have enough money!");
  }
}
