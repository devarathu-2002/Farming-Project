var navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    
}
var cartItem=document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
var searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    
}
window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
    
};

function get(){
    var a=document.getElementById('para');
    a.innerHTML="Farming started in the predynastic period at the end of the Paleolithic, after 10,000 BC. Staple food crops were grains such as wheat and barley, alongside industrial crops such as flax and papyrus.<br><br> In India, wheat, barley and jujube were domesticated by 9,000 BC, soon followed by sheep and goats.Agriculture is the backbone of our country's economy. It is the main traditional occupation of our country. India produces both Kharif and Rabi crops. The main crops produced in India are rice, wheat, maize, jute, sugarcane, other cereals, pulses, spices, cotton, tea, coffee, etc. <br>  <br>Egyptians were among the first peoples to practice agriculture on a large scale, starting in the pre-dynastic period from the end of the Paleolithic into the Neolithic, between around 10,000 BC and 4000 BC.";
    document.getElementById('learn').style.display='none';
}

var h=0
function get1(a,b){
    var c=document.getElementById('n1');
    var d=document.createElement('li');
    d.textContent=a+" "+b;
    c.appendChild(d);
    
    h=h+b;
    var u=document.getElementById('n2');
    u.innerHTML="Total Cart Items: "+h;

}

function finish(){
    document.getElementById("n1").innerHTML=""
    document.getElementById("n2").innerHTML=""
}

function deva(){
    var a=document.getElementById('para1');
    a.innerHTML="Organic farming is a method of agriculture that aims to produce food using natural processes and substances. It focuses on maintaining ecological balance, enhancing soil fertility, and promoting biodiversity. Here are some key principles of organic farming.<br>Organic farming principles emphasize harmony with nature, sustainable resource use, and ecological balance. By adhering to these principles, organic farmers aim to produce healthy food while preserving the environment and promoting social and economic well-being.";
    document.getElementById('learn1').style.display='none';
}
function deva2(){
    var a=document.getElementById('para2');
    a.innerHTML="Irrigation is a critical component of agricultural practices, allowing for the controlled application of water to crops. Effective irrigation ensures optimal growth, improves yield, and conserves water resources. Here are some common and advanced irrigation techniques. <br> Choosing the appropriate irrigation technique is crucial for efficient water management and optimal crop growth. By understanding the advantages and disadvantages of each method, farmers can make informed decisions to enhance productivity, conserve water, and promote sustainable agriculture.";
    document.getElementById('learn2').style.display='none';
}
function deva3(){
    var a=document.getElementById('para3');
    a.innerHTML="Tractors and their associated implements are vital components in modern agriculture, significantly increasing efficiency, productivity, and versatility on farms. Here's an overview of their uses, benefits.<br> Tractors are designed to perform a wide range of agricultural tasks, from plowing and planting to harvesting and transporting goods.<br> They save time and labor compared to manual farming methods, allowing farmers to cover large areas more quickly and efficiently.";
    document.getElementById('learn3').style.display='none';
}