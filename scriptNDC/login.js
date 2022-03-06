
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    if(inputVal == "YOL 01" || inputVal == "Yol 01 SEC 01" || inputVal == "Yol 01 SEC 02" || inputVal == "Yol 01 SEC 03" || inputVal == "Yol 01 SEC 04"  ){
        
        window.location.href = 'Record.html';
    }
    else
    {
        alert("Sorry Incorrect Passcode....contact the Admin");
    }
}
