class Burger{

   
    constructor(type, category, quantity,price){
        this.type=type;
        this.category=category;
        this.quantity=quantity;
        this.price=price;
    }
}
    var burgerArray=[];

    function addBurger(Burger){
        this.burgerArray.push(Burger);
    }

    function removeBurger(id){
        this.burgerArray.splice(id,1);
    }

    function viewBurgers(){
        console.log( burgerArray);
    }


function getCategory(sel) {
    window.category=(sel.options[sel.selectedIndex].text);    
  }



function getQuantity(id){
   window.quantity= document.getElementById(id).value;
  
}


function addToCartCrispy(id){
    getQuantity(id);

   if(category!='[object HTMLCollection]' && quantity>0 && quantity<6 ) {   
       
    var price=0;
    if(category==='Veg'){
        price=100;
    }
    if(category==='Non-veg'){
        price=200;
    }
    if(category==='Egg'){
        price=150;
    }
    b=new Burger("Crispy Supreme",category,quantity,price);
    this.burgerArray.push(b);

    document.getElementById('btn-crispy').disabled = true;
}
else{
    alert('please select a category and quantity should be between 1-5'); 
}

    //console.log(burgerArray);
}

function addToCartSurprise(id){
    getQuantity(id);

    if(category!='[object HTMLCollection]' &&  quantity>0 && quantity<6){
        var price=0;
    if(category==='Veg'){
        price=100;
    }
    if(category==='Non-veg'){
        price=200;
    }
    if(category==='Egg'){
        price=150;
    }
    b=new Burger("Surprise",category,quantity,price);
    this.burgerArray.push(b);
    document.getElementById('btn-surprise').disabled = true;
}
else{
    alert('please select category and quantity correctly'); 
}
    //console.log(burgerArray);
}


function addToCartWhopper(id){
    getQuantity(id);
    if(category!='[object HTMLCollection]'&& quantity>0 && quantity<6){
         var price=0;
    if(category==='Veg'){
        price=100;
    }
    if(category==='Non-veg'){
        price=200;
    }
    if(category==='Egg'){
        price=150;
    }
    b=new Burger("Whopper",category,quantity,price);
    this.burgerArray.push(b);
    document.getElementById('btn-whopper').disabled = true;
}else{
    alert('please select category and quantity correctly'); 
}
   // console.log(burgerArray);
}


function addToCartChilliCheese(id){
    getQuantity(id);    
    if(category!='[object HTMLCollection]' && quantity>0 && quantity<6){
        var price=0;
    if(category==='Veg'){
        price=100;
    }
    if(category==='Non-veg'){
        price=200;
    }
    if(category==='Egg'){
        price=150;
    }
    b=new Burger("Chilli Chesee",category,quantity,price);
    this.burgerArray.push(b);
    document.getElementById('btn-chillicheese').disabled = true;

}else{
    alert('please select category and quantity correctly'); 
}
    //console.log(burgerArray);
}

function addToCartTandooriGrill(id){
    getQuantity(id);
    if(category!='[object HTMLCollection]' && check(quantity)){
        var price=0;
    if(category==='Veg'){
        price=100;
    }
    if(category==='Non-veg'){
        price=200;
    }
    if(category==='Egg'){
        price=150;
    }
    b=new Burger("Tandoori Grill",category,quantity,price);
    this.burgerArray.push(b);
    document.getElementById('btn-tandoori').disabled = true;
}else{
    alert('please select category and quantity correctly');  
}
   // console.log(burgerArray);
}

function viewCart(){
var i;
    for(i=0;i<burgerArray.length;i++){    
      var user=burgerArray[i];
      var no=i+1;
      localStorage.setItem(no.toString(), JSON.stringify(user));
    }
}