let num=5;
let count=1
for(i=1;i<=num;i++){
    stars='';
    for(j=1;j<=i;j++){
        stars=stars+` ${ count}`;
       count++;
    }
    console.log(stars)
}