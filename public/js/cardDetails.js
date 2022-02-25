document.getElementById("form").addEventListener("submit", Insert)
    
function Insert(event) {
    event.preventDefault();
    
    var name = document.querySelector("#name").value;
    var card = document.querySelector("#card").value;
    var cvv = document.querySelector("#cvv").value;
    var expiry = document.querySelector("#expiry").value;
    
    if (name.length == 0 || card.length == 0 || cvv.length == 0) {
        alert("Please Enter Required Fields....!");
    }

    else {

        if (card.length > 4 && cvv.length == 3 && name.length != 0) {
            let otimep = random();
            alert(otimep);
            let enter = prompt("Enter OTP");
            //console.log(enter);
            if (enter != null && Number(enter) === otimep) {
                setTimeout(function () {
                    // alert("Order Placed Successfully!!!");
                    window.location.href = "/thanks"
                }, 0);
            } else {
                alert("Invalid OTP");
            }
        }
    }
}
function random() {
    var otp = Math.round(1000 + Math.random() * 8999);
    return otp;
}
