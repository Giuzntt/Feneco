

// api json placeholder

let topic= 'javascript';
let rank= '1';


export async function sendRequest() {
    await fetch({
        method: 'GET',
        //  route api /books
        url: 'https://jsonplaceholder.typicode.com/users',
        // headers: {
        //     'Content-type': 'application/json'
        // }
        // ,
        // body:{
        //     rank: rank,
        //     topic: topic
        // }
    }).then(response => {
        return response.json();

    }).then(data => {
        JSON.parse(data);
        data.map(item => {
            console.log(item);
        })
        // console.log(data);
    }).catch(error => {
        console.log(error)
    })
}