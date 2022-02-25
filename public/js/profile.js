function profile(){
    const token = JSON.parse(localStorage.getItem('token'))
    if(token)
    {
        const logged_in_user = document.getElementById('logged_in_user')
        const { email } = token
        console.log(email)
        logged_in_user.textContent = `Hi ${ email }`
        logged_in_user.href = "/profile"
    }
}

export default profile