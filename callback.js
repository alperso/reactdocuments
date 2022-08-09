// Callback Functions - asyncawait-promise Nedir Nasıl Kullanılır
//-----------------------------------------------------------------
// setTimeout(); //vereceğimiz parametredeki işlem tamamlandıktan sonra 1 kere çalışıyor olması

//setTimeout(()=>{console.log("SetTimeOut ile 2000=2saniye bekleyip çalıştım")},2000);//proje run edildiğinden 2 saniye sonra çalışır

// setTimeout(() => {console.log("this is the first message")}, 5000);
// setTimeout(() => {console.log("this is the second message")}, 3000);
// setTimeout(() => {console.log("this is the third message")}, 1000);
//
// this is the third message
// this is the second message
// this is the first message

// setInterval(()=>{
//     console.log("Merhaba her saniye 1000=1saniyede çalışacagım");
// },1000);

// const sayHi =()=>{
//     console.log("Merhaba");
// }
// const sayHi =(collbackparameter)=>{
//     collbackparameter();//parametre olarak fonksiyon geldi ve ekrana yazdım
// }
// sayHi(()=>{console.log("Hello")});//fonksiyonuma fonksiyon gönderiyorum

//-----FETCH: herhangi bir veri kaynagına gidip baglanıyor herhangi bir endpointe baglanıp veri alıp getiriyor
// npm install node-fetch kurmalıyız ve
//import ile sayfaya dahil etmeliyiz.
//import fetch from "node-fetch";
//import {user} from "./mymodule";
//api set get post
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data=>console.log(data))//bana bir data gelsin

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(data=>data.json())//bana bir json data===>promise geldi
//     .then(users=>console.log(users));

//önce usersler geldi sonra postslar geldi
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users)=>{
//         console.log("Users Yüklendi",users);
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((data)=>data.json())
//             .then((posts)=>console.log("Postlar yüklendi",posts));
//     });

//post/1 dönsün
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users)=>{
//         // console.log("Users Yüklendi",users);
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data)=>data.json())
//             .then((posts)=>console.log("Postlar yüklendi",posts));
//     });

//ikiside asenkron işlemler oldugu için
//böyle yaptım eğer bunu yapmayıp ayrı fetch olarak 2 tane yapsaydım  bunların ne zaman dönüş yapacagını bilmiyorum
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users)=>{
//          console.log("Users Yüklendi",users); //önce bu logu görmek istiyorum sonra alttaki logu görmek istiyorum
//         //veya users içindeki bir dataya bağımlı olabilirim. Sıraya koymaya çalışmalıyım
//         //NASIL YAPACAGIM?
//     });
//
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data)=>data.json())
//     .then((posts)=>console.log("Postlar yüklendi",posts));

// 3lü fetch 1ri bittiginde diğer içalışacak
//users yüklenecek bittikten sonra
//post/1 çekilecek bittikten sonra
//post/2 çekilip bitecek
//YANİ BİRİ BİTMETEN BİRİ ÇALIŞMIYOR SIRAYA KOYDUM
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users)=>{
//         // console.log("Users Yüklendi",users);
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data)=>data.json())
//             .then((post)=>{
//                 console.log("Post 1 yüklendi",post);
//                 fetch("https://jsonplaceholder.typicode.com/posts/2")
//                     .then((data)=>data.json())
//                     .then((post)=>console.log("Post 2 yüklendi",post))
//             });
//     });

//PEKİ BEN BURADA 3 TANE DEGİL 10 TANE VEYA DAHA FAZLA İŞLEM YAPCAKSAM ALTALTA YAZAMAM NE YAPMALIYIM?
// ASYNC AWAİT KEYWORDS

// async function getData() {
//     //const data=fetch("https://jsonplaceholder.typicode.com/users");
//     //console.log(data); //Promise { <pending> } döndü
//     //kodu bekletmem lazım ki promise dönmesin
//     const users= await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1= await (await fetch("https://jsonplaceholder.typicode.com/post/1")).json();
//     const post2= await (await fetch("https://jsonplaceholder.typicode.com/post/2")).json();
//     console.log(users);
//     console.log(post1);
//     console.log(post2);
//     //her çlaıştırmamda bu sıralamaya sadık kalarak işlemler yapılacak
//     //YUKARIDAKİ GİBİ İÇ İÇE YAZMAKTANSA BU ŞEKİL ASNYC keyword ile yaparak işlemler bitince art artçalışacagını yazıyorum
//
//
// }
// getData();

// ANONİM FONKSİYON NASIL OLUŞTURULUR?
// (()=>{
//     console.log("Selam");
// })();
// (async ()=>{
//     console.log("Selam");
// })();
//import fetch from "node-fetch"; //bu fetch lib yerine axios diye kütüphane var
import axios from "axios";
// (async ()=>{
//
//     const users= await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1= await (await fetch("https://jsonplaceholder.typicode.com/post/1")).json();
//     const post2= await (await fetch("https://jsonplaceholder.typicode.com/post/2")).json();
//     console.log(users);
//     console.log(post1);
//     console.log(post2);
//     //her çlaıştırmamda bu sıralamaya sadık kalarak işlemler yapılacak
//     //YUKARIDAKİ GİBİ İÇ İÇE YAZMAKTANSA BU ŞEKİL ASNYC keyword ile yaparak işlemler bitince art artçalışacagını yazıyorum
//
// })();
// (async () => {
//     try {
//         //const datas = await axios.get(`https://jsonplaceholder.typicode.com/users`);
//        const post1  = await axios(`https://jsonplaceholder.typicode.com/posts`);
//         // const { data:post2 } = await axios({method: 'post',url: "https://jsonplaceholder.typicode.com/post/2"})
//
//          //console.log(datas.data);
//         //const {id,name}=post1.data;
//
//       // console.log(post1.data);
//         // console.log(post2);
//     } catch (err) {
//         console.error(err.message)
//     }
//     // const {data: users} = await axios({method:'get',url:"https://jsonplaceholder.typicode.com/users"});
//     // const {data: post1} = await axios({method:'get',url:"https://jsonplaceholder.typicode.com/post/1"});
//     // const {data: post2} = await axios({method:'get',url:"https://jsonplaceholder.typicode.com/post/2"});
//     // // const {data: post1} = await axios("https://jsonplaceholder.typicode.com/post/1");
//     // // const {data: post2} = await axios("https://jsonplaceholder.typicode.com/post/2");
//     // console.log(users);
//     // console.log(post1);
//     // console.log(post2);
//     //her çlaıştırmamda bu sıralamaya sadık kalarak işlemler yapılacak
//     //YUKARIDAKİ GİBİ İÇ İÇE YAZMAKTANSA BU ŞEKİL ASNYC keyword ile yaparak işlemler bitince art artçalışacagını yazıyorum
//
// })();


//Promise Nedir ?  ->Sana söz veriyorum Başarılı veya Başarısız olan sonuçlardan birini döneceğim
//
// fetch("https://jsonplaceholder.typicode.com/users")//fetch bir promise dönüyor
//     .then((data) => data.json()) //promise olanı alıyorum
//     .then((users)=>{
//         // console.log("Users Yüklendi",users);
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data)=>data.json())
//             .then((post)=>{
//                 console.log("Post 1 yüklendi",post);
//                 fetch("https://jsonplaceholder.typicode.com/posts/2")
//                     .then((data)=>data.json())
//                     .then((post)=>console.log("Post 2 yüklendi",post))
//             });
//     });
//Örn:---------------------------------------
// const getComments=()=>{
//     return new Promise(()=>{
//         console.log("comments");
//     })
// }
// getComments(); //comments yazdi
// getComments().then(()=>{console.log("bitti")}); //comments yazdi ama bitti yazmadı
//Promise objesinin 2 parametre alması gereklidir
// resolve: işlem başarıyla gerçekleşmiş al sana data
// reject: Kod çalışırken hata oldu al sana hata
// 1 Promise resolve oldugunda .then(...) e düşer hata oldugunda .cath(...) e düşer
// const getComments=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("comments");
//         resolve();
//     })
// }
// getComments()
//     .then(()=>console.log("bitti"))
//     .catch(e=>console.log(e)); //comments yazdi ama bitti yazmadı

//comments
// bitti yazdim

// const getComments=()=>{
//     return new Promise((resolve,reject)=>{
//        // console.log("comments");
//        // resolve("commments data geldi");
//         resolve({name:"alper",salary:2332});
//     })
// }
// getComments()
//     .then((data)=>console.log(data))
//     .catch(e=>console.log(e)); //comments yazdi ama bitti yazmadı

//Resolve geçtiğim parametre .then(data) ya düşüyor
//
// Örn:///
// getCommet(1) gelirse Resolve 2 gelirse reject olsun


// const getCommet=(number)=>{
//     return new Promise(((resolve, reject) => {
//
//         if (number===1){
//             resolve({name:"1 Geldi resolveye düştüm"});
//         }
//         else{
//             reject("2 geldim reject oldum HATA OLDU")
//         }
//     }))
// }

// getCommet(1)
//     .then((data)=> console.log(data))
//     .catch((e)=>console.log(e))
// //{ name: '1 Geldi resolveye düştüm' }
// getCommet(2)
//     .then((data)=> console.log(data))
//     .catch((e)=>console.log(e))
//2 geldim reject oldum HATA OLDU

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const {data: users} = await axios(`https://jsonplaceholder.typicode.com/users`);//bura dönerse
        resolve(users);
        //reject("Bir Sorun oluştu")
    })

}
const getPosts = (id) => {
    return new Promise(async (resolve, reject) => {
        const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
        resolve(posts);
        //reject("Bir Sorun oluştu")
    })

}
// getUsers()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
//
// getPosts(1)
//     .then((data)=>console.log(data))
//     .catch((e)=>console.log(e));

// 2tane gelen sonuç önce users yazıp sonra posts yazmıyor
//sıralı gelmiyor 2 ayrı asenkron fonksiyon

//sıraya koymak istersek anonim fonksiyon yazmalıyım
// 1-Yöntem
// (async ()=>{
//     await getUsers()
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e));
//
//     await getPosts(1)
//         .then((data)=>console.log(data))
//         .catch((e)=>console.log(e));
//
// })()

    //2.Yöntem
// (async ()=>{
//     const users=await getUsers();
//     const posts=await getPosts(1);
//     console.log(users);
//     console.log(posts);
// })();

// (async ()=>{
//     try {
//         const users=await getUsers();
//         const posts=await getPosts(1);
//         console.log(users);
//         console.log(posts);
//     }catch (e) {
//         console.log(e);
//     }
//
// })()

    //Promise All ile bütün promise leri çalıştırabilirim
Promise.all([getPosts(1),getUsers()])
.then(console.log)
.catch(console.log);