window.totalQuantity=0;
window.totalPrice=0;
window.burgerArray=[];
function tableload(){
    var table=document.getElementById("table");
    var length=localStorage.length;
    for(var i=0;i<length;i++){

        var row = table.insertRow(i);

        var cell0=row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        
        var no=i+1;
        var burgerlocal=localStorage.getItem(no.toString()); 
        var burger=JSON.parse(burgerlocal);
        burgerArray.push(burger);

        cell0.innerHTML = '<img src="pictures/circle.png"  class="img-responsive" style="max-height: 20px;"></img>';
        cell1.innerHTML = burger.type;
        cell2.innerHTML = burger.category;
        cell3.innerHTML = burger.price;
        cell4.innerHTML = burger.quantity;
        cell5.innerHTML = burger.price*burger.quantity;
        cell6.innerHTML = '<input type="button" value="Remove"/ class="btn btn-danger" onclick= "mydelete(this)">';

        
        totalQuantity =+burger.quantity + totalQuantity;
        totalPrice =+(burger.price*burger.quantity) + totalPrice;

        document.getElementById('totalQuantity').innerHTML=totalQuantity;
        document.getElementById('totalPrice').innerHTML=totalPrice;
        
    }
  
}
//alert(window.totalQuantity);

function mydelete(x) {
    var d = x.parentNode.parentNode.rowIndex;
    var d1 = d - 1;
    var table = document.getElementById('table');
    table.deleteRow(d1);
    totalQuantity=totalQuantity-burgerArray[d1].quantity;
    totalPrice= totalPrice-burgerArray[d1].price;
    localStorage.removeItem(d1);

    document.getElementById('totalQuantity').innerHTML=totalQuantity;
    document.getElementById('totalPrice').innerHTML=totalPrice;

}

function placeOrder() {
  var data = {
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:9876/orders",
    dataType: "JSON",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data) {
     console.log("Total Quanity: " +  data.quantity + "\nDiscount: " +  data.discount +"\n Total Amount:"+ data.price);
      
      $('label.quantity').text(  data.quantity );
      $('label.price').text(  data.price +"  _ "+data.discount+"%" );
      $('label.discount').text(  data.discount+"%" );
    $('p.text').text("Order Placed Successfully!!")

      window.localStorage.clear();
      setTimeout(function () {
        window.location = "homePage.html";
      }, 5000);
    },
    error: function () {
      alert("lol");
    },
  });
}


