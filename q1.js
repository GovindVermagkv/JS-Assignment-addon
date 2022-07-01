let num=5;
for(i=1;i<=num;i++){
    stars='';
    for(j=1;j<=num;j++){
        // stars=stars+'*'
        if(j==i || i+j==6){
            stars=stars + '   *'
        }
        else{
            stars=stars +'    ';
        }
    
    }
    console.log(stars)
}