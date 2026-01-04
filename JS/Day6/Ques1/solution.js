
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(users=>{
    const activeUser=users.map(user=>{
        return{
            id:user.id,
            fullName:user.name,
            email:user.email
        }
    })

    console.log(activeUser);
})
.catch(err=>console.error(`This is the error ${err}`))