const navbar = () => {
    return `
<div id="big">
<div id="black_header">
<div id="Black_footer_main">
    <ul>
        <li><a href="/help">HELP</a></li>
        <li><a href="">TRACK ORDER</a></li>
        <li><a href="/storelocator">STORE LOCATOR</a></li>
        <li><a href="/login" id="logged_in_user">SIGN IN</a></li>
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
<input type="text" placeholder="Search" id="searchingIT" >
<span><i class="fas fa-search"></i></span>
</div>
</div>
<div class="cart-icon-in-header">
<a id="cart_container_anchor"><span id='cartIcon'><i class="fas fa-shopping-cart"></i></span></a> 
</div>
</div>

</div>
<div id="small">
<div id="xnav">

    <div id="small_sidebar">
        <div id="xlogin">
            <i class="fas fa-user"></i><a href="./menProducts.html">LOGIN</a>

        </div>
       <div id="Xmen">
        <div class="smallreal"><a href="./menProducts.html">MEN</a><span>--</span></div>
        <div class="outofname">
           <div class="smallmain"><div>CLOTHING</div><div>+</div></div>
           <div class="smalllist">
            <ul>
                <li><a href=""> Jeans</a></li>
                <li><a href=""> Pants</a></li>
                <li><a href=""> Shorts</a></li>
                <li><a href=""> T-Shirts & Polos</a></li>
                <li><a href=""> Shirts</a></li>
                <li><a href="./menProducts.html"> Jackets</a></li>
                <li><a href=""> Sweaters & Sweatshirts</a></li>
            </ul>
           </div>
           <div>
            <div class="smallmain"> <div>SHOP JEANS BY FIT</div><div>+</div></div>
            <div class="smalllist">
                <ul>
                    <li><a href=""> Skinny</a></li>
                    <li><a href=""> Slim</a></li>
                    <li><a href=""> Tapered</a></li>
                    <li><a href=""> Straight</a></li>
                    <li><a href=""> Relaxed</a></li>
                </ul>
            </div>
            <div class="smallmain"><div>ACCESSORIES</div><div>+</div></div>
                <div class="smalllist">
                    <ul>
                       
                        <li><a href=""> Belts</a></li>
                        <li><a href=""> Wallets</a></li>
                        <li><a href=""> Bags & Backpacks</a></li>
                        <li><a href=""> Caps</a></li>
                        <li><a href=""> Footwear</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div class="smallmain"><div>COLLECTIONS </div><div>+</div></div>
                <div class="smalllist">
                    <ul>
                        <li><a href=""> Sustainability</a></li>
                        <li><a href=""> Levi's® X Super Mario™</a></li>
                        <li><a href=""> RedLoop™</a></li>
                        <li><a href=""> White Tab</a></li>
                        <li><a href=""> Winterwear</a></li>
                        <li><a href=""> Levi's® Flex</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
       </div>
<!-- go to the next -->


<div id="xwomen">
    <div class="smallreal"><a href="./women.html">WOMEN</a><span>--</span></div>
    <div class="outofname">
       <div class="smallmain"><div>CLOTHING</div><div>+</div></div>
       <div class="smalllist">
        <ul>
            <li><a href="">Jeans</a></li>
                            <li><a href="">T-Shirts & Tops</a></li>
                            <li><a href="">Shirts</a></li>
                            <li><a href="">Jackets</a></li>
                            <li><a href="">Shirts</a></li>
                            <li><a href="">Shorts & Skirts</a></li>
                            <li><a href="">Pants</a></li>
                            <li><a href="">Sweaters & Sweatshirts</a></li>
        </ul>
       </div>
       <div>
        <div class="smallmain"> <div>SHOP JEANS BY FIT</div><div>+</div></div>
        <div class="smalllist">
            <ul>
                <li><a href=""> Skinny</a></li>
                <li><a href=""> Slim</a></li>
                <li><a href=""> Tapered</a></li>
                <li><a href=""> Straight</a></li>
                <li><a href=""> Relaxed</a></li>
            </ul>
        </div>
        <div class="smallmain"><div>ACCESSORIES</div><div>+</div></div>
            <div class="smalllist">
                <ul>
                   
                    <li><a href="">Super Skinny</a></li>
                            <li><a href="">Skinny</a></li>
                            <li><a href="">Slim</a></li>
                            <li><a href="">Balloon Leg</a></li>
                            <li><a href="">High Rise</a></li>
                </ul>
            </div>
        </div>
        <div>
            <div class="smallmain"><div>COLLECTIONS </div><div>+</div></div>
            <div class="smalllist">
                <ul>
                    <li><a href="">Sustainability</a></li>
                            <li><a href="">Levi's® X Super Mario™</a></li>
                            <li><a href="">Balloon Jeans</a></li>
                            <li><a href="">Sculpt Jeans</a></li>
                            <li><a href="">Levi's® Made & Crafted®</a></li>
                            <li><a href=""></a>Winterwear</li>
                            <li><a href="">RedLoop™</a></li>
                            <li><a href="">White Tab</a></li>
                  </ul>
              </div>
           </div>
        
           </div>
      </div>
       <!-- new arrivals -->
      <div id="xnewarrivals">
            <div class="smallreal"><a href=#>NEW ARRIVALS</a><span>--</span></div>
            <div>
            <div class="smallmain"><div>MEN</div></div>
             <div class="smallmain"><div>WOMEN</div></div>
             <div class="smallmain"><div>ONLINE EXCLUSIVE</div></div>
          </div>
           </div>

          
            <!-- collections -->
            <div id="xcollections">
                <div class="smallreal"><a href="">COLLECTIONS</a><span>--</span></div>
                <div>
                    <div class="smallmain"><div>REDLOOP</div></div>
                    <div class="smallmain"><div>LEVI'S® MADE & CRAFTED®</div></div>
                    <div class="smallmain"><div>FASHIONFITS</div></div>
                    <div class="smallmain"><div>LEVI'S X DEEPIKA PADUKONE</div></div>
                    <div class="smallmain"><div>WINTERWEAR COLLECTION</div></div>
                </div>
              
              </div>
<!-- sale -->
<div id="xsale">
    <div class="smallreal"><a href="">SALE</a><span>+</span></div>
    <div>
        <div class="smallmain"><div>MEN</div></div>
        <div class="smallmain"><div>WOMEN</div></div>
        <div class="smallmain"><div>FLAT 60%</div></div>
    </div>
   

</div>

<div id="xwinterwear">
    <div class="smallreal"><a href="">WINTERWEAR COLLECTION</a></div>

</div>

<div id="xhelp">
<div>Help</div>
<div>Track Order</div>
<div>Store Locator</div>
</div>

 </div>



    <div id="Small_header">
         <div id="xthreeicon"><i class="fa fa-bars" aria-hidden="true"></i></div>
        <div class="logo-image"><a href="./index.html"><img src="https://www.levi.in/on/demandware.static/-/Sites-LeviIN-Library/en_IN/dw96cbad45/images/homepage/logo.jpg" alt=""></a></div>
        <div>
            <span id="xsearch"><i class="fas fa-search"></i></span>
            <span><i class="fas fa-shopping-cart"></i></span>
        </div> 
    </div>
</div>
</div>

<div id="thePopup">
        <div id="oppopop"></div>
        <div id="oppopopop"></div>
    </div>
`
}

function search() {
    document.getElementById("searchingIT").addEventListener("input", () => { debounce(input, 2000) }
    )
    var inputfield = document.getElementById("searchingIT")
    var positionmen = document.querySelectorAll("#thePopup>div")[1]
    var positionwomen = document.querySelectorAll("#thePopup>div")[0]
    var urlmen = `/search/`
    var urlwomen = `/search/search/`
    document.body.addEventListener("click", function (eve) {
        if (eve.target.id == "thePopup") {
            document.getElementById("thePopup").style.display = "none"
        }


    })
    async function input(positionmen, urlmen) {
        document.getElementById("thePopup").style.display = "flex"
        document.querySelectorAll("#thePopup>div")[0].innerHTML = ""
        document.querySelectorAll("#thePopup>div")[1].innerHTML = ""
        if (inputfield.value == "") {
            document.getElementById("thePopup").style.display = "none"
        }

        console.log(inputfield.value, "inputfield")
        // console.log(inputfield)
        let res;
        let rea;
        try {
            res = await fetch(`${urlmen}${inputfield.value}`)
            rea = await res.json()
            console.log({ rea })
        } catch (err) {
            console.log(err)
        }
        // if(rea.length==0)
        // {
        //     positionmen.innerHTML="Nothing Found Try Different"
        // }
        rea.forEach(elem => {
            let divmain = document.createElement("div")
            let div1 = document.createElement("div")
            let div2 = document.createElement("div")
            let img = document.createElement("img")
            img.src = elem.image[0]
            let name = document.createElement("p")
            name.innerHTML = elem.title
            let price = document.createElement("p")
            price.innerHTML = `Rs.${elem.price.mrp}`
            div1.append(img)
            div2.append(name, price)
            divmain.append(div1, div2)
            positionmen.append(divmain)
            divmain.addEventListener("click", () => {

                window.location.href = `http://localhost:7000/${elem.gender}/${elem.item_type}/${elem._id}`
                console.log(`http://localhost:7000/${elem.gender}/${elem.item_type}/${elem._id}`)
            })
        });
    }
    const debounce = (input, time) => {
        console.log("yes it works")
        // console.log(document.getElementsByTagName("input"))
        setTimeout(function () {
            input(positionmen, urlmen)
            input(positionwomen, urlwomen)
        }, time)
    }
}

export { navbar, search}
