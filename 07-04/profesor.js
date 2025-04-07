async function get(url){
    try {
        let request = await fetch(url)
        let data = await request.json(); return data;
    } catch (error) {
        console.error(error); return [];
    }
}

async function postApi(count = 3){
    try {
        let data= await get ('https://jsonplaceholder.typicode.com/posts')
        return data
    } catch (error) {
        console.error(error); return [];
    }
}

async function comments(postId){
    try {
        let comments= await get (`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        return comments
    } catch (error) {
        console.error(error); return [];
    }
}

async function post(url,data){
    try {
        let request = await fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        let response = await request.json()
        return response
    } catch (error) {
        console.error(error)
    }
}

async function newPost(data){
    try {
        let response = await post('https://jsonplaceholder.typicode.com/posts', data)
        return response
    } catch (error) {
        console.error(error)
        return
    }
}

let data = {
    userId: 1,
    title : "Titulo",
    body: "body"
}

console.log(await newPost(data))
// let usuario = Number(prompt("Ingrese un numero"))
// let newPosts = await post (usuario)
// for (let post of newPosts){
//     console.log("Post: " + postApi.id)
//     console.table(await comments(postApi.id))
// }