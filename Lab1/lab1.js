// ====================== isPalindrome ======================
function isPalindrome(s){
    if(s === null || s === undefined) return false;
    
    if(typeof s == "string" || s instanceof String){
        s = s.toLowerCase();
        var right= s.length-1;
        for(var left=0; left<s.length/2; left++){
            if(s[left] != s[right]){
                return false;
            }
            right--;
        }
        return true;    
    }
    return false;
}
var str = new String("12321");
console.log(isPalindrome(str));
console.log(isPalindrome("abcba"));
console.log(isPalindrome());
console.log(isPalindrome(""));



// ====================== Price & Discount ======================
console.log("====================== Price & Discount ======================");

function calculatePrice(price, discount){
    if(price === null || price === undefined || discount === null || discount === undefined) return -1;
    if(typeof price !== "number" || typeof discount !== "number") return -1;
    if(price <= 0 || discount <= 0 || discount > 100) return -1;
    var discountedPrice = price - (price * discount / 100);
    return discountedPrice;
}
console.log(calculatePrice(100, 10));

// ====================== Favourite Movies Array ======================
console.log("====================== Favourite Movies Array ======================");
var movies = ["The Godfather", "The Shawshank Redemption", "The Dark Knight", "The Lord of the Rings", "The Prestige"];
var movies2 = movies;
movies[2]="Deadpool & Wolverine";
console.log(movies);
console.log(movies2);
console.log(movies[movies.length-1]);
console.log(movies.slice(-1));
console.log(movies.pop());
movies.unshift("Spiderman 3");

// ====================== Longest Word ======================
console.log("====================== Longest Word ======================");
function longestWord(sentence){
    if(sentence === null || sentence === undefined) return null;
    if(typeof sentence == "string" || sentence instanceof String){
        var words = sentence.split(" ");
        var longest = "";
        for(var word of words){
            if(word.length > longest.length){
                longest = word;
            }
        }
        return longest;
    }
}

// ====================== Prompt User ======================
console.log("====================== Prompt User ======================");


function promptUser(){
    var flag = true;
    while(flag){
        var name = prompt("Enter your name: ");
        if(name === null || name === undefined || !name){
            console.log("Please enter a valid name!");
        }else{
            flag = false;
            console.log("Hello " + name);
        }
    }
    flag = true;
    while(flag){
        var grades = prompt("Enter your grades separated by commas: ");
        if(grades === null || grades === undefined || !grades){
            console.log("Please enter a valid grade!");
        }
        else {
            var gradeArray = grades.split(",");
            var sum = 0;
            var valid = true;
            for(var grade of gradeArray){
                if(isNaN(grade)){
                    console.log("Please enter a valid grade!");
                    valid = false;
                    break;
                }else if(grade < 0 || grade > 100){
                    console.log("Please enter a valid grade!");
                    valid = false;
                    break;
                }else{
                    sum += parseInt(grade);
                }
            }
            if(!valid) continue;
            console.log("Your average grade is: " + sum/gradeArray.length);
            flag = false;
        }
    }
}

promptUser();


// ====================== E-commerce Order ======================
console.log("====================== E-commerce Order ======================");

var orders = [
    {
      orderId: 'ORD001',
      customer: 'John Doe',
      items: 'item1:2,item2:1,item3:5',
      orderDate: '2023-12-01',
      deliveryDate: '2023-12-05',
      deliveryAddress: '123, Main Street, Springfield, USA',
    },
    {
      orderId: 'ORD002',
      customer: 'Jane Smith',
      items: 'itemA:3,itemB:4',
      orderDate: '2023-11-15',
      deliveryDate: '2023-11-20',
      deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
    },
    {
      orderId: 'ORD003',
      customer: 'Alice Johnson',
      items: 'itemX:1',
      orderDate: '2023-10-10',
      deliveryDate: '2023-10-15',
      deliveryAddress: '456, Pine Lane, Denver, USA',
    }
  ];




function itemsQuanity (orderItems){
    //var itemsQuantity = orderItems.map(function(object){
        var arrayOfItems = orderItems.split(',').reduce(function(acc, item){
            var item2 = item.split(':')[1];
            return acc + parseInt(item2);
        }, 0);
        return arrayOfItems;
    //});
}

function deliveryDuration(orderDate, deliveryDate){
    //var deliveryDuration = orders.map(function(object){
        var dateDiff = new Date(deliveryDate) - new Date(orderDate);
        return dateDiff/(1000*60*60*24);
    //})
}

function addressArray(deliveryAdd){
    //var string = orders.map(function(order){
        var arrStrings = deliveryAdd.split(',');
        return arrStrings; 
    //});
}

var filteredOrders = orders.map(order=>(
    {
    orderId: order.orderId,
    customer: order.orderId,
    totalItems: itemsQuanity(order.items),
    orderDate: order.orderDate,
    deliveryDate: order.deliveryDate,
    deliveryDuration: deliveryDuration(order.orderDate, order.deliveryDate),
    deliveryCountry: addressArray(order.deliveryAddress)[0],
    deliveryCity: addressArray(order.deliveryAddress)[1],
    deliveryStreet: addressArray(order.deliveryAddress)[2],
    buildingNumber: addressArray(order.deliveryAddress)[3]
    }
)
)

console.log(filteredOrders);







