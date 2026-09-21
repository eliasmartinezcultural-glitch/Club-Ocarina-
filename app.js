const DATA={benefits:[{id:"market",icon:"✦",name:"Market Studio",title:"10% de descuento",detail:"Hasta 10 planchas de stickers por mes.",limit:"10 planchas/mes"},{id:"rh",icon:"§",name:"Estudio Jurídico RH",title:"1 orientación jurídica",detail:"20 minutos por mes.",limit:"1 uso/mes"},{id:"kiri",icon:"◉",name:"Kiri Fotografía",title:"3 fotos profesionales",detail:"Utilizables juntas en una sesión.",limit:"3 fotos/mes"},{id:"manager",icon:"↗",name:"Ocarina Manager",title:"1 charla mensual",detail:"Individual o para equipos.",limit:"1 uso/mes"}],allies:["Market Studio","Estudio Jurídico RH","Kiri Fotografía","Ocarina Manager"]};
const LINA_WHATSAPP="5492994021395";
const state={uses:JSON.parse(localStorage.getItem("clubOcarinaUses")||"{}")};
const DEMO_MEMBER="0027";
const save=()=>localStorage.setItem("clubOcarinaUses",JSON.stringify(state.uses));
const used=id=>state.uses[id]||0;
const remaining=b=>b.id==="market"?Math.max(0,10-used(b.id)):b.id==="kiri"?Math.max(0,3-used(b.id)):Math.max(0,1-used(b.id));
function row(b,ally=false){const r=remaining(b),disabled=r===0;return `<div class="benefit-row"><div><b>${b.name}</b><p>${b.title} · ${b.detail}</p></div><span class="remaining">${disabled?"AGOTADO":r+" disponible"+(r===1?"":"s")}</span>${ally&&!disabled?`<button class="use-btn" data-use="${b.id}">Registrar uso</button>`:""}</div>`}
function bind(){document.querySelectorAll("[data-use]").forEach(x=>x.onclick=()=>{const b=DATA.benefits.find(v=>v.id===x.dataset.use);if(!b||remaining(b)<=0)return;state.uses[b.id]=used(b.id)+1;save();render();renderAlly()})}
function render(){document.getElementById("homeBenefits").innerHTML=DATA.benefits.map(b=>`<article class="benefit"><div class="icon">${b.icon}</div><strong>${b.name}</strong><p>${b.detail}</p><small>${b.limit}</small></article>`).join("");document.getElementById("memberBenefits").innerHTML=DATA.benefits.map(b=>row(b)).join("");document.getElementById("allyList").innerHTML=DATA.allies.map(x=>`<li>${x}</li>`).join("");bind()}
function renderAlly(){document.getElementById("allyBenefits").innerHTML=DATA.benefits.map(b=>row(b,true)).join("");bind()}
function show(id){document.querySelectorAll(".role").forEach(x=>x.classList.toggle("active",x.dataset.view===id));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===id));scrollTo({top:0,behavior:"smooth"});if(id==="ally")renderAlly()}
document.querySelectorAll(".role").forEach(x=>x.onclick=()=>show(x.dataset.view));document.querySelectorAll("[data-go]").forEach(x=>x.onclick=()=>show(x.dataset.go));
document.getElementById("validate").onclick=()=>{const v=document.getElementById("memberInput").value.trim().replace(/\D/g,""),box=document.getElementById("validationResult");if(v===DEMO_MEMBER){box.className="validation good";box.innerHTML="<b>● SOCIO ACTIVO</b><span>María Ejemplo · socio 0027</span><small>Seleccioná el beneficio.</small>";renderAlly()}else{box.className="validation bad";box.innerHTML="<b>● NO VALIDADO</b><span>No encontramos un socio activo.</span><small>También podés validar por nombre + número.</small>";document.getElementById("allyBenefits").innerHTML=""}};
document.getElementById("contactLina").onclick=()=>{const msg="Hola Lina, quiero consultar por Club Ocarina y conocer cómo asociarme o renovar mi membresía.";window.open("https://wa.me/"+LINA_WHATSAPP+"?text="+encodeURIComponent(msg),"_blank","noopener,noreferrer")};
document.getElementById("memberInput").addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("validate").click()});
render();renderAlly();
const CLUB_URL="https://eliasmartinezcultural-glitch.github.io/Club-Ocarina-/";
const CLUB_SHARE_TEXT="Club Ocarina · San Patricio del Chañar — Un lugar para encontrarnos.";
const setShareStatus=(m)=>{const x=document.getElementById("shareStatus");if(x)x.textContent=m;};
document.getElementById("shareWhatsApp")?.addEventListener("click",()=>{const u="https://wa.me/?text="+encodeURIComponent(CLUB_SHARE_TEXT+" "+CLUB_URL);window.open(u,"_blank","noopener,noreferrer");});
document.getElementById("copyClub")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(CLUB_URL);setShareStatus("Enlace copiado.");}catch(e){setShareStatus("No se pudo copiar automáticamente.");}});
document.getElementById("shareClub")?.addEventListener("click",async()=>{
  if(navigator.share){try{await navigator.share({title:"Club Ocarina · San Patricio del Chañar",text:CLUB_SHARE_TEXT,url:CLUB_URL});setShareStatus("Compartido.");}catch(e){if(e?.name!=="AbortError")setShareStatus("Podés usar WhatsApp o copiar el enlace.");}}
  else{try{await navigator.clipboard.writeText(CLUB_URL);setShareStatus("Enlace copiado. Ya podés pegarlo en tu red social.");}catch(e){setShareStatus("Usá WhatsApp o copiá el enlace desde el navegador.");}}
});
