let topic = document.createElement("h3")
document.body.append(topic)
topic.innerHTML= "This form is to be filled with original details:"

let parent = document.createElement("form")
document.body.append(parent)
parent.setAttribute("id","form-id")
parent.setAttribute("Name","parent")
parent.addEventListener("submit",subfunc)

function subfunc(a){
    var count =0
    td1.innerHTML = document.forms["parent"]["Fname"].value
    td2.innerHTML = document.forms["parent"]["Sname"].value
    td3.innerHTML = document.forms["parent"]["Add1_2"].value
    td4.innerHTML = document.forms["parent"]["Pin1"].value
    td5.innerHTML = document.forms["parent"]["dis1"].value
    td6.innerHTML = document.forms["parent"]["st1"].value
    if(opt1.checked){
        td7.innerHTML = document.forms["parent"]["opt1"].value
        count++;
    }
    if(opt2.checked){
        td7.append(`,${document.forms["parent"]["opt2"].value}`)
        count++;
    }
    if(opt3.checked){
        td7.append(`,${document.forms["parent"]["opt3"].value}`)
        count++;
    }
    if(opt4.checked){
        td7.append(`,${document.forms["parent"]["opt4"].value}`)
        count++;
    }
    if(opt5.checked){
        td7.append(`,${document.forms["parent"]["opt5"].value}`)
        count++;
    }
    function checkfood(){
    if(count<2){
        function req(){
            alert("Please select atleast 2 favourite foods")
        }
        req();
    }
    }   
    checkfood()
    a.preventDefault();
    document.getElementById("form-id").reset()
}

let Names = document.createElement("div")
Names.setAttribute("class","container-md")
Names.setAttribute("id","Names")
parent.append(Names)

let row = document.createElement("div")
row.setAttribute("class","row")
Names.append(row)

let f = document.createElement("div")
f.setAttribute("class","col-md-6")
row.append(f)

let Label1 = document.createElement("label")
Label1.setAttribute("for","Fname")
Label1.textContent="Firstname:"
f.append(Label1)
let Fname = document.createElement("input")
Fname.setAttribute("name","Fname")/////---name
Fname.setAttribute("type","text")
Fname.setAttribute("id","Fname")
f.append(Fname)



let s = document.createElement("div")
s.setAttribute("class","col-md-6")
row.append(s)


let Label2 = document.createElement("label")
Label2.setAttribute("for","Sname")
Label2.textContent="Lastname:"
s.append(Label2)/////
let Sname = document.createElement("input")
Sname.setAttribute("name","Sname")////-name
Sname.setAttribute("type","text")
Sname.setAttribute("id","Sname")
s.append(Sname)

///////////////////////////////////////////////////////////
let Addpin = document.createElement("div")  /////container - add&pin
Addpin.setAttribute("class","container-md")
parent.append(Addpin)

let row1 = document.createElement("div")/////row - add &pin
row1.setAttribute("class","row")

Addpin.append(row1)

let Addbar = document.createElement("div")////address column
Addbar.setAttribute("class","col-md-5")
row1.append(Addbar)

let Pinbar = document.createElement("div")////pincode column
Pinbar.setAttribute("class","col-md-5")
Pinbar.setAttribute("id","pin")
row1.append(Pinbar)

let Add1 = document.createElement("div")
Add1.setAttribute("class","input-group") ////input-group for address
Addbar.append(Add1)

let Add1_1 = document.createElement("div")
Add1_1.setAttribute("class","input-group-prepend")///////input-group-pre for address
Add1.append(Add1_1)
let Add1_1_1 = document.createElement("span")////address heading
Add1_1_1.setAttribute("class","input-group-text")
Add1_1_1.innerHTML ="Address:"
Add1_1.append(Add1_1_1)
let Add1_2 = document.createElement("textarea")//////textarea box created
Add1_2.setAttribute("class","form-control")
Add1_2.setAttribute("Aria-label","Address")
Add1_2.setAttribute("name","Add1_2")
Add1.append(Add1_2)


let Label3 = document.createElement("label")///label for pinbar
Label3.setAttribute("for","pin-id")
Label3.innerHTML="Pincode:"
Pinbar.append(Label3)
let Pin1 =document.createElement("input")////input pincode
Pin1.setAttribute("type","tel")
Pin1.setAttribute("minlength","6")
Pin1.setAttribute("maxlength","6")
Pin1.setAttribute("name","Pin1")
Pin1.setAttribute("id","pin-id")
Pinbar.append(Pin1)


let Food = document.createElement("div")///food choice bar
Food.setAttribute("class","container-md")
parent.append(Food)

let row2 = document.createElement("div")////row for food
row2.setAttribute("class","row")
Food.append(row2)

let divheader = document.createElement("div")/////div for cboxes
divheader.setAttribute("class","col-md-10")
row2.append(divheader)

let divhead = document.createElement("fieldset")
divheader.append(divhead)

let legend = document.createElement("legend")
legend.textContent="Choose you favourite"
divhead.append(legend)

let div1 = document.createElement("div")
divhead.append(div1)

let opt1 = document.createElement("input")
opt1.setAttribute("type","checkbox")
opt1.setAttribute("name","opt1")
opt1.setAttribute("value","Indian")
opt1.setAttribute("id","opt1")
div1.append(opt1)

let lbl1 = document.createElement("label")
lbl1.setAttribute("for","opt1")
lbl1.textContent="Indian"
div1.append(lbl1)
///
let div2 = document.createElement("div")
divhead.append(div2)

let opt2 = document.createElement("input")
opt2.setAttribute("type","checkbox")
opt2.setAttribute("name","opt2")
opt2.setAttribute("value","Chinese")
opt2.setAttribute("id","opt2")
div2.append(opt2)

let lbl2 = document.createElement("label")
lbl2.setAttribute("for","opt2")
lbl2.textContent="Chinese"
div2.append(lbl2)
////
let div3 = document.createElement("div")
divhead.append(div3)

let opt3 = document.createElement("input")
opt3.setAttribute("type","checkbox")
opt3.setAttribute("name","opt3")
opt3.setAttribute("value","Italian")
opt3.setAttribute("id","opt3")
div3.append(opt3)

let lbl3 = document.createElement("label")
lbl3.setAttribute("for","opt3")
lbl3.textContent="Italian"
div3.append(lbl3)
///
let div4 = document.createElement("div")
divhead.append(div4)

let opt4 = document.createElement("input")
opt4.setAttribute("type","checkbox")
opt4.setAttribute("name","opt4")
opt4.setAttribute("value","Mexican")
opt4.setAttribute("id","opt4")
div4.append(opt4)

let lbl4 = document.createElement("label")
lbl4.setAttribute("for","opt4")
lbl4.textContent="Mexican"
div4.append(lbl4)
///
let div5 = document.createElement("div")
divhead.append(div5)

let opt5 = document.createElement("input")
opt5.setAttribute("type","checkbox")
opt5.setAttribute("name","opt5")
opt5.setAttribute("value","Korean")
opt5.setAttribute("id","opt5")
div5.append(opt5)

let lbl5 = document.createElement("label")
lbl5.setAttribute("for","opt5")
lbl5.textContent="Korean"
div5.append(lbl5)

///////food completed

let Dist_state = document.createElement("div")/////dis & state ku
Dist_state.setAttribute("class","container-md")
parent.append(Dist_state)

let row3 = document.createElement("div")/////row made
row3.setAttribute("class","row")
Dist_state.append(row3)

let District = document.createElement("div")
District.setAttribute("class","col-md-6")
row3.append(District)

let label4 = document.createElement("label")
label4.setAttribute("for","dis1")
label4.textContent="District:"
District.append(label4)////
let dis1 = document.createElement("input")
dis1.setAttribute("type","text")
dis1.setAttribute("id","dis1")
dis1.setAttribute("name","dis1") ////- Name
District.append(dis1)

let Statebar = document.createElement("div")
Statebar.setAttribute("class","col-md-6")
row3.append(Statebar)

let label5 = document.createElement("label")
label5.setAttribute("for","st1")
label5.textContent="State:"
Statebar.append(label5)
let st1 = document.createElement("input")
st1.setAttribute("type","text")
st1.setAttribute("id","st1")
st1.setAttribute("name","st1") /////-name
Statebar.append(st1)

/////////////
let table= document.createElement("div")/////table
table.setAttribute("class","container-md")
parent.append(table)

let row4 = document.createElement("div")/////row made
row4.setAttribute("class","row")
table.append(row4)

let  tables = document.createElement("div")
tables.setAttribute("class","col-md-6")
tables.setAttribute("id","table1st")
row4.append(tables)

let tablebar = document.createElement("table")
table.setAttribute("name","table")
tables.append(tablebar)

let tablerow1 = document.createElement("tr")
tablebar.append(tablerow1)

let th1 = document.createElement("th")
th1.textContent="FirstName"
tablerow1.append(th1)
let th2 = document.createElement("th")
th2.textContent="SecondName"
tablerow1.append(th2)
let th3 = document.createElement("th")
th3.textContent="Address"
tablerow1.append(th3)



let tablerow2=document.createElement("tr")
tablebar.append(tablerow2)


let td1 = document.createElement("td")
tablerow2.append(td1)

let td2 = document.createElement("td")
tablerow2.append(td2)

let td3 = document.createElement("td")
tablerow2.append(td3)


let  tables2 = document.createElement("div")
tables2.setAttribute("class","col-md-6")
tables2.setAttribute("id","table2nd")
row4.append(tables2)

let tablebar2 = document.createElement("table")
tablebar2.setAttribute("name","table")
tables2.append(tablebar2)

let tablerow3 = document.createElement("tr")
tablebar2.append(tablerow3)

let th4 = document.createElement("th")
th4.textContent="Pincode"
tablerow3.append(th4)

let th5 = document.createElement("th")
th5.textContent="District"
tablerow3.append(th5)

let th6= document.createElement("th")
th6.textContent="State"
tablerow3.append(th6)

let th7 = document.createElement("th")
th7.textContent="Foodchoice"
tablerow3.append(th7)

let tablerow4 = document.createElement("tr")
tablebar2.append(tablerow4)

let td4 = document.createElement("td")
tablerow4.append(td4)

let td5 = document.createElement("td")
tablerow4.append(td5)

let td6 = document.createElement("td")
tablerow4.append(td6)

let td7 = document.createElement("td")
tablerow4.append(td7)



let submit = document.createElement("button")
submit.setAttribute("type","submit")
submit.textContent="Submit"
parent.append(submit)


