let list = ['eggs', 'milk', 'bacon', 'cheese'];
let text = "I went to the park one day";
/*
for( let item of list){
    console.log(item);
}

for( let item of text){
    console.log(item)
}
*/
list.forEach((item, index, array)=>{
    console.log(
        item + '>>' + index
    )
})
text.split('').forEach((item, index, array)=>{
    console.log(
        item + ' >> ' + index
    )
})
