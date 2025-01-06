function sumOfDigits(num){
    if(num === undefined || num === null) return -1;
    if(typeof num == "number"){          // 1234
        var digit;
        var sum=0;
        while(num>0){
            digit=num%10;
            sum+=digit;
            num = Math.trunc(num/10);
        }
        return sum;
    }else return -1
}
console.log(sumOfDigits());



function numOfVowels(str){
    if (str === undefined || str === null || str.length==0) return null;
    if(typeof str === "string" || str instanceof String){
        str = str.toLocaleLowerCase();
        var size = str.length;
        var vowelsCount=0;
        for(var i = 0; i<size; i++){
            if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
                vowelsCount++;
            }
        }
        return vowelsCount;
    }else return null;
}
console.log(numOfVowels(""))


function numOfOccurrances(character, string){
    if (string === undefined || string === null || string.length==0 || character === undefined || character===null || character.length !== 1) return null;
    if((typeof string === "string" || string instanceof String) && (typeof character === "string" || character instanceof String)){
        var count=0;
        for(var i=0; i<string.length; i++){
            if(string[i]==character){
                count++;
            }
        }
        return count;
    }else return null;
}

console.log(numOfOccurrances('m', "mahmoud"));

/*var num = 1234;
var digit;
var sum=0;*/
