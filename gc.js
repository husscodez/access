async function gf(){
    const c=document.createElement('canvas'),x=c.getContext('2d');
    x.textBaseline='top';x.font='14px Arial';x.fillStyle='#f60';
    x.fillRect(125,1,62,20);x.fillStyle='#069';x.fillText('Canv Word !',2,15);
    x.fillStyle='rgba(102,204,0,0.7)';x.fillText('Canv Word !',4,17);
    return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(c.toDataURL()+'|'+(c.getContext('webgl')?.getExtension('WEBGL_debug_renderer_info')?.UNMASKED_RENDERER_WEBGL||''))))).map(b=>b.toString(16).padStart(2,'0')).join('');
}
