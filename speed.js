function speed(){
    //gets input form the user
    let speed = parseInt(prompt('Enter your speed'))
    if(speed <= 70){// checks regular speed limit
        alert("Ok")
    }else{
        //calculates demerits based on speed
        let demerit = Math.floor((speed - 70 )/ 5)
        alert(`You have ${demerit} demerit points.`);
        // a license suspension if demerit points exceeds 12
        if(demerit > 12){
            alert("License suspended")
        }
    }
}
// calling the function
speed()
