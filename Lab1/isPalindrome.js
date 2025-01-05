// ====================== isPalindrome ======================
function isPalindrome(s){
    if(s === null || s === undefined) return false;
    
    if(typeof s == "string" || s instanceof String){
        s = s.toLowerCase();
        let right= s.length-1;
        for(let left=0; left<s.length/2; left++){
            if(s[left] != s[right]){
                return false;
            }
            right--;
        }
        return true;    
    }
    return false;
}
let str = new String("12321");
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
    let discountedPrice = price - (price * discount / 100);
    return discountedPrice;
}
console.log(calculatePrice(100, 10));

// ====================== Favourite Movies Array ======================
console.log("====================== Favourite Movies Array ======================");
let movies = ["The Godfather", "The Shawshank Redemption", "The Dark Knight", "The Lord of the Rings", "The Prestige"];
let movies2 = movies;
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
        let words = sentence.split(" ");
        let longest = "";
        for(let word of words){
            if(word.length > longest.length){
                longest = word;
            }
        }
        return longest;
    }
}

// ====================== Longest Word ======================
console.log("====================== Prompt User ======================");


function promptUser(){
    let flag = true;
    while(flag){
        let name = prompt("Enter your name: ");
        if(name === null || name === undefined || !name){
            console.log("Please enter a valid name!");
        }else{
            flag = false;
            console.log("Hello " + name);
        }
    }
    flag = true;
    while(flag){
        let grades = prompt("Enter your grades separated by commas: ");
        if(grades === null || grades === undefined || !grades){
            console.log("Please enter a valid grade!");
        }
        else {
            let gradeArray = grades.split(",");
            let sum = 0;
            let valid = true;
            for(let grade of gradeArray){
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





