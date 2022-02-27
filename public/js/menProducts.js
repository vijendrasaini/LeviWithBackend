const gender_checkboxes = document.getElementsByClassName('gender_checkboxes')
const item_type_checkboxes = document.getElementsByClassName('item_type_checkboxes')
const priceRadioInputClasses = document.getElementsByClassName('priceRadioInputClass')

let record_gKeys = JSON.parse(localStorage.getItem('gKeys'))
let record_iKeys = JSON.parse(localStorage.getItem('iKeys'))

if(record_gKeys)
{
    record_gKeys.forEach(e=>{
        gender_checkboxes[e].checked = true
    })
}
if(record_iKeys)
{
    record_iKeys.forEach(e=>{
        item_type_checkboxes[e].checked = true
    })
}



let data 
function returnData(men){
    data = men
    console.log(men)
}
function onclickFunc(){
    
    let obj = { flag : 1 }
    let cn = 0, cv = 0
    let gKeys = [], iKeys = []
    let item_type
    for( let i = 0; i < gender_checkboxes.length ; i++ )
        if(gender_checkboxes[i].checked)
            {
                gKeys.push(i)
                if(obj.flag)
                {
                    cv++
                    cn++
                    obj.flag = 0
                }
                if(obj[`prefn${cn}`] == undefined)
                    obj[`prefn${cn}`] = "gender"
                if(obj[`prefv${cv}`] == undefined)
                    obj[`prefv${cv}`] = []
                obj[`prefv${cv}`].push(gender_checkboxes[i].value)
            }
        
        
    obj.flag = 1
    let item_type_arr = []
    for(let i = 0 ; i < item_type_checkboxes.length ; i++ )  
        if(item_type_checkboxes[i].checked)
        {
            if(i == 2)
                item_type_checkboxes[i].value = decodeURI(item_type_checkboxes[i].value)
            iKeys.push(i)
            if(obj.flag)
                {
                    cv++
                    cn++
                    obj.flag = 0
                }
            if(obj[`prefn${cn}`] == undefined)
                obj[`prefn${cn}`] = "item_type"
            if(obj[`prefv${cv}`] == undefined)
                    obj[`prefv${cv}`] = []
            obj[`prefv${cv}`].push(item_type_checkboxes[i].value)
        }

    //     obj.flag = 1
    //     let item_type_arr = []
    //     for(let i = 0 ; i < priceRadioInputClasses.length ; i++ )  
    //         if(priceRadioInputClasses[i].checked)
    //         {
    //             // iKeys.push(i)
    //             if(obj.flag)
    //                 {
    //                     cv++
    //                     cn++
    //                     obj.flag = 0
    //                 }
    //             if(obj[`prefn${cn}`] == undefined)
    //                 obj[`prefn${cn}`] = "item_type"
    //             if(obj[`prefv${cv}`] == undefined)
    //                     obj[`prefv${cv}`] = []
    //             obj[`prefv${cv}`].push(priceRadioInputClasses[i].value)
    //         }
    // createDynamicUrl(obj,gKeys, iKeys)
}
function createDynamicUrl(obj,gKeys, iKeys){
    delete obj.flag
    for(let x in obj){
        if(x.startsWith('prefv'))
            obj[x] = obj[x].join("|")
    }
    const api = document.getElementById('api').value
    let x = `/${api}?`
    let arr = []
    for(let x in obj)
    {
        arr.push(`${x}=${obj[x]}`)
    }
    let queryCompound =  arr.join("&")
    let y = encodeURI(queryCompound)
    qreryRequest(x + y,gKeys, iKeys)
}
async function qreryRequest(url,gKeys, iKeys){
    console.log(url)
    localStorage.setItem('gKeys',JSON.stringify(gKeys))
    localStorage.setItem('iKeys',JSON.stringify(iKeys))
    window.location.href = url
}



const sortSelectButton = document.getElementById('sortSelect')
sortSelectButton.onchange = ()=>{
    const value = document.getElementById('sortSelect').value
    sort2(value)
}
function sort2(v){
    console.log(v)
    if(v == 'high'){
        data.sort((a,b)=>(b.price.price-a.price.price))
        appendMenData(data)   
    }
    else if(v == 'low'){
        data.sort((a,b)=>(a.price.price-b.price.price))
        appendMenData(data)
    }
    else if(v == 'a'){
        data.sort((a,b)=>{
            if(a.title>b.title) return 1
            if(a.title<b.title) return -1
            return 0
        })
        appendMenData(data)
    }
    else{
        data.sort((a,b)=>{
            if(a.title>b.title) return -1
            if(a.title<b.title) return 1
            return 0
        })
        appendMenData(data)
    }
}

const openAndCloseClass = document.getElementsByClassName('openAndClose')
const openAndCloseDivClass = document.getElementsByClassName('openAndCloseDiv')
for(let i=0;i<openAndCloseClass.length;i++)
{
    openAndCloseClass[i].style.cursor = "pointer"
    openAndCloseClass[i].onclick = ()=>{
        openAndCloseFunc(i)
    }
}
function openAndCloseFunc(i)
{
    console.log("hi",i)
    const contentp = `<i class="fas fa-plus-circle">`
    const contentm = `<i class="fas fa-minus-circle">`
    const more=document.getElementById("openAndCloseDiv"+i);
    if(more.style.display==="none"){
        more.style.display="block";
        openAndCloseClass[i].innerHTML = contentm
    }
    else{
        more.style.display="none";
        openAndCloseClass[i].innerHTML = contentp
    }
}

function fullDetail(subCat, id){
    console.log(subCat,id)
    window.location.href = `/men/clothing/${subCat}/${id}`
}