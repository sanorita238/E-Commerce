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

//Function to display cart items
function showCartItems(){
    var ele = document.getElementsByClassName("innercontainer");
    //breaking the json in string format and looping it
    var obj = JSON.parse(localStorage.getItem("clothes"));
    for (var i = 0; i < obj.length; i++){
        //creating div element
        let CountDiv = document.createElement('div')
            CountDiv.id= "CountDiv";
            CountDiv.style.top = 400 + 'px';
            CountDiv.style.left = 200 +'px';
            CountDiv.style.background="white"
            CountDiv.style. marginTop = "10px";
            CountDiv.style.marginBottom = "10px";
            const val = obj[i];
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
            }
            else if(eleAdd == "One Piece"){
                img.src="./Public/IMG/w2.jpg";
            }
            if(eleAdd == "Kurti"){
                img.src="./Public/IMG/w3.jpg";
            }
            if(eleAdd == "Denim"){
                img.src="./Public/IMG/m1.jpg";
            }
            if(eleAdd == "Jacket"){
                img.src="./Public/IMG/m2.jpg";
            }
            if(eleAdd == "Kurta"){
                img.src="./Public/IMG/m3.jpg";
            }
            if(eleAdd == "T-Shirts"){
                img.src="./Public/IMG/k1.jpg";
            }
            if(eleAdd == "Kids Combo Pack"){
                img.src="./Public/IMG/k2.jpg";
            }
            if(eleAdd == "Shorts"){
                img.src="./Public/IMG/k3.jpg";
            }
            
            let textSpan=document.createElement("span")
            textSpan.id = "Count"
            textSpan.style.padding="10px"
            textSpan.innerHTML=eleAdd;
            CountDiv.append(img);
            CountDiv.append(textSpan);
            CountDiv.style.display ="flex";
            CountDiv.style.alignItems="center";

             //appending to existing div
            ele[0].appendChild(CountDiv); //ele.appendChild(p) won't work so use ele[0].appendChild(p)
        }
        
}









