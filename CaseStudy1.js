//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
let count =1
let a = [1,7,4,3]
let n = a[0]
if (n==1){
    console.log('your element is neither prime nor composite')
}
else{

for (let i = 2; i<=n ; i++)
{
    if(n%i == 0)
    {
        count++;
    }  
}
console.log( "Number of factors: " + count)
if(count == 2)
{
    console.log('The number is prime')
}
else
{
    console.log('The number is not prime')
}
}


//Write a JavaScript program to find the most frequent item of an array
let array2 = [1,2,1,1,2,1,2,3,1]
let max_count = 0;
let count2 = 1
let freq = 0
let num= 0
for (let i=0; i<array2.length; i++)
{
    count2 = 1
    for(let j=i+1 ; j<array2.length;j++)
    {
        

            if(array2[i]==array2[j])
            {
                count2++
            }
            
    }
    if (count2>max_count)
    {
        max_count=count2
        num = array2[i]
    }
    
     

}
console.log('number:'+n)
console.log('frequency:'+max_count)




//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.
for(let i=0; i<15;i++)
{
    if(i==0)
    {
        console.log(i + 'Neither odd nor even')
    }
    else if (i%2==0)
    {
        console.log(i + " : Even")
    }
    else
    {
        console.log(i + " : Odd")
    }
}

//Write a JavaScript program to find the sum of squares of the elements of an array.
let array = [1,2,3,4,5]
let sum = 0
for(i in array)
{
    sum = sum+(array[i]*array[i])
}
console.log("sum of square of elements :" +  sum)