let list = ['eggs', 'milk', 'bacon', 'cheese'];
let text = "I went to the park one day";

let fakeapi = thing => {
    setTimeout( () => console.log(`fakeapi'd:  ${thing}`) ,3000)
}

fakeapi( 'banana' )
