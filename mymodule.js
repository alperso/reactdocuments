// Fonksion,ARRAY,obje,string tanımlama bunları başka sayfadan import etmek nasıl olur error func kullanımı
// anlatılmıştır.
//Normal Func
// function topla(a,b) {
//     return a+b;
//
// }
//Const İle
// const cikart =function cikart(a,b){
//     return a-b;
// }
//Error Function ile
// const cikart =(a,b) =>{
//     return a-b;
// }
// export const cikart =(a,b) =>a-b;
// export const hello =()=> {
//     console.log("Hello")
// }

const hello = () => {
    console.log("Hello");
}
const topla = (a, b) => a + b;
const cikart = (a, b) => a - b;
const helloname = (name) => {
    //console.log("Hello" +name);
    console.log(`Hello ${name}`);
}

export const text = 'Text Alper';//dışarı string aktarmak
// export default cikart;
//Obje
export const user = {
    name: "Alper",
    surname: "Öner"
}
export const array_users = [
    {
        name: "Array Alper",
        surname: "Array Öner"
    },
    {
        name: "Array Alper1",
        surname: "Array Öner1"
    }
]
export {
    cikart,
    helloname,
    topla
}
export default hello;//helloyu defaul tanımlıyorum import ederken {topla,cikart,helloname},hello yazmalıyım {} süsülü
//parantez içindekiler js dosyasının default olmayan export edilmişs fonksiyonlarıdır. Ayrıca obje ve string , int export
//ederek mymodule mü çağırdıgım yerde kullanabilirim.