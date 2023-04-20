const a =document.querySelector("#btn");
const input1 =document.querySelector("#input1");
const input2 =document.querySelector("#input2");
const result =document.querySelector("#result");
// const plus1 =document.querySelector("#plus");
// const minus1 =document.querySelector("#minus");
// const multiply1 =document.querySelector("#multiply");
// const divide1 =document.querySelector("#divide");
const tool =document.querySelector("#tool");


a.addEventListener("click",function(){
    let num1;
    let num2;

    switch(tool.value){ //if(tool.value)==="+"
        case "+"://因為select的收集是字串
            num1=input1.value;//KEYIN進去一個自字串
            i=parseInt(num1);
            num2=input2.value;
            j=parseInt(num2);
            end=i+j;
            break;

        case "-":
        num1=input1.value;//KEYIN進去一個自字串
        i=parseInt(num1);
        num2=input2.value;
        j=parseInt(num2);
        end=i-j;
        break;

        case "*":
        num1=input1.value;//KEYIN進去一個自字串
        i=parseInt(num1);
        num2=input2.value;
        j=parseInt(num2);
        end=i*j;
        break;

        case "/":
        num1=input1.value;//KEYIN進去一個自字串
        i=parseInt(num1);
        num2=input2.value;
        j=parseInt(num2);
        end=i/j;
        break;



    }
    
    
    

    result.innerText=`${end}`;

});