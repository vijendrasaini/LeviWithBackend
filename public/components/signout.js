function sign_out_user(){
    const token = JSON.parse(localStorage.getItem('token'))
    if(token)
        {
            localStorage.removeItem('token')
            alert('You are successfully logged out.')
        }
}
export default sign_out_user