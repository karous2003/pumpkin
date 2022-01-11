let title = document.getElementById('title');
let content = document.getElementById('content');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
btn.addEventListener('click',news);
function news(){
  list.innerHTML = list.innerHTML + `
  <div class='news'>
   <h2>${title.value}</h2>
   <p>${content.value}</p><hr>
  </div>
  `;
}
let i=0, imgArr=new Array();
imgArr[0] ="https://image.freepik.com/free-vector/cartoon-halloween-pumpkin_68377-143.jpg";
imgArr[1] ='https://png.pngtree.com/png-vector/20190912/ourlarge/pngtree-pumpkin-vector-and-icon-halloween-png-image_1727157.jpg';
imgArr[2] ='https://thumbs.dreamstime.com/b/halloween-pumpkin-icon-vector-autumn-symbol-flat-design-halloween-scary-pumpkin-smile-happy-face-orange-squash-silhouette-156272828.jpg';
function showImg(){
 document.getElementById('icon').src = imgArr[i];
 i = (i+1) %3;
}

function show(){
  setInterval(showImg,100);
}