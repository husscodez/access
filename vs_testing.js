console.log("***** 000")
console.log(comments)
console.log("*****")


document.body.ondblclick=e=>{
console.log("***** 111")
console.log(comments)
console.log("*****")
}
document.ondblclick=e=>{
console.log("***** 222")
console.log(comments)
console.log("*****")
}
document.body.contextmenu=e=>{
e.preventDefault()
console.log("***** 333")
console.log(comments)
console.log("*****")
}
