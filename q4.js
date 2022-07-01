let num=5;
let first=0;
let second = 1;
for(i=1;i<=num;i++){
    stars=''
    for(j=1;j<=i;j++){
        let sum= first+second;
        first=second;
        second=sum;
        stars += `  ${first}`;
    }
    console.log(stars)
}