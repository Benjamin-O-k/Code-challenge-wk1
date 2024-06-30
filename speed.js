function speed(speed){
    if(speed <= 70){// checks regular speed limit
        console.log("Ok")
    }else{
        //calculates demerits based on speed
        let demerit = Math.floor((speed - 70 )/ 5)
        console.log(`You have ${demerit} demerit points.`);
        // a license suspension if demerit points exceeds 12
        if(demerit > 12){
            console.log("License suspended")
        }
    }
}
// test value
speed(100)
