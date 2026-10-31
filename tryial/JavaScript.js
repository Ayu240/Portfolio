// async function getData() {
//     setTimeout(() => {
//         console.log("heloo")
//     }, 2000);
// }

// let output = getData();

// const client = new Promise((resolve, reject) => {
//     async function gettheData() {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const posts = await response.json();
//             resolve(posts);
//         } catch (error) {
//             reject(error);
//         }
//     }

//     gettheData();
// });

// const newclient = new newclient((res, rej) => { //
//     async function getthedata() {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//             const newpost = await response.json();
//             res(newpost);
//         } catch (err) {
//             rej(err);
//         }
//     }

// }).then((res => {
//     console.log(res)
// })).catch(err => {
//     console.log(err)
// })

// sayhii();

// function sayhii() {
//     console.log("fuuu")
// }

//with header ,
const url = 'https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN';
const optins = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4eacb53719mshb6301ace510f1cfp1edc29jsn9b778aace990',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

const weather = new Promise((res, rej) => {
    async function gettheweather() {
        try {
            const response = await fetch(url, optins);

            // if (!response.ok) {
            //     throw new Error(`Request failed: ${response.status}`);
            // }

            const data = await response.json();
            res(data);
            const weatherData = data.list.map(item => ({
                date: item.dt_txt,
                temperature: item.main.temp,
                description: item.weather[0].description
            }));
            console.log("the new data is ", weatherData);
        } catch (err) {
            rej(err);
        }
    }

    gettheweather();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
});


// weather();


