// // // // Регулярные выражения 
// // // // regex RegExp

// // // // const test = `
// // // // 123 asdf
// // // // asdf 543
// // // // 56ajfgkf
// // // // `;

// // // // const text = '1234567890 1238 34034 t405 asdfkdfgmlmrtwmrelmt'

// // // // const multilineRegex = /\d+$/gism;
// // // // const regex = /[a-z]/gi

// // // // console.log(text.match(regex));

// // // // + - 1 ->
// // // // * - 0 ->
// // // // ? - 0 | 1


// // // // /[jhc]/ => /j|h|c/
// // // // () => (john)
// // // // {} => 1) {2}  2) {3,} 3) {3,5}

// // // // match

// // // // g - global
// // // // i 
// // // // m - multiline
// // // // s

// // // // \d - 0-9  -> \D
// // // // \w - word, digits, _ -> \W
// // // // \s - space -> \S




// // // // const test2 = (test12, test22) => {
// // // //   console.log(`1 - ${test12} \n 2 - ${test22}`)
// // // // }

// // // // test2('hello', 'john');



// // // // рекурсия

// // // // let num = 0;

// // // // const test = () => {
// // // //   num++;
// // // //   console.log(num);
// // // //   if(num < 500){
// // // //     requestAnimationFrame(test);
// // // //   }
// // // // }

// // // // test();

// // // // const factorial = (num) => {
// // // //   if(num == 1) return 1;
// // // //   return num * factorial(num - 1);
// // // // }

// // // // console.log(factorial(6))
// // // /// callback 
// // // // const func1 = (func) => {
// // // //   func();
// // // // }

// // // // const func2 = () => {
// // // //   console.log('функция 2 была вызвона')
// // // // }

// // // // func1(func2)



// // // // setTimeout | setInterval | clearInterval

// // // // function test(){
// // // //   console.log('hello')
// // // // }
// // // // setTimeout(test)

// // // // setTimeout(() => {
// // // //   console.log('hello2')
// // // // })

// // // // console.log('test')

// // // // let num = 0

// // // // const interval = setInterval(() => {
// // // //   num++;
// // // //   console.log(num);
// // // //   if(num === 5){
// // // //     clearInterval(interval)
// // // //   }
// // // // }, 1000)



// // // // const box = document.querySelector('.box');
// // // // const startBtn = document.querySelector('.start');
// // // // const stopBtn = document.querySelector('.stop');

// // // // let interval = null;

// // // // startBtn.onclick = () => {
// // // //   if(interval) return;
// // // //   interval = setInterval(() => {
// // // //     // if(box.style.opacity == 1){
// // // //     //   box.style.opacity = 0;
// // // //     // }else{
// // // //     //   box.style.opacity = 1;
// // // //     // }
// // // //     // box.style.opacity ? box.style.opacity = 0 : box.style.opacity = 1;
// // // //     box.style.opacity = box.style.opacity == 0 ? 1 : 0;
// // // //   }, 1000)
// // // // }


// // // // stopBtn.onclick = () => {
// // // //   clearInterval(interval);
// // // //   interval = null;
// // // //   box.style.opacity = 1;
// // // // }



// // // // event.stopPropagation()

// // // // megawrapper.onclick = (event) => {
// // // //   alert('ВЫ НАЖАЛИ НА MEGAWRAPPER')
// // // // } 

// // // // wrapper.onclick = (event) => {
// // // //   event.stopPropagation();
// // // //   alert('ВЫ НАЖАЛИ НА WRAPPER')
// // // // }

// // // // btn.onclick = (event) => {
// // // //   event.stopPropagation();
// // // //   alert('ВЫ НАЖАЛИ НА BUTTON')
// // // // }


// // // // let bool = 2;
// // // // console.log(bool == 1 ? 'hello' : 'hello 2')

// // // // ?

// // // const wrapper = document.querySelector('.wrapper');
// // // const btns = document.querySelectorAll('button');

// // // // btns.forEach((btn, i) => {
// // // //   btn.onclick = () => {
// // // //     // if(btn.classList.contains('red')){
// // // //     //   btn.classList.remove('red');
// // // //     // }else{
// // // //     //   btn.classList.add('red');
// // // //     // }
// // // //     btn.classList.toggle('red');
// // // //   }
// // // // })

// // // const btn = document.createElement('button');
// // // wrapper.append(btn);


// // // // делегирование событий

// // // wrapper.onclick = (event) => {
// // //   if(event.target.tagName.toLowerCase() == 'button'){
// // //     // console.log(event.target.tagName)
// // //     // console.log('Вы нажали на кнопку')
// // //     event.target.classList.toggle('red');
// // //   }else{
// // //     // console.log(event.target.tagName)
// // //     // console.log('Вы нажали на wrapper')
// // //   }
// // // }


// // // Ад коллбэков

// // const logger = (user) => {
// //   const {username, desc} = user;
// //   console.log(`Username: ${username}\nDescription: ${desc}`)
// // }

// // // setTimeout(() => {
// // //   const user = {
// // //     username: 'John',
// // //     desc: 'human'
// // //   }
// // //   logger(user);
// // //   setTimeout(() => {
// // //     user.username = 'William';
// // //     user.desc = 'actor';
// // //     logger(user);
// // //     setTimeout(() => {
// // //       user.username = 'William';
// // //       user.desc = 'actor';
// // //       logger(user);
// // //       setTimeout(() => {
// // //         user.username = 'William';
// // //         user.desc = 'actor';
// // //         logger(user);
// // //         setTimeout(() => {
// // //           user.username = 'William';
// // //           user.desc = 'actor';
// // //           logger(user);
// // //           setTimeout(() => {
// // //             user.username = 'William';
// // //             user.desc = 'actor';
// // //             logger(user);
// // //             setTimeout(() => {
// // //               user.username = 'William';
// // //               user.desc = 'actor';
// // //               logger(user);
// // //             }, 1500)
// // //           }, 1500)
// // //         }, 1500)
// // //       }, 1500)
// // //     }, 1500)
// // //   }, 1500)
// // // }, 1500)


// // // Promise 
// // // pending -> fulfilled | rejected

// // // event loop 

// // // 1. Синхронный код
// // // 2. Микрозадача
// // // 3. Одна Макрозадача
// // // 4. Возврат к второму шагу

// // // console.log('console');

// // // setTimeout(() => {
// // //   console.log('setTimeout')
// // // }, 0)

// // // new Promise((resolve, reject) => {
// // //   console.log('promise console')
// // //   resolve()
// // // })
// // //   .then(() => {
// // //     console.log('Промис закончен')
// // //   })

// // // console.log('console 2')


// // // new Promise((resolve, reject) => {
// // //   const user = {
// // //     username: 'William',
// // //     desc: 'human'
// // //   }
// // //   setTimeout(() => {
// // //     logger(user)
// // //     reject(user)
// // //   }, 1500)
// // // })
// // //   .finally(() => {
// // //     console.log('Первый промис был переведен в статус fulfilled или rejected')
// // //   })
// // //   .then(
// // //     (user) => {
// // //       return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //           user.username = 'John';
// // //           user.desc = 'farmer';
// // //           logger(user);
// // //           resolve(user);
// // //         }, 1500)
// // //       })
// // //     },
// // //   )
// // //   .then(
// // //     (user) => {
// // //       return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //           user.username = 'Becky';
// // //           user.desc = 'dancer';
// // //           logger(user);
// // //           reject('Ошибка');
// // //         }, 1500)
// // //       })
// // //     },
// // //   )
// // //   .then(
// // //     () => {},
// // //   )
// // //   .catch((error) => {
// // //     console.warn('Произошла ошибка', error)
// // //   })


// // // console.log('console');

// // // setTimeout(() => {
// // //   console.log('setTimeout')
// // // }, 0)

// // // Promise.reject().then(() => console.log('promise'))

// // // queueMicrotask(() => {
// // //   console.log('микро таск')
// // // })


// // // all allSettled | race any


// // // const delay =  (seconds, flag, text ) => {
// // //   return new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       if(flag) reject(`Ошибка ${text}`);
// // //       resolve(`Выполнился ${text}`)
// // //     }, seconds)
// // //   })
// // // }

// // // const promise1 = delay(1500, false, 'Первый промис')

// // // const promise2 = delay(2500, true, 'Второй промис')

// // // Promise.allSettled([promise1, promise2])
// // //   .then((result) => {
// // //     console.log(result)
// // //   })
// // //   .catch((err) => {
// // //     console.warn(`Ошибка`, err)
// // //   })


// // // console.log(1); 

// // // setTimeout(() => console.log(2));

// // // Promise.reject(3).catch((error) => {console.log(error)});

// // // new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

// // // Promise.resolve(5).then((data) => {console.log(data)});

// // // console.log(6);

// // // setTimeout(() => console.log(7),0);


// // // try catch finally


// // // const textContains = (text) => {
// // //   try{ 
// // //     if(!text || !text.length ){
// // //       throw new Error('Нет текста')
// // //     };
// // //     console.log(`Вы написали: ${text}`)
// // //   }catch(err){
// // //     console.warn(`Произошла ошибка`, err.message)
// // //   }finally{
// // //     console.log('Завершилась проверка')
// // //   }
// // // }

// // // textContains('test')

// // // const promise = (seconds, flag) => {
// // //   return new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       if(flag) reject('Ошибка из-за флага');
// // //       resolve('Флаг false и промис успешно выполнен')
// // //     }, seconds * 1000)
// // //   })
// // // }

// // // // async function Test(){

// // // // }

// // // const delay = async() => {
// // //   try{
// // //     const result = await promise(3, true);
// // //     console.log(result);
// // //   }catch(err){
// // //     console.warn(`Произошла ошибка: `, err)
// // //   }finally{
// // //     console.log('Проверка закончена')
// // //   }
// // // }

// // // delay();


// // // JSON - формат данных при работе с сервером 
// // // JavaScript Object Notation

// // // txt pdf docx jpg


// // const obj = {
// //   username: 'Test',
// //   age: 52,
// //   colors: ['yellow', "red", `green`],
// //   game: {
// //     release: '19.12.2027',
// //     name: 'DMC 5',
// //     is_favorite: true
// //   }
// // }

// // // const stringifiedObj = JSON.stringify(obj);
// // // const parsedObj = JSON.parse(`{"username":"Test","age":52,"colors":["yellow","red","green"],"game":{"release":"19.12.2027","name":"DMC 5","is_favorite":true}}`)

// // // console.log(JSON);
// // // console.log(stringifiedObj);
// // // console.log(parsedObj)

// // // AJAX - Asynchronous JavaScript and XML

// // // XML -> eXtensible Markup Language
// // // HTML -> Hyper Text Markup Language

// // // HTTP -> HyperText Transfer Protocol
// // // HTTPS -> Secure 

// // // 123123 -> wqern1j32n4jkny49@$#%$#5

// // // webSocket -

// // // const btn = document.querySelector('button');
// // // const usernameSpan = document.querySelector('#username');
// // // const ageSpan = document.querySelector('#age');


// // // // XHR
// // // // fetch()


// // // const BASE_API = 'https://jsonplaceholder.typicode.com/posts';

// // // btn.onclick = async() => {
// // //   // const requester = new XMLHttpRequest();
// // //   // requester.open('GET', './test.json');
// // //   // requester.setRequestHeader('Content-Type', 'application/json');
// // //   // requester.send();
// // //   // requester.onload = () => {
// // //   //   console.log(requester.status)
// // //   //   const {username, age} = JSON.parse(requester.response);
// // //   //   usernameSpan.textContent = username;
// // //   //   ageSpan.textContent = age;
// // //   //   console.log(requester.response)
// // //   // }


// // //   // fetch('./test.json', {
// // //   //   method: 'GET',
// // //   //   headers: {
// // //   //     'Content-Type': 'application/json'
// // //   //   },
// // //   //   // body: JSON.stringify(obj)
// // //   // })
// // //   //   .then((response) => response.json())
// // //   //   .then(data => console.log(data))
// // //   const response = await fetch(BASE_API, {
// // //     method: "POST",
// // //     headers: {
// // //       'Content-Type': 'application/json'
// // //     },
// // //     body: JSON.stringify(obj)
// // //   });
// // //   const data = await response.json();
// // //   console.log(data);
// // // }

// // // SEO специалист
// // // Search Engine Optimization


// // // users -> clients

// // // users -> get | post


// const form = document.querySelector('form');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');


// const BASE_API = 'https://jsonplaceholder.typicode.com/posts';

// const getPosts = async() => {
//   try{
//     const response = await fetch(BASE_API);
//     const data = await response.json();
//     console.log(`Количество постов: ${data.length}`)
//   }catch(error){
//     console.warn(`Произошла ошибка`, error);
//   }
// }

// getPosts();

// const sendAsJson = async(payload) => {
//   try{
//     const response = await fetch(BASE_API, {
//       method: "POST",
//       body: JSON.stringify(payload)
//     });
//     const data = await response.json();
//     console.log('Ответ от send JSON', data);
//     await getPosts();
//   }catch(error){
//     console.warn(`Произошла ошибка при send JSON`, error);
//   }
// }

// // CRUD
// // Create - POST
// // Read - GET
// // Update - PUT и PATCH
// // Delete - DELETE


// // API - Application Programming Interface -> https://jsonplaceholder.typicode.com/posts
// // Endpoint -> /posts | /books | /products
// // pending -> fulfilled | rejected


// const sendAsFormData = async(payload) => {
//   try{
//     const response = await fetch(BASE_API, {
//       method: "POST",
//       body: payload
//     });
//     const data = await response.json();
//     console.log('Ответ от send Form Data', data);
//     await getPosts();
//   }catch(error){
//     console.warn(`Произошла ошибка при send Form Data`, error);
//   }
// }

// form.addEventListener('submit', async(event) => {
//   event.preventDefault();
//   const mode = event.submitter.value;
//   if(mode == 'json'){
//     await sendAsJson({
//       email: emailInput.value,
//       password: passwordInput.value
//     })
//   }else{
//     const formData = new FormData(form);
//     await sendAsFormData(formData)
//   }
//   form.reset();
// })

// // // Query Params -> фильтров и сортировки
// // // https://www.google.com/search?q=will+smith&sca_esv=fecd7473c5ea3a32&sxsrf=AKL5yDiEvXwSbOXU8xxxbuFl1u7kmz9hjQ%3A1793273136252&source=hp&ei=MC3jasaADbuQxc8PjuDlwA4&iflsig=AHSINFcAAAAAauM7QME_nc2QqSVzJmov85tQHM0yyrWg

// // {
// //   q: 'Will Smith'
// // }

// // //https://jsonplaceholder.typicode.com/posts?is_finished=false
// // // https://www.kivano.kg/noutbuki?brands=apple-asus&filter=1311

