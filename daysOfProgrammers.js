//Day of the Programmer 256th the day
function dayOfProgrammer(year) {
    if(year == 1918){
        console.log(`26.9.1918`)
        //as 32th days of 14th feb
    }else{
        if((year<1918 && year%4== 0) ||(year%4 == 0 && year%100 != 0) || year%400 == 0){
            //julian calendar & Gregorian calendar
            console.log(`12.9.${year}`)
        }else{
            console.log(`13.9.${year}`)
        }
    }
}
dayOfProgrammer(2015)