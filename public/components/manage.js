function manager(params) {
    import { navbar, search } from "/js/header.js"
    import footermain from "/js/footermain.js"
    import profile from "/components/profile.js"
    import cart from "/components/cart.js"

    document.getElementsByTagName("footer")[0].innerHTML = footermain()
    document.getElementsByTagName('header')[0].innerHTML = navbar()
    document.getElementById('cart_container_anchor').addEventListener('click', cart)
    profile()
    search();
}
export default manager;