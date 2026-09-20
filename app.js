const DATA={
 benefits:[
  {id:"market",icon:"✦",name:"Market Studio",title:"10% de descuento",detail:"Hasta 10 planchas de stickers por mes.",limit:"10 planchas/mes"},
  {id:"rh",icon:"§",name:"Estudio Jurídico RH",title:"1 orientación jurídica",detail:"Una orientación general de 20 minutos por mes.",limit:"1 uso/mes"},
  {id:"kiri",icon:"◉",name:"Kiri Fotografía",title:"3 fotos profesionales",detail:"Las tres pueden utilizarse juntas en una sesión.",limit:"3 fotos/mes"},
  {id:"manager",icon:"↗",name:"Ocarina Manager",title:"1 charla mensual",detail:"Individual o para un equipo, sobre emprendimiento y redes.",limit:"1 uso/mes"}
 ],
 allies:["Market Studio","Estudio Jurídico RH","Kiri Fotografía","Ocarina Manager"]
};
const state={uses:JSON.parse(localStorage.getItem("clubOcarinaUses")||"{}")};

function save(){localStorage.setItem("clubOcarinaUses",JSON.stringify(state.uses))}
function used(id){return state.uses[id]||0}
function remaining(b){if(b.id==="market")return Math.max(0,10-used(b.id));if(b.id==="kiri")return Math.max(0,3-used(b.id));return Math.max(0,1-used(b.id))}
function benefitHTML(b,ally=false){
 const r=remaining(b), disabled=r===0;
 return `<div class="benefit-row"><div><b>${b.name}</b><p>${b.title} · ${b.detail}</p></div><span class="remaining">${disabled?"AGOTADO":r+" disponible"+(r===1?"":"s")}</span>${ally&&!disabled?`<button class="use-btn" data-use="${b.id}">Registrar uso</button>`:""}</div>`;
}
function render(){
 document.getElementById("homeBenefits").innerHTML=DATA.benefits.map(b=>`<article class="benefit"><div class="icon">${b.icon}</div><strong>${b.name}</strong><p>${b.detail}</p><small>${b.limit}</small></article>`).join("");
 document.getElementById("memberBenefits").innerHTML=DATA.benefits.map(b=>benefitHTML(b)).join("");
 document.getElementById("allyList").innerHTML=DATA.allies.map(x=>`<li>${x}</li>`).join("");
 document.getElementById("adminStats").innerHTML=[
  ["27","Socios activos"],["3","En gracia"],["2","Pagos pendientes"],[Object.values(state.uses).reduce((a,b)=>a+b,0),"Usos registrados en este navegador"]
 ].map(x=>`<div class="stat"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("");
 document.querySelectorAll("[data-use]").forEach(btn=>btn.onclick=()=>{const id=btn.dataset.use;state.uses[id]=used(id)+1;save();renderAlly();render()});
}
function renderAlly(){document.getElementById("allyBenefits").innerHTML=DATA.benefits.map(b=>benefitHTML(b,true)).join("");document.querySelectorAll("[data-use]").forEach(btn=>btn.onclick=()=>{const id=btn.dataset.use;state.uses[id]=used(id)+1;save();render();renderAlly()})}
function show(id){document.querySelectorAll(".role").forEach(x=>x.classList.toggle("active",x.dataset.view===id));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===id));window.scrollTo({top:0,behavior:"smooth"});if(id==="ally")renderAlly()}
document.querySelectorAll(".role").forEach(b=>b.onclick=()=>show(b.dataset.view));
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));
document.getElementById("validate").onclick=()=>{
 const value=document.getElementById("memberInput").value.trim();
 const box=document.getElementById("validationResult");
 if(value==="0027"){box.className="validation good";box.innerHTML="<b>● SOCIO ACTIVO</b><span>María Ejemplo · socio 0027</span><small>Seleccioná el beneficio que vas a utilizar.</small>";renderAlly()}
 else{box.className="validation bad";box.innerHTML="<b>● NO VALIDADO</b><span>No encontramos un socio activo con ese número.</span><small>También podés validar por nombre + número.</small>";document.getElementById("allyBenefits").innerHTML=""}
};
document.getElementById("joinSubmit").onclick=()=>{
 const name=document.getElementById("joinName").value.trim(), msg=document.getElementById("joinMessage");
 if(!name){msg.textContent="Completá nombre y apellido para enviar la solicitud.";msg.classList.remove("hidden");return}
 msg.textContent="Solicitud preparada. En la infraestructura real, Lina recibirá esta alta en su bandeja de gestión.";msg.classList.remove("hidden");
 document.getElementById("joinName").value="";
};
document.querySelectorAll("[data-action]").forEach(b=>b.onclick=()=>{
 const map={new:"Nueva alta: en la próxima capa se abrirá el formulario operativo.",payment:"Registro de pago: se conectará con Mercado Pago y efectivo.",members:"Listado de socios: incluirá estado, vencimiento y usos.",allies:"Gestión de aliados: alta, baja, beneficios y condiciones.",report:"Resumen: ingresos, altas, bajas, usos y beneficios más utilizados."};
 document.getElementById("adminMessage").textContent=map[b.dataset.action];
});
render();renderAlly();