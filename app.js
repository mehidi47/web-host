let statuss = document.querySelector(".status");
let arr = [
  "start",
  "startup-stage",
  "funding-search",
  "investor-search",
  "entrepreneur-experience",
  "funding-timeframe",
  "sign-up-form",
];
let hsh = document.querySelectorAll(".hsh");
hsh.forEach(function (h) {
  //   let checked = h.parentNode.nextSibling.nextSibling.getAttribute("checked");
  let parent = h.parentNode.parentElement;
  //   console.log(checked, parent.getAttributeNode);

  let href = h.getAttribute("href");
  h.addEventListener("click", function (e) {
    parent.classList.add("ac");
    setTimeout(() => {
      location.href = href;
    }, 250);
    var hash2 = location.hash?.substr(1);
    hsl(hash2);
  });
});

window.onhashchange = function () {
  var hash2 = location.hash?.substr(1);
  hsl(hash2);
};
function progress(i) {
  if (i == 0) {
    statuss.style.maxWidth = "10%";
  } else if (i == 1) {
    statuss.style.maxWidth = "20%";
  } else if (i == 2) {
    statuss.style.maxWidth = "35%";
  } else if (i == 3) {
    statuss.style.maxWidth = "55%";
  } else if (i == 4) {
    statuss.style.maxWidth = "75%";
  } else if (i == 5) {
    statuss.style.maxWidth = "90%";
  }
}

function hsl(hash) {
  var hash2 = location.hash?.substr(1);
  arr.map((e, i) => {
    if (hash === e) {
      progress(i);
      document.querySelector("." + e).style.display = "block";
    } else {
      if (!hash2 === e) {
        document.querySelector("." + e).style.display = "block";
        progress(i);
      } else {
        document.querySelector("." + e).style.display = "none";
      }
    }
  });
}
var hash2 = location.hash?.substr(1);
hsl(hash2);

if (!hash2) {
  location.hash = "start";
}
let label = document.querySelectorAll("label");
let labelInp = document.querySelectorAll(".fild input");
