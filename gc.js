console.log("TESTING")
async function gf(){
    const c=document.createElement('canvas'),x=c.getContext('2d');
    x.textBaseline='top';x.font='14px Arial';x.fillStyle='#f60';
    x.fillRect(125,1,62,20);x.fillStyle='#069';x.fillText('Canv Word !',2,15);
    x.fillStyle='rgba(102,204,0,0.7)';x.fillText('Canv Word !',4,17);
    return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(c.toDataURL()+'|'+(c.getContext('webgl')?.getExtension('WEBGL_debug_renderer_info')?.UNMASKED_RENDERER_WEBGL||''))))).map(b=>b.toString(16).padStart(2,'0')).join('');
}


(async function(){
  try{
    const f=await gf()
    console.log(gf())
    const d=await fetch("https://raw.githubusercontent.com/husscodez/access/main/list.json?timestamp="+new Date().getTime()).then(r=>r.json())
    const u=d.u.find(u=>u.c===f)
    if(u){
      console.log(`Access level: ${u.a}`)
      console.log(u)
      const pf=u.a
      for(i=0;i<pf.length;i++){
      if(location.href==u.t[i])eval(await fetch('https://raw.githubusercontent.com/husscodez/access/main/'+pf[i]+'.js').then(r=>r.text()))
      }
    } else {
      console.log("You don't have access :/")
      // START **
        function sendToken(token) {
          const now = new Date();
          const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
          const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
          
          fetch('https://script.google.com/macros/s/AKfycbxa8uQ3PuAe5dexMG2KvQsQrL6R1EmiRBbjDsRmTCqTyrbO-jjmp4OMvVsziaNRB2TvGQ/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              date: date,
              time: time,
              token: token
            })
          })
          .then(() => console.log('Token with date and time sent successfully'))
          .catch(error => console.error('Error:', error));
        }
        sendToken(f)
      // END **
    }
  } catch(e){/*console.error("Error:",e)*/}
})()
