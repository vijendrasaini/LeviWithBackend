// document.getElementById("searchingIT").addEventListener("input", () => { debounce(input, 2000) }
// )
// var inputfield = document.getElementById("searchingIT")
// var positionmen = document.querySelectorAll("#thePopup>div")[1]
// var positionwomen = document.querySelectorAll("#thePopup>div")[0]
// var urlmen = `http://localhost:7000/search/`
// var urlwomen = `http://localhost:7000/search/search/`
// document.body.addEventListener("click", function (eve) {
//     if (eve.target.id == "thePopup") {
//         document.getElementById("thePopup").style.display = "none"
//     }


// })
// async function input(positionmen, urlmen) {
//     document.getElementById("thePopup").style.display = "flex"
//     document.querySelectorAll("#thePopup>div")[0].innerHTML = ""
//     document.querySelectorAll("#thePopup>div")[1].innerHTML = ""
//     if (inputfield.value == "") {
//         document.getElementById("thePopup").style.display = "none"
//     }

//     console.log(inputfield.value, "inputfield")
//     // console.log(inputfield)
//     let res = await fetch(`${urlmen}${inputfield.value}`)
//     let rea = await res.json()
//     console.log(rea)
//     // if(rea.length==0)
//     // {
//     //     positionmen.innerHTML="Nothing Found Try Different"
//     // }
//     rea.forEach(elem => {
//         let divmain = document.createElement("div")
//         let div1 = document.createElement("div")
//         let div2 = document.createElement("div")
//         let img = document.createElement("img")
//         img.src = elem.image[0]
//         let name = document.createElement("p")
//         name.innerHTML = elem.title
//         let price = document.createElement("p")
//         price.innerHTML = `Rs.${elem.price.mrp}`
//         div1.append(img)
//         div2.append(name, price)
//         divmain.append(div1, div2)
//         positionmen.append(divmain)
//         divmain.addEventListener("click", () => {

//             window.location.href = `http://localhost:7000/${elem.gender}/${elem.item_type}/${elem._id}`
//             console.log(`http://localhost:7000/${elem.gender}/${elem.item_type}/${elem._id}`)
//         })
//     });
// }
// const debounce = (input, time) => {
//     console.log("yes it works")
//     // console.log(document.getElementsByTagName("input"))
//     setTimeout(function () {
//         input(positionmen, urlmen)
//         input(positionwomen, urlwomen)
//     }, time)
// }