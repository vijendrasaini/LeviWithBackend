const navbar = ()=>{
    return `
    <div id="black_header">
    <div id="Black_footer_main">
        <ul>
            <li><a href="/help">HELP</a></li>
            <li><a href="">TRACK ORDER</a></li>
            <li><a href="/storelocator">STORE LOCATOR</a></li>
            <li><a href="/login">SIGN IN</a></li>
            <li><img src="https://media.istockphoto.com/vectors/flag-of-india-vector-id472317739?b=1&k=20&m=472317739&s=170667a&w=0&h=Ju9wPp7N7fM00TiZtVuVr_wc6elG1L-b32DMlY7JHc4=" alt=""></li>
        </ul>
    </div>
</div>
<div class="navigation-bar">
    <div class="logo-image">
        <a href="/home">
            <img src="/img/logo.jpg"
            alt="">
        </a>
    </div>
    <div>
        <ul class="category-name">
            <li> <span><a href="/men">MEN</a></span>
                <div class="category-container">
                    <ul>
                        <h5>CLOTHING</h5>
                        <li><a href="men?prefn1=item_type&prefv1=jeans"> Jeans</a></li>
                        <li><a href=""> Pants</a></li>
                        <li><a href=""> Shorts</a></li>
                        <li><a href="/men?prefn1=item_type&prefv1=T%20-Shirts%20and%20POLOS"> T-Shirts & Polos</a></li>
                        <li><a href=""> Shirts</a></li>
                        <li><a href="/men?prefn1=item_type&prefv1=jackets"> Jackets</a></li>
                        <li><a href=""> Sweaters & Sweatshirts</a></li>
                    </ul>

                    <ul>
                        <h5>SHOP JEANS BY FIT</h5>
                        <li><a href=""> Skinny</a></li>
                        <li><a href=""> Slim</a></li>
                        <li><a href=""> Tapered</a></li>
                        <li><a href=""> Straight</a></li>
                        <li><a href=""> Relaxed</a></li>
                    </ul>

                    <ul>
                        <h5>ACCESSORIES</h5>
                        <li><a href="#"> Belts</a></li>
                        <li><a href="#"> Wallets</a></li>
                        <li><a href="#"> Bags & Backpacks</a></li>
                        <li><a href="#"> Caps</a></li>
                        <li><a href="#"> Footwear</a></li>
                    </ul>

                    <ul>
                        <h5>COLLECTIONS</h5>
                        <li><a href="#"> Sustainability</a></li>
                        <li><a href="#"> Levi's® X Super Mario™</a></li>
                        <li><a href="#"> RedLoop™</a></li>
                        <li><a href="#"> White Tab</a></li>
                        <li><a href="#"> Winterwear</a></li>
                        <li><a href="#"> Levi's® Flex</a></li>
                    </ul>

                </div>
            </li>
            <li> <span><a href="/women">WOMEN</a></span>
                <div class="category-container">
                    <ul>
                        <h5>CLOTHING</h5>
                        <li><a href="/women?prefn1=item_type&prefv1=Jeans">Jeans</a></li>
                        <li><a href="">T-Shirts & Tops</a></li>
                        <li><a href="">Shirts</a></li>
                        <li><a href="/women?prefn1=item_type&prefv1=jackets">Jackets</a></li>
                        <li><a href="">Shirts</a></li>
                        <li><a href="">Shorts & Skirts</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Sweaters & Sweatshirts</a></li>
                    </ul>
                    <ul>
                        <h5>SHOP JEANS BY FIT</h5>
                        <li><a href="/women?prefn1=item_type&prefv1=Super%20Skinny">Super Skinny</a></li>
                        <li><a href="">Skinny</a></li>
                        <li><a href="">Slim</a></li>
                        <li><a href="">Balloon Leg</a></li>
                        <li><a href="">High Rise</a></li>

                    </ul>
                    <ul>
                        <h5>ACCESSORIES</h5>
                        <li><a href="#">Bags & Backpacks</a></li>
                        <li><a href="#">Belts</a></li>
                        <li><a href="#">Sneakers</a></li>
                        <li><a href="#">Footwear</a></li>
                    </ul>
                    <ul>
                        <h5>COLLECTIONS</h5>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Levi's® X Super Mario™</a></li>
                        <li><a href="#">Balloon Jeans</a></li>
                        <li><a href="#">Sculpt Jeans</a></li>
                        <li><a href="#">Levi's® Made & Crafted®</a></li>
                        <li><a href="#"></a>Winterwear</li>
                        <li><a href="#">RedLoop™</a></li>
                        <li><a href="#">White Tab</a></li>
                    </ul>
                </div>
            </li>
            <li><span>NEW ARRIVALS</span>
                <div class="category-container">
                    <ul>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Online Exclusive</a></li>
                    </ul>
                </div>
            </li>
            <li><span>COLLECTIONS</span>
                <div class="category-container">
                    <ul>
                        <li><a href="">REDLOOP</a></li>
                        <li><a href="">LEVI'S® MADE & CRAFTED®</a></li>
                        <li><a href="">FASHIONFITS</a></li>
                        <li><a href="">LEVI'S X DEEPIKA PADUKONE</a></li>
                        <li><a href="">WINTERWEAR COLLECTION</a></li>
                    </ul>
                </div>
            </li>
            <li><span>SALE</span>
                <div class="category-container">
                    <ul>
                        <li><a href="">Men</a></li>
                        <li><a href="">Women</a></li>
                        <li><a href="">FLAT 60%</a></li>
                    </ul>
                </div>
            </li>
            <li><span>WINTERWEAR COLLECTION</span>

            </li>
        </ul>
    </div>
    <div>
        <div class="nav-search-box">
            <input type="text" placeholder="Search">
            <span><i class="fas fa-search"></i></span>
        </div>
    </div>
    <div class="cart-icon-in-header">
    <a id="cart_container_anchor"><span id='cartIcon'><i class="fas fa-shopping-cart"></i></span></a> 
    </div>
    </div>
    `
}


// const cart = () => {
//     console.log("inside cart function")
//     let user_and_token = localStorage.getItem('user_and_token')
//     if(!user_and_token){
//         window.location.href = "/login"
//         alert('please sign in')
//         return 
//     }

//     const { user: {_id} } = user_and_token
//     window.location.href = `/cart/${_id}`
//     }
// module.exports = { navbar, cart}    
export default navbar