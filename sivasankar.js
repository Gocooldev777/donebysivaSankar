a=[{'a':2000,'b':200,'c':1000},{'a':1500,'b':0,'c':0,'d':1300}, {'b':1000,'c':0}]
// .........................find average.............
function average(num){
averageValue=[]
 for(j=0;j<num.length;j++){
    sum=0
    count=0
    avr=0
    for(i in num[j]){
        sum+=num[j][i]
        count++
        avr=sum/count
    }
    averageValue.push(avr) 
 }return averageValue
}average(a)  
// .........................find people........................
function findPeople(num){
  people=[]
  for(j=0;j<num.length;j++){
    for(i in num[j]){
       if(!people.includes(i)){
          people.push(i)
       }
    }
  }return people;
}findPeople(a)
// .............................find remaining.................
function remain(num){
remainAmount=[]
for(j=0;j<num.length;j++){
    billAverage={}
    for(i in num[j]){   
      billAverage[i]=num[j][i]-averageValue[j]
    }
    remainAmount.push(billAverage)
}
return billAverage
}remain(a)

// ...........................conrtibution of peoples.................
function total_amount(remainAmount){
person=people
finalSettelement={}
for(i=0;i<person.length;i++){
    total=0
    for(j=0;j<remainAmount.length;j++){ 
       for(k in remainAmount[j]){
        if(k===person[i]){
            total+=remainAmount[j][k]
           }  
        }   
    }
    finalSettelement[person[i]]=total 
} 
return finalSettelement
}total_amount(remainAmount) 
// .........................split pay & get.....................
function splitPayerGetter(finalSettelement){
geter={}
payer={}
for(i in finalSettelement){
    if(finalSettelement[i]>0){ 
        payer[i]=finalSettelement[i]
    }else{
        geter[i]=finalSettelement[i]
    }
}
return geter,payer;
}splitPayerGetter(finalSettelement)
// ......sorting....................................
function sorting(a,b){return b-a}
// ...........sortingting and spliting...................
function sortedAmount(geter,payer){
geterSort=[]
finalGeter={}
payerSort=[]
finalPayer={}
for(i in geter){
    geterSort.push(geter[i])
}
geterSort=geterSort.sort(sorting).reverse()
for(j of geterSort){
    for(k in geter){
        if(j==geter[k]){
            finalGeter[k]=geter[k]
        }
    }  
}
for(i in payer){
    payerSort.push(payer[i])
}
payerSort=payerSort.sort(sorting)
for(j of payerSort){
    for(k in payer){
        if(j==payer[k]){
            finalPayer[k]=payer[k]
        }
    }  
}
return finalGeter,finalPayer;
}sortedAmount(geter,payer)
// ...............final settelement...........................
function settelement(finalGeter,finalPayer){
    for(i in finalPayer){
        for(j in finalGeter){
            if(finalPayer[i]!=0 && finalGeter[j]!=0){
                if(finalPayer[i]>Math.abs(finalGeter[j])){
                    console.log(`${j} pay ${Math.abs(finalGeter[j])} to:${i}`);
                    re=payer[i]-Math.abs(finalGeter[j])
                    finalGeter[j]=0
                    finalPayer[i]=re
                }else if(finalPayer[i]<Math.abs(finalGeter[j])){
                    console.log(`${j} pay ${Math.abs(finalPayer[i])} to: ${i}`);
                    re=payer[i]-Math.abs(finalGeter[j])
                    finalPayer[i]=0
                    finalGeter[j]=re         
                } else if(finalPayer[i]==Math.abs(finalGeter[j])){
                    console.log(`${j} pay ${Math.abs(finalGeter[j])} to: ${i}`);
                    finalPayer[i]=0  
                    finalGeter[j]=0      
                } 
            }
        }
    }
}settelement(finalGeter,finalPayer)