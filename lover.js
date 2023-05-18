loveCalc = () =>{
    let loveNum = Math.floor(Math.random()*100);
    return loveNum;
};

perCent = async ()=>{
    try{
        let boyPercent = await loveCalc();
        let girlPercent = await loveCalc();
        let randPercent = (boyPercent + girlPercent);
        // console.log(boy, + boyPercent+"%");
        // console.log(girl, + girlPercent+"%");
        return randPercent;
    } catch (error){
        console.log(error.message);
    }
};

loveScore = async (boy, girl)=>{
    try{
        let loveRand = await perCent(boy, girl)/2;

        console.log(loveRand+"%")
        if (loveRand >= 80) {
            console.log("very compatible");
        } else if (loveRand < 80 && loveRand >= 60){
            console.log("compatible");
        }else if (loveRand < 60 && loveRand >= 40){
            console.log("slightly compatible");
       }else{
        console.log("not compatible");
       }
   } catch (error) {
    console.log(error.message);
  }
};

loveScore("boy", "girl")