// post hacer envios de informacion
// put actualizacion total ( si queremos cambiar todo el recurso )
// patch actualizacion parcial (cambiar propiedades especificas)
// delete eliminar un recurso
// get obtener datos.

try {
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data = await posts.json()
    console.error("Info 1")
    console.log(`userId: ${data.userId} id: ${data.id}`)
    console.log(`title: ${data.title}`)
    console.log(`body: ${data.body}`)
} catch (error) {
    console.error(error)
}

try {
    let comments = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    let dataComments1 = await comments.json()
    const [a, b, c, d, e] = dataComments1
    console.warn("Comments 1")
    console.table(dataComments1)
    console.log(`postId: ${a.postId} id: ${a.id} name: ${a.name} email: ${a.email}`)
    console.log(`body: ${a.body}`)
    console.log(`postId: ${b.postId} id: ${b.id} name: ${b.name} email: ${b.email}`)
    console.log(`body: ${b.body}`)
    console.log(`postId: ${c.postId} id: ${c.id} name: ${c.name} email: ${c.email}`)
    console.log(`body: ${c.body}`)
    console.log(`postId: ${d.postId} id: ${d.id} name: ${d.name} email: ${d.email}`)
    console.log(`body: ${d.body}`)
    console.log(`postId: ${e.postId} id: ${e.id} name: ${e.name} email: ${e.email}`)
    console.log(`body: ${e.body}`)
    // console.table(dataComments1)
    // console.log(dataComments1)
} catch (error) {
    console.error(error)
}

try {
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts/2")
    let data = await posts.json()
    console.error("Info 2")
    console.log(`userId: ${data.userId} id: ${data.id}`)
    console.log(`title: ${data.title}`)
    console.log(`body: ${data.body}`)
} catch (error) {
    console.error(error)
}

try {
    let comments = await fetch("https://jsonplaceholder.typicode.com/posts/2/comments")
    let dataComments2 = await comments.json()
    const [a, b, c, d, e] = dataComments2
    console.warn("Comments 2")
    console.table(dataComments2)
    console.log(`postId: ${a.postId} id:${a.id} name: ${a.name} email: ${a.email}`)
    console.log(`body: ${a.body}`)
    console.log(`postId: ${b.postId} id:${b.id} name: ${b.name} email: ${b.email}`)
    console.log(`body: ${b.body}`)
    console.log(`postId: ${c.postId} id:${c.id} name: ${c.name} email: ${c.email}`)
    console.log(`body: ${c.body}`)
    console.log(`postId: ${d.postId} id:${d.id} name: ${d.name} email: ${d.email}`)
    console.log(`body: ${d.body}`)
    console.log(`postId: ${e.postId} id:${e.id} name: ${e.name} email: ${e.email}`)
    console.log(`body: ${e.body}`)
    // console.table(dataComments2)
    // console.log(dataComments2)
} catch (error) {
    console.error(error)
}

try {
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts/3")
    let data = await posts.json()
    console.error("Info 3")
    console.log(`userId: ${data.userId} id: ${data.id}`)
    console.log(`title: ${data.title}`)
    console.log(`body: ${data.body}`)
} catch (error) {
    console.error(error)
}

try {
    let comments = await fetch("https://jsonplaceholder.typicode.com/posts/3/comments")
    let dataComments3 = await comments.json()
    const [a, b, c, d, e] = dataComments3
    console.warn("Comments 3")
    console.table(dataComments3)
    console.log(`postId: ${a.postId} id: ${a.id} name: ${a.name} email: ${a.email}`)
    console.log(`body: ${a.body}`)
    console.log(`postId: ${b.postId} id: ${b.id} name: ${b.name} email: ${b.email}`)
    console.log(`body: ${b.body}`)
    console.log(`postId: ${c.postId} id: ${c.id} name: ${c.name} email: ${c.email}`)
    console.log(`body: ${c.body}`)
    console.log(`postId: ${d.postId} id: ${d.id} name: ${d.name} email: ${d.email}`)
    console.log(`body: ${d.body}`)
    console.log(`postId: ${e.postId} id: ${e.id} name: ${e.name} email: ${e.email}`)
    console.log(`body: ${e.body}`)
    // console.table(dataComments3)
    // console.log(dataComments3)
} catch (error) {
    console.error(error)
}