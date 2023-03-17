const personName=['이름1','이름2','이름3','이름4'];
const gender=[true,true,false,true];
const age = [10,24,21,24];

const findMember = personName.filter((name,index) => {if(gender[index] && age[index]>20) return name;});
console.log(findMember);


console.log("--------------------");
const newArray = [personName,gender,age];
newArray.map((arr,index)=>{
    if(gender[index]&&age[index]>20){
        console.log(personName[index]);
    }
})