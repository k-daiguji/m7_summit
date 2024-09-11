(()=>{"use strict";class e{maxHp;atk;hp;constructor(e,t){this.maxHp=e,this.atk=t,this.hp=this.maxHp}getRatio=()=>{const e=this.hp/this.maxHp*100;return Math.max(0,Math.ceil(e))};attack=async e=>{e.hp=Math.max(0,e.hp-this.atk)}}class t extends e{constructor(){super(3776,200)}getName=()=>"Fuji";getPath=()=>"./dist/datasets/Fuji.png";getHeight=()=>"37%"}const a=[new class extends e{constructor(){super(8849,200)}getName=()=>"Everest";getPath=()=>"./dist/datasets/Everest.png";getHeight=()=>"88%"},new class extends e{constructor(){super(8611,180)}getName=()=>"K2";getPath=()=>"./dist/datasets/K2.png";getHeight=()=>"86%"},new class extends e{constructor(){super(5895,160)}getName=()=>"Kilimanjaro";getPath=()=>"./dist/datasets/Kilimanjaro.png";getHeight=()=>"58%"},new class extends e{constructor(){super(4478,150)}getName=()=>"Matterhorn";getPath=()=>"./dist/datasets/Matterhorn.png";getHeight=()=>"44%"},new t,new class extends e{constructor(){super(1247,200)}getName=()=>"Kilauea";getPath=()=>"./dist/datasets/Kilauea.png";getHeight=()=>"12%"},new t];class n{winner;page;constructor(e){this.winner=e,this.page=document.createElement("div"),this.appendIcon()}show=()=>document.body.appendChild(this.page);appendIcon=()=>{const e=document.createElement("button");e.className="fill next result-icon",e.addEventListener("click",(()=>{document.body.removeChild(this.page),(new c).show()}));const t=document.createElement("div");t.className="result-name",t.textContent=`WINNER: ${this.winner.getName()}`;const a=document.createElement("img");a.src=this.winner.getPath(),a.className="image result-image",e.appendChild(t),e.appendChild(a),this.page.appendChild(e)}}class s{p1;p2;keyMap=new Map([["Left",-1],["ArrowLeft",-1],["Right",1],["ArrowRight",1]]);page;now=99;p1Element=void 0;p2Element=void 0;constructor(e,t){this.p1=e,this.p2=t,this.page=document.createElement("div"),this.appendStage(),this.appendHeader(),this.appendCharacters()}show=()=>{document.body.appendChild(this.page),document.body.onkeydown=e=>this.keydown(e);const e=setInterval((()=>{this.now=this.now-1,this.page.querySelector(".fighting-timer").textContent=this.now.toString(),this.now<=0&&(clearInterval(e),document.body.removeChild(this.page),new n(this.p1.getRatio()>this.p2.getRatio()?this.p1:this.p2).show())}),1e3)};appendHeader=()=>{const e=document.createElement("div");e.className="fighting-header";const t=document.createElement("div");t.className="fighting-bar",t.appendChild(this.createHpBar(this.p1.getName())),t.appendChild(this.createTimer()),t.appendChild(this.createHpBar(this.p2.getName())),e.appendChild(t),this.page.appendChild(e)};createHpBar=e=>{const t=document.createElement("div");t.style.width="45%";const a=document.createElement("div");a.style.backgroundColor="red";const n=document.createElement("div");n.style.backgroundColor="yellow",n.style.height="50%";const s=document.createElement("div");return s.textContent=e,s.style.color="orange",s.style.height="50%",a.appendChild(n),t.appendChild(a),t.appendChild(s),t};createTimer=()=>{const e=document.createElement("p");return e.className="fighting-timer",e.textContent=this.now.toString(),e};appendStage=()=>{const e=document.createElement("img");e.className="fill image",e.style.position="absolute",e.src="./dist/datasets/NightSky.png",this.page.appendChild(e)};appendCharacters=()=>{this.p1Element=this.createCharacter(this.p1.getPath(),this.p1.getHeight(),"image fighting-p1"),this.page.appendChild(this.p1Element),this.p2Element=this.createCharacter(this.p2.getPath(),this.p2.getHeight(),"image fighting-p2"),this.page.appendChild(this.p2Element)};createCharacter=(e,t,a)=>{const n=document.createElement("img");return n.className=a,n.style.height=t,n.src=e,n};keydown=e=>{const t=Number(this.p1Element.style.left.replace(/[^0-9]/g,"")),a=this.keyMap.get(e.key)??0;this.p1Element.style.left=`${Math.min(20,Math.max(0,t+a))}%`}}class i{page;constructor(){this.page=document.createElement("div"),this.appendIcon()}show=()=>document.body.appendChild(this.page);appendIcon=()=>{const e=[];a.forEach(((t,a)=>{const n=document.createElement("button");n.className="next selection-icon",n.addEventListener("click",(()=>{n.disabled=!0,n.style.backgroundColor="red",e.push(t),2===e.length&&(document.body.removeChild(this.page),new s(e[0],e[1]).show())}));const i=document.createElement("div");i.className="selection-name",i.textContent=t.getName();const c=document.createElement("img");c.src=t.getPath(),c.className="image selection-image",n.appendChild(i),n.appendChild(c),this.page.appendChild(n)}))}}class c{page;constructor(){this.page=document.createElement("div");const e=this.shuffle();[{x:"0",y:"0"},{x:"0",y:"50%"},{x:"50%",y:"0"},{x:"50%",y:"50%"}].forEach(((t,a)=>this.appendImage(e[a],t.y,t.x))),this.appendButton()}show=()=>document.body.appendChild(this.page);shuffle=()=>{const e=[];let t=4;for(;t;){const n=Math.floor(Math.random()*a.length);e.includes(n)||(e.push(n),t--)}return e.map((e=>a[e].getPath()))};appendImage=(e,t,a)=>{const n=document.createElement("img");n.src=e,n.className="image title-image",n.style.bottom=t,n.style.left=a,this.page.appendChild(n)};appendButton=()=>{const e=document.createElement("button");e.className="fill next title-next",e.addEventListener("click",(()=>{document.body.removeChild(this.page),(new i).show()}));const t=document.createElement("p");t.className="title-text",t.textContent="M7 Summit",e.appendChild(t),this.page.appendChild(e)}}(new c).show()})();