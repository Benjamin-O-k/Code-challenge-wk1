// calculates the gross salary.Basic and benefits values are required here
let bSalary = function grossSalary(basic , benefits){
    let gSalary = parseInt(basic) + parseInt(benefits);

    return gSalary;
}
// test value of base salary
let ksh = bSalary(1000 , 1000);
function deductions(ksh){
    // tax deductions
    function tax(ksh){
    let total ;
    if(ksh < 24000){
        total = ksh * 0.1;
    }
    else if(ksh <= 32333){
        total = ksh * 0.25;
    }
    else if(ksh <= 500000){
        total = (ksh * 0.3);
    }
    else if(ksh <= 800000){
        total = (ksh * 0.325);
    }
    else {
        total = (ksh * 0.35);
    }
    return total;
    }
    //NHIF deductions
    function nhif(ksh){
    let nhif = 0;
    if(ksh <= 5999){
        nhif = 150;
    }
    else if(ksh <= 7999){
        nhif = 300;
    }
    else if(ksh <= 11999){
        nhif = 400;
    }
    else if(ksh <= 14999){
        nhif = 500;
    }
    else if(ksh <= 19999){
        nhif =  600;
    }
    else if(ksh <= 24999){
        nhif =  750;
    }
    else if(ksh <= 29999){
        nhif = ksh - 850;
    }
    else if(ksh <= 34999){
        nhif =  900;
    }
    else if(ksh <= 39999){
        nhif =  950;
    }
    else if(ksh <= 44999){
        nhif = 1000;
    }
    else if(ksh <= 49999){
        nhif =  1100;
    }
    else if(ksh <= 59999){
        nhif =  1200;
    }
    else if(ksh <= 69999){
        nhif = 1300;
    }
    else if(ksh <= 79999){
        nhif =  1400;
    }
    else if(ksh <= 89999){
        nhif = 1500;
    }
    else if(ksh <= 99999){
        nhif = 1600;
    }
    else{
        nhif = 1700;
    }
    return nhif;
    }
    //NSSF deductions
    function nssf(ksh){
        let sub = ksh *0.06
        return sub;
    }
    // summing up all the deductions
    return Math.floor(tax(ksh)) + Math.floor(nhif(ksh)) + Math.floor(nssf(ksh));
}

// calculating net salary after deductions.
function nSalary(ksh){
    let net = ksh - deductions(ksh);
    return net;
}

//test values
console.log(ksh)
console.log(deductions(ksh));
console.log(nSalary(ksh));

