// console.log("GC loaded!")

async function gf(){
    return localStorage.EXT_KEY
}


(async function(){ // potential async/await delay issues, causing script not to load..
  try{
    const f=await gf()
    console.log("Fetching token...")
    const d=await fetch("https://raw.githubusercontent.com/husscodez/access/main/list.json?timestamp="+new Date().getTime()).then(r=>r.json())
    const u=d.u.find(u=>u.c===f)
    if(u){
      console.log(`Access level: ${u.a}`)
      console.log(u)
      const pf=u.a
      for(i=0;i<pf.length;i++){
      if(location.href.includes(u.t[i]))eval(await fetch('https://raw.githubusercontent.com/husscodez/access/main/'+pf[i]+'.js').then(r=>r.text()))
      }
    } else {
      console.log("You don't have access :/")
    }
  } catch(e){}
})()
