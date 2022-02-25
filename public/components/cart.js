function cart() {
    console.log("inside cart function")
    let token = localStorage.getItem('token')
    if (!token) {
        window.location.href = "/login"
        alert('please sign in')
        return
    }
    const { id } = JSON.parse(token)
    window.location.href = `/cart/${id}`
}

export default cart