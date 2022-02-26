function profile(){
    const token = JSON.parse(localStorage.getItem('token'))
    if(token)
    {
        const logged_in_user = document.getElementById('logged_in_user')
        const { email , id} = token
        console.log(email, id)
        logged_in_user.textContent = `Hi ${ email.split('@')[0] }`
        logged_in_user.href = `/profile/${id}`
    }
}


export default profile