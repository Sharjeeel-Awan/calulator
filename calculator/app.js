function addingValue(number){
    var inputField= document.getElementById("inputField")
    inputField.value += number
}
function result(){
    var inputField= document.getElementById("inputField")
    inputField.value=eval(inputField.value)
}
function allClear(){
    var inputField=document.getElementById("inputField")
    inputField.value=""
}
function singleClear() {
    var inputField = document.getElementById("inputField")
    inputField.value = inputField.value.slice(0, -1)
}