const pp = document.getElementsByClassName('text');
const ff = document.getElementById('form');

ff.addEventListener('submit', function excute(e){
  e.preventDefault();
  const nam = document.getElementById('name').value;
  const y = document.getElementById('email').value;
  const op = document.getElementById('op').value;

  //email();
  //name();
  //opinion();

  nDiv = document.createElement("div");
  nDiv.classList.add("F");
  var head = document.createElement("h6");
  head.innerHTML = (" "+nam+ "");
  p = document.createElement("p")
  p.innerHTML = op;
  $(nDiv).append($(head));
  $(nDiv).append($(p));
  $(pp).append($(nDiv));
  ff.reset();
});

function email(){
  // read email Adress
  //append it to stylesheet

}
function name(){
  // read Name
  //append it to stylesheet
}
function opinion(){
  // read review
  //append it to stylesheet
}
