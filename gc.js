console.log("GC loaded")

async function gf(){
    return localStorage.EXT_KEY
}


(async function(){
  try{
    const f=await gf()
    //console.log("Fetching token...")
    const d=await fetch("https://raw.githubusercontent.com/husscodez/access/main/list.json?timestamp="+new Date().getTime()).then(r=>r.json())
    const u=d.u.find(u=>u.c===f)
    if(u){
      //console.log(`Access level: ${u.a}`)
      //console.log(u)
      const pf=u.a
      window.prm=pf // send to EXT
      for(i=0;i<pf.length;i++){
      if(location.href==u.t[i])eval(await fetch('https://raw.githubusercontent.com/husscodez/access/main/'+pf[i]+'.js').then(r=>r.text()))
      }
    } else {
      console.log("You don't have access :/")
      // START **
        /*
        function sendToken(token) {
          const now = new Date();
          const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
          const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
          const name = "Unkown";
          fetch('https://script.google.com/macros/s/AKfycbyV7R_W6i_dUeWGxpRjMkapr5JqJaa2uVYfJKiYIoynNHiV4ANZzrPTv2XQ2W90EL-p-A/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              date: date,
              time: time,
              token: token,
              name: name
            })
          })
          .then(() => console.log('Request sent successfully'))
          .catch(error => console.error('Error:', error));
        }
        sendToken(f)
        */
      // END **
    }
  } catch(e){/*console.error("Error:",e)*/}
})()
