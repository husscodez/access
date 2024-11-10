console.log(000)


t=document.createElement('textarea');t.id='at'
t.style='position:fixed;left:0;top:0;height:50px'
document.getElementsByClassName('footerContent')[0].after(t)

t.onpaste=e=>{
alert(t.value)
}

console.log(111)
