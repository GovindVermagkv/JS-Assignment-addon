


let num=5;
for(i=1;i<=num;i++){
    stars='';
    for(j=1;j<=num;j++){
        if(i+j==4 || i+j==8 || i*j==8){
            stars=stars +' *  '
        }
        else{
            stars=stars + '     '
        }
    }
    console.log(stars)
}

