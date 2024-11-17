console.log("TD loaded")

convertDate=date=>date.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/,(m,d,mth,y)=>`${d.padStart(2,'0')}/${mth.padStart(2,'0')}/${y.length==2?'20'+y:y}`)

onclick=e=>{
if(e.target.id=='sel_username'){
c=document.createElement('button')
c.className='btn btn-info'
c.id='copy'
c.innerText='Copy'
q=document.createElement('button')
q.className='btn btn-info'
q.id='quote'
q.innerText='Quote'
abi=setInterval(function(){
if(document.getElementsByClassName('btn-light')[0]!=undefined){
dobv=document.getElementsByName('birthdate')[0]
if(dobv.value.split('-')[0].length==4)document.getElementsByName('birthdate')[0].value=dobv.value.split('-')[1]+'-'+dobv.value.split('-')[2]+'-'+dobv.value.split('-')[0]
clearInterval(abi)
document.getElementsByClassName('btn-light')[0].before(q)
document.getElementsByClassName('btn-light')[0].before(c)
document.getElementsByClassName('btn-light')[0].parentElement.innerHTML+='<img id="info_btn" src="https://seeklogo.com/images/I/information-desk-symbol-logo-871156055D-seeklogo.com.png" style="position:absolute;left:0;bottom:0;width:20px;height:20px;filter:invert(1);cursor:pointer" title="Quote button:&#013;Left click -> Quote Male&#013;Right click -> Quote Female">'
info_btn.onclick=e=>alert('Quote button:\nLeft click -> Quote Male\nRight click -> Quote Female')
c.onclick=e=>{
bdv=document.getElementsByName('birthdate')[0].value
if(bdv.split(/\D/)[2]<50)bdv=bdv.split(/\D/)[0]+'/'+bdv.split(/\D/)[1]+'/20'+bdv.split(/\D/)[2]
else if(bdv.split(/\D/)[2]<100)bdv=bdv.split(/\D/)[0]+'/'+bdv.split(/\D/)[1]+'/19'+bdv.split(/\D/)[2]
navigator.clipboard.writeText(zip_code.value+'\n'+convertDate(bdv))
}
}
},50)
}
if(e.target.id=='threedot') add_tag.click()
}


