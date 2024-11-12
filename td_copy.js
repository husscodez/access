console.log("TD loaded !!!!!")
convertDate=date=>date.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/,(m,d,mth,y)=>`${d.padStart(2,'0')}/${mth.padStart(2,'0')}/${y.length==2?'20'+y:y}`)

console.log(document.getElementById('sel_username'))

sel_username.onclick=e=>{
  console.log("CLICKED")
c=document.createElement('button')
c.className='btn btn-info'
c.id='copy'
c.innerText='Copy'
abi=setInterval(function(){
if(document.getElementsByClassName('btn-light')[0]!=undefined){
dobv=document.getElementsByName('birthdate')[0]
if(dobv.value.split('-')[0].length==4)document.getElementsByName('birthdate')[0].value=dobv.value.split('-')[1]+'-'+dobv.value.split('-')[2]+'-'+dobv.value.split('-')[0]
clearInterval(abi)
document.getElementsByClassName('btn-light')[0].before(c)
c.onclick=e=>{
bdv=document.getElementsByName('birthdate')[0].value
if(bdv.split(/\D/)[2]<50)bdv=bdv.split(/\D/)[0]+'/'+bdv.split(/\D/)[1]+'/20'+bdv.split(/\D/)[2]
else if(bdv.split(/\D/)[2]<100)bdv=bdv.split(/\D/)[0]+'/'+bdv.split(/\D/)[1]+'/19'+bdv.split(/\D/)[2]
navigator.clipboard.writeText(zip_code.value+'\n'+convertDate(bdv))
}
}
},50)
}

threedot.onclick=e=>add_tag.click()

