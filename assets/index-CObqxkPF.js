var qu=Object.defineProperty;var $u=(i,t,e)=>t in i?qu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var R=(i,t,e)=>$u(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ja="dhsim.",Eh="/api/settings";let Il=0;const Th=typeof location<"u"&&["localhost","127.0.0.1","[::1]"].includes(location.hostname),Xu=typeof location<"u"&&new URLSearchParams(location.search).has("mute");function ie(i){try{return localStorage.getItem(i)}catch{return null}}const yr=new Map;function de(i,t){try{localStorage.setItem(i,t)}catch{}i.startsWith(Ja)&&yr.set(i,t),Ah()}function Yu(){const i={};try{for(let t=0;t<localStorage.length;t++){const e=localStorage.key(t);e.startsWith(Ja)&&(i[e]=localStorage.getItem(e))}}catch{}return i}function Ah(){Xu||!Th||(clearTimeout(Il),Il=window.setTimeout(()=>{const i=Object.fromEntries(yr);yr.clear(),fetch(Eh,{method:"POST",headers:{"Content-Type":"application/json","X-Merge":"1"},body:JSON.stringify(i)}).catch(()=>{})},300))}async function Ku(){if(Th)try{const i=await fetch(Eh),t=i.ok?await i.json():{},e=Object.keys(t).filter(n=>n.startsWith(Ja));if(e.length===0){for(const[n,s]of Object.entries(Yu()))yr.set(n,s);Ah();return}for(const n of e)localStorage.setItem(n,t[n])}catch{}}const Ul="/assets/osrs/sounds/";let Ve=null,kn=null;const Rh=new Map;let Nl={};const Ch=typeof location<"u"&&new URLSearchParams(location.search).has("mute");function Je(){if(Ch)return 0;const i=Number(ie("dhsim.volume")??50);return Number.isFinite(i)?Math.min(100,Math.max(0,i)):50}function Ph(i){Ch||(de("dhsim.volume",String(Math.min(100,Math.max(0,Math.round(i/10)*10)))),kn&&(kn.gain.value=Je()/100))}async function ju(){try{Nl=await(await fetch(Ul+"manifest.json")).json()}catch{return}Ve=new AudioContext,kn=Ve.createGain(),kn.gain.value=Je()/100,kn.connect(Ve.destination);const i=()=>{Ve==null||Ve.resume()};window.addEventListener("pointerdown",i),window.addEventListener("keydown",i),await Promise.all(Object.entries(Nl).map(async([t,e])=>{try{const n=await(await fetch(Ul+e)).arrayBuffer();Rh.set(t,await Ve.decodeAudioData(n))}catch{}}))}function on(i,t=1){const e=Rh.get(i);if(!Ve||!kn||!e||Je()===0)return;const n=Ve.createBufferSource();n.buffer=e;const s=Ve.createGain();s.gain.value=t,n.connect(s).connect(kn),n.start()}function Zu(i){if(!Ve||!kn||Je()===0)return;const t=Ve.currentTime,e=Ve.createOscillator();e.type="square",e.frequency.value=i?1400:950;const n=Ve.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.12,t+.004),n.gain.exponentialRampToValueAtTime(1e-4,t+.05),e.connect(n).connect(kn),e.start(t),e.stop(t+.06)}const Ie=(i,t,e,n=0)=>({att:i,def:t,str:e,prayer:n}),Ju=Ie([0,0,0,0,0],[0,0,0,0,0],0),jt={dh_helm:{id:"dh_helm",name:"Dharok's helm",kind:"equip",action:"Wear",slot:"head",bonuses:Ie([0,0,0,-3,-1],[45,48,44,-1,51],0),examine:"Dharok the Wretched's helm."},dh_body:{id:"dh_body",name:"Dharok's platebody",kind:"equip",action:"Wear",slot:"body",bonuses:Ie([0,0,0,-30,-10],[122,120,107,-6,132],0),examine:"Dharok the Wretched's platebody armour."},dh_legs:{id:"dh_legs",name:"Dharok's platelegs",kind:"equip",action:"Wear",slot:"legs",bonuses:Ie([0,0,0,-21,-11],[85,82,83,-4,92],0),examine:"Dharok the Wretched's plate leg armour."},dh_axe:{id:"dh_axe",name:"Dharok's greataxe",kind:"equip",action:"Wield",slot:"weapon",twoHanded:!0,speed:7,bonuses:Ie([-4,103,95,-4,0],[0,0,0,0,-1],105),examine:"Dharok the Wretched's greataxe."},rancour:{id:"rancour",name:"Amulet of rancour",kind:"equip",action:"Wear",slot:"neck",bonuses:Ie([25,25,25,-6,-8],[0,0,0,0,0],12,2),examine:"A very powerful zenyte amulet, infused with araxyte venom."},tentacle:{id:"tentacle",name:"Abyssal tentacle",kind:"equip",action:"Wield",slot:"weapon",speed:4,spec:!0,bonuses:Ie([0,90,0,0,0],[0,0,0,0,0],86),examine:"A weapon from the Abyss, embedded in a slimy tentacle."},avernic:{id:"avernic",name:"Avernic defender",kind:"equip",action:"Wield",slot:"shield",bonuses:Ie([30,29,28,-5,-4],[30,29,28,-5,-4],8),examine:"A defensive weapon."},infernal:{id:"infernal",name:"Infernal cape",kind:"equip",action:"Wear",slot:"cape",bonuses:Ie([4,4,4,1,1],[12,12,12,12,12],8,2),examine:"Whose idea was it to have a cape made of lava anyway?"},treads:{id:"treads",name:"Avernic treads (max)",kind:"equip",action:"Wear",slot:"feet",bonuses:Ie([5,5,5,11,15],[21,25,25,10,10],6),examine:"A pair of boots with the power of Primordial, Pegasian and Eternal boots."},ferocious:{id:"ferocious",name:"Ferocious gloves",kind:"equip",action:"Wear",slot:"hands",bonuses:Ie([16,16,16,-16,-16],[0,0,0,0,0],14),examine:"A pair of very very nice gloves."},recoil:{id:"recoil",name:"Ring of recoil",kind:"equip",action:"Wear",slot:"ring",bonuses:Ju,examine:"An enchanted ring."},ultor:{id:"ultor",name:"Ultor ring",kind:"equip",action:"Wear",slot:"ring",bonuses:Ie([0,0,0,0,0],[0,0,0,0,0],12),examine:"An occult ring that grants immense physical power."},voidwaker:{id:"voidwaker",name:"Voidwaker",kind:"equip",action:"Wield",slot:"weapon",speed:4,spec:!0,bonuses:Ie([70,80,-2,5,0],[0,1,0,2,0],80),examine:"A truly fearsome weapon."},ags:{id:"ags",name:"Armadyl godsword",kind:"equip",action:"Wield",slot:"weapon",twoHanded:!0,speed:6,spec:!0,bonuses:Ie([0,132,80,0,0],[0,0,0,0,0],132,8),examine:"A beautiful, heavy sword."},gmaul:{id:"gmaul",name:"Granite maul",kind:"equip",action:"Wield",slot:"weapon",twoHanded:!0,speed:7,spec:!0,bonuses:Ie([0,0,81,0,0],[0,0,0,0,0],79),examine:"Simplicity is the best weapon."},angler:{id:"angler",name:"Anglerfish",kind:"food",action:"Eat",examine:"I hope this tastes better than it looks."},karambwan:{id:"karambwan",name:"Cooked karambwan",kind:"combo",action:"Eat",examine:"Cooked octopus. It looks very nutritious."},brew:{id:"brew",name:"Saradomin brew",kind:"potion",action:"Drink",examine:"A potion of Saradomin brew."},restore:{id:"restore",name:"Super restore",kind:"potion",action:"Drink",examine:"A potion of super restore."},combat:{id:"combat",name:"Super combat potion",kind:"potion",action:"Drink",examine:"A potion of super combat."},sanfew:{id:"sanfew",name:"Sanfew serum",kind:"potion",action:"Drink",examine:"A cure-all serum."},orb:{id:"orb",name:"Locator orb",kind:"orb",action:"Feel",examine:"A glass orb with a dragonstone in the centre."},tab:{id:"tab",name:"Teleport to house",kind:"other",action:"Break",stackable:!0,examine:"A teleport to one's own house."},venge_sack:{id:"venge_sack",name:"Blighted vengeance sack",kind:"other",action:"Check",stackable:!0,examine:"A sack of runes for casting Vengeance."}};function xn(i){const t=jt[i.id];return i.doses?`${t.name}(${i.doses})`:t.name}const me=(i,t,e,n)=>({name:i,icon:t,type:e,stance:n}),Qa={dh_axe:{category:"Axe",styles:[me("Chop","axe-chop","slash","accurate"),me("Hack","axe-hack","slash","aggressive"),me("Smash","axe-smash","crush","aggressive"),me("Block","axe-block","slash","defensive")]},tentacle:{category:"Whip",styles:[me("Flick","whip-flick","slash","accurate"),me("Lash","whip-lash","slash","controlled"),me("Deflect","whip-deflect","slash","defensive")]},gmaul:{category:"Blunt",styles:[me("Pound","maul-pound","crush","accurate"),me("Pummel","maul-pummel","crush","aggressive"),me("Block","maul-block","crush","defensive")]},voidwaker:{category:"Slash Sword",styles:[me("Chop","sword-chop","slash","accurate"),me("Slash","sword-slash","slash","aggressive"),me("Lunge","sword-lunge","stab","controlled"),me("Block","sword-block","slash","defensive")]},ags:{category:"2h Sword",styles:[me("Chop","sword-chop","slash","accurate"),me("Slash","sword-slash","slash","aggressive"),me("Smash","maul-pound","crush","aggressive"),me("Block","sword-block","slash","defensive")]},none:{category:"Unarmed",styles:[me("Punch","sword-stab","crush","accurate"),me("Kick","sword-chop","crush","aggressive"),me("Block","sword-block","crush","defensive")]}};function Ne(i){var e;const t=(e=i.equip.weapon)==null?void 0:e.id;return t&&Qa[t]?t:"none"}function Dn(i){const t=Qa[Ne(i)],e=Math.min(i.styleIndex[Ne(i)]??1,t.styles.length-1);return t.styles[e]}const Qu={stab:0,slash:1,crush:2};function Lh(i,t,e){var s;let n=0;for(const r of Object.values(i.equip))r&&(n+=((s=jt[r.id].bonuses)==null?void 0:s[t][Qu[e]])??0);return n}function td(i){var e;let t=0;for(const n of Object.values(i.equip))n&&(t+=((e=jt[n.id].bonuses)==null?void 0:e.str)??0);return t}const tl={att:1.2,str:1.23,def:1.25},el=(i,t)=>i==="controlled"?1:i==="accurate"&&t==="att"||i==="aggressive"&&t==="str"||i==="defensive"&&t==="def"?3:0;function nl(i){var e,n,s,r;const t=i.equip;return((e=t.head)==null?void 0:e.id)==="dh_helm"&&((n=t.body)==null?void 0:n.id)==="dh_body"&&((s=t.legs)==null?void 0:s.id)==="dh_legs"&&((r=t.weapon)==null?void 0:r.id)==="dh_axe"}function il(i){const t=i.base.hitpoints;return 1+Math.max(0,t-Math.max(0,i.level.hitpoints))/100*(t/100)}function bs(i){const t=i.prayers.has("piety")?tl.str:1,e=Math.floor(i.level.strength*t)+el(Dn(i).stance,"str")+8;return Math.floor((e*(td(i)+64)+320)/640)}function Fr(i){const t=bs(i);return nl(i)?Math.floor(t*il(i)):t}function sl(i,t=1){const e=Dn(i),n=i.prayers.has("piety")?tl.att:1,s=Math.floor(i.level.attack*n)+el(e.stance,"att")+8;return Math.floor(s*(Lh(i,"att",e.type)+64)*t)}function rl(i,t){const e=i.prayers.has("piety")?tl.def:1;return(Math.floor(i.level.defence*e)+el(Dn(i).stance,"def")+8)*(Lh(i,"def",t)+64)}function ol(i,t){return i>t?1-(t+2)/(2*(i+1)):i/(2*(t+1))}function Mr(i){var e;const t=(e=i.equip.weapon)==null?void 0:e.id;return t&&jt[t].speed||4}const br={accuracy:2,defence:"slash",maxHit:i=>Math.floor(Math.floor(i*1.1)*1.25)};function Kr(i,t,e=Math.random,n=1,s){const r=Dn(i),o=ol(sl(i,n),rl(t,(s==null?void 0:s.defence)??r.type)),a=s!=null&&s.maxHit?s.maxHit(bs(i)):bs(i),l=e()<o;let c=0,h=0;return l&&(h=Math.floor(e()*(a+1)),c=Math.max(1,h),nl(i)&&(c=Math.floor(c*il(i)))),{hit:l,damage:c,max:Fr(i),chance:o,maxed:l&&h===a&&a>0}}const Qe=15;function ed(i){return i.x>=0&&i.y>=0&&i.x<Qe&&i.y<Qe}let kh=new Set;const Dh=i=>i.x*Qe+i.y;function nd(i){kh=new Set(i.map(Dh))}function _s(i){return ed(i)&&!kh.has(Dh(i))}function id(i){const t=r=>Math.min(Qe-1,Math.max(0,Math.round(r))),e={x:t(i.x),y:t(i.y)};if(_s(e))return e;let n=e,s=1/0;for(let r=0;r<Qe;r++)for(let o=0;o<Qe;o++){const a=(r-e.x)**2+(o-e.y)**2;a<s&&_s({x:r,y:o})&&(n={x:r,y:o},s=a)}return n}const Fl=(i,t)=>i.x===t.x&&i.y===t.y;function _e(i,t){return Math.abs(i.x-t.x)+Math.abs(i.y-t.y)===1}const sd=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:1},{x:1,y:1}];function cr(i,t){if(t(i))return[];const e=r=>r.x*Qe+r.y,n=new Map([[e(i),null]]),s=[i];for(;s.length;){const r=s.shift();for(const o of sd){const a={x:r.x+o.x,y:r.y+o.y};if(!(!_s(a)||n.has(e(a)))&&!(o.x&&o.y&&(!_s({x:r.x+o.x,y:r.y})||!_s({x:r.x,y:r.y+o.y})))){if(n.set(e(a),r),t(a)){const l=[a];for(let c=r;n.get(e(c));c=n.get(e(c)))l.unshift(c);return l}s.push(a)}}}return null}function rd(i,t){const e=cr(i,n=>_e(n,t));return e!=null&&e.length?e[e.length-1]:i}const od=["easy","medium","hard","elite"],Sr=[{id:"Voidwaker into insta maul",label:"Voidwaker → insta maul",desc:"It specs you with the Voidwaker, with an insta maul right behind it.",tip:"Practise: eating the moment the Voidwaker hits, so the maul doesn’t catch you low."},{id:"insta maul into Voidwaker",label:"Insta maul → Voidwaker",desc:"A maul spec out of nowhere, then the Voidwaker the next tick.",tip:"Practise: reacting to the maul hitsplat before the Voidwaker lands."},{id:"tentacle into double maul",label:"Whip → double maul",desc:"A normal whip hit, then two maul specs on top.",tip:"Practise: not sitting low after a whip hit, and eating through the mauls."},{id:"AGS into insta maul",label:"AGS → insta maul",desc:"An Armadyl godsword spec, with an insta maul right behind it.",tip:"Practise: eating the moment the AGS lands, before the maul follows."}],Is=i=>({fakeAxe:i,axeStandoff:i,floorClick:i,potTrick:i,potTrickCombo:i,reactiveVenge:i,vengeAxeStack:i,lowHpAxe:i,campLow:i,orbDown:i,orbAfterCombo:i,maulAfterAxe:i,punishEat:i,pidSwapPunish:i,specSaving:i,hover:i,fakeVoidwaker:i,armourOff:i,campFloor:i,vengeStackBait:i,hailMary:i}),Us=i=>({"tentacle into double maul":i,"Voidwaker into insta maul":i,"insta maul into Voidwaker":i,"single maul":i,Voidwaker:i,"Voidwaker timed with Vengeance":i,"AGS into insta maul":i,"insta maul into AGS":i,AGS:i}),un={easy:{level:"easy",name:"Easy",blurb:"New to DH: slow reactions, sloppy eats, rarely chances you.",skill:-.35,caution:-.15,aggression:-.25,risk:-.1,vengeSense:-.3,koBar:-.04,koFocus:.6,play:{react:[0,.2,.4],cleanEat:.35,idle:.16,spot:.25,pid:0,read:0,upkeep:.2,eatLine:1,aware:0,koSlow:4,newbie:1},moves:{...Is(0),fakeAxe:.25,axeStandoff:.3,vengeAxeStack:0,lowHpAxe:.25,campLow:0,reactiveVenge:.3,maulAfterAxe:.2,hover:.5,fakeVoidwaker:.3},combos:{...Us(1),"tentacle into double maul":.08,"Voidwaker into insta maul":0,"insta maul into Voidwaker":0,"Voidwaker timed with Vengeance":0,"AGS into insta maul":0,"insta maul into AGS":0}},medium:{level:"medium",name:"Medium",blurb:"Decent DHer: some mind games, misses windows, beatable by most.",skill:-.24,caution:-.08,aggression:-.1,risk:0,vengeSense:-.2,koBar:.08,koFocus:.45,play:{react:[.02,.4,.42],cleanEat:.45,idle:.1,spot:.3,pid:.2,read:0,upkeep:.4,eatLine:-3,aware:.3,koSlow:2,whim:.06,sloppy:.6},moves:{...Is(.45),campLow:.12,lowHpAxe:.3,potTrick:.25,potTrickCombo:.15,punishEat:.2,pidSwapPunish:.2,specSaving:.4,fakeAxe:.5,floorClick:.3,armourOff:0,campFloor:.3,vengeStackBait:0,hailMary:0},combos:{...Us(1),"tentacle into double maul":0,"Voidwaker into insta maul":.35,"insta maul into Voidwaker":0,"AGS into insta maul":.35,"insta maul into AGS":0}},hard:{level:"hard",name:"Hard",blurb:"Solid DHer: reads you, mind games, real KO attempts.",skill:0,caution:0,aggression:0,risk:0,vengeSense:0,koBar:0,koFocus:1,play:{react:[.42,.45,.11],cleanEat:.8,idle:.04,spot:.75,pid:.6,read:.45,upkeep:1,eatLine:-2,aware:.75,koSlow:0},moves:{...Is(1),armourOff:.3,vengeStackBait:.15,hailMary:.5},combos:Us(1)},elite:{level:"elite",name:"Elite",blurb:"Risk fighter: eats on the read, plays its PID, Venge stacks. Still human.",skill:.12,caution:.05,aggression:.15,risk:.05,vengeSense:.15,koBar:-.06,koFocus:1.25,play:{react:[.68,.28,.04],cleanEat:.95,idle:.015,spot:.92,pid:1,read:.7,upkeep:1.6,eatLine:2,aware:1,koSlow:0},moves:{...Is(1.25),hover:1.3,punishEat:1.4,pidSwapPunish:1.4,campFloor:1.4,armourOff:1,vengeStackBait:1},combos:Us(1)}},ad=10,Ol=30,ld=50,Cn=99,Bl={angler:22,brew:16,karambwan:18,pot:0},cd={1:[{items:["angler"],w:.42},{items:["karambwan"],w:.25},{items:["brew"],w:.18},{items:["pot"],w:0}],2:[{items:["angler","karambwan"],w:.42},{items:["angler","brew"],w:.25},{items:["brew","karambwan"],w:.18},{items:["angler","pot"],w:.08},{items:["pot","karambwan"],w:.07}],3:[{items:["angler","brew","karambwan"],w:.85},{items:["angler","pot","karambwan"],w:.15}]};function hd(i,t){for(const e of t)e==="brew"?i=Math.min(Cn+16,i+Bl.brew):e!=="pot"&&(i=Math.max(i,Math.min(Cn,i+Bl[e])));return i}class ud{constructor(t,e){R(this,"belief",new Map([[Cn,1]]));R(this,"spec",100);R(this,"lastConsume",-100);R(this,"consumed",0);R(this,"vengeUp",!1);R(this,"fooledAt",-100);R(this,"trickiness",0);R(this,"barUntil",-1);R(this,"specTimer",0);R(this,"updatedAt",-1);this.rng=t,this.skill=e}reset(){this.belief=new Map([[Cn,1]]),this.spec=100,this.lastConsume=-100,this.consumed=0,this.vengeUp=!1,this.fooledAt=-100,this.trickiness=0,this.barUntil=-1,this.specTimer=0,this.updatedAt=-1}assume(t){this.belief=new Map([[t,1]])}get hp(){let t=Cn,e=-1;for(const[n,s]of this.belief)s>e&&(t=n,e=s);return t}likelyMax(){let t=0;for(const[e,n]of[...this.belief].sort((s,r)=>r[0]-s[0]))if(t+=n,t>=.05)return e;return this.hp}killChance(t,e=0){let n=0;for(const[s,r]of this.belief){let o=0;for(let a=Math.max(0,s-e);a<t.length;a++)o+=t[a];n+=r*o}return n}update(t,e,n){const s=t.tick;if(s===this.updatedAt)return;this.updatedAt=s;let r=0;for(const o of t.seen)o.kind==="splat"&&o.on===n.id?(this.shift(-o.damage),this.barUntil=s+ad):o.kind==="consume"&&o.who===n.id?r++:o.kind==="attack"&&o.who===n.id&&o.special?this.spec=Math.max(0,this.spec-ld):o.kind==="cast"&&o.who===n.id?this.vengeUp=!0:o.kind==="splat"&&o.on===e.id&&o.hit==="venge"&&(this.vengeUp=!1);r&&(this.eaten(Math.min(3,r),s-this.lastConsume<=2),this.lastConsume=s,this.consumed=r),++this.specTimer>=50&&(this.specTimer=0,this.spec=Math.min(100,this.spec+10)),s<=this.barUntil&&this.rng()<.35+.5*this.skill()&&this.readBar(n,s),this.trickiness*=.995}ateWithin(t,e){return t.tick-this.lastConsume<=e}shift(t){const e=new Map;for(const[n,s]of this.belief){const r=Math.max(1,Math.min(Cn+16,n+t));e.set(r,(e.get(r)??0)+s)}this.belief=e}eaten(t,e){const n=new Map;for(const[s,r]of this.belief){const o=cd[t].map(l=>{let c=l.w;return l.items.includes("pot")&&(c+=s>75?.35:.06+.25*this.trickiness),e&&l.items.includes("angler")&&(c*=.2),{items:l.items,w:c}}),a=o.reduce((l,c)=>l+c.w,0);for(const l of o){const c=hd(s,l.items);n.set(c,(n.get(c)??0)+r*l.w/a)}}this.belief=this.prune(n)}readBar(t,e){const n=c=>Math.round(Math.min(c,Cn)/Cn*Ol),s=n(t.level.hitpoints)+Math.round((this.rng()-.5)*2*(1-this.skill())),r=.6+1.2*(1-this.skill()),o=new Map;let a=0,l=0;for(const[c,h]of this.belief){const u=Math.exp(-((n(c)-s)**2)/(2*r*r));u>.5&&(l+=h);const d=h*u;d>0&&(o.set(c,d),a+=d)}if(a<1e-9||l<.15){e-this.lastConsume<=4&&(this.fooledAt=e,this.trickiness=Math.min(1,this.trickiness+.5));const c=Math.round(s/Ol*Cn);this.belief=new Map([[c,.5],[c-1,.25],[c+1,.25]]);return}for(const[c,h]of o)o.set(c,h/a);this.belief=this.prune(o)}prune(t){const e=[...t].filter(([,s])=>s>=.004).sort((s,r)=>r[1]-s[1]).slice(0,40),n=e.reduce((s,[,r])=>s+r,0)||1;return new Map(e.map(([s,r])=>[s,r/n]))}}const dd=["attack","strength","defence","hitpoints","ranged","prayer","magic"],ue=(i,t={})=>({id:i,...t});function Ih(){const i=()=>ue("angler"),t=()=>ue("karambwan"),e=()=>ue("restore",{doses:4}),n=()=>ue("brew",{doses:4});return[e(),i(),i(),i(),e(),i(),t(),i(),e(),n(),t(),i(),i(),t(),n(),i(),ue("combat",{doses:4}),ue("orb"),i(),i(),ue("gmaul"),ue("dh_axe"),i(),i(),ue("ultor"),ue("voidwaker"),ue("tab",{qty:10}),ue("venge_sack",{qty:40})]}function Uh(){return{head:ue("dh_helm"),cape:ue("infernal"),neck:ue("rancour"),weapon:ue("tentacle"),body:ue("dh_body"),shield:ue("avernic"),legs:ue("dh_legs"),hands:ue("ferocious"),feet:ue("treads"),ring:ue("recoil")}}function xi(i,t="you"){const e=Object.fromEntries(dd.map(n=>[n,99]));return{id:t,name:i,combatLevel:126,base:e,level:{...e},inv:Ih(),equip:Uh(),timers:{attack:0,food:0,combo:0,potion:0,venge:0},drankThisTick:!1,spec:100,specRegen:0,specArmed:!1,prayers:new Set,prayerDrain:0,vengeActive:!1,recoilCharges:40,statRegen:0,styleIndex:{},autoRetaliate:!1,orbUsed:!1,poison:0,poisonTimer:0,poisonImmune:0,teleporting:0,specTeleportLock:0,pos:{x:7,y:7},dest:null,running:!0,moved:0,steps:[],frozenUntil:-1,freezeImmuneUntil:-1,autoFollow:!0,lastRoll:0,targetId:null,lastTarget:null,lastAttackTick:-100,incoming:[],dead:!1,maulReady:0,maulWindowUntil:-1}}function Nh(i){var e;let t=0;for(const n of Object.values(i.equip))n&&(t+=((e=jt[n.id].bonuses)==null?void 0:e.prayer)??0);return t}function fd(i){var e;let t=0;for(const n of Object.values(i.equip))n&&(t+=((e=jt[n.id].bonuses)==null?void 0:e.str)??0);return t}const Fh={msg(){},anim(){},splat(){}},Oh={dh_axe:"equip_weapon",tentacle:"equip_whip",gmaul:"equip_blunt",voidwaker:"equip_sword",ags:"equip_sword"},Bh={ring:"equip_fun",neck:"equip_fun",cape:"equip_fun",hands:"equip_hands",feet:"equip_feet",head:"equip_helmet",body:"equip_armour",legs:"equip_metal_legs",shield:"equip_fun"},pd={piety:24,smite:18},md=50,hr=3,gd=3,vd=2,_d=3,xd=-4;function Hl(i,t=Fh){const e=i.timers;if(e.attack=Math.max(xd,e.attack-1),e.food=Math.max(0,e.food-1),e.combo=Math.max(0,e.combo-1),e.potion=Math.max(0,e.potion-1),e.venge=Math.max(0,e.venge-1),i.specTeleportLock=Math.max(0,i.specTeleportLock-1),i.poisonImmune=Math.max(0,i.poisonImmune-1),i.drankThisTick=!1,i.orbUsed=!1,++i.specRegen>=50&&(i.specRegen=0,i.spec<100&&(i.spec=Math.min(100,i.spec+10))),yd(i,t),++i.statRegen>=100){i.statRegen=0;for(const n of["attack","strength","defence","ranged","magic","hitpoints"])i.level[n]>i.base[n]?i.level[n]--:i.level[n]<i.base[n]&&i.level[n]++}}function yd(i,t){var n;if(i.prayers.size===0){i.prayerDrain=0;return}for(const s of i.prayers)i.prayerDrain+=pd[s];const e=60+2*Nh(i);for(;i.prayerDrain>e&&i.level.prayer>0;)i.level.prayer--,i.prayerDrain-=e;i.level.prayer<=0&&(i.level.prayer=0,i.prayers.clear(),i.prayerDrain=0,t.msg("You have run out of prayer points, you can recharge at an altar."),(n=t.sound)==null||n.call(t,"prayer_drained"))}function Md(i,t,e=Fh){switch(t.type){case"item":return bd(i,t.slot,e);case"unequip":return Ld(i,t.slot,e);case"prayer":return kd(i,t.id,e);case"cast":return Dd(i,e);case"spec":return Id(i,e);case"attack":return i.dead?!1:(i.targetId=t.target,!0);case"walk":return t.keepTarget||(i.targetId=null),i.dest=t.to?id(t.to):null,!0;case"toggleRun":return i.running=!i.running,!0}}function bd(i,t,e){const n=i.inv[t];if(!n)return!1;switch(jt[n.id].kind){case"equip":return Pd(i,t,e);case"food":return Sd(i,t,e);case"combo":return wd(i,t,e);case"potion":return Ed(i,t,e);case"orb":return Cd(i,e);case"other":return n.id==="tab"?Rd(i,t,e):(e.msg("Your sack holds plenty of Vengeance casts."),!0)}}function Ko(i){return Math.floor(i/10)+2*Math.floor(i/25)+5*Math.floor(i/93)+2}function es(i){i.targetId=null}function al(i,t,e){i.level.hitpoints<e&&(i.level.hitpoints=Math.min(e,i.level.hitpoints+t))}function Hh(i,t){i.timers.attack+=t}function Sd(i,t,e){return i.timers.food>0||i.drankThisTick?!1:(al(i,Ko(i.base.hitpoints),i.base.hitpoints),i.timers.food=hr,Hh(i,gd),i.inv[t]=null,es(i),e.msg("You eat the anglerfish."),e.msg("It heals some health."),e.anim("eat"),!0)}function wd(i,t,e){return i.timers.combo>0?!1:(al(i,18,i.base.hitpoints),i.timers.combo=hr,i.timers.food=Math.max(i.timers.food,hr),i.timers.potion=Math.max(i.timers.potion,hr),Hh(i,vd),i.inv[t]=null,es(i),e.msg("You eat the Karambwan."),e.msg("It heals some health."),e.anim("eat"),!0)}function Ed(i,t,e){const n=i.inv[t];if(i.timers.potion>0)return!1;const s=i.level,r=i.base;if(n.id==="brew"){const a=Math.floor(r.hitpoints*.15)+2;al(i,a,r.hitpoints+a);const l=Math.floor(r.defence*.2)+2;s.defence=Math.max(s.defence,Math.min(s.defence+l,r.defence+l));for(const c of["attack","strength","ranged","magic"])s[c]=Math.max(0,s[c]-(Math.floor(s[c]*.1)+2))}else if(n.id==="restore")for(const a of["attack","strength","defence","ranged","magic","prayer"])s[a]<r[a]&&(s[a]=Math.min(r[a],s[a]+Math.floor(r[a]*.25)+8));else if(n.id==="sanfew"){for(const a of["attack","strength","defence","ranged","magic","prayer"])s[a]<r[a]&&(s[a]=Math.min(r[a],s[a]+Math.floor(r[a]*.3)+4));i.poison>0&&e.msg("You have been cured of poison."),i.poison=0,i.poisonImmune=600}else if(n.id==="combat")for(const a of["attack","strength","defence"]){const l=Math.floor(r[a]*.15)+5;s[a]=Math.max(s[a],Math.min(s[a]+l,r[a]+l))}i.timers.potion=_d,i.drankThisTick=!0,es(i),n.doses=(n.doses??1)-1;const o={brew:"Saradomin brew",restore:"super restore potion",combat:"super combat potion",sanfew:"Sanfew serum"};return e.msg(n.id==="brew"?"You drink some of the foul liquid.":`You drink some of your ${o[n.id]}.`),n.doses<=0?(i.inv[t]=null,e.msg("You have finished your potion.")):e.msg(`You have ${n.doses} dose${n.doses===1?"":"s"} of potion left.`),e.anim("drink"),!0}function Td(i){const t=i.inv.filter(n=>n&&(n.id==="angler"||n.id==="karambwan")).length,e=i.inv.some(n=>(n==null?void 0:n.id)==="brew");return t>=2||t>=1&&e}const zl=5,Ad=3;function Rd(i,t,e){if(i.teleporting>0)return!1;if(i.specTeleportLock>0)return e.msg("You can't teleport so soon after using a special attack."),!1;i.teleporting=Ad+1,es(i);const n=i.inv[t];return n.qty=(n.qty??1)-1,n.qty<=0&&(i.inv[t]=null),e.msg("You break the teleport tablet."),e.anim("tab"),!0}function Cd(i,t){const e=i.level.hitpoints;return e<=1||i.orbUsed?!1:(i.orbUsed=!0,es(i),i.level.hitpoints=Math.max(1,e-10),t.splat(e-i.level.hitpoints),t.anim("orb"),t.msg("The locator orb is unstable and hurts you as you use it."),!0)}function zh(i){return i.inv.findIndex(t=>t===null)}function Pd(i,t,e){var c;const n=i.inv[t],s=jt[n.id],r=s.slot,o=i.equip[r]??null;let a=null;r==="weapon"&&s.twoHanded&&i.equip.shield&&(a="shield"),r==="shield"&&i.equip.weapon&&jt[i.equip.weapon.id].twoHanded&&(a="weapon");const l=a?i.equip[a]:null;if(o&&l){const h=zh(i);if(h<0)return e.msg("You don't have enough free inventory space to do that."),!1;i.inv[h]=l,i.inv[t]=o}else i.inv[t]=o??l;return a&&delete i.equip[a],i.equip[r]=n,es(i),(r==="weapon"||a==="weapon")&&(i.specArmed=!1),(c=e.sound)==null||c.call(e,r==="weapon"?Oh[n.id]??"equip_weapon":Bh[r]??"equip_armour"),!0}function Ld(i,t,e){var r;const n=i.equip[t];if(!n)return!1;const s=zh(i);return s<0?(e.msg("You don't have enough free inventory space to do that."),!1):(i.inv[s]=n,delete i.equip[t],t==="weapon"&&(i.specArmed=!1),(r=e.sound)==null||r.call(e,t==="weapon"?Oh[n.id]??"equip_weapon":Bh[t]??"equip_armour"),!0)}function kd(i,t,e){var n,s;return i.prayers.has(t)?(i.prayers.delete(t),(n=e.sound)==null||n.call(e,"prayer_off"),!0):i.level.prayer<=0?(e.msg("You need to recharge your Prayer at an altar."),!1):(i.prayers.add(t),(s=e.sound)==null||s.call(e,t==="smite"?"smite_on":"prayer_on"),!0)}function Dd(i,t){if(i.level.magic<94)return t.msg("You need a Magic level of 94 to cast this spell."),!1;if(i.timers.venge>0)return t.msg("You can only cast vengeance spells every 30 seconds."),!1;const e=i.inv.findIndex(s=>(s==null?void 0:s.id)==="venge_sack");return(e>=0?i.inv[e]:null)?(i.vengeActive=!0,i.timers.venge=md,t.anim("cast"),!0):(t.msg("You do not have enough runes to cast this spell."),!1)}function Id(i,t){const e=i.equip.weapon;return!e||!jt[e.id].spec?(t.msg("This weapon has no special attack."),!1):(i.specArmed=!i.specArmed,!0)}function Hi(i,t,e,n){const s={...i.equip,weapon:{id:e}};jt[e].twoHanded&&delete s.shield;const r={...i,equip:s},o=n==="ags",a=ol(sl(r,o?br.accuracy:1),rl(t,o?"slash":Dn(r).type)),l=o?br.maxHit(bs(r)):bs(r);return{c:Math.round(a*1e3)/1e3,b:l,m:nl(r)?il(r):1}}const wr=new Map;function dn(i){const t=`${i.c}|${i.b}|${i.m}`,e=wr.get(t);if(e)return e;const n=Math.floor(Math.max(1,i.b)*i.m),s=new Array(n+1).fill(0);s[0]=1-i.c;for(let r=0;r<=i.b;r++)s[Math.floor(Math.max(1,r)*i.m)]+=i.c/(i.b+1);return wr.set(t,s),s}function Vh(i,t){const e=`vw|${i}|${t}`,n=wr.get(e);if(n)return n;const s=Math.max(1,i),r=new Array(t+1).fill(0);for(let o=s;o<=t;o++)r[o]=1/(t-s+1);return wr.set(e,r),r}function _n(i,t){if(t<=0)return 1;let e=[1];for(const n of i){const s=new Array(Math.min(t,e.length+n.length-1)).fill(0);for(let r=0;r<e.length;r++)if(e[r])for(let o=0;o<n.length&&r+o<t;o++)s[r+o]+=e[r]*n[o];e=s}return Math.max(0,1-e.reduce((n,s)=>n+s,0))}function Ee(i){return i<.01?"<1%":i>.99?">99%":`${Math.round(i*100)}%`}const Vl=[{name:"Solid",skill:.78,caution:.55,aggression:.5,risk:.35,vengeSense:.6},{name:"Aggressive",skill:.72,caution:.4,aggression:.75,risk:.5,vengeSense:.5},{name:"Careful",skill:.8,caution:.75,aggression:.35,risk:.2,vengeSense:.65},{name:"Spec-happy",skill:.7,caution:.5,aggression:.85,risk:.4,vengeSense:.45},{name:"Gambler",skill:.68,caution:.35,aggression:.6,risk:.8,vengeSense:.5}];function Gl(i,t=un.hard){const e=Vl[Math.floor(i()*Vl.length)],n=s=>Math.min(.95,Math.max(.05,s+(i()-.5)*.16));return{name:e.name,skill:n(e.skill+t.skill),caution:n(e.caution+t.caution),aggression:n(e.aggression+t.aggression),risk:n(e.risk+t.risk),vengeSense:n(e.vengeSense+t.vengeSense)}}function Wl(i){i.autoRetaliate=!0,i.autoFollow=!1}function Ud(i,t=[]){for(let e=0;e<2;e++){const n=i.inv.findIndex(s=>(s==null?void 0:s.id)==="angler");n>=0&&(i.inv[n]=null)}if(t.includes("AGS into insta maul")&&!i.inv.some(e=>(e==null?void 0:e.id)==="ags")){const e=i.inv.findIndex(n=>(n==null?void 0:n.id)==="angler");e>=0&&(i.inv[e]={id:"ags"})}}function Nd(i){const t=i.inv.findIndex(e=>(e==null?void 0:e.id)==="voidwaker");t>=0&&(i.inv[t]={id:"ags"})}function re(i,t){const e={...i.equip,weapon:{id:t}};return jt[t].twoHanded&&delete e.shield,Fr({...i,equip:e})}function Nn(i,t){const e=new Array(i.length+t.length-1).fill(0);for(let n=0;n<i.length;n++)for(let s=0;s<t.length;s++)e[n+s]+=i[n]*t[s];return e}function Fd(i,t){let e=0;for(let n=Math.max(0,Math.ceil(t));n<i.length;n++)e+=i[n];return e}const jr=i=>Math.floor(i.base.hitpoints*.15)+2,Zr=18;class Od{constructor(t=Math.random,e=()=>{}){R(this,"personality");R(this,"steps",[]);R(this,"engaged",!1);R(this,"specsFrom",0);R(this,"comboUntil",-1);R(this,"nextKoCheck",0);R(this,"outOfRangeSince",-1);R(this,"followDelay",0);R(this,"lastFoeWeapon",null);R(this,"threatSeenAt",-1);R(this,"alertUntil",-1);R(this,"hurtAt",-100);R(this,"lastHp",99);R(this,"orbsLeft",0);R(this,"mood",0);R(this,"moodUntil",0);R(this,"usedItem",!1);R(this,"holdFireUntil",-1);R(this,"potTrickUntil",-1);R(this,"nextMindGame",0);R(this,"nextFakeAxe",0);R(this,"campLowUntil",-1);R(this,"pidPunishUntil",-1);R(this,"patience",0);R(this,"foeWeaponSince",-100);R(this,"foeHitNormally",!1);R(this,"foeFakes",0);R(this,"foeSwingTick",-100);R(this,"vengeReadyAt",-1);R(this,"vengeLead",-1);R(this,"foeSwingSpeed",4);R(this,"foeAttackChecked",-100);R(this,"foeRushes",0);R(this,"foeAxeShownAt",-100);R(this,"botAxeShownAt",-100);R(this,"lastOwnWeapon",null);R(this,"nextFloorClick",0);R(this,"taste",{});R(this,"pidBelief",!1);R(this,"pidHitsNeeded",-1);R(this,"pidHitsSeen",0);R(this,"lastSeenFoeAttack",-100);R(this,"lastSeenOwnAttack",-100);R(this,"engine");R(this,"me");R(this,"foe");R(this,"profile",un.hard);R(this,"lowPlayDone",!1);R(this,"lazyUntil",-1);R(this,"training",[]);R(this,"onTraining",()=>{});R(this,"nextTrainAt",0);R(this,"armourOffUntil",-1);R(this,"orbAxeUntil",-1);R(this,"nextShowOrb",0);R(this,"highSince",-1);R(this,"nextCampFloor",0);R(this,"foeHasAgs",!1);R(this,"mySpecs",0);R(this,"foeSpecs",0);R(this,"tabbing",!1);R(this,"tabbingAt",-100);R(this,"lastEatAt",-100);R(this,"neverTab",!1);R(this,"hailMary",!1);R(this,"hailMaryAt",-100);R(this,"readAt",-1);R(this,"stackAt",-1);R(this,"readTarget",0);R(this,"trainCheck",null);R(this,"sees");R(this,"clicks",0);R(this,"clickTick",-1);R(this,"clickBudget",4);R(this,"spill",[]);R(this,"hoverUntil",-1);this.rng=t,this.thought=e,this.personality=Gl(t,this.profile),this.sees=new ud(this.rng,()=>this.personality.skill),this.reset()}m(t){return this.profile.moves[t]}get newbie(){return this.profile.play.newbie??0}survivalEat(){const t=this.me,e=t.timers,n=t.level.hitpoints;if(n>Math.max(12,re(this.foe,"tentacle")*.5)||this.tick-this.hailMaryAt<=8||this.tabbing&&this.tick-this.tabbingAt<=3||!(this.nextAttackIn(this.foe)<=1||this.sees.spec>=50))return!1;const s=[];if(e.food<=1&&this.has("angler")&&s.push("angler"),e.potion<=1&&this.has("brew")&&s.push("brew"),e.combo<=1&&this.has("karambwan")&&s.push("karambwan"),!s.length)return!1;this.orbAxeUntil=-1,this.orbsLeft=0,this.potTrickUntil=-1,this.campLowUntil=-1;for(const r of s)this.q({type:"item",slot:this.slot(r)});return this.say(`at ${n} HP: eats to survive (survival eat).`),!0}setLevel(t){this.profile=un[t],this.reset()}newRound(){const t={personality:this.personality,taste:this.taste,foeFakes:this.foeFakes,foeRushes:this.foeRushes,patience:this.patience};this.reset(),Object.assign(this,t)}reset(){this.personality=Gl(this.rng,this.profile),this.sees.reset(),this.hoverUntil=-1,this.steps=[],this.spill=[],this.engaged=!1,this.comboUntil=-1,this.nextKoCheck=0,this.outOfRangeSince=-1,this.lastFoeWeapon=null,this.threatSeenAt=-1,this.alertUntil=-1,this.hurtAt=-100,this.highSince=-1,this.lastHp=99,this.orbsLeft=0,this.mood=0,this.moodUntil=0,this.holdFireUntil=-1,this.potTrickUntil=-1,this.pidHitsNeeded=-1,this.pidHitsSeen=0,this.nextMindGame=0,this.nextFakeAxe=0,this.campLowUntil=-1,this.lazyUntil=-1,this.lowPlayDone=!1,this.pidPunishUntil=-1,this.patience=this.rng(),this.foeWeaponSince=-100,this.foeHitNormally=!1,this.foeFakes=0,this.foeRushes=0,this.foeSwingTick=-100,this.foeSwingSpeed=4,this.foeAttackChecked=-100,this.vengeReadyAt=-1,this.vengeLead=-1,this.foeAxeShownAt=-100,this.botAxeShownAt=-100,this.lastOwnWeapon=null,this.nextFloorClick=0,this.nextTrainAt=12+Math.floor(this.rng()*20),this.trainCheck=null,this.taste={};for(const t of["tentacle into double maul","Voidwaker into insta maul","insta maul into Voidwaker","single maul","Voidwaker","Voidwaker timed with Vengeance","AGS into insta maul","insta maul into AGS","AGS"])this.taste[t]=.5+this.rng()}get tick(){return this.engine.tick+1}q(t){var e,n,s;if(this.clickTick!==this.tick){this.clickTick=this.tick,this.clicks=0;const r=this.profile.level;this.clickBudget=r==="easy"||r==="medium"?3:r==="elite"&&this.chance(.25*this.personality.skill)?5:4}if(this.clicks>=this.clickBudget){this.spill.push({a:t,item:t.type==="item"?(e=this.me.inv[t.slot])==null?void 0:e.id:void 0});return}if(this.clicks++,t.type==="item"){const r=jt[((n=this.me.inv[t.slot])==null?void 0:n.id)??"orb"].kind;(r==="food"||r==="combo"||((s=this.me.inv[t.slot])==null?void 0:s.id)==="brew")&&(this.lastEatAt=this.tick),r!=="equip"&&r!=="other"&&(this.usedItem=!0)}this.engine.queue(this.me.id,t)}slot(t){return this.me.inv.findIndex(e=>(e==null?void 0:e.id)===t)}has(t){return this.slot(t)>=0}freeSlots(){return this.me.inv.filter(t=>!t).length}wield(t){var n,s;if(((n=this.me.equip.weapon)==null?void 0:n.id)===t||((s=this.me.equip.shield)==null?void 0:s.id)===t)return!0;const e=this.slot(t);return e<0?!1:(this.q({type:"item",slot:e}),!0)}backToMain(){this.wield("tentacle"),this.wield("avernic")}later(t,e,n){this.steps.push({at:this.tick+t,run:n,tag:e})}pending(t){return this.steps.some(e=>e.tag===t)}chance(t){return this.rng()<t}reaction(){const[t,e]=this.profile.play.react,n=this.rng(),s=this.hovering()&&t>=.2?.2:0,r=.15*(this.personality.skill-.75);return n<t+r+s?0:n<t+e+.1+r+s?1:2}shockedDelay(){const[t,e,n]=this.profile.play.react,s=this.rng(),r=this.hovering()&&t>=.2?.15:0,o=.15*(this.personality.skill-.75);return s<Math.max(0,t+o+r)?0:s<t+e+o+r?1:s<t+e+n+o+r?2:3}hovering(){return this.hoverUntil>=this.tick}updateHover(){if(this.pidBelief){this.hoverUntil=-1;return}this.hovering()||!this.chance((.015+.05*this.personality.skill)*this.m("hover"))||(this.hoverUntil=this.tick+4+Math.floor(this.rng()*8),this.say("hovers its food."))}say(t){this.thought(`[${this.personality.name}] ${t}`)}nextAttackIn(t){return t===this.foe?Math.max(0,this.foeSwingTick+this.foeSwingSpeed-this.tick):Math.max(0,t.lastAttackTick+Mr(t)-this.tick)}threat(){var h;const t=this.foe,e=((h=t.equip.weapon)==null?void 0:h.id)??"tentacle",n=re(t,e in jt?e:"tentacle"),s=Math.floor(this.sees.spec/50),r=re(t,"gmaul"),o=Math.floor(re(t,"voidwaker")*1.5),a=re(t,"dh_axe");let l=n;const c=e==="gmaul"||e==="voidwaker";return s>=2?l=Math.max(l,(c?1:.75)*Math.max(2*r,o+r)):s===1&&(l=Math.max(l,(c?1:.75)*Math.max(r+n*.5,o))),e==="dh_axe"&&(l=Math.max(l,a)),e==="ags"&&s>=1&&(l=Math.max(l,this.agsSpecMax())),Math.round(l*.7)}agsSpecMax(){return Math.floor(Math.floor(re(this.foe,"ags")*1.1)*1.25)}agsFloor(){var r,o,a;const t=this.personality;let e=0;const n=this.profile.play.aware;if(this.foeHasAgs&&this.sees.spec>=50&&n>0){const l=Math.min(1.02,Math.max(.7,.96+.08*t.skill+.05*t.caution-.1*t.risk));e=Math.round(this.agsSpecMax()*l*(.55+.45*Math.min(1,n/.75)))}const s=this.foe;if(((r=s.equip.head)==null?void 0:r.id)==="dh_helm"&&((o=s.equip.body)==null?void 0:o.id)==="dh_body"&&((a=s.equip.legs)==null?void 0:a.id)==="dh_legs"){const l={...s,level:{...s.level,hitpoints:Math.max(1,Math.round(this.sees.hp))}},c=re(l,"dh_axe"),u=Math.min(1,this.profile.play.read*1.45)*Math.min(1,Math.max(.4,.65+.35*t.skill+.08*t.caution-.12*t.risk))*(this.pidBelief?.8:1);c>=45&&(e=Math.max(e,Math.round(c*u)))}return e}think(t,e,n){var r;this.engine=t,this.me=e,this.foe=n,this.sees.update(t,e,n),this.sees.fooledAt===t.tick&&this.say(`thought you ate, but your HP bar says ~${Math.round(this.sees.hp)}.`),this.usedItem=!1;for(const{a:o,item:a}of this.spill.splice(0))if(o.type==="item"&&a){const l=((r=e.inv[o.slot])==null?void 0:r.id)===a?o.slot:this.slot(a);l>=0&&this.q({...o,slot:l})}else this.q(o);for(const o of t.seen)o.kind==="attack"&&o.special&&(o.who===e.id?this.mySpecs++:this.foeSpecs++);if(this.trainCheck&&(n.dead||this.tick>=this.trainCheck.at)&&this.reportTraining(),this.tabbing&&e.teleporting<=0&&this.tick-this.tabbingAt>3&&(this.tabbing=!1),e.dead||n.dead||this.engaged&&e.teleporting<=0&&!this.pending("eat")&&this.tick-this.lastEatAt>2&&this.survivalEat()||this.tabbing)return;if(!this.engaged){if(e.targetId!==n.id&&n.targetId!==e.id)return;this.engaged=!0,this.specsFrom=this.tick+14+Math.floor(this.rng()*4),this.nextTrainAt=this.tick+17+Math.floor(this.rng()*12),this.pidBelief=t.order[0]===e.id,this.say("engages."),this.opening()}const s=this.steps.filter(o=>o.at<=this.tick);this.steps=this.steps.filter(o=>o.at>this.tick);for(const o of s)o.run();if(!this.chance(this.profile.play.idle*(1.3-.4*this.personality.skill))&&(this.drift(),this.updateHover(),this.notePid(),this.notice(),!this.tryHailMary())){if(!(this.hailMary||this.orbsLeft>0)){if(this.tryTab())return}this.eat(),this.upkeep(),this.venge(),this.tryArmourOff(),this.offense(),this.follow()}}opening(){const t=this.me;t.prayers.has("piety")||this.q({type:"prayer",id:"piety"}),t.level.strength<=t.base.strength&&this.has("combat")&&this.q({type:"item",slot:this.slot("combat")}),t.targetId!==this.foe.id&&this.q({type:"attack",target:this.foe.id})}notePid(){const t=this.engine.order[0]===this.me.id,e=+(this.foe.lastAttackTick>this.lastSeenFoeAttack)+ +(this.me.lastAttackTick>this.lastSeenOwnAttack);if(this.lastSeenFoeAttack=this.foe.lastAttackTick,this.lastSeenOwnAttack=this.me.lastAttackTick,t===this.pidBelief){this.pidHitsNeeded=-1;return}if(this.pidHitsNeeded<0){const n=this.rng(),s=this.personality.skill;this.pidHitsNeeded=n<.25+.15*s?1:n<.9?2+Math.floor(this.rng()*2):7+Math.floor(this.rng()*2),this.pidHitsSeen=0}this.pidHitsSeen+=e,!(this.pidHitsSeen<this.pidHitsNeeded)&&(this.pidBelief=t,this.pidHitsNeeded=-1,this.say(t?"notices it has PID now.":"notices it lost PID."),t&&(this.pidPunishUntil=this.tick+6))}drift(){if(this.tick<this.moodUntil)return;const t=this.mood;this.mood=Math.max(-1,Math.min(1,(this.rng()*2-1)*.8+(this.personality.aggression-.5))),this.moodUntil=this.tick+15+Math.floor(this.rng()*25),this.mood>.4&&t<=.4?this.say("starts pushing for a KO."):this.mood<-.4&&t>=-.4&&this.say("plays it safe for a while.")}notice(){var a,l;const t=this.personality,e=this.me,n=((a=this.foe.equip.weapon)==null?void 0:a.id)??null;if(n!==this.lastFoeWeapon&&(n==="gmaul"||n==="voidwaker"||n==="dh_axe"||n==="ags")){const c=this.sees.ateWithin(this.engine,2)?this.profile.play.aware:1;this.chance((this.profile.play.spot+.15*(t.caution-.5)+.1*(t.skill-.7))*c)&&(this.threatSeenAt=this.tick,this.alertUntil=this.tick+4)}n==="ags"&&(this.foeHasAgs=!0),n!==this.lastFoeWeapon&&(this.foeWeaponSince=this.tick,this.foeHitNormally=!1,n==="dh_axe"&&(this.foeAxeShownAt=this.tick)),this.lastFoeWeapon=n;const s=this.engine.seen.some(c=>c.kind==="attack"&&c.who===this.foe.id&&c.weapon==="gmaul"&&c.special);this.foe.lastAttackTick!==this.foeAttackChecked&&(this.foeAttackChecked=this.foe.lastAttackTick,s||(this.foeSwingTick=this.foe.lastAttackTick,this.foeSwingSpeed=Mr(this.foe)));for(const c of this.engine.seen)if(!(c.kind!=="attack"||c.who!==this.foe.id)){if(c.weapon==="tentacle"&&!c.special&&this.sees.spec>=100&&!this.training.length){const h=Math.round(2*re(this.foe,"gmaul")*.8);e.level.hitpoints<=h&&this.chance(this.profile.play.read)&&(this.readAt=this.tick,this.readTarget=Math.min(h+3,e.level.hitpoints+22),this.say(`reads a double maul coming at ${e.level.hitpoints} HP: eats now.`))}!c.special&&c.weapon===n&&(this.foeHitNormally=!0),c.weapon==="dh_axe"&&(this.tick-this.botAxeShownAt<=3&&e.lastAttackTick<this.botAxeShownAt&&(this.foeRushes=Math.min(3,this.foeRushes+1)),this.foeAxeShownAt=-100)}this.foeAxeShownAt>0&&this.tick-this.foeAxeShownAt>=3&&(this.foeFakes=Math.min(3,this.foeFakes+1),this.foeAxeShownAt=-100);const r=((l=e.equip.weapon)==null?void 0:l.id)??null;r!==this.lastOwnWeapon&&r==="dh_axe"&&(this.botAxeShownAt=this.tick),this.lastOwnWeapon=r,this.foeFakes*=.99,this.foeRushes*=.99,e.level.hitpoints>=e.base.hitpoints-4?this.highSince<0&&(this.highSince=this.tick):this.highSince=-1,e.level.hitpoints>e.base.hitpoints*.62&&(this.lowPlayDone=!1);const o=this.lastHp-e.level.hitpoints;this.lastHp=e.level.hitpoints,o>=20&&(this.hurtAt=this.tick,this.alertUntil=Math.max(this.alertUntil,this.tick+3),e.level.hitpoints>45&&this.lazyUntil<this.tick&&this.newbie>0&&this.chance(.5*this.newbie)&&(this.lazyUntil=this.tick+5+Math.floor(this.rng()*7),this.say(`doesn't bother eating at ${e.level.hitpoints} HP.`)))}eat(){var A;if(this.pending("eat")||this.training.length&&this.comboUntil>=this.tick&&this.me.level.hitpoints>25)return;const t=this.me,e=this.personality,n=t.base.hitpoints,s=t.level.hitpoints,r=this.threat(),o=this.profile.play.pid*(this.pidBelief?-1:1),a=n*(.45+.2*e.caution)+(this.rng()-.5)*8+3*o+this.profile.play.eatLine,l=this.alertUntil>=this.tick,c=this.lazyUntil>=this.tick&&s>45,h=l&&!c?r*(.75+.45*e.caution+.07*o)+4:0;let u=0;s<a&&(u=a+12+this.rng()*10),u=Math.min(u,this.eatCeiling()),s<=h&&(u=Math.max(u,h+8));const d=this.agsFloor();d&&!c&&s<=d&&(u=Math.max(u,d+4));const p=this.nextAttackIn(this.foe)<=1||this.sees.spec>=50,g=this.tick-this.hailMaryAt<=8;if(t.teleporting<=0&&!g&&p&&s<=Math.max(12,re(this.foe,"tentacle")*.5)){(this.orbAxeUntil>=this.tick||this.orbsLeft>0||this.potTrickUntil>=this.tick||this.campLowUntil>=this.tick)&&this.say(`at ${s} HP: drops the play and eats.`),this.orbAxeUntil=-1,this.orbsLeft=0,this.potTrickUntil=-1,this.campLowUntil=-1,this.eatNow(!0);return}this.comboUntil>=this.tick&&((A=t.equip.weapon)==null?void 0:A.id)==="dh_axe"&&s>r+3&&(u=0);const m=this.readAt===this.tick;if(m&&(u=Math.max(u,Math.min(n,this.readTarget))),this.orbAxeUntil>=this.tick&&s>0&&(u=0),this.potTrickUntil>=this.tick&&s>r+3&&(u=0),u<=s)return;const T=!this.training.length;if(T&&s>h&&this.tryPotTrick()||T&&this.campLowUntil>=this.tick&&s>this.lowAxeFloor())return;if(T&&this.lowAxeWindow()&&this.chance((.2+.4*e.risk)*this.m("campLow"))){this.campLowUntil=this.tick+2,this.lowPlayDone=!0,this.say(`stays at ${s} HP to use the axe.`);return}const y=this.rng(),E=this.hurtAt===this.tick,D=m?0:E?this.shockedDelay():this.threatSeenAt>=this.tick-1?this.reaction():this.profile.play.react[0]<.2?this.reaction():y<.5+.4*this.profile.play.react[0]?0:1,C=this.hurtAt>=this.tick-2;D===0?this.eatNow(C):this.later(D,"eat",()=>this.eatNow(C))}eatCeiling(){return this.me.base.hitpoints*(.78+.04*this.personality.caution+this.rng()*.05)}eatNow(t){const e=this.me,n=e.timers,s=this.personality,r=e.base.hitpoints,o=e.level.hitpoints,a=this.threat(),l=this.alertUntil>=this.tick||this.hurtAt>=this.tick-1,c=Math.min(this.eatCeiling(),Math.max(r*(.6+.2*s.caution),a*(.9+.3*s.caution)+8)),h=this.agsFloor();let d=Math.max(l?Math.max(c,a*(.9+.3*s.caution)+8):c,h?h+4:0,this.readAt===this.tick?this.readTarget:0)-o;if(d<=0)return;const p=[],g=n.food<=1&&this.has("angler"),v=n.potion<=1&&this.has("brew"),f=n.combo<=1&&this.has("karambwan"),m=Math.max(l?Math.max(this.eatCeiling()+6,a+10):this.eatCeiling()+6,h+10);let T=o;const y=C=>T+C<=m||T<a+3||T<=h||this.readAt===this.tick&&T<this.readTarget;if(g&&(p.push("angler"),d-=Ko(r),T+=Ko(r)),d>0&&v&&(d>14||o<a)&&y(jr(e))&&(p.push("brew"),d-=jr(e),T+=jr(e)),d>0&&f&&y(Zr)&&(p.push("karambwan"),d-=Zr,T+=Zr),!p.length)return;const E=this.hurtAt>=this.tick-1&&this.threatSeenAt<this.hurtAt-3,D=this.profile.play.cleanEat+.1*(s.skill-.75)-(E?.15:0)-(t?.05:0)+(this.hovering()?.08:0);if(!this.chance(D)){const C=this.rng();if(C<.15){this.say("misses the eat, tries again next tick."),this.later(1,"eat",()=>this.eatNow(t));return}C<.3&&p[0]==="angler"&&p[1]==="brew"?([p[0],p[1]]=[p[1],p[0]],this.say("fumbles the order (pot block).")):C<.5&&p.length===3?(p.length=1,this.say("only single eats.")):p.length>1&&(p.pop(),this.say("eats one short."))}for(const C of p)this.q({type:"item",slot:this.slot(C)});p.length>1&&this.say(`${["","single","double","triple"][p.length]} eats${t?" (panicking)":""}.`)}upkeep(){const t=this.me,e=t.timers,n=t.level.hitpoints>t.base.hitpoints*.65&&this.threat()<t.level.hitpoints*.6,s=this.profile.play.upkeep;if(t.level.prayer>0&&!t.prayers.has("piety")&&this.chance(Math.min(1,.5*s))&&this.q({type:"prayer",id:"piety"}),e.potion>1||this.pending("eat"))return;if((t.level.prayer<25||t.level.magic<94&&e.venge<=6||t.level.attack<t.base.attack-10)&&(n||t.level.prayer<8)&&this.has("restore")&&this.chance(Math.min(1,.6*s))){this.q({type:"item",slot:this.slot("restore")});return}n&&t.level.strength<=t.base.strength+4&&this.has("combat")&&this.chance(Math.min(1,.15*s))&&this.q({type:"item",slot:this.slot("combat")})}venge(){var a;const t=this.me,e=this.personality;if(t.vengeActive||t.timers.venge>1||t.level.magic<94||!this.has("venge_sack")){this.vengeReadyAt=-1,this.vengeLead=-1;return}this.vengeReadyAt<0&&(this.vengeReadyAt=this.tick);const n=(a=this.foe.equip.weapon)==null?void 0:a.id;if((n==="voidwaker"||n==="gmaul")&&!this.pending("venge")){const l=this.tick-this.foeWeaponSince;let c=.2+.15*Math.min(1,l/2);if(this.pidBelief||(c+=.2),c+=.35*Math.max(0,Math.min(1,(75-t.level.hitpoints)/40)),this.sees.spec>=100&&(c+=.1),this.sees.spec<50&&(c-=.4),this.foeHitNormally&&(c-=.35),c>.5&&this.chance((c-.4)*(.3+.6*e.vengeSense)*this.m("reactiveVenge"))){const h=this.rng(),u=h<.1*e.skill?0:h<.65?1:2;this.later(u,"venge",()=>{this.me.vengeActive||this.me.timers.venge>1||this.me.level.magic<94||(this.q({type:"cast",spell:"vengeance"}),this.say("suspects a spec: casts Vengeance."))});return}}if(this.vengeLead<0){const l={easy:.1,medium:.15,hard:.25,elite:.35}[this.profile.level];this.vengeLead=this.chance(l)?0:this.chance(.75)?1:2}const s=this.nextAttackIn(this.foe)<=this.vengeLead,r=Math.min(.95,this.profile.play.read*1.3),o=t.level.hitpoints<=Math.max(80,this.threat()+15)||this.sees.hp<=60||this.alertUntil>=this.tick||this.tick-this.vengeReadyAt>60+Math.floor(40*e.vengeSense);this.chance((s?.25+.45*e.vengeSense:.1)*(o?1:(1-r)**2))&&(this.q({type:"cast",spell:"vengeance"}),this.say("casts Vengeance."))}tryArmourOff(){var p,g,v,f;const t=this.me,e=this.foe,n=this.personality,s=(p=e.equip.weapon)==null?void 0:p.id,r=s==="dh_axe"&&((g=e.equip.body)==null?void 0:g.id)==="dh_body"&&((v=e.equip.legs)==null?void 0:v.id)==="dh_legs"&&((f=e.equip.head)==null?void 0:f.id)==="dh_helm",o=s==="ags"&&this.sees.spec>=50;if(this.armourOffUntil>=0){(this.tick>this.armourOffUntil||!r&&!o&&this.stackAt<0)&&this.armourBackOn();return}if(this.training.length||this.comboUntil>=this.tick||this.tryVengeStackBait()||!r&&!o||this.nextAttackIn(e)>1)return;const a={...e,level:{...e.level,hitpoints:Math.max(1,Math.round(this.sees.hp))}},l=r?re(a,"dh_axe"):Math.floor(Math.floor(re(e,"ags")*1.1)*1.25),c=Math.floor(l*.5*.75);if(l<40||c<this.sees.hp*.6||t.level.hitpoints<l*.85||!(t.vengeActive||t.timers.venge<=1&&t.level.magic>=94&&this.has("venge_sack")))return;const u=["body","legs","head"].filter(m=>t.equip[m]),d=this.freeSlots();if(!(d<2||u.length<2)&&this.chance((.3+.6*n.skill)*this.m("armourOff"))){t.vengeActive||this.q({type:"cast",spell:"vengeance"});for(const m of u.slice(0,Math.min(d,3)))this.q({type:"unequip",slot:m});this.armourOffUntil=this.tick+2,this.say(`takes its armour off with Vengeance: baiting your ${r?"axe":"AGS"} (up to ~${l}).`)}}tryVengeStackBait(){const t=this.me,e=this.foe,n=this.personality;if(this.m("vengeStackBait")<=0||Ne(e)!=="tentacle"||this.engine.tick!==e.lastAttackTick||t.spec<50||!this.has("voidwaker")||!_e(t.pos,e.pos)||!(t.vengeActive||t.timers.venge<=1&&t.level.magic>=94&&this.has("venge_sack")))return!1;const r=Math.floor(re(t,"voidwaker")*1.5),o=re(e,"tentacle");if(this.sees.hp>r*.8+Math.floor(o*.5*.75)||t.level.hitpoints<o+15||this.sees.spec>=50&&t.level.hitpoints<85)return!1;const a=["body","legs","head"].filter(u=>t.equip[u]);if(this.freeSlots()<1||!a.length)return!1;const c=this.tick+this.nextAttackIn(e)+(this.pidBelief?1:-1);if(c<=this.tick||t.timers.attack>c-this.tick+1||!this.chance((.25+.5*n.skill)*this.m("vengeStackBait")))return!1;const h=()=>{t.vengeActive||this.q({type:"cast",spell:"vengeance"});for(const u of a.slice(0,Math.min(this.freeSlots(),3)))this.q({type:"unequip",slot:u})};return this.pidBelief?this.later(1,"stack",h):h(),this.q({type:"walk"}),this.holdFireUntil=c-1,this.stackAt=c,this.armourOffUntil=c+2,this.say(`sets up a Venge stack: Vengeance, armour off, and a Voidwaker to land with your next whip (you ~${Math.round(this.sees.hp)}).`),!0}armourBackOn(){this.armourOffUntil=-1,this.stackAt=-1;for(const t of["dh_body","dh_legs","dh_helm"]){const e=this.me.inv.findIndex(n=>(n==null?void 0:n.id)===t);e>=0&&this.q({type:"item",slot:e})}}offense(){const t=this.me,e=this.foe;if(!(this.holdFireUntil>=this.tick)&&(t.targetId!==e.id||this.usedItem&&this.chance(.5+.4*this.personality.skill))&&this.q({type:"attack",target:e.id}),this.comboUntil>=this.tick)return;if(this.orbsLeft>0){this.orbDown();return}if(this.potTrickUntil>=this.tick&&e.lastAttackTick===this.engine.tick&&t.timers.attack<=1&&this.freeSlots()>=1){this.say("you went for it: axe stack."),this.potTrickUntil=-1,this.axeHit(1);return}if(this.stackAt>=0&&this.tick>=this.stackAt){const r=this.tick===this.stackAt&&t.spec>=50&&this.has("voidwaker");if(this.stackAt=-1,r){this.say("Voidwaker into the Venge stack."),this.vwSingle("voidwaker");return}}if(this.stackAt>=0){t.targetId&&this.q({type:"walk"});return}const s=this.tick>=this.specsFrom;if(this.training.length){if(!s){(Ne(t)!=="tentacle"||!t.equip.shield)&&this.backToMain();return}if(this.tryTraining())return}else{if(this.tryFloorClick()||this.tryCampFloor()||s&&this.tryPotTrickCombo())return;if(s&&this.tick>=this.nextKoCheck){if(this.tryKo())return;const r=this.profile.play.koSlow;r>0&&(this.nextKoCheck=this.tick+1+Math.floor(this.rng()*r))}if(this.tryOrbForAxe()||this.tryShowOrb()||this.tryAxeStandoff()||this.tryFakeAxe()||this.tryAxe())return}(Ne(t)!=="tentacle"||!t.equip.shield)&&this.backToMain()}tryKo(){const t=this.me,e=this.foe,n=this.personality,s=Math.floor(t.spec/50);if(s<1||!_e(t.pos,e.pos))return!1;const r=e.incoming.filter($=>$.from===t.id).reduce(($,H)=>$+H.damage,0),o=this.sees.hp-r;if(o<=0)return!1;const a=t.timers.attack<=1,l=this.freeSlots()>=1,c=this.engine.tick-t.lastAttackTick<=1&&Ne(t)==="tentacle",h=this.engine.tick-t.lastAttackTick<=4,u=this.pidBelief,d=this.sees.ateWithin(this.engine,2),p=u?.15:d?.3:.6,g=this.specWeapon(),v=g==="ags"?"AGS":"Voidwaker",f=this.hitPmf("gmaul"),m=this.specPmf(g),T=[];if(s>=2&&l&&c&&T.push({name:"tentacle into double maul",dmg:Nn(f,f),go:()=>this.doubleMaul()}),s>=2&&l&&a&&T.push({name:`${v} into insta maul`,dmg:Nn(m,f),go:()=>this.vwMaul(g)}),s>=2&&l&&h&&t.timers.attack<=2&&T.push({name:`insta maul into ${v}`,dmg:Nn(f,m),go:()=>this.maulVw(g)}),s>=1&&l&&c&&T.push({name:"single maul",dmg:f,go:()=>this.singleMaul()}),s>=1&&a&&(g==="voidwaker"||l)&&T.push({name:v,dmg:m,go:()=>this.vwSingle(g)}),g==="voidwaker"&&t.vengeActive&&s>=1&&a&&this.nextAttackIn(e)<=1&&T.push({name:"Voidwaker timed with Vengeance",dmg:m,bonus:8,go:()=>this.vwSingle(g)}),this.newbie>0&&this.chance(.05*this.newbie)){const $=T.find(H=>H.name===v);if($)return this.say(`specs you with the ${v} on a whim (you ~${o} HP).`),$.go(),this.nextKoCheck=this.tick+8,!0}const y=this.profile.play.whim??0;if(y>0&&o<=80&&this.chance(y)){const $=T.filter(H=>(this.profile.combos[H.name]??0)>0&&H.name!=="tentacle into double maul"&&H.name!=="single maul");if($.length){const H=$[Math.floor(this.rng()*$.length)];return this.say(`chances a ${H.name} (you ~${o} HP).`),H.go(),this.nextKoCheck=this.tick+10,!0}}const E=this.sees.ateWithin(this.engine,1)&&this.chance(Math.min(1,this.m("punishEat"))),D=Math.min(115,this.sees.likelyMax()-r+(this.sees.consumed>=3?0:this.sees.consumed===2?18:34)),C=this.pidPunishUntil>=this.tick&&this.chance(Math.min(1,this.m("pidSwapPunish"))),A=()=>this.rng()*.12*(.5+n.aggression)*(C?1.5:1),N=s>=2?u?1+.2*this.patience*this.m("specSaving"):1-Math.min(.6,.35*this.patience*this.m("specSaving")):1,Z=T.map($=>{const H=this.sees.killChance($.dmg,r+($.bonus??0)),tt=E?Fd($.dmg,D-($.bonus??0)):0,Y=Math.max(H*(1-p),tt*.9);return{...$,kill:H,punish:E&&tt*.9>H*(1-p),score:Y*N+A()}}).filter($=>this.profile.combos[$.name]>0).filter($=>$.kill>=.12||$.punish||this.chance(.01+.02*n.aggression)),x=this.profile.play.pid*(u?-.06:.06),b=Math.min(.55,Math.max(.12,.3-.2*(n.aggression-.5)-.1*this.mood-(C?.08:0)+this.profile.koBar+x)),z=Z.filter($=>$.score>=b);if(!z.length||t.level.hitpoints<=this.threat()*.8&&Math.max(...z.map($=>$.score))<.5||!this.chance((.5+.4*n.skill)*this.profile.koFocus))return!1;let j=z[Math.floor(this.rng()*z.length)];if(!this.chance(.2)){const $=z.map(tt=>tt.score*(this.taste[tt.name]??1)*(this.profile.combos[tt.name]??1));let H=this.rng()*$.reduce((tt,Y)=>tt+Y,0);j=z.find((tt,Y)=>(H-=$[Y])<=0)??z[0]}return this.say(`goes for ${j.name} (you ~${o} HP${j.punish?`, you just ate: ~${D} at most`:""}, ${Math.round(j.kill*100)}% if you don't eat${u?", it has PID":""}).`),j.go(),this.nextKoCheck=this.tick+3+Math.floor(this.rng()*3),!0}tryTraining(){const t=this.me,e=this.foe;if(!this.training.length||this.tick<this.nextTrainAt||this.engine.order[0]!==t.id||!_e(t.pos,e.pos)||this.freeSlots()<1)return!1;const n=this.hitPmf("gmaul"),s=this.specPmf("voidwaker"),r={"Voidwaker into insta maul":{ok:t.timers.attack<=1,dmg:Nn(s,n),go:()=>this.vwMaul("voidwaker",!1)},"insta maul into Voidwaker":{ok:this.engine.tick-t.lastAttackTick<=4&&t.timers.attack<=2,dmg:Nn(n,s),go:()=>this.maulVw("voidwaker")},"tentacle into double maul":{ok:this.engine.tick===t.lastAttackTick&&Ne(t)==="tentacle"&&this.worthDoubleMaul(n),dmg:Nn(n,n),go:()=>this.doubleMaul(!0)},"AGS into insta maul":{ok:t.timers.attack<=1&&this.has("ags"),dmg:Nn(this.specPmf("ags"),n),go:()=>this.vwMaul("ags",!1,!0)}},o=this.training.filter(c=>r[c].ok);if(!o.length)return!1;const a=o[Math.floor(this.rng()*o.length)];t.spec=100;const l=e.level.hitpoints;return this.say(`training: ${a} (it has PID, you ~${Math.round(this.sees.hp)} HP).`),r[a].go(),this.nextTrainAt=this.tick+30+Math.floor(this.rng()*18)+Math.floor(this.rng()*18),this.nextKoCheck=this.tick+6,this.trainCheck={at:this.tick+5,label:Sr.find(c=>c.id===a).label,hp:l},!0}worthDoubleMaul(t){if(this.me.lastRoll<=0)return!1;const e=this.foe.incoming.filter(r=>r.from===this.me.id).reduce((r,o)=>r+o.damage,0),n=this.sees.killChance(Nn(t,t),e),s=Math.max(0,this.tick-this.nextTrainAt);return this.chance(Math.min(1,n/.2+s/40))}tryHailMary(){var h;if(this.m("hailMary")<=0||this.training.length||this.hailMary||this.comboUntil>=this.tick||this.orbsLeft>0)return!1;const t=this.me,e=this.foe,n=this.personality;if(!this.pidBelief||!this.has("orb")||!this.has("dh_axe")||!this.has("tab")||this.freeSlots()<1||t.specTeleportLock>0||this.neverTab||!_e(t.pos,e.pos))return!1;const s=t.inv.filter(u=>u&&(u.id==="angler"||u.id==="karambwan")).length,r=this.personality.caution>.65?4:this.personality.risk>.6?2:3;if(!(this.mySpecs>=2&&this.foeSpecs>=2&&s<=r+2||s<=1))return!1;const o=t.level.hitpoints;let a=this.rng()<.5?1:10;((h=e.equip.ring)==null?void 0:h.id)==="recoil"&&(a=Math.max(a,11));const l=o>a?Math.min(4,Math.ceil((o-a)/10)):0;if(this.nextAttackIn(e)<l+2||t.timers.attack>l+1)return!1;const c=this.axeKoChance(o-l*10);return c<.03||!this.chance((.3+.5*n.skill)*Math.min(1,c/.2)*this.m("hailMary"))?!1:(this.hailMary=!0,this.hailMaryAt=this.tick,this.say(`Hail Mary: you're on your timer, it has PID: orbs down to ~${Math.max(1,o-l*10)}, axes and tabs out.`),l>0?(this.orbsLeft=l,this.orbAxeUntil=this.tick+l+3,this.orbDown()):this.axeHit(1),!0)}tryTab(){if(this.neverTab||this.training.length||!this.has("tab")||this.comboUntil>=this.tick||this.me.specTeleportLock>0)return!1;const t=this.me,e=this.personality,n=t.inv.filter(c=>c&&(c.id==="angler"||c.id==="karambwan")).length,s=t.inv.reduce((c,h)=>c+((h==null?void 0:h.id)==="brew"?h.doses??0:0),0),r=n===0&&s<=1,o=this.mySpecs>=2&&this.foeSpecs>=2,a=n+(s>0?1:0),l=e.caution>.65?4:e.risk>.6?2:3;return!r&&!(o&&a<l)?!1:(this.q({type:"item",slot:this.slot("tab")}),this.tabbing=!0,this.tabbingAt=this.tick,this.say(r?"is out of food: tabs out.":`both specs used and only ${a} eat${a===1?"":"s"} left: tabs out to reset.`),!0)}reportTraining(){const t=this.trainCheck,e=this.foe;!t||!e||(this.trainCheck=null,this.armourOffUntil=-1,this.orbAxeUntil=-1,this.nextShowOrb=0,this.nextCampFloor=0,this.foeHasAgs=!1,this.mySpecs=0,this.foeSpecs=0,this.tabbing=!1,this.hailMary=!1,this.lastEatAt=-100,this.readAt=-1,this.stackAt=-1,this.onTraining(e.dead||e.level.hitpoints<=0?`Training: the ${t.label} KO'd you.`:`Training: you survived the ${t.label} (${t.hp} → ${e.level.hitpoints} HP).`))}hitPmf(t){const e=this.me,n=this.foe,s={...e.equip,weapon:{id:t}};jt[t].twoHanded&&delete s.shield;const r={...e,equip:s},o=ol(sl(r),rl(n,Dn(r).type)),a=Fr(r),l=new Array(a+1).fill(o/Math.max(1,a));return l[0]=1-o,l}vwPmf(){const t=re(this.me,"voidwaker"),e=Math.floor(t*.5),n=Math.floor(t*1.5),s=new Array(n+1).fill(0);for(let r=Math.max(1,e);r<=n;r++)s[r]=1/(n-Math.max(1,e)+1);return s}clean(){return this.chance(.75+.25*this.personality.skill-.4*(this.profile.play.sloppy??0))}specWeapon(){var e;const t=(e=this.me.equip.weapon)==null?void 0:e.id;return t==="voidwaker"||t==="ags"?t:this.has("voidwaker")||!this.has("ags")?"voidwaker":"ags"}specPmf(t){return t==="ags"?dn(Hi(this.me,this.foe,"ags","ags")):this.vwPmf()}vwMaul(t,e=!0,n=!1){if(this.comboUntil=this.tick+3,this.wield(t),e&&this.chance((.12*(1-this.personality.aggression)+.05)*this.m("fakeVoidwaker"))){this.say("…fakes it."),this.later(1,"combo",()=>this.backToMain());return}this.q({type:"spec"}),this.q({type:"attack",target:this.foe.id}),this.later(1,"combo",()=>{if(!n&&!this.clean()){this.say("is a tick late with the maul."),this.later(1,"combo",()=>this.maulSpec(1));return}this.maulSpec(1)}),this.later(3,"combo",()=>{this.maybeOrbDown()||this.backToMain()})}doubleMaul(t=!1){if(!t&&this.newbie>0){this.comboUntil=this.tick+4,this.say("...slowly."),this.later(1,"combo",()=>this.maulSpec(1)),this.later(2,"combo",()=>{this.me.spec>=50&&this.maulSpec(1)}),this.later(3,"combo",()=>this.newbieAfterMaul());return}this.comboUntil=this.tick+2,this.wield("gmaul");const e=t||this.clean()?3:2;for(let n=0;n<e;n++)this.q({type:"spec"});e===2&&this.later(1,"combo",()=>this.q({type:"spec"})),this.later(2,"combo",()=>{this.maybeOrbDown()||this.backToMain()})}maulVw(t){this.comboUntil=this.tick+3,this.maulSpec(1),this.later(1,"combo",()=>{const e=this.me,n=this.foe,s=n.incoming.filter(l=>l.from===e.id).reduce((l,c)=>l+c.damage,0),r=this.sees.hp-s,o=this.specPmf(t).length-1,a=t==="ags"?"AGS":"Voidwaker";if(this.has(t)&&this.wield(t),e.spec<50||r>o*.9){this.say(`maul hit ${e.lastRoll}: grabs the ${a}, but no spec off that.`),this.later(1,"combo",()=>this.backToMain());return}this.say(`maul hit ${e.lastRoll}: ${a} follows (you ~${r}).`),this.q({type:"spec"}),this.q({type:"attack",target:n.id}),this.later(2,"combo",()=>{this.maybeOrbDown()||this.backToMain()})})}maybeOrbDown(){const t=this.me,e=this.foe,n=this.personality,s=e.incoming.filter(o=>o.from===t.id).reduce((o,a)=>o+a.damage,0),r=this.sees.hp-s;return this.training.length||r>35||t.level.hitpoints<70||!this.has("orb")||!this.has("dh_axe")||!this.chance((.2+.5*n.risk)*this.m("orbAfterCombo"))?!1:(this.orbsLeft=1+Math.floor(this.rng()*3),this.say(`you're at ~${r}: orbs down to stack you with the axe.`),this.orbDown(),!0)}tryFakeAxe(){const t=this.me,e=this.foe,n=this.personality;if(!this.has("dh_axe")||this.freeSlots()<1||!_e(t.pos,e.pos)||t.level.hitpoints>t.base.hitpoints*.85||t.level.hitpoints<=this.threat()+5)return!1;const s=1+.5*this.foeRushes;return this.tick<this.nextFakeAxe||this.nextAttackIn(e)>2||!this.chance((.02+.04*(n.aggression+n.risk)/2)*s*this.m("fakeAxe"))?!1:(this.nextFakeAxe=this.tick+12+Math.floor(this.rng()*20),this.waitWithAxe("pulls out the axe and waits for you to hit..."),!0)}waitWithAxe(t){const e=this.engine.tick;this.comboUntil=this.tick+3,this.holdFireUntil=this.tick+2,this.wield("dh_axe"),this.say(t);const n=s=>{this.foe.lastAttackTick>e&&this.me.timers.attack<=1?(this.say("you hit: it stacks the axe."),this.holdFireUntil=-1,this.axeHit(1)):s&&(this.say("...gives up the fake."),this.holdFireUntil=-1,this.backToMain())};this.later(1,"combo",()=>n(!1)),this.later(2,"combo",()=>{Ne(this.me)==="dh_axe"&&this.holdFireUntil>=0&&n(!0)})}tryAxeStandoff(){const t=this.me,e=this.foe,n=this.personality;if(this.foeAxeShownAt<0||this.tick-this.foeAxeShownAt>2||this.tick<this.nextFakeAxe||!this.has("dh_axe")||this.freeSlots()<1||!_e(t.pos,e.pos)||t.level.hitpoints<=this.threat()+5)return!1;const s=this.rng(),r=(.06+.12*(1-n.skill))*(1-.25*this.foeFakes)*this.m("axeStandoff"),o=(.2+.25*n.skill+.1*this.foeFakes)*this.m("axeStandoff");return s<r&&t.timers.attack<=1?(this.nextFakeAxe=this.tick+12,this.say("sees your axe and rushes its own axe."),this.axeHit(1),!0):s<r+o?(this.nextFakeAxe=this.tick+12,this.waitWithAxe("sees your axe: pulls its own and waits for you to hit first."),!0):!1}tryFloorClick(){const t=this.me,e=this.personality;if(!this.sees.vengeUp||this.tick<this.nextFloorClick||t.timers.attack>1)return!1;const n=t.level.hitpoints<60?1:.4;return this.chance((.1+.25*e.skill)*n*this.m("floorClick"))?(this.nextFloorClick=this.tick+10,this.holdFireUntil=this.tick+1+Math.floor(this.rng()*2),this.q({type:"walk"}),this.say("doesn't hit into your Vengeance (clicks the floor)."),!0):!1}tryCampFloor(){var a;const t=this.me,e=this.foe,n=this.profile.play.pid;if(n<=0||this.pidBelief||this.tick<this.nextCampFloor||t.timers.attack>1||!_e(t.pos,e.pos))return!1;const s=(a=e.equip.weapon)==null?void 0:a.id,r=s==="dh_axe"||(s==="gmaul"||s==="voidwaker"||s==="ags")&&this.sees.spec>=50,o=t.level.hitpoints<55&&this.sees.hp<60;return!r&&!o||!this.chance(.3*n*this.m("campFloor"))?!1:(this.nextCampFloor=this.tick+6+Math.floor(this.rng()*6),this.holdFireUntil=this.tick+1+Math.floor(this.rng()*2),this.q({type:"walk"}),this.say("no PID: camps the floor (doesn't trade into your hit first)."),!0)}tryPotTrickCombo(){var c;const t=this.me,e=this.foe,n=this.personality,s=t.level.hitpoints;if(s<28||s>47||t.spec<50||this.tick<this.nextMindGame||this.lowPlayDone||!this.has("gmaul")||!this.has("dh_axe")||this.freeSlots()<1||t.timers.potion>1||this.engine.tick-t.lastAttackTick>4||!_e(t.pos,e.pos)||s<=re(e,((c=e.equip.weapon)==null?void 0:c.id)??"tentacle")*.7)return!1;const r=this.has("combat")?"combat":this.has("restore")?"restore":null,o=this.sees.hp,a=re(t,"gmaul")*(t.spec>=100?2:1)+re(t,"dh_axe");if(!r||o>a*.6||!this.chance((.12+.25*n.aggression)*this.m("potTrickCombo")))return!1;this.nextMindGame=this.tick+30+Math.floor(this.rng()*30),this.comboUntil=this.tick+4,this.q({type:"item",slot:this.slot(r)}),this.lowPlayDone=!0,this.say(`pot tricks at ${s} HP, then maul into axe.`);const l=t.spec>=100&&this.chance(.6);return this.later(1,"combo",()=>{this.wield("gmaul");for(let h=0;h<(l?3:1);h++)this.q({type:"spec"})}),this.later(2,"combo",()=>{if(this.me.timers.attack>1){this.backToMain();return}this.wield("dh_axe"),this.q({type:"attack",target:this.foe.id})}),this.later(4,"combo",()=>this.backToMain()),!0}tryPotTrick(){const t=this.me,e=this.personality,n=t.timers,s=t.level.hitpoints,r=t.base.hitpoints;if(s<r*.35||s>r*.62||s<=this.threat()+5||n.potion>1||this.lowPlayDone||!this.has("dh_axe")||this.freeSlots()<1)return!1;const o=this.has("combat")?"combat":this.has("restore")?"restore":null;return!o||this.tick<this.nextMindGame||!this.chance((.05+.15*(e.risk+e.aggression)/2)*this.m("potTrick"))?!1:(this.nextMindGame=this.tick+25+Math.floor(this.rng()*40),this.q({type:"item",slot:this.slot(o)}),this.potTrickUntil=this.tick+3,this.lowPlayDone=!0,this.say(`pot tricks at ${s} HP (looks like eating).`),!0)}singleMaul(){if(this.newbie>0){const t=1+Math.floor(this.rng()*2);this.comboUntil=this.tick+t+2,this.wield("gmaul"),this.later(t,"combo",()=>{this.me.spec>=50&&this.q({type:"spec"})}),this.later(t+1,"combo",()=>this.newbieAfterMaul());return}this.comboUntil=this.tick+2,this.maulSpec(1),this.later(2,"combo",()=>this.backToMain())}newbieAfterMaul(){var t;if(((t=this.me.equip.weapon)==null?void 0:t.id)==="gmaul"&&this.chance(.4)){this.comboUntil=this.tick+6,this.say("keeps hitting you with the maul."),this.q({type:"attack",target:this.foe.id}),this.later(5+Math.floor(this.rng()*4),"combo",()=>this.backToMain());return}this.backToMain()}vwSingle(t){if(this.newbie>0&&!this.training.length){const e=1+Math.floor(this.rng()*3);this.comboUntil=this.tick+e+2,this.wield(t),this.later(e,"combo",()=>{var n;((n=this.me.equip.weapon)==null?void 0:n.id)!==t||this.me.spec<50||(this.q({type:"spec"}),this.q({type:"attack",target:this.foe.id}))}),this.later(e+2,"combo",()=>this.backToMain());return}this.comboUntil=this.tick+2,this.wield(t),this.q({type:"spec"}),this.q({type:"attack",target:this.foe.id}),this.later(2,"combo",()=>this.backToMain())}maulSpec(t){this.wield("gmaul");for(let e=0;e<t;e++)this.q({type:"spec"})}tryAxe(){var c,h;const t=this.me,e=this.foe,n=this.personality;if(!this.has("dh_axe")||this.freeSlots()<1||t.timers.attack>1||!_e(t.pos,e.pos))return!1;const s=t.base.hitpoints,r=t.level.hitpoints,o=this.sees.spec>=50&&(((c=e.equip.weapon)==null?void 0:c.id)==="gmaul"||((h=e.equip.weapon)==null?void 0:h.id)==="voidwaker");if(t.vengeActive&&this.nextAttackIn(e)<=0&&this.chance((.2+.35*n.vengeSense)*this.m("vengeAxeStack")))return this.say("stacks the DH axe with Vengeance."),this.axeHit(1),!0;const a=1-r/s;return(this.campLowUntil>=this.tick?this.lowAxeWindow(!0):this.lowAxeWindow()&&this.chance((.05+.2*n.risk)*a*2*this.m("lowHpAxe")))?(this.campLowUntil=-1,this.lowPlayDone=!0,this.say(`risks a DH hit at ${r} HP.`),this.axeHit(1),!0):r>=s*.85&&!o&&this.sees.spec<50&&n.risk>.55&&this.has("orb")&&this.chance(.015*n.risk*this.m("orbDown"))?(this.orbsLeft=2+Math.floor(this.rng()*3),this.say("orbs down for a DH hit."),this.orbDown(),!0):!1}lowAxeWindow(t=!1){var l,c;const e=this.me,n=this.foe,s=this.personality,r=e.level.hitpoints,o=e.base.hitpoints;return!(this.sees.spec>=50&&(((l=n.equip.weapon)==null?void 0:l.id)==="gmaul"||((c=n.equip.weapon)==null?void 0:c.id)==="voidwaker"))&&(t||!this.lowPlayDone)&&this.nextAttackIn(n)>=(t?1:2)&&this.has("dh_axe")&&this.freeSlots()>=1&&_e(e.pos,n.pos)&&r<o*(.45+.15*s.risk)&&r>this.lowAxeFloor()}lowAxeFloor(){var t;return re(this.foe,((t=this.foe.equip.weapon)==null?void 0:t.id)??"tentacle")*.6}orbDown(){const t=this.orbAxeUntil>=this.tick;if(!t&&this.me.level.hitpoints<=this.threat()+12){this.orbsLeft=0;return}if(this.q({type:"item",slot:this.slot("orb")}),--this.orbsLeft===0){const e=Math.max(1,this.me.timers.attack-1);t&&(this.orbAxeUntil=this.tick+e+1),this.later(e,"combo",()=>{(this.me.timers.attack<=1||t)&&this.axeHit(1)})}}tryShowOrb(){var a;const t=this.me,e=this.foe,n=this.personality;if(!this.has("orb")||t.level.hitpoints<t.base.hitpoints-6||this.tick<this.nextShowOrb)return!1;const s=(a=e.equip.weapon)==null?void 0:a.id;if(this.alertUntil>=this.tick||this.hurtAt>=this.tick-3||s&&s!=="tentacle")return!1;const r=this.highSince>=0&&this.tick-this.highSince>=5+Math.round(4*(1-n.risk));if(!this.chance((.04+.06*n.risk+(r?.2:0))*this.m("orbDown")))return!1;const o=t.level.hitpoints>=95&&!r&&this.chance(.4)?2:1;return t.level.hitpoints-10*o<=this.agsFloor()+4?!1:(this.nextShowOrb=this.tick+40,this.q({type:"item",slot:this.slot("orb")}),o===2&&this.later(1,"orb",()=>{this.has("orb")&&this.q({type:"item",slot:this.slot("orb")})}),this.say(`at ${t.level.hitpoints} HP with nothing going on: orbs down to ~${t.level.hitpoints-10*o} (not safing).`),!0)}tryOrbForAxe(){var h;const t=this.me,e=this.foe,n=this.personality;if(!this.has("orb")||!this.has("dh_axe")||this.freeSlots()<1||!_e(t.pos,e.pos)||this.tick<this.nextMindGame)return!1;const s=t.level.hitpoints;if(s<35||this.engine.tick-this.foeSwingTick>1||this.foeSwingSpeed<6||s<=this.threat()+5)return!1;const r=this.sees.spec>=50;if(r&&!this.chance(.25*n.risk))return!1;const o=this.rng();let a=o<.15+.25*n.risk?1:o<.5?10:o<.8?20:30;r&&(a=Math.max(a,30)),((h=e.equip.ring)==null?void 0:h.id)==="recoil"&&(a=Math.max(a,11));const l=Math.max(1,Math.min(4,Math.ceil((s-a)/10)));if(this.nextAttackIn(e)<l+2)return!1;const c=this.axeKoChance(s-l*10);return c<.03||!this.chance((.15+.35*n.risk+.15*n.skill)*Math.min(1,c/.25)*this.m("orbDown"))?!1:(this.nextMindGame=this.tick+30+Math.floor(this.rng()*30),this.orbsLeft=l,this.orbAxeUntil=this.tick+l+3,this.say(`you just swung: orbs down to ~${Math.max(1,s-l*10)} for a big axe.`),this.orbDown(),!0)}axeKoChance(t){const e=this.me,n=this.foe,s={...e,level:{...e.level,hitpoints:Math.max(1,t)}},r=Math.max(1,Math.round(this.sees.hp));if(re(s,"dh_axe")<r+3)return 0;const o=[dn(Hi(s,n,"dh_axe"))];return .65*_n(o,r)+.35*_n(o,r+22)}axeHit(t){var n;const e=jt.dh_axe.speed;if(!this.hailMary&&this.newbie>0&&((n=this.me.equip.weapon)==null?void 0:n.id)!=="dh_axe"&&this.chance(.8*this.newbie)){const s=1+Math.floor(this.rng()*2);this.comboUntil=this.tick+s+(t-1)*e+2,this.wield("dh_axe"),this.later(s,"combo",()=>{var r;((r=this.me.equip.weapon)==null?void 0:r.id)==="dh_axe"&&(this.q({type:"attack",target:this.foe.id}),this.later(1,"combo",()=>this.maybeMaulAfterAxe()),this.later((t-1)*e+2,"combo",()=>this.backToMain()))});return}if(this.comboUntil=this.tick+(t-1)*e+2,this.wield("dh_axe"),this.q({type:"attack",target:this.foe.id}),this.hailMary){this.hailMary=!1,this.later(1,"combo",()=>{this.has("tab")&&(this.q({type:"item",slot:this.slot("tab")}),this.tabbing=!0,this.tabbingAt=this.tick,this.say("...and tabs out before you can hit back."))});return}this.later(1,"combo",()=>this.maybeMaulAfterAxe()),this.later((t-1)*e+2,"combo",()=>this.backToMain())}maybeMaulAfterAxe(){const t=this.me,e=this.foe;if(Ne(t)!=="dh_axe"||t.spec<50||this.freeSlots()<1)return;const n=e.incoming.filter(r=>r.from===t.id).reduce((r,o)=>r+o.damage,0),s=this.sees.hp-n;s>re(t,"gmaul")*.8||!this.chance((.2+.3*this.personality.aggression)*this.m("maulAfterAxe"))||(this.say(`hit ${t.lastRoll} with the axe: tries a maul after (you: ~${s} HP).`),this.comboUntil=this.tick+3,this.wield("gmaul"),this.later(1,"combo",()=>this.q({type:"spec"})),this.later(3,"combo",()=>this.backToMain()))}follow(){const t=this.me,e=this.foe;if(_e(t.pos,e.pos)){this.outOfRangeSince=-1;return}this.outOfRangeSince<0&&(this.outOfRangeSince=this.tick,this.followDelay=1+Math.floor(this.rng()*3)),this.tick-this.outOfRangeSince>=this.followDelay&&this.q({type:"walk",to:rd(t.pos,e.pos),keepTarget:!0})}}const Bd=6,Hd=10,yi={gmaul:50,voidwaker:50,tentacle:50,ags:50},zd=5,ql=3,Ns={maulSpec:340,tentacleSpec:341,voidwakerSpec:2834,agsSpec:1211},Vd=8,Gd=5;class Wd{constructor(t,e,n,s={}){R(this,"seen",[]);R(this,"tick",0);R(this,"order");R(this,"nextShuffle");R(this,"queues");R(this,"deathTimer",0);R(this,"opts");R(this,"fixedPid",null);R(this,"dying",[]);this.players=t,this.events=e,this.reset=n,this.opts={pidRange:[40,60],rng:Math.random,...s},this.order=Object.keys(t),this.queues=Object.fromEntries(this.order.map(r=>[r,[]])),this.shuffle(),this.nextShuffle=this.nextShuffleTick(),this.placeAtStart()}nextShuffleTick(){const[t,e]=this.opts.pidRange;return this.tick+t+Math.floor(this.opts.rng()*(e-t+1))}setFixedPid(t){this.fixedPid=t,t&&this.order[0]!==t&&(this.order.reverse(),this.events.pidChanged(this.order[0]))}shuffle(){this.fixedPid||(this.opts.rng()<.5&&this.order.reverse(),this.events.pidChanged(this.order[0]))}queue(t,e){this.queues[t].push(e)}other(t){return this.players[this.order.find(e=>e!==t)]}step(){var n,s;if(this.tick++,this.seen.length=0,this.announceDeaths(),this.deathTimer>0){--this.deathTimer===0&&(this.reset(),this.events.respawn(),this.placeAtStart());for(const r of this.order)this.queues[r].length=0;return}this.tick>=this.nextShuffle&&(this.shuffle(),this.nextShuffle=this.nextShuffleTick());const t=new Map;for(const r of this.order)t.set(r,this.clicks(this.players[r]));for(const r of this.order)this.act(this.players[r],t.get(r));for(const r of this.order){const o=this.players[r];if(o.teleporting>0&&o.level.hitpoints>0&&--o.teleporting===0){for(const a of Object.values(this.players))a.targetId=null;(s=(n=this.events).teleported)==null||s.call(n,r),this.events.message(r==="you"?"You teleport out of the fight.":`${o.name} teleports out of the fight.`),this.deathTimer=4}}const e=this.order.filter(r=>this.players[r].level.hitpoints<=0&&!this.players[r].dead);for(const r of e)this.players[r].dead=!0;if(e.length){for(const r of Object.values(this.players))r.targetId=null;this.dying=e,this.deathTimer=Bd}}announceDeaths(){for(const t of this.dying.splice(0))this.events.death(t),this.events.message(t==="you"?"Oh dear, you are dead!":`You have defeated ${this.players[t].name}.`)}sinkFor(t){return{msg:e=>this.tell(t,e),anim:e=>{e==="eat"||e==="drink"?this.seen.push({kind:"consume",who:t.id}):e==="cast"&&this.seen.push({kind:"cast",who:t.id}),this.events.anim(t.id,e)},splat:e=>{this.seen.push({kind:"splat",on:t.id,damage:e,hit:"orb"}),this.events.hit(t.id,{from:t.id,damage:e,kind:"orb"})},sound:e=>{var n,s;return(s=(n=this.events).sound)==null?void 0:s.call(n,t.id,e)}}}tell(t,e){t.id==="you"&&this.events.message(e)}clicks(t){var o;const e={maul:0,clickedOpponent:!1};if(t.dead)return e;if(t.teleporting>0)return Hl(t,this.sinkFor(t)),this.queues[t.id].length=0,e;const n=this.sinkFor(t);Hl(t,n),this.poisonTick(t),t.maulReady&&this.tick>t.maulWindowUntil&&(t.maulReady=0,t.specArmed=!1);const s=(o=t.equip.weapon)==null?void 0:o.id,r=!!s&&!!jt[s].spec;for(const a of this.queues[t.id].splice(0,Hd)){if(a.type==="spec"){if(!r)continue;if(Ne(t)==="gmaul"){e.maul++;continue}this.toggleSpec(t);continue}a.type==="attack"&&(e.clickedOpponent=!0),Md(t,a,n)}return e}act(t,e){if(t.dead)return;t.teleporting>0&&(t.incoming.length=0);for(const a of t.incoming.splice(0))this.applyHit(t,a);if(t.level.hitpoints<=0||t.teleporting>0)return;let n=this.resolveMaul(t,e.maul,e.clickedOpponent);this.move(t);const s=t.targetId?this.players[t.targetId]:null,r=!!s&&!s.dead&&s.level.hitpoints>0&&_e(t.pos,s.pos),o=t.timers.attack<=0;!n&&r&&Ne(t)==="gmaul"&&t.specArmed&&(e.clickedOpponent||o)&&(n=this.fireMaul(t,s,t.maulReady>0&&this.tick<=t.maulWindowUntil?2:1)),!n&&r&&o&&this.attack(t,s)}toggleSpec(t){const e=yi[Ne(t)];if(!e){this.tell(t,"This weapon has no special attack.");return}if(!t.specArmed&&t.spec<e){this.tell(t,"You do not have enough special attack energy left.");return}t.specArmed=!t.specArmed}resolveMaul(t,e,n){if(Ne(t)!=="gmaul")return!1;const s=t.targetId??t.lastTarget,r=s?this.players[s]:null,o=!!r&&!r.dead&&_e(t.pos,r.pos)&&this.tick-t.lastAttackTick<=zd,a=t.maulReady>0&&this.tick<=t.maulWindowUntil;return e>=3&&o?this.fireMaul(t,r,2):e===2||e>=3&&!o?t.spec<yi.gmaul?(this.tell(t,"You do not have enough special attack energy left."),!1):(t.maulReady=2,t.maulWindowUntil=this.tick+ql,t.specArmed=!0,n&&r&&_e(t.pos,r.pos)?this.fireMaul(t,r,2):!1):e===1?a&&o?this.fireMaul(t,r,2):o?this.fireMaul(t,r,1):a?!1:!t.specArmed&&t.spec<yi.gmaul?(this.tell(t,"You do not have enough special attack energy left."),!1):t.specArmed?(t.maulReady=2,t.maulWindowUntil=this.tick+ql,n&&r&&_e(t.pos,r.pos)?this.fireMaul(t,r,2):!1):(t.specArmed=!0,n&&r&&_e(t.pos,r.pos)?this.fireMaul(t,r,1):!1):!1}placeAtStart(){const[t,e]=Object.keys(this.players),n={[t]:{x:7,y:7},[e]:{x:7,y:8}};for(const[s,r]of Object.entries(this.players))r.pos={...n[s]??{x:7,y:7}},r.dest=null,r.moved=0}move(t){if(t.moved=0,t.steps=[],this.tick<t.frozenUntil)return;const e=t.targetId?this.players[t.targetId]:null;for(let n=0;n<(t.running?2:1);n++){let s;if(e&&!e.dead){if(_e(t.pos,e.pos)){t.dest=null;break}t.autoFollow?(s=cr(t.pos,r=>_e(r,e.pos)),t.dest=s!=null&&s.length?s[s.length-1]:null):s=t.dest?cr(t.pos,r=>Fl(r,t.dest)):null}else s=t.dest?cr(t.pos,r=>Fl(r,t.dest)):null;if(!t.dest||!(s!=null&&s.length)){t.dest=null;break}t.pos=s[0],t.steps.push({...t.pos}),t.moved++}}fireMaul(t,e,n){const s=Math.min(n,Math.floor(t.spec/yi.gmaul));if(s<=0)return this.tell(t,"You do not have enough special attack energy left."),!1;for(let r=0;r<s;r++){t.spec-=yi.gmaul;const o=Kr(t,e,this.opts.rng);e.incoming.push({from:t.id,damage:o.damage,kind:"melee",special:!0,smite:t.prayers.has("smite"),max:o.maxed}),this.rolled(t,o.damage)}t.specTeleportLock=zl+1,t.targetId=e.id,t.lastAttackTick=this.tick,t.lastTarget=e.id,t.specArmed=!1,t.maulReady=0;for(let r=0;r<s;r++)this.seen.push({kind:"attack",who:t.id,weapon:"gmaul",special:!0});return this.events.attack(t.id,"gmaul",!0,s),this.events.graphic(t.id,Ns.maulSpec),!0}attack(t,e){const n=Ne(t),s=yi[n];let r=!1;if(t.specArmed&&s&&n!=="gmaul"&&(t.spec>=s?r=!0:this.tell(t,"You do not have enough special attack energy left."),t.specArmed=!1),r&&(t.specTeleportLock=zl+1),r&&n==="voidwaker"){t.spec-=s;const o=Fr(t),a=Math.floor(o*.5),l=Math.floor(o*1.5),c=Math.max(1,a+Math.floor(this.opts.rng()*(l-a+1)));e.incoming.push({from:t.id,damage:c,kind:"magic",special:!0,smite:t.prayers.has("smite"),max:c===l}),this.events.graphic(e.id,Ns.voidwakerSpec),this.rolled(t,c)}else{const o=r&&n==="tentacle",a=r&&n==="ags";r&&(t.spec-=s,a?this.events.graphic(t.id,Ns.agsSpec):this.events.graphic(e.id,Ns.tentacleSpec)),o&&this.tick>=e.freezeImmuneUntil&&(e.frozenUntil=this.tick+Vd,e.freezeImmuneUntil=e.frozenUntil+Gd,this.tell(e,"<col=ef1020>You have been frozen!</col>"));const l=a?Kr(t,e,this.opts.rng,br.accuracy,br):Kr(t,e,this.opts.rng,o?1.25:1),c=n==="tentacle"?r?.5:.25:void 0;e.incoming.push({from:t.id,damage:l.damage,kind:"melee",special:r,smite:t.prayers.has("smite"),poisonChance:c,max:l.maxed}),this.rolled(t,l.damage)}t.timers.attack=Mr(t),t.lastAttackTick=this.tick,t.lastTarget=e.id,this.seen.push({kind:"attack",who:t.id,weapon:n,special:r}),this.events.attack(t.id,n,r)}rolled(t,e){var n,s;t.lastRoll=e,e>0&&((s=(n=this.events).xp)==null||s.call(n,t.id,e))}poisonTick(t){if(t.poison<=0||t.teleporting>0){t.poisonTimer=Math.max(0,t.poisonTimer-1);return}if(--t.poisonTimer>0)return;const e=Math.ceil(t.poison/5);t.poison--,t.poisonTimer=30,this.applyHit(t,{from:t.id,damage:e,kind:"poison"})}applyHit(t,e){var o;if(t.dead)return;const n=t.level.hitpoints;t.level.hitpoints=Math.max(0,n-e.damage),this.events.hit(t.id,e),this.seen.push({kind:"splat",on:t.id,damage:e.damage,hit:e.kind});const s=this.players[e.from];if(!(!(e.kind==="melee"||e.kind==="magic")||!s||s===t)&&(!t.targetId&&!t.dest&&t.autoRetaliate&&(t.targetId=e.from,t.timers.attack=Math.ceil(Mr(t)/2)),!(e.damage<=0)&&(e.poisonChance&&t.poisonImmune<=0&&this.opts.rng()<e.poisonChance&&(t.poison<=0&&(t.poisonTimer=Math.max(1,t.poisonTimer),this.tell(t,"You have been poisoned!")),t.poison=Math.max(t.poison,20)),e.smite&&(t.level.prayer=Math.max(0,t.level.prayer-Math.floor(Math.min(e.damage,n)/4)),t.level.prayer===0&&t.prayers.size&&(t.prayers.clear(),this.tell(t,"You have run out of prayer points, you can recharge at an altar."))),t.vengeActive&&(t.vengeActive=!1,s.incoming.push({from:t.id,damage:Math.max(1,Math.floor(e.damage*.75)),kind:"venge"}),this.events.say(t.id,"Taste vengeance!")),((o=t.equip.ring)==null?void 0:o.id)==="recoil"&&t.recoilCharges>0))){const a=Math.min(Math.floor(e.damage*.1)+1,t.recoilCharges);t.recoilCharges-=a,s.incoming.push({from:t.id,damage:a,kind:"recoil"}),t.recoilCharges<=0&&(delete t.equip.ring,t.recoilCharges=40,this.tell(t,"Your Ring of Recoil has shattered."))}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="169",qd=0,$l=1,$d=2,Gh=1,Xd=2,Rn=3,Kn=0,We=1,ln=2,Xn=0,Gi=1,Xl=2,Yl=3,Kl=4,Yd=5,ai=100,Kd=101,jd=102,Zd=103,Jd=104,Qd=200,tf=201,ef=202,nf=203,jo=204,Zo=205,sf=206,rf=207,of=208,af=209,lf=210,cf=211,hf=212,uf=213,df=214,Jo=0,Qo=1,ta=2,Yi=3,ea=4,na=5,ia=6,sa=7,cl=0,ff=1,pf=2,Yn=0,mf=1,gf=2,vf=3,_f=4,xf=5,yf=6,Mf=7,Wh=300,Ki=301,ji=302,ra=303,oa=304,Or=306,Zi=1e3,ui=1001,aa=1002,ke=1003,bf=1004,Fs=1005,cn=1006,Jr=1007,di=1008,In=1009,qh=1010,$h=1011,Ss=1012,hl=1013,mi=1014,Pn=1015,As=1016,ul=1017,dl=1018,Ji=1020,Xh=35902,Yh=1021,Kh=1022,fn=1023,jh=1024,Zh=1025,Wi=1026,Qi=1027,Jh=1028,fl=1029,Qh=1030,pl=1031,ml=1033,ur=33776,dr=33777,fr=33778,pr=33779,la=35840,ca=35841,ha=35842,ua=35843,da=36196,fa=37492,pa=37496,ma=37808,ga=37809,va=37810,_a=37811,xa=37812,ya=37813,Ma=37814,ba=37815,Sa=37816,wa=37817,Ea=37818,Ta=37819,Aa=37820,Ra=37821,mr=36492,Ca=36494,Pa=36495,tu=36283,La=36284,ka=36285,Da=36286,Sf=3200,wf=3201,eu=0,Ef=1,qn="",Fe="srgb",Zn="srgb-linear",gl="display-p3",Br="display-p3-linear",Er="linear",ae="srgb",Tr="rec709",Ar="p3",Mi=7680,jl=519,Tf=512,Af=513,Rf=514,nu=515,Cf=516,Pf=517,Lf=518,kf=519,Zl=35044,Jl="300 es",Ln=2e3,Rr=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,Ia=180/Math.PI;function Rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function Df(i,t){return(i%t+t)%t}function to(i,t,e){return(1-e)*i+e*t}function rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],f=s[3],m=s[6],T=s[1],y=s[4],E=s[7],D=s[2],C=s[5],A=s[8];return r[0]=o*v+a*T+l*D,r[3]=o*f+a*y+l*C,r[6]=o*m+a*E+l*A,r[1]=c*v+h*T+u*D,r[4]=c*f+h*y+u*C,r[7]=c*m+h*E+u*A,r[2]=d*v+p*T+g*D,r[5]=d*f+p*y+g*C,r[8]=d*m+p*E+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new zt;function iu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function If(){const i=ws("canvas");return i.style.display="block",i}const Ql={};function gr(i){i in Ql||(Ql[i]=!0,console.warn(i))}function Uf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Nf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ff(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const tc=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ec=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[Zn]:{transfer:Er,primaries:Tr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Fe]:{transfer:ae,primaries:Tr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Br]:{transfer:Er,primaries:Ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ec),fromReference:i=>i.applyMatrix3(tc)},[gl]:{transfer:ae,primaries:Ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ec),fromReference:i=>i.applyMatrix3(tc).convertLinearToSRGB()}},Of=new Set([Zn,Br]),ee={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Of.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=os[t].toReference,s=os[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return os[i].primaries},getTransfer:function(i){return i===qn?Er:os[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(os[t].luminanceCoefficients)}};function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function no(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class Bf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=ws("canvas")),bi.width=t.width,bi.height=t.height;const n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qi(e[n]/255)*255):e[n]=qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hf=0;class su{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(io(s[o].image)):r.push(io(s[o]))}else r=io(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zf=0;class De extends ns{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ui,s=ui,r=cn,o=di,a=fn,l=In,c=De.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Rs(),this.name="",this.source=new su(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Wh;De.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(p+1)/2,D=(m+1)/2,C=(h+d)/4,A=(u+v)/4,N=(g+f)/4;return y>E&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=A/n):E>D?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=N/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=N/r),this.set(n,s,r,e),this}let T=Math.sqrt((f-g)*(f-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(f-g)/T,this.y=(u-v)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vf extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new su(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Vf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ru extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gf extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let f=1-a;const m=l*d+c*p+h*g+u*v,T=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const D=Math.sqrt(y),C=Math.atan2(D,m*T);f=Math.sin(f*C)/D,a=Math.sin(a*C)/D}const E=a*T;if(l=l*f+d*E,c=c*f+p*E,h=h*f+g*E,u=u*f+v*E,f===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new B,nc=new Cs;class Ps{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)),Os.applyMatrix4(t.matrixWorld),this.union(Os)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Bs.subVectors(this.max,as),Si.subVectors(t.a,as),wi.subVectors(t.b,as),Ei.subVectors(t.c,as),Fn.subVectors(wi,Si),On.subVectors(Ei,wi),Qn.subVectors(Si,Ei);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!ro(e,Si,wi,Ei,Bs)||(e=[1,0,0,0,1,0,0,0,1],!ro(e,Si,wi,Ei,Bs))?!1:(Hs.crossVectors(Fn,On),e=[Hs.x,Hs.y,Hs.z],ro(e,Si,wi,Ei,Bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new B,new B,new B,new B,new B,new B,new B,new B],nn=new B,Os=new Ps,Si=new B,wi=new B,Ei=new B,Fn=new B,On=new B,Qn=new B,as=new B,Bs=new B,Hs=new B,ti=new B;function ro(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);const a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Wf=new Ps,ls=new B,oo=new B;class Hr{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(oo)),this.expandByPoint(ls.copy(t.center).sub(oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new B,ao=new B,zs=new B,Bn=new B,lo=new B,Vs=new B,co=new B;class vl{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ao.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(ao);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zs),a=Bn.dot(this.direction),l=-Bn.dot(zs),c=Bn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ao).addScaledVector(zs,d),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){lo.subVectors(e,t),Vs.subVectors(n,t),co.crossVectors(lo,Vs);let o=this.direction.dot(co),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const l=a*this.direction.dot(Vs.crossVectors(Bn,Vs));if(l<0)return null;const c=a*this.direction.dot(lo.cross(Bn));if(c<0||l+c>o)return null;const h=-a*Bn.dot(co);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,f){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,f)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,$f)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Hn.crossVectors(n,Xe),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Hn.crossVectors(n,Xe)),Hn.normalize(),Gs.crossVectors(Xe,Hn),s[0]=Hn.x,s[4]=Gs.x,s[8]=Xe.x,s[1]=Hn.y,s[5]=Gs.y,s[9]=Xe.y,s[2]=Hn.z,s[6]=Gs.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],f=n[10],m=n[14],T=n[3],y=n[7],E=n[11],D=n[15],C=s[0],A=s[4],N=s[8],Z=s[12],x=s[1],b=s[5],z=s[9],q=s[13],j=s[2],$=s[6],H=s[10],tt=s[14],Y=s[3],yt=s[7],pt=s[11],St=s[15];return r[0]=o*C+a*x+l*j+c*Y,r[4]=o*A+a*b+l*$+c*yt,r[8]=o*N+a*z+l*H+c*pt,r[12]=o*Z+a*q+l*tt+c*St,r[1]=h*C+u*x+d*j+p*Y,r[5]=h*A+u*b+d*$+p*yt,r[9]=h*N+u*z+d*H+p*pt,r[13]=h*Z+u*q+d*tt+p*St,r[2]=g*C+v*x+f*j+m*Y,r[6]=g*A+v*b+f*$+m*yt,r[10]=g*N+v*z+f*H+m*pt,r[14]=g*Z+v*q+f*tt+m*St,r[3]=T*C+y*x+E*j+D*Y,r[7]=T*A+y*b+E*$+D*yt,r[11]=T*N+y*z+E*H+D*pt,r[15]=T*Z+y*q+E*tt+D*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+f*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],T=u*f*c-v*d*c+v*l*p-a*f*p-u*l*m+a*d*m,y=g*d*c-h*f*c-g*l*p+o*f*p+h*l*m-o*d*m,E=h*v*c-g*u*c+g*a*p-o*v*p-h*a*m+o*u*m,D=g*u*l-h*v*l-g*a*d+o*v*d+h*a*f-o*u*f,C=e*T+n*y+s*E+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=T*A,t[1]=(v*d*r-u*f*r-v*s*p+n*f*p+u*s*m-n*d*m)*A,t[2]=(a*f*r-v*l*r+v*s*c-n*f*c-a*s*m+n*l*m)*A,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*A,t[4]=y*A,t[5]=(h*f*r-g*d*r+g*s*p-e*f*p-h*s*m+e*d*m)*A,t[6]=(g*l*r-o*f*r-g*s*c+e*f*c+o*s*m-e*l*m)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*A,t[8]=E*A,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*m-e*u*m)*A,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*m+e*a*m)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*A,t[12]=D*A,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*f+e*u*f)*A,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*f-e*a*f)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,f=o*u,m=a*u,T=l*c,y=l*h,E=l*u,D=n.x,C=n.y,A=n.z;return s[0]=(1-(v+m))*D,s[1]=(p+E)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(p-E)*C,s[5]=(1-(d+m))*C,s[6]=(f+T)*C,s[7]=0,s[8]=(g+y)*A,s[9]=(f-T)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ti.set(s[0],s[1],s[2]).length();const o=Ti.set(s[4],s[5],s[6]).length(),a=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const c=1/r,h=1/o,u=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ln){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===Ln)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Rr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ln){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,v;if(a===Ln)g=(o+r)*u,v=-2*u;else if(a===Rr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new B,sn=new ce,qf=new B(0,0,0),$f=new B(1,1,1),Hn=new B,Gs=new B,Xe=new B,ic=new ce,sc=new Cs;class Mn{constructor(t=0,e=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xf=0;const rc=new B,Ai=new Cs,En=new ce,Ws=new B,cs=new B,Yf=new B,Kf=new Cs,oc=new B(1,0,0),ac=new B(0,1,0),lc=new B(0,0,1),cc={type:"added"},jf={type:"removed"},Ri={type:"childadded",child:null},ho={type:"childremoved",child:null};class Se extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new B,e=new Mn,n=new Cs,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new zt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(cs,Ws,this.up):En.lookAt(Ws,cs,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(En),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jf),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new B(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new B,Tn=new B,uo=new B,An=new B,Ci=new B,Pi=new B,hc=new B,fo=new B,po=new B,mo=new B,go=new fe,vo=new fe,_o=new fe;class hn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Tn.subVectors(n,e),uo.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(Tn),l=rn.dot(uo),c=Tn.dot(Tn),h=Tn.dot(uo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return go.setScalar(0),vo.setScalar(0),_o.setScalar(0),go.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(go,r.x),o.addScaledVector(vo,r.y),o.addScaledVector(_o,r.z),o}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Tn.subVectors(t,e),rn.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),rn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ci.subVectors(s,n),Pi.subVectors(r,n),fo.subVectors(t,n);const l=Ci.dot(fo),c=Pi.dot(fo);if(l<=0&&c<=0)return e.copy(n);po.subVectors(t,s);const h=Ci.dot(po),u=Pi.dot(po);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ci,o);mo.subVectors(t,r);const p=Ci.dot(mo),g=Pi.dot(mo);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Pi,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return hc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(hc,a);const m=1/(f+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(Ci,o).addScaledVector(Pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Df(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xo(o,r,t+1/3),this.g=xo(o,r,t),this.b=xo(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ee.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ge(Pe.r*255,0,255))*65536+Math.round(Ge(Pe.g*255,0,255))*256+Math.round(Ge(Pe.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Fe){ee.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(qs);const n=to(zn.h,qs.h,e),s=to(zn.s,qs.s,e),r=to(zn.l,qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Vt;Vt.NAMES=ou;let Zf=0;class is extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=Gi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Zo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $i extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new B,$s=new Kt;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}}class au extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lu extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pn extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jf=0;const je=new ce,yo=new Se,Li=new B,Ye=new Ps,hs=new Ps,be=new B;class tn extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iu(t)?lu:au)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return yo.lookAt(t),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Ye.min,hs.min),Ye.expandByPoint(be),be.addVectors(Ye.max,hs.max),Ye.expandByPoint(be)):(Ye.expandByPoint(hs.min),Ye.expandByPoint(hs.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(t,c),be.add(Li)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new B,l[N]=new B;const c=new B,h=new B,u=new B,d=new Kt,p=new Kt,g=new Kt,v=new B,f=new B;function m(N,Z,x){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,Z),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(b),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),a[N].add(v),a[Z].add(v),a[x].add(v),l[N].add(f),l[Z].add(f),l[x].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,Z=T.length;N<Z;++N){const x=T[N],b=x.start,z=x.count;for(let q=b,j=b+z;q<j;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const y=new B,E=new B,D=new B,C=new B;function A(N){D.fromBufferAttribute(s,N),C.copy(D);const Z=a[N];y.copy(Z),y.sub(D.multiplyScalar(D.dot(Z))).normalize(),E.crossVectors(C,Z);const b=E.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,b)}for(let N=0,Z=T.length;N<Z;++N){const x=T[N],b=x.start,z=x.count;for(let q=b,j=b+z;q<j;q+=3)A(t.getX(q+0)),A(t.getX(q+1)),A(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new ce,ei=new vl,Xs=new Hr,dc=new B,Ys=new B,Ks=new B,js=new B,Mo=new B,Zs=new B,fc=new B,Js=new B;class Le extends Se{constructor(t=new tn,e=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Mo.fromBufferAttribute(u,t),o?Zs.addScaledVector(Mo,h):Zs.addScaledVector(Mo.sub(e),h))}e.add(Zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Xs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Xs,dc)===null||ei.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(uc.copy(r).invert(),ei.copy(t.ray).applyMatrix4(uc),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const f=d[g],m=o[f.materialIndex],T=Math.max(f.start,p.start),y=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let E=T,D=y;E<D;E+=3){const C=a.getX(E),A=a.getX(E+1),N=a.getX(E+2);s=Qs(this,m,t,n,c,h,u,C,A,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const T=a.getX(f),y=a.getX(f+1),E=a.getX(f+2);s=Qs(this,o,t,n,c,h,u,T,y,E),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const f=d[g],m=o[f.materialIndex],T=Math.max(f.start,p.start),y=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=T,D=y;E<D;E+=3){const C=E,A=E+1,N=E+2;s=Qs(this,m,t,n,c,h,u,C,A,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const T=f,y=f+1,E=f+2;s=Qs(this,o,t,n,c,h,u,T,y,E),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Qf(i,t,e,n,s,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Kn,a),l===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:i}}function Qs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ys),i.getVertexPosition(l,Ks),i.getVertexPosition(c,js);const h=Qf(i,t,e,n,Ys,Ks,js,fc);if(h){const u=new B;hn.getBarycoord(fc,Ys,Ks,js,u),s&&(h.uv=hn.getInterpolatedAttribute(s,a,l,c,u,new Kt)),r&&(h.uv1=hn.getInterpolatedAttribute(r,a,l,c,u,new Kt)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};hn.getNormal(Ys,Ks,js,d.normal),h.face=d,h.barycoord=u}return h}class Ls extends tn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(u,2));function g(v,f,m,T,y,E,D,C,A,N,Z){const x=E/A,b=D/N,z=E/2,q=D/2,j=C/2,$=A+1,H=N+1;let tt=0,Y=0;const yt=new B;for(let pt=0;pt<H;pt++){const St=pt*b-q;for(let Wt=0;Wt<$;Wt++){const $t=Wt*x-z;yt[v]=$t*T,yt[f]=St*y,yt[m]=j,c.push(yt.x,yt.y,yt.z),yt[v]=0,yt[f]=0,yt[m]=C>0?1:-1,h.push(yt.x,yt.y,yt.z),u.push(Wt/A),u.push(1-pt/N),tt+=1}}for(let pt=0;pt<N;pt++)for(let St=0;St<A;St++){const Wt=d+St+$*pt,$t=d+St+$*(pt+1),w=d+(St+1)+$*(pt+1),k=d+(St+1)+$*pt;l.push(Wt,$t,k),l.push($t,w,k),Y+=6}a.addGroup(p,Y,Z),p+=Y,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=ts(i[e]);for(const s in n)t[s]=n[s]}return t}function tp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const ep={clone:ts,merge:Ue};var np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hu extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new B,pc=new Kt,mc=new Kt;class Ze extends hu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,pc,mc),e.subVectors(mc,pc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Di=1;class sp extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(ki,Di,t,e);s.layers=this.layers,this.add(s);const r=new Ze(ki,Di,t,e);r.layers=this.layers,this.add(r);const o=new Ze(ki,Di,t,e);o.layers=this.layers,this.add(o);const a=new Ze(ki,Di,t,e);a.layers=this.layers,this.add(a);const l=new Ze(ki,Di,t,e);l.layers=this.layers,this.add(l);const c=new Ze(ki,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uu extends De{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rp extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ls(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Xn});r.uniforms.tEquirect.value=e;const o=new Le(s,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=cn),new sp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const bo=new B,op=new B,ap=new zt;class Wn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=bo.subVectors(n,e).cross(op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ap.getNormalMatrix(t),s=this.coplanarPoint(bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Hr,tr=new B;class xl{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],f=s[11],m=s[12],T=s[13],y=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,f-p,E-m).normalize(),n[1].setComponents(l+r,d+c,f+p,E+m).normalize(),n[2].setComponents(l+o,d+h,f+g,E+T).normalize(),n[3].setComponents(l-o,d-h,f-g,E-T).normalize(),n[4].setComponents(l-a,d-u,f-v,E-y).normalize(),e===Ln)n[5].setComponents(l+a,d+u,f+v,E+y).normalize();else if(e===Rr)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function du(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class vi extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],f=[];for(let m=0;m<h;m++){const T=m*d-o;for(let y=0;y<c;y++){const E=y*u-r;g.push(E,-T,0),v.push(0,0,1),f.push(y/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){const y=T+c*m,E=T+c*(m+1),D=T+1+c*(m+1),C=T+1+c*m;p.push(y,E,C),p.push(E,D,C)}this.setIndex(p),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.widthSegments,t.heightSegments)}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ig=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:vp,batching_vertex:_p,begin_vertex:xp,beginnormal_vertex:yp,bsdfs:Mp,iridescence_fragment:bp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Lp,common:kp,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:Hp,envmap_fragment:zp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Gp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:em,envmap_vertex:qp,fog_vertex:$p,fog_pars_vertex:Xp,fog_fragment:Yp,fog_pars_fragment:Kp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:tm,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:om,lights_physical_pars_fragment:am,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:hm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:vm,map_particle_pars_fragment:_m,metalnessmap_fragment:xm,metalnessmap_pars_fragment:ym,morphinstance_vertex:Mm,morphcolor_vertex:bm,morphnormal_vertex:Sm,morphtarget_pars_vertex:wm,morphtarget_vertex:Em,normal_fragment_begin:Tm,normal_fragment_maps:Am,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:Bm,dithering_fragment:Hm,dithering_pars_fragment:zm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:qm,shadowmap_vertex:$m,shadowmask_pars_fragment:Xm,skinbase_vertex:Ym,skinning_pars_vertex:Km,skinning_vertex:jm,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:Qm,tonemapping_fragment:tg,tonemapping_pars_fragment:eg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:og,worldpos_vertex:ag,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:vg,equirect_vert:_g,equirect_frag:xg,linedashed_vert:yg,linedashed_frag:Mg,meshbasic_vert:bg,meshbasic_frag:Sg,meshlambert_vert:wg,meshlambert_frag:Eg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Lg,meshphysical_vert:kg,meshphysical_frag:Dg,meshtoon_vert:Ig,meshtoon_frag:Ug,points_vert:Ng,points_frag:Fg,shadow_vert:Og,shadow_frag:Bg,sprite_vert:Hg,sprite_frag:zg},ut={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},yn={basic:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ue([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ue([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ue([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ue([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ue([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ue([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ue([ut.common,ut.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ue([ut.lights,ut.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};yn.physical={uniforms:Ue([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const er={r:0,b:0,g:0},ii=new Mn,Vg=new ce;function Gg(i,t,e,n,s,r,o){const a=new Vt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?e:t).get(y)),y}function v(T){let y=!1;const E=g(T);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(T,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===Or)?(h===void 0&&(h=new Le(new Ls(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:ts(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(y.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(ii)),h.material.toneMapped=ee.getTransfer(E.colorSpace)!==ae,(u!==E||d!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Le(new vi(2,2),new jn({name:"BackgroundMaterial",uniforms:ts(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ee.getTransfer(E.colorSpace)!==ae,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,y){T.getRGB(er,cu(i)),n.buffers.color.setClear(er.r,er.g,er.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(a,l)},render:v,addToRenderList:f}}function Wg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,b,z,q,j){let $=!1;const H=u(q,z,b);r!==H&&(r=H,c(r.object)),$=p(x,q,z,j),$&&g(x,q,z,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(x,b,z,q),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,b,z){const q=z.wireframe===!0;let j=n[x.id];j===void 0&&(j={},n[x.id]=j);let $=j[b.id];$===void 0&&($={},j[b.id]=$);let H=$[q];return H===void 0&&(H=d(l()),$[q]=H),H}function d(x){const b=[],z=[],q=[];for(let j=0;j<e;j++)b[j]=0,z[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:q,object:x,attributes:{},index:null}}function p(x,b,z,q){const j=r.attributes,$=b.attributes;let H=0;const tt=z.getAttributes();for(const Y in tt)if(tt[Y].location>=0){const pt=j[Y];let St=$[Y];if(St===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(St=x.instanceColor)),pt===void 0||pt.attribute!==St||St&&pt.data!==St.data)return!0;H++}return r.attributesNum!==H||r.index!==q}function g(x,b,z,q){const j={},$=b.attributes;let H=0;const tt=z.getAttributes();for(const Y in tt)if(tt[Y].location>=0){let pt=$[Y];pt===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor));const St={};St.attribute=pt,pt&&pt.data&&(St.data=pt.data),j[Y]=St,H++}r.attributes=j,r.attributesNum=H,r.index=q}function v(){const x=r.newAttributes;for(let b=0,z=x.length;b<z;b++)x[b]=0}function f(x){m(x,0)}function m(x,b){const z=r.newAttributes,q=r.enabledAttributes,j=r.attributeDivisors;z[x]=1,q[x]===0&&(i.enableVertexAttribArray(x),q[x]=1),j[x]!==b&&(i.vertexAttribDivisor(x,b),j[x]=b)}function T(){const x=r.newAttributes,b=r.enabledAttributes;for(let z=0,q=b.length;z<q;z++)b[z]!==x[z]&&(i.disableVertexAttribArray(z),b[z]=0)}function y(x,b,z,q,j,$,H){H===!0?i.vertexAttribIPointer(x,b,z,j,$):i.vertexAttribPointer(x,b,z,q,j,$)}function E(x,b,z,q){v();const j=q.attributes,$=z.getAttributes(),H=b.defaultAttributeValues;for(const tt in $){const Y=$[tt];if(Y.location>=0){let yt=j[tt];if(yt===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor)),yt!==void 0){const pt=yt.normalized,St=yt.itemSize,Wt=t.get(yt);if(Wt===void 0)continue;const $t=Wt.buffer,w=Wt.type,k=Wt.bytesPerElement,W=w===i.INT||w===i.UNSIGNED_INT||yt.gpuType===hl;if(yt.isInterleavedBufferAttribute){const et=yt.data,ot=et.stride,st=yt.offset;if(et.isInstancedInterleavedBuffer){for(let ct=0;ct<Y.locationSize;ct++)m(Y.location+ct,et.meshPerAttribute);x.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ct=0;ct<Y.locationSize;ct++)f(Y.location+ct);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ct=0;ct<Y.locationSize;ct++)y(Y.location+ct,St/Y.locationSize,w,pt,ot*k,(st+St/Y.locationSize*ct)*k,W)}else{if(yt.isInstancedBufferAttribute){for(let et=0;et<Y.locationSize;et++)m(Y.location+et,yt.meshPerAttribute);x.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let et=0;et<Y.locationSize;et++)f(Y.location+et);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let et=0;et<Y.locationSize;et++)y(Y.location+et,St/Y.locationSize,w,pt,St*k,St/Y.locationSize*et*k,W)}}else if(H!==void 0){const pt=H[tt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(Y.location,pt);break;case 3:i.vertexAttrib3fv(Y.location,pt);break;case 4:i.vertexAttrib4fv(Y.location,pt);break;default:i.vertexAttrib1fv(Y.location,pt)}}}}T()}function D(){N();for(const x in n){const b=n[x];for(const z in b){const q=b[z];for(const j in q)h(q[j].object),delete q[j];delete b[z]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const b=n[x.id];for(const z in b){const q=b[z];for(const j in q)h(q[j].object),delete q[j];delete b[z]}delete n[x.id]}function A(x){for(const b in n){const z=n[b];if(z[x.id]===void 0)continue;const q=z[x.id];for(const j in q)h(q[j].object),delete q[j];delete z[x.id]}}function N(){Z(),o=!0,r!==s&&(r=s,c(r.object))}function Z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:Z,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:f,disableUnusedAttributes:T}}function qg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $g(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===As&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==In&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!N)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:D,maxSamples:C}}function Xg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Wn,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{const T=r?0:n,y=T*4;let E=m.clippingState||null;l.value=E,E=h(g,d,y,p);for(let D=0;D!==y;++D)E[D]=e[D];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const m=p+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(f===null||f.length<m)&&(f=new Float32Array(m));for(let y=0,E=p;y!==v;++y,E+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Yg(i){let t=new WeakMap;function e(o,a){return a===ra?o.mapping=Ki:a===oa&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ra||a===oa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rp(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class fu extends hu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,gc=[.125,.215,.35,.446,.526,.582],li=20,So=new fu,vc=new Vt;let wo=null,Eo=0,To=0,Ao=!1;const oi=(1+Math.sqrt(5))/2,Ii=1/oi,_c=[new B(-oi,Ii,0),new B(oi,Ii,0),new B(-Ii,0,oi),new B(Ii,0,oi),new B(0,oi,-Ii),new B(0,oi,Ii),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){wo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,Eo,To),this._renderer.xr.enabled=Ao,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:As,format:fn,colorSpace:Zn,depthBuffer:!1},s=yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(r)),this._blurMaterial=jg(r,t,e)}return s}_compileMaterial(t){const e=new Le(this._lodPlanes[0],t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,n,s){const a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vc),h.toneMapping=Yn,h.autoClear=!1;const p=new $i({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Le(new Ls,p);let v=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,v=!0):(p.color.copy(vc),v=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):T===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;nr(s,T*y,m>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ki||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,So)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_c[(s-r-1)%_c.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Le(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),v=r/g,f=isFinite(r)?1+Math.floor(h*v):li;f>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${li}`);const m=[];let T=0;for(let A=0;A<li;++A){const N=A/v,Z=Math.exp(-N*N/2);m.push(Z),A===0?T+=Z:A<f&&(T+=2*Z)}for(let A=0;A<m.length;A++)m[A]=m[A]/T;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const E=this._sizeLods[s],D=3*E*(s>y-zi?s-y+zi:0),C=4*(this._cubeSize-E);nr(e,D,C,3*E,2*E),l.setRenderTarget(e),l.render(u,So)}}function Kg(i){const t=[],e=[],n=[];let s=i;const r=i-zi+1+gc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-zi?l=gc[o-i+zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,f=2,m=1,T=new Float32Array(v*g*p),y=new Float32Array(f*g*p),E=new Float32Array(m*g*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,N=C>2?0:-1,Z=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];T.set(Z,v*g*C),y.set(d,f*g*C);const x=[C,C,C,C,C,C];E.set(x,m*g*C)}const D=new tn;D.setAttribute("position",new Re(T,v)),D.setAttribute("uv",new Re(y,f)),D.setAttribute("faceIndex",new Re(E,m)),t.push(D),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yc(i,t,e){const n=new gi(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jg(i,t,e){const n=new Float32Array(li),s=new B(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Mc(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function bc(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ra||l===oa,h=l===Ki||l===ji;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new xc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new xc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Jg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let f=0,m=v.length;f<m;f++)t.update(v[f],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let y=0,E=T.length;y<E;y+=3){const D=T[y+0],C=T[y+1],A=T[y+2];d.push(D,C,C,A,A,D)}}else if(g!==void 0){const T=g.array;v=g.version;for(let y=0,E=T.length/3-1;y<E;y+=3){const D=y+0,C=y+1,A=y+2;d.push(D,C,C,A,A,D)}}else return;const f=new(iu(d)?lu:au)(d,1);f.version=v;const m=r.get(u);m&&t.remove(m),r.set(u,f)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function t0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function u(d,p,g,v){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],v[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let m=0;for(let T=0;T<g;T++)m+=p[T];for(let T=0;T<v.length;T++)e.update(m,n,v[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function e0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function n0(i,t,e){const n=new WeakMap,s=new fe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),f===!0&&(E=3);let D=a.attributes.position.count*E,C=1;D>t.maxTextureSize&&(C=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*C*4*u),N=new ru(A,D,C,u);N.type=Pn,N.needsUpdate=!0;const Z=E*4;for(let b=0;b<u;b++){const z=m[b],q=T[b],j=y[b],$=D*C*4*b;for(let H=0;H<z.count;H++){const tt=H*Z;g===!0&&(s.fromBufferAttribute(z,H),A[$+tt+0]=s.x,A[$+tt+1]=s.y,A[$+tt+2]=s.z,A[$+tt+3]=0),v===!0&&(s.fromBufferAttribute(q,H),A[$+tt+4]=s.x,A[$+tt+5]=s.y,A[$+tt+6]=s.z,A[$+tt+7]=0),f===!0&&(s.fromBufferAttribute(j,H),A[$+tt+8]=s.x,A[$+tt+9]=s.y,A[$+tt+10]=s.z,A[$+tt+11]=j.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new Kt(D,C)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function i0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class pu extends De{constructor(t,e,n,s,r,o,a,l,c,h=Wi){if(h!==Wi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wi&&(n=mi),n===void 0&&h===Qi&&(n=Ji),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mu=new De,Sc=new pu(1,1),gu=new ru,vu=new Gf,_u=new uu,wc=[],Ec=[],Tc=new Float32Array(16),Ac=new Float32Array(9),Rc=new Float32Array(4);function ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=wc[s];if(r===void 0&&(r=new Float32Array(s),wc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=Ec[t];e===void 0&&(e=new Int32Array(t),Ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function l0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),Me(e,n)}}function c0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Ac.set(n),i.uniformMatrix3fv(this.addr,!1,Ac),Me(e,n)}}function h0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Tc.set(n),i.uniformMatrix4fv(this.addr,!1,Tc),Me(e,n)}}function u0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function m0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function x0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sc.compareFunction=nu,r=Sc):r=mu,e.setTexture2D(t||r,s)}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vu,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_u,s)}function b0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gu,s)}function S0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return v0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return b0}}function w0(i,t){i.uniform1fv(this.addr,t)}function E0(i,t){const e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function T0(i,t){const e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function A0(i,t){const e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function R0(i,t){const e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C0(i,t){const e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P0(i,t){const e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L0(i,t){i.uniform1iv(this.addr,t)}function k0(i,t){i.uniform2iv(this.addr,t)}function D0(i,t){i.uniform3iv(this.addr,t)}function I0(i,t){i.uniform4iv(this.addr,t)}function U0(i,t){i.uniform1uiv(this.addr,t)}function N0(i,t){i.uniform2uiv(this.addr,t)}function F0(i,t){i.uniform3uiv(this.addr,t)}function O0(i,t){i.uniform4uiv(this.addr,t)}function B0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||mu,r[o])}function H0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vu,r[o])}function z0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_u,r[o])}function V0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gu,r[o])}function G0(i){switch(i){case 5126:return w0;case 35664:return E0;case 35665:return T0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return k0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return U0;case 36294:return N0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return V0}}class W0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S0(e.type)}}class q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G0(e.type)}}class $0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ro=/(\w+)(\])?(\[|\.)?/g;function Cc(i,t){i.seq.push(t),i.map[t.id]=t}function X0(i,t,e){const n=i.name,s=n.length;for(Ro.lastIndex=0;;){const r=Ro.exec(n),o=Ro.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cc(e,c===void 0?new W0(a,i,t):new q0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new $0(a),Cc(e,u)),e=u}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);X0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Y0=37297;let K0=0;function j0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Z0(i){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(i);let n;switch(t===e?n="":t===Ar&&e===Tr?n="LinearDisplayP3ToLinearSRGB":t===Tr&&e===Ar&&(n="LinearSRGBToLinearDisplayP3"),i){case Zn:case Br:return[n,"LinearTransferOETF"];case Fe:case gl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Lc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+j0(i.getShaderSource(t),o)}else return s}function J0(i,t){const e=Z0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Q0(i,t){let e;switch(t){case mf:e="Linear";break;case gf:e="Reinhard";break;case vf:e="Cineon";break;case _f:e="ACESFilmic";break;case yf:e="AgX";break;case Mf:e="Neutral";break;case xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new B;function tv(){ee.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function nv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ms(i){return i!==""}function kc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(sv,ov)}const rv=new Map;function ov(i,t){let e=Ht[t];if(e===void 0){const n=rv.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ua(e)}const av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(av,lv)}function lv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function hv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case ji:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function dv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cl:t="ENVMAP_BLENDING_MULTIPLY";break;case ff:t="ENVMAP_BLENDING_MIX";break;case pf:t="ENVMAP_BLENDING_ADD";break}return t}function fv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=cv(e),c=hv(e),h=uv(e),u=dv(e),d=fv(e),p=ev(e),g=nv(r),v=s.createProgram();let f,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`)):(f=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),m=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,J0("linearToOutputTexel",e.outputColorSpace),tv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),o=Ua(o),o=kc(o,e),o=Dc(o,e),a=Ua(a),a=kc(a,e),a=Dc(a,e),o=Ic(o),a=Ic(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=T+f+o,E=T+m+a,D=Pc(s,s.VERTEX_SHADER,y),C=Pc(s,s.FRAGMENT_SHADER,E);s.attachShader(v,D),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(b){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),q=s.getShaderInfoLog(D).trim(),j=s.getShaderInfoLog(C).trim();let $=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,C);else{const tt=Lc(s,D,"vertex"),Y=Lc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+tt+`
`+Y)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(q===""||j==="")&&(H=!1);H&&(b.diagnostics={runnable:$,programLog:z,vertexShader:{log:q,prefix:f},fragmentShader:{log:j,prefix:m}})}s.deleteShader(D),s.deleteShader(C),N=new vr(s,v),Z=iv(s,v)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let Z;this.getAttributes=function(){return Z===void 0&&A(this),Z};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Y0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=K0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=C,this}let mv=0;class gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vv(t),e.set(t,n)),n}}class vv{constructor(t){this.id=mv++,this.code=t,this.usedTimes=0}}function _v(i,t,e,n,s,r,o){const a=new _l,l=new gv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,b,z,q,j){const $=q.fog,H=j.geometry,tt=x.isMeshStandardMaterial?q.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||tt),yt=Y&&Y.mapping===Or?Y.image.height:null,pt=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const St=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Wt=St!==void 0?St.length:0;let $t=0;H.morphAttributes.position!==void 0&&($t=1),H.morphAttributes.normal!==void 0&&($t=2),H.morphAttributes.color!==void 0&&($t=3);let w,k,W,et;if(pt){const Be=yn[pt];w=Be.vertexShader,k=Be.fragmentShader}else w=x.vertexShader,k=x.fragmentShader,l.update(x),W=l.getVertexShaderID(x),et=l.getFragmentShaderID(x);const ot=i.getRenderTarget(),st=j.isInstancedMesh===!0,ct=j.isBatchedMesh===!0,Mt=!!x.map,dt=!!x.matcap,P=!!Y,le=!!x.aoMap,Ft=!!x.lightMap,Ot=!!x.bumpMap,Pt=!!x.normalMap,I=!!x.displacementMap,J=!!x.emissiveMap,S=!!x.metalnessMap,_=!!x.roughnessMap,O=x.anisotropy>0,V=x.clearcoat>0,nt=x.dispersion>0,Q=x.iridescence>0,Et=x.sheen>0,ht=x.transmission>0,vt=O&&!!x.anisotropyMap,Gt=V&&!!x.clearcoatMap,at=V&&!!x.clearcoatNormalMap,mt=V&&!!x.clearcoatRoughnessMap,Dt=Q&&!!x.iridescenceMap,wt=Q&&!!x.iridescenceThicknessMap,ft=Et&&!!x.sheenColorMap,qt=Et&&!!x.sheenRoughnessMap,Nt=!!x.specularMap,Xt=!!x.specularColorMap,L=!!x.specularIntensityMap,gt=ht&&!!x.transmissionMap,K=ht&&!!x.thicknessMap,it=!!x.gradientMap,_t=!!x.alphaMap,bt=x.alphaTest>0,Yt=!!x.alphaHash,ge=!!x.extensions;let Oe=Yn;x.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const Zt={shaderID:pt,shaderType:x.type,shaderName:x.name,vertexShader:w,fragmentShader:k,defines:x.defines,customVertexShaderID:W,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ct,batchingColor:ct&&j._colorsTexture!==null,instancing:st,instancingColor:st&&j.instanceColor!==null,instancingMorph:st&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Zn,alphaToCoverage:!!x.alphaToCoverage,map:Mt,matcap:dt,envMap:P,envMapMode:P&&Y.mapping,envMapCubeUVHeight:yt,aoMap:le,lightMap:Ft,bumpMap:Ot,normalMap:Pt,displacementMap:p&&I,emissiveMap:J,normalMapObjectSpace:Pt&&x.normalMapType===Ef,normalMapTangentSpace:Pt&&x.normalMapType===eu,metalnessMap:S,roughnessMap:_,anisotropy:O,anisotropyMap:vt,clearcoat:V,clearcoatMap:Gt,clearcoatNormalMap:at,clearcoatRoughnessMap:mt,dispersion:nt,iridescence:Q,iridescenceMap:Dt,iridescenceThicknessMap:wt,sheen:Et,sheenColorMap:ft,sheenRoughnessMap:qt,specularMap:Nt,specularColorMap:Xt,specularIntensityMap:L,transmission:ht,transmissionMap:gt,thicknessMap:K,gradientMap:it,opaque:x.transparent===!1&&x.blending===Gi&&x.alphaToCoverage===!1,alphaMap:_t,alphaTest:bt,alphaHash:Yt,combine:x.combine,mapUv:Mt&&f(x.map.channel),aoMapUv:le&&f(x.aoMap.channel),lightMapUv:Ft&&f(x.lightMap.channel),bumpMapUv:Ot&&f(x.bumpMap.channel),normalMapUv:Pt&&f(x.normalMap.channel),displacementMapUv:I&&f(x.displacementMap.channel),emissiveMapUv:J&&f(x.emissiveMap.channel),metalnessMapUv:S&&f(x.metalnessMap.channel),roughnessMapUv:_&&f(x.roughnessMap.channel),anisotropyMapUv:vt&&f(x.anisotropyMap.channel),clearcoatMapUv:Gt&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:qt&&f(x.sheenRoughnessMap.channel),specularMapUv:Nt&&f(x.specularMap.channel),specularColorMapUv:Xt&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:gt&&f(x.transmissionMap.channel),thicknessMapUv:K&&f(x.thicknessMap.channel),alphaMapUv:_t&&f(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pt||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!H.attributes.uv&&(Mt||_t),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:$t,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function T(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)b.push(z),b.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(y(b,x),E(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function D(x){const b=v[x.type];let z;if(b){const q=yn[b];z=ep.clone(q.uniforms)}else z=x.uniforms;return z}function C(x,b){let z;for(let q=0,j=h.length;q<j;q++){const $=h[q];if($.cacheKey===b){z=$,++z.usedTimes;break}}return z===void 0&&(z=new pv(i,b,x,r),h.push(z)),z}function A(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function N(x){l.remove(x)}function Z(){l.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:D,acquireProgram:C,releaseProgram:A,releaseShaderCache:N,programs:h,dispose:Z}}function xv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function yv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,v,f){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:f},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=f),t++,m}function a(u,d,p,g,v,f){const m=o(u,d,p,g,v,f);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(u,d,p,g,v,f){const m=o(u,d,p,g,v,f);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||yv),n.length>1&&n.sort(d||Nc),s.length>1&&s.sort(d||Nc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Mv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Fc,i.set(n,[o])):s>=r.length?(o=new Fc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function bv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Vt};break;case"SpotLight":e={position:new B,direction:new B,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Sv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wv=0;function Ev(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tv(i){const t=new bv,e=Sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new ce,o=new ce;function a(c){let h=0,u=0,d=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,T=0,y=0,E=0,D=0,C=0,A=0;c.sort(Ev);for(let Z=0,x=c.length;Z<x;Z++){const b=c[Z],z=b.color,q=b.intensity,j=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=z.r*q,u+=z.g*q,d+=z.b*q;else if(b.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(b.sh.coefficients[H],q);A++}else if(b.isDirectionalLight){const H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const tt=b.shadow,Y=e.get(b);Y.shadowIntensity=tt.intensity,Y.shadowBias=tt.bias,Y.shadowNormalBias=tt.normalBias,Y.shadowRadius=tt.radius,Y.shadowMapSize=tt.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=b.shadow.matrix,T++}n.directional[p]=H,p++}else if(b.isSpotLight){const H=t.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(z).multiplyScalar(q),H.distance=j,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,n.spot[v]=H;const tt=b.shadow;if(b.map&&(n.spotLightMap[D]=b.map,D++,tt.updateMatrices(b),b.castShadow&&C++),n.spotLightMatrix[v]=tt.matrix,b.castShadow){const Y=e.get(b);Y.shadowIntensity=tt.intensity,Y.shadowBias=tt.bias,Y.shadowNormalBias=tt.normalBias,Y.shadowRadius=tt.radius,Y.shadowMapSize=tt.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=$,E++}v++}else if(b.isRectAreaLight){const H=t.get(b);H.color.copy(z).multiplyScalar(q),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),n.rectArea[f]=H,f++}else if(b.isPointLight){const H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){const tt=b.shadow,Y=e.get(b);Y.shadowIntensity=tt.intensity,Y.shadowBias=tt.bias,Y.shadowNormalBias=tt.normalBias,Y.shadowRadius=tt.radius,Y.shadowMapSize=tt.mapSize,Y.shadowCameraNear=tt.camera.near,Y.shadowCameraFar=tt.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=H,g++}else if(b.isHemisphereLight){const H=t.get(b);H.skyColor.copy(b.color).multiplyScalar(q),H.groundColor.copy(b.groundColor).multiplyScalar(q),n.hemi[m]=H,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==f||N.hemiLength!==m||N.numDirectionalShadows!==T||N.numPointShadows!==y||N.numSpotShadows!==E||N.numSpotMaps!==D||N.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=f,N.hemiLength=m,N.numDirectionalShadows=T,N.numPointShadows=y,N.numSpotShadows=E,N.numSpotMaps=D,N.numLightProbes=A,n.version=wv++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const f=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){const y=c[m];if(y.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(y.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),p++}else if(y.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(y.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),v++}}}return{setup:a,setupView:l,state:n}}function Oc(i){const t=new Tv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Av(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Oc(i),t.set(s,[a])):r>=o.length?(a=new Oc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Rv extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cv extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kv(i,t,e){let n=new xl;const s=new Kt,r=new Kt,o=new fe,a=new Rv({depthPacking:wf}),l=new Cv,c={},h=e.maxTextureSize,u={[Kn]:We,[We]:Kn,[ln]:ln},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Pv,fragmentShader:Lv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Le(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let m=this.type;this.render=function(C,A,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const Z=i.getRenderTarget(),x=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=m!==Rn&&this.type===Rn,j=m===Rn&&this.type!==Rn;for(let $=0,H=C.length;$<H;$++){const tt=C[$],Y=tt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const yt=Y.getFrameExtents();if(s.multiply(yt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,Y.mapSize.y=r.y)),Y.map===null||q===!0||j===!0){const St=this.type!==Rn?{minFilter:ke,magFilter:ke}:{};Y.map!==null&&Y.map.dispose(),Y.map=new gi(s.x,s.y,St),Y.map.texture.name=tt.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const pt=Y.getViewportCount();for(let St=0;St<pt;St++){const Wt=Y.getViewport(St);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),z.viewport(o),Y.updateMatrices(tt,St),n=Y.getFrustum(),E(A,N,Y.camera,tt,this.type)}Y.isPointLightShadow!==!0&&this.type===Rn&&T(Y,N),Y.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(Z,x,b)};function T(C,A){const N=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,N,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,N,p,v,null)}function y(C,A,N,Z){let x=null;const b=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)x=b;else if(x=N.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=x.uuid,q=A.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let $=j[q];$===void 0&&($=x.clone(),j[q]=$,A.addEventListener("dispose",D)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,Z===Rn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=i.properties.get(x);z.light=N}return x}function E(C,A,N,Z,x){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Rn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const q=t.update(C),j=C.material;if(Array.isArray(j)){const $=q.groups;for(let H=0,tt=$.length;H<tt;H++){const Y=$[H],yt=j[Y.materialIndex];if(yt&&yt.visible){const pt=y(C,yt,Z,x);C.onBeforeShadow(i,C,A,N,q,pt,Y),i.renderBufferDirect(N,null,q,pt,C,Y),C.onAfterShadow(i,C,A,N,q,pt,Y)}}}else if(j.visible){const $=y(C,j,Z,x);C.onBeforeShadow(i,C,A,N,q,$,null),i.renderBufferDirect(N,null,q,$,C,null),C.onAfterShadow(i,C,A,N,q,$,null)}}const z=C.children;for(let q=0,j=z.length;q<j;q++)E(z[q],A,N,Z,x)}function D(C){C.target.removeEventListener("dispose",D);for(const N in c){const Z=c[N],x=C.target.uuid;x in Z&&(Z[x].dispose(),delete Z[x])}}}const Dv={[Jo]:Qo,[ta]:ia,[ea]:sa,[Yi]:na,[Qo]:Jo,[ia]:ta,[sa]:ea,[na]:Yi};function Iv(i){function t(){let L=!1;const gt=new fe;let K=null;const it=new fe(0,0,0,0);return{setMask:function(_t){K!==_t&&!L&&(i.colorMask(_t,_t,_t,_t),K=_t)},setLocked:function(_t){L=_t},setClear:function(_t,bt,Yt,ge,Oe){Oe===!0&&(_t*=ge,bt*=ge,Yt*=ge),gt.set(_t,bt,Yt,ge),it.equals(gt)===!1&&(i.clearColor(_t,bt,Yt,ge),it.copy(gt))},reset:function(){L=!1,K=null,it.set(-1,0,0,0)}}}function e(){let L=!1,gt=!1,K=null,it=null,_t=null;return{setReversed:function(bt){gt=bt},setTest:function(bt){bt?W(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(bt){K!==bt&&!L&&(i.depthMask(bt),K=bt)},setFunc:function(bt){if(gt&&(bt=Dv[bt]),it!==bt){switch(bt){case Jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=bt}},setLocked:function(bt){L=bt},setClear:function(bt){_t!==bt&&(i.clearDepth(bt),_t=bt)},reset:function(){L=!1,K=null,it=null,_t=null}}}function n(){let L=!1,gt=null,K=null,it=null,_t=null,bt=null,Yt=null,ge=null,Oe=null;return{setTest:function(Zt){L||(Zt?W(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(Zt){gt!==Zt&&!L&&(i.stencilMask(Zt),gt=Zt)},setFunc:function(Zt,Be,bn){(K!==Zt||it!==Be||_t!==bn)&&(i.stencilFunc(Zt,Be,bn),K=Zt,it=Be,_t=bn)},setOp:function(Zt,Be,bn){(bt!==Zt||Yt!==Be||ge!==bn)&&(i.stencilOp(Zt,Be,bn),bt=Zt,Yt=Be,ge=bn)},setLocked:function(Zt){L=Zt},setClear:function(Zt){Oe!==Zt&&(i.clearStencil(Zt),Oe=Zt)},reset:function(){L=!1,gt=null,K=null,it=null,_t=null,bt=null,Yt=null,ge=null,Oe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,f=null,m=null,T=null,y=null,E=null,D=null,C=new Vt(0,0,0),A=0,N=!1,Z=null,x=null,b=null,z=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=H>=1):tt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=H>=2);let Y=null,yt={};const pt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Wt=new fe().fromArray(pt),$t=new fe().fromArray(St);function w(L,gt,K,it){const _t=new Uint8Array(4),bt=i.createTexture();i.bindTexture(L,bt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<K;Yt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(gt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return bt}const k={};k[i.TEXTURE_2D]=w(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=w(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=w(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=w(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),W(i.DEPTH_TEST),r.setFunc(Yi),Ft(!1),Ot($l),W(i.CULL_FACE),P(Xn);function W(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function et(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function ot(L,gt){return h[L]!==gt?(i.bindFramebuffer(L,gt),h[L]=gt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function st(L,gt){let K=d,it=!1;if(L){K=u.get(gt),K===void 0&&(K=[],u.set(gt,K));const _t=L.textures;if(K.length!==_t.length||K[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Yt=_t.length;bt<Yt;bt++)K[bt]=i.COLOR_ATTACHMENT0+bt;K.length=_t.length,it=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,it=!0);it&&i.drawBuffers(K)}function ct(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const Mt={[ai]:i.FUNC_ADD,[Kd]:i.FUNC_SUBTRACT,[jd]:i.FUNC_REVERSE_SUBTRACT};Mt[Zd]=i.MIN,Mt[Jd]=i.MAX;const dt={[Qd]:i.ZERO,[tf]:i.ONE,[ef]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[lf]:i.SRC_ALPHA_SATURATE,[of]:i.DST_COLOR,[sf]:i.DST_ALPHA,[nf]:i.ONE_MINUS_SRC_COLOR,[Zo]:i.ONE_MINUS_SRC_ALPHA,[af]:i.ONE_MINUS_DST_COLOR,[rf]:i.ONE_MINUS_DST_ALPHA,[cf]:i.CONSTANT_COLOR,[hf]:i.ONE_MINUS_CONSTANT_COLOR,[uf]:i.CONSTANT_ALPHA,[df]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,gt,K,it,_t,bt,Yt,ge,Oe,Zt){if(L===Xn){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(W(i.BLEND),g=!0),L!==Yd){if(L!==v||Zt!==N){if((f!==ai||y!==ai)&&(i.blendEquation(i.FUNC_ADD),f=ai,y=ai),Zt)switch(L){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xl:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,T=null,E=null,D=null,C.set(0,0,0),A=0,v=L,N=Zt}return}_t=_t||gt,bt=bt||K,Yt=Yt||it,(gt!==f||_t!==y)&&(i.blendEquationSeparate(Mt[gt],Mt[_t]),f=gt,y=_t),(K!==m||it!==T||bt!==E||Yt!==D)&&(i.blendFuncSeparate(dt[K],dt[it],dt[bt],dt[Yt]),m=K,T=it,E=bt,D=Yt),(ge.equals(C)===!1||Oe!==A)&&(i.blendColor(ge.r,ge.g,ge.b,Oe),C.copy(ge),A=Oe),v=L,N=!1}function le(L,gt){L.side===ln?et(i.CULL_FACE):W(i.CULL_FACE);let K=L.side===We;gt&&(K=!K),Ft(K),L.blending===Gi&&L.transparent===!1?P(Xn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const it=L.stencilWrite;o.setTest(it),it&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),I(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){Z!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),Z=L)}function Ot(L){L!==qd?(W(i.CULL_FACE),L!==x&&(L===$l?i.cullFace(i.BACK):L===$d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),x=L}function Pt(L){L!==b&&($&&i.lineWidth(L),b=L)}function I(L,gt,K){L?(W(i.POLYGON_OFFSET_FILL),(z!==gt||q!==K)&&(i.polygonOffset(gt,K),z=gt,q=K)):et(i.POLYGON_OFFSET_FILL)}function J(L){L?W(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function S(L){L===void 0&&(L=i.TEXTURE0+j-1),Y!==L&&(i.activeTexture(L),Y=L)}function _(L,gt,K){K===void 0&&(Y===null?K=i.TEXTURE0+j-1:K=Y);let it=yt[K];it===void 0&&(it={type:void 0,texture:void 0},yt[K]=it),(it.type!==L||it.texture!==gt)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(L,gt||k[L]),it.type=L,it.texture=gt)}function O(){const L=yt[Y];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(L){Wt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Wt.copy(L))}function ft(L){$t.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$t.copy(L))}function qt(L,gt){let K=l.get(gt);K===void 0&&(K=new WeakMap,l.set(gt,K));let it=K.get(L);it===void 0&&(it=i.getUniformBlockIndex(gt,L.name),K.set(L,it))}function Nt(L,gt){const it=l.get(gt).get(L);a.get(gt)!==it&&(i.uniformBlockBinding(gt,it,L.__bindingPointIndex),a.set(gt,it))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,yt={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,f=null,m=null,T=null,y=null,E=null,D=null,C=new Vt(0,0,0),A=0,N=!1,Z=null,x=null,b=null,z=null,q=null,Wt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:W,disable:et,bindFramebuffer:ot,drawBuffers:st,useProgram:ct,setBlending:P,setMaterial:le,setFlipSided:Ft,setCullFace:Ot,setLineWidth:Pt,setPolygonOffset:I,setScissorTest:J,activeTexture:S,bindTexture:_,unbindTexture:O,compressedTexImage2D:V,compressedTexImage3D:nt,texImage2D:mt,texImage3D:Dt,updateUBOMapping:qt,uniformBlockBinding:Nt,texStorage2D:Gt,texStorage3D:at,texSubImage2D:Q,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:vt,scissor:wt,viewport:ft,reset:Xt}}function Bc(i,t,e,n){const s=Uv(n);switch(e){case Yh:return i*t;case jh:return i*t;case Zh:return i*t*2;case Jh:return i*t/s.components*s.byteLength;case fl:return i*t/s.components*s.byteLength;case Qh:return i*t*2/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case Kh:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case ml:return i*t*4/s.components*s.byteLength;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:case ua:return Math.max(i,16)*Math.max(t,8)/4;case la:case ha:return Math.max(i,8)*Math.max(t,8)/2;case da:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mr:case Ca:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tu:case La:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ka:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uv(i){switch(i){case In:case qh:return{byteLength:1,components:1};case Ss:case $h:case As:return{byteLength:2,components:1};case ul:case dl:return{byteLength:2,components:4};case mi:case hl:case Pn:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Nv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):ws("canvas")}function v(S,_,O){let V=1;const nt=J(S);if((nt.width>O||nt.height>O)&&(V=O/Math.max(nt.width,nt.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Q=Math.floor(V*nt.width),Et=Math.floor(V*nt.height);u===void 0&&(u=g(Q,Et));const ht=_?g(Q,Et):u;return ht.width=Q,ht.height=Et,ht.getContext("2d").drawImage(S,0,0,Q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+Et+")."),ht}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),S;return S}function f(S){return S.generateMipmaps&&S.minFilter!==ke&&S.minFilter!==cn}function m(S){i.generateMipmap(S)}function T(S,_,O,V,nt=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q=_;if(_===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RG8UI),O===i.UNSIGNED_SHORT&&(Q=i.RG16UI),O===i.UNSIGNED_INT&&(Q=i.RG32UI),O===i.BYTE&&(Q=i.RG8I),O===i.SHORT&&(Q=i.RG16I),O===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),O===i.UNSIGNED_INT&&(Q=i.RGB32UI),O===i.BYTE&&(Q=i.RGB8I),O===i.SHORT&&(Q=i.RGB16I),O===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),O===i.UNSIGNED_INT&&(Q=i.RGBA32UI),O===i.BYTE&&(Q=i.RGBA8I),O===i.SHORT&&(Q=i.RGBA16I),O===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),_===i.RGBA){const Et=nt?Er:ee.getTransfer(V);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=Et===ae?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(S,_){let O;return S?_===null||_===mi||_===Ji?O=i.DEPTH24_STENCIL8:_===Pn?O=i.DEPTH32F_STENCIL8:_===Ss&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mi||_===Ji?O=i.DEPTH_COMPONENT24:_===Pn?O=i.DEPTH_COMPONENT32F:_===Ss&&(O=i.DEPTH_COMPONENT16),O}function E(S,_){return f(S)===!0||S.isFramebufferTexture&&S.minFilter!==ke&&S.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function D(S){const _=S.target;_.removeEventListener("dispose",D),A(_),_.isVideoTexture&&h.delete(_)}function C(S){const _=S.target;_.removeEventListener("dispose",C),Z(_)}function A(S){const _=n.get(S);if(_.__webglInit===void 0)return;const O=S.source,V=d.get(O);if(V){const nt=V[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&N(S),Object.keys(V).length===0&&d.delete(O)}n.remove(S)}function N(S){const _=n.get(S);i.deleteTexture(_.__webglTexture);const O=S.source,V=d.get(O);delete V[_.__cacheKey],o.memory.textures--}function Z(S){const _=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let nt=0;nt<_.__webglFramebuffer[V].length;nt++)i.deleteFramebuffer(_.__webglFramebuffer[V][nt]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=S.textures;for(let V=0,nt=O.length;V<nt;V++){const Q=n.get(O[V]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(O[V])}n.remove(S)}let x=0;function b(){x=0}function z(){const S=x;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),x+=1,S}function q(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function j(S,_){const O=n.get(S);if(S.isVideoTexture&&Pt(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(O,S,_);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function $(S,_){const O=n.get(S);if(S.version>0&&O.__version!==S.version){$t(O,S,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function H(S,_){const O=n.get(S);if(S.version>0&&O.__version!==S.version){$t(O,S,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function tt(S,_){const O=n.get(S);if(S.version>0&&O.__version!==S.version){w(O,S,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const Y={[Zi]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},yt={[ke]:i.NEAREST,[bf]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},pt={[Tf]:i.NEVER,[kf]:i.ALWAYS,[Af]:i.LESS,[nu]:i.LEQUAL,[Rf]:i.EQUAL,[Lf]:i.GEQUAL,[Cf]:i.GREATER,[Pf]:i.NOTEQUAL};function St(S,_){if(_.type===Pn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===Jr||_.magFilter===Fs||_.magFilter===di||_.minFilter===cn||_.minFilter===Jr||_.minFilter===Fs||_.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,Y[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Y[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Y[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,yt[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,yt[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ke||_.minFilter!==Fs&&_.minFilter!==di||_.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Wt(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",D));const V=_.source;let nt=d.get(V);nt===void 0&&(nt={},d.set(V,nt));const Q=q(_);if(Q!==S.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),nt[Q].usedTimes++;const Et=nt[S.__cacheKey];Et!==void 0&&(nt[S.__cacheKey].usedTimes--,Et.usedTimes===0&&N(_)),S.__cacheKey=Q,S.__webglTexture=nt[Q].texture}return O}function $t(S,_,O){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const nt=Wt(S,_),Q=_.source;e.bindTexture(V,S.__webglTexture,i.TEXTURE0+O);const Et=n.get(Q);if(Q.version!==Et.__version||nt===!0){e.activeTexture(i.TEXTURE0+O);const ht=ee.getPrimaries(ee.workingColorSpace),vt=_.colorSpace===qn?null:ee.getPrimaries(_.colorSpace),Gt=_.colorSpace===qn||ht===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let at=v(_.image,!1,s.maxTextureSize);at=I(_,at);const mt=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type);let wt=T(_.internalFormat,mt,Dt,_.colorSpace,_.isVideoTexture);St(V,_);let ft;const qt=_.mipmaps,Nt=_.isVideoTexture!==!0,Xt=Et.__version===void 0||nt===!0,L=Q.dataReady,gt=E(_,at);if(_.isDepthTexture)wt=y(_.format===Qi,_.type),Xt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,wt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,wt,at.width,at.height,0,mt,Dt,null));else if(_.isDataTexture)if(qt.length>0){Nt&&Xt&&e.texStorage2D(i.TEXTURE_2D,gt,wt,qt[0].width,qt[0].height);for(let K=0,it=qt.length;K<it;K++)ft=qt[K],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,mt,Dt,ft.data):e.texImage2D(i.TEXTURE_2D,K,wt,ft.width,ft.height,0,mt,Dt,ft.data);_.generateMipmaps=!1}else Nt?(Xt&&e.texStorage2D(i.TEXTURE_2D,gt,wt,at.width,at.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,mt,Dt,at.data)):e.texImage2D(i.TEXTURE_2D,0,wt,at.width,at.height,0,mt,Dt,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Nt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,wt,qt[0].width,qt[0].height,at.depth);for(let K=0,it=qt.length;K<it;K++)if(ft=qt[K],_.format!==fn)if(mt!==null)if(Nt){if(L)if(_.layerUpdates.size>0){const _t=Bc(ft.width,ft.height,_.format,_.type);for(const bt of _.layerUpdates){const Yt=ft.data.subarray(bt*_t/ft.data.BYTES_PER_ELEMENT,(bt+1)*_t/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,bt,ft.width,ft.height,1,mt,Yt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,at.depth,mt,ft.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,wt,ft.width,ft.height,at.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,at.depth,mt,Dt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,wt,ft.width,ft.height,at.depth,0,mt,Dt,ft.data)}else{Nt&&Xt&&e.texStorage2D(i.TEXTURE_2D,gt,wt,qt[0].width,qt[0].height);for(let K=0,it=qt.length;K<it;K++)ft=qt[K],_.format!==fn?mt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,mt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,K,wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,mt,Dt,ft.data):e.texImage2D(i.TEXTURE_2D,K,wt,ft.width,ft.height,0,mt,Dt,ft.data)}else if(_.isDataArrayTexture)if(Nt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,wt,at.width,at.height,at.depth),L)if(_.layerUpdates.size>0){const K=Bc(at.width,at.height,_.format,_.type);for(const it of _.layerUpdates){const _t=at.data.subarray(it*K/at.data.BYTES_PER_ELEMENT,(it+1)*K/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,at.width,at.height,1,mt,Dt,_t)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,mt,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,at.width,at.height,at.depth,0,mt,Dt,at.data);else if(_.isData3DTexture)Nt?(Xt&&e.texStorage3D(i.TEXTURE_3D,gt,wt,at.width,at.height,at.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,mt,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,wt,at.width,at.height,at.depth,0,mt,Dt,at.data);else if(_.isFramebufferTexture){if(Xt)if(Nt)e.texStorage2D(i.TEXTURE_2D,gt,wt,at.width,at.height);else{let K=at.width,it=at.height;for(let _t=0;_t<gt;_t++)e.texImage2D(i.TEXTURE_2D,_t,wt,K,it,0,mt,Dt,null),K>>=1,it>>=1}}else if(qt.length>0){if(Nt&&Xt){const K=J(qt[0]);e.texStorage2D(i.TEXTURE_2D,gt,wt,K.width,K.height)}for(let K=0,it=qt.length;K<it;K++)ft=qt[K],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,mt,Dt,ft):e.texImage2D(i.TEXTURE_2D,K,wt,mt,Dt,ft);_.generateMipmaps=!1}else if(Nt){if(Xt){const K=J(at);e.texStorage2D(i.TEXTURE_2D,gt,wt,K.width,K.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,wt,mt,Dt,at);f(_)&&m(V),Et.__version=Q.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function w(S,_,O){if(_.image.length!==6)return;const V=Wt(S,_),nt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);const Q=n.get(nt);if(nt.version!==Q.__version||V===!0){e.activeTexture(i.TEXTURE0+O);const Et=ee.getPrimaries(ee.workingColorSpace),ht=_.colorSpace===qn?null:ee.getPrimaries(_.colorSpace),vt=_.colorSpace===qn||Et===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Gt=_.isCompressedTexture||_.image[0].isCompressedTexture,at=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let it=0;it<6;it++)!Gt&&!at?mt[it]=v(_.image[it],!0,s.maxCubemapSize):mt[it]=at?_.image[it].image:_.image[it],mt[it]=I(_,mt[it]);const Dt=mt[0],wt=r.convert(_.format,_.colorSpace),ft=r.convert(_.type),qt=T(_.internalFormat,wt,ft,_.colorSpace),Nt=_.isVideoTexture!==!0,Xt=Q.__version===void 0||V===!0,L=nt.dataReady;let gt=E(_,Dt);St(i.TEXTURE_CUBE_MAP,_);let K;if(Gt){Nt&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,Dt.width,Dt.height);for(let it=0;it<6;it++){K=mt[it].mipmaps;for(let _t=0;_t<K.length;_t++){const bt=K[_t];_.format!==fn?wt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,qt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,bt.width,bt.height,wt,ft,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,qt,bt.width,bt.height,0,wt,ft,bt.data)}}}else{if(K=_.mipmaps,Nt&&Xt){K.length>0&&gt++;const it=J(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,it.width,it.height)}for(let it=0;it<6;it++)if(at){Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt[it].width,mt[it].height,wt,ft,mt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,mt[it].width,mt[it].height,0,wt,ft,mt[it].data);for(let _t=0;_t<K.length;_t++){const Yt=K[_t].image[it].image;Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,Yt.width,Yt.height,wt,ft,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,qt,Yt.width,Yt.height,0,wt,ft,Yt.data)}}else{Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt,ft,mt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,wt,ft,mt[it]);for(let _t=0;_t<K.length;_t++){const bt=K[_t];Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,wt,ft,bt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,qt,wt,ft,bt.image[it])}}}f(_)&&m(i.TEXTURE_CUBE_MAP),Q.__version=nt.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function k(S,_,O,V,nt,Q){const Et=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),vt=T(O.internalFormat,Et,ht,O.colorSpace);if(!n.get(_).__hasExternalTextures){const at=Math.max(1,_.width>>Q),mt=Math.max(1,_.height>>Q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,vt,at,mt,_.depth,0,Et,ht,null):e.texImage2D(nt,Q,vt,at,mt,0,Et,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,nt,n.get(O).__webglTexture,0,Ft(_)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,nt,n.get(O).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(S,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){const V=_.depthTexture,nt=V&&V.isDepthTexture?V.type:null,Q=y(_.stencilBuffer,nt),Et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Ft(_);Ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Q,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,S)}else{const V=_.textures;for(let nt=0;nt<V.length;nt++){const Q=V[nt],Et=r.convert(Q.format,Q.colorSpace),ht=r.convert(Q.type),vt=T(Q.internalFormat,Et,ht,Q.colorSpace),Gt=Ft(_);O&&Ot(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,vt,_.width,_.height):Ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,vt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,vt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const V=n.get(_.depthTexture).__webglTexture,nt=Ft(_);if(_.depthTexture.format===Wi)Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,V,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,V,0);else if(_.depthTexture.format===Qi)Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,V,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function ot(S){const _=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const V=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const nt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",nt)};V.addEventListener("dispose",nt),_.__depthDisposeCallback=nt}_.__boundDepthTexture=V}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");et(_.__webglFramebuffer,S)}else if(O){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),W(_.__webglDepthbuffer[V],S,!1);else{const nt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),W(_.__webglDepthbuffer,S,!1);else{const V=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(S,_,O){const V=n.get(S);_!==void 0&&k(V.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ot(S)}function ct(S){const _=S.texture,O=n.get(S),V=n.get(_);S.addEventListener("dispose",C);const nt=S.textures,Q=S.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,o.memory.textures++),Q){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let vt=0;vt<_.mipmaps.length;vt++)O.__webglFramebuffer[ht][vt]=i.createFramebuffer()}else O.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<_.mipmaps.length;ht++)O.__webglFramebuffer[ht]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ht=0,vt=nt.length;ht<vt;ht++){const Gt=n.get(nt[ht]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&Ot(S)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<nt.length;ht++){const vt=nt[ht];O.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const Gt=r.convert(vt.format,vt.colorSpace),at=r.convert(vt.type),mt=T(vt.internalFormat,Gt,at,vt.colorSpace,S.isXRRenderTarget===!0),Dt=Ft(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,mt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),W(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),St(i.TEXTURE_CUBE_MAP,_);for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)k(O.__webglFramebuffer[ht][vt],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else k(O.__webglFramebuffer[ht],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);f(_)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,vt=nt.length;ht<vt;ht++){const Gt=nt[ht],at=n.get(Gt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),St(i.TEXTURE_2D,Gt),k(O.__webglFramebuffer,S,Gt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),f(Gt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ht=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,V.__webglTexture),St(ht,_),_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)k(O.__webglFramebuffer[vt],S,_,i.COLOR_ATTACHMENT0,ht,vt);else k(O.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,ht,0);f(_)&&m(ht),e.unbindTexture()}S.depthBuffer&&ot(S)}function Mt(S){const _=S.textures;for(let O=0,V=_.length;O<V;O++){const nt=_[O];if(f(nt)){const Q=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(nt).__webglTexture;e.bindTexture(Q,Et),m(Q),e.unbindTexture()}}}const dt=[],P=[];function le(S){if(S.samples>0){if(Ot(S)===!1){const _=S.textures,O=S.width,V=S.height;let nt=i.COLOR_BUFFER_BIT;const Q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(S),ht=_.length>1;if(ht)for(let vt=0;vt<_.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<_.length;vt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const Gt=n.get(_[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,nt,i.NEAREST),l===!0&&(dt.length=0,P.length=0,dt.push(i.COLOR_ATTACHMENT0+vt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(dt.push(Q),P.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let vt=0;vt<_.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const Gt=n.get(_[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ft(S){return Math.min(s.maxSamples,S.samples)}function Ot(S){const _=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Pt(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function I(S,_){const O=S.colorSpace,V=S.format,nt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==Zn&&O!==qn&&(ee.getTransfer(O)===ae?(V!==fn||nt!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function J(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=b,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=tt,this.rebindTextures=st,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Ot}function Fv(i,t){function e(n,s=qn){let r;const o=ee.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return i.BYTE;if(n===$h)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===As)return i.HALF_FLOAT;if(n===Yh)return i.ALPHA;if(n===Kh)return i.RGB;if(n===fn)return i.RGBA;if(n===jh)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Jh)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===Qh)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===ur||n===dr||n===fr||n===pr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ca||n===ha||n===ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===da||n===fa)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ma||n===ga||n===va||n===_a||n===xa||n===ya||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ma)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_a)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ea)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===Ca||n===Pa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===La||n===ka||n===Da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ov extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fi extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bv={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),m=this._getHandJoint(c,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new jn({vertexShader:Hv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gv extends ns{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new Vv,f=e.getContextAttributes();let m=null,T=null;const y=[],E=[],D=new Kt;let C=null;const A=new Ze;A.layers.enable(1),A.viewport=new fe;const N=new Ze;N.layers.enable(2),N.viewport=new fe;const Z=[A,N],x=new Ov;x.layers.enable(1),x.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let k=y[w];return k===void 0&&(k=new Co,y[w]=k),k.getTargetRaySpace()},this.getControllerGrip=function(w){let k=y[w];return k===void 0&&(k=new Co,y[w]=k),k.getGripSpace()},this.getHand=function(w){let k=y[w];return k===void 0&&(k=new Co,y[w]=k),k.getHandSpace()};function q(w){const k=E.indexOf(w.inputSource);if(k===-1)return;const W=y[k];W!==void 0&&(W.update(w.inputSource,w.frame,c||o),W.dispatchEvent({type:w.type,data:w.inputSource}))}function j(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",$);for(let w=0;w<y.length;w++){const k=E[w];k!==null&&(E[w]=null,y[w].disconnect(k))}b=null,z=null,v.reset(),t.setRenderTarget(m),p=null,d=null,u=null,s=null,T=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){r=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){a=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(w){c=w},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(w){if(s=w,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",$),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const k={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new gi(p.framebufferWidth,p.framebufferHeight,{format:fn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let k=null,W=null,et=null;f.depth&&(et=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=f.stencil?Qi:Wi,W=f.stencil?Ji:mi);const ot={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new gi(d.textureWidth,d.textureHeight,{format:fn,type:In,depthTexture:new pu(d.textureWidth,d.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(w){for(let k=0;k<w.removed.length;k++){const W=w.removed[k],et=E.indexOf(W);et>=0&&(E[et]=null,y[et].disconnect(W))}for(let k=0;k<w.added.length;k++){const W=w.added[k];let et=E.indexOf(W);if(et===-1){for(let st=0;st<y.length;st++)if(st>=E.length){E.push(W),et=st;break}else if(E[st]===null){E[st]=W,et=st;break}if(et===-1)break}const ot=y[et];ot&&ot.connect(W)}}const H=new B,tt=new B;function Y(w,k,W){H.setFromMatrixPosition(k.matrixWorld),tt.setFromMatrixPosition(W.matrixWorld);const et=H.distanceTo(tt),ot=k.projectionMatrix.elements,st=W.projectionMatrix.elements,ct=ot[14]/(ot[10]-1),Mt=ot[14]/(ot[10]+1),dt=(ot[9]+1)/ot[5],P=(ot[9]-1)/ot[5],le=(ot[8]-1)/ot[0],Ft=(st[8]+1)/st[0],Ot=ct*le,Pt=ct*Ft,I=et/(-le+Ft),J=I*-le;if(k.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(J),w.translateZ(I),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),ot[10]===-1)w.projectionMatrix.copy(k.projectionMatrix),w.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const S=ct+I,_=Mt+I,O=Ot-J,V=Pt+(et-J),nt=dt*Mt/_*S,Q=P*Mt/_*S;w.projectionMatrix.makePerspective(O,V,nt,Q,S,_),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function yt(w,k){k===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(k.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(s===null)return;let k=w.near,W=w.far;v.texture!==null&&(v.depthNear>0&&(k=v.depthNear),v.depthFar>0&&(W=v.depthFar)),x.near=N.near=A.near=k,x.far=N.far=A.far=W,(b!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,z=x.far);const et=w.parent,ot=x.cameras;yt(x,et);for(let st=0;st<ot.length;st++)yt(ot[st],et);ot.length===2?Y(x,A,N):x.projectionMatrix.copy(A.projectionMatrix),pt(w,x,et)};function pt(w,k,W){W===null?w.matrix.copy(k.matrixWorld):(w.matrix.copy(W.matrixWorld),w.matrix.invert(),w.matrix.multiply(k.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(k.projectionMatrix),w.projectionMatrixInverse.copy(k.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Ia*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(w){l=w,d!==null&&(d.fixedFoveation=w),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=w)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let St=null;function Wt(w,k){if(h=k.getViewerPose(c||o),g=k,h!==null){const W=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let et=!1;W.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let st=0;st<W.length;st++){const ct=W[st];let Mt=null;if(p!==null)Mt=p.getViewport(ct);else{const P=u.getViewSubImage(d,ct);Mt=P.viewport,st===0&&(t.setRenderTargetTextures(T,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(T))}let dt=Z[st];dt===void 0&&(dt=new Ze,dt.layers.enable(st),dt.viewport=new fe,Z[st]=dt),dt.matrix.fromArray(ct.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ct.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),st===0&&(x.matrix.copy(dt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),et===!0&&x.cameras.push(dt)}const ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const st=u.getDepthInformation(W[0]);st&&st.isValid&&st.texture&&v.init(t,st,s.renderState)}}for(let W=0;W<y.length;W++){const et=E[W],ot=y[W];et!==null&&ot!==void 0&&ot.update(et,k,c||o)}St&&St(w,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const $t=new du;$t.setAnimationLoop(Wt),this.setAnimationLoop=function(w){St=w},this.dispose=function(){}}}const si=new Mn,Wv=new ce;function qv(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,cu(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,T,y,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),u(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,E)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),v(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,T,y):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===We&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===We&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const T=t.get(m),y=T.envMap,E=T.envMapRotation;y&&(f.envMap.value=y,si.copy(E),si.x*=-1,si.y*=-1,si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),f.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(si)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,T,y){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*T,f.scale.value=y*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,T){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){const T=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $v(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const E=y.program;n.uniformBlockBinding(T,E)}function c(T,y){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",f));const D=y.program;n.updateUBOMapping(T,D);const C=t.render.frame;r[T.id]!==C&&(d(T),r[T.id]=C)}function h(T){const y=u();T.__bindingPointIndex=y;const E=i.createBuffer(),D=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=s[T.id],E=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,A=E.length;C<A;C++){const N=Array.isArray(E[C])?E[C]:[E[C]];for(let Z=0,x=N.length;Z<x;Z++){const b=N[Z];if(p(b,C,Z,D)===!0){const z=b.__offset,q=Array.isArray(b.value)?b.value:[b.value];let j=0;for(let $=0;$<q.length;$++){const H=q[$],tt=v(H);typeof H=="number"||typeof H=="boolean"?(b.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+j,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=0,b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=0,b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=0):(H.toArray(b.__data,j),j+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,y,E,D){const C=T.value,A=y+"_"+E;if(D[A]===void 0)return typeof C=="number"||typeof C=="boolean"?D[A]=C:D[A]=C.clone(),!0;{const N=D[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return D[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(T){const y=T.uniforms;let E=0;const D=16;for(let A=0,N=y.length;A<N;A++){const Z=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,b=Z.length;x<b;x++){const z=Z[x],q=Array.isArray(z.value)?z.value:[z.value];for(let j=0,$=q.length;j<$;j++){const H=q[j],tt=v(H),Y=E%D,yt=Y%tt.boundary,pt=Y+yt;E+=yt,pt!==0&&D-pt<tt.storage&&(E+=D-pt),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=tt.storage}}}const C=E%D;return C>0&&(E+=D-C),T.__size=E,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function f(T){const y=T.target;y.removeEventListener("dispose",f);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Xv{constructor(t={}){const{canvas:e=If(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const m=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Yn,this.toneMappingExposure=1;const y=this;let E=!1,D=0,C=0,A=null,N=-1,Z=null;const x=new fe,b=new fe;let z=null;const q=new Vt(0);let j=0,$=e.width,H=e.height,tt=1,Y=null,yt=null;const pt=new fe(0,0,$,H),St=new fe(0,0,$,H);let Wt=!1;const $t=new xl;let w=!1,k=!1;const W=new ce,et=new ce,ot=new B,st=new fe,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function dt(){return A===null?tt:1}let P=n;function le(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",bt,!1),P===null){const U="webgl2";if(P=le(U,M),P===null)throw le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ft,Ot,Pt,I,J,S,_,O,V,nt,Q,Et,ht,vt,Gt,at,mt,Dt,wt,ft,qt,Nt,Xt,L;function gt(){Ft=new Jg(P),Ft.init(),Nt=new Fv(P,Ft),Ot=new $g(P,Ft,t,Nt),Pt=new Iv(P),Ot.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),I=new e0(P),J=new xv,S=new Nv(P,Ft,Pt,J,Ot,Nt,I),_=new Yg(y),O=new Zg(y),V=new lp(P),Xt=new Wg(P,V),nt=new Qg(P,V,I,Xt),Q=new i0(P,nt,V,I),wt=new n0(P,Ot,S),at=new Xg(J),Et=new _v(y,_,O,Ft,Ot,Xt,at),ht=new qv(y,J),vt=new Mv,Gt=new Av(Ft),Dt=new Gg(y,_,O,Pt,Q,d,l),mt=new kv(y,Q,Ot),L=new $v(P,I,Ot,Pt),ft=new qg(P,Ft,I),qt=new t0(P,Ft,I),I.programs=Et.programs,y.capabilities=Ot,y.extensions=Ft,y.properties=J,y.renderLists=vt,y.shadowMap=mt,y.state=Pt,y.info=I}gt();const K=new Gv(y,P);this.xr=K,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ft.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ft.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize($,H,!1))},this.getSize=function(M){return M.set($,H)},this.setSize=function(M,U,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,H=U,e.width=Math.floor(M*tt),e.height=Math.floor(U*tt),G===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set($*tt,H*tt).floor()},this.setDrawingBufferSize=function(M,U,G){$=M,H=U,tt=G,e.width=Math.floor(M*G),e.height=Math.floor(U*G),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(pt)},this.setViewport=function(M,U,G,X){M.isVector4?pt.set(M.x,M.y,M.z,M.w):pt.set(M,U,G,X),Pt.viewport(x.copy(pt).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(St)},this.setScissor=function(M,U,G,X){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,U,G,X),Pt.scissor(b.copy(St).multiplyScalar(tt).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(M){Pt.setScissorTest(Wt=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){yt=M},this.getClearColor=function(M){return M.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(M=!0,U=!0,G=!0){let X=0;if(M){let F=!1;if(A!==null){const lt=A.texture.format;F=lt===ml||lt===pl||lt===fl}if(F){const lt=A.texture.type,xt=lt===In||lt===mi||lt===Ss||lt===Ji||lt===ul||lt===dl,Tt=Dt.getClearColor(),At=Dt.getClearAlpha(),It=Tt.r,Ut=Tt.g,Ct=Tt.b;xt?(p[0]=It,p[1]=Ut,p[2]=Ct,p[3]=At,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=It,g[1]=Ut,g[2]=Ct,g[3]=At,P.clearBufferiv(P.COLOR,0,g))}else X|=P.COLOR_BUFFER_BIT}U&&(X|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),vt.dispose(),Gt.dispose(),J.dispose(),_.dispose(),O.dispose(),Q.dispose(),Xt.dispose(),L.dispose(),Et.dispose(),K.dispose(),K.removeEventListener("sessionstart",Tl),K.removeEventListener("sessionend",Al),Jn.stop()};function it(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=I.autoReset,U=mt.enabled,G=mt.autoUpdate,X=mt.needsUpdate,F=mt.type;gt(),I.autoReset=M,mt.enabled=U,mt.autoUpdate=G,mt.needsUpdate=X,mt.type=F}function bt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Yt(M){const U=M.target;U.removeEventListener("dispose",Yt),ge(U)}function ge(M){Oe(M),J.remove(M)}function Oe(M){const U=J.get(M).programs;U!==void 0&&(U.forEach(function(G){Et.releaseProgram(G)}),M.isShaderMaterial&&Et.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,G,X,F,lt){U===null&&(U=ct);const xt=F.isMesh&&F.matrixWorld.determinant()<0,Tt=zu(M,U,G,X,F);Pt.setMaterial(X,xt);let At=G.index,It=1;if(X.wireframe===!0){if(At=nt.getWireframeAttribute(G),At===void 0)return;It=2}const Ut=G.drawRange,Ct=G.attributes.position;let ne=Ut.start*It,oe=(Ut.start+Ut.count)*It;lt!==null&&(ne=Math.max(ne,lt.start*It),oe=Math.min(oe,(lt.start+lt.count)*It)),At!==null?(ne=Math.max(ne,0),oe=Math.min(oe,At.count)):Ct!=null&&(ne=Math.max(ne,0),oe=Math.min(oe,Ct.count));const he=oe-ne;if(he<0||he===1/0)return;Xt.setup(F,X,Tt,G,At);let qe,Qt=ft;if(At!==null&&(qe=V.get(At),Qt=qt,Qt.setIndex(qe)),F.isMesh)X.wireframe===!0?(Pt.setLineWidth(X.wireframeLinewidth*dt()),Qt.setMode(P.LINES)):Qt.setMode(P.TRIANGLES);else if(F.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),Pt.setLineWidth(Lt*dt()),F.isLineSegments?Qt.setMode(P.LINES):F.isLineLoop?Qt.setMode(P.LINE_LOOP):Qt.setMode(P.LINE_STRIP)}else F.isPoints?Qt.setMode(P.POINTS):F.isSprite&&Qt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Lt=F._multiDrawStarts,we=F._multiDrawCounts,te=F._multiDrawCount,en=At?V.get(At).bytesPerElement:1,_i=J.get(X).currentProgram.getUniforms();for(let $e=0;$e<te;$e++)_i.setValue(P,"_gl_DrawID",$e),Qt.render(Lt[$e]/en,we[$e])}else if(F.isInstancedMesh)Qt.renderInstances(ne,he,F.count);else if(G.isInstancedBufferGeometry){const Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,we=Math.min(G.instanceCount,Lt);Qt.renderInstances(ne,he,we)}else Qt.render(ne,he)};function Zt(M,U,G){M.transparent===!0&&M.side===ln&&M.forceSinglePass===!1?(M.side=We,M.needsUpdate=!0,Ds(M,U,G),M.side=Kn,M.needsUpdate=!0,Ds(M,U,G),M.side=ln):Ds(M,U,G)}this.compile=function(M,U,G=null){G===null&&(G=M),f=Gt.get(G),f.init(U),T.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),M!==G&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const X=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const lt=F.material;if(lt)if(Array.isArray(lt))for(let xt=0;xt<lt.length;xt++){const Tt=lt[xt];Zt(Tt,G,F),X.add(Tt)}else Zt(lt,G,F),X.add(lt)}),T.pop(),f=null,X},this.compileAsync=function(M,U,G=null){const X=this.compile(M,U,G);return new Promise(F=>{function lt(){if(X.forEach(function(xt){J.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){F(M);return}setTimeout(lt,10)}Ft.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Be=null;function bn(M){Be&&Be(M)}function Tl(){Jn.stop()}function Al(){Jn.start()}const Jn=new du;Jn.setAnimationLoop(bn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(M){Be=M,K.setAnimationLoop(M),M===null?Jn.stop():Jn.start()},K.addEventListener("sessionstart",Tl),K.addEventListener("sessionend",Al),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,A),f=Gt.get(M,T.length),f.init(U),T.push(f),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$t.setFromProjectionMatrix(et),k=this.localClippingEnabled,w=at.init(this.clippingPlanes,k),v=vt.get(M,m.length),v.init(),m.push(v),K.enabled===!0&&K.isPresenting===!0){const lt=y.xr.getDepthSensingMesh();lt!==null&&qr(lt,U,-1/0,y.sortObjects)}qr(M,U,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Y,yt),Mt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Mt&&Dt.addToRenderList(v,M),this.info.render.frame++,w===!0&&at.beginShadows();const G=f.state.shadowsArray;mt.render(G,M,U),w===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=v.opaque,F=v.transmissive;if(f.setupLights(),U.isArrayCamera){const lt=U.cameras;if(F.length>0)for(let xt=0,Tt=lt.length;xt<Tt;xt++){const At=lt[xt];Cl(X,F,M,At)}Mt&&Dt.render(M);for(let xt=0,Tt=lt.length;xt<Tt;xt++){const At=lt[xt];Rl(v,M,At,At.viewport)}}else F.length>0&&Cl(X,F,M,U),Mt&&Dt.render(M),Rl(v,M,U);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(y,M,U),Xt.resetDefaultState(),N=-1,Z=null,T.pop(),T.length>0?(f=T[T.length-1],w===!0&&at.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function qr(M,U,G,X){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$t.intersectsSprite(M)){X&&st.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);const xt=Q.update(M),Tt=M.material;Tt.visible&&v.push(M,xt,Tt,G,st.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$t.intersectsObject(M))){const xt=Q.update(M),Tt=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),st.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),st.copy(xt.boundingSphere.center)),st.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(Tt)){const At=xt.groups;for(let It=0,Ut=At.length;It<Ut;It++){const Ct=At[It],ne=Tt[Ct.materialIndex];ne&&ne.visible&&v.push(M,xt,ne,G,st.z,Ct)}}else Tt.visible&&v.push(M,xt,Tt,G,st.z,null)}}const lt=M.children;for(let xt=0,Tt=lt.length;xt<Tt;xt++)qr(lt[xt],U,G,X)}function Rl(M,U,G,X){const F=M.opaque,lt=M.transmissive,xt=M.transparent;f.setupLightsView(G),w===!0&&at.setGlobalState(y.clippingPlanes,G),X&&Pt.viewport(x.copy(X)),F.length>0&&ks(F,U,G),lt.length>0&&ks(lt,U,G),xt.length>0&&ks(xt,U,G),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Cl(M,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new gi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?As:In,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const lt=f.state.transmissionRenderTarget[X.id],xt=X.viewport||x;lt.setSize(xt.z,xt.w);const Tt=y.getRenderTarget();y.setRenderTarget(lt),y.getClearColor(q),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Mt&&Dt.render(G);const At=y.toneMapping;y.toneMapping=Yn;const It=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),w===!0&&at.setGlobalState(y.clippingPlanes,X),ks(M,G,X),S.updateMultisampleRenderTarget(lt),S.updateRenderTargetMipmap(lt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Ct=0,ne=U.length;Ct<ne;Ct++){const oe=U[Ct],he=oe.object,qe=oe.geometry,Qt=oe.material,Lt=oe.group;if(Qt.side===ln&&he.layers.test(X.layers)){const we=Qt.side;Qt.side=We,Qt.needsUpdate=!0,Pl(he,G,X,qe,Qt,Lt),Qt.side=we,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(S.updateMultisampleRenderTarget(lt),S.updateRenderTargetMipmap(lt))}y.setRenderTarget(Tt),y.setClearColor(q,j),It!==void 0&&(X.viewport=It),y.toneMapping=At}function ks(M,U,G){const X=U.isScene===!0?U.overrideMaterial:null;for(let F=0,lt=M.length;F<lt;F++){const xt=M[F],Tt=xt.object,At=xt.geometry,It=X===null?xt.material:X,Ut=xt.group;Tt.layers.test(G.layers)&&Pl(Tt,U,G,At,It,Ut)}}function Pl(M,U,G,X,F,lt){M.onBeforeRender(y,U,G,X,F,lt),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(y,U,G,X,M,lt),F.transparent===!0&&F.side===ln&&F.forceSinglePass===!1?(F.side=We,F.needsUpdate=!0,y.renderBufferDirect(G,U,X,F,M,lt),F.side=Kn,F.needsUpdate=!0,y.renderBufferDirect(G,U,X,F,M,lt),F.side=ln):y.renderBufferDirect(G,U,X,F,M,lt),M.onAfterRender(y,U,G,X,F,lt)}function Ds(M,U,G){U.isScene!==!0&&(U=ct);const X=J.get(M),F=f.state.lights,lt=f.state.shadowsArray,xt=F.state.version,Tt=Et.getParameters(M,F.state,lt,U,G),At=Et.getProgramCacheKey(Tt);let It=X.programs;X.environment=M.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(M.isMeshStandardMaterial?O:_).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,It===void 0&&(M.addEventListener("dispose",Yt),It=new Map,X.programs=It);let Ut=It.get(At);if(Ut!==void 0){if(X.currentProgram===Ut&&X.lightsStateVersion===xt)return kl(M,Tt),Ut}else Tt.uniforms=Et.getUniforms(M),M.onBeforeCompile(Tt,y),Ut=Et.acquireProgram(Tt,At),It.set(At,Ut),X.uniforms=Tt.uniforms;const Ct=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=at.uniform),kl(M,Tt),X.needsLights=Gu(M),X.lightsStateVersion=xt,X.needsLights&&(Ct.ambientLightColor.value=F.state.ambient,Ct.lightProbe.value=F.state.probe,Ct.directionalLights.value=F.state.directional,Ct.directionalLightShadows.value=F.state.directionalShadow,Ct.spotLights.value=F.state.spot,Ct.spotLightShadows.value=F.state.spotShadow,Ct.rectAreaLights.value=F.state.rectArea,Ct.ltc_1.value=F.state.rectAreaLTC1,Ct.ltc_2.value=F.state.rectAreaLTC2,Ct.pointLights.value=F.state.point,Ct.pointLightShadows.value=F.state.pointShadow,Ct.hemisphereLights.value=F.state.hemi,Ct.directionalShadowMap.value=F.state.directionalShadowMap,Ct.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ct.spotShadowMap.value=F.state.spotShadowMap,Ct.spotLightMatrix.value=F.state.spotLightMatrix,Ct.spotLightMap.value=F.state.spotLightMap,Ct.pointShadowMap.value=F.state.pointShadowMap,Ct.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Ut,X.uniformsList=null,Ut}function Ll(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=vr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function kl(M,U){const G=J.get(M);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function zu(M,U,G,X,F){U.isScene!==!0&&(U=ct),S.resetTextureUnits();const lt=U.fog,xt=X.isMeshStandardMaterial?U.environment:null,Tt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zn,At=(X.isMeshStandardMaterial?O:_).get(X.envMap||xt),It=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ut=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ct=!!G.morphAttributes.position,ne=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color;let he=Yn;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(he=y.toneMapping);const qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=qe!==void 0?qe.length:0,Lt=J.get(X),we=f.state.lights;if(w===!0&&(k===!0||M!==Z)){const Ke=M===Z&&X.id===N;at.setState(X,M,Ke)}let te=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==we.state.version||Lt.outputColorSpace!==Tt||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==At||X.fog===!0&&Lt.fog!==lt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==at.numPlanes||Lt.numIntersection!==at.numIntersection)||Lt.vertexAlphas!==It||Lt.vertexTangents!==Ut||Lt.morphTargets!==Ct||Lt.morphNormals!==ne||Lt.morphColors!==oe||Lt.toneMapping!==he||Lt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Lt.__version=X.version);let en=Lt.currentProgram;te===!0&&(en=Ds(X,U,F));let _i=!1,$e=!1,$r=!1;const pe=en.getUniforms(),Un=Lt.uniforms;if(Pt.useProgram(en.program)&&(_i=!0,$e=!0,$r=!0),X.id!==N&&(N=X.id,$e=!0),_i||Z!==M){Ot.reverseDepthBuffer?(W.copy(M.projectionMatrix),Nf(W),Ff(W),pe.setValue(P,"projectionMatrix",W)):pe.setValue(P,"projectionMatrix",M.projectionMatrix),pe.setValue(P,"viewMatrix",M.matrixWorldInverse);const Ke=pe.map.cameraPosition;Ke!==void 0&&Ke.setValue(P,ot.setFromMatrixPosition(M.matrixWorld)),Ot.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),Z!==M&&(Z=M,$e=!0,$r=!0)}if(F.isSkinnedMesh){pe.setOptional(P,F,"bindMatrix"),pe.setOptional(P,F,"bindMatrixInverse");const Ke=F.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),pe.setValue(P,"boneTexture",Ke.boneTexture,S))}F.isBatchedMesh&&(pe.setOptional(P,F,"batchingTexture"),pe.setValue(P,"batchingTexture",F._matricesTexture,S),pe.setOptional(P,F,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",F._indirectTexture,S),pe.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",F._colorsTexture,S));const Xr=G.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&wt.update(F,G,en),($e||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,pe.setValue(P,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Un.envMap.value=At,Un.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(Un.envMapIntensity.value=U.environmentIntensity),$e&&(pe.setValue(P,"toneMappingExposure",y.toneMappingExposure),Lt.needsLights&&Vu(Un,$r),lt&&X.fog===!0&&ht.refreshFogUniforms(Un,lt),ht.refreshMaterialUniforms(Un,X,tt,H,f.state.transmissionRenderTarget[M.id]),vr.upload(P,Ll(Lt),Un,S)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(vr.upload(P,Ll(Lt),Un,S),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(P,"center",F.center),pe.setValue(P,"modelViewMatrix",F.modelViewMatrix),pe.setValue(P,"normalMatrix",F.normalMatrix),pe.setValue(P,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ke=X.uniformsGroups;for(let Yr=0,Wu=Ke.length;Yr<Wu;Yr++){const Dl=Ke[Yr];L.update(Dl,en),L.bind(Dl,en)}}return en}function Vu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Gu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,U,G){J.get(M.texture).__webglTexture=U,J.get(M.depthTexture).__webglTexture=G;const X=J.get(M);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const G=J.get(M);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,G=0){A=M,D=U,C=G;let X=!0,F=null,lt=!1,xt=!1;if(M){const At=J.get(M);if(At.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(At.__webglFramebuffer===void 0)S.setupRenderTarget(M);else if(At.__hasExternalTextures)S.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ct=M.depthTexture;if(At.__boundDepthTexture!==Ct){if(Ct!==null&&J.has(Ct)&&(M.width!==Ct.image.width||M.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(M)}}const It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(xt=!0);const Ut=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?F=Ut[U][G]:F=Ut[U],lt=!0):M.samples>0&&S.useMultisampledRTT(M)===!1?F=J.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?F=Ut[G]:F=Ut,x.copy(M.viewport),b.copy(M.scissor),z=M.scissorTest}else x.copy(pt).multiplyScalar(tt).floor(),b.copy(St).multiplyScalar(tt).floor(),z=Wt;if(Pt.bindFramebuffer(P.FRAMEBUFFER,F)&&X&&Pt.drawBuffers(M,F),Pt.viewport(x),Pt.scissor(b),Pt.setScissorTest(z),lt){const At=J.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,G)}else if(xt){const At=J.get(M.texture),It=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,G||0,It)}N=-1},this.readRenderTargetPixels=function(M,U,G,X,F,lt,xt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){Pt.bindFramebuffer(P.FRAMEBUFFER,Tt);try{const At=M.texture,It=At.format,Ut=At.type;if(!Ot.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-X&&G>=0&&G<=M.height-F&&P.readPixels(U,G,X,F,Nt.convert(It),Nt.convert(Ut),lt)}finally{const At=A!==null?J.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(P.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(M,U,G,X,F,lt,xt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){const At=M.texture,It=At.format,Ut=At.type;if(!Ot.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-X&&G>=0&&G<=M.height-F){Pt.bindFramebuffer(P.FRAMEBUFFER,Tt);const Ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.bufferData(P.PIXEL_PACK_BUFFER,lt.byteLength,P.STREAM_READ),P.readPixels(U,G,X,F,Nt.convert(It),Nt.convert(Ut),0);const ne=A!==null?J.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(P.FRAMEBUFFER,ne);const oe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Uf(P,oe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,lt),P.deleteBuffer(Ct),P.deleteSync(oe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,G=0){M.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const X=Math.pow(2,-G),F=Math.floor(M.image.width*X),lt=Math.floor(M.image.height*X),xt=U!==null?U.x:0,Tt=U!==null?U.y:0;S.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,xt,Tt,F,lt),Pt.unbindTexture()},this.copyTextureToTexture=function(M,U,G=null,X=null,F=0){M.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,M=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let lt,xt,Tt,At,It,Ut;G!==null?(lt=G.max.x-G.min.x,xt=G.max.y-G.min.y,Tt=G.min.x,At=G.min.y):(lt=M.image.width,xt=M.image.height,Tt=0,At=0),X!==null?(It=X.x,Ut=X.y):(It=0,Ut=0);const Ct=Nt.convert(U.format),ne=Nt.convert(U.type);S.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const oe=P.getParameter(P.UNPACK_ROW_LENGTH),he=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qe=P.getParameter(P.UNPACK_SKIP_PIXELS),Qt=P.getParameter(P.UNPACK_SKIP_ROWS),Lt=P.getParameter(P.UNPACK_SKIP_IMAGES),we=M.isCompressedTexture?M.mipmaps[F]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,we.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,we.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tt),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,It,Ut,lt,xt,Ct,ne,we.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,It,Ut,we.width,we.height,Ct,we.data):P.texSubImage2D(P.TEXTURE_2D,F,It,Ut,lt,xt,Ct,ne,we),P.pixelStorei(P.UNPACK_ROW_LENGTH,oe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lt),F===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,G=null,X=null,F=0){M.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,M=arguments[2],U=arguments[3],F=arguments[4]||0);let lt,xt,Tt,At,It,Ut,Ct,ne,oe;const he=M.isCompressedTexture?M.mipmaps[F]:M.image;G!==null?(lt=G.max.x-G.min.x,xt=G.max.y-G.min.y,Tt=G.max.z-G.min.z,At=G.min.x,It=G.min.y,Ut=G.min.z):(lt=he.width,xt=he.height,Tt=he.depth,At=0,It=0,Ut=0),X!==null?(Ct=X.x,ne=X.y,oe=X.z):(Ct=0,ne=0,oe=0);const qe=Nt.convert(U.format),Qt=Nt.convert(U.type);let Lt;if(U.isData3DTexture)S.setTexture3D(U,0),Lt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)S.setTexture2DArray(U,0),Lt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const we=P.getParameter(P.UNPACK_ROW_LENGTH),te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),en=P.getParameter(P.UNPACK_SKIP_PIXELS),_i=P.getParameter(P.UNPACK_SKIP_ROWS),$e=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,he.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,At),P.pixelStorei(P.UNPACK_SKIP_ROWS,It),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ut),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Lt,F,Ct,ne,oe,lt,xt,Tt,qe,Qt,he.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,F,Ct,ne,oe,lt,xt,Tt,qe,he.data):P.texSubImage3D(Lt,F,Ct,ne,oe,lt,xt,Tt,qe,Qt,he),P.pixelStorei(P.UNPACK_ROW_LENGTH,we),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,en),P.pixelStorei(P.UNPACK_SKIP_ROWS,_i),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$e),F===0&&U.generateMipmaps&&P.generateMipmap(Lt),Pt.unbindTexture()},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&S.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),Pt.unbindTexture()},this.resetState=function(){D=0,C=0,A=null,Pt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===gl?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Br?"display-p3":"srgb"}}class Cr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new Cr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yv extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xu extends is{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pr=new B,Lr=new B,Hc=new ce,us=new vl,sr=new Hr,Po=new B,zc=new B;class Kv extends Se{constructor(t=new tn,e=new xu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Pr.fromBufferAttribute(e,s-1),Lr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pr.distanceTo(Lr);t.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;Hc.copy(s).invert(),us.copy(t.ray).applyMatrix4(Hc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,f=g-1;v<f;v+=c){const m=h.getX(v),T=h.getX(v+1),y=rr(this,t,us,l,m,T);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(g-1),f=h.getX(p),m=rr(this,t,us,l,v,f);m&&e.push(m)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,f=g-1;v<f;v+=c){const m=rr(this,t,us,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=rr(this,t,us,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Pr.fromBufferAttribute(o,s),Lr.fromBufferAttribute(o,r),e.distanceSqToSegment(Pr,Lr,Po,zc)>n)return;Po.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Po);if(!(l<t.near||l>t.far))return{distance:l,point:zc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class jv extends De{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ml extends tn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],f=n/2;let m=0;T(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(p,2));function T(){const E=new B,D=new B;let C=0;const A=(e-t)/n;for(let N=0;N<=r;N++){const Z=[],x=N/r,b=x*(e-t)+t;for(let z=0;z<=s;z++){const q=z/s,j=q*l+a,$=Math.sin(j),H=Math.cos(j);D.x=b*$,D.y=-x*n+f,D.z=b*H,u.push(D.x,D.y,D.z),E.set($,A,H).normalize(),d.push(E.x,E.y,E.z),p.push(q,1-x),Z.push(g++)}v.push(Z)}for(let N=0;N<s;N++)for(let Z=0;Z<r;Z++){const x=v[Z][N],b=v[Z+1][N],z=v[Z+1][N+1],q=v[Z][N+1];t>0&&(h.push(x,b,q),C+=3),e>0&&(h.push(b,z,q),C+=3)}c.addGroup(m,C,0),m+=C}function y(E){const D=g,C=new Kt,A=new B;let N=0;const Z=E===!0?t:e,x=E===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,f*x,0),d.push(0,x,0),p.push(.5,.5),g++;const b=g;for(let z=0;z<=s;z++){const j=z/s*l+a,$=Math.cos(j),H=Math.sin(j);A.x=Z*H,A.y=f*x,A.z=Z*$,u.push(A.x,A.y,A.z),d.push(0,x,0),C.x=$*.5+.5,C.y=H*.5*x+.5,p.push(C.x,C.y),g++}for(let z=0;z<s;z++){const q=D+z,j=b+z;E===!0?h.push(j,j+1,q):h.push(j+1,j,q),N+=3}c.addGroup(m,N,E===!0?1:2),m+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kr extends is{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Vc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Zv{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Jv=new Zv;class bl{constructor(t){this.manager=t!==void 0?t:Jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}bl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Qv extends bl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Vc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ws("img");function l(){h(),Vc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class yu extends bl{constructor(t){super(t)}load(t,e,n,s){const r=new De,o=new Qv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Mu extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class t_ extends Mu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Lo=new ce,Gc=new B,Wc=new B;class e_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class n_ extends e_{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class i_ extends Mu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new n_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const qc=new ce;class s_{constructor(t,e,n=0,s=1/0){this.ray=new vl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(t,e=!0,n=[]){return Na(t,this,n,e),n.sort($c),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Na(t[s],this,n,e);return n.sort($c),n}}function $c(i,t){return i.distance-t.distance}function Na(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Na(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);const bu="/assets/osrs",Xc=new Map;function Vr(i){let t=Xc.get(i);return t||(t=fetch(`${bu}/${i}`).then(e=>{if(!e.ok)throw new Error(`asset ${i}: ${e.status}`);return e.json()}),Xc.set(i,t)),t}const r_=()=>Vr("index.json"),Gr=i=>Vr(`models/${i}.json`),o_=i=>Vr(`anims/${i}.json`),a_=i=>Vr(`framemaps/${i}.json`),Su=i=>`${bu}/textures/${i}.png`,ko=.6,Yc=new Map;function l_(i){const t=Yc.get(i);if(t)return t;const e=(i>>10&63)/64+.5/64,n=(i>>7&7)/8+.5/8,s=(i&127)/128,r=(1-Math.abs(2*s-1))*n,o=r*(1-Math.abs(e*6%2-1)),a=s-r/2;let l=a,c=a,h=a;switch(Math.floor(e*6)){case 0:l+=r,c+=o;break;case 1:c+=r,l+=o;break;case 2:c+=r,h+=o;break;case 3:h+=r,c+=o;break;case 4:h+=r,l+=o;break;default:l+=r,h+=o;break}const u=[Math.pow(Math.min(1,Math.max(0,l)),ko),Math.pow(Math.min(1,Math.max(0,c)),ko),Math.pow(Math.min(1,Math.max(0,h)),ko)];return Yc.set(i,u),u}const Do=1/128;function c_(i){var o;let t=0,e=0;for(const a of i)t+=a.model.vx.length,e+=a.model.fa.length;const n={vx:new Int32Array(t),vy:new Int32Array(t),vz:new Int32Array(t),fa:new Int32Array(e),fb:new Int32Array(e),fc:new Int32Array(e),color:new Int32Array(e),alpha:new Uint8Array(e),render:new Uint8Array(e),tex:new Int32Array(e).fill(-1),uv:new Float32Array(e*6),skins:new Int32Array(t).fill(-1)};let s=0,r=0;for(const{model:a,recolor:l}of i){for(let c=0;c<a.vx.length;c++)n.vx[s+c]=a.vx[c],n.vy[s+c]=a.vy[c],n.vz[s+c]=a.vz[c],n.skins[s+c]=a.skins?a.skins[c]:-1;for(let c=0;c<a.fa.length;c++){const h=r+c;n.fa[h]=a.fa[c]+s,n.fb[h]=a.fb[c]+s,n.fc[h]=a.fc[c]+s;let u=a.color[c];if(l){const d=l[0].indexOf(u);d>=0&&(u=l[1][d])}n.color[h]=u,n.alpha[h]=a.alpha?a.alpha[c]&255:0,n.render[h]=a.render?a.render[c]:0,a.tex&&a.tex[c]>=0&&((o=a.uv)!=null&&o[c])&&(n.tex[h]=a.tex[c],n.uv.set(a.uv[c],h*6))}s+=a.vx.length,r+=a.fa.length}return n}const Kc=new Map;function h_(i){let t=Kc.get(i);return t||(t=new yu().load(Su(i)),t.magFilter=ke,t.minFilter=ke,t.wrapS=t.wrapT=Zi,t.colorSpace=Fe,Kc.set(i,t)),t}class Fa{constructor(t,e={}){R(this,"mesh");R(this,"m");R(this,"faces");R(this,"groups",[]);R(this,"px");R(this,"py");R(this,"pz");R(this,"position");R(this,"normal");R(this,"animatedTextures",[]);var d;this.m=c_(t);const n=this.m,s=n.fa.length;this.px=new Int32Array(n.vx),this.py=new Int32Array(n.vy),this.pz=new Int32Array(n.vz);for(let p=0;p<n.skins.length;p++){const g=n.skins[p];g<0||((d=this.groups)[g]??(d[g]=[])).push(p)}const r=new Map;for(let p=0;p<s;p++){if((n.render[p]&3)===2&&n.tex[p]<0||n.color[p]===65535&&n.tex[p]<0)continue;const g=n.tex[p]>=0?`t${n.tex[p]}`:n.alpha[p]?"alpha":"solid";let v=r.get(g);v||r.set(g,v=[]),v.push(p)}this.faces=[];const o=new tn,a=[];for(const[p,g]of r)if(o.addGroup(this.faces.length*3,g.length*3,a.length),this.faces.push(...g),p.startsWith("t")){const v=Number(p.slice(1)),f=h_(v),m=e[v];m!=null&&m.animSpeed&&this.animatedTextures.push({tex:f,dir:m.animDir,speed:m.animSpeed}),a.push(new kr({map:f,vertexColors:!0,transparent:g.some(T=>n.alpha[T]>0)}))}else a.push(new kr({vertexColors:!0,transparent:p==="alpha",depthWrite:p!=="alpha"}));const l=this.faces.length*3,c=new Float32Array(l*4),h=new Float32Array(l*2),u=new Vt;this.faces.forEach((p,g)=>{const v=n.tex[p]>=0,[f,m,T]=v?[1,1,1]:l_(n.color[p]);u.setRGB(f,m,T,Fe);const{r:y,g:E,b:D}=u,C=1-n.alpha[p]/255;for(let A=0;A<3;A++)c.set([y,E,D,C],(g*3+A)*4),v&&(h[(g*3+A)*2]=n.uv[p*6+A],h[(g*3+A)*2+1]=n.uv[p*6+3+A])}),this.position=new Re(new Float32Array(l*3),3),this.normal=new Re(new Float32Array(l*3),3),o.setAttribute("position",this.position),o.setAttribute("normal",this.normal),o.setAttribute("color",new Re(c,4)),o.setAttribute("uv",new Re(h,2)),this.mesh=new Le(o,a),this.mesh.frustumCulled=!1,this.writeGeometry()}resetPose(){this.px.set(this.m.vx),this.py.set(this.m.vy),this.pz.set(this.m.vz)}setFrame(t,e){if(this.resetPose(),t&&e){const n={x:0,y:0,z:0};for(let s=0;s<t.i.length;s++){const r=t.i[s];this.transform(e.types[r],e.maps[r],t.x[s],t.y[s],t.z[s],n)}}this.writeGeometry()}setFrameInterleaved(t,e,n,s,r){this.resetPose();let o={x:0,y:0,z:0};for(let a=0;a<t.i.length;a++){const l=t.i[a];(!r.has(l)||e.types[l]===0)&&this.transform(e.types[l],e.maps[l],t.x[a],t.y[a],t.z[a],o)}o={x:0,y:0,z:0};for(let a=0;a<n.i.length;a++){const l=n.i[a];(r.has(l)||s.types[l]===0)&&this.transform(s.types[l],s.maps[l],n.x[a],n.y[a],n.z[a],o)}this.writeGeometry()}transform(t,e,n,s,r,o){const{px:a,py:l,pz:c,groups:h}=this;if(t===0){let u=0,d=0,p=0,g=0;for(const v of e)for(const f of h[v]??[])d+=a[f],p+=l[f],g+=c[f],u++;u>0?(o.x=n+Math.trunc(d/u),o.y=s+Math.trunc(p/u),o.z=r+Math.trunc(g/u)):(o.x=n,o.y=s,o.z=r);return}if(t===1){for(const u of e)for(const d of h[u]??[])a[d]+=n,l[d]+=s,c[d]+=r;return}if(t===2){const u=(n&255)*8,d=(s&255)*8,p=(r&255)*8,g=f=>Math.trunc(65536*Math.sin(f*Math.PI/1024)),v=f=>Math.trunc(65536*Math.cos(f*Math.PI/1024));for(const f of e)for(const m of h[f]??[]){let T=a[m]-o.x,y=l[m]-o.y,E=c[m]-o.z;if(p!==0){const D=g(p),C=v(p),A=D*y+C*T>>16;y=C*y-D*T>>16,T=A}if(u!==0){const D=g(u),C=v(u),A=C*y-D*E>>16;E=D*y+C*E>>16,y=A}if(d!==0){const D=g(d),C=v(d),A=D*E+C*T>>16;E=C*E-D*T>>16,T=A}a[m]=T+o.x,l[m]=y+o.y,c[m]=E+o.z}return}if(t===3)for(const u of e)for(const d of h[u]??[])a[d]=Math.trunc((a[d]-o.x)*n/128)+o.x,l[d]=Math.trunc((l[d]-o.y)*s/128)+o.y,c[d]=Math.trunc((c[d]-o.z)*r/128)+o.z}writeGeometry(){const{m:t,px:e,py:n,pz:s}=this,r=this.position.array,o=this.normal.array,a=new Float32Array(e.length*3),l=new Float32Array(t.fa.length*3);for(const c of this.faces){const h=t.fa[c],u=t.fb[c],d=t.fc[c],p=e[u]-e[h],g=-(n[u]-n[h]),v=-(s[u]-s[h]),f=e[d]-e[h],m=-(n[d]-n[h]),T=-(s[d]-s[h]);let y=g*T-v*m,E=v*f-p*T,D=p*m-g*f;const C=Math.hypot(y,E,D)||1;y/=C,E/=C,D/=C,l[c*3]=y,l[c*3+1]=E,l[c*3+2]=D;for(const A of[h,u,d])a[A*3]+=y,a[A*3+1]+=E,a[A*3+2]+=D}this.faces.forEach((c,h)=>{const u=(t.render[c]&3)===1,d=[t.fa[c],t.fb[c],t.fc[c]];for(let p=0;p<3;p++){const g=d[p],v=(h*3+p)*3;if(r[v]=e[g]*Do,r[v+1]=-n[g]*Do,r[v+2]=-s[g]*Do,u)o[v]=l[c*3],o[v+1]=l[c*3+1],o[v+2]=l[c*3+2];else{const f=Math.hypot(a[g*3],a[g*3+1],a[g*3+2])||1;o[v]=a[g*3]/f,o[v+1]=a[g*3+1]/f,o[v+2]=a[g*3+2]/f}}}),this.position.needsUpdate=!0,this.normal.needsUpdate=!0}updateTextures(t){for(const{tex:e,dir:n,speed:s}of this.animatedTextures){const r=t*s*.25;n===1?e.offset.y=-r:n===2?e.offset.x=r:n===3?e.offset.y=r:n===4&&(e.offset.x=-r)}}}class u_{constructor(t,e,n=!0){R(this,"frame",0);R(this,"elapsed",0);this.frames=t,this.lengths=e,this.loop=n}advance(t){for(this.elapsed+=t/20;this.elapsed>=(this.lengths[this.frame]||1);)if(this.elapsed-=this.lengths[this.frame]||1,this.frame++,this.frame>=this.frames.length){if(!this.loop)return this.frame=this.frames.length-1,!1;this.frame=0}return!0}current(){return this.frames[this.frame]}}const d_={head:8,jaw:11,torso:4,arms:6,hands:9,legs:7,feet:10};async function f_(i,t){var r;const e=new Set;for(const o of t)for(const a of((r=i.items[o])==null?void 0:r.wearPos)??[])e.add(a);const n=[],s=async(o,a)=>{const l=await Promise.all(o.map(Gr));for(const c of l)n.push({model:c,recolor:a})};for(const[o,a]of Object.entries(i.kits)){const l=d_[o];l!==void 0&&!e.has(l)&&await s(a.models,a.recolor)}for(const o of t){const a=i.items[o];a&&await s(a.models,a.recolor)}return n}const Ui={dh_axe:{stand:2065,walk:2064,run:11466,attack:2067,block:424},tentacle:{stand:808,walk:1660,run:1661,attack:1658,block:1659,spec:1658},gmaul:{stand:1662,walk:1663,run:1664,attack:1665,block:1666,spec:1667},voidwaker:{stand:808,walk:819,run:824,attack:390,block:388,spec:11275},ags:{stand:7053,walk:7052,run:7043,attack:7045,block:7056,spec:7644},none:{stand:808,walk:819,run:824,attack:422,block:424}};async function ci(i,t){const e=await o_(i),n=new Map;for(const s of e.frames)n.has(s.fm)||n.set(s.fm,await a_(s.fm));return{data:e,maps:n,player:new u_(e.frames,e.lengths,t)}}const Vi=class Vi{constructor(t){R(this,"root",new fi);R(this,"mesh",null);R(this,"meshCache",new Map);R(this,"building",new Map);R(this,"wantKey","");R(this,"shownKey","");R(this,"worn",[]);R(this,"weaponKey",null);R(this,"shieldKey",null);R(this,"weapon","none");R(this,"stance",null);R(this,"base",null);R(this,"moving",!1);R(this,"action",null);R(this,"holding",!1);R(this,"gfx",[]);R(this,"walkAnim",null);R(this,"runAnim",null);R(this,"moveFrom",new B);R(this,"moveTo",new B);R(this,"moveStart",0);R(this,"moveVia",null);R(this,"gait",null);R(this,"faceAt",null);R(this,"stanceRequest",0);R(this,"interleaveMask");this.index=t}setWorn(t,e,n){const s=t.slice().sort().join(","),r=e&&Ui[e]?e:"none";if(s===this.worn.slice().sort().join(",")&&r===this.weapon)return;const o=r!==this.weapon;if(this.worn=t,this.weaponKey=e,this.shieldKey=n,this.weapon=r,this.showMesh(this.drawnItems()),o||!this.stance){const a=++this.stanceRequest,l=Ui[this.weapon];Promise.all([ci(l.stand,!0),ci(l.walk,!0),ci(l.run,!0)]).then(([c,h,u])=>{a===this.stanceRequest&&(this.stance=c,this.walkAnim=h,this.runAnim=u)})}}goTo(t,e,n,s,r){if(n===0){(this.moveTo.x!==t||this.moveTo.z!==e||this.gait)&&(this.root.position.set(t,0,e),this.moveFrom.set(t,0,e),this.moveTo.set(t,0,e),this.gait=null);return}this.moveFrom.copy(this.root.position),this.moveTo.set(t,0,e),this.moveVia=r?new B(r.x,0,r.z):null,this.moveStart=s,this.gait=n>=2?"run":"walk"}face(t,e=!1){this.faceAt=t,e&&t&&(this.root.rotation.y=Math.atan2(t.x-this.root.position.x,t.z-this.root.position.z))}updateMovement(t,e){const n=this.gait?Math.min(1,(t-this.moveStart)/Vi.TICK_MS):1,s=this.moveVia;s&&n<.5?this.root.position.lerpVectors(this.moveFrom,s,n*2):s?this.root.position.lerpVectors(s,this.moveTo,(n-.5)*2):this.root.position.lerpVectors(this.moveFrom,this.moveTo,n);const r=n<1&&this.gait!==null;r||(this.gait=null);const o=r?s&&n<.5?s:this.moveTo:this.faceAt;if(o){const a=o.x-this.root.position.x,l=o.z-this.root.position.z;if(a*a+l*l>1e-4){let h=Math.atan2(a,l)-this.root.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h));const u=Vi.TURN_PER_MS*e;this.root.rotation.y+=Math.abs(h)<=u?h:Math.sign(h)*u}}return r}drawnItems(){var e;const t=(e=this.action)==null?void 0:e.data;return this.worn.filter(n=>!(t&&(t.rightHand===0&&n===this.weaponKey||t.leftHand===0&&n===this.shieldKey)))}modelKey(t){return t.filter(e=>this.index.items[e]).sort().join(",")}build(t){const e=this.modelKey(t),n=this.meshCache.get(e);if(n)return Promise.resolve(n);let s=this.building.get(e);return s||(s=f_(this.index,t).then(r=>{const o=new Fa(r,this.index.textures);return this.meshCache.set(e,o),this.building.delete(e),o}),this.building.set(e,s)),s}async preload(t){await Promise.all(t.map(e=>this.build(e)))}showMesh(t){const e=this.modelKey(t);this.wantKey=e;const n=this.meshCache.get(e);if(n){this.swapTo(n,e);return}this.build(t).then(s=>{this.wantKey===e&&this.swapTo(s,e)})}swapTo(t,e){this.shownKey=e,t!==this.mesh&&(this.mesh&&this.root.remove(this.mesh.mesh),this.mesh=t,this.root.add(t.mesh),this.applyFrame())}async gearShown(){for(;this.wantKey!==this.shownKey;){const t=this.wantKey;await(this.building.get(t)??Promise.resolve()),this.wantKey===t&&this.meshCache.has(t)&&this.swapTo(this.meshCache.get(t),t)}}async play(t,e={}){if(e.minor&&this.action||this.holding)return;const n=await ci(t,!1);await this.gearShown(),!(e.minor&&this.action)&&(this.action=n,this.holding=!!e.hold,this.showMesh(this.drawnItems()))}reset(){this.action=null,this.holding=!1;for(const t of this.gfx)this.root.remove(t.mesh.mesh),t.mesh.mesh.geometry.dispose();this.gfx.length=0,this.showMesh(this.drawnItems())}static attackAnim(t,e){return t==="dh_axe"?e==="crush"?2067:2066:t==="voidwaker"&&e==="stab"?386:t==="ags"&&e==="crush"?7054:(Ui[t]??Ui.none).attack}blockAnim(){return this.shieldKey==="avernic"&&this.worn.includes("avernic")?4177:Ui[this.weapon].block}specAnim(){return Ui[this.weapon].spec}async graphic(t,e=0){var o;const n=(o=this.index.spotanims)==null?void 0:o[t];if(!n)return;const s=await Gr(n.model),r=new Fa([{model:s,recolor:n.recolor}],this.index.textures);r.mesh.scale.set(n.scale[0]/128,n.scale[1]/128,n.scale[0]/128),r.mesh.position.y=e,this.root.add(r.mesh),this.gfx.push({mesh:r,anim:n.anim>0?await ci(n.anim,!1):null})}update(t,e){var s,r;const n=this.updateMovement(e*1e3,t);this.moving=n,this.base=n?(this.gait==="run"?this.runAnim:this.walkAnim)??this.stance:this.stance,this.action&&!this.action.player.advance(t)&&!this.holding&&(this.action=null,this.showMesh(this.drawnItems())),(!this.action||n)&&((s=this.base)==null||s.player.advance(t)),this.applyFrame(),(r=this.mesh)==null||r.updateTextures(e);for(let o=this.gfx.length-1;o>=0;o--){const a=this.gfx[o];if(!a.anim||!a.anim.player.advance(t)){this.root.remove(a.mesh.mesh),a.mesh.mesh.geometry.dispose(),this.gfx.splice(o,1);continue}const l=a.anim.player.current();a.mesh.setFrame(l,a.anim.maps.get(l.fm)??null)}}applyFrame(){var r;if(!this.mesh)return;const t=this.action,e=this.base;if(t&&e&&this.moving&&((r=t.data.interleave)!=null&&r.length)){const o=t.player.current(),a=e.player.current(),l=t.maps.get(o.fm),c=e.maps.get(a.fm);if(l&&c){this.interleaveMask??(this.interleaveMask=new Map);let h=this.interleaveMask.get(t.data.id);h||this.interleaveMask.set(t.data.id,h=new Set(t.data.interleave)),this.mesh.setFrameInterleaved(o,l,a,c,h);return}}const n=t??e;if(!n){this.mesh.setFrame(null,null);return}const s=n.player.current();this.mesh.setFrame(s,n.maps.get(s.fm)??null)}};R(Vi,"TICK_MS",600),R(Vi,"TURN_PER_MS",Math.PI*2/1280);let Es=Vi;function p_(){const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=Math.min(screen.width,screen.height)<600;return i&&t&&!new URLSearchParams(location.search).has("pc")}function m_(){return new Promise(i=>{const t=document.createElement("div");t.className="phone-notice";const e=location.origin+"/";t.innerHTML=`
      <div class="pn-card">
        <img class="pn-icon" src="/assets/osrs/items/dh_helm.png" alt="" />
        <h1>DH Simulator</h1>
        <p class="pn-lead">Practise Dharok’s (DH) PvP fights from Old School RuneScape against bots, from Easy to Elite, with a review of your mistakes after every fight.</p>
        <p class="pn-pc"><b>Made for PC</b> (mouse and keyboard). Open this link on your computer to play:</p>
        <div class="pn-link">${e.replace(/^https?:\/\//,"").replace(/\/$/,"")}</div>
        <button class="pn-copy">Copy link</button>
        <button class="pn-anyway">Try it anyway</button>
        <p class="pn-small">Free, no login, no download. Fan-made, not affiliated with Jagex.</p>
      </div>`,document.body.append(t);const n=t.querySelector(".pn-copy");n.addEventListener("click",async()=>{var s,r;try{await navigator.clipboard.writeText(e),n.textContent="Copied!"}catch{const o=document.createRange();o.selectNodeContents(t.querySelector(".pn-link")),(s=getSelection())==null||s.removeAllRanges(),(r=getSelection())==null||r.addRange(o),n.textContent="Select and copy the link above"}}),t.querySelector(".pn-anyway").addEventListener("click",()=>{t.remove(),i()})})}function g_(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d");for(let n=0;n<4;n++)for(let s=0;s<4;s++){const r=112+Math.floor(Math.random()*18);t.fillStyle=`rgb(${r},${r-4},${r-12})`,t.fillRect(s*32,n*32,32,32);for(let o=0;o<18;o++){const a=r-14+Math.floor(Math.random()*28);t.fillStyle=`rgb(${a},${a-4},${a-12})`,t.fillRect(s*32+Math.floor(Math.random()*30),n*32+Math.floor(Math.random()*30),2,2)}t.fillStyle="rgba(40,36,30,0.55)",t.fillRect(s*32,n*32,32,1),t.fillRect(s*32,n*32,1,32)}const e=new jv(i);return e.wrapS=e.wrapT=Zi,e.magFilter=ke,e.colorSpace=Fe,e}function ds(i){return{x:i.x-7+.5,z:-(i.y-7)+.5}}function jc(i,t){return{x:Math.floor(i)+7,y:-Math.floor(t)+7}}function v_(){const i=new fi,t=-7,e=t+Qe,n=.06,s=new $i({color:"#7a1f12",depthWrite:!1}),r=(l,c,h,u)=>{const d=new Le(new vi(h,u),s);d.rotation.x=-Math.PI/2,d.position.set(l,.005,c),d.renderOrder=-1,i.add(d)},o=(t+e)/2,a=Qe+n;return r(o,t,a,n),r(o,e,a,n),r(t,o,n,a),r(e,o,n,a),i}function wu(i){if(document.getElementById("gfx-problem"))return;const t=document.createElement("div");t.id="gfx-problem",t.innerHTML=`<div><b>Graphics problem</b><p>${i}</p><p class="small">If it keeps happening: close the tab, then open the link again in a new tab. In Chrome, check that "Use graphics acceleration" is on (Settings, System).</p><button>Reload</button></div>`,t.querySelector("button").addEventListener("click",()=>location.reload()),document.body.append(t)}function __(i){return new kr({color:i,flatShading:!0})}class Dr{constructor(t,e){R(this,"renderer");R(this,"scene",new Yv);R(this,"camera",new Ze(45,1,.1,200));R(this,"player");R(this,"opponent");R(this,"yaw",1.3);R(this,"pitch",.62);R(this,"dist",7.5);R(this,"keys",new Set);R(this,"tmp",new B);R(this,"focus",new B);R(this,"focusSet",!1);R(this,"timeScale",1);R(this,"plainGround",[]);R(this,"map",null);R(this,"groundMeshes",[]);R(this,"props",[]);R(this,"mapName","");R(this,"heights",null);R(this,"mapCentre",[0,0]);R(this,"mapBounds",null);R(this,"tileMarker");R(this,"raycaster",new s_);R(this,"hitboxes",{player:Dr.makeHitbox(),opponent:Dr.makeHitbox()});this.index=e,this.player=new Es(e),this.opponent=new Es(e),this.renderer=new Xv({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.addEventListener("webglcontextlost",c=>{c.preventDefault(),wu("The 3D graphics were reset by your browser. Reload the page to continue.")}),this.scene.background=new Vt("#7aa0c8"),this.scene.fog=new Cr("#7aa0c8",28,70),this.scene.add(new t_("#ffffff","#6a6050",2.2));const n=new i_("#fff6e6",1.2);n.position.set(-4,10,6),this.scene.add(n);const s=g_();s.repeat.set(14,14);const r=new Le(new vi(56,56),new kr({map:s}));r.rotation.x=-Math.PI/2;const o=new Le(new vi(200,200),__("#4f7a35"));o.rotation.x=-Math.PI/2,o.position.y=-.01;for(const[c,h]of[[o,-2],[r,-1]])c.material.depthWrite=!1,c.renderOrder=h,this.scene.add(c);this.plainGround=[r,o],this.scene.add(this.player.root,this.opponent.root),this.scene.add(v_()),this.player.root.add(this.hitboxes.player),this.opponent.root.add(this.hitboxes.opponent);const a=.5,l=new tn().setFromPoints([new B(-a,0,-a),new B(a,0,-a),new B(a,0,a),new B(-a,0,a),new B(-a,0,-a)]);this.tileMarker=new Kv(l,new xu({color:"#ff3030",transparent:!0,opacity:.9,depthTest:!1})),this.tileMarker.position.set(.5,.01,.5),this.tileMarker.renderOrder=0,this.scene.add(this.tileMarker),this.bindCamera(t),this.resize(),window.addEventListener("resize",()=>this.resize())}bindCamera(t){window.addEventListener("keydown",r=>{r.key.startsWith("Arrow")&&(this.keys.add(r.key),r.preventDefault())}),window.addEventListener("keyup",r=>this.keys.delete(r.key)),window.addEventListener("blur",()=>this.keys.clear());let e=!1,n=0,s=0;t.addEventListener("mousedown",r=>{r.button===1&&(r.preventDefault(),e=!0,n=r.clientX,s=r.clientY)}),t.addEventListener("auxclick",r=>{r.button===1&&r.preventDefault()}),window.addEventListener("mousemove",r=>{if(e){if(!(r.buttons&4)){e=!1;return}this.yaw-=(r.clientX-n)*.006,this.pitch+=(r.clientY-s)*.004,n=r.clientX,s=r.clientY,this.clampPitch()}}),window.addEventListener("mouseup",r=>{r.button===1&&(e=!1)}),t.addEventListener("wheel",r=>{r.ctrlKey||(this.dist=Math.min(16,Math.max(3.5,this.dist+Math.sign(r.deltaY)*.6)),r.preventDefault())},{passive:!1}),t.addEventListener("contextmenu",r=>r.preventDefault())}clampPitch(){this.pitch=Math.min(1.35,Math.max(.2,this.pitch))}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}render(t,e){const n=1.8*e;this.keys.has("ArrowLeft")&&(this.yaw+=n),this.keys.has("ArrowRight")&&(this.yaw-=n),this.keys.has("ArrowUp")&&(this.pitch+=n*.6),this.keys.has("ArrowDown")&&(this.pitch-=n*.6),this.clampPitch();const s=this.player.root.position,r=this.focus;!this.focusSet||r.distanceTo(s)>500/128?(r.copy(s),this.focusSet=!0):r.lerp(s,1-Math.pow(15/16,e*1e3/20));const o=Math.cos(this.pitch);this.camera.position.set(r.x+Math.sin(this.yaw)*o*this.dist,r.y+1+Math.sin(this.pitch)*this.dist,r.z+Math.cos(this.yaw)*o*this.dist),this.camera.lookAt(r.x,r.y+1,r.z);for(const a of this.props){if(!a.anim)continue;a.anim.player.advance(e*1e3*this.timeScale);const l=a.anim.player.current();a.mesh.setFrame(l,a.anim.maps.get(l.fm)??null)}this.player.update(e*1e3*this.timeScale,t/1e3),this.opponent.update(e*1e3*this.timeScale,t/1e3);for(const a of[this.player,this.opponent])a.root.position.y=this.groundHeight(a.root.position.x,a.root.position.z);this.tileMarker.position.y=this.groundHeight(this.tileMarker.position.x,this.tileMarker.position.z)+.01,this.renderer.render(this.scene,this.camera)}pick(t,e){const n=new Kt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);this.raycaster.setFromCamera(n,this.camera);const s=this.raycaster.intersectObjects([this.hitboxes.player,this.hitboxes.opponent],!1);return s.length?s[0].object===this.hitboxes.opponent?"opponent":"player":null}async loadMap(t){const e=`/assets/osrs/maps/${t}`,n=await(await fetch(`${e}.json`)).json(),s=await(await fetch(`${e}.bin`)).arrayBuffer(),r=new Int16Array(s,0,n.positionBytes/2),o=new Uint8Array(s,n.positionBytes,n.colourBytes),a=new Int16Array(s,n.uvOffset,n.uvBytes/2),l=new Float32Array(256);for(let p=0;p<256;p++)l[p]=new Vt().setRGB(p/255,p/255,p/255,Fe).r;const c=new fi,h=[];for(const p of n.parts){const g=p.start*9,v=(p.start+p.count)*9,f=new Float32Array(v-g),m=new Float32Array(v-g);for(let D=g;D<v;D++)f[D-g]=r[D]/128,m[D-g]=l[o[D]];const T=new tn;T.setAttribute("position",new Re(f,3)),T.setAttribute("color",new Re(m,3));let y;if(p.texture>=0){const D=new Float32Array(p.count*6);for(let A=0;A<p.count;A++){const N=(p.uvStart+A)*6;for(let Z=0;Z<3;Z++)D[A*6+Z*2]=a[N+Z]/1024,D[A*6+Z*2+1]=a[N+3+Z]/1024}T.setAttribute("uv",new Re(D,2));const C=new yu().load(Su(p.texture));C.magFilter=ke,C.wrapS=C.wrapT=Zi,C.colorSpace=Fe,y=new $i({map:C,vertexColors:!0,side:ln,color:new Vt(2,2,2),alphaTest:.5})}else y=new $i({vertexColors:!0,side:ln});const E=new Le(T,y);p.kind==="ground"&&(y.depthWrite=!1,E.renderOrder=-1,h.push(E)),c.add(E)}this.map&&(this.scene.remove(this.map),this.map.traverse(p=>{var v;if(!(p instanceof Le))return;p.geometry.dispose();const g=p.material;(v=g.map)==null||v.dispose(),g.dispose()})),this.map=c,this.groundMeshes=h,this.mapName=t,this.scene.add(c),this.heights=n.heights,this.mapCentre=n.centre,this.mapBounds=n.bounds;for(const p of this.plainGround)p.visible=!1;this.scene.background=new Vt("#000000");const[u,d]=t==="colosseum"?[34,62]:[22,40];this.scene.fog=new Cr("#000000",u,d)}async setProps(t){var e;for(const n of this.props)this.scene.remove(n.mesh.mesh),n.mesh.mesh.geometry.dispose();this.props=[];for(const n of t){const s=(e=this.index.objects)==null?void 0:e[n.object];if(!s)continue;const r=await Promise.all(s.models.map(h=>Gr(h))),o=new Fa(r.map(h=>({model:h,recolor:s.recolor})),this.index.textures);o.mesh.scale.set(s.scale[0]/128,s.scale[1]/128,s.scale[2]/128);const a=n.x-this.mapCentre[0]+.5,l=-(n.y-this.mapCentre[1])+.5;o.mesh.position.set(a,this.groundHeight(a,l),l),o.mesh.rotation.y=-n.rot*Math.PI/2;const c=s.anim>0?await ci(s.anim,!0):null;c&&c.player.advance(Math.random()*c.data.lengths.reduce((h,u)=>h+u,0)*20),this.scene.add(o.mesh),this.props.push({mesh:o,anim:c})}}get mapPlace(){return this.mapBounds?{centre:this.mapCentre,bounds:this.mapBounds}:null}groundHeight(t,e){const n=this.heights,s=this.mapBounds;if(!n||!s)return 0;const r=t+this.mapCentre[0]-s.x0,o=this.mapCentre[1]+1-e-s.y0,a=Math.floor(r),l=Math.floor(o);if(a<0||l<0||a>=n.width-1||l>=n.height-1)return 0;const c=r-a,h=o-l,u=(p,g)=>n.values[g*n.width+p];return((u(a,l)*(1-c)+u(a+1,l)*c)*(1-h)+(u(a,l+1)*(1-c)+u(a+1,l+1)*c)*h)/128}pickTile(t,e){const n=new Kt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);if(this.raycaster.setFromCamera(n,this.camera),this.groundMeshes.length){const r=this.raycaster.intersectObjects(this.groundMeshes,!1);if(r.length)return jc(r[0].point.x,r[0].point.z)}const s=this.raycaster.ray.intersectPlane(new Wn(new B(0,1,0),0),this.tmp);return s?jc(s.x,s.z):null}get cameraYaw(){return this.yaw}static makeHitbox(){const t=new Le(new Ml(.38,.38,1.9,8),new $i({visible:!1}));return t.position.y=.95,t}screenAbove(t,e=1.95){const n=t.root.localToWorld(this.tmp.set(0,e,0)).project(this.camera);return{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight,visible:n.z<1}}}const x_={angler:1/0,karambwan:1/0,brew:3,restore:3,sanfew:3,recoil:2,combat:2},y_=[["restore","sanfew"]],Eu=i=>y_.find(t=>t.includes(i))??[i];function Oa(i){return x_[i]??1}function Zc(i,t){const e=Eu(t);return i.inv.filter(n=>n&&e.includes(n.id)).length+Object.values(i.equip).filter(n=>n&&e.includes(n.id)).length}function Tu(i){return!i||!jt[i.id]?null:jt[i.id].kind==="potion"?{id:i.id,doses:4}:i.id==="venge_sack"?{id:i.id,qty:40}:i.id==="tab"?{id:i.id,qty:10}:{id:i.id}}function or(i){return Tu({id:i})}function Au(){return{inv:Ih(),equip:Uh()}}function Jc(i,t){var r;if(!t||!Array.isArray(t.inv)||t.inv.length!==28||typeof t.equip!="object")return;const e=JSON.parse(JSON.stringify(t)),n=new Map,s=o=>{if(!Tu(o))return!1;const a=Eu(o.id)[0],l=(n.get(a)??0)+1;return n.set(a,l),l<=Oa(o.id)};i.equip={};for(const[o,a]of Object.entries(e.equip))a&&((r=jt[a.id])==null?void 0:r.slot)===o&&s(a)&&(i.equip[o]=a);i.inv=e.inv.map(o=>s(o)?o:null)}const Qc="/assets/osrs/fonts";class Sl{constructor(t,e){R(this,"tinted",new Map);this.metrics=t,this.atlas=e}static async load(t){const e=await(await fetch(`${Qc}/${t}/metrics.json`)).json(),n=new Image;return await new Promise((s,r)=>{n.onload=()=>s(),n.onerror=()=>r(new Error(`font atlas ${t} failed to load`)),n.src=`${Qc}/${t}/atlas.png`}),new Sl(e,n)}glyph(t){return this.metrics.glyphs[t]??this.metrics.glyphs[63]}tint(t,e){const n=`${t}|${e}`;let s=this.tinted.get(n);if(s)return s;const r=this.metrics.glyphs[t];if(!r||r.ax===void 0||r.ay===void 0)return null;s=document.createElement("canvas"),s.width=r.w,s.height=r.h;const o=s.getContext("2d");return o.drawImage(this.atlas,r.ax,r.ay,r.w,r.h,0,0,r.w,r.h),o.globalCompositeOperation="source-in",o.fillStyle=e,o.fillRect(0,0,s.width,s.height),this.tinted.set(n,s),s}width(t){var n;let e=0;for(const s of eh(t,"#000"))for(const r of s.text)e+=((n=this.glyph(th(r)))==null?void 0:n.advance)??0;return e}get height(){return this.metrics.maxHeight}draw(t,e,n,s,r,o=!0){let a=n;for(const l of eh(e,r))for(const c of l.text){const h=th(c),u=this.glyph(h);if(u){if(u.w&&u.h){if(o){const p=this.tint(h,"#000");p&&t.drawImage(p,a+u.x+1,s+u.y+1)}const d=this.tint(h,l.color);d&&t.drawImage(d,a+u.x,s+u.y)}a+=u.advance}}return a-n}}function th(i){const t=i.charCodeAt(0);return t<256?t:63}function eh(i,t){const e=[],n=/<col=([0-9a-fA-F]{6})>|<\/col>/g;let s=t,r=0,o;for(;o=n.exec(i);)o.index>r&&e.push({text:i.slice(r,o.index),color:s}),s=o[1]?"#"+o[1]:t,r=n.lastIndex;return r<i.length&&e.push({text:i.slice(r),color:s}),e}const Ru=new Map;async function M_(){const i=["p11_full","p12_full","b12_full","q8_full"];await Promise.all(i.map(async t=>Ru.set(t,await Sl.load(t))))}function b_(i){const t=Ru.get(i);if(!t)throw new Error(`font ${i} not loaded`);return t}function xe(i,t="p12_full",e="#ff981f",n=!0){const s=b_(t),r=document.createElement("canvas");return r.width=Math.max(1,s.width(i)+(n?1:0)),r.height=s.height+(n?1:0),r.className="osrs-text",s.draw(r.getContext("2d"),i,0,0,e,n),r}const nh=[{id:"combat",label:"Combat options"},{id:"skills",label:"Skills"},{id:"inventory",label:"Inventory"},{id:"equipment",label:"Worn equipment"},{id:"prayer",label:"Prayer"},{id:"magic",label:"Magic"},{id:"settings",label:"Settings"}],ih=["Escape","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"],sh=i=>i==="Escape"?"Esc":i,Cu="dhsim.keybinds",S_={combat:"F1",skills:"F2",inventory:"Escape",equipment:"F4",prayer:"F5",magic:"F6",settings:"F10"};function w_(){try{const i=ie(Cu);if(i)return JSON.parse(i)}catch{}return{...S_}}function E_(i){de(Cu,JSON.stringify(i))}function T_(i,t){for(const[e,n]of Object.entries(i))if(n===t)return e;return null}const vn=i=>`/assets/osrs/sprites/${i}`,Te="#ff981f",ri="#ffff00",Gn="#ffffff",rh="ff9040",A_=[{id:"combat",icon:"combat"},{id:"skills",icon:"skills"},{id:"quests",icon:"character-summary"},{id:"inventory",icon:"inventory"},{id:"equipment",icon:"equipment"},{id:"prayer",icon:"prayer"},{id:"magic",icon:"magic-lunar"},{id:"friends",icon:"friends"},{id:"account",icon:"account"},{id:"clan",icon:"clan"},{id:"settings",icon:"settings"},{id:"emotes",icon:"emotes"},{id:"music",icon:"music"}],R_=["thick-skin","burst-of-strength","clarity-of-thought","sharp-eye","mystic-will","rock-skin","superhuman-strength","improved-reflexes","rapid-restore","rapid-heal","protect-item","hawk-eye","mystic-lore","steel-skin","ultimate-strength","incredible-reflexes","protect-from-magic","protect-from-missiles","protect-from-melee","eagle-eye","mystic-might","retribution","redemption","smite","preserve","chivalry","piety","rigour","augury"],C_={piety:"piety",smite:"smite"},Io=["lunar-home-teleport","bake-pie","geomancy","cure-plant","monster-examine","npc-contact","cure-other","humidify","moonclan-teleport","tele-group-moonclan","cure-me","ourania-teleport","hunter-kit","waterbirth-teleport","tele-group-waterbirth","cure-group","stat-spy","barbarian-teleport","tele-group-barbarian","spin-flax","superglass-make","tan-leather","khazard-teleport","tele-group-khazard","dream","string-jewellery","stat-restore-pot-share","magic-imbue","fertile-soil","boost-potion-share","fishing-guild-teleport","tele-group-fishing-guild","plank-make","catherby-teleport","tele-group-catherby","recharge-dragonstone","ice-plateau-teleport","tele-group-ice-plateau","energy-transfer","heal-other","vengeance-other","vengeance","heal-group","spellbook-swap"],P_={head:[77,4],cape:[36,43],neck:[77,43],ammo:[118,43],weapon:[21,82],body:[77,82],shield:[133,82],legs:[77,122],hands:[21,162],feet:[77,162],ring:[133,162]};function L_(i){const t=i.doses??4,e=`${t} dose${t===1?"":"s"}`;return i.id==="brew"?`${e} of Saradomin brew.`:i.id==="restore"?`${e} of super restore potion.`:i.id==="combat"?`${e} of super combat potion.`:i.id==="sanfew"?`A ${t} dose Sanfew Serum.`:jt[i.id].examine}function Xi(i){return`/assets/osrs/items/${i.doses?`${i.id}_${i.doses}`:i.id}.png`}function Rt(i,t="",e){const n=document.createElement(i);return t&&(n.className=t),e==null||e.append(n),n}function Jt(i,t="",e){const n=Rt("img","spr "+t,e);return n.src=vn(i),n.draggable=!1,n.alt="",n}function Bt(i,t,e){return i.style.left=t+"px",i.style.top=e+"px",i}function se(i,t,e,n,s="p12_full",r=Te,o=!0,a=!1){const l=xe(t,s,r,o);return l.style.position="absolute",Bt(l,a?Math.round(e-l.width/2):e,n),i.append(l),l}class k_{constructor(t,e,n){R(this,"tab","inventory");R(this,"panel");R(this,"content");R(this,"tabRow");R(this,"chatLines");R(this,"menu");R(this,"hover");R(this,"orbs",{});R(this,"binds",w_());R(this,"reorderSpells",!1);R(this,"spellDrag",null);R(this,"messages",[]);R(this,"drag",null);R(this,"settingsScroll",0);R(this,"boosts",[]);R(this,"xpBox",null);R(this,"oppDot",null);R(this,"mapImg");R(this,"mapInfo",null);R(this,"pidStatus",null);R(this,"pidBox",null);R(this,"vengeBox",null);R(this,"vengeSecs",null);R(this,"opponentBox",null);R(this,"opponentUntil",0);R(this,"opponentKey","");R(this,"lastPanelKey","");this.root=t,this.p=e,this.send=n;const s=Rt("div","minimap",t),r=Rt("div","minimap-map",s);this.mapImg=Rt("img","mm-img",r),this.mapImg.alt="",this.mapImg.hidden=!0,Rt("div","mm-dot you",r),Rt("div","mm-dot opp",r),Jt("minimap/frame.png","minimap-frame",s),Bt(Jt("minimap/compass.png","minimap-compass",s),2,1),Bt(Jt("minimap/xp-orb.png","abs",s),2,50),Bt(Jt("minimap/worldmap.png","abs",s),156,126),Bt(Jt("minimap/wiki.png","abs",s),140,150),Bt(Jt("minimap/logout-x.png","abs",s),158,0);const o={hp:[-4,70],prayer:[-4,104],run:[6,136],spec:[28,161]};for(const f of["hp","prayer","run","spec"]){const m=Bt(Rt("div","orb",s),...o[f]);Jt("orbs/frame.png","orb-frame",m);const T=Bt(Rt("div","orb-ball",m),27,4);Jt("orbs/fill-empty.png","abs",T);const y=Rt("div","orb-fill",T);y.style.backgroundImage=`url(${vn(`orbs/fill-${f}.png`)})`,Jt(`orbs/icon-${f}.png`,"abs orb-icon",T),Rt("div","orb-num",m),this.orbs[f]=m}this.orbs.spec.addEventListener("pointerdown",f=>{f.preventDefault(),this.send({type:"spec"})}),this.orbs.prayer.addEventListener("pointerdown",f=>{f.preventDefault(),this.selectTab("prayer")}),this.orbs.run.addEventListener("pointerdown",f=>{f.preventDefault(),f.button===0&&this.send({type:"toggleRun"})}),this.oppDot=s.querySelector(".mm-dot.opp");const a=Rt("div","chatbox",t),l=Jt("chat/background.png","abs",a);this.chatLines=Bt(Rt("div","chat-lines",a),8,6);const c=Bt(Rt("div","chat-strip",a),0,142);Jt("chat/buttons-strip.png","abs",c);let h=1,u=!0;const d=[],p=()=>d.forEach((f,m)=>{f.src=vn(m===h&&u?"chat/tab-button-selected.png":"chat/tab-button.png")});["All","Game","Public","Private","Channel","Clan","Trade"].forEach((f,m)=>{const T=Bt(Rt("div","chat-button",c),5+m*62,1);d.push(Jt("chat/tab-button.png","abs",T)),se(T,f,28,5,"p11_full",Gn,!0,!0),T.addEventListener("pointerdown",y=>{y.preventDefault(),y.button===0&&(u=!(u&&m===h),h=m,l.hidden=!u,this.chatLines.hidden=!u,a.classList.toggle("collapsed",!u),p())})}),p();const g=Bt(Rt("div","chat-button",c),438,1);Jt("chat/report-button.png","abs",g),se(g,"Report",40,5,"p11_full",Gn,!0,!0);const v=Rt("div","side",t);this.panel=Rt("div","side-panel",v),Jt("side/panel-default.png","abs",this.panel),this.content=Bt(Rt("div","side-content",this.panel),7,7),this.tabRow=Rt("div","tab-row",v),this.menu=Rt("div","ctxmenu",t),this.menu.hidden=!0,this.hover=Bt(Rt("div","hovertext",t),4,4),this.buildTabs(),document.addEventListener("pointerdown",f=>{!this.menu.hidden&&!this.menu.contains(f.target)&&this.closeMenu()}),document.addEventListener("pointermove",f=>this.onDragMove(f)),document.addEventListener("pointerup",f=>this.onDragEnd(f)),window.addEventListener("keydown",f=>this.onKey(f)),this.refresh()}refreshBoosts(){if(!this.boosts.length){const e=Rt("div","boosts",this.root.querySelector(".minimap"));for(const n of["attack","strength","defence","magic"]){const s=Rt("div","boost",e);Jt(`skills/${n}.png`,"boost-icon",s),this.boosts.push({skill:n,label:Rt("div","boost-num",s),shown:""})}}const t=this.root.querySelector(".boosts");if(t.hidden=!No(),!t.hidden)for(const e of this.boosts){const n=this.p.level[e.skill],s=this.p.base[e.skill];e.label.parentElement.hidden=n===s;const r=n>s?"#00ff00":"#ff3030",o=`${n}|${r}`;o!==e.shown&&(e.shown=o,e.label.innerHTML="",e.label.append(xe(String(n),"p11_full",r,!0)))}}xpDrop(t,e,n){this.xpBox||(this.xpBox=Rt("div","xp-drops",this.root.querySelector(".minimap")));const s=Rt("div","xp-drop",this.xpBox);for(const a of t)Jt(`skills/${a}.png`,"xp-icon",s);const r=xe(String(e),"p12_full",Gn,!0);r.className="xp-text",s.append(r);const o=Rt("div","xp-hit",s);o.style.backgroundImage=`url(${vn("hitsplats/damage.png")})`,o.append(xe(String(n),"p11_full",Gn,!0)),requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.add("rise"))),setTimeout(()=>s.remove(),2100)}setMinimap(t,e,n){this.mapInfo={centre:e,bounds:n},this.mapImg.hidden=!1,this.mapImg.src=t}setMinimapView(t,e,n){const s=this.mapInfo;if(!s)return;const r=(t+s.centre[0]-s.bounds.x0)*4,o=(s.bounds.y1-(s.centre[1]+1-e))*4;this.mapImg.style.transformOrigin=`${r}px ${o}px`,this.mapImg.style.transform=`translate(${76-r}px, ${76-o}px) rotate(${n}rad)`}setMinimapDot(t,e,n){if(!this.oppDot)return;const s=t*Math.cos(n)-e*Math.sin(n),r=-t*Math.sin(n)-e*Math.cos(n);Bt(this.oppDot,Math.round(75+s*4),Math.round(75-r*4))}message(t){this.messages.push(t),this.messages.length>8&&this.messages.shift(),this.chatLines.innerHTML="",this.messages.forEach((n,s)=>{const r=xe(n,"p12_full","#000000",!1);r.style.position="absolute",Bt(r,0,s*14+(8-this.messages.length)*14),this.chatLines.append(r)});const e=xe(`${this.p.name}: <col=0000ff>*</col>`,"p12_full","#000000",!1);e.style.position="absolute",Bt(e,0,116),this.chatLines.append(e)}setupPractice(t){const e=Rt("div","pp",this.root);e.style.zoom=String(xs());const n=Rt("div","pp-top",e);this.pidBox=Rt("div","pp-pid",n),this.pidStatus=Rt("div","pp-pid-text",this.pidBox),this.vengeBox=Rt("div","pp-venge",n),Jt("magic/lunar/vengeance-on.png","pp-venge-icon",this.vengeBox),this.vengeSecs=Rt("span","pp-venge-secs",this.vengeBox),this.vengeBox.hidden=!0;const s=(l,c,h)=>{const u=Rt("div",l,e);return u.textContent=c,u.addEventListener("pointerdown",d=>{d.preventDefault(),d.button===0&&(h(),this.refresh(!0))}),u},r=s("pp-spec","",t.restoreSpec);r.textContent="",Jt("orbs/icon-spec.png","pp-spec-icon",r),Rt("span","pp-spec-label",r).textContent="Restore spec";const o=s("pp-reset","",t.resetFight);o.innerHTML='<svg class="pp-reset-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg><span class="pp-spec-label">Reset fight</span>';const a=s("pp-reset","",t.menu);a.innerHTML='<svg class="pp-reset-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg><span class="pp-spec-label">Menu</span>',this.refreshPractice()}refreshPractice(){this.pidBox&&(this.pidBox.style.visibility=Uo()?"visible":"hidden")}refreshVengeTimer(){if(!this.vengeBox||!this.vengeSecs)return;const t=this.p.timers.venge,e=t>0&&Fo();this.vengeBox.hidden=!e,e&&(this.vengeSecs.textContent=`${Math.ceil(t*.6)}s`)}setPid(t){!this.pidStatus||!this.pidBox||(this.pidBox.classList.toggle("yes",t),this.pidBox.classList.toggle("no",!t),this.pidStatus.textContent=t?"PID: YES":"PID: NO")}showOpponent(t,e,n){this.opponentUntil=performance.now()+1e4;const s=`${t}|${e}|${n}`;if(this.opponentBox||(this.opponentBox=Bt(Rt("div","opp-box",this.root),4,24)),this.opponentBox.style.zoom=String(xs()),this.opponentBox.hidden=!1,s===this.opponentKey)return;this.opponentKey=s;const r=this.opponentBox;r.innerHTML="",se(r,t,64,3,"b12_full",Gn,!0,!0);const o=Bt(Rt("div","opp-bar",r),4,19);Bt(Rt("div","opp-fill",o),0,0).style.width=`${Math.round(120*Math.max(0,e)/n)}px`,se(o,`${Math.max(0,e)}/${n}`,60,2,"p11_full",Gn,!0,!0)}updateOpponent(t){this.opponentBox&&t>this.opponentUntil&&(this.opponentBox.hidden=!0)}setHover(t){if(this.hover.innerHTML="",!(t!=null&&t.length))return;const e=t[0],n=t.filter(r=>r.label!=="Cancel").length-1,s=`${e.label}${e.target?` <col=${e.targetColor??rh}>${e.target}</col>`:""}${n>0?`<col=ffffff> / ${n} more options</col>`:""}`;this.hover.append(xe(s,"b12_full",Gn,!0))}buildTabs(){this.tabRow.innerHTML="",A_.forEach((t,e)=>{const n=Bt(Rt("div","tab",this.tabRow),e*33,0);Jt(this.tab===t.id?"tabs/stone-selected.png":"tabs/stone.png","abs",n),Jt(`tabs/${t.icon}.png`,"abs",n),n.addEventListener("pointerdown",s=>{s.preventDefault(),this.toggleTab(t.id)})}),this.panel.hidden=this.tab===null}toggleTab(t){this.tab=this.tab===t?null:t,this.buildTabs(),this.refresh()}selectTab(t){this.tab=t,this.buildTabs(),this.refresh()}onKey(t){if(!ih.includes(t.key))return;t.preventDefault();const e=T_(this.binds,t.key);e&&this.selectTab(e)}panelKey(){var s,r;const t=this.p,e=t.inv.map(o=>o?`${o.id}:${o.doses??""}:${o.qty??""}`:"-").join(","),n=Object.entries(t.equip).map(([o,a])=>`${o}=${a==null?void 0:a.id}`).join(",");switch(this.tab){case"inventory":return`inv|${e}|${(s=this.drag)!=null&&s.ghost?this.drag.slot:""}`;case"equipment":return`eq|${n}`;case"combat":return`cb|${(r=t.equip.weapon)==null?void 0:r.id}|${t.spec}|${t.specArmed}|${JSON.stringify(t.styleIndex)}|${t.autoRetaliate}`;case"prayer":return`pr|${[...t.prayers].join(",")}|${t.level.prayer}`;case"magic":return`mg|${t.level.magic}|${e}|${t.timers.venge>1}`;case"skills":return`sk|${Object.values(t.level).join(",")}`;default:return`tab|${this.tab}`}}refresh(t=!1){if(this.refreshOrbs(),this.content.querySelectorAll(".inv-slot.used").forEach(n=>n.classList.remove("used")),this.refreshVengeTimer(),this.refreshPractice(),this.refreshBoosts(),this.panel.hidden=this.tab===null,this.tab===null)return;const e=`${this.tab}|${this.panelKey()}`;if(!(!t&&e===this.lastPanelKey))switch(this.lastPanelKey=e,this.content.classList.remove("scrolls"),this.content.onscroll=null,this.content.scrollTop=0,this.content.innerHTML="",this.tab){case"inventory":return this.renderInventory();case"equipment":return this.renderEquipment();case"combat":return this.renderCombat();case"prayer":return this.renderPrayer();case"magic":return this.renderMagic();case"skills":return this.renderSkills();case"settings":{const n=this.settingsScroll;this.content.classList.add("scrolls"),this.renderSettings(),this.content.scrollTop=n,this.content.onscroll=()=>{this.settingsScroll=this.content.scrollTop};return}default:se(this.content,"Not part of this simulator.",95,120,"p12_full",Te,!0,!0)}}refreshOrbs(){const t=this.p,e=(n,s,r)=>{const o=this.orbs[n],a=Math.max(0,Math.min(1,s/r)),l=a>.75?"#00ff00":a>.5?"#ffff00":a>.25?"#ff981f":"#ff0000",c=o.querySelector(".orb-num");c.innerHTML="";const h=xe(String(s),"p11_full",l,!0);h.style.position="absolute",Bt(h,Math.round(26-h.width),0),c.append(h),o.querySelector(".orb-fill").style.height=Math.round(26*a)+"px"};e("hp",t.level.hitpoints,t.base.hitpoints),this.orbs.hp.querySelector(".orb-fill").style.backgroundImage=`url(${vn(t.poison>0?"orbs/fill-hp-poison.png":"orbs/fill-hp.png")})`,e("prayer",t.level.prayer,t.base.prayer),e("run",100,100),this.orbs.run.querySelector(".orb-fill").style.backgroundImage=`url(${vn(t.running?"orbs/fill-run-active.png":"orbs/fill-run.png")})`,this.orbs.run.querySelector(".orb-icon").src=vn(t.running?"orbs/icon-run.png":"orbs/icon-walk.png"),e("spec",t.spec,100),this.orbs.prayer.querySelector(".orb-fill").style.backgroundImage=`url(${vn(t.prayers.size?"orbs/fill-prayer-active.png":"orbs/fill-prayer.png")})`,this.orbs.spec.querySelector(".orb-fill").style.backgroundImage=`url(${vn(t.specArmed?"orbs/fill-spec-active.png":"orbs/fill-spec.png")})`}renderInventory(){this.p.inv.forEach((t,e)=>{var s;const n=Bt(Rt("div","inv-slot",this.content),14+e%4*42,6+Math.floor(e/4)*36);if(n.dataset.slot=String(e),t){const r=Rt("img","item",n);r.src=Xi(t),r.draggable=!1,r.alt=xn(t),((s=this.drag)==null?void 0:s.slot)===e&&this.drag.ghost&&(r.style.opacity="0.4"),t.qty!==void 0&&se(n,String(t.qty),0,-2,"p11_full",ri),n.addEventListener("pointerenter",()=>this.setHover(this.itemOptions(e,t))),n.addEventListener("pointerleave",()=>this.setHover(null))}n.addEventListener("pointerdown",r=>this.onSlotDown(r,e)),n.addEventListener("contextmenu",r=>r.preventDefault())})}onSlotDown(t,e){const n=this.p.inv[e];if(n){if(t.preventDefault(),t.button===2){t.stopPropagation(),this.openMenu(t.clientX,t.clientY,this.itemOptions(e,n));return}t.button===0&&(this.drag&&!this.drag.ghost&&this.useItem(this.drag.slot),this.drag={slot:e,x:t.clientX,y:t.clientY,at:performance.now(),ghost:null})}}onDragMove(t){const e=this.drag;if(e){if(!e.ghost){if(performance.now()-e.at<Oo()||Math.hypot(t.clientX-e.x,t.clientY-e.y)<4)return;const n=this.p.inv[e.slot];if(!n){this.drag=null;return}const s=Rt("img","drag-ghost",document.body);s.onload=()=>{s.style.width=`${s.naturalWidth*this.uiScale()}px`},s.src=Xi(n),e.ghost=s,this.refresh()}e.ghost.style.left=t.clientX-18*this.uiScale()+"px",e.ghost.style.top=t.clientY-16*this.uiScale()+"px"}}onDragEnd(t){var s;const e=this.drag;if(!e)return;if(this.drag=null,!e.ghost){this.useItem(e.slot);return}e.ghost.remove();const n=(s=document.elementFromPoint(t.clientX,t.clientY))==null?void 0:s.closest(".inv-slot");if((n==null?void 0:n.dataset.slot)!==void 0){const r=Number(n.dataset.slot),o=this.p.inv;[o[e.slot],o[r]]=[o[r],o[e.slot]]}this.refresh()}useItem(t){var s;const e=this.p.inv[t],n=e?jt[e.id].kind:null;(n==="food"||n==="combo"||n==="potion")&&((s=this.content.querySelector(`.inv-slot[data-slot="${t}"]`))==null||s.classList.add("used")),this.send({type:"item",slot:t})}itemOptions(t,e){const n=jt[e.id],s=xn(e);return[{label:n.action,target:s,run:()=>this.useItem(t)},{label:"Use",target:s,run:()=>this.message("Nothing interesting happens.")},e.id==="orb"?{label:"Destroy",target:s,run:()=>this.message("You can't destroy items in this simulator.")}:{label:"Drop",target:s,run:()=>this.message("You can't drop items in this simulator.")},{label:"Examine",target:s,run:()=>this.message(L_(e))},{label:"Cancel",run:()=>{}}]}openMenu(t,e,n){const s=this.uiScale();this.menu.innerHTML="";const r=n.map(u=>`${u.label}${u.target?` <col=${u.targetColor??rh}>${u.target}</col>`:""}`),o=Math.max(...r.map(u=>xe(u,"b12_full").width),xe("Choose Option","b12_full").width)+8;this.menu.style.width=o+"px",Rt("div","ctx-head",this.menu).append(xe("Choose Option","b12_full","#5d5447",!1)),r.forEach((u,d)=>{const p=Rt("div","ctx-row",this.menu),g=xe(u,"b12_full",Gn,!0),v=xe(u.replace(/<col=[0-9a-f]{6}>|<\/col>/gi,""),"b12_full",ri,!0);v.hidden=!0,p.append(g,v),p.addEventListener("pointerenter",()=>{g.hidden=!0,v.hidden=!1}),p.addEventListener("pointerleave",()=>{g.hidden=!1,v.hidden=!0}),p.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),this.closeMenu(),n[d].run()})}),this.menu.hidden=!1;const l=this.menu.getBoundingClientRect().height/s,c=Math.min(Math.max(2,t/s-o/2),window.innerWidth/s-o-2),h=Math.min(Math.max(2,e/s-2),window.innerHeight/s-l-2);Bt(this.menu,c,h)}closeMenu(){this.menu.hidden=!0}uiScale(){return xs()}renderEquipment(){for(const[t,[e,n]]of Object.entries(P_)){const s=Bt(Rt("div","equip-slot",this.content),e,n);Jt("equipment/slot.png","abs",s);const r=this.p.equip[t];if(!r){Bt(Jt(`equipment/empty-${t}.png`,"abs",s),2,2);continue}const o=Rt("img","item",s);o.src=Xi(r),o.draggable=!1;const a=[{label:"Remove",target:xn(r),run:()=>this.send({type:"unequip",slot:t})},{label:"Examine",target:xn(r),run:()=>this.message(jt[r.id].examine)},{label:"Cancel",run:()=>{}}];s.addEventListener("pointerenter",()=>this.setHover(a)),s.addEventListener("pointerleave",()=>this.setHover(null)),s.addEventListener("contextmenu",l=>l.preventDefault()),s.addEventListener("pointerdown",l=>{l.preventDefault(),l.button===2?(l.stopPropagation(),this.openMenu(l.clientX,l.clientY,a)):l.button===0&&this.send({type:"unequip",slot:t})})}se(this.content,`Melee strength: +${fd(this.p)}`,95,214,"p11_full",Te,!0,!0),se(this.content,`Prayer: +${Nh(this.p)}`,95,230,"p11_full",Te,!0,!0)}renderCombat(){const t=this.p,e=t.equip.weapon,n=e?jt[e.id]:null,s=Ne(t),r=Qa[s],o=r.styles.indexOf(Dn(t));se(this.content,n?n.name:"Unarmed",95,4,"b12_full",Te,!0,!0),se(this.content,`Combat Lvl: ${t.combatLevel}`,95,19,"p11_full",Te,!0,!0),r.styles.forEach((u,d)=>{const p=Bt(Rt("div","style-btn",this.content),20+d%2*80,45+Math.floor(d/2)*55);Jt(d===o?"combat/style-button-selected.png":"combat/style-button.png","abs",p),Bt(Jt(`combat/icons/${u.icon}.png`,"abs",p),18,6),se(p,u.name,35,30,"p11_full",Te,!0,!0),p.addEventListener("pointerdown",g=>{g.preventDefault(),t.styleIndex[s]=d,ah(t),this.refresh(!0)})});const a=Bt(Rt("div","style-btn wide",this.content),20,154);Jt(t.autoRetaliate?"combat/autoretaliate-selected.png":"combat/autoretaliate.png","abs",a),se(a,"Auto Retaliate",92,10,"p11_full",Te,!0,!0),se(a,t.autoRetaliate?"(On)":"(Off)",92,23,"p11_full",Te,!0,!0),a.addEventListener("pointerdown",u=>{u.preventDefault(),t.autoRetaliate=!t.autoRetaliate,ah(t),this.refresh(!0)});const l=Bt(Rt("div","spec-bar",this.content),20,204);Jt("combat/spec-bar.png","abs",l);const c=Bt(Rt("div","spec-fill",l),3,7);c.style.width=Math.round(144*this.p.spec/100)+"px",c.classList.toggle("armed",this.p.specArmed);const h=!!(n!=null&&n.spec);se(l,`Special Attack: ${this.p.spec}%`,75,7,"p11_full",this.p.specArmed?ri:"#000000",this.p.specArmed,!0),h||l.classList.add("disabled"),l.addEventListener("pointerdown",u=>{u.preventDefault(),u.button===0&&this.send({type:"spec"})}),se(this.content,`Category: ${r.category}`,95,241,"p11_full",Te,!0,!0)}renderPrayer(){R_.forEach((t,e)=>{const n=6+e%5*37,s=11+Math.floor(e/5)*37,r=Bt(Rt("div","prayer",this.content),n-2,s-2),o=C_[t];o&&this.p.prayers.has(o)&&Bt(Jt("prayer/active-glow.png","abs",r),0,0),Bt(Jt(`prayer/${t}-on.png`,"abs",r),2,2);const a=t.replace(/-/g," ").replace(/^./,c=>c.toUpperCase()),l=[{label:o&&this.p.prayers.has(o)?"Deactivate":"Activate",target:a,run:()=>o&&this.send({type:"prayer",id:o})},{label:"Cancel",run:()=>{}}];r.addEventListener("pointerenter",()=>this.setHover(l)),r.addEventListener("pointerleave",()=>this.setHover(null)),r.addEventListener("pointerdown",c=>{c.preventDefault(),o?this.send({type:"prayer",id:o}):this.message("Only Piety and Smite are used in this simulator.")})}),Bt(Jt("skills/prayer.png","abs",this.content),12,238),se(this.content,`${this.p.level.prayer} / ${this.p.base.prayer}`,36,241,"p12_full",Te),this.filtersButton(124,238)}filtersButton(t,e){const n=Bt(Rt("div","tile-btn",this.content),t,e);n.style.width="58px",n.style.height="18px",this.tile(n,"grey"),se(n,"Filters",29,3,"p11_full",Te,!0,!0)}tile(t,e){for(const n of["nw","nc","ne","cw","cc","ce","sw","sc","se"])Rt("div",`tile-part ${n}`,t).style.backgroundImage=`url(${vn(`tile/${e}-${n}.png`)})`}renderMagic(){const t=H_();t.forEach((e,n)=>{const s=Bt(Rt("div","spell",this.content),3+n%6*32,2+Math.floor(n/6)*30);s.dataset.spell=String(n);const r=e==="vengeance",o=!r||this.p.level.magic>=94&&this.p.timers.venge<=1&&this.p.inv.some(a=>(a==null?void 0:a.id)==="venge_sack");if(Jt(`magic/lunar/${e}-${o?"on":"off"}.png`,"abs",s),this.reorderSpells){s.classList.add("reorder");const a=l=>{[t[l],t[n]]=[t[n],t[l]],this.spellDrag=null,z_(t),this.refresh(!0)};s.addEventListener("pointerdown",l=>{if(l.preventDefault(),l.button===0){if(this.spellDrag!==null&&this.spellDrag!==n){a(this.spellDrag);return}this.spellDrag=n,s.classList.add("picked")}}),s.addEventListener("pointerup",()=>{this.spellDrag!==null&&this.spellDrag!==n&&a(this.spellDrag)})}else if(r){const a=[{label:"Cast",target:"Vengeance",run:()=>this.send({type:"cast",spell:"vengeance"})},{label:"Cancel",run:()=>{}}];s.addEventListener("pointerenter",()=>this.setHover(a)),s.addEventListener("pointerleave",()=>this.setHover(null)),s.addEventListener("pointerdown",l=>{l.preventDefault(),l.button===0&&this.send({type:"cast",spell:"vengeance"})})}}),this.stoneButton(51,238,88,this.reorderSpells?"Done":"Reorder",this.reorderSpells,()=>{this.reorderSpells=!this.reorderSpells,this.spellDrag=null,this.refresh(!0)})}renderSkills(){const t=["attack","hitpoints","mining","strength","agility","smithing","defence","herblore","fishing","ranged","thieving","cooking","prayer","crafting","firemaking","magic","fletching","woodcutting","runecraft","slayer","farming","construction","hunter","sailing"],e=new Set(["attack","strength","defence","hitpoints","ranged","prayer","magic"]);t.forEach((s,r)=>{const o=Bt(Rt("div","skill-tile",this.content),r%3*63,Math.floor(r/3)*31);this.tile(o,"grey"),Bt(Jt(`skills/${s}.png`,"abs skill-icon",o),4,3);const a=e.has(s)?this.p.level[s]:99,l=e.has(s)?this.p.base[s]:99,c=a>l?"#00ff00":a<l?"#ff0000":ri;se(o,String(a),31,2,"p11_full",c,!0),o.append(I_()),se(o,String(l),43,14,"p11_full",ri,!0)});const n=Bt(Rt("div","skill-total",this.content),0,248);se(n,`Total level: ${t.length*99}`,95,1,"p12_full",ri,!0,!0)}renderSettings(){se(this.content,"Keybinding",95,2,"b12_full",Te,!0,!0),nh.forEach(({id:r,label:o},a)=>{const l=17+a*17;se(this.content,o,6,l+2,"p11_full",Te);const c=this.binds[r];this.stoneButton(118,l,66,c?sh(c):"None",!1,h=>{const u=[...ih,""].map(d=>({label:d?sh(d):"None",run:()=>{for(const p of Object.keys(this.binds))d&&this.binds[p]===d&&delete this.binds[p];d?this.binds[r]=d:delete this.binds[r],E_(this.binds),this.refresh(!0)}}));u.push({label:"Cancel",run:()=>{}}),this.openMenu(h.clientX,h.clientY,u)},16).id="kb-"+r});const e=17+nh.length*17+1,n=r=>e+r*18;this.stepper("Interface size",n(0),()=>`${Math.round(pi("ui")*100)}%`,r=>Ir(this.root,"ui",pi("ui")+r*.1)),this.stepper("Minimap size",n(1),()=>`${Math.round(pi("map")*100)}%`,r=>Ir(this.root,"map",pi("map")+r*.1)),this.stepper("Drag delay",n(2),()=>`${Oo()}ms`,r=>V_(Oo()+r*50)),this.stepper("Sound volume",n(3),()=>Je()===0?"Muted":`${Je()}%`,r=>Ph(Je()+r*10));const s=(r,o,a,l,c,h)=>{se(this.content,r,6,n(o)+2,"p11_full",Te),this.stoneButton(118,n(o),66,c?a:l,c,()=>{h(),this.refresh(!0)},16)};s("Scaling",4,"Smooth","Crisp",Ha(),()=>G_(this.root,!Ha())),s("Tile marker",5,"On","Off",za(),()=>de("dhsim.tileMarker",za()?"0":"1")),s("Venge timer",6,"On","Off",Fo(),()=>de("dhsim.vengeTimer",Fo()?"0":"1")),s("Boosted levels",7,"On","Off",No(),()=>de("dhsim.boosts",No()?"0":"1")),s("PID indicator",8,"On","Off",Uo(),()=>de("dhsim.pidIndicator",Uo()?"0":"1")),Rt("div","settings-end",this.content).style.top=n(9)+"px"}stoneButton(t,e,n,s,r,o,a=18){const l=Bt(Rt("div","tile-btn",this.content),t,e);return l.style.width=n+"px",l.style.height=a+"px",this.tile(l,r?"red":"grey"),se(l,s,n/2,(a-12)/2,"p11_full",Te,!0,!0),l.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),c.button===0&&o(c)}),l}stepper(t,e,n,s){se(this.content,t,6,e+2,"p11_full",Te),this.stoneButton(118,e,18,"-",!1,()=>{s(-1),this.refresh(!0)},16),se(this.content,n(),151,e+2,"p11_full",ri,!0,!0),this.stoneButton(166,e,18,"+",!1,()=>{s(1),this.refresh(!0)},16)}}const D_=1.5,Pu={ui:"dhsim.uiScale",map:"dhsim.mapScale"};function I_(){const i=document.createElement("canvas");i.width=20,i.height=21,i.style.position="absolute",Bt(i,31,3);const t=i.getContext("2d");t.fillStyle="#000000";for(let e=0;e<=19;e++)t.fillRect(Math.round(1+(19-e)*18/19),e+1,1,1);return i}function Ba(){try{return JSON.parse(ie("dhsim.loadout")??"null")}catch{return null}}function U_(i){de("dhsim.loadout",JSON.stringify(i))}function oh(i){try{const t=JSON.parse(ie("dhsim.combat")??"null");t!=null&&t.styleIndex&&(i.styleIndex={...t.styleIndex}),typeof(t==null?void 0:t.autoRetaliate)=="boolean"&&(i.autoRetaliate=t.autoRetaliate)}catch{}}function ah(i){de("dhsim.combat",JSON.stringify({styleIndex:i.styleIndex,autoRetaliate:i.autoRetaliate}))}function pi(i){const t=Number(ie(Pu[i]));return t>=.5&&t<=3?t:D_}const xs=()=>pi("ui");function Ha(){return ie("dhsim.uiSmooth")==="1"}function za(){return ie("dhsim.tileMarker")!=="0"}function N_(){return ie("dhsim.botThoughts")==="1"}function F_(){return ie("dhsim.attackTimer")==="1"||Lu()}function Va(){const i=Number(ie("dhsim.ping"));return ie("dhsim.ping")!==null&&i>=0&&i<=300?i:20}function Lu(){return ie("dhsim.attackTimerLarge")==="1"}function O_(){return ie("dhsim.metronomeSound")==="1"}function B_(){return ie("dhsim.metronomeVisual")==="1"}function Uo(){return ie("dhsim.pidIndicator")!=="0"}function No(){return ie("dhsim.boosts")!=="0"}function Fo(){return ie("dhsim.vengeTimer")!=="0"}function H_(){try{const i=JSON.parse(ie("dhsim.lunarOrder")??"null");if(i&&i.length===Io.length&&Io.every(t=>i.includes(t)))return i}catch{}return[...Io]}function z_(i){de("dhsim.lunarOrder",JSON.stringify(i))}function Oo(){const i=Number(ie("dhsim.dragDelay"));return i>=50&&i<=600?i:150}function V_(i){de("dhsim.dragDelay",String(Math.min(600,Math.max(50,Math.round(i/50)*50))))}function Ir(i,t,e){const n=Math.round(Math.min(3,Math.max(.5,e))*100)/100;de(Pu[t],String(n)),wl(i)}function G_(i,t){de("dhsim.uiSmooth",t?"1":"0"),wl(i)}let Ga=null;function W_(i){Ga&&Ir(Ga,"ui",i)}function wl(i){Ga=i;for(const t of Array.from(i.children))t.style.zoom=String(pi(t.classList.contains("minimap")?"map":"ui"));document.body.classList.toggle("ui-smooth",Ha()),i.dataset.wheel||(i.dataset.wheel="1",window.addEventListener("wheel",t=>{var s,r;if(!t.ctrlKey)return;t.preventDefault();const n=!!((r=(s=t.target)==null?void 0:s.closest)!=null&&r.call(s,".minimap"))?"map":"ui";Ir(i,n,pi(n)+(t.deltaY<0?.05:-.05))},{passive:!1}))}const Bo=i=>`/assets/osrs/sprites/${i}`,lh=new Map;function Ho(i){const t=()=>{let e=lh.get(i.src);if(e===void 0){const n=document.createElement("canvas");n.width=i.naturalWidth,n.height=i.naturalHeight;const s=n.getContext("2d",{willReadFrequently:!0});if(!s||!n.width)return;s.drawImage(i,0,0);const r=s.getImageData(0,0,n.width,n.height).data;let o=n.width,a=-1,l=n.height,c=-1;for(let h=0;h<n.height;h++)for(let u=0;u<n.width;u++)r[(h*n.width+u)*4+3]!==0&&(u<o&&(o=u),u>a&&(a=u),h<l&&(l=h),h>c&&(c=h));e=a<0?"0px 0px":`${Math.round(n.width/2-(o+a+1)/2)}px ${Math.round(n.height/2-(l+c+1)/2)}px`,lh.set(i.src,e)}i.style.translate=e};i.complete&&i.naturalWidth?t():i.addEventListener("load",t,{once:!0})}const q_={head:[77,4],cape:[36,43],neck:[77,43],ammo:[118,43],weapon:[21,82],body:[77,82],shield:[133,82],legs:[77,122],hands:[21,162],feet:[77,162],ring:[133,162]},$_=["angler","karambwan","brew","restore","sanfew","combat","tentacle","voidwaker","gmaul","dh_axe","ags","dh_helm","dh_body","dh_legs","avernic","infernal","rancour","ferocious","treads","recoil","ultor","orb","venge_sack","tab"];class X_{constructor(t,e,n,s){R(this,"inv");R(this,"equip");R(this,"drag",null);R(this,"hint");R(this,"invBox");R(this,"equipBox");R(this,"pickBox");R(this,"onMove",t=>{const e=this.drag;if(e&&!(!e.ghost&&Math.hypot(t.clientX-e.x,t.clientY-e.y)<5)){if(!e.ghost){const n=this.at(e.from);if(!n)return;e.ghost=document.createElement("img"),e.ghost.className="le-ghost",e.ghost.src=Xi(n),Ho(e.ghost),document.body.append(e.ghost)}e.ghost.style.left=`${t.clientX}px`,e.ghost.style.top=`${t.clientY}px`}});R(this,"onUp",t=>{var o;const e=this.drag;if(!e)return;if(this.drag=null,!e.ghost&&e.from.kind==="pick"){const a=this.inv.findIndex(l=>!l);a<0?this.draw("Your inventory is full: remove something first (drag it onto the bin, or right-click it)."):this.move(e.from,{kind:"inv",i:a});return}if(!e.ghost)return;e.ghost.remove();const n=(o=document.elementFromPoint(t.clientX,t.clientY))==null?void 0:o.closest("[data-ref]");if(!n)return;const[s,r]=n.dataset.ref.split(":");this.move(e.from,s==="inv"?{kind:"inv",i:Number(r)}:s==="equip"?{kind:"equip",slot:r}:{kind:"bin"})});this.onSave=n,this.onBack=s;const r=JSON.parse(JSON.stringify(e));this.inv=r.inv,this.equip=r.equip;const o=document.createElement("div");o.className="le",t.append(o);const a=document.createElement("div");a.className="le-panels",o.append(a),this.invBox=this.panel(a,"Inventory"),this.equipBox=this.panel(a,"Worn equipment");const l=document.createElement("div");l.className="le-col le-pickcol";const c=document.createElement("div");c.className="le-title",c.textContent="Add items",this.pickBox=document.createElement("div"),this.pickBox.className="le-picker",this.pickBox.dataset.ref="bin:",l.append(c,this.pickBox),o.append(l);const h=document.createElement("div");h.className="ss-hint le-help",h.textContent="Drag items to swap them. Drop gear on its slot to wear it. Click or drag items from the list to add them; drag an item onto the bin (or right-click it) to remove it.",this.hint=document.createElement("div"),this.hint.className="ss-hint le-hint",o.append(h,this.hint);const u=document.createElement("div");u.className="le-buttons",o.append(u);const d=(p,g,v)=>{const f=document.createElement("button");f.className=g,f.textContent=p,f.addEventListener("click",v),u.append(f)};d("Back","le-btn",()=>this.onBack()),d("Reset to standard","le-btn",()=>{const p=Au();this.inv=p.inv,this.equip=p.equip,this.draw("Back to the standard loadout (not saved yet).")}),d("Save loadout","le-btn le-save",()=>this.onSave({inv:this.inv,equip:this.equip})),window.addEventListener("pointermove",this.onMove,!0),window.addEventListener("pointerup",this.onUp,!0),this.draw("")}destroy(){var t,e;window.removeEventListener("pointermove",this.onMove,!0),window.removeEventListener("pointerup",this.onUp,!0),(e=(t=this.drag)==null?void 0:t.ghost)==null||e.remove()}panel(t,e){const n=document.createElement("div");n.className="le-col";const s=document.createElement("div");s.className="le-title",s.textContent=e;const r=document.createElement("div");return r.className="le-panel",r.style.backgroundImage=`url(${Bo("side/panel-default.png")})`,n.append(s,r),t.append(n),r}draw(t){t!==void 0&&(this.hint.textContent=t),this.invBox.innerHTML="",this.inv.forEach((s,r)=>{const o=this.cell(this.invBox,"le-inv",21+r%4*42,13+Math.floor(r/4)*36,{kind:"inv",i:r},s);o.dataset.ref=`inv:${r}`}),this.equipBox.innerHTML="";for(const[s,[r,o]]of Object.entries(q_)){const a=this.cell(this.equipBox,"le-equip",7+r,7+o,{kind:"equip",slot:s},this.equip[s]??null,s);a.dataset.ref=`equip:${s}`}this.pickBox.innerHTML="";const e={inv:this.inv,equip:this.equip};for(const s of $_){const r=Zc(e,s),o=Oa(s),a=r>=o,l=document.createElement("div");l.className="le-pick"+(a?" full":""),l.dataset.ref=`pick:${s}`,l.title=jt[s].name+(a?o===1?" (you have it)":` (max ${o})`:"");const c=document.createElement("img");c.className="le-pickimg",c.src=Xi(or(s)),Ho(c),c.draggable=!1;const h=document.createElement("div");h.className="le-count",h.textContent=o===1/0?`×${r}`:`${r}/${o}`;const u=document.createElement("div");u.className="le-pickicon",u.append(c),l.append(u,h),l.addEventListener("pointerdown",d=>{d.button===0&&(d.preventDefault(),this.drag={from:{kind:"pick",id:s},ghost:null,x:d.clientX,y:d.clientY})}),this.pickBox.append(l)}const n=document.createElement("div");n.className="le-pick le-bin",n.dataset.ref="bin:",n.title="Remove: drop an item here",n.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v7M14 10v7"/></svg><div class="le-count">Remove</div>',n.addEventListener("pointerdown",s=>{s.button===0&&(s.preventDefault(),this.draw("Drag an item onto the bin to remove it (or right-click the item)."))}),this.pickBox.append(n)}cell(t,e,n,s,r,o,a){const l=document.createElement("div");if(l.className=e,l.style.left=`${n}px`,l.style.top=`${s}px`,t.append(l),a){const c=document.createElement("img");if(c.className="le-slotbg",c.src=Bo("equipment/slot.png"),l.append(c),!o){const h=document.createElement("img");h.className="le-empty",h.src=Bo(`equipment/empty-${a}.png`),l.append(h)}}if(o){const c=document.createElement("img");c.className="le-item",c.src=Xi(o),Ho(c),c.draggable=!1,l.append(c),l.title=xn(o)}return l.addEventListener("contextmenu",c=>{c.preventDefault(),o&&this.remove(r)}),l.addEventListener("pointerdown",c=>{c.button===0&&(c.preventDefault(),o&&(this.drag={from:r,ghost:null,x:c.clientX,y:c.clientY}))}),l}same(t,e){return!!t&&JSON.stringify(t)===JSON.stringify(e)}at(t){return t.kind==="inv"?this.inv[t.i]:t.kind==="equip"?this.equip[t.slot]??null:t.kind==="pick"?or(t.id):null}remove(t){t.kind==="inv"?this.inv[t.i]=null:t.kind==="equip"&&delete this.equip[t.slot],this.draw("")}add(t,e){const n=this.at(e);if((n==null?void 0:n.id)===t){this.draw();return}const s=Oa(t);if(Zc({inv:this.inv,equip:this.equip},t)>=s){const r=jt[t].name;this.draw(s===1?`You already have a ${r}: one of each.`:t==="restore"||t==="sanfew"?`Limit reached: up to ${s} super restores and Sanfew serums together.`:`Limit reached: up to ${s} ${r}s.`);return}if(e.kind==="inv")this.inv[e.i]=or(t),this.draw(n?`Replaced the ${xn(n)}.`:"");else if(e.kind==="equip"){if(jt[t].slot!==e.slot){this.draw(`${jt[t].name} doesn't go in the ${e.slot} slot.`);return}const r=this.inv.findIndex(o=>!o);if(r<0){this.draw("Make a free inventory spot first: what you wear now goes back to your inventory.");return}this.inv[r]=or(t),this.wear(r,e.slot)||(this.inv[r]=null)}}move(t,e){if(this.same(t,e)){this.draw();return}if(t.kind==="pick"){this.add(t.id,e);return}if(t.kind==="bin"){this.draw();return}if(e.kind==="bin"||e.kind==="pick"){this.remove(t);return}if(t.kind==="inv"&&e.kind==="inv"){[this.inv[t.i],this.inv[e.i]]=[this.inv[e.i],this.inv[t.i]],this.draw("");return}if(t.kind==="inv"&&e.kind==="equip"){this.wear(t.i,e.slot);return}if(t.kind==="equip"&&e.kind==="inv"){const n=this.inv[e.i];n?jt[n.id].slot===t.slot?this.wear(e.i,t.slot):this.draw(`${xn(n)} can't be worn there: drop it on an empty spot instead.`):(this.inv[e.i]=this.equip[t.slot],delete this.equip[t.slot],this.draw(""));return}this.draw()}wear(t,e){const n=this.inv[t];if(!n)return this.draw(),!1;const s=jt[n.id];if(s.slot!==e)return this.draw(`${xn(n)} doesn't go in the ${e} slot.`),!1;const r=e==="weapon"&&s.twoHanded&&this.equip.shield?"shield":e==="shield"&&this.equip.weapon&&jt[this.equip.weapon.id].twoHanded?"weapon":null,o={inv:[...this.inv],equip:{...this.equip}};if(this.inv[t]=this.equip[e]??null,this.equip[e]=n,r){const a=this.equip[r];delete this.equip[r];const l=this.inv.findIndex(c=>!c);if(l<0)return this.inv=o.inv,this.equip=o.equip,this.draw(`No room: ${xn(n)} is two-handed, so the ${xn(a)} needs a free inventory spot.`),!1;this.inv[l]=a}return this.draw(""),!0}}const an="#ff981f",ys="#ffff00",Ms="#ffffff",Wa=[{id:"colosseum",name:"Fortis Colosseum",desc:"Sol Heredit’s arena: between the four pillars, walled in by gladiators with shields"},{id:"ge",name:"Grand Exchange",desc:"North side, by the Varrock wall"}];function qa(){return ie("dhsim.botNoTab")==="1"}const $a=[{id:"mixed",name:"Either",desc:"Some fights the Voidwaker, some the AGS (about 4 in 10)"},{id:"voidwaker",name:"Voidwaker",desc:"Always the Voidwaker"},{id:"ags",name:"AGS",desc:"Always the Armadyl godsword"}];function Xa(){const i=ie("dhsim.botSpec");return $a.some(t=>t.id===i)?i:"mixed"}function Y_(){const i=Xa();return i==="ags"?1:i==="voidwaker"?0:.4}function Ya(){const i=ie("dhsim.arena");return Wa.some(t=>t.id===i)?i:"colosseum"}const ku=["easy","medium","hard","elite"];function Du(){const i=ie("dhsim.level");return i&&ku.includes(i)?i:"hard"}function gs(){try{const i=JSON.parse(ie("dhsim.training")??"[]");return Sr.map(t=>t.id).filter(t=>i.includes(t))}catch{return[]}}function Ka(){return ie("dhsim.useSavedLoadout")!=="0"}function El(){try{return JSON.parse(ie("dhsim.record")??"{}")}catch{return{}}}function K_(i,t){const e=El(),n=e[i]??{w:0,l:0};t?n.w++:n.l++,e[i]=n,de("dhsim.record",JSON.stringify(e))}function rt(i,t,e,n){const s=document.createElement(i);return s.className=t,n!==void 0&&(s.textContent=n),e==null||e.append(s),s}function Ae(i,t,e,n,s=1,r=""){const o=xe(t,e,n,!0);return o.className="ss-gametext "+r,o.style.width=`${o.width*s}px`,o.style.height=`${o.height*s}px`,i.append(o),o}class j_{constructor(t,e){R(this,"root");R(this,"level",Du());R(this,"onArena",()=>{});R(this,"editor",null);R(this,"view","main");R(this,"fightBtn",null);this.onFight=e,this.root=rt("div","ss-overlay",t),this.root.hidden=!0;for(const n of["pointerdown","pointerup","wheel","contextmenu"])this.root.addEventListener(n,s=>s.stopPropagation())}get visible(){return!this.root.hidden}show(){this.render(),this.root.hidden=!1}hide(){this.root.hidden=!0}render(){var y;(y=this.editor)==null||y.destroy(),this.editor=null,this.root.innerHTML="";const t=rt("div","ss-panel",this.root);if(this.view==="loadout"){this.renderEditor(t);return}if(this.view==="training"){this.renderTraining(t);return}if(this.view==="settings"){this.renderSettings(t);return}if(this.view==="help"){this.renderHelp(t);return}const e=rt("div","ss-head",t);Ae(e,"DH Simulator","q8_full",an,3,"ss-title"),rt("div","ss-sub",e,"Pick your opponent, check your setup, and fight."),this.section(t,"Opponent");const n=rt("div","ss-levels",t),s=El();for(const E of od){const D=un[E],C=rt("button","ss-card"+(E===this.level?" selected":""),n);if(Ae(C,D.name,"b12_full",E===this.level?ys:an,2),rt("div","ss-blurb",C,D.blurb),!ku.includes(E)){C.disabled=!0,rt("div","ss-record",C,"Coming soon");continue}const A=s[E];rt("div","ss-record",C,A?`${A.w} won · ${A.l} lost`:"No fights yet"),C.dataset.level=E,C.addEventListener("click",()=>this.pick(E))}this.section(t,"Loadout");const r=rt("div","ss-row",t),o=ie("dhsim.loadout")&&ie("dhsim.loadout")!=="null",a=rt("div","ss-loadrow",r),l=rt("div","ss-seg",a),c=(E,D,C=!1)=>{const A=rt("button","ss-segbtn"+(Ka()===E&&!(E&&!o)?" on":""),l,D);A.disabled=C,A.addEventListener("click",()=>{de("dhsim.useSavedLoadout",E?"1":"0"),this.render()})};c(!0,"My saved loadout",!o),c(!1,"Standard loadout"),rt("button","ss-editbtn",a,"Edit loadout").addEventListener("click",()=>this.open("loadout")),rt("div","ss-hint",r,o?"Set up your inventory and gear before the fight with Edit loadout.":"No saved loadout yet: set one up with Edit loadout."),this.section(t,"Arena");const u=rt("div","ss-row",t),d=rt("div","ss-seg",u),p=Ya();for(const E of Wa)rt("button","ss-segbtn"+(E.id===p?" on":""),d,E.name).addEventListener("click",()=>{E.id!==Ya()&&(de("dhsim.arena",E.id),this.onArena(E.id),this.render())});rt("div","ss-hint",u,Wa.find(E=>E.id===p).desc);const g=rt("div","ss-tiles",t),v=gs();this.tile(g,"Training",v.length?Sr.filter(E=>v.includes(E.id)).map(E=>E.label).join(", "):"Practise eating specific combos",v.length>0,()=>this.open("training")),this.tile(g,"Settings","Attack timer, metronome, PID indicator, bot thoughts, sound",!1,()=>this.open("settings"));const f=rt("button","ss-fight",t);this.fightBtn=f,this.labelFight(),f.addEventListener("click",()=>{de("dhsim.level",this.level),this.hide(),this.onFight(this.level)});const m=rt("div","ss-foot",t);rt("button","ss-editbtn",m,"How to play").addEventListener("click",()=>this.open("help")),rt("div","ss-credits",m,"A free fan-made practice tool. Not affiliated with or endorsed by Jagex. Old School RuneScape and its models, sounds and maps are © Jagex Ltd.")}renderHelp(t){const e=this.page(t,"How to play","Practise Dharok’s (DH) fights from Old School RuneScape against a bot, as close to the real game as we could make it."),n=(s,r)=>{this.section(e,s);const o=rt("div","ss-help",e);for(const a of r)rt("p","",o,a)};n("The fight",["You and the bot both wear Dharok’s: the lower your HP, the harder your hits, above all with the DH axe. Hit with the whip, and look for the moment to spec (granite maul, Voidwaker or AGS) or axe for the KO.","Eat out of KO range, keep your prayer and boosts up, and use Vengeance. You win by KO, or when the other runs out of food. Tabbing out (the teleport tab in your inventory) ends the round; you can’t tab within a few ticks of speccing.","PID matters: whoever has it has their clicks and hits go first that tick. Turn on the PID indicator in Settings to see who has it."]),n("Controls",["It plays like the game in fixed mode, on a PC with mouse and keyboard. Click the bot to attack it, click the ground to walk, right-click for more options.","Inventory: click food and potions to eat and drink, and gear to wear it. Your specs: the spec orb by the minimap, or the bar in the combat tab.","Tabs on F-keys: F1 combat, F4 equipment, F5 prayer, F6 magic (Vengeance), Esc inventory. You can change them in the game’s own settings tab."]),n("Opponents",["Easy is new to DH and makes lots of mistakes. Medium is decent but beatable. Hard knows the tricks. Elite is the ultimate challenge. Each fight it plays a slightly different style.","Training (on the start screen) makes the bot throw the combos you pick, so you can practise eating them."]),n("After a fight",["Things to improve shows the moments that mattered: mistakes, close calls and good plays, judged on the real KO odds and on what the level you fought would actually do. Watch replays any moment in the arena.","Your settings, loadout and records are saved in this browser only."])}open(t){var e;this.view=t,this.render(),(e=this.root.querySelector(".ss-panel"))==null||e.scrollTo(0,0)}labelFight(){if(!this.fightBtn)return;this.fightBtn.innerHTML="";const t=un[this.level].name;Ae(this.fightBtn,gs().length?`Train vs ${t}!`:`Fight ${t}!`,"b12_full",Ms,2)}tile(t,e,n,s,r){const o=rt("button","ss-tile"+(s?" on":""),t),a=rt("div","ss-tiletop",o);rt("div","ss-tilename",a,e),rt("div","ss-tilego",a,s?"On ›":"›"),rt("div","ss-tilestatus",o,n),o.addEventListener("click",r)}page(t,e,n){const s=rt("div","ss-head",t);Ae(s,e,"q8_full",an,3,"ss-title"),rt("div","ss-sub",s,n);const r=rt("div","ss-page",t),o=rt("button","ss-fight ss-done",t);return Ae(o,"Done","b12_full",Ms,2),o.addEventListener("click",()=>this.open("main")),r}renderTraining(t){const e=this.page(t,"Training","Pick one or more combos to practise. The bot fights normally, and throws in the ones you pick on top."),n=rt("div","ss-explain",e);rt("div","ss-explainhead",n,"How it works");const s=rt("ul","ss-list",n);for(const a of["About every 30 seconds one of your picked combos comes, never on a fixed beat: sometimes two close together, sometimes a longer wait.","The bot has PID the whole time (no PID swaps), so you always eat them off PID, the hard way.","Apart from your combos it just fights plainly: no other KO attempts or mind games. It’s for learning, not for outplaying the bot.","Get hit, eat up, repot, keep fighting: the next one can come any moment.","Its spec is topped up for each one, and it never fakes them.","After each one the chat tells you how it went (in orange): survived, and your HP before and after, or KO’d.","Training fights don’t count for your win/loss record."])rt("li","",s,a);this.section(e,"Combos");const r=rt("div","ss-train",e),o=gs();for(const a of Sr){const l=rt("button","ss-chip"+(o.includes(a.id)?" on":""),r),c=rt("div","ss-tiletop",l);rt("div","ss-chipname",c,a.label);const h=rt("div","ss-check",c,o.includes(a.id)?"✓":"");rt("div","ss-chipdesc",l,a.desc),rt("div","ss-chiptip",l,a.tip),l.addEventListener("click",()=>{const u=gs(),d=u.includes(a.id)?u.filter(p=>p!==a.id):[...u,a.id];de("dhsim.training",JSON.stringify(d)),l.classList.toggle("on",d.includes(a.id)),h.textContent=d.includes(a.id)?"✓":""})}}renderSettings(t){const e=this.page(t,"Settings","Everything here is saved, and you can change it again between fights.");this.section(e,"Training aids");const n=rt("div","ss-opts ss-opts1",e);this.toggle(n,"Attack timer","A number under your health bar: the ticks until you can attack again (1 means a click now attacks on the next tick). Only for you, like the RuneLite plugin; the bot’s timer stays hidden.","dhsim.attackTimer",!1),this.toggle(n,"Large attack timer","The attack timer at double size, easier to see mid-fight (turns the attack timer on by itself).","dhsim.attackTimerLarge",!1),this.toggle(n,"Metronome sound","A tick-tock click every game tick (0.6 s), to get a feel for tick timing.","dhsim.metronomeSound",!1),this.toggle(n,"Metronome box","A small box at the top of the screen that switches colour every game tick.","dhsim.metronomeVisual",!1),this.section(e,"Interface");const s=rt("div","ss-opts ss-opts1",e);this.toggle(s,"PID indicator","Shows whether you have PID (green) or not (red). Off: read it yourself from the hitsplats, like in the real game.","dhsim.pidIndicator",!0),this.toggle(s,"Venge timer","Your Vengeance cooldown in seconds, next to the PID card.","dhsim.vengeTimer",!0),this.toggle(s,"Boosted levels","Small boxes by the spec orb with your boosted or drained levels.","dhsim.boosts",!0),this.section(e,"Bot");const r=rt("div","ss-opts ss-opts1",e),o=rt("div","ss-opt",r),a=rt("div","ss-optlabel",o);rt("div","ss-optname",a,"Bot’s spec weapon"),rt("div","ss-optdesc",a,`Next to the granite maul. ${$a.find(Z=>Z.id===Xa()).desc}.`);const l=rt("div","ss-seg",o);for(const Z of $a)rt("button","ss-segbtn"+(Z.id===Xa()?" on":""),l,Z.name).addEventListener("click",()=>{de("dhsim.botSpec",Z.id),this.render()});this.toggle(r,"Fight to the death","The bot never tabs out: it eats everything it has and fights until one of you dies. For when you just want to practise, not win the supply battle.","dhsim.botNoTab",!1),this.toggle(r,"Bot thoughts","The bot explains its decisions in the chat (purple): what it saw, and why it went for a KO. Interesting, but it gives its plans away.","dhsim.botThoughts",!1),this.section(e,"Sound");const c=rt("div","ss-opts ss-opts1",e),h=rt("div","ss-opt",c),u=rt("div","ss-optlabel",h);rt("div","ss-optname",u,"Sound volume"),rt("div","ss-optdesc",u,Je()===0?"Muted":`${Je()}%`);const d=rt("input","ss-slider",h);d.type="range",d.min="0",d.max="100",d.step="10",d.value=String(Je()),d.addEventListener("input",()=>{Ph(Number(d.value)),u.lastChild.textContent=Je()===0?"Muted":`${Je()}%`}),this.section(e,"Connection");const p=rt("div","ss-opts ss-opts1",e),g=rt("div","ss-opt",p),v=rt("div","ss-optlabel",g);rt("div","ss-optname",v,"Ping");const f=rt("div","ss-optdesc",v,""),m=()=>{const Z=Va();f.textContent=`${Z} ms${Z===0?" (no delay)":Z<=30?" (good connection)":Z<=80?" (average)":" (laggy)"}: your clicks reach the server half a ping later, and you see the result half a ping after that, like the real game.`};m();const T=rt("input","ss-slider",g);T.type="range",T.min="0",T.max="200",T.step="10",T.value=String(Va()),T.addEventListener("input",()=>{de("dhsim.ping",T.value),m()}),this.section(e,"Interface size");const y=rt("div","ss-opts ss-opts1",e),E=rt("div","ss-opt",y),D=rt("div","ss-optlabel",E);rt("div","ss-optname",D,"Inventory and interface");const C=()=>`${Math.round(xs()*100)}% (also Ctrl + mouse wheel in the game)`,A=rt("div","ss-optdesc",D,C()),N=rt("input","ss-slider",E);N.type="range",N.min="0.8",N.max="2.5",N.step="0.05",N.value=String(xs()),N.addEventListener("input",()=>{W_(Number(N.value)),A.textContent=C()})}renderEditor(t){const e=rt("div","ss-head",t);Ae(e,"Loadout","q8_full",an,3,"ss-title"),rt("div","ss-sub",e,"Arrange your inventory and pick what you wear. Saved loadouts are used for every fight."),this.editor=new X_(t,Ba()??Au(),n=>{U_(n),de("dhsim.useSavedLoadout","1"),this.open("main")},()=>this.open("main"))}pick(t){this.level=t;for(const e of this.root.querySelectorAll(".ss-card")){const n=e.dataset.level===t;e.classList.toggle("selected",n);const s=e.querySelector("canvas");s&&s.replaceWith(Ae(document.createElement("div"),un[e.dataset.level].name,"b12_full",n?ys:an,2))}this.labelFight()}section(t,e){rt("div","ss-section",t,e)}toggle(t,e,n,s,r){const o=()=>{const h=ie(s);return h===null?r:h==="1"},a=rt("label","ss-opt",t),l=rt("div","ss-optlabel",a);rt("div","ss-optname",l,e),rt("div","ss-optdesc",l,n);const c=rt("button","ss-switch"+(o()?" on":""),a);rt("span","ss-knob",c),c.addEventListener("click",h=>{h.preventDefault(),de(s,o()?"0":"1"),c.classList.toggle("on",o())})}}class Z_{constructor(t){R(this,"root");R(this,"timer",0);this.root=rt("div","ff-layer",t);for(const e of["pointerdown","pointerup","wheel"])this.root.addEventListener(e,n=>n.stopPropagation())}clear(){clearTimeout(this.timer),this.root.innerHTML="",this.root.classList.remove("blocking")}ready(t,e){this.clear();const n=rt("div","ff-card",this.root);rt("div","ff-label",n,"Next opponent"),Ae(n,`${t} bot`,"b12_full",an,2),rt("div","ff-hint",n,"Pot up and get set. You can’t attack until the countdown ends.");const s=rt("button","ss-fight ff-btn",n);Ae(s,"Ready","b12_full",Ms,2),s.addEventListener("click",()=>e())}tabbed(t,e,n,s,r,o=!1){this.clear(),this.root.classList.add("blocking");const a=rt("div","ff-card",this.root);Ae(a,t,"q8_full",an,3),rt("div","ff-hint",a,`No KO: both reset (HP, spec, inventory). Against the ${e} bot.`);const l=rt("div","ff-row",a),c=rt("button","ss-fight ff-btn",l);Ae(c,"Go again","b12_full",Ms,2),c.addEventListener("click",()=>n());const h=rt("button","ff-secondary",l);if(Ae(h,"Menu","b12_full",an,2),h.addEventListener("click",()=>s()),r&&this.reviewButton(a,r),o){const u=rt("label","ff-check",a),d=rt("input","",u);d.type="checkbox",d.checked=qa(),rt("span","",u,"Don’t let the bot tab out: fight to the death"),d.addEventListener("change",()=>de("dhsim.botNoTab",d.checked?"1":"0"))}}reviewButton(t,e){const n=rt("button","ff-secondary ff-review",t);Ae(n,"Things to improve","b12_full",ys,2),n.addEventListener("click",()=>e())}countdown(t){this.clear();const e=["3","2","1","FIGHT!"],n=s=>{this.root.innerHTML="";const r=rt("div","ff-count",this.root);if(Ae(r,e[s],"q8_full",s===3?ys:an,s===3?4:5),s===3){t(),this.timer=window.setTimeout(()=>this.clear(),900);return}this.timer=window.setTimeout(()=>n(s+1),1e3)};n(0)}result(t,e,n,s,r,o){this.clear(),this.root.classList.add("blocking");const a=rt("div","ff-card",this.root),l={won:"KO!",lost:"You got KO’d","won-food":"You won","lost-food":"You died","you-tabbed":"You tabbed out","bot-tabbed":"The bot tabbed out"}[t];Ae(a,l,"q8_full",t==="won"||t==="won-food"||t==="bot-tabbed"?ys:t==="you-tabbed"?an:"#ff5040",3),rt("div","ff-hint",a,`${t==="won-food"?"It was out of real food: no KO. ":t==="lost-food"?"You were out of real food: no KO. ":t==="you-tabbed"||t==="bot-tabbed"?"No KO: reset and go again. ":""}Against the ${e} bot${n?` • KOs ${n.w}–${n.l}`:""}`);const u=rt("div","ff-row",a),d=rt("button","ss-fight ff-btn",u);Ae(d,"Rematch","b12_full",Ms,2),d.addEventListener("click",()=>s());const p=rt("button","ff-secondary",u);Ae(p,"Menu","b12_full",an,2),p.addEventListener("click",()=>r()),o&&this.reviewButton(a,o)}}function vs(i){const t={angler:0,karambwan:0,brew:0,restore:0,combat:0,sanfew:0};for(const e of i.inv)e&&(e.id==="angler"||e.id==="karambwan"?t[e.id]++:(e.id==="brew"||e.id==="restore"||e.id==="combat"||e.id==="sanfew")&&(t[e.id]+=e.doses??4));return t}const Ni=(i,t)=>{var e;return((e=i.equip.weapon)==null?void 0:e.id)===t||i.inv.some(n=>(n==null?void 0:n.id)===t)};function ch(i,t){var n;const e=re(i,"voidwaker");return{hp:i.level.hitpoints,maxHp:i.base.hitpoints,spec:i.spec,weapon:((n=i.equip.weapon)==null?void 0:n.id)??"none",venge:i.vengeActive,vengeCd:i.timers.venge,atk:i.timers.attack,food:i.timers.food,combo:i.timers.combo,potion:i.timers.potion,str:i.level.strength,baseStr:i.base.strength,prayer:i.level.prayer,piety:i.prayers.has("piety"),supplies:vs(i),freeSlots:i.inv.filter(s=>!s).length,max:{tentacle:re(i,"tentacle"),gmaul:re(i,"gmaul"),vwSpec:Math.floor(re(i,"voidwaker")*1.5),axe:re(i,"dh_axe"),agsSpec:Math.floor(Math.floor(re(i,"ags")*1.1)*1.25)},rolls:{tentacle:Hi(i,t,"tentacle"),gmaul:Hi(i,t,"gmaul"),ags:Hi(i,t,"ags","ags"),axe:Hi(i,t,"dh_axe"),vw:[Math.floor(e*.5),Math.floor(e*1.5)]},has:{gmaul:Ni(i,"gmaul"),voidwaker:Ni(i,"voidwaker"),axe:Ni(i,"dh_axe"),ags:Ni(i,"ags"),orb:Ni(i,"orb"),tab:Ni(i,"tab")}}}function hh(i,t){var e,n;return{pos:{...i.pos},via:i.steps.length===2?{...i.steps[0]}:null,moved:i.moved,facing:i.targetId===t.id,worn:Object.values(i.equip).filter(Boolean).map(s=>s.id),weapon:((e=i.equip.weapon)==null?void 0:e.id)??null,shield:((n=i.equip.shield)==null?void 0:n.id)??null,smite:i.prayers.has("smite"),hp:i.level.hitpoints,maxHp:i.base.hitpoints}}function J_(i,t){const e=[];for(const n of Object.keys(i))for(let s=t[n];s<i[n];s++)e.push(n);return e}class Q_{constructor(){R(this,"ticks",[]);R(this,"pending",[]);R(this,"eaters",new Set);R(this,"last",null);R(this,"visuals",[]);R(this,"withVisuals",!1);R(this,"recording",!1)}start(t,e){this.ticks=[],this.pending=[],this.visuals=[],this.eaters.clear(),this.last={you:vs(t),opp:vs(e)},this.recording=!0}attack(t,e,n,s=1){this.recording&&this.pending.push({type:"attack",who:t,weapon:e,special:n,hits:s})}hit(t,e){this.recording&&this.pending.push({type:"hit",on:t,from:e.from,damage:e.damage,kind:e.kind,special:!!e.special})}anim(t,e){this.recording&&(e==="eat"||e==="drink"?this.eaters.add(t):e==="cast"?this.pending.push({type:"cast",who:t}):e==="orb"?this.pending.push({type:"orb",who:t}):e==="tab"&&this.pending.push({type:"tab",who:t}))}thought(t){this.recording&&this.pending.push({type:"thought",text:t})}death(t){this.recording&&this.pending.push({type:"death",who:t})}visual(t){this.recording&&this.withVisuals&&this.visuals.push(t)}endTick(t,e,n,s){if(!this.recording)return;const r={you:vs(n),opp:vs(s)},o=this.pending.splice(0);for(const l of["you","opp"]){const c=this.last?J_(this.last[l],r[l]):[];(c.length||this.eaters.has(l))&&o.unshift({type:"consume",who:l,items:c})}this.eaters.clear(),this.last=r;const a={tick:t,pid:e,you:ch(n,s),opp:ch(s,n),events:o};this.withVisuals&&(a.look={you:hh(n,s),opp:hh(s,n)},a.fx=this.visuals.splice(0)),this.ticks.push(a)}finish(t,e,n){if(!this.recording)return null;this.recording=!1;const s=this.ticks[this.ticks.length-1];return s&&(s.events.push(...this.pending.splice(0)),s.fx&&s.fx.push(...this.visuals.splice(0))),{ticks:this.ticks,end:t,level:e,training:n}}}function _r(i){const t=Math.round(i*.6);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}const ze="the bot",tx=10,ex=.2,zo=.08,nx=.4,uh=.08,Ts=22,Iu=18,ix=16,sx=5,Ur={gmaul:"granite maul",voidwaker:"Voidwaker",dh_axe:"DH axe",ags:"AGS",tentacle:"whip",none:"fists"};function dh(i){const t=i.rolls,e=dn(t.tentacle),n=dn(t.gmaul),s=dn(t.ags),r=Vh(t.vw[0],t.vw[1]),o=Math.floor(i.spec/50),a=[{name:"whip",hits:[e]}];return i.has.axe&&a.push({name:"DH axe",hits:[dn(t.axe)]}),o>=1&&i.has.gmaul&&a.push({name:"whip into maul",hits:[e,n]}),o>=1&&i.has.voidwaker&&a.push({name:"Voidwaker",hits:[r]}),o>=1&&i.has.ags&&a.push({name:"AGS",hits:[s]}),o>=2&&i.has.gmaul&&a.push({name:"double maul",hits:[n,n]}),o>=2&&i.has.gmaul&&i.has.voidwaker&&a.push({name:"Voidwaker into maul",hits:[r,n]}),o>=2&&i.has.gmaul&&i.has.ags&&a.push({name:"AGS into maul",hits:[s,n]}),a}const rx={"whip into maul":"single maul","instant maul":"single maul",Voidwaker:"Voidwaker",AGS:"AGS","double maul":"tentacle into double maul","instant double maul":"tentacle into double maul","Voidwaker into maul":"Voidwaker into insta maul","AGS into maul":"AGS into insta maul"};function ox(i){const t=Object.values(un).find(n=>n.name===i);if(!t)return()=>1;const e=(t.play.newbie??0)>0?.35:1;return n=>{if(n==="whip")return 1;if(n==="DH axe")return e<1?.5:1;const s=rx[n];return s?Math.min(1,t.combos[s]??0)*e:1}}function fs(i,t,e=()=>1){let n={p:-1,raw:0,combo:dh(i)[0]};for(const s of dh(i)){const r=_n(s.hits,t),o=r*e(s.name);o>n.p&&(n={p:o,raw:r,combo:s})}return n}function Vo(i,t){const e=i.rolls,n=[],s=[];for(const o of t)if(o.weapon==="gmaul"&&o.special){for(let a=0;a<o.hits;a++)n.push(dn(e.gmaul));s.push(o.hits>1?"double maul":"maul")}else o.weapon==="voidwaker"&&o.special?(n.push(Vh(e.vw[0],e.vw[1])),s.push("Voidwaker")):o.weapon==="ags"&&o.special?(n.push(dn(e.ags)),s.push("AGS")):o.weapon==="dh_axe"?(n.push(dn(e.axe)),s.push("DH axe")):(n.push(dn(e.tentacle)),s.push(Ur[o.weapon]??o.weapon));return{name:s.join(" into ").replace("maul into maul","double maul")||"whip",hits:n}}function Go(i,t){return i.events.reduce((e,n)=>e+(n.type==="hit"&&n.on===t&&(n.kind==="melee"||n.kind==="magic")?n.damage:0),0)}function Wo(i,t){return i.events.reduce((e,n)=>e+(n.type==="hit"&&n.on===t?n.damage:0),0)}const Fi=(i,t)=>i.events.some(e=>e.type==="consume"&&e.who===t),$n=(i,t)=>i.events.filter(e=>e.type==="attack"&&e.who===t),mn=(i,t)=>$n(i,t).filter(e=>e.special),fh=i=>i.food<=1&&i.supplies.angler+i.supplies.karambwan>0;function ja(i){let t=0;return i.food<=1&&i.supplies.angler&&(t+=Ts),i.potion<=1&&i.supplies.brew&&(t+=ix),i.combo<=1&&i.supplies.karambwan&&(t+=Iu),t}const qo=i=>ja(i)>Ts+Iu?"triple eat":ja(i)>Ts?"double eat":"eat";function ph(i,t,e){var r;const n=[],s=[i[t-1],i[t]].filter(Boolean).flatMap(o=>$n(o,e)).find(o=>!o.special&&o.weapon==="tentacle");for(let o=t;o<=Math.min(i.length-1,t+2);o++)n.push(...$n(i[o],e).filter(a=>a.special||o>t&&a.weapon==="dh_axe"));return s&&((r=n[0])==null?void 0:r.weapon)==="gmaul"&&n.unshift(s),n}function ax(i){var $t;const t=i.ticks,e=ox(i.level),n={Easy:.6,Medium:.3,Hard:.2,Elite:.12}[i.level]??.2,s=i.level==="Easy"?" An Easy bot rarely punishes this; stronger ones will.":i.level==="Medium"?" A decent chance for it to catch you off guard: it doesn’t always go for it, but it can.":" A real chance to get caught; a good player takes those.",r=[],o=w=>r.push({until:w.at,...w}),a=new Set,l=(w,k)=>{for(let W=Math.max(0,w);W<=k;W++)a.add(W)},c=[];t.forEach((w,k)=>{c[k]=$n(w,"opp").length?k:k>0?c[k-1]:-100});const h=(w,k)=>{const W=t[w].opp,et=t[w].pid==="you"?.5:1;if(W.atk<=1){const dt=fs(W,k,e);return{...dt,p:dt.p*et}}const ot=Math.floor(W.spec/50);if(!W.has.gmaul||ot<1||w-c[w]>sx)return{p:0,raw:0,combo:{name:"whip",hits:[]}};const st=dn(W.rolls.gmaul),ct=ot>=2?{name:"instant double maul",hits:[st,st]}:{name:"instant maul",hits:[st]},Mt=_n(ct.hits,k);return{p:Mt>=nx?Mt*e(ct.name)*et:0,raw:Mt,combo:ct}},u=w=>fh(t[w].you)&&!Fi(t[w],"you")&&fs(t[w].opp,t[w].you.hp,e).p>=zo,d=w=>u(w)&&h(w,t[w].you.hp).p>=zo,p=t.findIndex(w=>w.events.some(k=>k.type==="death"&&k.who==="you"));if(p>0){let w=p;for(let V=p-1;V>=Math.max(0,p-3);V--)Wo(t[V],"you")>0&&(w=V);const k=Math.max(0,w-1),W=t[k].you,et=t.slice(w,p+1).reduce((V,nt)=>V+Wo(nt,"you"),0),ot=Vo(t[k].opp,t.slice(Math.max(0,w-2),p+1).flatMap(V=>$n(V,"opp"))),st=_n(ot.hits,W.hp),ct=t.slice(Math.max(0,w-2),p+1).flatMap(V=>mn(V,"opp"))[0];let Mt=-1;for(let V=Math.max(0,w-2);V<=p&&Mt<0;V++)mn(t[V],"opp").length&&(Mt=V);let dt=Mt;for(;ct&&dt>0&&t[dt-1].opp.weapon===ct.weapon;)dt--;const P=Mt>=0?Mt-dt:0,le=Mt>=0&&t[Mt].pid==="you",Ft=P+(le?1:0),Ot=ct?Ur[ct.weapon]??ct.weapon:"",Pt=_n(ot.hits,Math.min(W.maxHp+16,W.hp+ja(W)));let I=0,J=0;for(let V=w-1;V>=0&&u(V);V--)I++,d(V)&&J++;J||(I=0);let S,_,O="mistake";if(i.end==="lost-food")S="Out of food",_=`You died with no real food left (no double eat). Watch your supplies against ${ze}'s: tab out (once both specs are used) before it comes to this.`,O="note";else if(st<uh){const V=t.slice(Math.max(0,w-2),p+1).some(nt=>mn(nt,"opp").length);S=V?"A Hail Mary that worked":"Unlucky",_=V?`From ${W.hp} HP its ${ot.name} had only about ${Ee(st)} to KO you: it needed top rolls (it hit ${et}). Nothing to train on here.`:`From ${W.hp} HP its ${ot.name} needed a near-max hit (a ${Ee(st)} chance) and got it (${et}). Unlucky; staying a few HP higher takes even that away.`,O="note"}else Ft>=1&&Pt<st*.5?(S="One tick too slow",_=`${P>=1?`${ze} had its ${Ot} out ${P} tick${P>1?"s":""} before the spec, with you at ${W.hp} HP.`:`You had PID, so its ${Ot} landed a tick after the swing: you could see it coming at ${W.hp} HP.`} From there its ${ot.name} had ${Ee(st)} to KO you; a ${qo(W)} ${P>=1?"when it showed":"on the swing"} would have dropped that to ${Ee(Pt)}. One tick quicker would likely have saved you.`):I>=2?(S="KO’d from KO range",_=`You sat at ${t[w-1].you.hp} HP for ${I} ticks with food ready while its ${ot.name} had ${Ee(st)} to KO you. ${Mt<0?`Its next hit was coming either way (${et} damage): eating first was the play.`:`${le?"The spec came without a warning":"It had PID, so the spec landed the moment it swung"} (${et} damage): the time to eat was before it.`} A ${qo(W)} would have made it ${Ee(Pt)}.`):st>=.3?(S="KO’d in range",_=`At ${W.hp} HP its ${ot.name} had ${Ee(st)} to KO you. Stay higher when it has spec: a ${qo(W)} would have made it ${Ee(Pt)}.`):(S="KO’d on a real chance",_=`From ${W.hp} HP its ${ot.name} had ${Ee(st)} to KO you and it landed (${et}). A risky spot more than a big mistake: a bit higher is safer.`,O="note");o({at:k,until:p,kind:O,title:S,text:_,weight:100}),l(k-I,p)}let g=0;for(let w=1;w<t.length;w++){if(!mn(t[w],"opp").length||mn(t[w-1],"opp").length||a.has(w))continue;const k=Vo(t[w-1].opp,ph(t,w,"opp")),W=[t[w],t[w+1],t[w+2]].filter(Boolean).reduce((Mt,dt)=>Mt+Go(dt,"you"),0);if(!t.slice(w,w+3).every(Mt=>Mt.you.hp>0))continue;const ot=[t[w-1],t[w]].some(Mt=>Fi(Mt,"you")),st=t[Math.max(0,w-2)].you.hp,ct=_n(k.hits,st);if(ot&&ct>=ex&&g<3)g++,o({at:w,kind:"good",title:"Ate the combo",text:`${ze} went for a ${k.name} (${Ee(ct)} to KO you from ${st}) and you ate in time: it hit ${W} and you lived. That's the read.`,weight:20+ct*20});else if(!ot&&_n(k.hits,t[w-1].you.hp)>=.35){const Mt=_n(k.hits,t[w-1].you.hp);o({at:w,kind:"mistake",title:"Got away with it",text:`${ze}'s ${k.name} had ${Ee(Mt)} to KO you from ${t[w-1].you.hp} HP and you didn't eat: you lived on its rolls (${W}), not on your play.${t[w].pid==="opp"?` It had PID, so it all landed right away: when it has spec and PID, eat on its ${k.name.startsWith("whip")?"whip":"first hit"}, not after the specs.`:" You had PID, so you saw it coming a tick before it landed: that was the time to eat."}`,weight:35+Mt*30}),l(w-2,w+2)}}const v=[];for(let w=0;w<t.length;w++){const k=Go(t[w],"you"),W=k+(w+1<t.length?Go(t[w+1],"you"):0);if(k<15||W<25)continue;const et=t[Math.min(w+1,t.length-1)].you;if(et.hp<=0)continue;let ot=w;for(;ot<t.length&&!Fi(t[ot],"you");)ot++;if(ot>=t.length)continue;const st=ot-w;v.push(st);let ct={p:0,raw:0,combo:{name:""}},Mt=-1;for(let dt=w+1;dt<ot;dt++){const P=h(dt,t[dt].you.hp);P.p>ct.p&&(ct=P,Mt=dt)}st>=3&&ct.p>=zo&&fh(et)&&!a.has(w)&&(o({at:w,until:ot,kind:ct.p>=n?"mistake":"note",title:`Ate ${st} ticks after a big hit`,text:`You took ${W} and were left at ${et.hp} HP. While you waited, ${ze} could hit again${Mt>=0&&t[Mt].you.hp!==et.hp?` (you at ${t[Mt].you.hp})`:""}: its ${ct.combo.name} had ${Ee(ct.raw)} to KO you, and the next eat only came ${st} ticks (${(st*.6).toFixed(1)} s) later.${s}`,weight:30+st*3+ct.p*40}),l(w,ot)),w=ot}let f=0;for(let w=0;w<t.length;w++){if(!u(w))continue;let k=w;for(;k+1<t.length&&u(k+1);)k++;const W=k-w+1;let et=0;for(let st=w+1;st<=k;st++)d(st)&&et++;f+=et;const ot=[...Array(W).keys()].every(st=>!a.has(w+st));if(W>=3&&et>=1&&ot){let st={p:0,raw:0,hp:0,name:"",spec:0,pid:!1};for(let dt=w+1;dt<=k;dt++){if(!d(dt))continue;const P=h(dt,t[dt].you.hp);P.p>st.p&&(st={p:P.p,raw:P.raw,hp:t[dt].you.hp,name:P.combo.name,spec:t[dt].opp.spec,pid:t[dt].pid==="opp"})}const ct=p>=0&&k>=p-8,Mt=st.name!=="whip"&&st.name!=="DH axe";o({at:w,until:k,kind:st.p>=n?"mistake":"note",title:"Sat in KO range",text:`You stayed around ${st.hp} HP for ${(W*.6).toFixed(1)} s with food ready, and ${et===1?"once":`${et} times`} in that time ${ze} could hit you (${Math.floor(st.spec)}% spec): its ${st.name} had ${Ee(st.raw)} to KO you there.${Mt&&st.pid?" It had PID, so that would land the moment it clicked: really hard to eat.":st.pid?"":" You had PID, which buys you a tick to eat, but only if you’re watching for it."}${ct?"":s}`,weight:15+W+et*4+st.p*40}),l(w,k)}w=k}const m=new Set;for(let w=1;w<t.length;w++){const k=mn(t[w],"you");if(!k.length)continue;const W=t[w-1],et=t[w].pid==="you"?w:w+1,ot=((($t=t[et])==null?void 0:$t.events)??[]).find(dt=>dt.type==="hit"&&dt.on==="you"&&dt.kind==="venge");if(ot&&m.has(ot))continue;if(W.opp.venge&&ot&&ot.type==="hit"){if(m.add(ot),k.every(Ot=>Ot.weapon==="gmaul")){t.slice(w+1,w+3).some(Pt=>$n(Pt,"you").some(I=>I.special||I.weapon==="dh_axe"))&&o({at:w,kind:"good",title:"Popped its Venge with the maul",text:`Your maul took ${ze}'s Vengeance (only ${ot.damage} came back), so the big hit after it wasn't reflected.`,weight:16});continue}if(ot.damage<12)continue;let dt=w-1;for(;dt>0&&t[dt-1].opp.venge;)dt--;const P=w-dt,le=mn(W,"you").some(Ot=>Ot.weapon==="gmaul"),Ft=Ur[k[0].weapon]??k[0].weapon;if(P<=2||le){o({at:w,kind:"note",title:"Unlucky Venge timing",text:le?`Your maul hit a 0, so it didn't pop ${ze}'s Vengeance, and your ${Ft} sent ${ot.damage} back. The right idea; the roll went against you.`:`${ze} cast Vengeance just before your ${Ft} went out (${(P*.6).toFixed(1)} s), too late to react to; ${ot.damage} came back. Nothing to fix, just be ready to eat after.`,weight:8});continue}o({at:w,kind:"mistake",title:"Spec into its Venge",text:`${ze}'s Vengeance had been up for ${(P*.6).toFixed(1)} s and your ${Ft} spec sent ${ot.damage} back at you. Check for its Venge before a big spec, or pop it first (a maul or a whip).`,weight:25+ot.damage});continue}if(mn(W,"you").length)continue;const st=Vo(W.you,ph(t,w,"you")),ct=_n(st.hits,W.opp.hp),Mt=t.slice(w,w+4).some(dt=>dt.events.some(P=>P.type==="death"&&P.who==="opp"));Mt&&ct<uh?o({at:w,kind:"note",title:"A Hail Mary that worked",text:`Your ${st.name} only had about ${Ee(ct)} to KO it from ${W.opp.hp} HP. It worked this time; don't build your game on it.`,weight:30}):!Mt&&ct<.05&&W.opp.hp>=50&&st.name!=="maul"?o({at:w,kind:W.opp.hp>=70?"mistake":"note",title:"Low-odds spec",text:`Your ${st.name} had about ${Ee(ct)} to KO it from ${W.opp.hp} HP, and it could just eat. Specs pay off when it's in range or caught off guard; this one mostly cost you spec energy.`,weight:14+(W.opp.hp-50)/4}):!Mt&&ct>=.35&&o({at:w,kind:"good",title:"Good spot",text:`Your ${st.name} had ${Ee(ct)} to KO it from ${W.opp.hp} HP: the right moment to go. It ${Fi(t[w-1],"opp")||Fi(t[w],"opp")?"ate in time":"survived on your rolls"}.`,weight:18+ct*10})}for(let w=1;w<t.length;w++){const k=t[w].events.find(et=>et.type==="hit"&&et.on==="you"&&et.kind==="venge");if(!k||k.type!=="hit"||k.damage<20||m.has(k))continue;m.add(k),[t[w],t[w-1]].flatMap(et=>$n(et,"you")).find(et=>!et.special&&et.weapon==="dh_axe")&&o({at:w,kind:"mistake",title:"Axe into its Venge",text:`Your axe hit into ${ze}'s Vengeance: ${k.damage} came straight back. With Venge up on the other side, an axe is a gamble on your own HP.`,weight:25+k.damage})}for(let w=0;w<t.length;w++){const k=$n(t[w],"you").find(ct=>ct.weapon==="dh_axe"),W=t[Math.max(0,w-1)].you,et=[1,2].some(ct=>{var dt;const Mt=t[w-ct];return!Mt||!Mt.events.some(P=>P.type==="hit"&&P.on==="you"&&P.from==="opp"&&(P.kind==="melee"||P.kind==="magic"))?!1:((dt=t[w-ct-1])==null?void 0:dt.you.weapon)==="dh_axe"||Mt.you.weapon==="dh_axe"}),ot=[t[w-1],t[w-2]].some(ct=>ct&&mn(ct,"you").length),st=W.max.axe>=t[Math.max(0,w-1)].opp.hp;if(k&&!et&&!ot&&!st&&W.hp>=75&&W.max.axe<W.max.tentacle*1.5){o({at:w,kind:"note",title:"Axe at high HP",text:`You axed at ${W.hp} HP, where its max is only ${W.max.axe} (your whip's is ${W.max.tentacle}). The axe is strong when you're low; up here it's a slow whip.`,weight:12});break}}const T=w=>!mn(w,"you").length&&!Fi(w,"opp")&&w.you.hp>0&&fs(w.you,w.opp.hp).combo.name!=="whip"&&fs(w.you,w.opp.hp).p>=.35;for(let w=0;w<t.length;w++){if(!T(t[w]))continue;let k=w;for(;k+1<t.length&&T(t[k+1]);)k++;const W=k-w+1;if(W>=3&&!a.has(w)){const et=fs(t[w].you,t[w].opp.hp),ot=t.slice(w,k+1).filter(st=>st.pid==="you").length;o({at:w,until:k,kind:"note",title:"A KO chance",text:`${ze} sat at ${t[w].opp.hp} HP for ${(W*.6).toFixed(1)} s without eating: your ${et.combo.name} had ${Ee(et.p)} to KO it.${ot?" You had PID for part of it, so your specs would have landed first.":""}`,weight:15+W*2+et.p*15})}w=k}let y=0,E={at:-1,hp:0,lost:0};for(let w=1;w<t.length;w++){const k=t[w].events.find(ot=>ot.type==="consume"&&ot.who==="you");if(!k||k.type!=="consume"||!k.items.includes("angler"))continue;const W=t[w-1].you.hp,et=Math.max(0,W+Ts-t[w].you.maxHp);et>=10&&(y+=et,et>E.lost&&(E={at:w,hp:W,lost:et}))}E.at>=0&&y>=20&&o({at:E.at,kind:"note",title:"Food with HP to spare",text:`You ate an angler at ${E.hp} HP: ${E.lost} of its ${Ts} heal was wasted (${y} in the whole fight). Sitting near full is "safing"; around 80 is where good players hover.`,weight:10});let D=0,C=-1,A=0,N=-1;for(let w=0;w<t.length;w++){const k=t[w].you;!k.piety&&k.prayer>0?D++===0&&(C=w):D<10&&(D=0),k.str<=k.baseStr+2&&k.supplies.combat>0&&k.potion<=1?A++===0&&(N=w):A<50&&(A=0)}D>=10&&o({at:C,kind:"mistake",title:"Fighting without Piety",text:`You fought ${(D*.6).toFixed(0)} s without Piety on: less accuracy, damage and defence for free.`,weight:18}),A>=50&&o({at:N,kind:"note",title:"Strength not boosted",text:`Your Strength was barely boosted for ${(A*.6).toFixed(0)} s (brews drain it) while you still had a combat potion. Your max hits, and so your KO chances, were lower than they could be.`,weight:10});const Z=t.findIndex(w=>w.events.some(k=>k.type==="death"&&k.who==="opp"));if(Z>=0&&i.end==="won"){let w=Z;for(let W=Z-1;W>=Math.max(0,Z-3);W--)Wo(t[W],"opp")>0&&(w=W);const k=t[Math.max(0,w-1)].opp.hp;o({at:Math.max(0,w-1),until:Z,kind:"good",title:"KO!",text:`You KO'd ${ze} from ${k} HP while it still had food: that's the goal.`,weight:90})}i.end==="bot-tabbed"&&o({at:t.length-1,kind:"good",title:"It tabbed out",text:`${ze} ran low enough to tab out: you won the supply battle.`,weight:40});let x=0,b=0,z=0,q=0,j=0,$=0,H=0,tt=0,Y=0;for(const w of t){w.pid==="you"&&Y++;for(const k of w.events)if(k.type==="hit"&&(k.kind==="melee"||k.kind==="magic")&&(k.on==="opp"?(x+=k.damage,z=Math.max(z,k.damage)):(b+=k.damage,q=Math.max(q,k.damage))),k.type==="attack"&&k.who==="you"&&k.special&&(j+=k.hits),k.type==="consume"&&k.who==="you")for(const W of k.items)W==="angler"?$++:W==="karambwan"?H++:W==="brew"&&tt++}const yt={seconds:Math.round(t.length*.6),dealt:x,taken:b,biggestDealt:z,biggestTaken:q,specsUsed:j,anglers:$,karambwans:H,brewSips:tt,eatDelay:v.length?v.reduce((w,k)=>w+k,0)/v.length:null,pid:t.length?Y/t.length:0,inRangeSeconds:Math.round(f*.6)},pt=[],St=(w,k)=>w.at<=k.until+2&&k.at<=w.until+2;for(const w of r.sort((k,W)=>W.weight-k.weight))pt.some(W=>W.title===w.title&&St(W,w))||/^Sat in KO range|^Ate d+ ticks/.test(w.title)&&pt.some(W=>W.kind==="mistake"&&St(W,w))||pt.push(w);const Wt=pt.slice(0,tx).sort((w,k)=>w.at-k.at);return{summary:yt,moments:Wt}}function lx(i,t,e=3,n=1){const s=[];for(let r=Math.max(0,t-e);r<=Math.min(i.ticks.length-1,t+n);r++)for(const o of i.ticks[r].events)o.type==="thought"&&s.push({at:r,text:o.text});return s}function Uu(i){const t=[];for(const e of i.events){const n="who"in e?e.who==="you":!1;switch(e.type){case"attack":{const s=Ur[e.weapon]??e.weapon;t.push(e.special?`${n?"You spec":"The bot specs"} with the ${s}${e.hits>1?` (×${e.hits})`:""}`:`${n?"You attack":"The bot attacks"} with the ${s}`);break}case"hit":{const s=e.kind==="venge"?" (Venge)":e.kind==="recoil"?" (recoil)":e.kind==="orb"?" (locator orb)":e.kind==="poison"?" (poison)":e.special?" (spec)":"";t.push(`${e.on==="you"?"You take":"The bot takes"} ${e.damage}${s}`);break}case"consume":t.push(`${n?"You eat":"The bot eats"}: ${e.items.map(s=>s==="brew"?"brew sip":s).join(" + ")||"something"}`);break;case"cast":t.push(`${n?"You cast":"The bot casts"} Vengeance`);break;case"orb":t.push(`${n?"You feel":"The bot feels"} the locator orb`);break;case"tab":t.push(`${n?"You break":"The bot breaks"} a house tab`);break;case"death":t.push(`${n?"You die":"The bot dies"}`);break}}return t}const mh="#ff981f",cx="#4fd16a",hx="#ff5a48",gh={mistake:"#ff5a48",note:"#ffb347",good:"#4fd16a"},vh={mistake:"To improve",note:"Worth knowing",good:"Well done"},_h={mistake:0,note:1,good:2},ux=i=>`/assets/osrs/items/${i}.png`;function kt(i,t,e,n){const s=document.createElement(i);return s.className=t,n!==void 0&&(s.textContent=n),e==null||e.append(s),s}const dx=i=>i.replace(/^\[[^\]]+\]\s*/,"");class fx{constructor(){R(this,"root",null);R(this,"log");R(this,"review");R(this,"moments",[]);R(this,"cards",[]);R(this,"open_",-1);R(this,"at",0);R(this,"tickView",null);R(this,"onKey",t=>{if(!(!this.root||this.root.hidden)){if(t.key==="Escape"){this.close(),t.preventDefault();return}this.open_<0||(t.key==="ArrowLeft"?(this.go(this.at-1),t.preventDefault()):t.key==="ArrowRight"&&(this.go(this.at+1),t.preventDefault()))}});R(this,"onClose",()=>{});R(this,"onWatch",(t,e,n,s,r)=>r())}open(t,e,n){this.close(),this.log=t,this.review=ax(t),this.moments=[...this.review.moments].sort((r,o)=>_h[r.kind]-_h[o.kind]||r.at-o.at),this.onClose=e,n&&(this.onWatch=n),this.open_=-1,this.root=kt("div","ss-overlay rv-overlay",document.body);for(const r of["pointerdown","pointerup","wheel","contextmenu"])this.root.addEventListener(r,o=>o.stopPropagation());const s=kt("div","ss-panel rv-panel",this.root);this.header(s),this.momentsList(s),window.addEventListener("keydown",this.onKey,!0)}canWatch(){var t;return!!((t=this.log.ticks[0])!=null&&t.look)}watch(t,e,n){if(!this.root)return;const s=this.log.ticks.length-1,r=Math.max(0,Math.min(s,t)),o=Math.max(r,Math.min(s,e));this.root.hidden=!0,this.onWatch(this.log,r,o,n,()=>{this.root&&(this.root.hidden=!1)})}close(){this.root&&(window.removeEventListener("keydown",this.onKey,!0),this.root.remove(),this.root=null,this.onClose())}header(t){const e=kt("div","rv-head",t),n=kt("div","rv-headtext",e),s={won:"You KO’d it",lost:"You got KO’d","won-food":"It ran out of food","lost-food":"You ran out of food","you-tabbed":"You tabbed out","bot-tabbed":"It tabbed out",unfinished:"Fight not finished"}[this.log.end],r=this.log.end==="won"||this.log.end==="won-food"||this.log.end==="bot-tabbed",o=xe(s,"q8_full",r?"#ffff00":this.log.end==="lost"||this.log.end==="lost-food"?"#ff5040":mh,!0);o.className="ss-gametext",o.style.width=`${o.width*2}px`,n.append(o),kt("div","ss-sub",n,`Fight review • ${this.log.level} bot${this.log.training?" (training)":""} • ${_r(this.log.ticks.length)}`);const a=kt("button","ff-secondary rv-back",e),l=xe("Back","b12_full",mh,!0);l.className="ss-gametext",l.style.width=`${l.width*2}px`,a.append(l),a.addEventListener("click",()=>this.close());const c=kt("div","rv-tally",t);for(const d of["mistake","note","good"]){const p=this.moments.filter(v=>v.kind===d).length,g=kt("span","rv-chip",c);g.style.setProperty("--kind",gh[d]),kt("b","",g,String(p)),g.append(document.createTextNode(` ${vh[d].toLowerCase()}`))}const h=this.review.summary,u=kt("span","rv-facts-line",c);u.textContent=[h.eatDelay===null?"":`eat after a big hit: ${h.eatDelay.toFixed(1)} ticks`,`in KO range: ${h.inRangeSeconds} s`].filter(Boolean).join(" • "),u.title="Eat after a big hit: average ticks from a big hit (25+) on you to your next eat (0–1 is good). In KO range: time you sat where its spec combo had a real chance to KO you, with food ready."}momentsList(t){const e=kt("div","rv-moments",t);this.moments.length||kt("div","rv-empty",e,"Nothing stood out: a clean fight."),this.cards=this.moments.map((n,s)=>{const r=kt("div","rv-moment",e);r.style.setProperty("--kind",gh[n.kind]);const o=kt("div","rv-momenttop",r);kt("span","rv-mkind",o,vh[n.kind]),kt("span","rv-mtitle",o,n.title),kt("span","rv-mtime",o,_r(n.at)),kt("div","rv-mtext",r,n.text);const a=kt("div","rv-actions",r);return this.canWatch()&&kt("button","rv-watch",a,"▶ Watch").addEventListener("click",()=>this.watch(n.at-6,n.until+4,n.title)),kt("button","rv-detail",a,"Tick by tick").addEventListener("click",()=>this.toggle(s)),r})}toggle(t){var e;if((e=this.tickView)==null||e.remove(),this.tickView=null,this.cards.forEach(n=>n.classList.remove("on")),this.open_===t){this.open_=-1;return}this.open_=t,this.cards[t].classList.add("on"),this.tickView=kt("div","rv-tick",this.cards[t]),this.go(this.moments[t].at)}go(t){const e=this.log.ticks;if(!e.length||!this.tickView)return;this.at=Math.max(0,Math.min(e.length-1,t));const n=e[this.at],s=this.tickView;s.innerHTML="";const r=kt("div","rv-nav",s),o=(u,d,p)=>{const g=kt("button","rv-navbtn",r,u);g.title=d,g.addEventListener("click",()=>this.go(p()))};o("◀","One tick back (←)",()=>this.at-1),kt("div","rv-when",r,`${_r(this.at)} • tick ${this.at+1} of ${e.length}`),o("▶","One tick on (→)",()=>this.at+1),kt("span","rv-keys",r,"← → to step");const a=kt("div","rv-sides",s);this.side(a,"You",n.you,n.pid==="you",cx),this.side(a,"Bot",n.opp,n.pid==="opp",hx);const l=Uu(n);kt("div","rv-sub",s,"This tick");const c=kt("ul","rv-list",s);l.length||kt("li","rv-quiet",c,"Nothing happened.");for(const u of l)kt("li","",c,u);const h=lx(this.log,this.at);if(h.length){kt("div","rv-sub",s,"The bot was thinking");const u=kt("ul","rv-list rv-thoughts",s);for(const d of h){const p=kt("li","",u);kt("span","rv-tt",p,d.at===this.at?"now":`${d.at-this.at>0?"+":""}${d.at-this.at}t`),p.append(document.createTextNode(dx(d.text)))}}}side(t,e,n,s,r){const o=kt("div","rv-side",t),a=kt("div","rv-sidetop",o);kt("span","rv-sidename",a,e).style.color=r,s&&kt("span","rv-badge",a,"PID"),n.venge&&kt("span","rv-badge rv-venge",a,"Venge");const l=(p,g,v,f)=>{const m=kt("div","rv-bar",o);kt("span","rv-barlabel",m,p);const T=kt("div","rv-track",m),y=kt("div",`rv-fill ${f}`,T);y.style.width=`${Math.max(0,Math.min(100,g/v*100))}%`,kt("span","rv-barval",m,String(Math.max(0,Math.floor(g))))};l("HP",n.hp,n.maxHp,"rv-hp"),l("Spec",n.spec,100,"rv-spec");const c=kt("div","rv-gear",o),h=(p,g)=>{const v=kt("div","rv-item",c);if(p!=="none"){const f=kt("img","",v);f.src=ux(p),f.alt=""}kt("span","",v,g)};h(n.weapon,"in hand"),h("angler",`×${n.supplies.angler}`),h("karambwan",`×${n.supplies.karambwan}`),n.supplies.brew&&h("brew_4",`${n.supplies.brew} sips`);const u=kt("div","rv-facts",o),d=Math.max(0,n.atk);u.textContent=`${d?`next attack in ${d}`:"attack ready"} • ${n.food<=1?"can eat":`food delay ${n.food-1}`} • ${n.vengeCd>1?`Venge in ${Math.ceil((n.vengeCd-1)*.6)} s`:n.venge?"Venge up":"Venge ready"}`}}const xh=[1,.5,.25];function gn(i,t,e,n){const s=document.createElement(i);return s.className=t,n!==void 0&&(s.textContent=n),e==null||e.append(s),s}class px{constructor(t,e,n,s,r,o){R(this,"root");R(this,"when");R(this,"caption");R(this,"playBtn");R(this,"fill");R(this,"speedIdx",0);R(this,"onKey",t=>{if(t.key===" ")this.c.toggle(),t.preventDefault();else if(t.key==="ArrowLeft")this.c.step(-1),t.preventDefault();else if(t.key==="ArrowRight")this.c.step(1),t.preventDefault();else if(t.key==="Escape")this.c.close(),t.preventDefault();else return;t.stopPropagation()});this.from=n,this.to=s,this.total=r,this.c=o,this.root=gn("div","rp-bar",t);for(const d of["pointerdown","pointerup","wheel","contextmenu"])this.root.addEventListener(d,p=>p.stopPropagation());const a=gn("div","rp-top",this.root);gn("span","rp-label",a,"Replay"),gn("span","rp-title",a,e),this.when=gn("span","rp-when",a);const l=gn("div","rp-track",this.root);this.fill=gn("div","rp-fill",l),this.caption=gn("div","rp-caption",this.root);const c=gn("div","rp-row",this.root),h=(d,p,g,v="")=>{const f=gn("button",`rp-btn ${v}`,c,d);return f.title=p,f.addEventListener("click",g),f};h("↺","Watch again",()=>o.restart()),h("◀","One tick back (←)",()=>o.step(-1)),this.playBtn=h("⏸","Pause / play (space)",()=>o.toggle(),"rp-play"),h("▶","One tick on (→)",()=>o.step(1));const u=h("1×","Speed: normal, half, quarter",()=>{this.speedIdx=(this.speedIdx+1)%xh.length;const d=xh[this.speedIdx];u.textContent=d===1?"1×":d===.5?"½×":"¼×",o.speed(d)},"rp-speed");h("Back to review","Back to the review (Esc)",()=>o.close(),"rp-back"),window.addEventListener("keydown",this.onKey,!0)}show(t,e){this.when.textContent=`${_r(t)} • tick ${t+1}/${this.total}`;const n=Math.max(1,this.to-this.from);this.fill.style.width=`${Math.max(0,Math.min(100,(t-this.from)/n*100))}%`,this.caption.textContent=e.length?e.join(" • "):" "}setPlaying(t){this.playBtn.textContent=t?"⏸":"▶︎",this.playBtn.classList.toggle("paused",!t)}remove(){window.removeEventListener("keydown",this.onKey,!0),this.root.remove()}}function mx(){const i=[50753,50754,50755,50756,50757,50758],t=(n,s)=>i[((n*7+s*13)%i.length+i.length)%i.length],e=[];for(let n=1819;n<=1830;n++)e.push({object:t(n,3099),x:n,y:3099,rot:2},{object:t(n,3114),x:n,y:3114,rot:0});for(let n=3101;n<=3112;n++)e.push({object:t(1832,n),x:1832,y:n,rot:1},{object:t(1817,n),x:1817,y:n,rot:3});return e}const yh=mx(),Nu={ge:{centre:[3171,3511],solid:[],props:[]},colosseum:{centre:[1824,3106],solid:[{x:1816,y:3098,size:3},{x:1831,y:3098,size:3},{x:1816,y:3113,size:3},{x:1831,y:3113,size:3},...yh.map(i=>({x:i.x,y:i.y,size:1}))],props:yh}};function gx(i){const t=Nu[i],e=(Qe-1)/2,n=[];for(const s of t.solid)for(let r=0;r<s.size;r++)for(let o=0;o<s.size;o++){const a={x:s.x+r-t.centre[0]+e,y:s.y+o-t.centre[1]+e};a.x>=0&&a.y>=0&&a.x<Qe&&a.y<Qe&&n.push(a)}return n}const $o=600,Xo="Odablock Jr.",Mh=()=>Va()/2,Za=1.5;function bh(i,t,e){const n=document.createElement("img");n.className="click-cross",n.style.left=`${i}px`,n.style.top=`${t}px`,n.style.transform=`translate(-50%, -50%) scale(${Za})`,Bu.append(n);let s=0;const r=()=>{if(s>3){n.remove();return}n.src=Oi(`cross/${e}-${s++}.png`),setTimeout(r,100)};r()}const Oi=i=>`/assets/osrs/sprites/${i}`;let Wr=1,Fu=performance.now(),Ou=performance.now();const Bi=()=>Fu+(performance.now()-Ou)*Wr;function Sh(i){Fu=Bi(),Ou=performance.now(),Wr=i}const xr=(i,t)=>setTimeout(i,t/Wr);document.addEventListener("contextmenu",i=>i.preventDefault());const ar=document.getElementById("game"),lr=document.getElementById("hud"),Bu=document.getElementById("overlay");function Yo(i){return Object.values(i.equip).filter(Boolean).map(t=>t.id)}const ps=i=>i==="you"?1:.7,Hu=700,vx=400,wh=["hit","hit2","hit3","hit4"];function _x(i,t,e,n){if(t&&(n=1),t&&i==="gmaul")return on("spec_gmaul",n);if(t&&i==="ags")return on("spec_ags",n);if(t&&i==="voidwaker"){on("spec_voidwaker_cast",n),setTimeout(()=>on("spec_voidwaker",n),Hu);return}on(i==="dh_axe"?e==="crush"?"attack_dh_axe":"attack_dh_axe_crush":i==="tentacle"?"attack_whip":i==="gmaul"?"attack_gmaul":i==="voidwaker"?"attack_voidwaker":i==="ags"?e==="crush"?"attack_ags_crush":"attack_ags":"attack_unarmed",n)}const hi=class hi{constructor(t,e,n,s=!1){R(this,"head",document.createElement("div"));R(this,"body",document.createElement("div"));R(this,"prayer",document.createElement("img"));R(this,"bar",document.createElement("div"));R(this,"barFront",document.createElement("div"));R(this,"splats",document.createElement("div"));R(this,"barUntil",0);R(this,"timerEl",null);R(this,"timerShown",-1);R(this,"timerLarge",!1);R(this,"slots",[null,null,null,null]);R(this,"sayEl",null);R(this,"sayUntil",0);this.world=t,this.actor=e,this.p=n,this.mine=s,this.head.className="overhead",this.body.className="overhead",this.prayer.className="oh-prayer";const r=document.createElement("img");r.src=Oi("overheads/skull.png"),r.className="oh-skull",this.bar.className="oh-bar",this.bar.style.backgroundImage=`url(${Oi("healthbar/back-30.png")})`,this.barFront.className="oh-bar-front",this.barFront.style.backgroundImage=`url(${Oi("healthbar/front-30.png")})`,this.bar.append(this.barFront),this.splats.className="oh-splats",this.head.append(this.prayer,r,this.bar),this.body.append(this.splats),Bu.append(this.head,this.body)}splat(t,e,n){var h;let s=this.slots.findIndex(u=>!u||u.until<=e);s<0&&(s=this.slots.reduce((u,d,p)=>d.until<this.slots[u].until?p:u,0)),(h=this.slots[s])==null||h.el.remove();const r=document.createElement("div");r.className="splat";const o=n==="poison"?"poison":t<=0?"block":n==="max"?"max-hit":"damage";r.style.backgroundImage=`url(${Oi(`hitsplats/${o}.png`)})`;const[a,l]=hi.SLOT_POS[s];r.style.left=`${a-12}px`,r.style.top=`${l-12}px`,r.append(xe(String(t),"p11_full","#ffffff",!0)),this.splats.append(r);const c={el:r,until:e+hi.SPLAT_MS};this.slots[s]=c,xr(()=>{this.slots[s]===c&&(r.remove(),this.slots[s]=null)},hi.SPLAT_MS),this.barUntil=e+6e3}say(t,e){var s;(s=this.sayEl)==null||s.remove();const n=xe(t,"b12_full","#ffff00",!0);n.className="oh-say",n.style.left=`${-Math.round(n.width/2)}px`,this.head.append(n),this.sayEl=n,this.sayUntil=e+3e3}update(t,e){this.sayEl&&t>this.sayUntil&&(this.sayEl.remove(),this.sayEl=null);const n=(o,a)=>{const l=this.world.screenAbove(this.actor,a);o.hidden=!l.visible,o.style.transform=`translate(${l.x}px, ${l.y}px) scale(${e})`};n(this.head,1.55),n(this.body,1.05);const s=this.p.prayers.has("smite");this.prayer.hidden=!s,s&&(this.prayer.src=Oi("overheads/smite.png")),this.bar.style.visibility=t<this.barUntil?"visible":"hidden";const r=Math.max(0,Math.min(1,this.p.level.hitpoints/this.p.base.hitpoints));this.barFront.style.width=Math.ceil(30*r)+"px",this.updateAttackTimer()}updateAttackTimer(){var r;const t=this.mine&&F_()?Math.max(0,this.p.timers.attack):0,e=Lu();if(t===this.timerShown&&e===this.timerLarge||(this.timerShown=t,this.timerLarge=e,(r=this.timerEl)==null||r.remove(),this.timerEl=null,t<=0))return;const n=xe(String(t),"b12_full","#ffffff",!0),s=e?2:1;n.className="oh-timer",n.style.width=`${n.width*s}px`,n.style.height=`${n.height*s}px`,n.style.left=`${-19-n.width*s}px`,n.style.top=`${Math.round(-1.5-n.height*s/2)}px`,this.head.append(n),this.timerEl=n}};R(hi,"SLOT_POS",[[0,0],[0,-22],[-16,-11],[16,-11]]),R(hi,"SPLAT_MS",1e3);let Nr=hi;async function xx(){p_()&&await m_();const[i]=await Promise.all([r_(),M_(),Ku()]);ju();const t=xi(Xo,"you");Jc(t,Ka()?Ba():null),oh(t);const e=xi("Opponent","opp");Wl(e);const n=new Dr(ar,i),s=I=>(nd(gx(I)),n.loadMap(I).then(()=>{const J=n.mapPlace;return J&&v.setMinimap(`/assets/osrs/maps/${I}-minimap.png`,J.centre,J.bounds),n.setProps(Nu[I].props)}).catch(J=>console.warn("map",J)));s(Ya());const r={you:n.player,opp:n.opponent},o={you:new Nr(n,n.player,t,!0),opp:new Nr(n,n.opponent,e)};let a,l=!1,c="menu",h=!1,u="ko",d="opp";const p=[],g=I=>{if(I.type==="attack"&&c!=="fight"){v.message("The fight starts after the countdown.");return}p.push({a:I,at:performance.now()})},v=new k_(lr,t,g);wl(lr);const f=new Q_;f.withVisuals=!0;let m=null;const T=new fx,y=new Od(Math.random,I=>{f.thought(I),N_()&&v.message(`<col=7f1fff>${I}</col>`)});y.setLevel(Du()),y.onTraining=I=>A(()=>v.message(`<col=ff981f>${I}</col>`)),v.message("Welcome to Old School RuneScape."),v.message("Pick an opponent, press Ready, and fight. Each fight it plays a different style.");let E=!1;const D=()=>{Object.assign(t,xi(Xo,"you")),Jc(t,Ka()?Ba():null),oh(t),Object.assign(e,xi("Opponent","opp")),Wl(e),y.training.length&&Ud(e,y.training),c!=="reset"&&(E=!y.training.length&&Math.random()<Y_()),E&&Nd(e),c==="reset"?y.newRound():y.reset();for(const I of Object.values(r))I.reset(),I.root.visible=!0},C=[],A=I=>{C.push(I)},N=I=>{const J=r[I.id];switch(I.k){case"attack":{const S=I.special?{gmaul:1667,voidwaker:11275,ags:7644}[I.weapon]:void 0;J.play(S??Es.attackAnim(I.weapon,I.style)),_x(I.weapon,I.special,I.style,ps(I.id));break}case"graphic":I.spot===2834?xr(()=>void J.graphic(I.spot),Hu):J.graphic(I.spot);break;case"say":o[I.id].say(I.text,Bi());break;case"hit":o[I.id].splat(I.damage,Bi(),I.kind==="poison"?"poison":I.max?"max":void 0);{const S=I.damage<=0?"block":I.kind==="orb"?"hit3":wh[Math.floor(Math.random()*wh.length)];xr(()=>on(S,ps(I.id)),vx)}(I.kind==="melee"||I.kind==="magic")&&J.play(J.blockAnim(),{minor:!0});break;case"anim":I.kind==="eat"||I.kind==="drink"?(J.play(829),I.id==="you"&&on(I.kind)):I.kind==="cast"?(J.play(8316),J.graphic(726),on("venge_cast",ps(I.id))):I.kind==="tab"&&(J.play(4069),J.graphic(678),on("tab_teleport",ps(I.id)),xr(()=>{J.root.visible&&J.play(4071,{hold:!0})},880));break;case"death":J.play(836,{hold:!0}),on("death",ps(I.id));break;case"vanish":J.root.visible=!1;break;case"sound":I.id==="you"&&on(I.key);break}},Z=I=>{f.visual(I),A(()=>N(I))};a=new Wd({you:t,opp:e},{attack:(I,J,S,_)=>{const O=I==="you"?t:e;f.attack(I,J,S,_),Z({k:"attack",id:I,weapon:J,special:S,style:Dn(O).type,hits:_})},graphic:(I,J)=>Z({k:"graphic",id:I,spot:J}),say:(I,J)=>Z({k:"say",id:I,text:J}),hit:(I,J)=>{const S=e.level.hitpoints;f.hit(I,J),Z({k:"hit",id:I,damage:J.damage,kind:J.kind,max:J.max}),(I==="opp"||J.from==="opp")&&A(()=>v.showOpponent(e.name,S,e.base.hitpoints))},anim:(I,J)=>{f.anim(I,J),Z({k:"anim",id:I,kind:J})},sound:(I,J)=>{I==="you"&&Z({k:"sound",id:"you",key:J})},message:I=>A(()=>v.message(I)),death:I=>{if(f.death(I),c==="fight"){y.reportTraining();const J=Td(I==="you"?t:e);u=J?"ko":"food",J&&!y.training.length&&K_(y.profile.level,I==="opp"),h=I==="opp",c="over"}Z({k:"death",id:I})},teleported:I=>{Z({k:"vanish",id:I}),c==="fight"&&(y.reportTraining(),d=I==="you"?"you":"opp",c="reset")},respawn:()=>{D(),l=!0,c==="over"&&A(()=>k()),c==="reset"&&A(()=>Y())},pidChanged:I=>A(()=>v.setPid(I==="you")),xp:(I,J)=>{if(I!=="you")return;const S=Dn(t).stance,_=S==="accurate"?["attack"]:S==="aggressive"?["strength"]:S==="defensive"?["defence"]:["attack","strength","defence"];A(()=>v.xpDrop([..._,"hitpoints"],Math.floor(J*16/3),J))}},()=>{});const x=()=>({label:"Attack",target:`${e.name}<col=ffff00>  (level-${e.combatLevel})`,targetColor:"ffffff",run:()=>g({type:"attack",target:"opp"})}),b=(I,J)=>{const S=n.pickTile(I,J);g(S?{type:"walk",to:S}:{type:"walk"})};let z=0,q=0;const j=I=>{const J={label:"Walk here",run:()=>b(z,q)},S={label:"Cancel",run:()=>{}};return I!=="opponent"?[J,S]:[x(),J,{label:"Examine",target:e.name,targetColor:"ffffff",run:()=>v.message("A worthy opponent.")},S]};ar.addEventListener("pointerdown",I=>{I.button===0?n.pick(I.clientX,I.clientY)==="opponent"?(bh(I.clientX,I.clientY,"red"),x().run()):(bh(I.clientX,I.clientY,"yellow"),b(I.clientX,I.clientY)):I.button===2&&(I.stopPropagation(),z=I.clientX,q=I.clientY,v.openMenu(I.clientX,I.clientY,j(n.pick(I.clientX,I.clientY))))}),ar.addEventListener("pointermove",I=>v.setHover(j(n.pick(I.clientX,I.clientY)))),v.setupPractice({restoreSpec:()=>{t.spec=100,t.specRegen=0,v.message("Your special attack energy has been restored.")},resetFight:()=>{tt(),v.message("The fight has been reset.")},menu:()=>w()}),v.setPid(a.order[0]==="you");const $=new Z_(document.body);function H(){f.recording&&f.finish("unfinished","",!1),D(),a.placeAtStart(),a.setFixedPid(y.training.length?"opp":null),st(!0),v.refresh(!0)}function tt(){H(),c="ready";const I=un[y.profile.level].name;$.ready(I,()=>{c="countdown",$.countdown(()=>{c="fight",y.neverTab=qa(),f.start(t,e),a.queue("opp",{type:"attack",target:"you"}),v.message(`Fight! (${I} bot)`)})})}function Y(){c="ready",$.tabbed(d==="you"?"You tabbed out":"The bot tabbed out",un[y.profile.level].name,()=>{c="countdown",$.countdown(()=>{c="fight",y.neverTab=qa(),f.start(t,e),a.queue("opp",{type:"attack",target:"you"})})},()=>w(),m?()=>pt(Y):void 0,d==="opp")}function yt(){return c==="reset"||u==="tab"?d==="you"?"you-tabbed":"bot-tabbed":u==="food"?h?"won-food":"lost-food":h?"won":"lost"}function pt(I){m&&($.clear(),T.open(m,I,$t))}let St=!1;const Wt={you:xi(Xo,"you"),opp:xi("Opponent","opp")};function $t(I,J,S,_,O){var Dt;const V=I.ticks;if(!((Dt=V[J])!=null&&Dt.look)){O();return}St=!0,lr.style.display="none",o.you.p=Wt.you,o.opp.p=Wt.opp;let nt=J,Q=!0,Et=0;const ht=(wt,ft)=>{const qt=V[wt],Nt=Bi();for(const Xt of["you","opp"]){const L=qt.look[Xt],gt=r[Xt],K=Wt[Xt];K.level.hitpoints=L.hp,K.base.hitpoints=L.maxHp,K.prayers=new Set(L.smite?["smite"]:[]),K.timers.attack=0,gt.setWorn(L.worn,L.weapon,L.shield);const it=ds(L.pos);gt.goTo(it.x,it.z,ft?0:L.moved,Nt,!ft&&L.via?ds(L.via):void 0)}for(const Xt of["you","opp"]){const L=r[Xt==="you"?"opp":"you"];r[Xt].face(qt.look[Xt].facing||ft?L.root.position:null,ft)}},vt=wt=>{for(const ft of Object.values(r))ft.reset(),ft.root.visible=!0;ht(Math.max(0,wt-1),!0)},Gt=wt=>{ht(wt,!1);for(const ft of V[wt].fx??[])N(ft);mt.show(wt,Uu(V[wt]))},at=()=>{clearTimeout(Et),Q&&(Et=window.setTimeout(()=>{if(nt>=S){Q=!1,mt.setPlaying(!1);return}nt++,Gt(nt),at()},$o/Wr))},mt=new px(document.body,_,J,S,V.length,{toggle:()=>{nt>=S&&!Q&&(nt=J,vt(J),Gt(J)),Q=!Q,mt.setPlaying(Q),at()},step:wt=>{Q=!1,mt.setPlaying(!1),clearTimeout(Et),nt=Math.max(0,Math.min(V.length-1,nt+wt)),wt<0&&vt(nt),Gt(nt)},restart:()=>{nt=J,vt(J),Gt(J),Q=!0,mt.setPlaying(!0),at()},speed:wt=>{Sh(wt),n.timeScale=wt,at()},close:()=>{clearTimeout(Et),mt.remove(),Sh(1),n.timeScale=1,St=!1,o.you.p=t,o.opp.p=e,lr.style.display="";for(const wt of Object.values(r))wt.reset(),wt.root.visible=!0;et(),st(!0),v.refresh(!0),O()}});vt(J),Gt(J),mt.setPlaying(!0),at()}function w(){$.clear(),c="menu",H(),W.show()}function k(){const I=y.profile.level;$.result(u==="tab"?d==="you"?"you-tabbed":"bot-tabbed":u==="food"?h?"won-food":"lost-food":h?"won":"lost",un[I].name,El()[I],()=>tt(),()=>{$.clear(),W.show()},m?()=>pt(k):void 0)}const W=new j_(document.body,I=>{y.setLevel(I),y.training=gs(),tt()});W.onArena=I=>{s(I).then(()=>st(!0))},W.show(),ar.addEventListener("pointerleave",()=>v.setHover(null));const et=()=>{var I,J,S,_;n.player.setWorn(Yo(t),((I=t.equip.weapon)==null?void 0:I.id)??null,((J=t.equip.shield)==null?void 0:J.id)??null),n.opponent.setWorn(Yo(e),((S=e.equip.weapon)==null?void 0:S.id)??null,((_=e.equip.shield)==null?void 0:_.id)??null)};et();const ot=I=>{const J=Yo(I).filter(_=>{var O,V;return _!==((O=I.equip.weapon)==null?void 0:O.id)&&_!==((V=I.equip.shield)==null?void 0:V.id)}),S=[];for(const _ of[null,"tentacle","voidwaker","gmaul","dh_axe","ags"])for(const O of[null,"avernic"])S.push([...J,..._?[_]:[],...O?[O]:[]]);return S};await Promise.all([n.player.preload(ot(t)),n.opponent.preload(ot(e))]),await Promise.all([...Object.keys(i.sequences).map(I=>ci(Number(I),!1).catch(()=>{})),...Object.values(i.spotanims??{}).map(I=>Gr(I.model).catch(()=>{}))]);const st=(I=!1)=>{const J=Bi();for(const[_,O]of[[t,n.player],[e,n.opponent]]){const V=ds(_.pos),nt=_.steps.length===2?ds(_.steps[0]):void 0;O.goTo(V.x,V.z,_.moved,J,nt)}n.player.face(t.targetId||I?n.opponent.root.position:null,I),n.opponent.face(e.targetId||I?n.player.root.position:null,I);const S=ds(t.pos);n.tileMarker.position.set(S.x,n.groundHeight(S.x,S.z)+.01,S.z)};st(!0);const ct=document.createElement("div");ct.className="metronome",ct.hidden=!0,document.body.append(ct);let Mt=0;const dt=()=>{Mt++;const I=Mt%2===0;O_()&&Zu(I),ct.hidden=!B_(),ct.classList.toggle("tock",!I)};function P(){const I=performance.now();for(;p.length&&p[0].at<=I-Mh();)a.queue("you",p.shift().a);c==="fight"&&y.think(a,e,t),a.step(),f.endTick(a.tick,a.order[0],t,e),f.recording&&c!=="fight"&&(m=f.finish(yt(),un[y.profile.level].name,y.training.length>0));const J=l;l=!1;const S=C.splice(0);St||setTimeout(()=>{et();for(const _ of S)_();st(J),v.refresh(J),dt()},Mh())}let le=performance.now()+$o;const Ft=()=>{const I=performance.now();I-le>2e3&&(le=I),setTimeout(()=>{P(),le+=$o,Ft()},Math.max(0,le-I))};Ft();let Ot=performance.now();const Pt=I=>{const J=Math.min(.1,(I-Ot)/1e3);Ot=I;const S=Bi();n.render(S,J),n.tileMarker.visible=za(),o.you.update(S,Za),o.opp.update(S,Za);const _=n.opponent.root.position.clone().sub(n.player.root.position);v.setMinimapDot(_.x,_.z,n.cameraYaw),v.setMinimapView(n.player.root.position.x,n.player.root.position.z,n.cameraYaw),v.updateOpponent(I),requestAnimationFrame(Pt)};requestAnimationFrame(Pt)}xx().catch(i=>{if(/webgl|context/i.test(String(i))){wu("Your browser couldn’t start 3D graphics (WebGL).");return}document.body.insertAdjacentHTML("beforeend",`<pre style="position:fixed;left:8px;top:8px;color:#ff0">Failed to start: ${String(i)}</pre>`)});
