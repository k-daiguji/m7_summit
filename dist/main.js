(()=>{"use strict";class t{maxHp;atk;hp;constructor(t,e){this.maxHp=t,this.atk=e,this.hp=this.maxHp}getRatio=()=>{const t=this.hp/this.maxHp*100;return Math.max(0,Math.ceil(t))};attack=async t=>{t.hp=Math.max(0,t.hp-this.atk)}}class e extends t{constructor(){super(3776,200)}getName=()=>"Fuji";getPath=()=>"./dist/datasets/Fuji.png"}const a=[new e,new e,new e,new e];(new class{page;constructor(){this.page=document.createElement("div");const t=this.shuffle();[{x:"0",y:"0"},{x:"0",y:"50%"},{x:"50%",y:"0"},{x:"50%",y:"50%"}].forEach(((e,a)=>this.appendImage(t[a],e.y,e.x))),this.appendButton()}show=()=>document.body.appendChild(this.page);shuffle=()=>{const t=[];let e=4;for(;e;){const s=Math.floor(Math.random()*a.length);t.includes(s)||(t.push(s),e--)}return t.map((t=>a[t].getPath()))};appendImage=(t,e,a)=>{const s=document.createElement("img");s.src=t,s.className="title-image",s.style.bottom=e,s.style.left=a,this.page.appendChild(s)};appendButton=()=>{const t=document.createElement("button");t.className="fill next title-next",t.addEventListener("click",(()=>{document.body.removeChild(this.page)}));const e=document.createElement("p");e.className="title-text",e.textContent="M7 Summit",t.appendChild(e),this.page.appendChild(t)}}).show()})();