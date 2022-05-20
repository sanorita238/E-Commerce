// function to store clothes in local storage
function saveItem(clicked_id){
    let localData = localStorage.getItem("clothes");
    if(localData == null){
        arr = [];
    }
    else{
        arr = JSON.parse(localData);
    } 
    arr.push(clicked_id);
    localStorage.setItem("clothes", JSON.stringify(arr));
    confirm("Item added in cart successfully!")
}

//adding clothes to map 
var itemStore = new Map();
var obj = JSON.parse(localStorage.getItem("clothes"));
for(var i=0;i<obj.length;i++){
    const vall = obj[i];
    itemStore.set(vall, (itemStore.get(vall) ?? 0) + 1)
    console.log(vall);
}
console.log(itemStore.size);


// Function to show cart items
function displayDetails(){
    
    let getName = document.getElementById('name');
    let getAddress = document.getElementById('address');

    //In case of string value is 0 or empty it's not null
    if(((getName.value == "" || getAddress.value == ""))){
        alert("Please Enter the details!")
    }
    else{
        showCartItems();
    }
}

function checkClick(idd, totalPrice){
    idd.onclick = function(){
        localStorage.clear();
        if(alert('Your total amount is ' + totalPrice + '. Thank you for shopping!')){
            // document.location = './landingpage.html';
        }

    }
}
//Function to display cart items
function showCartItems(){
    var totalPrice = 0;
    var ele = document.getElementsByClassName("innercontainer");
 //looping the map and adding items in cart
    for (const [key, value] of itemStore.entries()){
        //creating div element
        let CountDiv = document.createElement('div')
            CountDiv.id= "CountDiv";
            CountDiv.style.top = 400 + 'px';
            CountDiv.style.left = 200 +'px';
            CountDiv.style.background="white"
            CountDiv.style. marginTop = "10px";
            CountDiv.style.marginBottom = "10px";
            const val = key;
            var price = 0;
            var eleAdd = val;
            if(val == "Onepice"){
                eleAdd = "One Piece";
            }
            else if(val == "KidsCombo"){
                eleAdd = "Kids Combo Pack";
            }
            else if(val == "Tshirts"){
                eleAdd = "T-Shirts";
            }
          //image added
           let img = document.createElement("img"); 
            img.id="icon"
            img.setAttribute("height", "76.8");
            img.setAttribute("width", "76.8");
            if(eleAdd == "Jeans"){
                img.src="./Public/IMG/w1.jpg";
                price += (value*2000);
            }
            else if(eleAdd == "One Piece"){
                img.src="./Public/IMG/w2.jpg";
                price += (value*800);
            }
            if(eleAdd == "Kurti"){
                img.src="./Public/IMG/w3.jpg";
                price += (value*700);
            }
            if(eleAdd == "Denim"){
                img.src="./Public/IMG/m1.jpg";
                price += (value*1000);
            }
            if(eleAdd == "Jacket"){
                img.src="./Public/IMG/m2.jpg";
                price += (value*550);
            }
            if(eleAdd == "Kurta"){
                img.src="./Public/IMG/m3.jpg";
                price += (value*500);
            }
            if(eleAdd == "T-Shirts"){
                img.src="./Public/IMG/k1.jpg";
                price += (value*300);
            }
            if(eleAdd == "Kids Combo Pack"){
                img.src="./Public/IMG/k2.jpg";
                price += (value*600);
            }
            if(eleAdd == "Shorts"){
                img.src="./Public/IMG/k3.jpg";
                price += (value*300);
            }
            const addItem = eleAdd;
            // let text1 = value;
            // + '<i class="fa fa-trash" id="trashh" aria-hidden="true"></i>'
            let textSpan=document.createElement("span")
            let textValue = document.createElement("span")
            let priceValue = document.createElement("span")
            textValue.innerHTML = value;
            priceValue = price;
            priceValue.className = "pricetag"
            textValue.className = "quantity"
            textSpan.id = "Count"
            textSpan.style.padding="10px"
            textSpan.innerHTML=addItem;
            CountDiv.append(img);
            CountDiv.append(textSpan);
            CountDiv.append(textValue);
            CountDiv.append(priceValue);
            CountDiv.style.display ="flex";
            CountDiv.style.alignItems="center";
            totalPrice+=price;
             //appending to existing div
            ele[0].appendChild(CountDiv); //ele.appendChild(p) won't work so use ele[0].appendChild(p)
        }

        //creating checkout button
        var checkOutButton = document.createElement("button");
        checkOutButton.id = 'checkedoutt'
        checkOutButton.className = 'btn btn-primary';
        checkOutButton.innerHTML = "Check Out";
        var amount = document.createElement('span');
        amount.id = 'amountt';
        amount.innerHTML = 'Total amount: ' + totalPrice;
        var add = document.getElementsByClassName('ending');
        add[0].appendChild(checkOutButton);
        add[0].appendChild(amount);

        //if checkout clear the local storage
        var chk = document.getElementById('checkedoutt');
        checkClick(chk, totalPrice);
        
}








