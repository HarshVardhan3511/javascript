// const promiseOne = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB calls, crpto, network
//     setTimeout(() => {
//         console.log('Async task is Complete');
//         resolve();
//     }, 1000);   
// });

// promiseOne.then(() => {
//     console.log('Promise 1 Resolved');
// }).catch(() => {
//     console.log('Promise 1 Rejected');
// });

// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name: 'John', age: 30});
//     }, 1000);
// });

// promiseTwo.then((data) => {
//     console.log(data);
// });

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error) {
//             resolve({name: 'Jane', age: 25});
//         } else {
//             reject('Something went wrong');
//         }
//     }, 1000);
// })
// .then((data) => {
//     console.log(data);
//     return data.name;
// })
// .then((name) => {
//     console.log(name);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('Promise is either resolved or rejected');
// });

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error) {
//             resolve({name: 'Jane', age: 25});
//         } else {
//             reject('Error occurred');
//         }
//     }, 1000);
// })

// async function consumePromiseFour(){
//     try {
//         const response = await promiseFour;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFour();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
//     }   
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('Error:', error);
});
