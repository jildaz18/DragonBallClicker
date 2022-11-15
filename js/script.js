const click = new Audio('./DragonBallClicker/sound/blast.mp3');
click.play()
var cookiesNum = 0;
cookies.innerHTML = cookiesNum + " Ki";
localStorage.setItem("lead", 12333)
var lead = localStorage.getItem("lead")
var cookieimg = document.getElementById("cookie");
var upgrade = 1;
var upgradebutton = document.getElementById("upgradebtn");
var cookieamount = 50;
var grandmaAmount = 100;
var grandmas = 0;
var grandmaInterval;
var body = document.getElementById("body");
var chefAmount = 200;
var chefs = 0;
var chefInterval;
var chefcookieAmount = 5;
var chefcookies = chefs * chefcookieAmount;
var factoryAmount = 1000;
var factories = 0;
var factoryInterval;
var factoryCookieAmount = 25;
var factoryCookies = factories * factoryCookieAmount;
var opacityScale = 0;
var upgradebtn = document.getElementById("upgradebtn");
var grandmabtn = document.getElementById("grandmalol");
var chefbtn = document.getElementById("chef");
var factorybtn = document.getElementById("factory");
var showUpgrades = document.getElementById("showUpgrades");
var highspeedbtn = document.getElementById("HighSpeedProcessor");
var processorAmount = 1500;
var processors = 0;
var processorInterval;
var processorCookieAmount = 50;
var processorCookies = processors * processorCookieAmount;
var hackerbtn = document.getElementById("CookieHacker");
var hackerAmount = 2000;
var hackers = 0;
var hackerInterval;
var hackerCookieAmount = 150;
var hackerCookies = hackers * hackerCookieAmount;
var robotbtn = document.getElementById("robot");
var robotAmount = 5000;
var robots = 0;
var robotInterval;
robotCookieAmount = 500;
var robotCookies = robots * robotCookieAmount;
var robot2btn = document.getElementById("robot2");
var robot2Amount = 10000;
var robots2 = 0;
var robot2Interval;
robot2CookieAmount = 1000;
var robot2Cookies = robots2 * robot2CookieAmount;
var bakery = document.getElementById("bakery")

var thanosAmount = 15000;
var thanos = 0;
var thanosInterval;
thanosCookieAmount = 15000;
var thanosCookies = robots2 * robot2CookieAmount;
var thanosbtn = document.getElementById("thanos");

// Kaioken \\
var mysteryAmount = 100000;
var mysteries = 0;
var mysteryInterval;
var mysteryCookieAmount = 150000;
var mysteryCookies = mysteries * mysteryCookieAmount;
var mysterybtn = document.getElementById("mystery");

// Super Saiyan \\
var legendAmount = 1000000;
var legends = 0;
var legendInterval;
var legendCookieAmount = 1000000;
var legendCookies = legends * legendCookieAmount;
var legendbtn = document.getElementById("legendbtn");

// Super Saiyen 2 \\
var bitAmount = 10000000;
var bits = 0;
var bitInterval;
var bitCookieAmount = 5000000;
var bitCookies = bits * bitCookieAmount;
var bitbtn = document.getElementById("bitbtn");

// Super Saiyan 3 \\
var laserAmount = 1000000000;
var lasers = 0;
var laserInterval;
var laserCookieAmount = 500000000;
var laserCookies = bits * bitCookieAmount;
var laserbtn = document.getElementById("laserbtn");

// Super Saiyan Divin \\
var realmAmount = 10000000000;
var realms = 0;
var realmInterval;
var realmCookieAmount = 1000000000;
var realmCookies = bits * realmCookieAmount;
var realmbtn = document.getElementById("realmbtn");

// Super Saiyan Blue \\
var malwareAmount = 100000000;
var malwares = 0;
var malwareInterval;
var malwareCookieAmount = 50000000;
var malwareCookies = malwares * malwareCookieAmount;
var malwarebtn = document.getElementById("malwarebtn");

// Ajout cookies \\
var leaders = document.getElementById("leaders")
function addcookie() {
  cookiesNum += upgrade;
  cookies.innerHTML = cookiesNum + " Ki";
}

// Kaioken au clic //

function upgradefunc() {
  if (cookiesNum >= cookieamount) {
    upgrade += 1;
    cookiesNum -= cookieamount;
    cookies.innerHTML = cookiesNum + " Ki";
    document.querySelector("#cookie").src = './images/3.png';
    document.querySelector('body').style.backgroundImage = "url('images/a.png')";
    var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', './sound/kaioken.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()
  }
}

// Super Saiyan au clic //

function grandma() {
  if (cookiesNum >= grandmaAmount) {
    cookiesNum -= grandmaAmount;
    grandmas += 1;
    cookies.innerHTML = cookiesNum + " Ki";
    grandmaIntFunc()
    document.querySelector("#cookie").src = './images/4.png'
    document.querySelector('body').style.backgroundImage = "url('images/b.png')";
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './sound/ssj.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
  }
}

function grandmaIntFunc() {
  grandmaInterval = setInterval(grandmaNum, 1000);
}

function grandmaNum() {
  cookiesNum += grandmas;
  cookies.innerHTML = cookiesNum + " Ki";
}

function chef() {
  if (cookiesNum >= chefAmount) {
    cookiesNum -= chefAmount;
    chefs += 1;
    cookies.innerHTML = cookiesNum + " Ki";
    chefIntervalFunc()
    document.querySelector("#cookie").src = './images/5.png'
    document.querySelector('body').style.backgroundImage = "url('images/b.png')";
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './sound/ssj2.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
  }
}

function chefIntervalFunc() {
  chefInterval = setInterval(chefNum, 1000);
}

function chefNum() {
  chefcookies = chefs * chefcookieAmount;
  cookiesNum += chefcookies;
  cookies.innerHTML = cookiesNum + " Ki";
}

function factory() {
  if (cookiesNum >= factoryAmount) {
    cookiesNum -= factoryAmount;
    factories += 1;
    cookies.innerHTML = cookiesNum + " Ki";
    factoryIntervalFunc()
    document.querySelector("#cookie").src = './images/6.png'
    document.querySelector('body').style.backgroundImage = "url('images/b.png')";
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './sound/ssj3.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
  }
}

function factoryIntervalFunc() {
  factoryInterval = setInterval(factoryNum, 1000)
}

function factoryNum() {
  factoryCookies = factories * factoryCookieAmount;
  cookiesNum += factoryCookies;
  cookies.innerHTML = cookiesNum + " Ki";
}

function showAllUpgrades() {
  if (opacityScale == 0) {
    opacityScale = 1;
    upgradebtn.style.opacity = 1;
    grandmabtn.style.opacity = 1;
    chefbtn.style.opacity = 1;
    factorybtn.style.opacity = 1;
    highspeedbtn.style.opacity = 1;
    hackerbtn.style.opacity = 1;
    robotbtn.style.opacity = 1;
    robot2btn.style.opacity = 1;
    thanosbtn.style.opacity = 1;
    mysterybtn.style.opacity = 1;
    legendbtn.style.opacity = 1;
    bitbtn.style.opacity = 1;
    malwarebtn.style.opacity = 1;
    laserbtn.style.opacity = 1;
    upgradebtn.style.pointerEvents = "all";
    grandmabtn.style.pointerEvents = "all";
    chefbtn.style.pointerEvents = "all";
    factorybtn.style.pointerEvents = "all";
    highspeedbtn.style.pointerEvents = "all";
    hackerbtn.style.pointerEvents = "all";
    robotbtn.style.pointerEvents = "all";
    robot2btn.style.pointerEvents = "all";
    thanosbtn.style.pointerEvents = "all";
    mysterybtn.style.pointerEvents = "all";
    legendbtn.style.pointerEvents = "all";
    bitbtn.style.pointerEvents = "all";
    malwarebtn.style.pointerEvents = "all";
    laserbtn.style.pointerEvents = "all";
    showUpgrades.innerHTML = "Close All Upgrades..";

  } else {
    opacityScale = 0;
    upgradebtn.style.opacity = 0;
    grandmabtn.style.opacity = 0;
    chefbtn.style.opacity = 0;
    factorybtn.style.opacity = 0;
    highspeedbtn.style.opacity = 0;
    hackerbtn.style.opacity = 0;
    robotbtn.style.opacity = 0;
    robot2btn.style.opacity = 0;
    thanosbtn.style.opacity = 0;
    mysterybtn.style.opacity = 0;
    legendbtn.style.opacity = 0;
    bitbtn.style.opacity = 0;
    malwarebtn.style.opacity = 0;
    laserbtn.style.opacity = 0;
    upgradebtn.style.pointerEvents = "none";
    grandmabtn.style.pointerEvents = "none";
    chefbtn.style.pointerEvents = "none";
    factorybtn.style.pointerEvents = "none";
    highspeedbtn.style.pointerEvents = "none";
    hackerbtn.style.pointerEvents = "none";
    robotbtn.style.pointerEvents = "none";
    robot2btn.style.pointerEvents = "none";
    thanosbtn.style.pointerEvents = "none";
    mysterybtn.style.pointerEvents = "none";
    legendbtn.style.pointerEvents = "none";
    bitbtn.style.pointerEvents = "none";
    malwarebtn.style.pointerEvents = "none";
    laserbtn.style.pointerEvents = "none";
    showUpgrades.innerHTML = "Open All Upgrades...";
  }
}

function processor() {
  if (cookiesNum >= processorAmount) {
    cookiesNum -= processorAmount;
    processors += 1;
    cookies.innerHTML = cookiesNum + " Ki";
    processorIntervalFunc()
    document.querySelector("#cookie").src = './images/7.png'
    document.querySelector('body').style.backgroundImage = "url('images/c.png')";
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './sound/ssjgod.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
  }
}

function processorIntervalFunc() {
  processorInterval = setInterval(processorNum, 1000)
}

function processorNum() {
  processorCookies = processors * processorCookieAmount;
  cookiesNum += processorCookies;
  cookies.innerHTML = cookiesNum + " Ki";
}

function hacker() {
  if (cookiesNum >= hackerAmount) {
    cookiesNum -= hackerAmount;
    hackers += 1;
    cookies.innerHTML = cookiesNum + " Ki";
    hackerIntervalFunc()
    document.querySelector("#cookie").src = './images/8.png'
    document.querySelector('body').style.backgroundImage = "url('images/d.png')";
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './sound/ssjb.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
  }
}

function hackerIntervalFunc() {
  hackerInterval = setInterval(hackerNum, 1000)
}

function hackerNum() {
  hackerCookies = hackers * hackerCookieAmount;
  cookiesNum += hackerCookies;
  cookies.innerHTML = cookiesNum + " Ki";
}

//Super Saiyan Blue Kaioken//

function robot() {
  if (cookiesNum >= robotAmount) {
    cookiesNum -= robotAmount;
    robots += 1;
    cookies.innerHTML = cookiesNum + " Ki";
    robotIntervalFunc()
    document.querySelector("#cookie").src = './images/9.png'
    document.querySelector('body').style.backgroundImage = "url('images/e.png')";
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './sound/ssjbk.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
  }
}

function robotIntervalFunc() {
  robotInterval = setInterval(robotNum, 1000)
}

function robotNum() {
  robotCookies = robots * robotCookieAmount;
  cookiesNum += robotCookies;
  cookies.innerHTML = cookiesNum + " Ki";
}

// Ultra Instinct Incomplet //

function robot2() {
  if (cookiesNum >= robot2Amount) {
    cookiesNum -= robot2Amount;
    robots2 += 1;
    cookies.innerHTML = cookiesNum + " Ki";
    robot2IntervalFunc()
    document.querySelector("#cookie").src = './images/10.png'
    document.querySelector('body').style.backgroundImage = "url('images/f.png')";
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './sound/mi.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
  }
}

function robot2IntervalFunc() {
  robot2Interval = setInterval(robot2Num, 1000)
}

function robot2Num() {
  robot2Cookies = robots2 * robot2CookieAmount;
  cookiesNum += robot2Cookies;
  cookies.innerHTML = cookiesNum + " Ki";
}

//Ultra Instinct Complet//

function thanosgo() {
  if (cookiesNum >= thanosAmount) {
    cookiesNum -= thanosAmount;
    thanos += 1;
    cookies.innerHTML = cookiesNum + " Ki";
    thanosIntervalFunc()
    document.querySelector("#cookie").src = './images/11.png'
    document.querySelector('body').style.backgroundImage = "url('images/g.png')";
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './sound/mmi.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
  }
}

function thanosIntervalFunc() {
  thanosInterval = setInterval(thanosNum, 1000)
}

function thanosNum() {
  thanosCookies = thanos * thanosCookieAmount;
  cookiesNum += thanosCookies;
  cookies.innerHTML = cookiesNum + " Ki";
}
