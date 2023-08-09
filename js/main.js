let inputField = document.getElementById("inputField");

let testBtn = document.getElementById("testBtn");

testBtn.addEventListener("click", function(){

    const message = document.getElementById("inputField").value;
    message.innerHTML = "";

    try {
        if(message.trim() == "") throw "empty";
        const numberValue = Number(message);
        if(isNaN(numberValue)) throw "not a number";
        if(numberValue < 5) throw "too low";
        if(numberValue > 10) throw "too high";

    }
    catch(err){
        showMessage.innerHTML = "input is " + err;
    }
    finally{
        document.getElementById("showMessage").value = "";
    }

});
