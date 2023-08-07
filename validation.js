document.querySelector("#button").addEventListener('click',function(){
    let dayInput=document.getElementById("day");
    let monthInput=document.getElementById("month");
    let yearInput=document.getElementById("year");

    let day=document.querySelector("#day").value;
    let  month=document.querySelector("#month").value;
    let year=document.querySelector("#year").value;

    let labelCollection=document.getElementsByClassName("label");
    let errorMessage=document.getElementsByClassName("errorMessage");
    if(day =="" && month=="" && year==""){
        dayInput.style.border="1px solid red";
        monthInput.style.border="1px solid red";
        yearInput.style.border="1px solid red";

        for(let i=0;i<labelCollection.length;i++){
            labelCollection[i].style.color="red";
        }

        for(let j=0;j<errorMessage.length;j++){
            errorMessage[j].innerHTML="This field is required";
            errorMessage[j].style.color="red";
        }


    }
})