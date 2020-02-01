var welcome = document.querySelector('#welcome-message');
var closeTab = document.querySelector('#close-tab');

closeTab.addEventListener('click', closeWelcomeMessage);

function closeWelcomeMessage() {
  welcome.classList.add('close-welcome');
}

var walletBtn = document.querySelector('#wallet-button');

walletBtn.addEventListener('click', walletView);


function walletView () {
  walletBtn.classList.toggle('button-selected');
}


var dashboardBtn = document.querySelector('#dashboard-button ');

dashboardBtn.addEventListenter('click', selectDashboard);


function selectDashboard() {

}
