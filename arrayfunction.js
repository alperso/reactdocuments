//Terminale -> node arrayfunction.js yazarak bu sayfayı çalıştırabilirm.
//import {user} from "./mymodule";



const users=["Alper","Oner",24,"Bilişim"];

/* En Çok kullanacagımız Array Function Parameter
* push :Array Sonuna eleman ekler
* map :Array içinde tek tek dönüyor **En çok kullanılan
* find :Array içinde arama yapmak için kullanılır (koşula göre )
* filter :Array içinde istenileni getirrek filtreleme yapıyor mesele name Alper olanları getir
* some:Array içindeki veri verdiğim koşula uyuyuorsa RETURN TRUE döner uymuyorsa FALSE döner (yaşı 10 a eşit olan var mı FALSE)
* every (some ın kardeşi):Veridğim şarta göre ARRAY içindeki tüm elemanlar uyuyor mu uyuyorsa TRUE döner
* includes : Girdiğin parametre deki elemanlardan herhangi biri şarta uyuyorsa yani içindeyse TRUE döner
* */

// -------------------PUSH
// const newArray=users.push("Yeni Eleman");

// console.log(newArray); //5
// console.log(users); //5

// -------------MAP
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i+1])
// }

// her döndüğünde bize item dönüyor
// users.map((item)=>{
//     console.log(item);
// });
// const usersObje=[{name:"Alper"},{name:"Murat"}] //obje olsa
// usersObje.map((item)=>{
//     console.log(item.name);
// })

//FİND-----------------
const usersObject=[
    {
        name:"Alper",
        age:20
    },
    {
        name: "Mehmet",
        age: 25
    },
    {
        name:"Sevilay",
        age: 30
    },
    {
        name:"Alper",
        age: 30
    }];
// const donenSonuc=usersObject.find((item)=>item.name ==="Mehmet"); //item.name i Mehemt Olanı getir
// console.log(donenSonuc); //{ name: 'Mehmet' }
// console.log(donenSonuc.name); //'Mehmet'

//Yaşı 25 den büyük olanlar getirsin ve İsmi mehmet olan getir
// const donenResult=usersObject.find((item)=>item.name==="Mehmet"&& item.age>=25);
// console.log(donenResult);

//-----------filter

// const filterResult=usersObject.filter((item)=>item.name==="Alper")
// const filterResult2=usersObject.filter((item)=>item.name==="Alper" && item.age>=21)//alltaki kısa kullanım
// const filterResult3=usersObject.filter(({name,age})=>name==="Alper" && age>=21)
// console.log(filterResult);
// console.log(filterResult2);
// console.log(filterResult3);
// //[ { name: 'Alper', age: 20 }, { name: 'Alper', age: 30 } ]
// // [ { name: 'Alper', age: 30 } ]
// // [ { name: 'Alper', age: 30 } ]


//------some
// const boolSome0=usersObject.some(item=>item.age===20);//yaşı 20 ye eşit olan var mı var TRUE döner
// const boolSome=usersObject.some((item)=>item.age===20);//yaşı 20 ye eşit olan var mı var TRUE döner
// console.log(boolSome); //true or false

//-----every
// const boolEvery=usersObject.every((item)=>item.age>5);//Hepsinin yaşı 5 den büyük mü
// console.log(boolEvery);//true

//--------includes

const meyveler =["elma","armut","kayısı","domates"];
const isIncludes=meyveler.includes("armut");//armut meyvelerin içinde var mı evet TRUE DÖNER
console.log(isIncludes);//true
const isIncludes2=meyveler.includes("muz");//armut meyvelerin içinde var mı evet TRUE DÖNER
console.log(isIncludes2);//falsse