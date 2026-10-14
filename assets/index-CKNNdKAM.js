var td=Object.defineProperty;var ed=(i,t,e)=>t in i?td(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var A=(i,t,e)=>ed(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const rl="dhsim.",Ih="/api/settings";let Wl=0;const Uh=typeof location<"u"&&["localhost","127.0.0.1","[::1]"].includes(location.hostname),nd=typeof location<"u"&&new URLSearchParams(location.search).has("mute");function Qt(i){try{return localStorage.getItem(i)}catch{return null}}const Er=new Map;function he(i,t){try{localStorage.setItem(i,t)}catch{}i.startsWith(rl)&&Er.set(i,t),Nh()}function id(){const i={};try{for(let t=0;t<localStorage.length;t++){const e=localStorage.key(t);e.startsWith(rl)&&(i[e]=localStorage.getItem(e))}}catch{}return i}function Nh(){nd||!Uh||(clearTimeout(Wl),Wl=window.setTimeout(()=>{const i=Object.fromEntries(Er);Er.clear(),fetch(Ih,{method:"POST",headers:{"Content-Type":"application/json","X-Merge":"1"},body:JSON.stringify(i)}).catch(()=>{})},300))}async function sd(){if(Uh)try{const i=await fetch(Ih),t=i.ok?await i.json():{},e=Object.keys(t).filter(n=>n.startsWith(rl));if(e.length===0){for(const[n,s]of Object.entries(id()))Er.set(n,s);Nh();return}for(const n of e)localStorage.setItem(n,t[n])}catch{}}const $l="/dh-simulator/assets/osrs/sounds/";let qe=null,Un=null;const Fh=new Map;let ql={};const Oh=typeof location<"u"&&new URLSearchParams(location.search).has("mute");function sn(){if(Oh)return 0;const i=Number(Qt("dhsim.volume")??50);return Number.isFinite(i)?Math.min(100,Math.max(0,i)):50}function Bh(i){Oh||(he("dhsim.volume",String(Math.min(100,Math.max(0,Math.round(i/10)*10)))),Un&&(Un.gain.value=sn()/100))}async function rd(){try{ql=await(await fetch($l+"manifest.json")).json()}catch{return}qe=new AudioContext,Un=qe.createGain(),Un.gain.value=sn()/100,Un.connect(qe.destination);const i=()=>{qe==null||qe.resume()};window.addEventListener("pointerdown",i),window.addEventListener("keydown",i),await Promise.all(Object.entries(ql).map(async([t,e])=>{try{const n=await(await fetch($l+e)).arrayBuffer();Fh.set(t,await qe.decodeAudioData(n))}catch{}}))}function od(i,t=1){const e=Fh.get(i);if(!qe||!Un||!e||sn()===0)return;const n=qe.createBufferSource();n.buffer=e;const s=qe.createGain();s.gain.value=t,n.connect(s).connect(Un),n.start()}function ad(i){if(!qe||!Un||sn()===0)return;const t=qe.currentTime,e=qe.createOscillator();e.type="square",e.frequency.value=i?1400:950;const n=qe.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.12,t+.004),n.gain.exponentialRampToValueAtTime(1e-4,t+.05),e.connect(n).connect(Un),e.start(t),e.stop(t+.06)}const Re=(i,t,e,n=0)=>({att:i,def:t,str:e,prayer:n}),ld=Re([0,0,0,0,0],[0,0,0,0,0],0),Yt={dh_helm:{id:"dh_helm",name:"Dharok's helm",kind:"equip",action:"Wear",slot:"head",bonuses:Re([0,0,0,-3,-1],[45,48,44,-1,51],0),examine:"Dharok the Wretched's helm."},dh_body:{id:"dh_body",name:"Dharok's platebody",kind:"equip",action:"Wear",slot:"body",bonuses:Re([0,0,0,-30,-10],[122,120,107,-6,132],0),examine:"Dharok the Wretched's platebody armour."},dh_legs:{id:"dh_legs",name:"Dharok's platelegs",kind:"equip",action:"Wear",slot:"legs",bonuses:Re([0,0,0,-21,-11],[85,82,83,-4,92],0),examine:"Dharok the Wretched's plate leg armour."},dh_axe:{id:"dh_axe",name:"Dharok's greataxe",kind:"equip",action:"Wield",slot:"weapon",twoHanded:!0,speed:7,bonuses:Re([-4,103,95,-4,0],[0,0,0,0,-1],105),examine:"Dharok the Wretched's greataxe."},rancour:{id:"rancour",name:"Amulet of rancour",kind:"equip",action:"Wear",slot:"neck",bonuses:Re([25,25,25,-6,-8],[0,0,0,0,0],12,2),examine:"A very powerful zenyte amulet, infused with araxyte venom."},tentacle:{id:"tentacle",name:"Abyssal tentacle",kind:"equip",action:"Wield",slot:"weapon",speed:4,spec:!0,bonuses:Re([0,90,0,0,0],[0,0,0,0,0],86),examine:"A weapon from the Abyss, embedded in a slimy tentacle."},avernic:{id:"avernic",name:"Avernic defender",kind:"equip",action:"Wield",slot:"shield",bonuses:Re([30,29,28,-5,-4],[30,29,28,-5,-4],8),examine:"A defensive weapon."},infernal:{id:"infernal",name:"Infernal cape",kind:"equip",action:"Wear",slot:"cape",bonuses:Re([4,4,4,1,1],[12,12,12,12,12],8,2),examine:"Whose idea was it to have a cape made of lava anyway?"},treads:{id:"treads",name:"Avernic treads (max)",kind:"equip",action:"Wear",slot:"feet",bonuses:Re([5,5,5,11,15],[21,25,25,10,10],6),examine:"A pair of boots with the power of Primordial, Pegasian and Eternal boots."},ferocious:{id:"ferocious",name:"Ferocious gloves",kind:"equip",action:"Wear",slot:"hands",bonuses:Re([16,16,16,-16,-16],[0,0,0,0,0],14),examine:"A pair of very very nice gloves."},recoil:{id:"recoil",name:"Ring of recoil",kind:"equip",action:"Wear",slot:"ring",bonuses:ld,examine:"An enchanted ring."},ultor:{id:"ultor",name:"Ultor ring",kind:"equip",action:"Wear",slot:"ring",bonuses:Re([0,0,0,0,0],[0,0,0,0,0],12),examine:"An occult ring that grants immense physical power."},voidwaker:{id:"voidwaker",name:"Voidwaker",kind:"equip",action:"Wield",slot:"weapon",speed:4,spec:!0,bonuses:Re([70,80,-2,5,0],[0,1,0,2,0],80),examine:"A truly fearsome weapon."},ags:{id:"ags",name:"Armadyl godsword",kind:"equip",action:"Wield",slot:"weapon",twoHanded:!0,speed:6,spec:!0,bonuses:Re([0,132,80,0,0],[0,0,0,0,0],132,8),examine:"A beautiful, heavy sword."},gmaul:{id:"gmaul",name:"Granite maul",kind:"equip",action:"Wield",slot:"weapon",twoHanded:!0,speed:7,spec:!0,bonuses:Re([0,0,81,0,0],[0,0,0,0,0],79),examine:"Simplicity is the best weapon."},elder_maul:{id:"elder_maul",name:"Elder maul",kind:"equip",action:"Wield",slot:"weapon",twoHanded:!0,speed:6,spec:!0,bonuses:Re([0,0,135,0,0],[0,0,0,0,0],147),examine:"A maul crafted from the component parts of Tekton."},nox_halberd:{id:"nox_halberd",name:"Noxious halberd",kind:"equip",action:"Wield",slot:"weapon",twoHanded:!0,speed:5,spec:!0,range:2,bonuses:Re([80,132,0,0,0],[0,0,0,0,0],142),examine:"A halberd infused with araxyte venom."},angler:{id:"angler",name:"Anglerfish",kind:"food",action:"Eat",examine:"I hope this tastes better than it looks."},karambwan:{id:"karambwan",name:"Cooked karambwan",kind:"combo",action:"Eat",examine:"Cooked octopus. It looks very nutritious."},brew:{id:"brew",name:"Saradomin brew",kind:"potion",action:"Drink",examine:"A potion of Saradomin brew."},restore:{id:"restore",name:"Super restore",kind:"potion",action:"Drink",examine:"A potion of super restore."},combat:{id:"combat",name:"Super combat potion",kind:"potion",action:"Drink",examine:"A potion of super combat."},sanfew:{id:"sanfew",name:"Sanfew serum",kind:"potion",action:"Drink",examine:"A cure-all serum."},orb:{id:"orb",name:"Locator orb",kind:"orb",action:"Feel",examine:"A glass orb with a dragonstone in the centre."},tab:{id:"tab",name:"Teleport to house",kind:"other",action:"Break",stackable:!0,examine:"A teleport to one's own house."},venge_sack:{id:"venge_sack",name:"Blighted vengeance sack",kind:"other",action:"Check",stackable:!0,examine:"A sack of runes for casting Vengeance."}};function Mn(i){const t=Yt[i.id];return i.doses?`${t.name}(${i.doses})`:t.name}const oe=(i,t,e,n)=>({name:i,icon:t,type:e,stance:n}),ol={dh_axe:{category:"Axe",styles:[oe("Chop","axe-chop","slash","accurate"),oe("Hack","axe-hack","slash","aggressive"),oe("Smash","axe-smash","crush","aggressive"),oe("Block","axe-block","slash","defensive")]},tentacle:{category:"Whip",styles:[oe("Flick","whip-flick","slash","accurate"),oe("Lash","whip-lash","slash","controlled"),oe("Deflect","whip-deflect","slash","defensive")]},gmaul:{category:"Blunt",styles:[oe("Pound","maul-pound","crush","accurate"),oe("Pummel","maul-pummel","crush","aggressive"),oe("Block","maul-block","crush","defensive")]},voidwaker:{category:"Slash Sword",styles:[oe("Chop","sword-chop","slash","accurate"),oe("Slash","sword-slash","slash","aggressive"),oe("Lunge","sword-lunge","stab","controlled"),oe("Block","sword-block","slash","defensive")]},ags:{category:"2h Sword",styles:[oe("Chop","sword-chop","slash","accurate"),oe("Slash","sword-slash","slash","aggressive"),oe("Smash","maul-pound","crush","aggressive"),oe("Block","sword-block","slash","defensive")]},elder_maul:{category:"Blunt",styles:[oe("Pound","maul-pound","crush","accurate"),oe("Pummel","maul-pummel","crush","aggressive"),oe("Block","maul-block","crush","defensive")]},nox_halberd:{category:"Polearm",styles:[oe("Jab","sword-stab","stab","controlled"),oe("Swipe","sword-slash","slash","aggressive"),oe("Fend","sword-block","stab","defensive")]},none:{category:"Unarmed",styles:[oe("Punch","sword-stab","crush","accurate"),oe("Kick","sword-chop","crush","aggressive"),oe("Block","sword-block","crush","defensive")]}};function Pe(i){var e;const t=(e=i.equip.weapon)==null?void 0:e.id;return t&&ol[t]?t:"none"}const cd={dh_axe:2};function Nn(i){const t=ol[Pe(i)],e=Math.min(i.styleIndex[Pe(i)]??cd[Pe(i)]??1,t.styles.length-1);return t.styles[e]}const hd={stab:0,slash:1,crush:2};function Hh(i,t,e){var s;let n=0;for(const r of Object.values(i.equip))r&&(n+=((s=Yt[r.id].bonuses)==null?void 0:s[t][hd[e]])??0);return n}function ud(i){var e;let t=0;for(const n of Object.values(i.equip))n&&(t+=((e=Yt[n.id].bonuses)==null?void 0:e.str)??0);return t}const al={att:1.2,str:1.23,def:1.25},ll=(i,t)=>i==="controlled"?1:i==="accurate"&&t==="att"||i==="aggressive"&&t==="str"||i==="defensive"&&t==="def"?3:0;function cl(i){var e,n,s,r;const t=i.equip;return((e=t.head)==null?void 0:e.id)==="dh_helm"&&((n=t.body)==null?void 0:n.id)==="dh_body"&&((s=t.legs)==null?void 0:s.id)==="dh_legs"&&((r=t.weapon)==null?void 0:r.id)==="dh_axe"}function hl(i){const t=i.base.hitpoints;return 1+Math.max(0,t-Math.max(0,i.level.hitpoints))/100*(t/100)}function ks(i){const t=i.prayers.has("piety")?al.str:1,e=Math.floor(i.level.strength*t)+ll(Nn(i).stance,"str")+8;return Math.floor((e*(ud(i)+64)+320)/640)}function Gr(i){const t=ks(i);return cl(i)?Math.floor(t*hl(i)):t}function ul(i,t=1){const e=Nn(i),n=i.prayers.has("piety")?al.att:1,s=Math.floor(i.level.attack*n)+ll(e.stance,"att")+8;return Math.floor(s*(Hh(i,"att",e.type)+64)*t)}function dl(i,t){const e=i.prayers.has("piety")?al.def:1;return(Math.floor(i.level.defence*e)+ll(Nn(i).stance,"def")+8)*(Hh(i,"def",t)+64)}function fl(i,t){return i>t?1-(t+2)/(2*(i+1)):i/(2*(t+1))}function Ar(i){var e;const t=(e=i.equip.weapon)==null?void 0:e.id;return t&&Yt[t].speed||4}const Tr={accuracy:2,defence:"slash",maxHit:i=>Math.floor(Math.floor(i*1.1)*1.25)},Xl={accuracy:1.25,defenceDrain:.35};function eo(i,t,e=Math.random,n=1,s){const r=Nn(i),o=fl(ul(i,n),dl(t,(s==null?void 0:s.defence)??r.type)),a=s!=null&&s.maxHit?s.maxHit(ks(i)):ks(i),l=e()<o;let c=0,h=0;return l&&(h=Math.floor(e()*(a+1)),c=Math.max(1,h),cl(i)&&(c=Math.floor(c*hl(i)))),{hit:l,damage:c,max:Gr(i),chance:o,maxed:l&&h===a&&a>0}}const rn=15;function dd(i){return i.x>=0&&i.y>=0&&i.x<rn&&i.y<rn}let zh=new Set;const Vh=i=>i.x*rn+i.y;function fd(i){zh=new Set(i.map(Vh))}function Ss(i){return dd(i)&&!zh.has(Vh(i))}function pd(i){const t=r=>Math.min(rn-1,Math.max(0,Math.round(r))),e={x:t(i.x),y:t(i.y)};if(Ss(e))return e;let n=e,s=1/0;for(let r=0;r<rn;r++)for(let o=0;o<rn;o++){const a=(r-e.x)**2+(o-e.y)**2;a<s&&Ss({x:r,y:o})&&(n={x:r,y:o},s=a)}return n}const Yl=(i,t)=>i.x===t.x&&i.y===t.y;function de(i,t){return Math.abs(i.x-t.x)+Math.abs(i.y-t.y)===1}function no(i,t,e){if(e<=1)return de(i,t);const n=Math.max(Math.abs(i.x-t.x),Math.abs(i.y-t.y));return n>=1&&n<=e}const md=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:1},{x:1,y:1}];function gr(i,t){if(t(i))return[];const e=r=>r.x*rn+r.y,n=new Map([[e(i),null]]),s=[i];for(;s.length;){const r=s.shift();for(const o of md){const a={x:r.x+o.x,y:r.y+o.y};if(!(!Ss(a)||n.has(e(a)))&&!(o.x&&o.y&&(!Ss({x:r.x+o.x,y:r.y})||!Ss({x:r.x,y:r.y+o.y})))){if(n.set(e(a),r),t(a)){const l=[a];for(let c=r;n.get(e(c));c=n.get(e(c)))l.unshift(c);return l}s.push(a)}}}return null}function gd(i,t){const e=gr(i,n=>de(n,t));return e!=null&&e.length?e[e.length-1]:i}const vd=["attack","strength","defence","hitpoints","ranged","prayer","magic"],pe=(i,t={})=>({id:i,...t});function Gh(){const i=()=>pe("angler"),t=()=>pe("karambwan"),e=()=>pe("restore",{doses:4}),n=()=>pe("brew",{doses:4});return[e(),i(),i(),i(),e(),i(),t(),i(),e(),n(),t(),i(),i(),t(),n(),i(),pe("combat",{doses:4}),pe("orb"),i(),i(),pe("gmaul"),pe("dh_axe"),i(),i(),pe("ultor"),pe("voidwaker"),pe("tab",{qty:10}),pe("venge_sack",{qty:40})]}function Wh(){return{head:pe("dh_helm"),cape:pe("infernal"),neck:pe("rancour"),weapon:pe("tentacle"),body:pe("dh_body"),shield:pe("avernic"),legs:pe("dh_legs"),hands:pe("ferocious"),feet:pe("treads"),ring:pe("recoil")}}function ui(i,t="you"){const e=Object.fromEntries(vd.map(n=>[n,99]));return{id:t,name:i,combatLevel:126,base:e,level:{...e},inv:Gh(),equip:Wh(),timers:{attack:0,food:0,combo:0,potion:0,venge:0},drankThisTick:!1,spec:100,specRegen:0,specArmed:!1,prayers:new Set,prayerDrain:0,vengeActive:!1,recoilCharges:40,statRegen:0,styleIndex:{},autoRetaliate:!1,orbUsed:!1,poison:0,venom:0,virulence:0,poisonTimer:0,poisonImmune:0,teleporting:0,specTeleportLock:0,pos:{x:7,y:7},dest:null,running:!0,moved:0,steps:[],frozenUntil:-1,freezeImmuneUntil:-1,autoFollow:!0,lastRoll:0,targetId:null,lastTarget:null,lastAttackTick:-100,incoming:[],dead:!1,maulReady:0,maulWindowUntil:-1}}function $h(i){var e;let t=0;for(const n of Object.values(i.equip))n&&(t+=((e=Yt[n.id].bonuses)==null?void 0:e.prayer)??0);return t}function _d(i){var e;let t=0;for(const n of Object.values(i.equip))n&&(t+=((e=Yt[n.id].bonuses)==null?void 0:e.str)??0);return t}const xd=["easy","medium","hard","elite","god"],Rr=[{id:"Voidwaker into insta maul",label:"Voidwaker → insta maul",desc:"It specs you with the Voidwaker, with an insta maul right behind it.",tip:"Practise: eating the moment the Voidwaker hits, so the maul doesn’t catch you low."},{id:"insta maul into Voidwaker",label:"Insta maul → Voidwaker",desc:"A maul spec out of nowhere, then the Voidwaker the next tick.",tip:"Practise: reacting to the maul hitsplat before the Voidwaker lands."},{id:"tentacle into double maul",label:"Whip → double maul",desc:"A normal whip hit, then two maul specs on top.",tip:"Practise: not sitting low after a whip hit, and eating through the mauls."},{id:"AGS into insta maul",label:"AGS → insta maul",desc:"An Armadyl godsword spec, with an insta maul right behind it.",tip:"Practise: eating the moment the AGS lands, before the maul follows."}],hs=i=>({fakeAxe:i,axeStandoff:i,floorClick:i,potTrick:i,potTrickCombo:i,reactiveVenge:i,vengeAxeStack:i,lowHpAxe:i,campLow:i,orbDown:i,orbAfterCombo:i,maulAfterAxe:i,punishEat:i,pidSwapPunish:i,specSaving:i,hover:i,fakeVoidwaker:i,armourOff:i,campFloor:i,vengeStackBait:i,hailMary:i}),us=i=>({"tentacle into double maul":i,"Voidwaker into insta maul":i,"insta maul into Voidwaker":i,"single maul":i,Voidwaker:i,"Voidwaker timed with Vengeance":i,"AGS into insta maul":i,"insta maul into AGS":i,AGS:i}),mn={easy:{level:"easy",name:"Easy",blurb:"New to DH: slow reactions, sloppy eats, rarely chances you.",skill:-.35,caution:-.15,aggression:-.25,risk:-.1,vengeSense:-.3,koBar:-.04,koFocus:.6,play:{react:[0,.2,.4],cleanEat:.35,idle:.16,spot:.25,pid:0,read:0,upkeep:.2,eatLine:1,aware:0,koSlow:4,newbie:1},moves:{...hs(0),fakeAxe:.25,axeStandoff:.3,vengeAxeStack:0,lowHpAxe:.25,campLow:0,reactiveVenge:.3,maulAfterAxe:.2,hover:.5,fakeVoidwaker:.3},combos:{...us(1),"tentacle into double maul":.08,"Voidwaker into insta maul":0,"insta maul into Voidwaker":0,"Voidwaker timed with Vengeance":0,"AGS into insta maul":0,"insta maul into AGS":0}},medium:{level:"medium",name:"Medium",blurb:"Decent DHer: some mind games, misses windows, beatable by most.",skill:-.24,caution:-.08,aggression:-.1,risk:0,vengeSense:-.2,koBar:.08,koFocus:.45,play:{react:[.02,.4,.42],cleanEat:.45,idle:.1,spot:.3,pid:.2,read:0,upkeep:.4,eatLine:-3,aware:.3,koSlow:2,whim:.06,sloppy:.6},moves:{...hs(.45),campLow:.12,lowHpAxe:.3,potTrick:.25,potTrickCombo:.15,punishEat:.2,pidSwapPunish:.2,specSaving:.4,fakeAxe:.5,floorClick:.3,armourOff:0,campFloor:.3,vengeStackBait:0,hailMary:0},combos:{...us(1),"tentacle into double maul":0,"Voidwaker into insta maul":.35,"insta maul into Voidwaker":0,"AGS into insta maul":.35,"insta maul into AGS":0}},hard:{level:"hard",name:"Hard",blurb:"Solid DHer: reads you, mind games, real KO attempts.",skill:0,caution:0,aggression:0,risk:0,vengeSense:0,koBar:0,koFocus:1,play:{react:[.42,.45,.11],cleanEat:.8,idle:.04,spot:.75,pid:.6,read:.45,upkeep:1,eatLine:-2,aware:.75,koSlow:0},moves:{...hs(1),armourOff:.3,vengeStackBait:.15,hailMary:.5},combos:us(1)},elite:{level:"elite",name:"Elite",blurb:"Risk fighter: eats on the read, plays its PID, Venge stacks. Still human.",skill:.12,caution:.05,aggression:.15,risk:.05,vengeSense:.15,koBar:-.06,koFocus:1.25,play:{react:[.68,.28,.04],cleanEat:.95,idle:.015,spot:.92,pid:1,read:.7,upkeep:1.6,eatLine:2,aware:1,koSlow:0},moves:{...hs(1.25),hover:1.3,punishEat:1.4,pidSwapPunish:1.4,campFloor:1.4,armourOff:1,vengeStackBait:1},combos:us(1)},god:{level:"god",name:"God",blurb:"Top of the top: near-perfect eats, every real KO chance, 1-tick Venge stacks. Learns from you.",skill:.35,caution:.1,aggression:.15,risk:-.05,vengeSense:.35,koBar:-.08,koFocus:2,play:{react:[.97,.03,0],cleanEat:1,idle:0,spot:1,pid:1,read:1,upkeep:2,eatLine:3,aware:1,koSlow:0,god:1},moves:{...hs(1.4),hover:1.5,punishEat:1.6,pidSwapPunish:1.6,campFloor:1.2,armourOff:1.4,vengeStackBait:2.5,campLow:.7,lowHpAxe:.9,hailMary:1},combos:us(1)}},yd=10,Kl=30,Md=50,Pn=99,jl={angler:22,brew:16,karambwan:18,pot:0},bd={1:[{items:["angler"],w:.42},{items:["karambwan"],w:.25},{items:["brew"],w:.18},{items:["pot"],w:0}],2:[{items:["angler","karambwan"],w:.42},{items:["angler","brew"],w:.25},{items:["brew","karambwan"],w:.18},{items:["angler","pot"],w:.08},{items:["pot","karambwan"],w:.07}],3:[{items:["angler","brew","karambwan"],w:.85},{items:["angler","pot","karambwan"],w:.15}]};function wd(i,t){for(const e of t)e==="brew"?i=Math.min(Pn+16,i+jl.brew):e!=="pot"&&(i=Math.max(i,Math.min(Pn,i+jl[e])));return i}class Sd{constructor(t,e){A(this,"belief",new Map([[Pn,1]]));A(this,"spec",100);A(this,"lastConsume",-100);A(this,"consumed",0);A(this,"vengeUp",!1);A(this,"fooledAt",-100);A(this,"trickiness",0);A(this,"barUntil",-1);A(this,"specTimer",0);A(this,"updatedAt",-1);this.rng=t,this.skill=e}reset(){this.belief=new Map([[Pn,1]]),this.spec=100,this.lastConsume=-100,this.consumed=0,this.vengeUp=!1,this.fooledAt=-100,this.trickiness=0,this.barUntil=-1,this.specTimer=0,this.updatedAt=-1}assume(t){this.belief=new Map([[t,1]])}get hp(){let t=Pn,e=-1;for(const[n,s]of this.belief)s>e&&(t=n,e=s);return t}likelyMax(){let t=0;for(const[e,n]of[...this.belief].sort((s,r)=>r[0]-s[0]))if(t+=n,t>=.05)return e;return this.hp}killChance(t,e=0){let n=0;for(const[s,r]of this.belief){let o=0;for(let a=Math.max(0,s-e);a<t.length;a++)o+=t[a];n+=r*o}return n}update(t,e,n){const s=t.tick;if(s===this.updatedAt)return;this.updatedAt=s;let r=0;for(const o of t.seen)o.kind==="splat"&&o.on===n.id?(this.shift(-o.damage),this.barUntil=s+yd):o.kind==="consume"&&o.who===n.id?r++:o.kind==="attack"&&o.who===n.id&&o.special?this.spec=Math.max(0,this.spec-Md):o.kind==="cast"&&o.who===n.id?this.vengeUp=!0:o.kind==="splat"&&o.on===e.id&&o.hit==="venge"&&(this.vengeUp=!1);r&&(this.eatenSome(s-this.lastConsume<=2),this.lastConsume=s,this.consumed=1),++this.specTimer>=50&&(this.specTimer=0,this.spec=Math.min(100,this.spec+10)),s<=this.barUntil&&this.rng()<.35+.5*this.skill()&&this.readBar(n,s),this.trickiness*=.995}ateWithin(t,e){return t.tick-this.lastConsume<=e}shift(t){const e=new Map;for(const[n,s]of this.belief){const r=Math.max(1,Math.min(Pn+16,n+t));e.set(r,(e.get(r)??0)+s)}this.belief=e}eatenSome(t){const e=this.belief,n=[];for(const[r,o]of[[1,.45],[2,.38],[3,.17]])this.belief=e,this.eaten(r,t),n.push([o,this.belief]);const s=new Map;for(const[r,o]of n)for(const[a,l]of o)s.set(a,(s.get(a)??0)+r*l);this.belief=this.prune(s)}eaten(t,e){const n=new Map;for(const[s,r]of this.belief){const o=bd[t].map(l=>{let c=l.w;return l.items.includes("pot")&&(c+=s>75?.35:.06+.25*this.trickiness),e&&l.items.includes("angler")&&(c*=.2),{items:l.items,w:c}}),a=o.reduce((l,c)=>l+c.w,0);for(const l of o){const c=wd(s,l.items);n.set(c,(n.get(c)??0)+r*l.w/a)}}this.belief=this.prune(n)}readBar(t,e){const n=c=>Math.round(Math.min(c,Pn)/Pn*Kl),s=n(t.level.hitpoints)+Math.round((this.rng()-.5)*2*(1-this.skill())),r=.6+1.2*(1-this.skill()),o=new Map;let a=0,l=0;for(const[c,h]of this.belief){const u=Math.exp(-((n(c)-s)**2)/(2*r*r));u>.5&&(l+=h);const d=h*u;d>0&&(o.set(c,d),a+=d)}if(a<1e-9||l<.15){e-this.lastConsume<=4&&(this.fooledAt=e,this.trickiness=Math.min(1,this.trickiness+.5));const c=Math.round(s/Kl*Pn);this.belief=new Map([[c,.5],[c-1,.25],[c+1,.25]]);return}for(const[c,h]of o)o.set(c,h/a);this.belief=this.prune(o)}prune(t){const e=[...t].filter(([,s])=>s>=.004).sort((s,r)=>r[1]-s[1]).slice(0,40),n=e.reduce((s,[,r])=>s+r,0)||1;return new Map(e.map(([s,r])=>[s,r/n]))}}const qh={msg(){},anim(){},splat(){}},Xh={dh_axe:"equip_weapon",tentacle:"equip_whip",gmaul:"equip_blunt",voidwaker:"equip_sword",ags:"equip_sword",elder_maul:"equip_blunt",nox_halberd:"equip_staff"},Yh={ring:"equip_fun",neck:"equip_fun",cape:"equip_fun",hands:"equip_hands",feet:"equip_feet",head:"equip_helmet",body:"equip_armour",legs:"equip_metal_legs",shield:"equip_fun"},Ed={piety:24,smite:18},Ad=50,vr=3,Td=3,Rd=2,Cd=3,kd=-4;function Zl(i,t=qh){const e=i.timers;if(e.attack=Math.max(kd,e.attack-1),e.food=Math.max(0,e.food-1),e.combo=Math.max(0,e.combo-1),e.potion=Math.max(0,e.potion-1),e.venge=Math.max(0,e.venge-1),i.specTeleportLock=Math.max(0,i.specTeleportLock-1),i.poisonImmune=Math.max(0,i.poisonImmune-1),i.drankThisTick=!1,i.orbUsed=!1,++i.specRegen>=50&&(i.specRegen=0,i.spec<100&&(i.spec=Math.min(100,i.spec+10))),Pd(i,t),++i.statRegen>=100){i.statRegen=0;for(const n of["attack","strength","defence","ranged","magic","hitpoints"])i.level[n]>i.base[n]?i.level[n]--:i.level[n]<i.base[n]&&i.level[n]++}}function Pd(i,t){var n;if(i.prayers.size===0){i.prayerDrain=0;return}for(const s of i.prayers)i.prayerDrain+=Ed[s];const e=60+2*$h(i);for(;i.prayerDrain>e&&i.level.prayer>0;)i.level.prayer--,i.prayerDrain-=e;i.level.prayer<=0&&(i.level.prayer=0,i.prayers.clear(),i.prayerDrain=0,t.msg("You have run out of prayer points, you can recharge at an altar."),(n=t.sound)==null||n.call(t,"prayer_drained"))}function Ld(i,t,e=qh){switch(t.type){case"item":return Dd(i,t.slot,e);case"unequip":return Vd(i,t.slot,e);case"prayer":return Gd(i,t.id,e);case"cast":return Wd(i,e);case"spec":return $d(i,e);case"attack":return i.dead?!1:(i.targetId=t.target,!0);case"walk":return t.keepTarget||(i.targetId=null),i.dest=t.to?pd(t.to):null,!0;case"toggleRun":return i.running=!i.running,!0}}function Dd(i,t,e){const n=i.inv[t];if(!n)return!1;switch(Yt[n.id].kind){case"equip":return zd(i,t,e);case"food":return Id(i,t,e);case"combo":return Ud(i,t,e);case"potion":return Nd(i,t,e);case"orb":return Hd(i,e);case"other":return n.id==="tab"?Bd(i,t,e):(e.msg("Your sack holds plenty of Vengeance casts."),!0)}}function sa(i){return Math.floor(i/10)+2*Math.floor(i/25)+5*Math.floor(i/93)+2}function os(i){i.targetId=null}function pl(i,t,e){i.level.hitpoints<e&&(i.level.hitpoints=Math.min(e,i.level.hitpoints+t))}function Kh(i,t){i.timers.attack+=t}function Id(i,t,e){return i.timers.food>0||i.drankThisTick?!1:(pl(i,sa(i.base.hitpoints),i.base.hitpoints),i.timers.food=vr,Kh(i,Td),i.inv[t]=null,os(i),e.msg("You eat the anglerfish."),e.msg("It heals some health."),e.anim("eat"),!0)}function Ud(i,t,e){return i.timers.combo>0?!1:(pl(i,18,i.base.hitpoints),i.timers.combo=vr,i.timers.food=Math.max(i.timers.food,vr),i.timers.potion=Math.max(i.timers.potion,vr),Kh(i,Rd),i.inv[t]=null,os(i),e.msg("You eat the Karambwan."),e.msg("It heals some health."),e.anim("eat"),!0)}function Nd(i,t,e){const n=i.inv[t];if(i.timers.potion>0)return!1;const s=i.level,r=i.base;if(n.id==="brew"){const a=Math.floor(r.hitpoints*.15)+2;pl(i,a,r.hitpoints+a);const l=Math.floor(r.defence*.2)+2;s.defence=Math.max(s.defence,Math.min(s.defence+l,r.defence+l));for(const c of["attack","strength","ranged","magic"])s[c]=Math.max(0,s[c]-(Math.floor(s[c]*.1)+2))}else if(n.id==="restore")for(const a of["attack","strength","defence","ranged","magic","prayer"])s[a]<r[a]&&(s[a]=Math.min(r[a],s[a]+Math.floor(r[a]*.25)+8));else if(n.id==="sanfew"){for(const a of["attack","strength","defence","ranged","magic","prayer"])s[a]<r[a]&&(s[a]=Math.min(r[a],s[a]+Math.floor(r[a]*.3)+4));i.venom>0?(i.poison=i.venom*5,i.venom=0,e.msg("The venom has been turned into poison.")):(i.poison>0&&e.msg("You have been cured of poison."),i.poison=0),i.poisonImmune=600}else if(n.id==="combat")for(const a of["attack","strength","defence"]){const l=Math.floor(r[a]*.15)+5;s[a]=Math.max(s[a],Math.min(s[a]+l,r[a]+l))}i.timers.potion=Cd,i.drankThisTick=!0,os(i),n.doses=(n.doses??1)-1;const o={brew:"Saradomin brew",restore:"super restore potion",combat:"super combat potion",sanfew:"Sanfew serum"};return e.msg(n.id==="brew"?"You drink some of the foul liquid.":`You drink some of your ${o[n.id]}.`),n.doses<=0?(i.inv[t]=null,e.msg("You have finished your potion.")):e.msg(`You have ${n.doses} dose${n.doses===1?"":"s"} of potion left.`),e.anim("drink"),!0}function Fd(i){const t=i.inv.filter(n=>n&&(n.id==="angler"||n.id==="karambwan")).length,e=i.inv.some(n=>(n==null?void 0:n.id)==="brew");return t>=2||t>=1&&e}const io=5,Od=3;function Bd(i,t,e){if(i.teleporting>0)return!1;if(i.specTeleportLock>0)return e.msg("You can't teleport so soon after using a special attack."),!1;i.teleporting=Od+1,os(i);const n=i.inv[t];return n.qty=(n.qty??1)-1,n.qty<=0&&(i.inv[t]=null),e.msg("You break the teleport tablet."),e.anim("tab"),!0}function Hd(i,t){const e=i.level.hitpoints;return e<=1||i.orbUsed?!1:(i.orbUsed=!0,os(i),i.level.hitpoints=Math.max(1,e-10),t.splat(e-i.level.hitpoints),t.anim("orb"),t.msg("The locator orb is unstable and hurts you as you use it."),!0)}function jh(i){return i.inv.findIndex(t=>t===null)}function zd(i,t,e){var c;const n=i.inv[t],s=Yt[n.id],r=s.slot,o=i.equip[r]??null;let a=null;r==="weapon"&&s.twoHanded&&i.equip.shield&&(a="shield"),r==="shield"&&i.equip.weapon&&Yt[i.equip.weapon.id].twoHanded&&(a="weapon");const l=a?i.equip[a]:null;if(o&&l){const h=jh(i);if(h<0)return e.msg("You don't have enough free inventory space to do that."),!1;i.inv[h]=l,i.inv[t]=o}else i.inv[t]=o??l;return a&&delete i.equip[a],i.equip[r]=n,os(i),(r==="weapon"||a==="weapon")&&(i.specArmed=!1,i.virulence=0),(c=e.sound)==null||c.call(e,r==="weapon"?Xh[n.id]??"equip_weapon":Yh[r]??"equip_armour"),!0}function Vd(i,t,e){var r;const n=i.equip[t];if(!n)return!1;const s=jh(i);return s<0?(e.msg("You don't have enough free inventory space to do that."),!1):(i.inv[s]=n,delete i.equip[t],t==="weapon"&&(i.specArmed=!1,i.virulence=0),(r=e.sound)==null||r.call(e,t==="weapon"?Xh[n.id]??"equip_weapon":Yh[t]??"equip_armour"),!0)}function Gd(i,t,e){var n,s;return i.prayers.has(t)?(i.prayers.delete(t),(n=e.sound)==null||n.call(e,"prayer_off"),!0):i.level.prayer<=0?(e.msg("You need to recharge your Prayer at an altar."),!1):(i.prayers.add(t),(s=e.sound)==null||s.call(e,t==="smite"?"smite_on":"prayer_on"),!0)}function Wd(i,t){if(i.level.magic<94)return t.msg("You need a Magic level of 94 to cast this spell."),!1;if(i.timers.venge>0)return t.msg("You can only cast vengeance spells every 30 seconds."),!1;const e=i.inv.findIndex(s=>(s==null?void 0:s.id)==="venge_sack");return(e>=0?i.inv[e]:null)?(i.vengeActive=!0,i.timers.venge=Ad,t.anim("cast"),!0):(t.msg("You do not have enough runes to cast this spell."),!1)}function $d(i,t){const e=i.equip.weapon;return!e||!Yt[e.id].spec?(t.msg("This weapon has no special attack."),!1):(i.specArmed=!i.specArmed,!0)}function Ue(i,t,e,n){const s={...i.equip,weapon:{id:e}};Yt[e].twoHanded&&delete s.shield;const r={...i,equip:s},o=n==="ags",a=fl(ul(r,o?Tr.accuracy:1),dl(t,o?"slash":Nn(r).type)),l=o?Tr.maxHit(ks(r)):ks(r);return{c:Math.round(a*1e3)/1e3,b:l,m:cl(r)?hl(r):1}}const Cr=new Map;function ve(i){const t=`${i.c}|${i.b}|${i.m}`,e=Cr.get(t);if(e)return e;const n=Math.floor(Math.max(1,i.b)*i.m),s=new Array(n+1).fill(0);s[0]=1-i.c;for(let r=0;r<=i.b;r++)s[Math.floor(Math.max(1,r)*i.m)]+=i.c/(i.b+1);return Cr.set(t,s),s}function ml(i,t){const e=`vw|${i}|${t}`,n=Cr.get(e);if(n)return n;const s=Math.max(1,i),r=new Array(t+1).fill(0);for(let o=s;o<=t;o++)r[o]=1/(t-s+1);return Cr.set(e,r),r}function Ne(i,t){if(t<=0)return 1;let e=[1];for(const n of i){const s=new Array(Math.min(t,e.length+n.length-1)).fill(0);for(let r=0;r<e.length;r++)if(e[r])for(let o=0;o<n.length&&r+o<t;o++)s[r+o]+=e[r]*n[o];e=s}return Math.max(0,1-e.reduce((n,s)=>n+s,0))}function we(i){return i<.01?"<1%":i>.99?">99%":`${Math.round(i*100)}%`}const Jl=[{name:"Solid",skill:.78,caution:.55,aggression:.5,risk:.35,vengeSense:.6},{name:"Aggressive",skill:.72,caution:.4,aggression:.75,risk:.5,vengeSense:.5},{name:"Careful",skill:.8,caution:.75,aggression:.35,risk:.2,vengeSense:.65},{name:"Spec-happy",skill:.7,caution:.5,aggression:.85,risk:.4,vengeSense:.45},{name:"Gambler",skill:.68,caution:.35,aggression:.6,risk:.8,vengeSense:.5}];function Ql(i,t=mn.hard){const e=Jl[Math.floor(i()*Jl.length)],n=s=>Math.min(.95,Math.max(.05,s+(i()-.5)*.16));return{name:e.name,skill:n(e.skill+t.skill),caution:n(e.caution+t.caution),aggression:n(e.aggression+t.aggression),risk:n(e.risk+t.risk),vengeSense:n(e.vengeSense+t.vengeSense)}}function tc(i){i.autoRetaliate=!0,i.autoFollow=!1}function qd(i,t=[]){for(let e=0;e<2;e++){const n=i.inv.findIndex(s=>(s==null?void 0:s.id)==="angler");n>=0&&(i.inv[n]=null)}if(t.includes("AGS into insta maul")&&!i.inv.some(e=>(e==null?void 0:e.id)==="ags")){const e=i.inv.findIndex(n=>(n==null?void 0:n.id)==="angler");e>=0&&(i.inv[e]={id:"ags"})}}function Xd(i){if(i.inv.some(e=>(e==null?void 0:e.id)==="ags"))return;const t=i.inv.map((e,n)=>(e==null?void 0:e.id)==="restore"?n:-1).filter(e=>e>=0).pop()??-1;t>=0&&(i.inv[t]={id:"ags"})}function ne(i,t){const e={...i.equip,weapon:{id:t}};return Yt[t].twoHanded&&delete e.shield,Gr({...i,equip:e})}function Te(i,t){const e=new Array(i.length+t.length-1).fill(0);for(let n=0;n<i.length;n++)for(let s=0;s<t.length;s++)e[n+s]+=i[n]*t[s];return e}function Bn(i){const t=1-i[0];return t<=0?i:i.map((e,n)=>n===0?0:e/t)}function Yd(i,t){let e=0;for(let n=Math.max(0,Math.ceil(t));n<i.length;n++)e+=i[n];return e}const so=i=>Math.floor(i.base.hitpoints*.15)+2,ro=18;class Kd{constructor(t=Math.random,e=()=>{}){A(this,"personality");A(this,"steps",[]);A(this,"engaged",!1);A(this,"specsFrom",0);A(this,"comboUntil",-1);A(this,"nextKoCheck",0);A(this,"outOfRangeSince",-1);A(this,"followDelay",0);A(this,"lastFoeWeapon",null);A(this,"threatSeenAt",-1);A(this,"alertUntil",-1);A(this,"hurtAt",-100);A(this,"lastHp",99);A(this,"orbsLeft",0);A(this,"mood",0);A(this,"moodUntil",0);A(this,"usedItem",!1);A(this,"holdFireUntil",-1);A(this,"potTrickUntil",-1);A(this,"nextMindGame",0);A(this,"nextFakeAxe",0);A(this,"campLowUntil",-1);A(this,"pidPunishUntil",-1);A(this,"patience",0);A(this,"foeWeaponSince",-100);A(this,"foeHitNormally",!1);A(this,"foeFakes",0);A(this,"foeSwingTick",-100);A(this,"vengeReadyAt",-1);A(this,"vengeLead",-1);A(this,"foeSwingSpeed",4);A(this,"foeAttackChecked",-100);A(this,"foeRushes",0);A(this,"foeAxeShownAt",-100);A(this,"botAxeShownAt",-100);A(this,"lastOwnWeapon",null);A(this,"nextFloorClick",0);A(this,"taste",{});A(this,"pidBelief",!1);A(this,"pidHitsNeeded",-1);A(this,"pidHitsSeen",0);A(this,"lastSeenFoeAttack",-100);A(this,"lastSeenOwnAttack",-100);A(this,"engine");A(this,"me");A(this,"foe");A(this,"profile",mn.hard);A(this,"lowPlayDone",!1);A(this,"lastChanceAt",0);A(this,"lastGasp",!1);A(this,"forceUrgency",0);A(this,"nearMissAt",-100);A(this,"stackWeapon","voidwaker");A(this,"lazyUntil",-1);A(this,"training",[]);A(this,"onTraining",()=>{});A(this,"nextTrainAt",0);A(this,"armourOffUntil",-1);A(this,"orbAxeUntil",-1);A(this,"nextShowOrb",0);A(this,"highSince",-1);A(this,"nextCampFloor",0);A(this,"foeHasAgs",!1);A(this,"mySpecs",0);A(this,"foeSpecs",0);A(this,"tabbing",!1);A(this,"tabbingAt",-100);A(this,"lastEatAt",-100);A(this,"neverTab",!1);A(this,"hailMary",!1);A(this,"hailMaryAt",-100);A(this,"readAt",-1);A(this,"stackAt",-1);A(this,"baitSeenAt",-1);A(this,"baitRead",!1);A(this,"habits",{specMaul:0,bait:0});A(this,"memory",{venge:0,combo:0,axe:1,low:0,gamble:1,fights:0});A(this,"onLearn",()=>{});A(this,"seenLog",[]);A(this,"foeArmour",{body:!0,legs:!0});A(this,"deathNoted",!1);A(this,"lastFoeSpec",{weapon:"",tick:-100});A(this,"readTarget",0);A(this,"trainCheck",null);A(this,"sees");A(this,"clicks",0);A(this,"clickTick",-1);A(this,"clickBudget",4);A(this,"spill",[]);A(this,"queuedWeapon",{tick:-1,id:"tentacle"});A(this,"hoverUntil",-1);A(this,"wieldTick",-1);A(this,"ringRemembers",!0);A(this,"trapSeenAt",-100);A(this,"godLimit",null);A(this,"godBand",null);A(this,"specClickTick",-1);A(this,"pidEvidence",null);A(this,"foeSwingPending",!1);A(this,"ownSwingPending",!1);A(this,"presumedCache",null);this.rng=t,this.thought=e,this.personality=Ql(t,this.profile),this.sees=new Sd(this.rng,()=>this.personality.skill),this.reset()}m(t){return this.profile.moves[t]}get newbie(){return this.profile.play.newbie??0}survivalEat(){const t=this.me,e=t.timers,n=t.level.hitpoints;if(n>Math.max(12,ne(this.presumedFoe(),"tentacle")*.5)||this.tick-this.hailMaryAt<=8||this.tabbing&&this.tick-this.tabbingAt<=3||!(this.nextAttackIn(this.foe)<=1||this.sees.spec>=50))return!1;const s=[];if(e.food<=1&&this.has("angler")&&s.push("angler"),e.potion<=1&&this.has("brew")&&s.push("brew"),e.combo<=1&&this.has("karambwan")&&s.push("karambwan"),!s.length)return!1;this.orbAxeUntil=-1,this.orbsLeft=0,this.potTrickUntil=-1,this.campLowUntil=-1;for(const r of s)this.q({type:"item",slot:this.slot(r)});return this.say(`at ${n} HP: eats to survive (survival eat).`),!0}loadMemory(t){Object.assign(this.memory,{venge:t.venge??0,combo:Math.min(6,t.combo??0),axe:t.axe??1,low:t.low??0,gamble:t.gamble??1,fights:t.fights??0}),this.habits.specMaul=t.specMaul??0,this.habits.bait=t.bait??0}remember(){this.profile.play.god&&this.onLearn(this.memory,this.habits)}fightLost(t,e,n){this.engine=t,this.me=e,this.foe=n,!this.deathNoted&&(this.observe(),this.deathNoted=!0,this.learnFromDeath())}setLevel(t){this.profile=mn[t],this.reset()}newRound(){const t={personality:this.personality,taste:this.taste,foeFakes:this.foeFakes,foeRushes:this.foeRushes,patience:this.patience};this.reset(),Object.assign(this,t)}reset(){if(this.personality=Ql(this.rng,this.profile),this.sees.reset(),this.hoverUntil=-1,this.steps=[],this.spill=[],this.engaged=!1,this.comboUntil=-1,this.nextKoCheck=0,this.outOfRangeSince=-1,this.lastFoeWeapon=null,this.threatSeenAt=-1,this.alertUntil=-1,this.hurtAt=-100,this.highSince=-1,this.lastHp=99,this.orbsLeft=0,this.mood=0,this.moodUntil=0,this.holdFireUntil=-1,this.potTrickUntil=-1,this.pidHitsNeeded=-1,this.pidHitsSeen=0,this.nextMindGame=0,this.nextFakeAxe=0,this.campLowUntil=-1,this.lazyUntil=-1,this.lowPlayDone=!1,this.lastChanceAt=0,this.lastGasp=!1,this.forceUrgency=0,this.nearMissAt=-100,this.ringRemembers=this.chance({easy:.15,medium:.5,hard:.85,elite:1,god:1}[this.profile.level]),this.pidPunishUntil=-1,this.patience=this.rng(),this.foeWeaponSince=-100,this.foeHitNormally=!1,this.foeFakes=0,this.foeRushes=0,this.foeSwingTick=-100,this.foeSwingSpeed=4,this.foeAttackChecked=-100,this.vengeReadyAt=-1,this.vengeLead=-1,this.foeAxeShownAt=-100,this.botAxeShownAt=-100,this.lastOwnWeapon=null,this.seenLog=[],this.foeArmour={body:!0,legs:!0},this.deathNoted=!1,this.memory){const t=this.memory;t.fights++,t.venge*=.93,t.combo*=.93,t.low*=.93,t.axe+=(1-t.axe)*.07,t.gamble+=(1-t.gamble)*.07}this.nextFloorClick=0,this.nextTrainAt=12+Math.floor(this.rng()*20),this.trainCheck=null,this.taste={};for(const t of["tentacle into double maul","Voidwaker into insta maul","insta maul into Voidwaker","single maul","Voidwaker","Voidwaker timed with Vengeance","AGS into insta maul","insta maul into AGS","AGS"])this.taste[t]=.5+this.rng()}get tick(){return this.engine.tick+1}q(t){var e,n,s,r;if(this.clickTick!==this.tick){this.clickTick=this.tick,this.clicks=0;const o=this.profile.level;this.clickBudget=o==="easy"||o==="medium"?3:o==="god"?6:o==="elite"&&this.chance(.25*this.personality.skill)?5:4}if(!(t.type==="spec"&&this.weaponAfterClicks()==="tentacle")){if(this.clicks>=this.clickBudget){this.spill.push({a:t,item:t.type==="item"?(e=this.me.inv[t.slot])==null?void 0:e.id:void 0});return}if(this.clicks++,t.type==="spec"&&(this.specClickTick=this.tick),t.type==="item"){const o=Yt[((n=this.me.inv[t.slot])==null?void 0:n.id)??"orb"].kind;(o==="food"||o==="combo"||((s=this.me.inv[t.slot])==null?void 0:s.id)==="brew")&&(this.lastEatAt=this.tick),o!=="equip"&&o!=="other"&&(this.usedItem=!0)}t.type==="item"&&Yt[((r=this.me.inv[t.slot])==null?void 0:r.id)??"orb"].slot==="weapon"&&(this.queuedWeapon={tick:this.tick,id:this.me.inv[t.slot].id}),this.engine.queue(this.me.id,t)}}weaponAfterClicks(){var t;return this.queuedWeapon.tick===this.tick?this.queuedWeapon.id:(t=this.me.equip.weapon)==null?void 0:t.id}slot(t){return this.me.inv.findIndex(e=>(e==null?void 0:e.id)===t)}has(t){return this.slot(t)>=0}freeSlots(){return this.me.inv.filter(t=>!t).length}wield(t){var s,r;const e=this.weaponAfterClicks();if(e===t||((s=this.me.equip.shield)==null?void 0:s.id)===t&&e===((r=this.me.equip.weapon)==null?void 0:r.id))return!0;const n=this.slot(t);return n<0?!1:(this.q({type:"item",slot:n}),this.wieldTick=this.tick,!0)}backToMain(){this.wield("tentacle"),this.wield("avernic")}later(t,e,n){this.steps.push({at:this.tick+t,run:n,tag:e})}pending(t){return this.steps.some(e=>e.tag===t)}chance(t){return this.rng()<t}reaction(){const[t,e]=this.profile.play.react,n=this.rng(),s=this.hovering()&&t>=.2?.2:0,r=.15*(this.personality.skill-.75);return n<t+r+s?0:n<t+e+.1+r+s?1:2}shockedDelay(){const[t,e,n]=this.profile.play.react,s=this.rng(),r=this.hovering()&&t>=.2?.15:0,o=.15*(this.personality.skill-.75);return s<Math.max(0,t+o+r)?0:s<t+e+o+r?1:s<t+e+n+o+r?2:3}hovering(){return this.hoverUntil>=this.tick}updateHover(){if(this.pidBelief){this.hoverUntil=-1;return}this.hovering()||!this.chance((.015+.05*this.personality.skill)*this.m("hover"))||(this.hoverUntil=this.tick+4+Math.floor(this.rng()*8),this.say("hovers its food."))}say(t){this.thought(`[${this.personality.name}] ${t}`)}nextAttackIn(t){return t===this.foe?Math.max(0,this.foeSwingTick+this.foeSwingSpeed-this.tick):Math.max(0,t.lastAttackTick+Ar(t)-this.tick)}threat(){var d;const e=((d=this.foe.equip.weapon)==null?void 0:d.id)??"tentacle",n=this.presumedFoe(),s=ne(n,e in Yt?e:"tentacle"),r=Math.floor(this.sees.spec/50),o=ne(n,"gmaul"),a=Math.floor(ne(n,"voidwaker")*1.5),l=ne(n,"dh_axe");let c=s;const h=e==="gmaul"||e==="voidwaker",u=this.habits.specMaul>=2?.15*this.profile.play.aware:0;return r>=2?c=Math.max(c,(h?1:.75+u)*Math.max(2*o,a+o)):r===1&&(c=Math.max(c,(h?1:.75)*Math.max(o+s*.5,a))),e==="dh_axe"&&(c=Math.max(c,l)),e==="ags"&&r>=1&&(c=Math.max(c,this.agsSpecMax())),Math.round(c*.7)}agsSpecMax(){return Math.floor(Math.floor(ne(this.presumedFoe(),"ags")*1.1)*1.25)}agsFloor(){var r,o,a,l;const t=this.personality;let e=0;const n=this.profile.play.aware;if(this.foeHasAgs&&this.sees.spec>=50&&n>0){const c=Math.min(1.02,Math.max(.7,.96+.08*t.skill+.05*t.caution-.1*t.risk));e=Math.round(this.agsSpecMax()*c*(.55+.45*Math.min(1,n/.75)))}const s=this.foe;if(((r=s.equip.head)==null?void 0:r.id)==="dh_helm"&&((o=s.equip.body)==null?void 0:o.id)==="dh_body"&&((a=s.equip.legs)==null?void 0:a.id)==="dh_legs"){const c={...s,level:{...s.level,hitpoints:Math.max(1,Math.round(this.sees.hp))}},h=ne(c,"dh_axe"),d=Math.min(1,this.profile.play.read*1.45)*Math.min(1,Math.max(.4,.65+.35*t.skill+.08*t.caution-.12*t.risk))*(this.pidBelief?.8:1);if(h>=45&&(e=Math.max(e,Math.round(h*d))),(((l=s.equip.weapon)==null?void 0:l.id)==="dh_axe"||this.tick-this.foeAxeShownAt<=2)&&this.nextAttackIn(s)<=2){const v=(.03+.22*(1-this.profile.play.aware))*(this.pidBelief?1.6:1)*this.memory.axe;e=Math.max(e,this.axeSafeHp(v))}}return e}axeSafeHp(t){const e=[ve(Ue(this.presumedFoe(),this.me,"dh_axe"))];this.profile.play.god&&this.sees.vengeUp&&e.push(this.vengeBackPmf());for(let n=1;n<=this.me.base.hitpoints;n++)if(Ne(e,n)<=t)return n;return this.me.base.hitpoints}think(t,e,n){this.thinkTick(t,e,n),!e.dead&&!n.dead&&this.noMaulSwing()}noMaulSwing(){var e;const t=this.me;((e=t.equip.weapon)==null?void 0:e.id)!=="gmaul"||t.timers.attack>1||this.wieldTick===this.tick||this.specClickTick===this.tick||this.newbie>0&&this.comboUntil>=this.tick||this.backToMain()}ringSwap(){var h;const t=this.me;if(!this.ringRemembers||this.comboUntil>=this.tick||this.training.length||this.orbsLeft>0||this.orbAxeUntil>=this.tick||this.potTrickUntil>=this.tick||this.campLowUntil>=this.tick||this.stackAt>=0||this.armourOffUntil>=0||this.hailMary)return!1;const e=this.sees.hp,n=t.spec>=50,s=t.level.hitpoints<=50,r=(h=t.equip.ring)==null?void 0:h.id,o=n&&e<=86||s&&e<=60&&this.has("dh_axe"),a=(!n||e>=93)&&!(s&&e<=70),l=r==="ultor"?a?"recoil":null:o?"ultor":null;if(!l)return!1;const c=this.slot(l);return c<0?!1:(this.q({type:"item",slot:c}),!0)}thinkTick(t,e,n){var r;this.engine=t,this.me=e,this.foe=n,this.sees.update(t,e,n),this.sees.fooledAt===t.tick&&this.say(`thought you ate, but your HP bar says ~${Math.round(this.sees.hp)}.`),this.usedItem=!1;for(const{a:o,item:a}of this.spill.splice(0))if(o.type==="item"&&a){const l=((r=e.inv[o.slot])==null?void 0:r.id)===a?o.slot:this.slot(a);l>=0&&this.q({...o,slot:l})}else this.q(o);for(const o of t.seen)o.kind==="attack"&&o.special&&(o.who===e.id?this.mySpecs++:this.foeSpecs++);if(this.trainCheck&&(n.dead||this.tick>=this.trainCheck.at)&&this.reportTraining(),this.tabbing&&e.teleporting<=0&&this.tick-this.tabbingAt>3&&(this.tabbing=!1),this.observe(),e.dead&&!this.deathNoted&&(this.deathNoted=!0,this.learnFromDeath()),e.dead||n.dead||this.engaged&&e.teleporting<=0&&!this.pending("eat")&&this.tick-this.lastEatAt>2&&this.survivalEat()||this.tabbing)return;if(!this.engaged){if(e.targetId!==n.id&&n.targetId!==e.id)return;this.engaged=!0,this.specsFrom=this.tick+14+Math.floor(this.rng()*4),this.nextTrainAt=this.tick+17+Math.floor(this.rng()*12),this.pidBelief=this.profile.play.god?t.order[0]===e.id:!1,this.say("engages."),this.opening()}const s=this.steps.filter(o=>o.at<=this.tick);this.steps=this.steps.filter(o=>o.at>this.tick);for(const o of s)o.run();if(!this.chance(this.profile.play.idle*(1.3-.4*this.personality.skill))&&(this.drift(),this.updateHover(),this.notePid(),this.notice(),!this.tryHailMary())){if(!(this.hailMary||this.orbsLeft>0)){if(this.tryTab())return}if(this.profile.play.god&&this.tick>=this.specsFrom&&this.comboUntil<this.tick&&this.tryLowBurst()){this.follow();return}if(this.eat(),this.upkeep(),this.venge(),this.tryArmourOff(),this.readBait()){this.follow();return}if(this.axeVengeTrap()){this.trapSeenAt<this.tick-10&&this.say("your Venge is up with the axe in your hands: it won’t feed it with a whip."),this.trapSeenAt=this.tick,this.me.targetId&&this.q({type:"walk"}),this.holdFireUntil=this.tick+1,this.follow();return}this.offense(),this.follow()}}opening(){const t=this.me;t.prayers.has("piety")||this.q({type:"prayer",id:"piety"}),t.level.strength<=t.base.strength&&this.has("combat")&&this.q({type:"item",slot:this.slot("combat")}),t.targetId!==this.foe.id&&this.q({type:"attack",target:this.foe.id})}notePid(){const t=this.engine.seen,e=this.me,n=this.foe,s=u=>t.some(d=>d.kind==="splat"&&d.on===u&&(d.hit==="melee"||d.hit==="magic")),r=t.some(u=>u.kind==="attack"&&u.who===n.id),o=t.some(u=>u.kind==="attack"&&u.who===e.id),a=s(e.id),l=s(n.id);r&&a?this.pidEvidence=!1:this.foeSwingPending&&a&&(this.pidEvidence=!0),o&&l?this.pidEvidence=!0:this.ownSwingPending&&l&&(this.pidEvidence=!1),this.foeSwingPending=r&&!a,this.ownSwingPending=o&&!l;const c=this.profile.play.god?this.engine.order[0]===e.id:this.pidEvidence??this.pidBelief,h=+(this.foe.lastAttackTick>this.lastSeenFoeAttack)+ +(this.me.lastAttackTick>this.lastSeenOwnAttack);if(this.lastSeenFoeAttack=this.foe.lastAttackTick,this.lastSeenOwnAttack=this.me.lastAttackTick,c===this.pidBelief){this.pidHitsNeeded=-1;return}if(this.profile.play.god)this.pidHitsNeeded=0;else if(this.pidHitsNeeded<0){const u=this.rng(),d=this.personality.skill;this.pidHitsNeeded=u<.25+.15*d?1:u<.9?2+Math.floor(this.rng()*2):7+Math.floor(this.rng()*2),this.pidHitsSeen=0}this.pidHitsSeen+=h,!(this.pidHitsSeen<this.pidHitsNeeded)&&(this.pidBelief=c,this.pidHitsNeeded=-1,this.say(c?"notices it has PID now.":"notices it lost PID."),c&&(this.pidPunishUntil=this.tick+6))}drift(){if(this.tick<this.moodUntil)return;const t=this.mood;this.mood=Math.max(-1,Math.min(1,(this.rng()*2-1)*.8+(this.personality.aggression-.5))),this.moodUntil=this.tick+15+Math.floor(this.rng()*25),this.mood>.4&&t<=.4?this.say("starts pushing for a KO."):this.mood<-.4&&t>=-.4&&this.say("plays it safe for a while.")}notice(){var a,l;const t=this.personality,e=this.me,n=((a=this.foe.equip.weapon)==null?void 0:a.id)??null;if(n!==this.lastFoeWeapon&&(n==="gmaul"||n==="voidwaker"||n==="dh_axe"||n==="ags")){const c=this.sees.ateWithin(this.engine,2)?this.profile.play.aware:1;this.chance((this.profile.play.spot+.15*(t.caution-.5)+.1*(t.skill-.7))*c)&&(this.threatSeenAt=this.tick,this.alertUntil=this.tick+4)}n==="ags"&&(this.foeHasAgs=!0),n!==this.lastFoeWeapon&&(this.foeWeaponSince=this.tick,this.foeHitNormally=!1,n==="dh_axe"&&(this.foeAxeShownAt=this.tick)),this.lastFoeWeapon=n;const s=this.engine.seen.some(c=>c.kind==="attack"&&c.who===this.foe.id&&c.weapon==="gmaul"&&c.special);this.foe.lastAttackTick!==this.foeAttackChecked&&(this.foeAttackChecked=this.foe.lastAttackTick,s||(this.foeSwingTick=this.foe.lastAttackTick,this.foeSwingSpeed=Ar(this.foe)));for(const c of this.engine.seen)if(!(c.kind!=="attack"||c.who!==this.foe.id)){if(c.weapon==="tentacle"&&!c.special&&this.sees.spec>=100&&!this.training.length){const h=Math.round(2*ne(this.presumedFoe(),"gmaul")*.8);e.level.hitpoints<=h&&this.chance(this.profile.play.read)&&(this.readAt=this.tick,this.readTarget=Math.min(h+3,e.level.hitpoints+22),this.say(`reads a double maul coming at ${e.level.hitpoints} HP: eats now.`))}!c.special&&c.weapon===n&&(this.foeHitNormally=!0),c.special&&(c.weapon==="gmaul"&&(this.lastFoeSpec.weapon==="voidwaker"||this.lastFoeSpec.weapon==="ags")&&this.tick-this.lastFoeSpec.tick<=2&&(this.habits.specMaul++,this.habits.specMaul===2&&this.say(`has noticed you like ${this.lastFoeSpec.weapon==="ags"?"AGS":"Voidwaker"} into insta maul.`)),c.weapon!=="gmaul"&&(this.lastFoeSpec={weapon:c.weapon,tick:this.tick})),c.weapon==="dh_axe"&&(this.tick-this.botAxeShownAt<=3&&e.lastAttackTick<this.botAxeShownAt&&(this.foeRushes=Math.min(3,this.foeRushes+1)),this.foeAxeShownAt=-100)}this.foeAxeShownAt>0&&this.tick-this.foeAxeShownAt>=3&&(this.foeFakes=Math.min(3,this.foeFakes+1),this.foeAxeShownAt=-100);const r=((l=e.equip.weapon)==null?void 0:l.id)??null;r!==this.lastOwnWeapon&&r==="dh_axe"&&(this.botAxeShownAt=this.tick),this.lastOwnWeapon=r,this.foeFakes*=.99,this.foeRushes*=.99,e.level.hitpoints>=e.base.hitpoints-4?this.highSince<0&&(this.highSince=this.tick):this.highSince=-1,e.level.hitpoints>e.base.hitpoints*.62&&(this.lowPlayDone=!1);const o=this.lastHp-e.level.hitpoints;this.lastHp=e.level.hitpoints,o>=20&&(this.hurtAt=this.tick,this.alertUntil=Math.max(this.alertUntil,this.tick+3),e.level.hitpoints>45&&this.lazyUntil<this.tick&&this.newbie>0&&this.chance(.5*this.newbie)&&(this.lazyUntil=this.tick+5+Math.floor(this.rng()*7),this.say(`doesn't bother eating at ${e.level.hitpoints} HP.`)))}readBait(){const t=this.me,e=this.foe;if(!(this.sees.vengeUp&&(!e.equip.body||!e.equip.legs)&&!this.training.length))return this.baitSeenAt=-1,!1;if(this.baitSeenAt<0){this.baitSeenAt=this.tick,this.habits.bait++,this.habits.bait===2&&this.say("has noticed you like armour off with Vengeance.");const s=.1*Math.min(3,this.habits.bait-1)*this.profile.play.aware+.08*this.memory.venge;this.baitRead=this.chance(Math.min(.98,this.profile.play.aware*(.75+.25*this.personality.skill)+s)),this.baitRead&&this.say("your armour is off with Vengeance up: a Venge stack. It won’t swing into it.")}return!this.baitRead||this.tick-this.baitSeenAt>6||this.comboUntil>=this.tick?!1:t.spec>=50&&this.has("gmaul")&&this.freeSlots()>=1&&de(t.pos,e.pos)&&this.tick>=this.specsFrom&&this.tick-this.baitSeenAt>=1&&this.chance(.35)?(this.say("pops your Venge with a maul."),this.singleMaul(),!0):(t.targetId&&this.q({type:"walk"}),this.holdFireUntil=this.tick+1,!0)}baitBurst(){if(!this.baitRead||this.baitSeenAt<0||this.sees.spec<50)return 0;const t=Math.floor(ne(this.presumedFoe(),"voidwaker")*1.5);return Math.max(this.foeHasAgs?this.agsSpecMax():0,t)}tryLowBurst(){if(!this.profile.play.god||this.lowPlayDone||this.training.length)return!1;const t=this.me,e=this.foe,n=Math.floor(t.spec/50),s=t.level.hitpoints;if(n<1||s>55||s<12||!this.has("gmaul")||!this.has("dh_axe")||this.freeSlots()<1||!de(t.pos,e.pos)||this.pending("eat")||this.lastEatAt>=this.tick-1||this.engine.tick-t.lastAttackTick>4)return!1;const r=Math.max(1,t.timers.attack-1),o=this.nextAttackIn(e);if(r>4||(this.pidBelief?r>o:r>=o))return!1;if(this.sees.spec>=50){const f=ve(Ue(this.presumedFoe(),t,"gmaul"));if(Ne(this.sees.spec>=100?[f,f]:[f],s)>.05)return!1}const a=e.incoming.filter(f=>f.from===t.id).reduce((f,g)=>f+g.damage,0),l=n>=2?2:1,c=[...Array(l).fill(this.hitPmf("gmaul")),this.hitPmf("dh_axe")],h=this.sees.killChance(c.reduce(Te),a),u=this.sees.killChance(c.map(Bn).reduce(Te),a),d=this.urgency();if(u<.25||h<.06*(1-.5*d)||!this.chance(Math.min(1,.3+2*h+.3*d)))return!1;this.lowPlayDone=!0,this.lastChanceAt=this.tick,this.comboUntil=this.tick+r+2,this.orbAxeUntil=this.tick+r+1,this.say(`low after that trade, but its axe comes first${this.pidBelief?" (it has PID)":""}: ${l===2?"double maul":"maul"} into the axe from ${s} HP (${Math.round(h*100)}% if you don't eat).`),this.wield("gmaul");for(let f=0;f<(l===2?3:1);f++)this.q({type:"spec"});return this.later(1,"combo",()=>{this.wield("dh_axe"),this.q({type:"attack",target:this.foe.id})}),this.later(r+2,"combo",()=>this.backToMain()),!0}urgency(){if(!this.profile.play.god)return 0;if(this.forceUrgency)return this.forceUrgency;const t=this.me,e=t.inv.filter(a=>a&&(a.id==="angler"||a.id==="karambwan")).length,n=t.inv.reduce((a,l)=>a+((l==null?void 0:l.id)==="brew"?l.doses??0:0),0),s=e+n/3,r=Math.max(0,Math.min(1,(9-s)/6)),o=Math.max(0,Math.min(1,(this.tick-this.lastChanceAt-50)/100));return Math.min(1,.6*r+.4*o+(this.foeSpecs>=2?.15:0))}observe(){const t=this.me,e=this.foe,n=[],s=[],r={gmaul:"maul",voidwaker:"Voidwaker",ags:"AGS",dh_axe:"axe",tentacle:"whip"};for(const l of this.engine.seen)l.kind==="attack"&&l.who===e.id?(n.push(`you ${l.special?"spec":"swing"} ${r[l.weapon]??l.weapon}`),s.push(l.special?`spec:${l.weapon}`:`swing:${l.weapon}`)):l.kind==="cast"&&l.who===e.id?(n.push("you cast Vengeance"),s.push("foe-venge")):l.kind==="splat"&&l.on===t.id&&l.damage>0&&(l.hit==="venge"?(n.push(`its hit procced your Venge (${l.damage})`),s.push("venge-proc")):l.hit==="recoil"?(n.push(`recoil ${l.damage}`),s.push("recoil")):(l.hit==="melee"||l.hit==="magic")&&(n.push(`hit for ${l.damage}`),s.push("hit")));const o=!!e.equip.body,a=!!e.equip.legs;if((!o&&this.foeArmour.body||!a&&this.foeArmour.legs)&&(n.push("you took your armour off"),s.push("armour-off")),(o&&!this.foeArmour.body||a&&!this.foeArmour.legs)&&s.push("armour-on"),this.foeArmour={body:o,legs:a},this.lastEatAt===this.tick-1&&s.push("ate"),this.pidBelief||s.push("foe-pid"),this.seenLog.push({tick:this.tick,hp:t.level.hitpoints,text:n,tags:s}),this.seenLog.length>14&&this.seenLog.shift(),this.profile.play.god&&!t.dead&&t.level.hitpoints<=22&&this.tick-this.nearMissAt>25){const l=this.seenLog.slice(-5);l.length>=3&&Math.max(...l.map(c=>c.hp))>=50&&(this.nearMissAt=this.tick,this.learnFromDeath(!0))}}learnFromDeath(t=!1){const e=this.seenLog.slice(-8);if(!e.length)return;const n=g=>e.some(v=>v.tags.includes(g)),s=e.slice(-3),r=Math.max(...e.slice(0,-1).map(g=>g.hp),0),o=s.flatMap(g=>g.tags.filter(v=>v.startsWith("spec:"))),a=e.filter(g=>g.text.length).map(g=>g.text.join(", ")).join("; then "),l=this.me.level.hitpoints,c=this.has("angler")||this.has("karambwan")||this.has("brew");let h=null,u="";if(c?n("venge-proc")&&(n("armour-off")||n("foe-venge"))&&o.length?(h="venge",u="a Venge stack: it will read your bait sooner and stay out of your Venge-with-spec range."):o.length>=1&&(s.some(g=>g.tags.includes("foe-pid"))||o.includes("spec:gmaul"))?(h="combo",u=`your ${o.length>1?"combo":"spec"} on your PID: it will stay higher when you have spec and PID.`):s.some(g=>g.tags.includes("swing:dh_axe"))?(h="axe",u="your axe: it will respect your axe more."):this.campLowUntil>=this.tick-6||this.orbAxeUntil>=this.tick-6||this.potTrickUntil>=this.tick-6?(h="gamble",u="its own gamble (low on purpose): it will gamble less against you."):r<60?(h="low",u=`sitting low (${r} HP) under your hits: it will eat earlier.`):o.length&&(h="combo",u="your spec combo: it will respect your spec more."):u="out of food: the supply battle was lost.",t&&!h||(this.say(`${t?`nearly died (${r} → ${l} HP)`:`died from ${r} HP`}. What happened: ${a||"your hits"}. Lesson: ${u||"unlucky rolls, nothing to change."}`),!this.profile.play.god||!h))return;const d=this.memory,f=t?.5:1;h==="venge"&&(d.venge=Math.min(3,d.venge+f)),h==="combo"&&(d.combo=Math.min(6,d.combo+2*f)),h==="axe"&&(d.axe=Math.max(.4,d.axe*(1-.25*f))),h==="low"&&(d.low=Math.min(9,d.low+3*f)),h==="gamble"&&(d.gamble=Math.max(.3,d.gamble*(1-.25*f))),this.onLearn(d,this.habits)}presumedFoe(){var o,a;const t=Math.max(1,Math.round(this.sees.hp)),e=this.presumedCache;if(e&&e.tick===this.engine.tick&&e.hp===t&&((o=e.p.equip.weapon)==null?void 0:o.id)===((a=this.foe.equip.weapon)==null?void 0:a.id)&&e.spec===this.sees.spec>=50)return e.p;const n=this.foe,s=ui("presumed","presumed");for(const l of["weapon","shield","head","body","legs","cape","feet","hands"])n.equip[l]?s.equip[l]=n.equip[l]:delete s.equip[l];const r=this.sees.spec>=50||n.equip.weapon&&n.equip.weapon.id!=="tentacle";return s.equip.ring={id:r?"ultor":"recoil"},s.level.attack=s.level.strength=s.level.defence=118,s.level.hitpoints=Math.max(1,Math.round(this.sees.hp)),s.prayers.add("piety"),this.presumedCache={tick:this.engine.tick,hp:t,spec:this.sees.spec>=50,p:s},s}foeCombos(){var d,f,g,v;const t=this.presumedFoe(),e=this.me,n=(p,m)=>ve(Ue(t,e,p,m)),s=Math.floor(this.sees.spec/50),r=((d=this.foe.equip.weapon)==null?void 0:d.id)??"tentacle",o=n(r==="dh_axe"||r==="gmaul"?"tentacle":r in Yt?r:"tentacle"),a=n("gmaul"),l=ne(t,"voidwaker"),c=ml(Math.floor(l*.5),Math.floor(l*1.5)),h=[{name:"whip",hits:[o],swing:!0},{name:"two whips",hits:[o,o],swing:!0}];return(((f=this.foe.equip.head)==null?void 0:f.id)==="dh_helm"&&((g=this.foe.equip.body)==null?void 0:g.id)==="dh_body"&&((v=this.foe.equip.legs)==null?void 0:v.id)==="dh_legs"||r==="dh_axe")&&h.push({name:"DH axe",hits:[n("dh_axe")],swing:!0}),s>=1&&(h.push({name:"maul",hits:[a],swing:!1}),h.push({name:"whip into maul",hits:[o,a],swing:!0}),h.push({name:"Voidwaker",hits:[c],swing:!0}),this.foeHasAgs&&h.push({name:"AGS",hits:[n("ags","ags")],swing:!0})),s>=2&&(h.push({name:"double maul",hits:[a,a],swing:!1}),h.push({name:"Voidwaker into maul",hits:[c,a],swing:!0}),this.foeHasAgs&&h.push({name:"AGS into maul",hits:[n("ags","ags"),a],swing:!0})),h}godFloor(){var r,o;if(this.sees.spec<50)return 0;const t=this.nextAttackIn(this.foe)<=1,e=this.foeCombos().filter(a=>a.name!=="whip"&&a.name!=="two whips"&&(this.pidBelief?!a.swing:!a.swing||t));if(!e.length)return 0;const n=this.pidBelief?((r=this.godLimit)==null?void 0:r[1])??.2:((o=this.godLimit)==null?void 0:o[0])??.12,s=this.me.base.hitpoints;for(let a=1;a<=s;a++)if(e.every(l=>Ne(l.hits,a)<=n))return a;return s}vengeBackPmf(){const t=ve(Ue(this.me,this.presumedFoe(),"tentacle")),e=new Array(Math.floor((t.length-1)*.75)+1).fill(0);return t.forEach((n,s)=>{e[Math.floor(s*.75)]+=n}),e}axeVengeTrap(){var e;if(!this.profile.play.god||!this.sees.vengeUp||((e=this.foe.equip.weapon)==null?void 0:e.id)!=="dh_axe")return!1;const t=ve(Ue(this.presumedFoe(),this.me,"dh_axe"));return Ne([t,this.vengeBackPmf()],this.me.level.hitpoints)>.04&&Ne([t],this.me.level.hitpoints)<=.04}eat(){var Q,_;if(this.pending("eat")||this.training.length&&this.comboUntil>=this.tick&&this.me.level.hitpoints>25)return;const t=this.me,e=this.personality,n=t.base.hitpoints,s=t.level.hitpoints,r=this.threat(),o=this.profile.play.pid*(this.pidBelief?-1:1),a=this.profile.play.god?n*(((Q=this.godBand)==null?void 0:Q[0])??.68)+(this.rng()-.5)*8+this.memory.low:n*(.45+.2*e.caution)+(this.rng()-.5)*8+3*o+this.profile.play.eatLine+this.memory.low,l=this.alertUntil>=this.tick,c=this.lazyUntil>=this.tick&&s>45,h=l&&!c?r*(.75+.45*e.caution+.07*o)+4:0;let u=0;s<a&&(u=a+12+this.rng()*10),u=Math.min(u,this.eatCeiling()),s<=h&&(u=Math.max(u,h+8));const d=this.agsFloor();if(d&&!c&&s<=d&&(u=Math.max(u,d+4)),this.profile.play.god&&!c){const b=Math.min(90,this.godFloor()+this.memory.combo);b>this.memory.combo&&s<b&&(u=Math.max(u,Math.min(92,b+2)))}const f=this.baitBurst();f&&s<=f*.85&&(u=Math.max(u,Math.round(f*.85)+6));const g=this.profile.play.aware;if(g>=.5&&(this.habits.bait>=2||this.memory.venge>=1)&&this.sees.vengeUp&&this.sees.spec>=50&&!f){const b=Math.max(Math.floor(ne(this.presumedFoe(),"voidwaker")*1.5),this.foeHasAgs?this.agsSpecMax():0),z=Math.round(b*(.55+.15*g));s<=z&&(u=Math.max(u,z+6))}const v=this.nextAttackIn(this.foe)<=1||this.sees.spec>=50,p=this.tick-this.hailMaryAt<=8;if(t.teleporting<=0&&!p&&v&&s<=Math.max(12,ne(this.presumedFoe(),"tentacle")*.5)){(this.orbAxeUntil>=this.tick||this.orbsLeft>0||this.potTrickUntil>=this.tick||this.campLowUntil>=this.tick)&&this.say(`at ${s} HP: drops the play and eats.`),this.orbAxeUntil=-1,this.orbsLeft=0,this.potTrickUntil=-1,this.campLowUntil=-1,this.eatNow(!0);return}this.comboUntil>=this.tick&&((_=t.equip.weapon)==null?void 0:_.id)==="dh_axe"&&s>r+3&&(u=0);const M=this.readAt===this.tick;if(M&&(u=Math.max(u,Math.min(n,this.readTarget))),this.orbAxeUntil>=this.tick&&s>0&&(u=0),this.potTrickUntil>=this.tick&&s>r+3&&(u=0),u<=s)return;const E=!this.training.length;if(E&&s>h&&this.tryPotTrick()||E&&this.campLowUntil>=this.tick&&s>this.lowAxeFloor())return;if(E&&this.lowAxeWindow()&&this.chance((.2+.4*e.risk)*this.m("campLow")*this.memory.gamble)){this.campLowUntil=this.tick+2,this.lowPlayDone=!0,this.say(`stays at ${s} HP to use the axe.`);return}const L=this.rng(),k=this.hurtAt===this.tick,T=M?0:k?this.shockedDelay():this.threatSeenAt>=this.tick-1?this.reaction():this.profile.play.react[0]<.2?this.reaction():L<.5+.4*this.profile.play.react[0]?0:1,I=this.hurtAt>=this.tick-2;T===0?this.eatNow(I):this.later(T,"eat",()=>this.eatNow(I))}eatCeiling(){var t;return this.profile.play.god?this.me.base.hitpoints*((((t=this.godBand)==null?void 0:t[1])??.84)+this.rng()*.07):this.me.base.hitpoints*(.78+.04*this.personality.caution+this.rng()*.05)}eatNow(t){const e=this.me,n=e.timers,s=this.personality,r=e.base.hitpoints,o=e.level.hitpoints,a=this.threat(),l=this.alertUntil>=this.tick||this.hurtAt>=this.tick-1,c=Math.min(this.eatCeiling(),Math.max(r*(.6+.2*s.caution),a*(.9+.3*s.caution)+8)),h=this.agsFloor();let d=Math.max(l?Math.max(c,a*(.9+.3*s.caution)+8):c,h?h+4:0,this.readAt===this.tick?this.readTarget:0)-o;if(d<=0)return;const f=[],g=n.food<=1&&this.has("angler"),v=n.potion<=1&&this.has("brew"),p=n.combo<=1&&this.has("karambwan"),m=Math.max(l?Math.max(this.eatCeiling()+6,a+10):this.eatCeiling()+6,h+10);let S=o;const M=k=>S+k<=m||S<a+3||S<=h||this.readAt===this.tick&&S<this.readTarget;if(g&&(f.push("angler"),d-=sa(r),S+=sa(r)),d>0&&v&&(d>14||o<a)&&M(so(e))&&(f.push("brew"),d-=so(e),S+=so(e)),d>0&&p&&M(ro)&&(f.push("karambwan"),d-=ro,S+=ro),!f.length)return;const E=this.hurtAt>=this.tick-1&&this.threatSeenAt<this.hurtAt-3,L=this.profile.play.cleanEat+.1*(s.skill-.75)-(E?.15:0)-(t?.05:0)+(this.hovering()?.08:0);if(!this.chance(L)){const k=this.rng();if(k<.15){this.say("misses the eat, tries again next tick."),this.later(1,"eat",()=>this.eatNow(t));return}k<.3&&f[0]==="angler"&&f[1]==="brew"?([f[0],f[1]]=[f[1],f[0]],this.say("fumbles the order (pot block).")):k<.5&&f.length===3?(f.length=1,this.say("only single eats.")):f.length>1&&(f.pop(),this.say("eats one short."))}for(const k of f)this.q({type:"item",slot:this.slot(k)});f.length>1&&this.say(`${["","single","double","triple"][f.length]} eats${t?" (panicking)":""}.`)}upkeep(){const t=this.me,e=t.timers,n=t.level.hitpoints>t.base.hitpoints*.65&&this.threat()<t.level.hitpoints*.6,s=this.profile.play.upkeep;if(t.level.prayer>0&&!t.prayers.has("piety")&&this.chance(Math.min(1,.5*s))&&this.q({type:"prayer",id:"piety"}),e.potion>1||this.pending("eat"))return;if((t.level.prayer<25||t.level.magic<94&&e.venge<=6||t.level.attack<t.base.attack-10)&&(n||t.level.prayer<8)&&this.has("restore")&&this.chance(Math.min(1,.6*s))){this.q({type:"item",slot:this.slot("restore")});return}n&&t.level.strength<=t.base.strength+4&&this.has("combat")&&this.chance(Math.min(1,.15*s))&&this.q({type:"item",slot:this.slot("combat")})}venge(){var a;const t=this.me,e=this.personality;if(t.vengeActive||t.timers.venge>1||t.level.magic<94||!this.has("venge_sack")){this.vengeReadyAt=-1,this.vengeLead=-1;return}this.vengeReadyAt<0&&(this.vengeReadyAt=this.tick);const n=(a=this.foe.equip.weapon)==null?void 0:a.id;if((n==="voidwaker"||n==="gmaul")&&!this.pending("venge")){const l=this.tick-this.foeWeaponSince;let c=.2+.15*Math.min(1,l/2);if(this.pidBelief||(c+=.2),c+=.35*Math.max(0,Math.min(1,(75-t.level.hitpoints)/40)),this.sees.spec>=100&&(c+=.1),this.sees.spec<50&&(c-=.4),this.foeHitNormally&&(c-=.35),c>.5&&this.chance((c-.4)*(.3+.6*e.vengeSense)*this.m("reactiveVenge"))){const h=this.rng(),u=this.profile.play.god?h<.75?0:1:h<.1*e.skill?0:h<.65?1:2;this.later(u,"venge",()=>{this.me.vengeActive||this.me.timers.venge>1||this.me.level.magic<94||(this.q({type:"cast",spell:"vengeance"}),this.say("suspects a spec: casts Vengeance."))});return}}if(this.vengeLead<0){const l={easy:.1,medium:.15,hard:.25,elite:.35,god:.65}[this.profile.level];this.vengeLead=this.chance(l)?0:this.chance(.75)?1:2}const s=this.nextAttackIn(this.foe)<=this.vengeLead,r=Math.min(.95,this.profile.play.read*1.3),o=t.level.hitpoints<=Math.max(80,this.threat()+15)||this.sees.hp<=60||this.alertUntil>=this.tick||this.tick-this.vengeReadyAt>60+Math.floor(40*e.vengeSense);this.chance((s?.25+.45*e.vengeSense:.1)*(o?1:(1-r)**2))&&(this.q({type:"cast",spell:"vengeance"}),this.say("casts Vengeance."))}tryArmourOff(){var d,f,g,v;const t=this.me,e=this.foe,n=this.personality,s=(d=e.equip.weapon)==null?void 0:d.id,r=s==="dh_axe"&&((f=e.equip.body)==null?void 0:f.id)==="dh_body"&&((g=e.equip.legs)==null?void 0:g.id)==="dh_legs"&&((v=e.equip.head)==null?void 0:v.id)==="dh_helm",o=s==="ags"&&this.sees.spec>=50;if(this.armourOffUntil>=0){(this.tick>this.armourOffUntil||!r&&!o&&this.stackAt<0)&&this.armourBackOn();return}if(this.training.length||this.comboUntil>=this.tick||this.tryVengeStackBait()||!r&&!o||this.nextAttackIn(e)>1)return;const a=r?ne(this.presumedFoe(),"dh_axe"):Math.floor(Math.floor(ne(this.presumedFoe(),"ags")*1.1)*1.25),l=Math.floor(a*.5*.75);if(a<40||l<this.sees.hp*.6||t.level.hitpoints<a*.85||!(t.vengeActive||t.timers.venge<=1&&t.level.magic>=94&&this.has("venge_sack")))return;const h=["body","legs","head"].filter(p=>t.equip[p]),u=this.freeSlots();if(!(u<2||h.length<2)&&this.chance((.3+.6*n.skill)*this.m("armourOff"))){t.vengeActive||this.q({type:"cast",spell:"vengeance"});for(const p of h.slice(0,Math.min(u,3)))this.q({type:"unequip",slot:p});this.armourOffUntil=this.tick+2,this.say(`takes its armour off with Vengeance: baiting your ${r?"axe":"AGS"} (up to ~${a}).`)}}tryVengeStackBait(){const t=this.me,e=this.foe,n=this.personality;if(this.m("vengeStackBait")<=0||Pe(e)!=="tentacle"||this.engine.tick!==e.lastAttackTick)return!1;const s=this.specWeapon();if(t.spec<50||!this.has(s)||!de(t.pos,e.pos)||!(t.vengeActive||t.timers.venge<=1&&t.level.magic>=94&&this.has("venge_sack")))return!1;const o=!!this.profile.play.god,a=s==="ags"?this.agsSpecMax():Math.floor(ne(t,"voidwaker")*1.5),l=ne(this.presumedFoe(),"tentacle");if(this.sees.hp>a*.8+Math.floor(l*.5*.75))return!1;if(o){const f=Math.floor(.75*ve(Ue(this.presumedFoe(),t,"tentacle")).reduce((v,p,m)=>v+p*m,0)*1.25),g=this.specPmf(s);if(this.sees.killChance(Bn(g),f)<.25||this.sees.killChance(g,f)<.1)return!1}if(t.level.hitpoints<l+15||this.sees.spec>=50&&t.level.hitpoints<(o?72:85))return!1;const c=["body","legs","head"].filter(f=>t.equip[f]);if(this.freeSlots()<1||!c.length)return!1;const u=this.tick+this.nextAttackIn(e)+(this.pidBelief?1:-1);if(u<=this.tick||t.timers.attack>u-this.tick+1||!this.chance((.25+.5*n.skill)*this.m("vengeStackBait")))return!1;const d=()=>{t.vengeActive||this.q({type:"cast",spell:"vengeance"});for(const f of c.slice(0,Math.min(this.freeSlots(),3)))this.q({type:"unequip",slot:f})};return this.pidBelief?this.later(1,"stack",d):d(),this.q({type:"walk"}),this.holdFireUntil=u-1,this.stackAt=u,this.armourOffUntil=u+2,this.stackWeapon=s,this.say(`sets up a Venge stack: Vengeance, armour off, and ${s==="ags"?"an AGS":"a Voidwaker"} to land with your next whip (you ~${Math.round(this.sees.hp)}).`),!0}armourBackOn(){this.armourOffUntil=-1,this.stackAt=-1;for(const t of["dh_body","dh_legs","dh_helm"]){const e=this.me.inv.findIndex(n=>(n==null?void 0:n.id)===t);e>=0&&this.q({type:"item",slot:e})}}offense(){const t=this.me,e=this.foe;if(!(this.holdFireUntil>=this.tick)&&(t.targetId!==e.id||this.usedItem&&this.chance(.5+.4*this.personality.skill))&&this.q({type:"attack",target:e.id}),this.comboUntil>=this.tick)return;if(this.orbsLeft>0){this.orbDown();return}if(this.potTrickUntil>=this.tick&&e.lastAttackTick===this.engine.tick&&t.timers.attack<=1&&this.freeSlots()>=1){this.say("you went for it: axe stack."),this.potTrickUntil=-1,this.axeHit(1);return}if(this.stackAt>=0&&this.tick>=this.stackAt){const r=this.stackWeapon,o=this.tick===this.stackAt&&t.spec>=50&&this.has(r)&&(r==="voidwaker"||this.freeSlots()>=1);if(this.stackAt=-1,o){this.say(`${r==="ags"?"AGS":"Voidwaker"} into the Venge stack.`),this.vwSingle(r);return}}if(this.stackAt>=0){t.targetId&&this.q({type:"walk"});return}const s=this.tick>=this.specsFrom;if(this.training.length){if(!s){(Pe(t)!=="tentacle"||!t.equip.shield)&&this.backToMain();return}if(this.tryTraining())return}else{if(this.tryFloorClick()||this.tryCampFloor()||s&&this.tryPotTrickCombo())return;if(s&&this.tick>=this.nextKoCheck){if(this.tryKo())return;const r=this.profile.play.koSlow;r>0&&(this.nextKoCheck=this.tick+1+Math.floor(this.rng()*r))}if(this.tryFinishingSwing()||this.tryOrbForAxe()||this.tryShowOrb()||this.tryAxeStandoff()||this.tryFakeAxe()||this.tryAxe())return}this.ringSwap(),(Pe(t)!=="tentacle"||!t.equip.shield)&&this.backToMain()}tryKo(){const t=this.me,e=this.foe,n=this.personality,s=Math.floor(t.spec/50);if(s<1||!de(t.pos,e.pos))return!1;const r=e.incoming.filter(ct=>ct.from===t.id).reduce((ct,G)=>ct+G.damage,0),o=this.sees.hp-r;if(o<=0)return!1;const a=t.timers.attack<=1,l=this.freeSlots()>=1,c=this.engine.tick-t.lastAttackTick<=1&&Pe(t)==="tentacle",h=this.engine.tick-t.lastAttackTick<=4,u=this.pidBelief,d=this.sees.ateWithin(this.engine,2);let f=u?.15:d?.3:.6;const g=this.specWeapon(),v=g==="ags"?"AGS":"Voidwaker",p=this.hitPmf("gmaul"),m=this.specPmf(g),S=Bn(p),M=Bn(m),E=[];s>=2&&l&&c&&E.push({name:"tentacle into double maul",dmg:Te(p,p),land:Te(S,S),go:()=>this.doubleMaul()});const L=["voidwaker","ags"].filter(ct=>{var G;return this.has(ct)||((G=t.equip.weapon)==null?void 0:G.id)===ct});for(const ct of L.length?L:[g]){const G=ct==="ags"?"AGS":"Voidwaker",J=this.specPmf(ct),R=Bn(J);s>=2&&l&&a&&E.push({name:`${G} into insta maul`,dmg:Te(J,p),land:Te(R,S),go:()=>this.vwMaul(ct)}),s>=2&&l&&h&&t.timers.attack<=2&&E.push({name:`insta maul into ${G}`,dmg:Te(p,J),land:Te(S,R),go:()=>this.maulVw(ct)}),s>=1&&a&&(ct==="voidwaker"||l)&&E.push({name:G,dmg:J,land:R,go:()=>this.vwSingle(ct)})}if(s>=1&&l&&c&&E.push({name:"single maul",dmg:p,land:S,go:()=>this.singleMaul()}),L.includes("voidwaker")&&t.vengeActive&&s>=1&&a&&this.nextAttackIn(e)<=1){const ct=this.specPmf("voidwaker");E.push({name:"Voidwaker timed with Vengeance",dmg:ct,land:Bn(ct),bonus:8,go:()=>this.vwSingle("voidwaker")})}let k=!1;if(this.profile.play.god&&t.vengeActive&&s>=1){const ct=this.engine.seen.find(J=>J.kind==="attack"&&J.who===e.id&&J.special),G=this.engine.seen.some(J=>J.kind==="splat"&&J.on===t.id&&(J.hit==="melee"||J.hit==="magic"));if(ct&&ct.kind==="attack"&&!G){const J=ct.weapon,N=(J==="voidwaker"?this.specPmf("voidwaker"):ve(Ue(this.presumedFoe(),t,J==="ags"?"ags":"gmaul",J==="ags"?"ags":void 0))).reduce((rt,lt,ot)=>rt+lt*ot,0),Y=Math.floor(N*.75*.8);k=!0,l&&E.push({name:"single maul",dmg:p,land:S,bonus:Y,go:()=>{this.say("specs back into your spec: its maul and your Venge land together."),this.singleMaul()}}),a&&(g==="voidwaker"||l)&&E.push({name:v,dmg:m,land:M,bonus:Y,go:()=>{this.say(`specs back into your spec: its ${v} and your Venge land together.`),this.vwSingle(g)}})}}if(this.newbie>0&&this.chance(.05*this.newbie)){const ct=E.find(G=>G.name==="Voidwaker"||G.name==="AGS");if(ct)return this.say(`specs you with the ${ct.name} on a whim (you ~${o} HP).`),ct.go(),this.nextKoCheck=this.tick+8,!0}const T=this.profile.play.whim??0;if(T>0&&o<=80&&this.chance(T)){const ct=E.filter(G=>(this.profile.combos[G.name]??0)>0&&G.name!=="tentacle into double maul"&&G.name!=="single maul");if(ct.length){const G=ct[Math.floor(this.rng()*ct.length)];return this.say(`chances a ${G.name} (you ~${o} HP).`),G.go(),this.nextKoCheck=this.tick+10,!0}}const I=this.sees.ateWithin(this.engine,1)&&this.chance(Math.min(1,this.m("punishEat"))),Q=!!this.profile.play.god&&(k||I||u&&c&&t.lastRoll>=25)&&this.chance(.75),_=Math.min(115,this.sees.likelyMax()-r+(this.sees.consumed>=3?0:this.sees.consumed===2?18:34)),b=this.pidPunishUntil>=this.tick&&this.chance(Math.min(1,this.m("pidSwapPunish"))),z=()=>this.rng()*.12*(.5+n.aggression)*(b?1.5:1),W=s>=2?u?1+.2*this.patience*this.m("specSaving"):1-Math.min(.6,.35*this.patience*this.m("specSaving")):1;k&&(f=Math.min(f,.3));const X=this.urgency(),et=E.map(ct=>{const G=this.sees.killChance(ct.dmg,r+(ct.bonus??0)),J=I?Yd(ct.dmg,_-(ct.bonus??0)):0,R=Math.max(G*(1-f),J*.9);return{...ct,kill:G,punish:I&&J*.9>G*(1-f),score:R*W+z()}}).filter(ct=>this.profile.combos[ct.name]>0).filter(ct=>!this.profile.play.god||ct.punish||this.sees.killChance(ct.land,r+(ct.bonus??0))>=.25-.1*X).filter(ct=>ct.kill>=(Q?.04:.12*(1-.65*X))||ct.punish||this.chance(.01+.02*n.aggression)),q=this.profile.play.pid*(u?-.06:.06),it=Math.min(.55,Math.max(.12,.3-.2*(n.aggression-.5)-.1*this.mood-(b?.08:0)+this.profile.koBar+q));et.some(ct=>ct.score>=it)&&(this.lastChanceAt=this.tick);const K=t.level.hitpoints>=this.threat()+12&&t.level.hitpoints>=45,vt=Q&&K?Math.min(it,.05):X>0&&K?Math.max(.04,it-.2*X):it,ft=et.filter(ct=>ct.score>=vt);if(!ft.length||t.level.hitpoints<=this.threat()*.8&&Math.max(...ft.map(ct=>ct.score))<.5||!this.chance((.5+.4*n.skill)*this.profile.koFocus))return!1;let Ot=ft[Math.floor(this.rng()*ft.length)];if(!this.chance(.2)){const ct=ft.map(J=>J.score*(this.taste[J.name]??1)*(this.profile.combos[J.name]??1));let G=this.rng()*ct.reduce((J,R)=>J+R,0);Ot=ft.find((J,R)=>(G-=ct[R])<=0)??ft[0]}return this.lastChanceAt=this.tick,this.say(`goes for ${Ot.name} (you ~${o} HP${Ot.punish?`, you just ate: ~${_} at most`:""}, ${Math.round(Ot.kill*100)}% if you don't eat${u?", it has PID":""}${Ot.score<it?Q?", a moment to use":", using its spec before the fight runs dry":""}).`),Ot.go(),this.nextKoCheck=this.tick+3+Math.floor(this.rng()*3),!0}tryTraining(){const t=this.me,e=this.foe;if(!this.training.length||this.tick<this.nextTrainAt||this.engine.order[0]!==t.id||!de(t.pos,e.pos)||this.freeSlots()<1)return!1;const n=this.hitPmf("gmaul"),s=this.specPmf("voidwaker"),r={"Voidwaker into insta maul":{ok:t.timers.attack<=1,dmg:Te(s,n),go:()=>this.vwMaul("voidwaker",!1)},"insta maul into Voidwaker":{ok:this.engine.tick-t.lastAttackTick<=4&&t.timers.attack<=2,dmg:Te(n,s),go:()=>this.maulVw("voidwaker")},"tentacle into double maul":{ok:this.engine.tick===t.lastAttackTick&&Pe(t)==="tentacle"&&this.worthDoubleMaul(n),dmg:Te(n,n),go:()=>this.doubleMaul(!0)},"AGS into insta maul":{ok:t.timers.attack<=1&&this.has("ags"),dmg:Te(this.specPmf("ags"),n),go:()=>this.vwMaul("ags",!1,!0)}},o=this.training.filter(c=>r[c].ok);if(!o.length)return!1;const a=o[Math.floor(this.rng()*o.length)];t.spec=100;const l=e.level.hitpoints;return this.say(`training: ${a} (it has PID, you ~${Math.round(this.sees.hp)} HP).`),r[a].go(),this.nextTrainAt=this.tick+30+Math.floor(this.rng()*18)+Math.floor(this.rng()*18),this.nextKoCheck=this.tick+6,this.trainCheck={at:this.tick+5,label:Rr.find(c=>c.id===a).label,hp:l},!0}worthDoubleMaul(t){if(this.me.lastRoll<=0)return!1;const e=this.foe.incoming.filter(r=>r.from===this.me.id).reduce((r,o)=>r+o.damage,0),n=this.sees.killChance(Te(t,t),e),s=Math.max(0,this.tick-this.nextTrainAt);return this.chance(Math.min(1,n/.2+s/40))}tryHailMary(){if(this.m("hailMary")<=0||this.training.length||this.hailMary||this.comboUntil>=this.tick||this.orbsLeft>0)return!1;const t=this.me,e=this.foe,n=this.personality;if(!this.pidBelief||!this.has("orb")||!this.has("dh_axe")||!this.has("tab")||this.freeSlots()<1||t.specTeleportLock>0||this.neverTab||!de(t.pos,e.pos))return!1;const s=t.inv.filter(h=>h&&(h.id==="angler"||h.id==="karambwan")).length,r=this.personality.caution>.65?4:this.personality.risk>.6?2:3;if(!(this.mySpecs>=2&&this.foeSpecs>=2&&s<=r+2||s<=1))return!1;const o=t.level.hitpoints;let a=this.rng()<.5?1:10;a=Math.max(a,11);const l=o>a?Math.min(4,Math.ceil((o-a)/10)):0;if(this.nextAttackIn(e)<l+2||t.timers.attack>l+1)return!1;const c=this.axeKoChance(o-l*10);return c<.03||!this.chance((.3+.5*n.skill)*Math.min(1,c/.2)*this.m("hailMary"))?!1:(this.hailMary=!0,this.hailMaryAt=this.tick,this.say(`Hail Mary: you're on your timer, it has PID: orbs down to ~${Math.max(1,o-l*10)}, axes and tabs out.`),l>0?(this.orbsLeft=l,this.orbAxeUntil=this.tick+l+3,this.orbDown()):this.axeHit(1),!0)}tryTab(){if(this.neverTab||this.training.length||!this.has("tab")||this.comboUntil>=this.tick||this.me.specTeleportLock>0)return!1;const t=this.me,e=this.personality,n=t.inv.filter(c=>c&&(c.id==="angler"||c.id==="karambwan")).length,s=t.inv.reduce((c,h)=>c+((h==null?void 0:h.id)==="brew"?h.doses??0:0),0),r=n===0,o=this.mySpecs>=2&&this.foeSpecs>=2,a=n+Math.min(s,n)*.5,l=e.caution>.65?4:e.risk>.6?2:3;if(!r&&!(o&&a<l))return!1;if(this.profile.play.god&&!this.lastGasp&&t.spec>=50&&t.level.hitpoints>=this.threat()+12){this.lastGasp=!0,this.forceUrgency=1;const c=this.tryKo();if(this.forceUrgency=0,c)return!0}return this.q({type:"item",slot:this.slot("tab")}),this.tabbing=!0,this.tabbingAt=this.tick,this.say(r?"is out of food: tabs out.":`both specs used and only ${a} eat${a===1?"":"s"} left: tabs out to reset.`),!0}reportTraining(){const t=this.trainCheck,e=this.foe;!t||!e||(this.trainCheck=null,this.armourOffUntil=-1,this.orbAxeUntil=-1,this.nextShowOrb=0,this.nextCampFloor=0,this.foeHasAgs=!1,this.mySpecs=0,this.foeSpecs=0,this.tabbing=!1,this.hailMary=!1,this.lastEatAt=-100,this.readAt=-1,this.stackAt=-1,this.onTraining(e.dead||e.level.hitpoints<=0?`Training: the ${t.label} KO'd you.`:`Training: you survived the ${t.label} (${t.hp} → ${e.level.hitpoints} HP).`))}armed(){var e;const t=this.me;return!this.ringRemembers||((e=t.equip.ring)==null?void 0:e.id)!=="ultor"&&!this.has("ultor")?t:{...t,equip:{...t.equip,ring:{id:"ultor"}}}}hitPmf(t){const e=this.armed(),n={...e.equip,weapon:{id:t}};Yt[t].twoHanded&&delete n.shield;const s={...e,equip:n},r=fl(ul(s),dl(this.presumedFoe(),Nn(s).type)),o=Gr(s),a=new Array(o+1).fill(r/Math.max(1,o));return a[0]=1-r,a}vwPmf(){const t=ne(this.armed(),"voidwaker"),e=Math.floor(t*.5),n=Math.floor(t*1.5),s=new Array(n+1).fill(0);for(let r=Math.max(1,e);r<=n;r++)s[r]=1/(n-Math.max(1,e)+1);return s}clean(){return this.chance(.75+.25*this.personality.skill-.4*(this.profile.play.sloppy??0))}specWeapon(){var e;const t=(e=this.me.equip.weapon)==null?void 0:e.id;return t==="voidwaker"||t==="ags"?t:this.has("voidwaker")||!this.has("ags")?"voidwaker":"ags"}specPmf(t){return t==="ags"?ve(Ue(this.armed(),this.presumedFoe(),"ags","ags")):this.vwPmf()}vwMaul(t,e=!0,n=!1){if(this.comboUntil=this.tick+3,this.wield(t),e&&this.chance((.12*(1-this.personality.aggression)+.05)*this.m("fakeVoidwaker"))){this.say("…fakes it."),this.later(1,"combo",()=>this.backToMain());return}this.q({type:"spec"}),this.q({type:"attack",target:this.foe.id}),this.later(1,"combo",()=>{if(!n&&!this.clean()){this.say("is a tick late with the maul."),this.later(1,"combo",()=>this.maulSpec(1));return}this.maulSpec(1)}),this.later(3,"combo",()=>{!this.maybeAxeFollow()&&!this.maybeOrbDown()&&this.backToMain()})}doubleMaul(t=!1){if(!t&&this.newbie>0){this.comboUntil=this.tick+4,this.say("...slowly."),this.later(1,"combo",()=>this.maulSpec(1)),this.later(2,"combo",()=>{this.me.spec>=50&&this.maulSpec(1)}),this.later(3,"combo",()=>this.newbieAfterMaul());return}this.comboUntil=this.tick+2,this.wield("gmaul");const e=t||this.clean()?3:2;for(let n=0;n<e;n++)this.q({type:"spec"});e===2&&this.later(1,"combo",()=>this.q({type:"spec"})),this.later(2,"combo",()=>{!this.maybeAxeFollow()&&!this.maybeOrbDown()&&this.backToMain()})}maulVw(t){this.comboUntil=this.tick+3,this.maulSpec(1),this.later(1,"combo",()=>{const e=this.me,n=this.foe,s=n.incoming.filter(l=>l.from===e.id).reduce((l,c)=>l+c.damage,0),r=this.sees.hp-s,o=this.specPmf(t).length-1,a=t==="ags"?"AGS":"Voidwaker";if(this.has(t)&&this.wield(t),e.spec<50||r>o*.9){this.say(`maul hit ${e.lastRoll}: grabs the ${a}, but no spec off that.`),this.later(1,"combo",()=>{this.maybeAxeFollow()||this.backToMain()});return}this.say(`maul hit ${e.lastRoll}: ${a} follows (you ~${r}).`),this.q({type:"spec"}),this.q({type:"attack",target:n.id}),this.later(2,"combo",()=>{!this.maybeAxeFollow()&&!this.maybeOrbDown()&&this.backToMain()})})}maybeAxeFollow(){const t=this.me,e=this.foe;if(this.training.length||!this.has("dh_axe")||this.freeSlots()<1||t.timers.attack>2||!de(t.pos,e.pos))return!1;const n=e.incoming.filter(o=>o.from===t.id).reduce((o,a)=>o+a.damage,0),s=this.sees.hp-n;if(s<=0||ne(t,"dh_axe")<s+3)return!1;const r=Ne([ve(Ue(this.armed(),this.presumedFoe(),"dh_axe"))],Math.max(1,Math.round(s)));return this.chance(Math.min(1,(.25+r)*this.profile.play.aware*(.6+.4*this.personality.skill)))?(this.say(`follows up with the axe (you ~${Math.round(s)}, ${Math.round(r*100)}% to KO).`),this.axeHit(1),!0):!1}maybeOrbDown(){const t=this.me,e=this.foe,n=this.personality;if(this.training.length||!this.has("dh_axe")||this.freeSlots()<1||!de(t.pos,e.pos))return!1;const s=e.incoming.filter(u=>u.from===t.id).reduce((u,d)=>u+d.damage,0),r=this.sees.hp-s;if(r<=0)return!1;const o=this.nextAttackIn(e);if(o<2)return!1;const a=this.has("orb")?Math.min(3,o-2):0;let l={k:0,ko:this.axeKoChance(t.level.hitpoints)};for(let u=1;u<=a;u++){const d=t.level.hitpoints-10*u;if(d<12)break;const f=this.axeKoChance(d);f>l.ko+.05*(u-l.k)&&(l={k:u,ko:f})}const{k:c,ko:h}=l;return h<.15||!this.chance(Math.min(1,(.5+1.5*h)*(.4+.6*this.profile.play.aware)*(.6+.4*n.risk)*this.m("orbAfterCombo")))?!1:c===0?(this.say(`you're on your attack timer (~${o} ticks): axes you now (you ~${Math.round(r)}, ${Math.round(h*100)}%).`),this.axeHit(1),!0):(this.orbsLeft=c,this.orbAxeUntil=this.tick+c+3,this.say(`you're on your attack timer (~${o} ticks): orbs down ${c}x, then the axe (you ~${Math.round(r)}, ${Math.round(h*100)}%).`),this.orbDown(),!0)}tryFakeAxe(){const t=this.me,e=this.foe,n=this.personality;if(!this.has("dh_axe")||this.freeSlots()<1||!de(t.pos,e.pos)||t.level.hitpoints>t.base.hitpoints*.85||t.level.hitpoints<=this.threat()+5)return!1;const s=1+.5*this.foeRushes;return this.tick<this.nextFakeAxe||this.nextAttackIn(e)>2||!this.chance((.02+.04*(n.aggression+n.risk)/2)*s*this.m("fakeAxe"))?!1:(this.nextFakeAxe=this.tick+12+Math.floor(this.rng()*20),this.waitWithAxe("pulls out the axe and waits for you to hit..."),!0)}waitWithAxe(t){const e=this.engine.tick;this.comboUntil=this.tick+3,this.holdFireUntil=this.tick+2,this.wield("dh_axe"),this.say(t);const n=s=>{this.foe.lastAttackTick>e&&this.me.timers.attack<=1?(this.say("you hit: it stacks the axe."),this.holdFireUntil=-1,this.axeHit(1)):s&&(this.say("...gives up the fake."),this.holdFireUntil=-1,this.backToMain())};this.later(1,"combo",()=>n(!1)),this.later(2,"combo",()=>{Pe(this.me)==="dh_axe"&&this.holdFireUntil>=0&&n(!0)})}tryAxeStandoff(){const t=this.me,e=this.foe,n=this.personality;if(this.foeAxeShownAt<0||this.tick-this.foeAxeShownAt>2||this.tick<this.nextFakeAxe||!this.has("dh_axe")||this.freeSlots()<1||!de(t.pos,e.pos)||t.level.hitpoints<=this.threat()+5)return!1;const s=this.rng(),r=(.06+.12*(1-n.skill))*(1-.25*this.foeFakes)*this.m("axeStandoff"),o=(.2+.25*n.skill+.1*this.foeFakes)*this.m("axeStandoff");return s<r&&t.timers.attack<=1?(this.nextFakeAxe=this.tick+12,this.say("sees your axe and rushes its own axe."),this.axeHit(1),!0):s<r+o?(this.nextFakeAxe=this.tick+12,this.waitWithAxe("sees your axe: pulls its own and waits for you to hit first."),!0):!1}tryFloorClick(){const t=this.me,e=this.personality;if(!this.sees.vengeUp||this.tick<this.nextFloorClick||t.timers.attack>1)return!1;const n=t.level.hitpoints<60?1:.4;return this.chance((.1+.25*e.skill)*n*this.m("floorClick"))?(this.nextFloorClick=this.tick+10,this.holdFireUntil=this.tick+1+Math.floor(this.rng()*2),this.q({type:"walk"}),this.say("doesn't hit into your Vengeance (clicks the floor)."),!0):!1}tryCampFloor(){var a;const t=this.me,e=this.foe,n=this.profile.play.pid;if(n<=0||this.pidBelief||this.tick<this.nextCampFloor||t.timers.attack>1||!de(t.pos,e.pos))return!1;const s=(a=e.equip.weapon)==null?void 0:a.id,r=s==="dh_axe"||(s==="gmaul"||s==="voidwaker"||s==="ags")&&this.sees.spec>=50,o=t.level.hitpoints<55&&this.sees.hp<60;return!r&&!o||!this.chance(.3*n*this.m("campFloor"))?!1:(this.nextCampFloor=this.tick+6+Math.floor(this.rng()*6),this.holdFireUntil=this.tick+1+Math.floor(this.rng()*2),this.q({type:"walk"}),this.say("no PID: camps the floor (doesn't trade into your hit first)."),!0)}tryPotTrickCombo(){var c;const t=this.me,e=this.foe,n=this.personality,s=t.level.hitpoints;if(s<28||s>47||t.spec<50||this.tick<this.nextMindGame||this.lowPlayDone||!this.has("gmaul")||!this.has("dh_axe")||this.freeSlots()<1||t.timers.potion>1||this.engine.tick-t.lastAttackTick>4||!de(t.pos,e.pos)||s<=ne(this.presumedFoe(),((c=e.equip.weapon)==null?void 0:c.id)??"tentacle")*.7)return!1;const r=this.has("combat")?"combat":this.has("restore")?"restore":null,o=this.sees.hp,a=ne(t,"gmaul")*(t.spec>=100?2:1)+ne(t,"dh_axe");if(!r||o>a*.6||this.pending("eat")||this.lastEatAt>=this.tick)return!1;if(this.profile.play.god){const h=Bn(this.hitPmf("gmaul")),u=Bn(this.hitPmf("dh_axe")),d=t.spec>=100?[this.hitPmf("gmaul"),this.hitPmf("gmaul"),this.hitPmf("dh_axe")]:[this.hitPmf("gmaul"),this.hitPmf("dh_axe")];if(this.sees.killChance(t.spec>=100?Te(Te(h,h),u):Te(h,u))<.25||this.sees.killChance(d.reduce(Te))<.06)return!1}if(!this.chance((.12+.25*n.aggression)*this.m("potTrickCombo")))return!1;this.nextMindGame=this.tick+30+Math.floor(this.rng()*30),this.comboUntil=this.tick+4,this.q({type:"item",slot:this.slot(r)}),this.lowPlayDone=!0,this.say(`pot tricks at ${s} HP, then maul into axe.`);const l=t.spec>=100&&this.chance(.6);return this.later(1,"combo",()=>{this.wield("gmaul");for(let h=0;h<(l?3:1);h++)this.q({type:"spec"})}),this.later(2,"combo",()=>{if(this.me.timers.attack>1){this.backToMain();return}this.wield("dh_axe"),this.q({type:"attack",target:this.foe.id})}),this.later(4,"combo",()=>this.backToMain()),!0}tryPotTrick(){const t=this.me,e=this.personality,n=t.timers,s=t.level.hitpoints,r=t.base.hitpoints;if(s<r*.35||s>r*.62||s<=this.threat()+5||n.potion>1||this.lowPlayDone||!this.has("dh_axe")||this.freeSlots()<1)return!1;const o=this.has("combat")?"combat":this.has("restore")?"restore":null;return!o||this.tick<this.nextMindGame||!this.chance((.05+.15*(e.risk+e.aggression)/2)*this.m("potTrick"))?!1:(this.nextMindGame=this.tick+25+Math.floor(this.rng()*40),this.q({type:"item",slot:this.slot(o)}),this.potTrickUntil=this.tick+3,this.lowPlayDone=!0,this.say(`pot tricks at ${s} HP (looks like eating).`),!0)}singleMaul(){if(this.newbie>0){const t=1+Math.floor(this.rng()*2);this.comboUntil=this.tick+t+2,this.wield("gmaul"),this.later(t,"combo",()=>{this.me.spec>=50&&this.q({type:"spec"})}),this.later(t+1,"combo",()=>this.newbieAfterMaul());return}this.comboUntil=this.tick+2,this.maulSpec(1),this.later(2,"combo",()=>{this.maybeAxeFollow()||this.backToMain()})}newbieAfterMaul(){var t;if(((t=this.me.equip.weapon)==null?void 0:t.id)==="gmaul"&&this.chance(.4)){this.comboUntil=this.tick+6,this.say("keeps hitting you with the maul."),this.q({type:"attack",target:this.foe.id}),this.later(5+Math.floor(this.rng()*4),"combo",()=>this.backToMain());return}this.backToMain()}vwSingle(t){if(this.newbie>0&&!this.training.length){const e=1+Math.floor(this.rng()*3);this.comboUntil=this.tick+e+2,this.wield(t),this.later(e,"combo",()=>{var n;((n=this.me.equip.weapon)==null?void 0:n.id)!==t||this.me.spec<50||(this.q({type:"spec"}),this.q({type:"attack",target:this.foe.id}))}),this.later(e+2,"combo",()=>this.backToMain());return}this.comboUntil=this.tick+2,this.wield(t),this.q({type:"spec"}),this.q({type:"attack",target:this.foe.id}),this.later(2,"combo",()=>{this.maybeAxeFollow()||this.backToMain()})}maulSpec(t){this.wield("gmaul");for(let e=0;e<t;e++)this.q({type:"spec"})}tryAxe(){var c,h;const t=this.me,e=this.foe,n=this.personality;if(!this.has("dh_axe")||this.freeSlots()<1||t.timers.attack>1||!de(t.pos,e.pos))return!1;const s=t.base.hitpoints,r=t.level.hitpoints,o=this.sees.spec>=50&&(((c=e.equip.weapon)==null?void 0:c.id)==="gmaul"||((h=e.equip.weapon)==null?void 0:h.id)==="voidwaker");if(t.vengeActive&&this.nextAttackIn(e)<=0&&this.chance((.2+.35*n.vengeSense)*this.m("vengeAxeStack")))return this.say("stacks the DH axe with Vengeance."),this.axeHit(1),!0;const a=1-r/s;return(this.campLowUntil>=this.tick?this.lowAxeWindow(!0):this.lowAxeWindow()&&this.chance((.05+.2*n.risk)*a*2*this.m("lowHpAxe")))?(this.campLowUntil=-1,this.lowPlayDone=!0,this.say(`risks a DH hit at ${r} HP.`),this.axeHit(1),!0):r>=s*.85&&!o&&this.sees.spec<50&&n.risk>.55&&this.has("orb")&&this.chance(.015*n.risk*this.m("orbDown"))?(this.orbsLeft=2+Math.floor(this.rng()*3),this.say("orbs down for a DH hit."),this.orbDown(),!0):!1}lowAxeWindow(t=!1){var l,c;const e=this.me,n=this.foe,s=this.personality,r=e.level.hitpoints,o=e.base.hitpoints;return!(this.sees.spec>=50&&(((l=n.equip.weapon)==null?void 0:l.id)==="gmaul"||((c=n.equip.weapon)==null?void 0:c.id)==="voidwaker"))&&(t||!this.lowPlayDone)&&this.nextAttackIn(n)>=(t?1:2)&&this.has("dh_axe")&&this.freeSlots()>=1&&de(e.pos,n.pos)&&r<o*(.45+.15*s.risk)&&r>this.lowAxeFloor()}lowAxeFloor(){var t;return ne(this.presumedFoe(),((t=this.foe.equip.weapon)==null?void 0:t.id)??"tentacle")*.6}orbDown(){const t=this.orbAxeUntil>=this.tick;if(!t&&this.me.level.hitpoints<=this.threat()+12){this.orbsLeft=0;return}if(this.q({type:"item",slot:this.slot("orb")}),--this.orbsLeft===0){const e=Math.max(1,this.me.timers.attack-1);t&&(this.orbAxeUntil=this.tick+e+1),this.later(e,"combo",()=>{(this.me.timers.attack<=1||t)&&this.axeHit(1)})}}tryShowOrb(){var a;const t=this.me,e=this.foe,n=this.personality;if(!this.has("orb")||t.level.hitpoints<t.base.hitpoints-6||this.tick<this.nextShowOrb)return!1;const s=(a=e.equip.weapon)==null?void 0:a.id;if(this.alertUntil>=this.tick||this.hurtAt>=this.tick-3||s&&s!=="tentacle")return!1;const r=this.highSince>=0&&this.tick-this.highSince>=5+Math.round(4*(1-n.risk));if(!this.chance((.04+.06*n.risk+(r?.2:0))*this.m("orbDown")))return!1;const o=t.level.hitpoints>=95&&!r&&this.chance(.4)?2:1;return t.level.hitpoints-10*o<=this.agsFloor()+4?!1:(this.nextShowOrb=this.tick+40,this.q({type:"item",slot:this.slot("orb")}),o===2&&this.later(1,"orb",()=>{this.has("orb")&&this.q({type:"item",slot:this.slot("orb")})}),this.say(`at ${t.level.hitpoints} HP with nothing going on: orbs down to ~${t.level.hitpoints-10*o} (not safing).`),!0)}tryFinishingSwing(){const t=this.me,e=this.foe;if(t.timers.attack>1||!this.has("dh_axe")||this.freeSlots()<1||!de(t.pos,e.pos))return!1;const n=e.incoming.filter(a=>a.from===t.id).reduce((a,l)=>a+l.damage,0),s=this.presumedFoe(),r=this.sees.killChance(ve(Ue(this.armed(),s,"dh_axe")),n);if(r<.1)return!1;const o=this.sees.killChance(ve(Ue(t,s,"tentacle")),n);return r<o+.03||!this.chance(Math.min(1,.3+.7*this.profile.play.aware))?!1:(this.say(`one swing to finish you (~${Math.round(this.sees.hp-n)}): the axe (${Math.round(r*100)}%) over the whip (${Math.round(o*100)}%).`),this.axeHit(1),!0)}tryOrbForAxe(){const t=this.me,e=this.foe,n=this.personality;if(!this.has("orb")||!this.has("dh_axe")||this.freeSlots()<1||!de(t.pos,e.pos)||this.tick<this.nextMindGame)return!1;const s=t.level.hitpoints;if(s<35||this.engine.tick-this.foeSwingTick>1||this.foeSwingSpeed<6)return!1;const r=this.sees.spec>=50;if(r&&!this.chance(.25*n.risk))return!1;const o=this.rng();let a=o<.15+.25*n.risk?1:o<.5?10:o<.8?20:30;r&&(a=Math.max(a,30)),a=Math.max(a,11);const l=Math.max(1,Math.min(4,Math.ceil((s-a)/10)));if(this.nextAttackIn(e)<l+2)return!1;const c=this.axeKoChance(s-l*10);return c<.03||!this.chance((.15+.35*n.risk+.15*n.skill)*Math.min(1,c/.25)*this.m("orbDown"))?!1:(this.nextMindGame=this.tick+30+Math.floor(this.rng()*30),this.orbsLeft=l,this.orbAxeUntil=this.tick+l+3,this.say(`you just swung: orbs down to ~${Math.max(1,s-l*10)} for a big axe.`),this.orbDown(),!0)}axeKoChance(t){const e=this.armed(),n={...e,level:{...e.level,hitpoints:Math.max(1,t)}},s=Math.max(1,Math.round(this.sees.hp));if(ne(n,"dh_axe")<s+3)return 0;const r=[ve(Ue(n,this.presumedFoe(),"dh_axe"))];return .65*Ne(r,s)+.35*Ne(r,s+22)}axeHit(t){var n;const e=Yt.dh_axe.speed;if(!this.hailMary&&this.newbie>0&&((n=this.me.equip.weapon)==null?void 0:n.id)!=="dh_axe"&&this.chance(.8*this.newbie)){const s=1+Math.floor(this.rng()*2);this.comboUntil=this.tick+s+(t-1)*e+2,this.wield("dh_axe"),this.later(s,"combo",()=>{var r;((r=this.me.equip.weapon)==null?void 0:r.id)==="dh_axe"&&(this.q({type:"attack",target:this.foe.id}),this.later(1,"combo",()=>this.maybeMaulAfterAxe()),this.later((t-1)*e+2,"combo",()=>this.backToMain()))});return}if(this.comboUntil=this.tick+(t-1)*e+2,this.wield("dh_axe"),this.q({type:"attack",target:this.foe.id}),this.hailMary){this.hailMary=!1,this.later(1,"combo",()=>{this.has("tab")&&(this.q({type:"item",slot:this.slot("tab")}),this.tabbing=!0,this.tabbingAt=this.tick,this.say("...and tabs out before you can hit back."))});return}this.later(1,"combo",()=>this.maybeMaulAfterAxe()),this.later((t-1)*e+2,"combo",()=>this.backToMain())}maybeMaulAfterAxe(){const t=this.me,e=this.foe;if(Pe(t)!=="dh_axe"||t.spec<50||this.freeSlots()<1)return;const n=e.incoming.filter(r=>r.from===t.id).reduce((r,o)=>r+o.damage,0),s=this.sees.hp-n;s>ne(t,"gmaul")*.8||!this.chance((.2+.3*this.personality.aggression)*this.m("maulAfterAxe"))||(this.say(`hit ${t.lastRoll} with the axe: tries a maul after (you: ~${s} HP).`),this.comboUntil=this.tick+3,this.wield("gmaul"),this.later(1,"combo",()=>this.q({type:"spec"})),this.later(3,"combo",()=>this.backToMain()))}follow(){const t=this.me,e=this.foe;if(de(t.pos,e.pos)){this.outOfRangeSince=-1;return}this.outOfRangeSince<0&&(this.outOfRangeSince=this.tick,this.followDelay=1+Math.floor(this.rng()*3)),this.tick-this.outOfRangeSince>=this.followDelay&&this.q({type:"walk",to:gd(t.pos,e.pos),keepTarget:!0})}}const jd=6,Zd=10,Hn={gmaul:50,voidwaker:50,tentacle:50,ags:50,elder_maul:50,nox_halberd:50},Jd=5,ec=i=>{var t,e;return((e=Yt[((t=i.equip.weapon)==null?void 0:t.id)??"tentacle"])==null?void 0:e.range)??1},Qd=i=>Math.ceil(i/5),nc=3,ii={maulSpec:340,tentacleSpec:341,voidwakerSpec:2834,agsSpec:1211,elderSpec:2804,elderImpact:2805,halberdSpec:2930},tf=8,ef=5;class nf{constructor(t,e,n,s={}){A(this,"seen",[]);A(this,"tick",0);A(this,"order");A(this,"nextShuffle");A(this,"queues");A(this,"deathTimer",0);A(this,"opts");A(this,"fixedPid",null);A(this,"dying",[]);this.players=t,this.events=e,this.reset=n,this.opts={pidRange:[40,60],rng:Math.random,...s},this.order=Object.keys(t),this.queues=Object.fromEntries(this.order.map(r=>[r,[]])),this.shuffle(),this.nextShuffle=this.nextShuffleTick(),this.placeAtStart()}nextShuffleTick(){const[t,e]=this.opts.pidRange;return this.tick+t+Math.floor(this.opts.rng()*(e-t+1))}setFixedPid(t){this.fixedPid=t,t&&this.order[0]!==t&&(this.order.reverse(),this.events.pidChanged(this.order[0]))}shuffle(){this.fixedPid||(this.opts.rng()<.5&&this.order.reverse(),this.events.pidChanged(this.order[0]))}queue(t,e){this.queues[t].push(e)}other(t){return this.players[this.order.find(e=>e!==t)]}step(){var n,s;if(this.tick++,this.seen.length=0,this.announceDeaths(),this.deathTimer>0){--this.deathTimer===0&&(this.reset(),this.events.respawn(),this.placeAtStart());for(const r of this.order)this.queues[r].length=0;return}this.tick>=this.nextShuffle&&(this.shuffle(),this.nextShuffle=this.nextShuffleTick());const t=new Map;for(const r of this.order)t.set(r,this.clicks(this.players[r]));for(const r of this.order)this.act(this.players[r],t.get(r));for(const r of this.order){const o=this.players[r];if(o.teleporting>0&&o.level.hitpoints>0&&--o.teleporting===0){for(const a of Object.values(this.players))a.targetId=null;(s=(n=this.events).teleported)==null||s.call(n,r),this.events.message(r==="you"?"You teleport out of the fight.":`${o.name} teleports out of the fight.`),this.deathTimer=4}}const e=this.order.filter(r=>this.players[r].level.hitpoints<=0&&!this.players[r].dead);for(const r of e)this.players[r].dead=!0;if(e.length){for(const r of Object.values(this.players))r.targetId=null;this.dying=e,this.deathTimer=jd}}announceDeaths(){for(const t of this.dying.splice(0))this.events.death(t),this.events.message(t==="you"?"Oh dear, you are dead!":`You have defeated ${this.players[t].name}.`)}sinkFor(t){return{msg:e=>this.tell(t,e),anim:e=>{e==="eat"||e==="drink"?this.seen.push({kind:"consume",who:t.id}):e==="cast"&&this.seen.push({kind:"cast",who:t.id}),this.events.anim(t.id,e)},splat:e=>{this.seen.push({kind:"splat",on:t.id,damage:e,hit:"orb"}),this.events.hit(t.id,{from:t.id,damage:e,kind:"orb"})},sound:e=>{var n,s;return(s=(n=this.events).sound)==null?void 0:s.call(n,t.id,e)}}}tell(t,e){t.id==="you"&&this.events.message(e)}clicks(t){var o;const e={maul:0,clickedOpponent:!1};if(t.dead)return e;if(t.teleporting>0)return Zl(t,this.sinkFor(t)),this.queues[t.id].length=0,e;const n=this.sinkFor(t);Zl(t,n),this.poisonTick(t),t.maulReady&&this.tick>t.maulWindowUntil&&(t.maulReady=0,t.specArmed=!1);const s=(o=t.equip.weapon)==null?void 0:o.id,r=!!s&&!!Yt[s].spec;for(const a of this.queues[t.id].splice(0,Zd)){if(a.type==="spec"){if(!r)continue;if(Pe(t)==="gmaul"){e.maul++;continue}this.toggleSpec(t);continue}a.type==="attack"&&(e.clickedOpponent=!0),Ld(t,a,n)}return e}act(t,e){if(t.dead)return;t.teleporting>0&&(t.incoming.length=0);const n=t.incoming.filter(l=>!l.delay);t.incoming=t.incoming.filter(l=>l.delay).map(l=>({...l,delay:l.delay-1}));for(const l of n)this.applyHit(t,l);if(t.level.hitpoints<=0||t.teleporting>0)return;let s=this.resolveMaul(t,e.maul,e.clickedOpponent);this.move(t);const r=t.targetId?this.players[t.targetId]:null,o=!!r&&!r.dead&&r.level.hitpoints>0&&no(t.pos,r.pos,ec(t)),a=t.timers.attack<=0;!s&&o&&Pe(t)==="gmaul"&&t.specArmed&&(e.clickedOpponent||a)&&(s=this.fireMaul(t,r,t.maulReady>0&&this.tick<=t.maulWindowUntil?2:1)),!s&&o&&a&&this.attack(t,r)}toggleSpec(t){if(Pe(t)==="nox_halberd"){this.virulence(t);return}const e=Hn[Pe(t)];if(!e){this.tell(t,"This weapon has no special attack.");return}if(!t.specArmed&&t.spec<e){this.tell(t,"You do not have enough special attack energy left.");return}t.specArmed=!t.specArmed}virulence(t){if(t.poison<=0&&t.venom<=0){this.tell(t,"You can only use this special attack whilst you are poisoned.");return}if(t.spec<Hn.nox_halberd){this.tell(t,"You do not have enough special attack energy left.");return}t.spec-=Hn.nox_halberd,t.virulence=t.venom>0?t.venom:Qd(t.poison),t.venom=0,t.poison=0,t.specTeleportLock=io+1,this.events.anim(t.id,"virulence"),this.events.graphic(t.id,ii.halberdSpec)}resolveMaul(t,e,n){if(Pe(t)!=="gmaul")return!1;const s=t.targetId??t.lastTarget,r=s?this.players[s]:null,o=!!r&&!r.dead&&de(t.pos,r.pos)&&this.tick-t.lastAttackTick<=Jd,a=t.maulReady>0&&this.tick<=t.maulWindowUntil;return e>=3&&o?this.fireMaul(t,r,2):e===2||e>=3&&!o?t.spec<Hn.gmaul?(this.tell(t,"You do not have enough special attack energy left."),!1):(t.maulReady=2,t.maulWindowUntil=this.tick+nc,t.specArmed=!0,n&&r&&de(t.pos,r.pos)?this.fireMaul(t,r,2):!1):e===1?a&&o?this.fireMaul(t,r,2):o?this.fireMaul(t,r,1):a?!1:!t.specArmed&&t.spec<Hn.gmaul?(this.tell(t,"You do not have enough special attack energy left."),!1):t.specArmed?(t.maulReady=2,t.maulWindowUntil=this.tick+nc,n&&r&&de(t.pos,r.pos)?this.fireMaul(t,r,2):!1):(t.specArmed=!0,n&&r&&de(t.pos,r.pos)?this.fireMaul(t,r,1):!1):!1}get busy(){return this.deathTimer>0||this.dying.length>0}cancelPending(){this.deathTimer=0,this.dying=[];for(const t of this.order)this.queues[t].length=0}placeAtStart(){const[t,e]=Object.keys(this.players),n={[t]:{x:7,y:7},[e]:{x:7,y:8}};for(const[s,r]of Object.entries(this.players))r.pos={...n[s]??{x:7,y:7}},r.dest=null,r.moved=0}move(t){if(t.moved=0,t.steps=[],this.tick<t.frozenUntil)return;const e=t.targetId?this.players[t.targetId]:null;for(let n=0;n<(t.running?2:1);n++){let s;if(e&&!e.dead){const r=ec(t);if(no(t.pos,e.pos,r)){t.dest=null;break}t.autoFollow?(s=gr(t.pos,o=>no(o,e.pos,r)),t.dest=s!=null&&s.length?s[s.length-1]:null):s=t.dest?gr(t.pos,o=>Yl(o,t.dest)):null}else s=t.dest?gr(t.pos,r=>Yl(r,t.dest)):null;if(!t.dest||!(s!=null&&s.length)){t.dest=null;break}t.pos=s[0],t.steps.push({...t.pos}),t.moved++}}fireMaul(t,e,n){const s=Math.min(n,Math.floor(t.spec/Hn.gmaul));if(s<=0)return this.tell(t,"You do not have enough special attack energy left."),!1;for(let r=0;r<s;r++){t.spec-=Hn.gmaul;const o=eo(t,e,this.opts.rng);e.incoming.push({from:t.id,damage:o.damage,kind:"melee",special:!0,smite:t.prayers.has("smite"),max:o.maxed}),this.rolled(t,o.damage)}t.specTeleportLock=io+1,t.targetId=e.id,t.lastAttackTick=this.tick,t.lastTarget=e.id,t.specArmed=!1,t.maulReady=0;for(let r=0;r<s;r++)this.seen.push({kind:"attack",who:t.id,weapon:"gmaul",special:!0});return this.events.attack(t.id,"gmaul",!0,s),this.events.graphic(t.id,ii.maulSpec),!0}attack(t,e){const n=Pe(t),s=Hn[n];let r=!1;if(t.specArmed&&s&&n!=="gmaul"&&(t.spec>=s?r=!0:this.tell(t,"You do not have enough special attack energy left."),t.specArmed=!1),r&&(t.specTeleportLock=io+1),r&&n==="voidwaker"){t.spec-=s;const o=Gr(t),a=Math.floor(o*.5),l=Math.floor(o*1.5),c=Math.max(1,a+Math.floor(this.opts.rng()*(l-a+1)));e.incoming.push({from:t.id,damage:c,kind:"magic",special:!0,smite:t.prayers.has("smite"),max:c===l}),this.events.graphic(e.id,ii.voidwakerSpec),this.rolled(t,c)}else{const o=r&&n==="tentacle",a=r&&n==="ags",l=r&&n==="elder_maul";r&&(t.spec-=s,a?this.events.graphic(t.id,ii.agsSpec):l?(this.events.graphic(t.id,ii.elderSpec),this.events.graphic(e.id,ii.elderImpact)):this.events.graphic(e.id,ii.tentacleSpec)),o&&this.tick>=e.freezeImmuneUntil&&(e.frozenUntil=this.tick+tf,e.freezeImmuneUntil=e.frozenUntil+ef,this.tell(e,"<col=ef1020>You have been frozen!</col>"));const c=a?eo(t,e,this.opts.rng,Tr.accuracy,Tr):eo(t,e,this.opts.rng,o?1.25:l?Xl.accuracy:1);if(n==="nox_halberd"&&t.virulence>0&&c.hit){const d=Math.min(t.virulence,c.max);c.damage=d+Math.floor(this.opts.rng()*(c.max-d+1)),c.maxed=c.damage===c.max,t.virulence=0}const h=n==="tentacle"?r?.5:.25:void 0,u=n==="nox_halberd"?.33:void 0;e.incoming.push({from:t.id,damage:c.damage,kind:"melee",special:r,smite:t.prayers.has("smite"),poisonChance:h,venomChance:u,max:c.maxed,...l?{defenceDrain:Xl.defenceDrain}:{}}),this.rolled(t,c.damage)}t.timers.attack=Ar(t),t.lastAttackTick=this.tick,t.lastTarget=e.id,this.seen.push({kind:"attack",who:t.id,weapon:n,special:r}),this.events.attack(t.id,n,r)}rolled(t,e){var n,s;t.lastRoll=e,e>0&&((s=(n=this.events).xp)==null||s.call(n,t.id,e))}poisonTick(t){if(t.poison<=0&&t.venom<=0||t.teleporting>0){t.poisonTimer=Math.max(0,t.poisonTimer-1);return}if(--t.poisonTimer>0)return;if(t.venom>0){const n=t.venom;t.venom=Math.min(20,t.venom+2),t.poisonTimer=30,this.applyHit(t,{from:t.id,damage:n,kind:"venom"});return}const e=Math.ceil(t.poison/5);t.poison--,t.poisonTimer=30,this.applyHit(t,{from:t.id,damage:e,kind:"poison"})}applyHit(t,e){var o;if(t.dead)return;const n=t.level.hitpoints;t.level.hitpoints=Math.max(0,n-e.damage),this.events.hit(t.id,e),this.seen.push({kind:"splat",on:t.id,damage:e.damage,hit:e.kind});const s=this.players[e.from];if(!(!(e.kind==="melee"||e.kind==="magic")||!s||s===t)&&(!t.targetId&&!t.dest&&t.autoRetaliate&&(t.targetId=e.from,t.timers.attack=Math.ceil(Ar(t)/2)),!(e.damage<=0)&&(e.defenceDrain&&(t.level.defence-=Math.floor(t.level.defence*e.defenceDrain)),e.venomChance&&t.venom<=0&&this.opts.rng()<e.venomChance&&(t.poison<=0&&(t.poisonTimer=30),t.poison=0,t.venom=6,this.tell(t,"You have been envenomed!")),e.poisonChance&&t.poisonImmune<=0&&t.venom<=0&&this.opts.rng()<e.poisonChance&&(t.poison<=0&&(t.poisonTimer=30,this.tell(t,"You have been poisoned!")),t.poison=Math.max(t.poison,20)),e.smite&&(t.level.prayer=Math.max(0,t.level.prayer-Math.floor(Math.min(e.damage,n)/4)),t.level.prayer===0&&t.prayers.size&&(t.prayers.clear(),this.tell(t,"You have run out of prayer points, you can recharge at an altar."))),t.vengeActive&&(t.vengeActive=!1,s.incoming.push({from:t.id,damage:Math.max(1,Math.floor(e.damage*.75)),kind:"venge"}),this.events.say(t.id,"Taste vengeance!")),((o=t.equip.ring)==null?void 0:o.id)==="recoil"&&t.recoilCharges>0))){const a=Math.min(Math.floor(e.damage*.1)+1,t.recoilCharges);t.recoilCharges-=a,s.incoming.push({from:t.id,damage:a,kind:"recoil"}),t.recoilCharges<=0&&(delete t.equip.ring,t.recoilCharges=40,this.tell(t,"Your Ring of Recoil has shattered."))}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="169",sf=0,ic=1,rf=2,Zh=1,of=2,kn=3,Qn=0,Ye=1,dn=2,Zn=0,Xi=1,sc=2,rc=3,oc=4,af=5,fi=100,lf=101,cf=102,hf=103,uf=104,df=200,ff=201,pf=202,mf=203,ra=204,oa=205,gf=206,vf=207,_f=208,xf=209,yf=210,Mf=211,bf=212,wf=213,Sf=214,aa=0,la=1,ca=2,Qi=3,ha=4,ua=5,da=6,fa=7,vl=0,Ef=1,Af=2,Jn=0,Tf=1,Rf=2,Cf=3,kf=4,Pf=5,Lf=6,Df=7,Jh=300,ts=301,es=302,pa=303,ma=304,Wr=306,ns=1e3,vi=1001,ga=1002,Oe=1003,If=1004,Ws=1005,fn=1006,oo=1007,_i=1008,Fn=1009,Qh=1010,tu=1011,Ps=1012,_l=1013,yi=1014,Ln=1015,Fs=1016,xl=1017,yl=1018,is=1020,eu=35902,nu=1021,iu=1022,gn=1023,su=1024,ru=1025,Yi=1026,ss=1027,ou=1028,Ml=1029,au=1030,bl=1031,wl=1033,_r=33776,xr=33777,yr=33778,Mr=33779,va=35840,_a=35841,xa=35842,ya=35843,Ma=36196,ba=37492,wa=37496,Sa=37808,Ea=37809,Aa=37810,Ta=37811,Ra=37812,Ca=37813,ka=37814,Pa=37815,La=37816,Da=37817,Ia=37818,Ua=37819,Na=37820,Fa=37821,br=36492,Oa=36494,Ba=36495,lu=36283,Ha=36284,za=36285,Va=36286,Uf=3200,Nf=3201,cu=0,Ff=1,Kn="",Ve="srgb",ei="srgb-linear",Sl="display-p3",$r="display-p3-linear",kr="linear",ce="srgb",Pr="rec709",Lr="p3",Si=7680,ac=519,Of=512,Bf=513,Hf=514,hu=515,zf=516,Vf=517,Gf=518,Wf=519,lc=35044,cc="300 es",Dn=2e3,Dr=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,Ga=180/Math.PI;function Os(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function $f(i,t){return(i%t+t)%t}function lo(i,t,e){return(1-e)*i+e*t}function ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],S=s[1],M=s[4],E=s[7],L=s[2],k=s[5],T=s[8];return r[0]=o*v+a*S+l*L,r[3]=o*p+a*M+l*k,r[6]=o*m+a*E+l*T,r[1]=c*v+h*S+u*L,r[4]=c*p+h*M+u*k,r[7]=c*m+h*E+u*T,r[2]=d*v+f*S+g*L,r[5]=d*p+f*M+g*k,r[8]=d*m+f*E+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Wt;function uu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qf(){const i=Ls("canvas");return i.style.display="block",i}const hc={};function wr(i){i in hc||(hc[i]=!0,console.warn(i))}function Xf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const uc=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dc=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[ei]:{transfer:kr,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ve]:{transfer:ce,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$r]:{transfer:kr,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(dc),fromReference:i=>i.applyMatrix3(uc)},[Sl]:{transfer:ce,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(dc),fromReference:i=>i.applyMatrix3(uc).convertLinearToSRGB()}},jf=new Set([ei,$r]),ie={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=fs[t].toReference,s=fs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return fs[i].primaries},getTransfer:function(i){return i===Kn?kr:fs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(fs[t].luminanceCoefficients)}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ei;class Zf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Ls("canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jf=0;class du{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uo(s[o].image)):r.push(uo(s[o]))}else r=uo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qf=0;class Be extends as{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=vi,s=vi,r=fn,o=_i,a=gn,l=Fn,c=Be.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Os(),this.name="",this.source=new du(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Jh;Be.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,E=(f+1)/2,L=(m+1)/2,k=(h+d)/4,T=(u+v)/4,I=(g+p)/4;return M>E&&M>L?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=k/n,r=T/n):E>L?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=k/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=I/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tp extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new du(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends tp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fu extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ep extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*v,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const L=Math.sqrt(M),k=Math.atan2(L,m*S);p=Math.sin(p*k)/L,a=Math.sin(a*k)/L}const E=a*S;if(l=l*p+d*E,c=c*p+f*E,h=h*p+g*E,u=u*p+v*E,p===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new B,fc=new Bs;class Hs{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),qs.subVectors(this.max,ps),Ai.subVectors(t.a,ps),Ti.subVectors(t.b,ps),Ri.subVectors(t.c,ps),zn.subVectors(Ti,Ai),Vn.subVectors(Ri,Ti),si.subVectors(Ai,Ri);let e=[0,-zn.z,zn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,zn.z,0,-zn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-zn.y,zn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];return!po(e,Ai,Ti,Ri,qs)||(e=[1,0,0,0,1,0,0,0,1],!po(e,Ai,Ti,Ri,qs))?!1:(Xs.crossVectors(zn,Vn),e=[Xs.x,Xs.y,Xs.z],po(e,Ai,Ti,Ri,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new B,new B,new B,new B,new B,new B,new B,new B],ln=new B,$s=new Hs,Ai=new B,Ti=new B,Ri=new B,zn=new B,Vn=new B,si=new B,ps=new B,qs=new B,Xs=new B,ri=new B;function po(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ri.fromArray(i,r);const a=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const np=new Hs,ms=new B,mo=new B;class qr{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):np.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(mo)),this.expandByPoint(ms.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new B,go=new B,Ys=new B,Gn=new B,vo=new B,Ks=new B,_o=new B;class El{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){go.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(go);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ys),a=Gn.dot(this.direction),l=-Gn.dot(Ys),c=Gn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(go).addScaledVector(Ys,d),f}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){vo.subVectors(e,t),Ks.subVectors(n,t),_o.crossVectors(vo,Ks);let o=this.direction.dot(_o),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,t);const l=a*this.direction.dot(Ks.crossVectors(Gn,Ks));if(l<0)return null;const c=a*this.direction.dot(vo.cross(Gn));if(c<0||l+c>o)return null;const h=-a*Gn.dot(_o);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,sp)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Wn.crossVectors(n,Ze),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Wn.crossVectors(n,Ze)),Wn.normalize(),js.crossVectors(Ze,Wn),s[0]=Wn.x,s[4]=js.x,s[8]=Ze.x,s[1]=Wn.y,s[5]=js.y,s[9]=Ze.y,s[2]=Wn.z,s[6]=js.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],S=n[3],M=n[7],E=n[11],L=n[15],k=s[0],T=s[4],I=s[8],Q=s[12],_=s[1],b=s[5],z=s[9],W=s[13],X=s[2],et=s[6],q=s[10],it=s[14],K=s[3],vt=s[7],ft=s[11],St=s[15];return r[0]=o*k+a*_+l*X+c*K,r[4]=o*T+a*b+l*et+c*vt,r[8]=o*I+a*z+l*q+c*ft,r[12]=o*Q+a*W+l*it+c*St,r[1]=h*k+u*_+d*X+f*K,r[5]=h*T+u*b+d*et+f*vt,r[9]=h*I+u*z+d*q+f*ft,r[13]=h*Q+u*W+d*it+f*St,r[2]=g*k+v*_+p*X+m*K,r[6]=g*T+v*b+p*et+m*vt,r[10]=g*I+v*z+p*q+m*ft,r[14]=g*Q+v*W+p*it+m*St,r[3]=S*k+M*_+E*X+L*K,r[7]=S*T+M*b+E*et+L*vt,r[11]=S*I+M*z+E*q+L*ft,r[15]=S*Q+M*W+E*it+L*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],S=u*p*c-v*d*c+v*l*f-a*p*f-u*l*m+a*d*m,M=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,E=h*v*c-g*u*c+g*a*f-o*v*f-h*a*m+o*u*m,L=g*u*l-h*v*l-g*a*d+o*v*d+h*a*p-o*u*p,k=e*S+n*M+s*E+r*L;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/k;return t[0]=S*T,t[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*m-n*d*m)*T,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*m+n*l*m)*T,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*T,t[4]=M*T,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*T,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*T,t[8]=E*T,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*m-e*u*m)*T,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*m+e*a*m)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*T,t[12]=L*T,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*p+e*u*p)*T,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*p-e*a*p)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,p=o*u,m=a*u,S=l*c,M=l*h,E=l*u,L=n.x,k=n.y,T=n.z;return s[0]=(1-(v+m))*L,s[1]=(f+E)*L,s[2]=(g-M)*L,s[3]=0,s[4]=(f-E)*k,s[5]=(1-(d+m))*k,s[6]=(p+S)*k,s[7]=0,s[8]=(g+M)*T,s[9]=(p-S)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ci.set(s[0],s[1],s[2]).length();const o=Ci.set(s[4],s[5],s[6]).length(),a=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const c=1/r,h=1/o,u=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Dn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Dr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let g,v;if(a===Dn)g=(o+r)*u,v=-2*u;else if(a===Dr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new B,cn=new ue,ip=new B(0,0,0),sp=new B(1,1,1),Wn=new B,js=new B,Ze=new B,pc=new ue,mc=new Bs;class wn{constructor(t=0,e=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mc.setFromEuler(this),this.setFromQuaternion(mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rp=0;const gc=new B,ki=new Bs,Tn=new ue,Zs=new B,gs=new B,op=new B,ap=new Bs,vc=new B(1,0,0),_c=new B(0,1,0),xc=new B(0,0,1),yc={type:"added"},lp={type:"removed"},Pi={type:"childadded",child:null},xo={type:"childremoved",child:null};class Ee extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new B,e=new wn,n=new Bs,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Wt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(_c,t)}rotateZ(t){return this.rotateOnAxis(xc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(_c,t)}translateZ(t){return this.translateOnAxis(xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(gs,Zs,this.up):Tn.lookAt(Zs,gs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Tn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lp),xo.child=t,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new B(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new B,Rn=new B,yo=new B,Cn=new B,Li=new B,Di=new B,Mc=new B,Mo=new B,bo=new B,wo=new B,So=new me,Eo=new me,Ao=new me;class pn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Rn.subVectors(n,e),yo.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Rn),l=hn.dot(yo),c=Rn.dot(Rn),h=Rn.dot(yo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return So.setScalar(0),Eo.setScalar(0),Ao.setScalar(0),So.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,n),Ao.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(So,r.x),o.addScaledVector(Eo,r.y),o.addScaledVector(Ao,r.z),o}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Rn.subVectors(t,e),hn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),hn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Li.subVectors(s,n),Di.subVectors(r,n),Mo.subVectors(t,n);const l=Li.dot(Mo),c=Di.dot(Mo);if(l<=0&&c<=0)return e.copy(n);bo.subVectors(t,s);const h=Li.dot(bo),u=Di.dot(bo);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Li,o);wo.subVectors(t,r);const f=Li.dot(wo),g=Di.dot(wo);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Di,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Mc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Mc,a);const m=1/(p+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Js={h:0,s:0,l:0};function To(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=$f(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=To(o,r,t+1/3),this.g=To(o,r,t),this.b=To(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ie.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Xe(Ie.r*255,0,255))*65536+Math.round(Xe(Ie.g*255,0,255))*256+Math.round(Xe(Ie.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ve){ie.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Js);const n=lo($n.h,Js.h,e),s=lo($n.s,Js.s,e),r=lo($n.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new $t;$t.NAMES=pu;let cp=0;class ls extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Xi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ji extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new B,Qs=new jt;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lc&&(t.usage=this.usage),t}}class mu extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gu extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class vn extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hp=0;const en=new ue,Ro=new Ee,Ii=new B,Je=new Hs,vs=new Hs,Se=new B;class on extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uu(t)?gu:mu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Ro.lookAt(t),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Je.min,vs.min),Je.expandByPoint(Se),Se.addVectors(Je.max,vs.max),Je.expandByPoint(Se)):(Je.expandByPoint(vs.min),Je.expandByPoint(vs.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(t,c),Se.add(Ii)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new B,l[I]=new B;const c=new B,h=new B,u=new B,d=new jt,f=new jt,g=new jt,v=new B,p=new B;function m(I,Q,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,Q),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(b),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),a[I].add(v),a[Q].add(v),a[_].add(v),l[I].add(p),l[Q].add(p),l[_].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,Q=S.length;I<Q;++I){const _=S[I],b=_.start,z=_.count;for(let W=b,X=b+z;W<X;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const M=new B,E=new B,L=new B,k=new B;function T(I){L.fromBufferAttribute(s,I),k.copy(L);const Q=a[I];M.copy(Q),M.sub(L.multiplyScalar(L.dot(Q))).normalize(),E.crossVectors(k,Q);const b=E.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,b)}for(let I=0,Q=S.length;I<Q;++I){const _=S[I],b=_.start,z=_.count;for(let W=b,X=b+z;W<X;W+=3)T(t.getX(W+0)),T(t.getX(W+1)),T(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new ue,oi=new El,tr=new qr,wc=new B,er=new B,nr=new B,ir=new B,Co=new B,sr=new B,Sc=new B,rr=new B;class Fe extends Ee{constructor(t=new on,e=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Co.fromBufferAttribute(u,t),o?sr.addScaledVector(Co,h):sr.addScaledVector(Co.sub(e),h))}e.add(sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(tr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(tr,wc)===null||oi.origin.distanceToSquared(wc)>(t.far-t.near)**2))&&(bc.copy(r).invert(),oi.copy(t.ray).applyMatrix4(bc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=S,L=M;E<L;E+=3){const k=a.getX(E),T=a.getX(E+1),I=a.getX(E+2);s=or(this,m,t,n,c,h,u,k,T,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const S=a.getX(p),M=a.getX(p+1),E=a.getX(p+2);s=or(this,o,t,n,c,h,u,S,M,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=S,L=M;E<L;E+=3){const k=E,T=E+1,I=E+2;s=or(this,m,t,n,c,h,u,k,T,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const S=p,M=p+1,E=p+2;s=or(this,o,t,n,c,h,u,S,M,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function up(i,t,e,n,s,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qn,a),l===null)return null;rr.copy(a),rr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(rr);return c<e.near||c>e.far?null:{distance:c,point:rr.clone(),object:i}}function or(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,er),i.getVertexPosition(l,nr),i.getVertexPosition(c,ir);const h=up(i,t,e,n,er,nr,ir,Sc);if(h){const u=new B;pn.getBarycoord(Sc,er,nr,ir,u),s&&(h.uv=pn.getInterpolatedAttribute(s,a,l,c,u,new jt)),r&&(h.uv1=pn.getInterpolatedAttribute(r,a,l,c,u,new jt)),o&&(h.normal=pn.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};pn.getNormal(er,nr,ir,d.normal),h.face=d,h.barycoord=u}return h}class zs extends on{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(h,3)),this.setAttribute("uv",new vn(u,2));function g(v,p,m,S,M,E,L,k,T,I,Q){const _=E/T,b=L/I,z=E/2,W=L/2,X=k/2,et=T+1,q=I+1;let it=0,K=0;const vt=new B;for(let ft=0;ft<q;ft++){const St=ft*b-W;for(let Ot=0;Ot<et;Ot++){const ct=Ot*_-z;vt[v]=ct*S,vt[p]=St*M,vt[m]=X,c.push(vt.x,vt.y,vt.z),vt[v]=0,vt[p]=0,vt[m]=k>0?1:-1,h.push(vt.x,vt.y,vt.z),u.push(Ot/T),u.push(1-ft/I),it+=1}}for(let ft=0;ft<I;ft++)for(let St=0;St<T;St++){const Ot=d+St+et*ft,ct=d+St+et*(ft+1),G=d+(St+1)+et*(ft+1),J=d+(St+1)+et*ft;l.push(Ot,ct,J),l.push(ct,G,J),K+=6}a.addGroup(f,K,Q),f+=K,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function dp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const fp={clone:rs,merge:ze};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _u extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new B,Ec=new jt,Ac=new jt;class nn extends _u{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,Ec,Ac),e.subVectors(Ac,Ec)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ao*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class gp extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Ui,Ni,t,e);s.layers=this.layers,this.add(s);const r=new nn(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const o=new nn(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const a=new nn(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const l=new nn(Ui,Ni,t,e);l.layers=this.layers,this.add(l);const c=new nn(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xu extends Be{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vp extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zs(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Zn});r.uniforms.tEquirect.value=e;const o=new Fe(s,r),a=e.minFilter;return e.minFilter===_i&&(e.minFilter=fn),new gp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ko=new B,_p=new B,xp=new Wt;class Yn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ko.subVectors(n,e).cross(_p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xp.getNormalMatrix(t),s=this.coplanarPoint(ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new qr,ar=new B;class Tl{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],S=s[13],M=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,p-f,E-m).normalize(),n[1].setComponents(l+r,d+c,p+f,E+m).normalize(),n[2].setComponents(l+o,d+h,p+g,E+S).normalize(),n[3].setComponents(l-o,d-h,p-g,E-S).normalize(),n[4].setComponents(l-a,d-u,p-v,E-M).normalize(),e===Dn)n[5].setComponents(l+a,d+u,p+v,E+M).normalize();else if(e===Dr)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class bi extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const S=m*d-o;for(let M=0;M<c;M++){const E=M*u-r;g.push(E,-S,0),v.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const M=S+c*m,E=S+c*(m+1),L=S+1+c*(m+1),k=S+1+c*m;f.push(M,E,k),f.push(E,L,k)}this.setIndex(f),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Up=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`
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
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
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
}`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
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
#endif`,xm=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
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
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,Hg=`#define NORMAL
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
}`,zg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,qg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Mp,alphahash_pars_fragment:bp,alphamap_fragment:wp,alphamap_pars_fragment:Sp,alphatest_fragment:Ep,alphatest_pars_fragment:Ap,aomap_fragment:Tp,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:kp,begin_vertex:Pp,beginnormal_vertex:Lp,bsdfs:Dp,iridescence_fragment:Ip,bumpmap_pars_fragment:Up,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Op,clipping_planes_vertex:Bp,color_fragment:Hp,color_pars_fragment:zp,color_pars_vertex:Vp,color_vertex:Gp,common:Wp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:qp,displacementmap_pars_vertex:Xp,displacementmap_vertex:Yp,emissivemap_fragment:Kp,emissivemap_pars_fragment:jp,colorspace_fragment:Zp,colorspace_pars_fragment:Jp,envmap_fragment:Qp,envmap_common_pars_fragment:tm,envmap_pars_fragment:em,envmap_pars_vertex:nm,envmap_physical_pars_fragment:fm,envmap_vertex:im,fog_vertex:sm,fog_pars_vertex:rm,fog_fragment:om,fog_pars_fragment:am,gradientmap_pars_fragment:lm,lightmap_pars_fragment:cm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:um,lights_pars_begin:dm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:vm,lights_physical_fragment:_m,lights_physical_pars_fragment:xm,lights_fragment_begin:ym,lights_fragment_maps:Mm,lights_fragment_end:bm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:Am,map_fragment:Tm,map_pars_fragment:Rm,map_particle_fragment:Cm,map_particle_pars_fragment:km,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Dm,morphcolor_vertex:Im,morphnormal_vertex:Um,morphtarget_pars_vertex:Nm,morphtarget_vertex:Fm,normal_fragment_begin:Om,normal_fragment_maps:Bm,normal_pars_fragment:Hm,normal_pars_vertex:zm,normal_vertex:Vm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Xm,opaque_fragment:Ym,packing:Km,premultiplied_alpha_fragment:jm,project_vertex:Zm,dithering_fragment:Jm,dithering_pars_fragment:Qm,roughnessmap_fragment:tg,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:og,skinning_pars_vertex:ag,skinning_vertex:lg,skinnormal_vertex:cg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:vg,uv_vertex:_g,worldpos_vertex:xg,background_vert:yg,background_frag:Mg,backgroundCube_vert:bg,backgroundCube_frag:wg,cube_vert:Sg,cube_frag:Eg,depth_vert:Ag,depth_frag:Tg,distanceRGBA_vert:Rg,distanceRGBA_frag:Cg,equirect_vert:kg,equirect_frag:Pg,linedashed_vert:Lg,linedashed_frag:Dg,meshbasic_vert:Ig,meshbasic_frag:Ug,meshlambert_vert:Ng,meshlambert_frag:Fg,meshmatcap_vert:Og,meshmatcap_frag:Bg,meshnormal_vert:Hg,meshnormal_frag:zg,meshphong_vert:Vg,meshphong_frag:Gg,meshphysical_vert:Wg,meshphysical_frag:$g,meshtoon_vert:qg,meshtoon_frag:Xg,points_vert:Yg,points_frag:Kg,shadow_vert:jg,shadow_frag:Zg,sprite_vert:Jg,sprite_frag:Qg},gt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},bn={basic:{uniforms:ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ze([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ze([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ze([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ze([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ze([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ze([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ze([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ze([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ze([gt.common,gt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ze([gt.lights,gt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};bn.physical={uniforms:ze([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const lr={r:0,b:0,g:0},li=new wn,t0=new ue;function e0(i,t,e,n,s,r,o){const a=new $t(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function v(S){let M=!1;const E=g(S);E===null?m(a,l):E&&E.isColor&&(m(E,1),M=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===Wr)?(h===void 0&&(h=new Fe(new zs(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:rs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,k,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(li)),h.material.toneMapped=ie.getTransfer(E.colorSpace)!==ce,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Fe(new bi(2,2),new ti({name:"BackgroundMaterial",uniforms:rs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ie.getTransfer(E.colorSpace)!==ce,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,M){S.getRGB(lr,vu(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:v,addToRenderList:p}}function n0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(_,b,z,W,X){let et=!1;const q=u(W,z,b);r!==q&&(r=q,c(r.object)),et=f(_,W,z,X),et&&g(_,W,z,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,E(_,b,z,W),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,b,z){const W=z.wireframe===!0;let X=n[_.id];X===void 0&&(X={},n[_.id]=X);let et=X[b.id];et===void 0&&(et={},X[b.id]=et);let q=et[W];return q===void 0&&(q=d(l()),et[W]=q),q}function d(_){const b=[],z=[],W=[];for(let X=0;X<e;X++)b[X]=0,z[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:W,object:_,attributes:{},index:null}}function f(_,b,z,W){const X=r.attributes,et=b.attributes;let q=0;const it=z.getAttributes();for(const K in it)if(it[K].location>=0){const ft=X[K];let St=et[K];if(St===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(St=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(St=_.instanceColor)),ft===void 0||ft.attribute!==St||St&&ft.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==W}function g(_,b,z,W){const X={},et=b.attributes;let q=0;const it=z.getAttributes();for(const K in it)if(it[K].location>=0){let ft=et[K];ft===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor));const St={};St.attribute=ft,ft&&ft.data&&(St.data=ft.data),X[K]=St,q++}r.attributes=X,r.attributesNum=q,r.index=W}function v(){const _=r.newAttributes;for(let b=0,z=_.length;b<z;b++)_[b]=0}function p(_){m(_,0)}function m(_,b){const z=r.newAttributes,W=r.enabledAttributes,X=r.attributeDivisors;z[_]=1,W[_]===0&&(i.enableVertexAttribArray(_),W[_]=1),X[_]!==b&&(i.vertexAttribDivisor(_,b),X[_]=b)}function S(){const _=r.newAttributes,b=r.enabledAttributes;for(let z=0,W=b.length;z<W;z++)b[z]!==_[z]&&(i.disableVertexAttribArray(z),b[z]=0)}function M(_,b,z,W,X,et,q){q===!0?i.vertexAttribIPointer(_,b,z,X,et):i.vertexAttribPointer(_,b,z,W,X,et)}function E(_,b,z,W){v();const X=W.attributes,et=z.getAttributes(),q=b.defaultAttributeValues;for(const it in et){const K=et[it];if(K.location>=0){let vt=X[it];if(vt===void 0&&(it==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),it==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),vt!==void 0){const ft=vt.normalized,St=vt.itemSize,Ot=t.get(vt);if(Ot===void 0)continue;const ct=Ot.buffer,G=Ot.type,J=Ot.bytesPerElement,R=G===i.INT||G===i.UNSIGNED_INT||vt.gpuType===_l;if(vt.isInterleavedBufferAttribute){const N=vt.data,Y=N.stride,rt=vt.offset;if(N.isInstancedInterleavedBuffer){for(let lt=0;lt<K.locationSize;lt++)m(K.location+lt,N.meshPerAttribute);_.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let lt=0;lt<K.locationSize;lt++)p(K.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let lt=0;lt<K.locationSize;lt++)M(K.location+lt,St/K.locationSize,G,ft,Y*J,(rt+St/K.locationSize*lt)*J,R)}else{if(vt.isInstancedBufferAttribute){for(let N=0;N<K.locationSize;N++)m(K.location+N,vt.meshPerAttribute);_.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let N=0;N<K.locationSize;N++)p(K.location+N);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let N=0;N<K.locationSize;N++)M(K.location+N,St/K.locationSize,G,ft,St*J,St/K.locationSize*N*J,R)}}else if(q!==void 0){const ft=q[it];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(K.location,ft);break;case 3:i.vertexAttrib3fv(K.location,ft);break;case 4:i.vertexAttrib4fv(K.location,ft);break;default:i.vertexAttrib1fv(K.location,ft)}}}}S()}function L(){I();for(const _ in n){const b=n[_];for(const z in b){const W=b[z];for(const X in W)h(W[X].object),delete W[X];delete b[z]}delete n[_]}}function k(_){if(n[_.id]===void 0)return;const b=n[_.id];for(const z in b){const W=b[z];for(const X in W)h(W[X].object),delete W[X];delete b[z]}delete n[_.id]}function T(_){for(const b in n){const z=n[b];if(z[_.id]===void 0)continue;const W=z[_.id];for(const X in W)h(W[X].object),delete W[X];delete z[_.id]}}function I(){Q(),o=!0,r!==s&&(r=s,c(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:Q,dispose:L,releaseStatesOfGeometry:k,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function i0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function s0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==gn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ln&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,k=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:L,maxSamples:k}}function r0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Yn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,M=S*4;let E=m.clippingState||null;l.value=E,E=h(g,d,M,f);for(let L=0;L!==M;++L)E[L]=e[L];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,E=f;M!==v;++M,E+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function o0(i){let t=new WeakMap;function e(o,a){return a===pa?o.mapping=ts:a===ma&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===pa||a===ma)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vp(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Mu extends _u{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wi=4,Tc=[.125,.215,.35,.446,.526,.582],pi=20,Po=new Mu,Rc=new $t;let Lo=null,Do=0,Io=0,Uo=!1;const di=(1+Math.sqrt(5))/2,Fi=1/di,Cc=[new B(-di,Fi,0),new B(di,Fi,0),new B(-Fi,0,di),new B(Fi,0,di),new B(0,di,-Fi),new B(0,di,Fi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class kc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,Do,Io),this._renderer.xr.enabled=Uo,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Fs,format:gn,colorSpace:ei,depthBuffer:!1},s=Pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a0(r)),this._blurMaterial=l0(r,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,s){const a=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rc),h.toneMapping=Jn,h.autoClear=!1;const f=new ji({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new Fe(new zs,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(Rc),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;cr(s,S*M,m>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ts||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cc[(s-r-1)%Cc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Fe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):pi;p>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);const m=[];let S=0;for(let T=0;T<pi;++T){const I=T/v,Q=Math.exp(-I*I/2);m.push(Q),T===0?S+=Q:T<p&&(S+=2*Q)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const E=this._sizeLods[s],L=3*E*(s>M-Wi?s-M+Wi:0),k=4*(this._cubeSize-E);cr(e,L,k,3*E,2*E),l.setRenderTarget(e),l.render(u,Po)}}function a0(i){const t=[],e=[],n=[];let s=i;const r=i-Wi+1+Tc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Wi?l=Tc[o-i+Wi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,S=new Float32Array(v*g*f),M=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let k=0;k<f;k++){const T=k%3*2/3-1,I=k>2?0:-1,Q=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];S.set(Q,v*g*k),M.set(d,p*g*k);const _=[k,k,k,k,k,k];E.set(_,m*g*k)}const L=new on;L.setAttribute("position",new Le(S,v)),L.setAttribute("uv",new Le(M,p)),L.setAttribute("faceIndex",new Le(E,m)),t.push(L),s>Wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pc(i,t,e){const n=new Mi(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function l0(i,t,e){const n=new Float32Array(pi),s=new B(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Lc(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Dc(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function c0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===pa||l===ma,h=l===ts||l===es;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new kc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new kc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function h0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&wr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function u0(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let M=0,E=S.length;M<E;M+=3){const L=S[M+0],k=S[M+1],T=S[M+2];d.push(L,k,k,T,T,L)}}else if(g!==void 0){const S=g.array;v=g.version;for(let M=0,E=S.length/3-1;M<E;M+=3){const L=M+0,k=M+1,T=M+2;d.push(L,k,k,T,T,L)}}else return;const p=new(uu(d)?gu:mu)(d,1);p.version=v;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function d0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S];for(let S=0;S<v.length;S++)e.update(m,n,v[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function f0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function p0(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let _=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),p===!0&&(E=3);let L=a.attributes.position.count*E,k=1;L>t.maxTextureSize&&(k=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*k*4*u),I=new fu(T,L,k,u);I.type=Ln,I.needsUpdate=!0;const Q=E*4;for(let b=0;b<u;b++){const z=m[b],W=S[b],X=M[b],et=L*k*4*b;for(let q=0;q<z.count;q++){const it=q*Q;g===!0&&(s.fromBufferAttribute(z,q),T[et+it+0]=s.x,T[et+it+1]=s.y,T[et+it+2]=s.z,T[et+it+3]=0),v===!0&&(s.fromBufferAttribute(W,q),T[et+it+4]=s.x,T[et+it+5]=s.y,T[et+it+6]=s.z,T[et+it+7]=0),p===!0&&(s.fromBufferAttribute(X,q),T[et+it+8]=s.x,T[et+it+9]=s.y,T[et+it+10]=s.z,T[et+it+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new jt(L,k)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function m0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class bu extends Be{constructor(t,e,n,s,r,o,a,l,c,h=Yi){if(h!==Yi&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=yi),n===void 0&&h===ss&&(n=is),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wu=new Be,Ic=new bu(1,1),Su=new fu,Eu=new ep,Au=new xu,Uc=[],Nc=[],Fc=new Float32Array(16),Oc=new Float32Array(9),Bc=new Float32Array(4);function cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Uc[s];if(r===void 0&&(r=new Float32Array(s),Uc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=Nc[t];e===void 0&&(e=new Int32Array(t),Nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function g0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Bc.set(n),i.uniformMatrix2fv(this.addr,!1,Bc),be(e,n)}}function M0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Oc.set(n),i.uniformMatrix3fv(this.addr,!1,Oc),be(e,n)}}function b0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Fc.set(n),i.uniformMatrix4fv(this.addr,!1,Fc),be(e,n)}}function w0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function T0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function P0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=hu,r=Ic):r=wu,e.setTexture2D(t||r,s)}function L0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eu,s)}function D0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Au,s)}function I0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Su,s)}function U0(i){switch(i){case 5126:return g0;case 35664:return v0;case 35665:return _0;case 35666:return x0;case 35674:return y0;case 35675:return M0;case 35676:return b0;case 5124:case 35670:return w0;case 35667:case 35671:return S0;case 35668:case 35672:return E0;case 35669:case 35673:return A0;case 5125:return T0;case 36294:return R0;case 36295:return C0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return I0}}function N0(i,t){i.uniform1fv(this.addr,t)}function F0(i,t){const e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function O0(i,t){const e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function B0(i,t){const e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function H0(i,t){const e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function z0(i,t){const e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function V0(i,t){const e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function G0(i,t){i.uniform1iv(this.addr,t)}function W0(i,t){i.uniform2iv(this.addr,t)}function $0(i,t){i.uniform3iv(this.addr,t)}function q0(i,t){i.uniform4iv(this.addr,t)}function X0(i,t){i.uniform1uiv(this.addr,t)}function Y0(i,t){i.uniform2uiv(this.addr,t)}function K0(i,t){i.uniform3uiv(this.addr,t)}function j0(i,t){i.uniform4uiv(this.addr,t)}function Z0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wu,r[o])}function J0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Eu,r[o])}function Q0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Au,r[o])}function tv(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Su,r[o])}function ev(i){switch(i){case 5126:return N0;case 35664:return F0;case 35665:return O0;case 35666:return B0;case 35674:return H0;case 35675:return z0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return $0;case 35669:case 35673:return q0;case 5125:return X0;case 36294:return Y0;case 36295:return K0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return tv}}class nv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U0(e.type)}}class iv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ev(e.type)}}class sv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const No=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function rv(i,t,e){const n=i.name,s=n.length;for(No.lastIndex=0;;){const r=No.exec(n),o=No.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hc(e,c===void 0?new nv(a,i,t):new iv(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new sv(a),Hc(e,u)),e=u}}}class Sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);rv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function zc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ov=37297;let av=0;function lv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function cv(i){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(i);let n;switch(t===e?n="":t===Lr&&e===Pr?n="LinearDisplayP3ToLinearSRGB":t===Pr&&e===Lr&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case $r:return[n,"LinearTransferOETF"];case Ve:case Sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lv(i.getShaderSource(t),o)}else return s}function hv(i,t){const e=cv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function uv(i,t){let e;switch(t){case Tf:e="Linear";break;case Rf:e="Reinhard";break;case Cf:e="Cineon";break;case kf:e="ACESFilmic";break;case Lf:e="AgX";break;case Df:e="Neutral";break;case Pf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new B;function dv(){ie.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function pv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ms(i){return i!==""}function Gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(i){return i.replace(gv,_v)}const vv=new Map;function _v(i,t){let e=Gt[t];if(e===void 0){const n=vv.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(xv,yv)}function yv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Mv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===of?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function bv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function Sv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vl:t="ENVMAP_BLENDING_MULTIPLY";break;case Ef:t="ENVMAP_BLENDING_MIX";break;case Af:t="ENVMAP_BLENDING_ADD";break}return t}function Ev(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Av(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Mv(e),c=bv(e),h=wv(e),u=Sv(e),d=Ev(e),f=fv(e),g=pv(r),v=s.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`)):(p=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),m=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?uv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,hv("linearToOutputTexel",e.outputColorSpace),dv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),o=Wa(o),o=Gc(o,e),o=Wc(o,e),a=Wa(a),a=Gc(a,e),a=Wc(a,e),o=$c(o),a=$c(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+p+o,E=S+m+a,L=zc(s,s.VERTEX_SHADER,M),k=zc(s,s.FRAGMENT_SHADER,E);s.attachShader(v,L),s.attachShader(v,k),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(b){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(k).trim();let et=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,k);else{const it=Vc(s,L,"vertex"),K=Vc(s,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+it+`
`+K)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(W===""||X==="")&&(q=!1);q&&(b.diagnostics={runnable:et,programLog:z,vertexShader:{log:W,prefix:p},fragmentShader:{log:X,prefix:m}})}s.deleteShader(L),s.deleteShader(k),I=new Sr(s,v),Q=mv(s,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let Q;this.getAttributes=function(){return Q===void 0&&T(this),Q};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,ov)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=av++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=k,this}let Tv=0;class Rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Cv(t),e.set(t,n)),n}}class Cv{constructor(t){this.id=Tv++,this.code=t,this.usedTimes=0}}function kv(i,t,e,n,s,r,o){const a=new Al,l=new Rv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,b,z,W,X){const et=W.fog,q=X.geometry,it=_.isMeshStandardMaterial?W.environment:null,K=(_.isMeshStandardMaterial?e:t).get(_.envMap||it),vt=K&&K.mapping===Wr?K.image.height:null,ft=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ot=St!==void 0?St.length:0;let ct=0;q.morphAttributes.position!==void 0&&(ct=1),q.morphAttributes.normal!==void 0&&(ct=2),q.morphAttributes.color!==void 0&&(ct=3);let G,J,R,N;if(ft){const We=bn[ft];G=We.vertexShader,J=We.fragmentShader}else G=_.vertexShader,J=_.fragmentShader,l.update(_),R=l.getVertexShaderID(_),N=l.getFragmentShaderID(_);const Y=i.getRenderTarget(),rt=X.isInstancedMesh===!0,lt=X.isBatchedMesh===!0,ot=!!_.map,ut=!!_.matcap,C=!!K,kt=!!_.aoMap,Et=!!_.lightMap,Vt=!!_.bumpMap,Lt=!!_.normalMap,Xt=!!_.displacementMap,P=!!_.emissiveMap,y=!!_.metalnessMap,x=!!_.roughnessMap,U=_.anisotropy>0,j=_.clearcoat>0,nt=_.dispersion>0,H=_.iridescence>0,xt=_.sheen>0,mt=_.transmission>0,bt=U&&!!_.anisotropyMap,qt=j&&!!_.clearcoatMap,at=j&&!!_.clearcoatNormalMap,yt=j&&!!_.clearcoatRoughnessMap,Dt=H&&!!_.iridescenceMap,Ut=H&&!!_.iridescenceThicknessMap,dt=xt&&!!_.sheenColorMap,Ht=xt&&!!_.sheenRoughnessMap,Bt=!!_.specularMap,re=!!_.specularColorMap,D=!!_.specularIntensityMap,pt=mt&&!!_.transmissionMap,Z=mt&&!!_.thicknessMap,st=!!_.gradientMap,_t=!!_.alphaMap,wt=_.alphaTest>0,Kt=!!_.alphaHash,_e=!!_.extensions;let Ge=Jn;_.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const Jt={shaderID:ft,shaderType:_.type,shaderName:_.name,vertexShader:G,fragmentShader:J,defines:_.defines,customVertexShaderID:R,customFragmentShaderID:N,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:lt,batchingColor:lt&&X._colorsTexture!==null,instancing:rt,instancingColor:rt&&X.instanceColor!==null,instancingMorph:rt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ei,alphaToCoverage:!!_.alphaToCoverage,map:ot,matcap:ut,envMap:C,envMapMode:C&&K.mapping,envMapCubeUVHeight:vt,aoMap:kt,lightMap:Et,bumpMap:Vt,normalMap:Lt,displacementMap:f&&Xt,emissiveMap:P,normalMapObjectSpace:Lt&&_.normalMapType===Ff,normalMapTangentSpace:Lt&&_.normalMapType===cu,metalnessMap:y,roughnessMap:x,anisotropy:U,anisotropyMap:bt,clearcoat:j,clearcoatMap:qt,clearcoatNormalMap:at,clearcoatRoughnessMap:yt,dispersion:nt,iridescence:H,iridescenceMap:Dt,iridescenceThicknessMap:Ut,sheen:xt,sheenColorMap:dt,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:re,specularIntensityMap:D,transmission:mt,transmissionMap:pt,thicknessMap:Z,gradientMap:st,opaque:_.transparent===!1&&_.blending===Xi&&_.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Kt,combine:_.combine,mapUv:ot&&p(_.map.channel),aoMapUv:kt&&p(_.aoMap.channel),lightMapUv:Et&&p(_.lightMap.channel),bumpMapUv:Vt&&p(_.bumpMap.channel),normalMapUv:Lt&&p(_.normalMap.channel),displacementMapUv:Xt&&p(_.displacementMap.channel),emissiveMapUv:P&&p(_.emissiveMap.channel),metalnessMapUv:y&&p(_.metalnessMap.channel),roughnessMapUv:x&&p(_.roughnessMap.channel),anisotropyMapUv:bt&&p(_.anisotropyMap.channel),clearcoatMapUv:qt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&p(_.sheenRoughnessMap.channel),specularMapUv:Bt&&p(_.specularMap.channel),specularColorMapUv:re&&p(_.specularColorMap.channel),specularIntensityMapUv:D&&p(_.specularIntensityMap.channel),transmissionMapUv:pt&&p(_.transmissionMap.channel),thicknessMapUv:Z&&p(_.thicknessMap.channel),alphaMapUv:_t&&p(_.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Lt||U),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!q.attributes.uv&&(ot||_t),fog:!!et,useFog:_.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ot&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===Ye,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function S(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)b.push(z),b.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(M(b,_),E(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function M(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function E(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),_.push(a.mask)}function L(_){const b=v[_.type];let z;if(b){const W=bn[b];z=fp.clone(W.uniforms)}else z=_.uniforms;return z}function k(_,b){let z;for(let W=0,X=h.length;W<X;W++){const et=h[W];if(et.cacheKey===b){z=et,++z.usedTimes;break}}return z===void 0&&(z=new Av(i,b,_,r),h.push(z)),z}function T(_){if(--_.usedTimes===0){const b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function Q(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:L,acquireProgram:k,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:Q}}function Pv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function a(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Lv),n.length>1&&n.sort(d||Xc),s.length>1&&s.sort(d||Xc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Dv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Yc,i.set(n,[o])):s>=r.length?(o=new Yc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Iv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new $t};break;case"SpotLight":e={position:new B,direction:new B,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Uv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Nv=0;function Fv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ov(i){const t=new Iv,e=Uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new ue,o=new ue;function a(c){let h=0,u=0,d=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,S=0,M=0,E=0,L=0,k=0,T=0;c.sort(Fv);for(let Q=0,_=c.length;Q<_;Q++){const b=c[Q],z=b.color,W=b.intensity,X=b.distance,et=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=z.r*W,u+=z.g*W,d+=z.b*W;else if(b.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(b.sh.coefficients[q],W);T++}else if(b.isDirectionalLight){const q=t.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const it=b.shadow,K=e.get(b);K.shadowIntensity=it.intensity,K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=et,n.directionalShadowMatrix[f]=b.shadow.matrix,S++}n.directional[f]=q,f++}else if(b.isSpotLight){const q=t.get(b);q.position.setFromMatrixPosition(b.matrixWorld),q.color.copy(z).multiplyScalar(W),q.distance=X,q.coneCos=Math.cos(b.angle),q.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),q.decay=b.decay,n.spot[v]=q;const it=b.shadow;if(b.map&&(n.spotLightMap[L]=b.map,L++,it.updateMatrices(b),b.castShadow&&k++),n.spotLightMatrix[v]=it.matrix,b.castShadow){const K=e.get(b);K.shadowIntensity=it.intensity,K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=et,E++}v++}else if(b.isRectAreaLight){const q=t.get(b);q.color.copy(z).multiplyScalar(W),q.halfWidth.set(b.width*.5,0,0),q.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=q,p++}else if(b.isPointLight){const q=t.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),q.distance=b.distance,q.decay=b.decay,b.castShadow){const it=b.shadow,K=e.get(b);K.shadowIntensity=it.intensity,K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,K.shadowCameraNear=it.camera.near,K.shadowCameraFar=it.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=b.shadow.matrix,M++}n.point[g]=q,g++}else if(b.isHemisphereLight){const q=t.get(b);q.skyColor.copy(b.color).multiplyScalar(W),q.groundColor.copy(b.groundColor).multiplyScalar(W),n.hemi[m]=q,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==S||I.numPointShadows!==M||I.numSpotShadows!==E||I.numSpotMaps!==L||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+L-k,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=T,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=S,I.numPointShadows=M,I.numSpotShadows=E,I.numSpotMaps=L,I.numLightProbes=T,n.version=Nv++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const M=c[m];if(M.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(M.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Kc(i){const t=new Ov(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Bv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Kc(i),t.set(s,[a])):r>=o.length?(a=new Kc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Hv extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zv extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gv=`uniform sampler2D shadow_pass;
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
}`;function Wv(i,t,e){let n=new Tl;const s=new jt,r=new jt,o=new me,a=new Hv({depthPacking:Nf}),l=new zv,c={},h=e.maxTextureSize,u={[Qn]:Ye,[Ye]:Qn,[dn]:dn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:Vv,fragmentShader:Gv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let m=this.type;this.render=function(k,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||k.length===0)return;const Q=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Zn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=m!==kn&&this.type===kn,X=m===kn&&this.type!==kn;for(let et=0,q=k.length;et<q;et++){const it=k[et],K=it.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const vt=K.getFrameExtents();if(s.multiply(vt),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/vt.x),s.x=r.x*vt.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/vt.y),s.y=r.y*vt.y,K.mapSize.y=r.y)),K.map===null||W===!0||X===!0){const St=this.type!==kn?{minFilter:Oe,magFilter:Oe}:{};K.map!==null&&K.map.dispose(),K.map=new Mi(s.x,s.y,St),K.map.texture.name=it.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ft=K.getViewportCount();for(let St=0;St<ft;St++){const Ot=K.getViewport(St);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),z.viewport(o),K.updateMatrices(it,St),n=K.getFrustum(),E(T,I,K.camera,it,this.type)}K.isPointLightShadow!==!0&&this.type===kn&&S(K,I),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(Q,_,b)};function S(k,T){const I=t.update(v);d.defines.VSM_SAMPLES!==k.blurSamples&&(d.defines.VSM_SAMPLES=k.blurSamples,f.defines.VSM_SAMPLES=k.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Mi(s.x,s.y)),d.uniforms.shadow_pass.value=k.map.texture,d.uniforms.resolution.value=k.mapSize,d.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,v,null),f.uniforms.shadow_pass.value=k.mapPass.texture,f.uniforms.resolution.value=k.mapSize,f.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(T,null,I,f,v,null)}function M(k,T,I,Q){let _=null;const b=I.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(b!==void 0)_=b;else if(_=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=_.uuid,W=T.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let et=X[W];et===void 0&&(et=_.clone(),X[W]=et,T.addEventListener("dispose",L)),_=et}if(_.visible=T.visible,_.wireframe=T.wireframe,Q===kn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const z=i.properties.get(_);z.light=I}return _}function E(k,T,I,Q,_){if(k.visible===!1)return;if(k.layers.test(T.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&_===kn)&&(!k.frustumCulled||n.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,k.matrixWorld);const W=t.update(k),X=k.material;if(Array.isArray(X)){const et=W.groups;for(let q=0,it=et.length;q<it;q++){const K=et[q],vt=X[K.materialIndex];if(vt&&vt.visible){const ft=M(k,vt,Q,_);k.onBeforeShadow(i,k,T,I,W,ft,K),i.renderBufferDirect(I,null,W,ft,k,K),k.onAfterShadow(i,k,T,I,W,ft,K)}}}else if(X.visible){const et=M(k,X,Q,_);k.onBeforeShadow(i,k,T,I,W,et,null),i.renderBufferDirect(I,null,W,et,k,null),k.onAfterShadow(i,k,T,I,W,et,null)}}const z=k.children;for(let W=0,X=z.length;W<X;W++)E(z[W],T,I,Q,_)}function L(k){k.target.removeEventListener("dispose",L);for(const I in c){const Q=c[I],_=k.target.uuid;_ in Q&&(Q[_].dispose(),delete Q[_])}}}const $v={[aa]:la,[ca]:da,[ha]:fa,[Qi]:ua,[la]:aa,[da]:ca,[fa]:ha,[ua]:Qi};function qv(i){function t(){let D=!1;const pt=new me;let Z=null;const st=new me(0,0,0,0);return{setMask:function(_t){Z!==_t&&!D&&(i.colorMask(_t,_t,_t,_t),Z=_t)},setLocked:function(_t){D=_t},setClear:function(_t,wt,Kt,_e,Ge){Ge===!0&&(_t*=_e,wt*=_e,Kt*=_e),pt.set(_t,wt,Kt,_e),st.equals(pt)===!1&&(i.clearColor(_t,wt,Kt,_e),st.copy(pt))},reset:function(){D=!1,Z=null,st.set(-1,0,0,0)}}}function e(){let D=!1,pt=!1,Z=null,st=null,_t=null;return{setReversed:function(wt){pt=wt},setTest:function(wt){wt?R(i.DEPTH_TEST):N(i.DEPTH_TEST)},setMask:function(wt){Z!==wt&&!D&&(i.depthMask(wt),Z=wt)},setFunc:function(wt){if(pt&&(wt=$v[wt]),st!==wt){switch(wt){case aa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case ha:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case da:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=wt}},setLocked:function(wt){D=wt},setClear:function(wt){_t!==wt&&(i.clearDepth(wt),_t=wt)},reset:function(){D=!1,Z=null,st=null,_t=null}}}function n(){let D=!1,pt=null,Z=null,st=null,_t=null,wt=null,Kt=null,_e=null,Ge=null;return{setTest:function(Jt){D||(Jt?R(i.STENCIL_TEST):N(i.STENCIL_TEST))},setMask:function(Jt){pt!==Jt&&!D&&(i.stencilMask(Jt),pt=Jt)},setFunc:function(Jt,We,Sn){(Z!==Jt||st!==We||_t!==Sn)&&(i.stencilFunc(Jt,We,Sn),Z=Jt,st=We,_t=Sn)},setOp:function(Jt,We,Sn){(wt!==Jt||Kt!==We||_e!==Sn)&&(i.stencilOp(Jt,We,Sn),wt=Jt,Kt=We,_e=Sn)},setLocked:function(Jt){D=Jt},setClear:function(Jt){Ge!==Jt&&(i.clearStencil(Jt),Ge=Jt)},reset:function(){D=!1,pt=null,Z=null,st=null,_t=null,wt=null,Kt=null,_e=null,Ge=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,S=null,M=null,E=null,L=null,k=new $t(0,0,0),T=0,I=!1,Q=null,_=null,b=null,z=null,W=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,q=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(it)[1]),et=q>=1):it.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),et=q>=2);let K=null,vt={};const ft=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Ot=new me().fromArray(ft),ct=new me().fromArray(St);function G(D,pt,Z,st){const _t=new Uint8Array(4),wt=i.createTexture();i.bindTexture(D,wt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<Z;Kt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(pt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return wt}const J={};J[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),R(i.DEPTH_TEST),r.setFunc(Qi),Et(!1),Vt(ic),R(i.CULL_FACE),C(Zn);function R(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function N(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Y(D,pt){return h[D]!==pt?(i.bindFramebuffer(D,pt),h[D]=pt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function rt(D,pt){let Z=d,st=!1;if(D){Z=u.get(pt),Z===void 0&&(Z=[],u.set(pt,Z));const _t=D.textures;if(Z.length!==_t.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Kt=_t.length;wt<Kt;wt++)Z[wt]=i.COLOR_ATTACHMENT0+wt;Z.length=_t.length,st=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,st=!0);st&&i.drawBuffers(Z)}function lt(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const ot={[fi]:i.FUNC_ADD,[lf]:i.FUNC_SUBTRACT,[cf]:i.FUNC_REVERSE_SUBTRACT};ot[hf]=i.MIN,ot[uf]=i.MAX;const ut={[df]:i.ZERO,[ff]:i.ONE,[pf]:i.SRC_COLOR,[ra]:i.SRC_ALPHA,[yf]:i.SRC_ALPHA_SATURATE,[_f]:i.DST_COLOR,[gf]:i.DST_ALPHA,[mf]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[xf]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[wf]:i.CONSTANT_ALPHA,[Sf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,pt,Z,st,_t,wt,Kt,_e,Ge,Jt){if(D===Zn){g===!0&&(N(i.BLEND),g=!1);return}if(g===!1&&(R(i.BLEND),g=!0),D!==af){if(D!==v||Jt!==I){if((p!==fi||M!==fi)&&(i.blendEquation(i.FUNC_ADD),p=fi,M=fi),Jt)switch(D){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,S=null,E=null,L=null,k.set(0,0,0),T=0,v=D,I=Jt}return}_t=_t||pt,wt=wt||Z,Kt=Kt||st,(pt!==p||_t!==M)&&(i.blendEquationSeparate(ot[pt],ot[_t]),p=pt,M=_t),(Z!==m||st!==S||wt!==E||Kt!==L)&&(i.blendFuncSeparate(ut[Z],ut[st],ut[wt],ut[Kt]),m=Z,S=st,E=wt,L=Kt),(_e.equals(k)===!1||Ge!==T)&&(i.blendColor(_e.r,_e.g,_e.b,Ge),k.copy(_e),T=Ge),v=D,I=!1}function kt(D,pt){D.side===dn?N(i.CULL_FACE):R(i.CULL_FACE);let Z=D.side===Ye;pt&&(Z=!Z),Et(Z),D.blending===Xi&&D.transparent===!1?C(Zn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const st=D.stencilWrite;o.setTest(st),st&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Xt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?R(i.SAMPLE_ALPHA_TO_COVERAGE):N(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(D){Q!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),Q=D)}function Vt(D){D!==sf?(R(i.CULL_FACE),D!==_&&(D===ic?i.cullFace(i.BACK):D===rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):N(i.CULL_FACE),_=D}function Lt(D){D!==b&&(et&&i.lineWidth(D),b=D)}function Xt(D,pt,Z){D?(R(i.POLYGON_OFFSET_FILL),(z!==pt||W!==Z)&&(i.polygonOffset(pt,Z),z=pt,W=Z)):N(i.POLYGON_OFFSET_FILL)}function P(D){D?R(i.SCISSOR_TEST):N(i.SCISSOR_TEST)}function y(D){D===void 0&&(D=i.TEXTURE0+X-1),K!==D&&(i.activeTexture(D),K=D)}function x(D,pt,Z){Z===void 0&&(K===null?Z=i.TEXTURE0+X-1:Z=K);let st=vt[Z];st===void 0&&(st={type:void 0,texture:void 0},vt[Z]=st),(st.type!==D||st.texture!==pt)&&(K!==Z&&(i.activeTexture(Z),K=Z),i.bindTexture(D,pt||J[D]),st.type=D,st.texture=pt)}function U(){const D=vt[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(D){Ot.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ot.copy(D))}function dt(D){ct.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ct.copy(D))}function Ht(D,pt){let Z=l.get(pt);Z===void 0&&(Z=new WeakMap,l.set(pt,Z));let st=Z.get(D);st===void 0&&(st=i.getUniformBlockIndex(pt,D.name),Z.set(D,st))}function Bt(D,pt){const st=l.get(pt).get(D);a.get(pt)!==st&&(i.uniformBlockBinding(pt,st,D.__bindingPointIndex),a.set(pt,st))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,vt={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,S=null,M=null,E=null,L=null,k=new $t(0,0,0),T=0,I=!1,Q=null,_=null,b=null,z=null,W=null,Ot.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:R,disable:N,bindFramebuffer:Y,drawBuffers:rt,useProgram:lt,setBlending:C,setMaterial:kt,setFlipSided:Et,setCullFace:Vt,setLineWidth:Lt,setPolygonOffset:Xt,setScissorTest:P,activeTexture:y,bindTexture:x,unbindTexture:U,compressedTexImage2D:j,compressedTexImage3D:nt,texImage2D:yt,texImage3D:Dt,updateUBOMapping:Ht,uniformBlockBinding:Bt,texStorage2D:qt,texStorage3D:at,texSubImage2D:H,texSubImage3D:xt,compressedTexSubImage2D:mt,compressedTexSubImage3D:bt,scissor:Ut,viewport:dt,reset:re}}function jc(i,t,e,n){const s=Xv(n);switch(e){case nu:return i*t;case su:return i*t;case ru:return i*t*2;case ou:return i*t/s.components*s.byteLength;case Ml:return i*t/s.components*s.byteLength;case au:return i*t*2/s.components*s.byteLength;case bl:return i*t*2/s.components*s.byteLength;case iu:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case wl:return i*t*4/s.components*s.byteLength;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:case ya:return Math.max(i,16)*Math.max(t,8)/4;case va:case xa:return Math.max(i,8)*Math.max(t,8)/2;case Ma:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case br:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lu:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xv(i){switch(i){case Fn:case Qh:return{byteLength:1,components:1};case Ps:case tu:case Fs:return{byteLength:2,components:1};case xl:case yl:return{byteLength:2,components:4};case yi:case _l:case Ln:return{byteLength:4,components:1};case eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Yv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return f?new OffscreenCanvas(y,x):Ls("canvas")}function v(y,x,U){let j=1;const nt=P(y);if((nt.width>U||nt.height>U)&&(j=U/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const H=Math.floor(j*nt.width),xt=Math.floor(j*nt.height);u===void 0&&(u=g(H,xt));const mt=x?g(H,xt):u;return mt.width=H,mt.height=xt,mt.getContext("2d").drawImage(y,0,0,H,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+H+"x"+xt+")."),mt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),y;return y}function p(y){return y.generateMipmaps&&y.minFilter!==Oe&&y.minFilter!==fn}function m(y){i.generateMipmap(y)}function S(y,x,U,j,nt=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let H=x;if(x===i.RED&&(U===i.FLOAT&&(H=i.R32F),U===i.HALF_FLOAT&&(H=i.R16F),U===i.UNSIGNED_BYTE&&(H=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.R8UI),U===i.UNSIGNED_SHORT&&(H=i.R16UI),U===i.UNSIGNED_INT&&(H=i.R32UI),U===i.BYTE&&(H=i.R8I),U===i.SHORT&&(H=i.R16I),U===i.INT&&(H=i.R32I)),x===i.RG&&(U===i.FLOAT&&(H=i.RG32F),U===i.HALF_FLOAT&&(H=i.RG16F),U===i.UNSIGNED_BYTE&&(H=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.RG8UI),U===i.UNSIGNED_SHORT&&(H=i.RG16UI),U===i.UNSIGNED_INT&&(H=i.RG32UI),U===i.BYTE&&(H=i.RG8I),U===i.SHORT&&(H=i.RG16I),U===i.INT&&(H=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.RGB8UI),U===i.UNSIGNED_SHORT&&(H=i.RGB16UI),U===i.UNSIGNED_INT&&(H=i.RGB32UI),U===i.BYTE&&(H=i.RGB8I),U===i.SHORT&&(H=i.RGB16I),U===i.INT&&(H=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),U===i.UNSIGNED_INT&&(H=i.RGBA32UI),U===i.BYTE&&(H=i.RGBA8I),U===i.SHORT&&(H=i.RGBA16I),U===i.INT&&(H=i.RGBA32I)),x===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),x===i.RGBA){const xt=nt?kr:ie.getTransfer(j);U===i.FLOAT&&(H=i.RGBA32F),U===i.HALF_FLOAT&&(H=i.RGBA16F),U===i.UNSIGNED_BYTE&&(H=xt===ce?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function M(y,x){let U;return y?x===null||x===yi||x===is?U=i.DEPTH24_STENCIL8:x===Ln?U=i.DEPTH32F_STENCIL8:x===Ps&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yi||x===is?U=i.DEPTH_COMPONENT24:x===Ln?U=i.DEPTH_COMPONENT32F:x===Ps&&(U=i.DEPTH_COMPONENT16),U}function E(y,x){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Oe&&y.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function L(y){const x=y.target;x.removeEventListener("dispose",L),T(x),x.isVideoTexture&&h.delete(x)}function k(y){const x=y.target;x.removeEventListener("dispose",k),Q(x)}function T(y){const x=n.get(y);if(x.__webglInit===void 0)return;const U=y.source,j=d.get(U);if(j){const nt=j[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&I(y),Object.keys(j).length===0&&d.delete(U)}n.remove(y)}function I(y){const x=n.get(y);i.deleteTexture(x.__webglTexture);const U=y.source,j=d.get(U);delete j[x.__cacheKey],o.memory.textures--}function Q(y){const x=n.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let nt=0;nt<x.__webglFramebuffer[j].length;nt++)i.deleteFramebuffer(x.__webglFramebuffer[j][nt]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=y.textures;for(let j=0,nt=U.length;j<nt;j++){const H=n.get(U[j]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(U[j])}n.remove(y)}let _=0;function b(){_=0}function z(){const y=_;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),_+=1,y}function W(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function X(y,x){const U=n.get(y);if(y.isVideoTexture&&Lt(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const j=y.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(U,y,x);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function et(y,x){const U=n.get(y);if(y.version>0&&U.__version!==y.version){ct(U,y,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function q(y,x){const U=n.get(y);if(y.version>0&&U.__version!==y.version){ct(U,y,x);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function it(y,x){const U=n.get(y);if(y.version>0&&U.__version!==y.version){G(U,y,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const K={[ns]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},vt={[Oe]:i.NEAREST,[If]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},ft={[Of]:i.NEVER,[Wf]:i.ALWAYS,[Bf]:i.LESS,[hu]:i.LEQUAL,[Hf]:i.EQUAL,[Gf]:i.GEQUAL,[zf]:i.GREATER,[Vf]:i.NOTEQUAL};function St(y,x){if(x.type===Ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===oo||x.magFilter===Ws||x.magFilter===_i||x.minFilter===fn||x.minFilter===oo||x.minFilter===Ws||x.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,K[x.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,K[x.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,K[x.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,vt[x.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Oe||x.minFilter!==Ws&&x.minFilter!==_i||x.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ot(y,x){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",L));const j=x.source;let nt=d.get(j);nt===void 0&&(nt={},d.set(j,nt));const H=W(x);if(H!==y.__cacheKey){nt[H]===void 0&&(nt[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),nt[H].usedTimes++;const xt=nt[y.__cacheKey];xt!==void 0&&(nt[y.__cacheKey].usedTimes--,xt.usedTimes===0&&I(x)),y.__cacheKey=H,y.__webglTexture=nt[H].texture}return U}function ct(y,x,U){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);const nt=Ot(y,x),H=x.source;e.bindTexture(j,y.__webglTexture,i.TEXTURE0+U);const xt=n.get(H);if(H.version!==xt.__version||nt===!0){e.activeTexture(i.TEXTURE0+U);const mt=ie.getPrimaries(ie.workingColorSpace),bt=x.colorSpace===Kn?null:ie.getPrimaries(x.colorSpace),qt=x.colorSpace===Kn||mt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let at=v(x.image,!1,s.maxTextureSize);at=Xt(x,at);const yt=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type);let Ut=S(x.internalFormat,yt,Dt,x.colorSpace,x.isVideoTexture);St(j,x);let dt;const Ht=x.mipmaps,Bt=x.isVideoTexture!==!0,re=xt.__version===void 0||nt===!0,D=H.dataReady,pt=E(x,at);if(x.isDepthTexture)Ut=M(x.format===ss,x.type),re&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Ut,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ut,at.width,at.height,0,yt,Dt,null));else if(x.isDataTexture)if(Ht.length>0){Bt&&re&&e.texStorage2D(i.TEXTURE_2D,pt,Ut,Ht[0].width,Ht[0].height);for(let Z=0,st=Ht.length;Z<st;Z++)dt=Ht[Z],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,dt.width,dt.height,yt,Dt,dt.data):e.texImage2D(i.TEXTURE_2D,Z,Ut,dt.width,dt.height,0,yt,Dt,dt.data);x.generateMipmaps=!1}else Bt?(re&&e.texStorage2D(i.TEXTURE_2D,pt,Ut,at.width,at.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,yt,Dt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,at.width,at.height,0,yt,Dt,at.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ut,Ht[0].width,Ht[0].height,at.depth);for(let Z=0,st=Ht.length;Z<st;Z++)if(dt=Ht[Z],x.format!==gn)if(yt!==null)if(Bt){if(D)if(x.layerUpdates.size>0){const _t=jc(dt.width,dt.height,x.format,x.type);for(const wt of x.layerUpdates){const Kt=dt.data.subarray(wt*_t/dt.data.BYTES_PER_ELEMENT,(wt+1)*_t/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,wt,dt.width,dt.height,1,yt,Kt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,dt.width,dt.height,at.depth,yt,dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ut,dt.width,dt.height,at.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,dt.width,dt.height,at.depth,yt,Dt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ut,dt.width,dt.height,at.depth,0,yt,Dt,dt.data)}else{Bt&&re&&e.texStorage2D(i.TEXTURE_2D,pt,Ut,Ht[0].width,Ht[0].height);for(let Z=0,st=Ht.length;Z<st;Z++)dt=Ht[Z],x.format!==gn?yt!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,dt.width,dt.height,yt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Ut,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,dt.width,dt.height,yt,Dt,dt.data):e.texImage2D(i.TEXTURE_2D,Z,Ut,dt.width,dt.height,0,yt,Dt,dt.data)}else if(x.isDataArrayTexture)if(Bt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ut,at.width,at.height,at.depth),D)if(x.layerUpdates.size>0){const Z=jc(at.width,at.height,x.format,x.type);for(const st of x.layerUpdates){const _t=at.data.subarray(st*Z/at.data.BYTES_PER_ELEMENT,(st+1)*Z/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,at.width,at.height,1,yt,Dt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,at.width,at.height,at.depth,0,yt,Dt,at.data);else if(x.isData3DTexture)Bt?(re&&e.texStorage3D(i.TEXTURE_3D,pt,Ut,at.width,at.height,at.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,at.width,at.height,at.depth,0,yt,Dt,at.data);else if(x.isFramebufferTexture){if(re)if(Bt)e.texStorage2D(i.TEXTURE_2D,pt,Ut,at.width,at.height);else{let Z=at.width,st=at.height;for(let _t=0;_t<pt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ut,Z,st,0,yt,Dt,null),Z>>=1,st>>=1}}else if(Ht.length>0){if(Bt&&re){const Z=P(Ht[0]);e.texStorage2D(i.TEXTURE_2D,pt,Ut,Z.width,Z.height)}for(let Z=0,st=Ht.length;Z<st;Z++)dt=Ht[Z],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,yt,Dt,dt):e.texImage2D(i.TEXTURE_2D,Z,Ut,yt,Dt,dt);x.generateMipmaps=!1}else if(Bt){if(re){const Z=P(at);e.texStorage2D(i.TEXTURE_2D,pt,Ut,Z.width,Z.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,Ut,yt,Dt,at);p(x)&&m(j),xt.__version=H.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function G(y,x,U){if(x.image.length!==6)return;const j=Ot(y,x),nt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+U);const H=n.get(nt);if(nt.version!==H.__version||j===!0){e.activeTexture(i.TEXTURE0+U);const xt=ie.getPrimaries(ie.workingColorSpace),mt=x.colorSpace===Kn?null:ie.getPrimaries(x.colorSpace),bt=x.colorSpace===Kn||xt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const qt=x.isCompressedTexture||x.image[0].isCompressedTexture,at=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let st=0;st<6;st++)!qt&&!at?yt[st]=v(x.image[st],!0,s.maxCubemapSize):yt[st]=at?x.image[st].image:x.image[st],yt[st]=Xt(x,yt[st]);const Dt=yt[0],Ut=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),Ht=S(x.internalFormat,Ut,dt,x.colorSpace),Bt=x.isVideoTexture!==!0,re=H.__version===void 0||j===!0,D=nt.dataReady;let pt=E(x,Dt);St(i.TEXTURE_CUBE_MAP,x);let Z;if(qt){Bt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ht,Dt.width,Dt.height);for(let st=0;st<6;st++){Z=yt[st].mipmaps;for(let _t=0;_t<Z.length;_t++){const wt=Z[_t];x.format!==gn?Ut!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,0,0,wt.width,wt.height,Ut,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,Ht,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,0,0,wt.width,wt.height,Ut,dt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t,Ht,wt.width,wt.height,0,Ut,dt,wt.data)}}}else{if(Z=x.mipmaps,Bt&&re){Z.length>0&&pt++;const st=P(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ht,st.width,st.height)}for(let st=0;st<6;st++)if(at){Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,yt[st].width,yt[st].height,Ut,dt,yt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ht,yt[st].width,yt[st].height,0,Ut,dt,yt[st].data);for(let _t=0;_t<Z.length;_t++){const Kt=Z[_t].image[st].image;Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,0,0,Kt.width,Kt.height,Ut,dt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,Ht,Kt.width,Kt.height,0,Ut,dt,Kt.data)}}else{Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,dt,yt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ht,Ut,dt,yt[st]);for(let _t=0;_t<Z.length;_t++){const wt=Z[_t];Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,0,0,Ut,dt,wt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t+1,Ht,Ut,dt,wt.image[st])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),H.__version=nt.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function J(y,x,U,j,nt,H){const xt=r.convert(U.format,U.colorSpace),mt=r.convert(U.type),bt=S(U.internalFormat,xt,mt,U.colorSpace);if(!n.get(x).__hasExternalTextures){const at=Math.max(1,x.width>>H),yt=Math.max(1,x.height>>H);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,H,bt,at,yt,x.depth,0,xt,mt,null):e.texImage2D(nt,H,bt,at,yt,0,xt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,nt,n.get(U).__webglTexture,0,Et(x)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,nt,n.get(U).__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function R(y,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,y),x.depthBuffer){const j=x.depthTexture,nt=j&&j.isDepthTexture?j.type:null,H=M(x.stencilBuffer,nt),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Et(x);Vt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,H,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,H,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,H,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,y)}else{const j=x.textures;for(let nt=0;nt<j.length;nt++){const H=j[nt],xt=r.convert(H.format,H.colorSpace),mt=r.convert(H.type),bt=S(H.internalFormat,xt,mt,H.colorSpace),qt=Et(x);U&&Vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,bt,x.width,x.height):Vt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,bt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,bt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function N(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const j=n.get(x.depthTexture).__webglTexture,nt=Et(x);if(x.depthTexture.format===Yi)Vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===ss)Vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Y(y){const x=n.get(y),U=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const j=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",nt)};j.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=j}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");N(x.__webglFramebuffer,y)}else if(U){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),R(x.__webglDepthbuffer[j],y,!1);else{const nt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,H)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),R(x.__webglDepthbuffer,y,!1);else{const j=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(y,x,U){const j=n.get(y);x!==void 0&&J(j.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Y(y)}function lt(y){const x=y.texture,U=n.get(y),j=n.get(x);y.addEventListener("dispose",k);const nt=y.textures,H=y.isWebGLCubeRenderTarget===!0,xt=nt.length>1;if(xt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),H){U.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[mt]=[];for(let bt=0;bt<x.mipmaps.length;bt++)U.__webglFramebuffer[mt][bt]=i.createFramebuffer()}else U.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let mt=0;mt<x.mipmaps.length;mt++)U.__webglFramebuffer[mt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(xt)for(let mt=0,bt=nt.length;mt<bt;mt++){const qt=n.get(nt[mt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(y.samples>0&&Vt(y)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let mt=0;mt<nt.length;mt++){const bt=nt[mt];U.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[mt]);const qt=r.convert(bt.format,bt.colorSpace),at=r.convert(bt.type),yt=S(bt.internalFormat,qt,at,bt.colorSpace,y.isXRRenderTarget===!0),Dt=Et(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,yt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,U.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),R(U.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),St(i.TEXTURE_CUBE_MAP,x);for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)J(U.__webglFramebuffer[mt][bt],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,bt);else J(U.__webglFramebuffer[mt],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let mt=0,bt=nt.length;mt<bt;mt++){const qt=nt[mt],at=n.get(qt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),St(i.TEXTURE_2D,qt),J(U.__webglFramebuffer,y,qt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),p(qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(mt=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,j.__webglTexture),St(mt,x),x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)J(U.__webglFramebuffer[bt],y,x,i.COLOR_ATTACHMENT0,mt,bt);else J(U.__webglFramebuffer,y,x,i.COLOR_ATTACHMENT0,mt,0);p(x)&&m(mt),e.unbindTexture()}y.depthBuffer&&Y(y)}function ot(y){const x=y.textures;for(let U=0,j=x.length;U<j;U++){const nt=x[U];if(p(nt)){const H=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(nt).__webglTexture;e.bindTexture(H,xt),m(H),e.unbindTexture()}}}const ut=[],C=[];function kt(y){if(y.samples>0){if(Vt(y)===!1){const x=y.textures,U=y.width,j=y.height;let nt=i.COLOR_BUFFER_BIT;const H=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(y),mt=x.length>1;if(mt)for(let bt=0;bt<x.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);const qt=n.get(x[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,U,j,0,0,U,j,nt,i.NEAREST),l===!0&&(ut.length=0,C.length=0,ut.push(i.COLOR_ATTACHMENT0+bt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ut.push(H),C.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let bt=0;bt<x.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);const qt=n.get(x[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Et(y){return Math.min(s.maxSamples,y.samples)}function Vt(y){const x=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Lt(y){const x=o.render.frame;h.get(y)!==x&&(h.set(y,x),y.update())}function Xt(y,x){const U=y.colorSpace,j=y.format,nt=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==ei&&U!==Kn&&(ie.getTransfer(U)===ce?(j!==gn||nt!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function P(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=b,this.setTexture2D=X,this.setTexture2DArray=et,this.setTexture3D=q,this.setTextureCube=it,this.rebindTextures=rt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Vt}function Kv(i,t){function e(n,s=Kn){let r;const o=ie.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return i.BYTE;if(n===tu)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Fs)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===gn)return i.RGBA;if(n===su)return i.LUMINANCE;if(n===ru)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===ou)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===au)return i.RG;if(n===bl)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===_r||n===xr||n===yr||n===Mr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===_a||n===xa||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===ba)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===Ea||n===Aa||n===Ta||n===Ra||n===Ca||n===ka||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===La)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===br)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===Ha||n===za||n===Va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class jv extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xi extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zv={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qv=`
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

}`;class t_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ti({vertexShader:Jv,fragmentShader:Qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e_ extends as{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new t_,p=e.getContextAttributes();let m=null,S=null;const M=[],E=[],L=new jt;let k=null;const T=new nn;T.layers.enable(1),T.viewport=new me;const I=new nn;I.layers.enable(2),I.viewport=new me;const Q=[T,I],_=new jv;_.layers.enable(1),_.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=M[G];return J===void 0&&(J=new Fo,M[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=M[G];return J===void 0&&(J=new Fo,M[G]=J),J.getGripSpace()},this.getHand=function(G){let J=M[G];return J===void 0&&(J=new Fo,M[G]=J),J.getHandSpace()};function W(G){const J=E.indexOf(G.inputSource);if(J===-1)return;const R=M[J];R!==void 0&&(R.update(G.inputSource,G.frame,c||o),R.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",et);for(let G=0;G<M.length;G++){const J=E[G];J!==null&&(E[G]=null,M[G].disconnect(J))}b=null,z=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,S=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(k),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",et),p.xrCompatible!==!0&&await e.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Mi(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,R=null,N=null;p.depth&&(N=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?ss:Yi,R=p.stencil?is:yi);const Y={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Y),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Mi(d.textureWidth,d.textureHeight,{format:gn,type:Fn,depthTexture:new bu(d.textureWidth,d.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function et(G){for(let J=0;J<G.removed.length;J++){const R=G.removed[J],N=E.indexOf(R);N>=0&&(E[N]=null,M[N].disconnect(R))}for(let J=0;J<G.added.length;J++){const R=G.added[J];let N=E.indexOf(R);if(N===-1){for(let rt=0;rt<M.length;rt++)if(rt>=E.length){E.push(R),N=rt;break}else if(E[rt]===null){E[rt]=R,N=rt;break}if(N===-1)break}const Y=M[N];Y&&Y.connect(R)}}const q=new B,it=new B;function K(G,J,R){q.setFromMatrixPosition(J.matrixWorld),it.setFromMatrixPosition(R.matrixWorld);const N=q.distanceTo(it),Y=J.projectionMatrix.elements,rt=R.projectionMatrix.elements,lt=Y[14]/(Y[10]-1),ot=Y[14]/(Y[10]+1),ut=(Y[9]+1)/Y[5],C=(Y[9]-1)/Y[5],kt=(Y[8]-1)/Y[0],Et=(rt[8]+1)/rt[0],Vt=lt*kt,Lt=lt*Et,Xt=N/(-kt+Et),P=Xt*-kt;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(P),G.translateZ(Xt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Y[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const y=lt+Xt,x=ot+Xt,U=Vt-P,j=Lt+(N-P),nt=ut*ot/x*y,H=C*ot/x*y;G.projectionMatrix.makePerspective(U,j,nt,H,y,x),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function vt(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let J=G.near,R=G.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(R=v.depthFar)),_.near=I.near=T.near=J,_.far=I.far=T.far=R,(b!==_.near||z!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,z=_.far);const N=G.parent,Y=_.cameras;vt(_,N);for(let rt=0;rt<Y.length;rt++)vt(Y[rt],N);Y.length===2?K(_,T,I):_.projectionMatrix.copy(T.projectionMatrix),ft(G,_,N)};function ft(G,J,R){R===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(R.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ga*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let St=null;function Ot(G,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const R=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let N=!1;R.length!==_.cameras.length&&(_.cameras.length=0,N=!0);for(let rt=0;rt<R.length;rt++){const lt=R[rt];let ot=null;if(f!==null)ot=f.getViewport(lt);else{const C=u.getViewSubImage(d,lt);ot=C.viewport,rt===0&&(t.setRenderTargetTextures(S,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(S))}let ut=Q[rt];ut===void 0&&(ut=new nn,ut.layers.enable(rt),ut.viewport=new me,Q[rt]=ut),ut.matrix.fromArray(lt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(lt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ot.x,ot.y,ot.width,ot.height),rt===0&&(_.matrix.copy(ut.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),N===!0&&_.cameras.push(ut)}const Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){const rt=u.getDepthInformation(R[0]);rt&&rt.isValid&&rt.texture&&v.init(t,rt,s.renderState)}}for(let R=0;R<M.length;R++){const N=E[R],Y=M[R];N!==null&&Y!==void 0&&Y.update(N,J,c||o)}St&&St(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ct=new yu;ct.setAnimationLoop(Ot),this.setAnimationLoop=function(G){St=G},this.dispose=function(){}}}const ci=new wn,n_=new ue;function i_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,vu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ye&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ye&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),M=S.envMap,E=S.envMapRotation;M&&(p.envMap.value=M,ci.copy(E),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(ci)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const E=M.program;n.uniformBlockBinding(S,E)}function c(S,M){let E=s[S.id];E===void 0&&(g(S),E=h(S),s[S.id]=E,S.addEventListener("dispose",p));const L=M.program;n.updateUBOMapping(S,L);const k=t.render.frame;r[S.id]!==k&&(d(S),r[S.id]=k)}function h(S){const M=u();S.__bindingPointIndex=M;const E=i.createBuffer(),L=S.__size,k=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,k),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],E=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let k=0,T=E.length;k<T;k++){const I=Array.isArray(E[k])?E[k]:[E[k]];for(let Q=0,_=I.length;Q<_;Q++){const b=I[Q];if(f(b,k,Q,L)===!0){const z=b.__offset,W=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let et=0;et<W.length;et++){const q=W[et],it=v(q);typeof q=="number"||typeof q=="boolean"?(b.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,z+X,b.__data)):q.isMatrix3?(b.__data[0]=q.elements[0],b.__data[1]=q.elements[1],b.__data[2]=q.elements[2],b.__data[3]=0,b.__data[4]=q.elements[3],b.__data[5]=q.elements[4],b.__data[6]=q.elements[5],b.__data[7]=0,b.__data[8]=q.elements[6],b.__data[9]=q.elements[7],b.__data[10]=q.elements[8],b.__data[11]=0):(q.toArray(b.__data,X),X+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,M,E,L){const k=S.value,T=M+"_"+E;if(L[T]===void 0)return typeof k=="number"||typeof k=="boolean"?L[T]=k:L[T]=k.clone(),!0;{const I=L[T];if(typeof k=="number"||typeof k=="boolean"){if(I!==k)return L[T]=k,!0}else if(I.equals(k)===!1)return I.copy(k),!0}return!1}function g(S){const M=S.uniforms;let E=0;const L=16;for(let T=0,I=M.length;T<I;T++){const Q=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,b=Q.length;_<b;_++){const z=Q[_],W=Array.isArray(z.value)?z.value:[z.value];for(let X=0,et=W.length;X<et;X++){const q=W[X],it=v(q),K=E%L,vt=K%it.boundary,ft=K+vt;E+=vt,ft!==0&&L-ft<it.storage&&(E+=L-ft),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=it.storage}}}const k=E%L;return k>0&&(E+=L-k),S.__size=E,S.__cache={},this}function v(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class r_{constructor(t={}){const{canvas:e=qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Jn,this.toneMappingExposure=1;const M=this;let E=!1,L=0,k=0,T=null,I=-1,Q=null;const _=new me,b=new me;let z=null;const W=new $t(0);let X=0,et=e.width,q=e.height,it=1,K=null,vt=null;const ft=new me(0,0,et,q),St=new me(0,0,et,q);let Ot=!1;const ct=new Tl;let G=!1,J=!1;const R=new ue,N=new ue,Y=new B,rt=new me,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function ut(){return T===null?it:1}let C=n;function kt(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",wt,!1),C===null){const F="webgl2";if(C=kt(F,w),C===null)throw kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Et,Vt,Lt,Xt,P,y,x,U,j,nt,H,xt,mt,bt,qt,at,yt,Dt,Ut,dt,Ht,Bt,re,D;function pt(){Et=new h0(C),Et.init(),Bt=new Kv(C,Et),Vt=new s0(C,Et,t,Bt),Lt=new qv(C),Vt.reverseDepthBuffer&&Lt.buffers.depth.setReversed(!0),Xt=new f0(C),P=new Pv,y=new Yv(C,Et,Lt,P,Vt,Bt,Xt),x=new o0(M),U=new c0(M),j=new yp(C),re=new n0(C,j),nt=new u0(C,j,Xt,re),H=new m0(C,nt,j,Xt),Ut=new p0(C,Vt,y),at=new r0(P),xt=new kv(M,x,U,Et,Vt,re,at),mt=new i_(M,P),bt=new Dv,qt=new Bv(Et),Dt=new e0(M,x,U,Lt,H,d,l),yt=new Wv(M,H,Vt),D=new s_(C,Xt,Vt,Lt),dt=new i0(C,Et,Xt),Ht=new d0(C,Et,Xt),Xt.programs=xt.programs,M.capabilities=Vt,M.extensions=Et,M.properties=P,M.renderLists=bt,M.shadowMap=yt,M.state=Lt,M.info=Xt}pt();const Z=new e_(M,C);this.xr=Z,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(et,q,!1))},this.getSize=function(w){return w.set(et,q)},this.setSize=function(w,F,V=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,q=F,e.width=Math.floor(w*it),e.height=Math.floor(F*it),V===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(et*it,q*it).floor()},this.setDrawingBufferSize=function(w,F,V){et=w,q=F,it=V,e.width=Math.floor(w*V),e.height=Math.floor(F*V),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(ft)},this.setViewport=function(w,F,V,$){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,F,V,$),Lt.viewport(_.copy(ft).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(St)},this.setScissor=function(w,F,V,$){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,F,V,$),Lt.scissor(b.copy(St).multiplyScalar(it).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(w){Lt.setScissorTest(Ot=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){vt=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,F=!0,V=!0){let $=0;if(w){let O=!1;if(T!==null){const ht=T.texture.format;O=ht===wl||ht===bl||ht===Ml}if(O){const ht=T.texture.type,Mt=ht===Fn||ht===yi||ht===Ps||ht===is||ht===xl||ht===yl,At=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Nt=At.r,Ft=At.g,Ct=At.b;Mt?(f[0]=Nt,f[1]=Ft,f[2]=Ct,f[3]=Tt,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=Nt,g[1]=Ft,g[2]=Ct,g[3]=Tt,C.clearBufferiv(C.COLOR,0,g))}else $|=C.COLOR_BUFFER_BIT}F&&($|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&($|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),bt.dispose(),qt.dispose(),P.dispose(),x.dispose(),U.dispose(),H.dispose(),re.dispose(),D.dispose(),xt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Nl),Z.removeEventListener("sessionend",Fl),ni.stop()};function st(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Xt.autoReset,F=yt.enabled,V=yt.autoUpdate,$=yt.needsUpdate,O=yt.type;pt(),Xt.autoReset=w,yt.enabled=F,yt.autoUpdate=V,yt.needsUpdate=$,yt.type=O}function wt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Kt(w){const F=w.target;F.removeEventListener("dispose",Kt),_e(F)}function _e(w){Ge(w),P.remove(w)}function Ge(w){const F=P.get(w).programs;F!==void 0&&(F.forEach(function(V){xt.releaseProgram(V)}),w.isShaderMaterial&&xt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,V,$,O,ht){F===null&&(F=lt);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,At=ju(w,F,V,$,O);Lt.setMaterial($,Mt);let Tt=V.index,Nt=1;if($.wireframe===!0){if(Tt=nt.getWireframeAttribute(V),Tt===void 0)return;Nt=2}const Ft=V.drawRange,Ct=V.attributes.position;let se=Ft.start*Nt,le=(Ft.start+Ft.count)*Nt;ht!==null&&(se=Math.max(se,ht.start*Nt),le=Math.min(le,(ht.start+ht.count)*Nt)),Tt!==null?(se=Math.max(se,0),le=Math.min(le,Tt.count)):Ct!=null&&(se=Math.max(se,0),le=Math.min(le,Ct.count));const fe=le-se;if(fe<0||fe===1/0)return;re.setup(O,$,At,V,Tt);let Ke,te=dt;if(Tt!==null&&(Ke=j.get(Tt),te=Ht,te.setIndex(Ke)),O.isMesh)$.wireframe===!0?(Lt.setLineWidth($.wireframeLinewidth*ut()),te.setMode(C.LINES)):te.setMode(C.TRIANGLES);else if(O.isLine){let Pt=$.linewidth;Pt===void 0&&(Pt=1),Lt.setLineWidth(Pt*ut()),O.isLineSegments?te.setMode(C.LINES):O.isLineLoop?te.setMode(C.LINE_LOOP):te.setMode(C.LINE_STRIP)}else O.isPoints?te.setMode(C.POINTS):O.isSprite&&te.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)te.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))te.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pt=O._multiDrawStarts,Ae=O._multiDrawCounts,ee=O._multiDrawCount,an=Tt?j.get(Tt).bytesPerElement:1,wi=P.get($).currentProgram.getUniforms();for(let je=0;je<ee;je++)wi.setValue(C,"_gl_DrawID",je),te.render(Pt[je]/an,Ae[je])}else if(O.isInstancedMesh)te.renderInstances(se,fe,O.count);else if(V.isInstancedBufferGeometry){const Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ae=Math.min(V.instanceCount,Pt);te.renderInstances(se,fe,Ae)}else te.render(se,fe)};function Jt(w,F,V){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=Ye,w.needsUpdate=!0,Gs(w,F,V),w.side=Qn,w.needsUpdate=!0,Gs(w,F,V),w.side=dn):Gs(w,F,V)}this.compile=function(w,F,V=null){V===null&&(V=w),p=qt.get(V),p.init(F),S.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==V&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const $=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ht=O.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const At=ht[Mt];Jt(At,V,O),$.add(At)}else Jt(ht,V,O),$.add(ht)}),S.pop(),p=null,$},this.compileAsync=function(w,F,V=null){const $=this.compile(w,F,V);return new Promise(O=>{function ht(){if($.forEach(function(Mt){P.get(Mt).currentProgram.isReady()&&$.delete(Mt)}),$.size===0){O(w);return}setTimeout(ht,10)}Et.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let We=null;function Sn(w){We&&We(w)}function Nl(){ni.stop()}function Fl(){ni.start()}const ni=new yu;ni.setAnimationLoop(Sn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(w){We=w,Z.setAnimationLoop(w),w===null?ni.stop():ni.start()},Z.addEventListener("sessionstart",Nl),Z.addEventListener("sessionend",Fl),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,F,T),p=qt.get(w,S.length),p.init(F),S.push(p),N.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ct.setFromProjectionMatrix(N),J=this.localClippingEnabled,G=at.init(this.clippingPlanes,J),v=bt.get(w,m.length),v.init(),m.push(v),Z.enabled===!0&&Z.isPresenting===!0){const ht=M.xr.getDepthSensingMesh();ht!==null&&Zr(ht,F,-1/0,M.sortObjects)}Zr(w,F,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(K,vt),ot=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ot&&Dt.addToRenderList(v,w),this.info.render.frame++,G===!0&&at.beginShadows();const V=p.state.shadowsArray;yt.render(V,w,F),G===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,O=v.transmissive;if(p.setupLights(),F.isArrayCamera){const ht=F.cameras;if(O.length>0)for(let Mt=0,At=ht.length;Mt<At;Mt++){const Tt=ht[Mt];Bl($,O,w,Tt)}ot&&Dt.render(w);for(let Mt=0,At=ht.length;Mt<At;Mt++){const Tt=ht[Mt];Ol(v,w,Tt,Tt.viewport)}}else O.length>0&&Bl($,O,w,F),ot&&Dt.render(w),Ol(v,w,F);T!==null&&(y.updateMultisampleRenderTarget(T),y.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(M,w,F),re.resetDefaultState(),I=-1,Q=null,S.pop(),S.length>0?(p=S[S.length-1],G===!0&&at.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Zr(w,F,V,$){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ct.intersectsSprite(w)){$&&rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(N);const Mt=H.update(w),At=w.material;At.visible&&v.push(w,Mt,At,V,rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ct.intersectsObject(w))){const Mt=H.update(w),At=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),rt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),rt.copy(Mt.boundingSphere.center)),rt.applyMatrix4(w.matrixWorld).applyMatrix4(N)),Array.isArray(At)){const Tt=Mt.groups;for(let Nt=0,Ft=Tt.length;Nt<Ft;Nt++){const Ct=Tt[Nt],se=At[Ct.materialIndex];se&&se.visible&&v.push(w,Mt,se,V,rt.z,Ct)}}else At.visible&&v.push(w,Mt,At,V,rt.z,null)}}const ht=w.children;for(let Mt=0,At=ht.length;Mt<At;Mt++)Zr(ht[Mt],F,V,$)}function Ol(w,F,V,$){const O=w.opaque,ht=w.transmissive,Mt=w.transparent;p.setupLightsView(V),G===!0&&at.setGlobalState(M.clippingPlanes,V),$&&Lt.viewport(_.copy($)),O.length>0&&Vs(O,F,V),ht.length>0&&Vs(ht,F,V),Mt.length>0&&Vs(Mt,F,V),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Bl(w,F,V,$){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Mi(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Fs:Fn,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ht=p.state.transmissionRenderTarget[$.id],Mt=$.viewport||_;ht.setSize(Mt.z,Mt.w);const At=M.getRenderTarget();M.setRenderTarget(ht),M.getClearColor(W),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),ot&&Dt.render(V);const Tt=M.toneMapping;M.toneMapping=Jn;const Nt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),G===!0&&at.setGlobalState(M.clippingPlanes,$),Vs(w,V,$),y.updateMultisampleRenderTarget(ht),y.updateRenderTargetMipmap(ht),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Ct=0,se=F.length;Ct<se;Ct++){const le=F[Ct],fe=le.object,Ke=le.geometry,te=le.material,Pt=le.group;if(te.side===dn&&fe.layers.test($.layers)){const Ae=te.side;te.side=Ye,te.needsUpdate=!0,Hl(fe,V,$,Ke,te,Pt),te.side=Ae,te.needsUpdate=!0,Ft=!0}}Ft===!0&&(y.updateMultisampleRenderTarget(ht),y.updateRenderTargetMipmap(ht))}M.setRenderTarget(At),M.setClearColor(W,X),Nt!==void 0&&($.viewport=Nt),M.toneMapping=Tt}function Vs(w,F,V){const $=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ht=w.length;O<ht;O++){const Mt=w[O],At=Mt.object,Tt=Mt.geometry,Nt=$===null?Mt.material:$,Ft=Mt.group;At.layers.test(V.layers)&&Hl(At,F,V,Tt,Nt,Ft)}}function Hl(w,F,V,$,O,ht){w.onBeforeRender(M,F,V,$,O,ht),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(M,F,V,$,w,ht),O.transparent===!0&&O.side===dn&&O.forceSinglePass===!1?(O.side=Ye,O.needsUpdate=!0,M.renderBufferDirect(V,F,$,O,w,ht),O.side=Qn,O.needsUpdate=!0,M.renderBufferDirect(V,F,$,O,w,ht),O.side=dn):M.renderBufferDirect(V,F,$,O,w,ht),w.onAfterRender(M,F,V,$,O,ht)}function Gs(w,F,V){F.isScene!==!0&&(F=lt);const $=P.get(w),O=p.state.lights,ht=p.state.shadowsArray,Mt=O.state.version,At=xt.getParameters(w,O.state,ht,F,V),Tt=xt.getProgramCacheKey(At);let Nt=$.programs;$.environment=w.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(w.isMeshStandardMaterial?U:x).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",Kt),Nt=new Map,$.programs=Nt);let Ft=Nt.get(Tt);if(Ft!==void 0){if($.currentProgram===Ft&&$.lightsStateVersion===Mt)return Vl(w,At),Ft}else At.uniforms=xt.getUniforms(w),w.onBeforeCompile(At,M),Ft=xt.acquireProgram(At,Tt),Nt.set(Tt,Ft),$.uniforms=At.uniforms;const Ct=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=at.uniform),Vl(w,At),$.needsLights=Ju(w),$.lightsStateVersion=Mt,$.needsLights&&(Ct.ambientLightColor.value=O.state.ambient,Ct.lightProbe.value=O.state.probe,Ct.directionalLights.value=O.state.directional,Ct.directionalLightShadows.value=O.state.directionalShadow,Ct.spotLights.value=O.state.spot,Ct.spotLightShadows.value=O.state.spotShadow,Ct.rectAreaLights.value=O.state.rectArea,Ct.ltc_1.value=O.state.rectAreaLTC1,Ct.ltc_2.value=O.state.rectAreaLTC2,Ct.pointLights.value=O.state.point,Ct.pointLightShadows.value=O.state.pointShadow,Ct.hemisphereLights.value=O.state.hemi,Ct.directionalShadowMap.value=O.state.directionalShadowMap,Ct.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ct.spotShadowMap.value=O.state.spotShadowMap,Ct.spotLightMatrix.value=O.state.spotLightMatrix,Ct.spotLightMap.value=O.state.spotLightMap,Ct.pointShadowMap.value=O.state.pointShadowMap,Ct.pointShadowMatrix.value=O.state.pointShadowMatrix),$.currentProgram=Ft,$.uniformsList=null,Ft}function zl(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Sr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Vl(w,F){const V=P.get(w);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function ju(w,F,V,$,O){F.isScene!==!0&&(F=lt),y.resetTextureUnits();const ht=F.fog,Mt=$.isMeshStandardMaterial?F.environment:null,At=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ei,Tt=($.isMeshStandardMaterial?U:x).get($.envMap||Mt),Nt=$.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ct=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,le=!!V.morphAttributes.color;let fe=Jn;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(fe=M.toneMapping);const Ke=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Ke!==void 0?Ke.length:0,Pt=P.get($),Ae=p.state.lights;if(G===!0&&(J===!0||w!==Q)){const tn=w===Q&&$.id===I;at.setState($,w,tn)}let ee=!1;$.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ae.state.version||Pt.outputColorSpace!==At||O.isBatchedMesh&&Pt.batching===!1||!O.isBatchedMesh&&Pt.batching===!0||O.isBatchedMesh&&Pt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pt.instancing===!1||!O.isInstancedMesh&&Pt.instancing===!0||O.isSkinnedMesh&&Pt.skinning===!1||!O.isSkinnedMesh&&Pt.skinning===!0||O.isInstancedMesh&&Pt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pt.instancingMorph===!1&&O.morphTexture!==null||Pt.envMap!==Tt||$.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==at.numPlanes||Pt.numIntersection!==at.numIntersection)||Pt.vertexAlphas!==Nt||Pt.vertexTangents!==Ft||Pt.morphTargets!==Ct||Pt.morphNormals!==se||Pt.morphColors!==le||Pt.toneMapping!==fe||Pt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Pt.__version=$.version);let an=Pt.currentProgram;ee===!0&&(an=Gs($,F,O));let wi=!1,je=!1,Jr=!1;const ge=an.getUniforms(),On=Pt.uniforms;if(Lt.useProgram(an.program)&&(wi=!0,je=!0,Jr=!0),$.id!==I&&(I=$.id,je=!0),wi||Q!==w){Vt.reverseDepthBuffer?(R.copy(w.projectionMatrix),Yf(R),Kf(R),ge.setValue(C,"projectionMatrix",R)):ge.setValue(C,"projectionMatrix",w.projectionMatrix),ge.setValue(C,"viewMatrix",w.matrixWorldInverse);const tn=ge.map.cameraPosition;tn!==void 0&&tn.setValue(C,Y.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&ge.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ge.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,je=!0,Jr=!0)}if(O.isSkinnedMesh){ge.setOptional(C,O,"bindMatrix"),ge.setOptional(C,O,"bindMatrixInverse");const tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ge.setValue(C,"boneTexture",tn.boneTexture,y))}O.isBatchedMesh&&(ge.setOptional(C,O,"batchingTexture"),ge.setValue(C,"batchingTexture",O._matricesTexture,y),ge.setOptional(C,O,"batchingIdTexture"),ge.setValue(C,"batchingIdTexture",O._indirectTexture,y),ge.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&ge.setValue(C,"batchingColorTexture",O._colorsTexture,y));const Qr=V.morphAttributes;if((Qr.position!==void 0||Qr.normal!==void 0||Qr.color!==void 0)&&Ut.update(O,V,an),(je||Pt.receiveShadow!==O.receiveShadow)&&(Pt.receiveShadow=O.receiveShadow,ge.setValue(C,"receiveShadow",O.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(On.envMap.value=Tt,On.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&F.environment!==null&&(On.envMapIntensity.value=F.environmentIntensity),je&&(ge.setValue(C,"toneMappingExposure",M.toneMappingExposure),Pt.needsLights&&Zu(On,Jr),ht&&$.fog===!0&&mt.refreshFogUniforms(On,ht),mt.refreshMaterialUniforms(On,$,it,q,p.state.transmissionRenderTarget[w.id]),Sr.upload(C,zl(Pt),On,y)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Sr.upload(C,zl(Pt),On,y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ge.setValue(C,"center",O.center),ge.setValue(C,"modelViewMatrix",O.modelViewMatrix),ge.setValue(C,"normalMatrix",O.normalMatrix),ge.setValue(C,"modelMatrix",O.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const tn=$.uniformsGroups;for(let to=0,Qu=tn.length;to<Qu;to++){const Gl=tn[to];D.update(Gl,an),D.bind(Gl,an)}}return an}function Zu(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Ju(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,F,V){P.get(w.texture).__webglTexture=F,P.get(w.depthTexture).__webglTexture=V;const $=P.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=V===void 0,$.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const V=P.get(w);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,V=0){T=w,L=F,k=V;let $=!0,O=null,ht=!1,Mt=!1;if(w){const Tt=P.get(w);if(Tt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(C.FRAMEBUFFER,null),$=!1;else if(Tt.__webglFramebuffer===void 0)y.setupRenderTarget(w);else if(Tt.__hasExternalTextures)y.rebindTextures(w,P.get(w.texture).__webglTexture,P.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ct=w.depthTexture;if(Tt.__boundDepthTexture!==Ct){if(Ct!==null&&P.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(w)}}const Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Mt=!0);const Ft=P.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?O=Ft[F][V]:O=Ft[F],ht=!0):w.samples>0&&y.useMultisampledRTT(w)===!1?O=P.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[V]:O=Ft,_.copy(w.viewport),b.copy(w.scissor),z=w.scissorTest}else _.copy(ft).multiplyScalar(it).floor(),b.copy(St).multiplyScalar(it).floor(),z=Ot;if(Lt.bindFramebuffer(C.FRAMEBUFFER,O)&&$&&Lt.drawBuffers(w,O),Lt.viewport(_),Lt.scissor(b),Lt.setScissorTest(z),ht){const Tt=P.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,V)}else if(Mt){const Tt=P.get(w.texture),Nt=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.__webglTexture,V||0,Nt)}I=-1},this.readRenderTargetPixels=function(w,F,V,$,O,ht,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){Lt.bindFramebuffer(C.FRAMEBUFFER,At);try{const Tt=w.texture,Nt=Tt.format,Ft=Tt.type;if(!Vt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-$&&V>=0&&V<=w.height-O&&C.readPixels(F,V,$,O,Bt.convert(Nt),Bt.convert(Ft),ht)}finally{const Tt=T!==null?P.get(T).__webglFramebuffer:null;Lt.bindFramebuffer(C.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,F,V,$,O,ht,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){const Tt=w.texture,Nt=Tt.format,Ft=Tt.type;if(!Vt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-$&&V>=0&&V<=w.height-O){Lt.bindFramebuffer(C.FRAMEBUFFER,At);const Ct=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ct),C.bufferData(C.PIXEL_PACK_BUFFER,ht.byteLength,C.STREAM_READ),C.readPixels(F,V,$,O,Bt.convert(Nt),Bt.convert(Ft),0);const se=T!==null?P.get(T).__webglFramebuffer:null;Lt.bindFramebuffer(C.FRAMEBUFFER,se);const le=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Xf(C,le,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ct),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ht),C.deleteBuffer(Ct),C.deleteSync(le),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,V=0){w.isTexture!==!0&&(wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const $=Math.pow(2,-V),O=Math.floor(w.image.width*$),ht=Math.floor(w.image.height*$),Mt=F!==null?F.x:0,At=F!==null?F.y:0;y.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,Mt,At,O,ht),Lt.unbindTexture()},this.copyTextureToTexture=function(w,F,V=null,$=null,O=0){w.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ht,Mt,At,Tt,Nt,Ft;V!==null?(ht=V.max.x-V.min.x,Mt=V.max.y-V.min.y,At=V.min.x,Tt=V.min.y):(ht=w.image.width,Mt=w.image.height,At=0,Tt=0),$!==null?(Nt=$.x,Ft=$.y):(Nt=0,Ft=0);const Ct=Bt.convert(F.format),se=Bt.convert(F.type);y.setTexture2D(F,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const le=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ke=C.getParameter(C.UNPACK_SKIP_PIXELS),te=C.getParameter(C.UNPACK_SKIP_ROWS),Pt=C.getParameter(C.UNPACK_SKIP_IMAGES),Ae=w.isCompressedTexture?w.mipmaps[O]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,At),C.pixelStorei(C.UNPACK_SKIP_ROWS,Tt),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Nt,Ft,ht,Mt,Ct,se,Ae.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Nt,Ft,Ae.width,Ae.height,Ct,Ae.data):C.texSubImage2D(C.TEXTURE_2D,O,Nt,Ft,ht,Mt,Ct,se,Ae),C.pixelStorei(C.UNPACK_ROW_LENGTH,le),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,te),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pt),O===0&&F.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Lt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,V=null,$=null,O=0){w.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,$=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0);let ht,Mt,At,Tt,Nt,Ft,Ct,se,le;const fe=w.isCompressedTexture?w.mipmaps[O]:w.image;V!==null?(ht=V.max.x-V.min.x,Mt=V.max.y-V.min.y,At=V.max.z-V.min.z,Tt=V.min.x,Nt=V.min.y,Ft=V.min.z):(ht=fe.width,Mt=fe.height,At=fe.depth,Tt=0,Nt=0,Ft=0),$!==null?(Ct=$.x,se=$.y,le=$.z):(Ct=0,se=0,le=0);const Ke=Bt.convert(F.format),te=Bt.convert(F.type);let Pt;if(F.isData3DTexture)y.setTexture3D(F,0),Pt=C.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)y.setTexture2DArray(F,0),Pt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Ae=C.getParameter(C.UNPACK_ROW_LENGTH),ee=C.getParameter(C.UNPACK_IMAGE_HEIGHT),an=C.getParameter(C.UNPACK_SKIP_PIXELS),wi=C.getParameter(C.UNPACK_SKIP_ROWS),je=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,fe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ft),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Pt,O,Ct,se,le,ht,Mt,At,Ke,te,fe.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Pt,O,Ct,se,le,ht,Mt,At,Ke,fe.data):C.texSubImage3D(Pt,O,Ct,se,le,ht,Mt,At,Ke,te,fe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ae),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ee),C.pixelStorei(C.UNPACK_SKIP_PIXELS,an),C.pixelStorei(C.UNPACK_SKIP_ROWS,wi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,je),O===0&&F.generateMipmaps&&C.generateMipmap(Pt),Lt.unbindTexture()},this.initRenderTarget=function(w){P.get(w).__webglFramebuffer===void 0&&y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?y.setTextureCube(w,0):w.isData3DTexture?y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?y.setTexture2DArray(w,0):y.setTexture2D(w,0),Lt.unbindTexture()},this.resetState=function(){L=0,k=0,T=null,Lt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sl?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===$r?"display-p3":"srgb"}}class Ir{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new Ir(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class o_ extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tu extends ls{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ur=new B,Nr=new B,Zc=new ue,_s=new El,ur=new qr,Oo=new B,Jc=new B;class a_ extends Ee{constructor(t=new on,e=new Tu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ur.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Nr);t.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,t.ray.intersectsSphere(ur)===!1)return;Zc.copy(s).invert(),_s.copy(t.ray).applyMatrix4(Zc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=h.getX(v),S=h.getX(v+1),M=dr(this,t,_s,l,m,S);M&&e.push(M)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=dr(this,t,_s,l,v,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=dr(this,t,_s,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=dr(this,t,_s,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ur.fromBufferAttribute(o,s),Nr.fromBufferAttribute(o,r),e.distanceSqToSegment(Ur,Nr,Oo,Jc)>n)return;Oo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Oo);if(!(l<t.near||l>t.far))return{distance:l,point:Jc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class l_ extends Be{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cl extends on{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new vn(u,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(f,2));function S(){const E=new B,L=new B;let k=0;const T=(e-t)/n;for(let I=0;I<=r;I++){const Q=[],_=I/r,b=_*(e-t)+t;for(let z=0;z<=s;z++){const W=z/s,X=W*l+a,et=Math.sin(X),q=Math.cos(X);L.x=b*et,L.y=-_*n+p,L.z=b*q,u.push(L.x,L.y,L.z),E.set(et,T,q).normalize(),d.push(E.x,E.y,E.z),f.push(W,1-_),Q.push(g++)}v.push(Q)}for(let I=0;I<s;I++)for(let Q=0;Q<r;Q++){const _=v[Q][I],b=v[Q+1][I],z=v[Q+1][I+1],W=v[Q][I+1];t>0&&(h.push(_,b,W),k+=3),e>0&&(h.push(b,z,W),k+=3)}c.addGroup(m,k,0),m+=k}function M(E){const L=g,k=new jt,T=new B;let I=0;const Q=E===!0?t:e,_=E===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),g++;const b=g;for(let z=0;z<=s;z++){const X=z/s*l+a,et=Math.cos(X),q=Math.sin(X);T.x=Q*q,T.y=p*_,T.z=Q*et,u.push(T.x,T.y,T.z),d.push(0,_,0),k.x=et*.5+.5,k.y=q*.5*_+.5,f.push(k.x,k.y),g++}for(let z=0;z<s;z++){const W=L+z,X=b+z;E===!0?h.push(X,X+1,W):h.push(X+1,X,W),I+=3}c.addGroup(m,I,E===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fr extends ls{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Qc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class c_{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const h_=new c_;class kl{constructor(t){this.manager=t!==void 0?t:h_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}kl.DEFAULT_MATERIAL_NAME="__DEFAULT";class u_ extends kl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Qc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ls("img");function l(){h(),Qc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Ru extends kl{constructor(t){super(t)}load(t,e,n,s){const r=new Be,o=new u_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Cu extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class d_ extends Cu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Bo=new ue,th=new B,eh=new B;class f_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;th.setFromMatrixPosition(t.matrixWorld),e.position.copy(th),eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eh),e.updateMatrixWorld(),Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class p_ extends f_{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m_ extends Cu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new p_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const nh=new ue;class g_{constructor(t,e,n=0,s=1/0){this.ray=new El(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(t,e=!0,n=[]){return $a(t,this,n,e),n.sort(ih),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$a(t[s],this,n,e);return n.sort(ih),n}}function ih(i,t){return i.distance-t.distance}function $a(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)$a(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const ku="/dh-simulator/assets/osrs",sh=new Map;function Yr(i){let t=sh.get(i);return t||(t=fetch(`${ku}/${i}`).then(e=>{if(!e.ok)throw new Error(`asset ${i}: ${e.status}`);return e.json()}),sh.set(i,t)),t}const v_=()=>Yr("index.json"),Kr=i=>Yr(`models/${i}.json`),__=i=>Yr(`anims/${i}.json`),x_=i=>Yr(`framemaps/${i}.json`),Pu=i=>`${ku}/textures/${i}.png`,Ho=.6,rh=new Map;function y_(i){const t=rh.get(i);if(t)return t;const e=(i>>10&63)/64+.5/64,n=(i>>7&7)/8+.5/8,s=(i&127)/128,r=(1-Math.abs(2*s-1))*n,o=r*(1-Math.abs(e*6%2-1)),a=s-r/2;let l=a,c=a,h=a;switch(Math.floor(e*6)){case 0:l+=r,c+=o;break;case 1:c+=r,l+=o;break;case 2:c+=r,h+=o;break;case 3:h+=r,c+=o;break;case 4:h+=r,l+=o;break;default:l+=r,h+=o;break}const u=[Math.pow(Math.min(1,Math.max(0,l)),Ho),Math.pow(Math.min(1,Math.max(0,c)),Ho),Math.pow(Math.min(1,Math.max(0,h)),Ho)];return rh.set(i,u),u}const zo=1/128;function M_(i){var o;let t=0,e=0;for(const a of i)t+=a.model.vx.length,e+=a.model.fa.length;const n={vx:new Int32Array(t),vy:new Int32Array(t),vz:new Int32Array(t),fa:new Int32Array(e),fb:new Int32Array(e),fc:new Int32Array(e),color:new Int32Array(e),alpha:new Uint8Array(e),render:new Uint8Array(e),tex:new Int32Array(e).fill(-1),uv:new Float32Array(e*6),skins:new Int32Array(t).fill(-1)};let s=0,r=0;for(const{model:a,recolor:l}of i){for(let c=0;c<a.vx.length;c++)n.vx[s+c]=a.vx[c],n.vy[s+c]=a.vy[c],n.vz[s+c]=a.vz[c],n.skins[s+c]=a.skins?a.skins[c]:-1;for(let c=0;c<a.fa.length;c++){const h=r+c;n.fa[h]=a.fa[c]+s,n.fb[h]=a.fb[c]+s,n.fc[h]=a.fc[c]+s;let u=a.color[c];if(l){const d=l[0].indexOf(u);d>=0&&(u=l[1][d])}n.color[h]=u,n.alpha[h]=a.alpha?a.alpha[c]&255:0,n.render[h]=a.render?a.render[c]:0,a.tex&&a.tex[c]>=0&&((o=a.uv)!=null&&o[c])&&(n.tex[h]=a.tex[c],n.uv.set(a.uv[c],h*6))}s+=a.vx.length,r+=a.fa.length}return n}const oh=new Map;function b_(i){let t=oh.get(i);return t||(t=new Ru().load(Pu(i)),t.magFilter=Oe,t.minFilter=Oe,t.wrapS=t.wrapT=ns,t.colorSpace=Ve,oh.set(i,t)),t}class qa{constructor(t,e={}){A(this,"mesh");A(this,"m");A(this,"faces");A(this,"groups",[]);A(this,"px");A(this,"py");A(this,"pz");A(this,"position");A(this,"normal");A(this,"animatedTextures",[]);var d;this.m=M_(t);const n=this.m,s=n.fa.length;this.px=new Int32Array(n.vx),this.py=new Int32Array(n.vy),this.pz=new Int32Array(n.vz);for(let f=0;f<n.skins.length;f++){const g=n.skins[f];g<0||((d=this.groups)[g]??(d[g]=[])).push(f)}const r=new Map;for(let f=0;f<s;f++){if((n.render[f]&3)===2&&n.tex[f]<0||n.color[f]===65535&&n.tex[f]<0)continue;const g=n.tex[f]>=0?`t${n.tex[f]}`:n.alpha[f]?"alpha":"solid";let v=r.get(g);v||r.set(g,v=[]),v.push(f)}this.faces=[];const o=new on,a=[];for(const[f,g]of r)if(o.addGroup(this.faces.length*3,g.length*3,a.length),this.faces.push(...g),f.startsWith("t")){const v=Number(f.slice(1)),p=b_(v),m=e[v];m!=null&&m.animSpeed&&this.animatedTextures.push({tex:p,dir:m.animDir,speed:m.animSpeed}),a.push(new Fr({map:p,vertexColors:!0,transparent:g.some(S=>n.alpha[S]>0)}))}else a.push(new Fr({vertexColors:!0,transparent:f==="alpha",depthWrite:f!=="alpha"}));const l=this.faces.length*3,c=new Float32Array(l*4),h=new Float32Array(l*2),u=new $t;this.faces.forEach((f,g)=>{const v=n.tex[f]>=0,[p,m,S]=v?[1,1,1]:y_(n.color[f]);u.setRGB(p,m,S,Ve);const{r:M,g:E,b:L}=u,k=1-n.alpha[f]/255;for(let T=0;T<3;T++)c.set([M,E,L,k],(g*3+T)*4),v&&(h[(g*3+T)*2]=n.uv[f*6+T],h[(g*3+T)*2+1]=n.uv[f*6+3+T])}),this.position=new Le(new Float32Array(l*3),3),this.normal=new Le(new Float32Array(l*3),3),o.setAttribute("position",this.position),o.setAttribute("normal",this.normal),o.setAttribute("color",new Le(c,4)),o.setAttribute("uv",new Le(h,2)),this.mesh=new Fe(o,a),this.mesh.frustumCulled=!1,this.writeGeometry()}resetPose(){this.px.set(this.m.vx),this.py.set(this.m.vy),this.pz.set(this.m.vz)}setFrame(t,e){if(this.resetPose(),t&&e){const n={x:0,y:0,z:0};for(let s=0;s<t.i.length;s++){const r=t.i[s];this.transform(e.types[r],e.maps[r],t.x[s],t.y[s],t.z[s],n)}}this.writeGeometry()}setFrameInterleaved(t,e,n,s,r){this.resetPose();let o={x:0,y:0,z:0};for(let a=0;a<t.i.length;a++){const l=t.i[a];(!r.has(l)||e.types[l]===0)&&this.transform(e.types[l],e.maps[l],t.x[a],t.y[a],t.z[a],o)}o={x:0,y:0,z:0};for(let a=0;a<n.i.length;a++){const l=n.i[a];(r.has(l)||s.types[l]===0)&&this.transform(s.types[l],s.maps[l],n.x[a],n.y[a],n.z[a],o)}this.writeGeometry()}transform(t,e,n,s,r,o){const{px:a,py:l,pz:c,groups:h}=this;if(t===0){let u=0,d=0,f=0,g=0;for(const v of e)for(const p of h[v]??[])d+=a[p],f+=l[p],g+=c[p],u++;u>0?(o.x=n+Math.trunc(d/u),o.y=s+Math.trunc(f/u),o.z=r+Math.trunc(g/u)):(o.x=n,o.y=s,o.z=r);return}if(t===1){for(const u of e)for(const d of h[u]??[])a[d]+=n,l[d]+=s,c[d]+=r;return}if(t===2){const u=(n&255)*8,d=(s&255)*8,f=(r&255)*8,g=p=>Math.trunc(65536*Math.sin(p*Math.PI/1024)),v=p=>Math.trunc(65536*Math.cos(p*Math.PI/1024));for(const p of e)for(const m of h[p]??[]){let S=a[m]-o.x,M=l[m]-o.y,E=c[m]-o.z;if(f!==0){const L=g(f),k=v(f),T=L*M+k*S>>16;M=k*M-L*S>>16,S=T}if(u!==0){const L=g(u),k=v(u),T=k*M-L*E>>16;E=L*M+k*E>>16,M=T}if(d!==0){const L=g(d),k=v(d),T=L*E+k*S>>16;E=k*E-L*S>>16,S=T}a[m]=S+o.x,l[m]=M+o.y,c[m]=E+o.z}return}if(t===3)for(const u of e)for(const d of h[u]??[])a[d]=Math.trunc((a[d]-o.x)*n/128)+o.x,l[d]=Math.trunc((l[d]-o.y)*s/128)+o.y,c[d]=Math.trunc((c[d]-o.z)*r/128)+o.z}writeGeometry(){const{m:t,px:e,py:n,pz:s}=this,r=this.position.array,o=this.normal.array,a=new Float32Array(e.length*3),l=new Float32Array(t.fa.length*3);for(const c of this.faces){const h=t.fa[c],u=t.fb[c],d=t.fc[c],f=e[u]-e[h],g=-(n[u]-n[h]),v=-(s[u]-s[h]),p=e[d]-e[h],m=-(n[d]-n[h]),S=-(s[d]-s[h]);let M=g*S-v*m,E=v*p-f*S,L=f*m-g*p;const k=Math.hypot(M,E,L)||1;M/=k,E/=k,L/=k,l[c*3]=M,l[c*3+1]=E,l[c*3+2]=L;for(const T of[h,u,d])a[T*3]+=M,a[T*3+1]+=E,a[T*3+2]+=L}this.faces.forEach((c,h)=>{const u=(t.render[c]&3)===1,d=[t.fa[c],t.fb[c],t.fc[c]];for(let f=0;f<3;f++){const g=d[f],v=(h*3+f)*3;if(r[v]=e[g]*zo,r[v+1]=-n[g]*zo,r[v+2]=-s[g]*zo,u)o[v]=l[c*3],o[v+1]=l[c*3+1],o[v+2]=l[c*3+2];else{const p=Math.hypot(a[g*3],a[g*3+1],a[g*3+2])||1;o[v]=a[g*3]/p,o[v+1]=a[g*3+1]/p,o[v+2]=a[g*3+2]/p}}}),this.position.needsUpdate=!0,this.normal.needsUpdate=!0}updateTextures(t){for(const{tex:e,dir:n,speed:s}of this.animatedTextures){const r=t*s*.25;n===1?e.offset.y=-r:n===2?e.offset.x=r:n===3?e.offset.y=r:n===4&&(e.offset.x=-r)}}}class w_{constructor(t,e,n=!0){A(this,"frame",0);A(this,"elapsed",0);this.frames=t,this.lengths=e,this.loop=n}advance(t){for(this.elapsed+=t/20;this.elapsed>=(this.lengths[this.frame]||1);)if(this.elapsed-=this.lengths[this.frame]||1,this.frame++,this.frame>=this.frames.length){if(!this.loop)return this.frame=this.frames.length-1,!1;this.frame=0}return!0}current(){return this.frames[this.frame]}}const S_={head:8,jaw:11,torso:4,arms:6,hands:9,legs:7,feet:10};async function E_(i,t){var r;const e=new Set;for(const o of t)for(const a of((r=i.items[o])==null?void 0:r.wearPos)??[])e.add(a);const n=[],s=async(o,a)=>{const l=await Promise.all(o.map(Kr));for(const c of l)n.push({model:c,recolor:a})};for(const[o,a]of Object.entries(i.kits)){const l=S_[o];l!==void 0&&!e.has(l)&&await s(a.models,a.recolor)}for(const o of t){const a=i.items[o];a&&await s(a.models,a.recolor)}return n}const Oi={dh_axe:{stand:2065,walk:2064,run:11466,attack:2067,block:424},tentacle:{stand:808,walk:1660,run:1661,attack:1658,block:1659,spec:1658},gmaul:{stand:1662,walk:1663,run:1664,attack:1665,block:1666,spec:1667},voidwaker:{stand:808,walk:819,run:824,attack:390,block:388,spec:11275},ags:{stand:7053,walk:7052,run:7043,attack:7045,block:7056,spec:7644},elder_maul:{stand:7518,walk:7520,run:7519,attack:7516,block:7517,spec:11124},nox_halberd:{stand:813,walk:1205,run:1210,attack:428,block:430},none:{stand:808,walk:819,run:824,attack:422,block:424}};async function mi(i,t){const e=await __(i),n=new Map;for(const s of e.frames)n.has(s.fm)||n.set(s.fm,await x_(s.fm));return{data:e,maps:n,player:new w_(e.frames,e.lengths,t)}}const qi=class qi{constructor(t){A(this,"root",new xi);A(this,"mesh",null);A(this,"meshCache",new Map);A(this,"building",new Map);A(this,"wantKey","");A(this,"shownKey","");A(this,"worn",[]);A(this,"weaponKey",null);A(this,"shieldKey",null);A(this,"weapon","none");A(this,"stance",null);A(this,"base",null);A(this,"moving",!1);A(this,"action",null);A(this,"holding",!1);A(this,"gfx",[]);A(this,"walkAnim",null);A(this,"runAnim",null);A(this,"moveFrom",new B);A(this,"moveTo",new B);A(this,"moveStart",0);A(this,"moveVia",null);A(this,"gait",null);A(this,"faceAt",null);A(this,"stanceRequest",0);A(this,"interleaveMask");this.index=t}setWorn(t,e,n){const s=t.slice().sort().join(","),r=e&&Oi[e]?e:"none";if(s===this.worn.slice().sort().join(",")&&r===this.weapon)return;const o=r!==this.weapon;if(this.worn=t,this.weaponKey=e,this.shieldKey=n,this.weapon=r,this.showMesh(this.drawnItems()),o||!this.stance){const a=++this.stanceRequest,l=Oi[this.weapon];Promise.all([mi(l.stand,!0),mi(l.walk,!0),mi(l.run,!0)]).then(([c,h,u])=>{a===this.stanceRequest&&(this.stance=c,this.walkAnim=h,this.runAnim=u)})}}goTo(t,e,n,s,r){if(n===0){(this.moveTo.x!==t||this.moveTo.z!==e||this.gait)&&(this.root.position.set(t,0,e),this.moveFrom.set(t,0,e),this.moveTo.set(t,0,e),this.gait=null);return}this.moveFrom.copy(this.root.position),this.moveTo.set(t,0,e),this.moveVia=r?new B(r.x,0,r.z):null,this.moveStart=s,this.gait=n>=2?"run":"walk"}face(t,e=!1){this.faceAt=t,e&&t&&(this.root.rotation.y=Math.atan2(t.x-this.root.position.x,t.z-this.root.position.z))}updateMovement(t,e){const n=this.gait?Math.min(1,(t-this.moveStart)/qi.TICK_MS):1,s=this.moveVia;s&&n<.5?this.root.position.lerpVectors(this.moveFrom,s,n*2):s?this.root.position.lerpVectors(s,this.moveTo,(n-.5)*2):this.root.position.lerpVectors(this.moveFrom,this.moveTo,n);const r=n<1&&this.gait!==null;r||(this.gait=null);const o=r?s&&n<.5?s:this.moveTo:this.faceAt;if(o){const a=o.x-this.root.position.x,l=o.z-this.root.position.z;if(a*a+l*l>1e-4){let h=Math.atan2(a,l)-this.root.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h));const u=qi.TURN_PER_MS*e;this.root.rotation.y+=Math.abs(h)<=u?h:Math.sign(h)*u}}return r}drawnItems(){var e;const t=(e=this.action)==null?void 0:e.data;return this.worn.filter(n=>!(t&&(t.rightHand===0&&n===this.weaponKey||t.leftHand===0&&n===this.shieldKey)))}modelKey(t){return t.filter(e=>this.index.items[e]).sort().join(",")}build(t){const e=this.modelKey(t),n=this.meshCache.get(e);if(n)return Promise.resolve(n);let s=this.building.get(e);return s||(s=E_(this.index,t).then(r=>{const o=new qa(r,this.index.textures);return this.meshCache.set(e,o),this.building.delete(e),o}),this.building.set(e,s)),s}async preload(t){await Promise.all(t.map(e=>this.build(e)))}showMesh(t){const e=this.modelKey(t);this.wantKey=e;const n=this.meshCache.get(e);if(n){this.swapTo(n,e);return}this.build(t).then(s=>{this.wantKey===e&&this.swapTo(s,e)})}swapTo(t,e){this.shownKey=e,t!==this.mesh&&(this.mesh&&this.root.remove(this.mesh.mesh),this.mesh=t,this.root.add(t.mesh),this.applyFrame())}async gearShown(){for(;this.wantKey!==this.shownKey;){const t=this.wantKey;await(this.building.get(t)??Promise.resolve()),this.wantKey===t&&this.meshCache.has(t)&&this.swapTo(this.meshCache.get(t),t)}}async play(t,e={}){if(e.minor&&this.action||this.holding)return;const n=await mi(t,!1);await this.gearShown(),!(e.minor&&this.action)&&(this.action=n,this.holding=!!e.hold,this.showMesh(this.drawnItems()))}reset(){this.action=null,this.holding=!1;for(const t of this.gfx)this.root.remove(t.mesh.mesh),t.mesh.mesh.geometry.dispose();this.gfx.length=0,this.showMesh(this.drawnItems())}static attackAnim(t,e){return t==="dh_axe"?e==="crush"?2067:2066:t==="voidwaker"&&e==="stab"?386:t==="ags"&&e==="crush"?7054:t==="nox_halberd"&&e==="slash"?440:(Oi[t]??Oi.none).attack}blockAnim(){return this.shieldKey==="avernic"&&this.worn.includes("avernic")?4177:Oi[this.weapon].block}specAnim(){return Oi[this.weapon].spec}async graphic(t,e=0){var o;const n=(o=this.index.spotanims)==null?void 0:o[t];if(!n)return;const s=await Kr(n.model),r=new qa([{model:s,recolor:n.recolor}],this.index.textures);r.mesh.scale.set(n.scale[0]/128,n.scale[1]/128,n.scale[0]/128),r.mesh.position.y=e,this.root.add(r.mesh),this.gfx.push({mesh:r,anim:n.anim>0?await mi(n.anim,!1):null})}update(t,e){var s,r;const n=this.updateMovement(e*1e3,t);this.moving=n,this.base=n?(this.gait==="run"?this.runAnim:this.walkAnim)??this.stance:this.stance,this.action&&!this.action.player.advance(t)&&!this.holding&&(this.action=null,this.showMesh(this.drawnItems())),(!this.action||n)&&((s=this.base)==null||s.player.advance(t)),this.applyFrame(),(r=this.mesh)==null||r.updateTextures(e);for(let o=this.gfx.length-1;o>=0;o--){const a=this.gfx[o];if(!a.anim||!a.anim.player.advance(t)){this.root.remove(a.mesh.mesh),a.mesh.mesh.geometry.dispose(),this.gfx.splice(o,1);continue}const l=a.anim.player.current();a.mesh.setFrame(l,a.anim.maps.get(l.fm)??null)}}applyFrame(){var r;if(!this.mesh)return;const t=this.action,e=this.base;if(t&&e&&this.moving&&((r=t.data.interleave)!=null&&r.length)){const o=t.player.current(),a=e.player.current(),l=t.maps.get(o.fm),c=e.maps.get(a.fm);if(l&&c){this.interleaveMask??(this.interleaveMask=new Map);let h=this.interleaveMask.get(t.data.id);h||this.interleaveMask.set(t.data.id,h=new Set(t.data.interleave)),this.mesh.setFrameInterleaved(o,l,a,c,h);return}}const n=t??e;if(!n){this.mesh.setFrame(null,null);return}const s=n.player.current();this.mesh.setFrame(s,n.maps.get(s.fm)??null)}};A(qi,"TICK_MS",600),A(qi,"TURN_PER_MS",Math.PI*2/1280);let Ds=qi;function A_(){const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=Math.min(screen.width,screen.height)<600;return i&&t&&!new URLSearchParams(location.search).has("pc")}function T_(){return new Promise(i=>{const t=document.createElement("div");t.className="phone-notice";const e=location.origin+"/dh-simulator/";t.innerHTML=`
      <div class="pn-card">
        <img class="pn-icon" src="/dh-simulator/assets/osrs/items/dh_helm.png" alt="" />
        <h1>DH Simulator</h1>
        <p class="pn-lead">Practise Dharok’s (DH) PvP fights from Old School RuneScape against bots, from Easy to God, with a review of your mistakes after every fight.</p>
        <p class="pn-pc"><b>Made for PC</b> (mouse and keyboard). Open this link on your computer to play:</p>
        <div class="pn-link">${e.replace(/^https?:\/\//,"").replace(/\/$/,"")}</div>
        <button class="pn-copy">Copy link</button>
        <button class="pn-anyway">Try it anyway</button>
        <p class="pn-small">Free, no login, no download. Fan-made, not affiliated with Jagex.</p>
      </div>`,document.body.append(t);const n=t.querySelector(".pn-copy");n.addEventListener("click",async()=>{var s,r;try{await navigator.clipboard.writeText(e),n.textContent="Copied!"}catch{const o=document.createRange();o.selectNodeContents(t.querySelector(".pn-link")),(s=getSelection())==null||s.removeAllRanges(),(r=getSelection())==null||r.addRange(o),n.textContent="Select and copy the link above"}}),t.querySelector(".pn-anyway").addEventListener("click",()=>{t.remove(),i()})})}function R_(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d");for(let n=0;n<4;n++)for(let s=0;s<4;s++){const r=112+Math.floor(Math.random()*18);t.fillStyle=`rgb(${r},${r-4},${r-12})`,t.fillRect(s*32,n*32,32,32);for(let o=0;o<18;o++){const a=r-14+Math.floor(Math.random()*28);t.fillStyle=`rgb(${a},${a-4},${a-12})`,t.fillRect(s*32+Math.floor(Math.random()*30),n*32+Math.floor(Math.random()*30),2,2)}t.fillStyle="rgba(40,36,30,0.55)",t.fillRect(s*32,n*32,32,1),t.fillRect(s*32,n*32,1,32)}const e=new l_(i);return e.wrapS=e.wrapT=ns,e.magFilter=Oe,e.colorSpace=Ve,e}function xs(i){return{x:i.x-7+.5,z:-(i.y-7)+.5}}function ah(i,t){return{x:Math.floor(i)+7,y:-Math.floor(t)+7}}function C_(){const i=new xi,t=-7,e=t+rn,n=.06,s=new ji({color:"#7a1f12",depthWrite:!1}),r=(l,c,h,u)=>{const d=new Fe(new bi(h,u),s);d.rotation.x=-Math.PI/2,d.position.set(l,.005,c),d.renderOrder=-1,i.add(d)},o=(t+e)/2,a=rn+n;return r(o,t,a,n),r(o,e,a,n),r(t,o,n,a),r(e,o,n,a),i}function Lu(i){if(document.getElementById("gfx-problem"))return;const t=document.createElement("div");t.id="gfx-problem",t.innerHTML=`<div><b>Graphics problem</b><p>${i}</p><p class="small">If it keeps happening: close the tab, then open the link again in a new tab. In Chrome, check that "Use graphics acceleration" is on (Settings, System).</p><button>Reload</button></div>`,t.querySelector("button").addEventListener("click",()=>location.reload()),document.body.append(t)}function k_(i){return new Fr({color:i,flatShading:!0})}class Or{constructor(t,e){A(this,"renderer");A(this,"scene",new o_);A(this,"camera",new nn(45,1,.1,200));A(this,"player");A(this,"opponent");A(this,"yaw",1.3);A(this,"pitch",.62);A(this,"dist",7.5);A(this,"keys",new Set);A(this,"tmp",new B);A(this,"focus",new B);A(this,"focusSet",!1);A(this,"timeScale",1);A(this,"plainGround",[]);A(this,"map",null);A(this,"groundMeshes",[]);A(this,"props",[]);A(this,"mapName","");A(this,"heights",null);A(this,"mapCentre",[0,0]);A(this,"mapBounds",null);A(this,"tileMarker");A(this,"raycaster",new g_);A(this,"hitboxes",{player:Or.makeHitbox(),opponent:Or.makeHitbox()});this.index=e,this.player=new Ds(e),this.opponent=new Ds(e),this.renderer=new r_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.addEventListener("webglcontextlost",c=>{c.preventDefault(),Lu("The 3D graphics were reset by your browser. Reload the page to continue.")}),this.scene.background=new $t("#7aa0c8"),this.scene.fog=new Ir("#7aa0c8",28,70),this.scene.add(new d_("#ffffff","#6a6050",2.2));const n=new m_("#fff6e6",1.2);n.position.set(-4,10,6),this.scene.add(n);const s=R_();s.repeat.set(14,14);const r=new Fe(new bi(56,56),new Fr({map:s}));r.rotation.x=-Math.PI/2;const o=new Fe(new bi(200,200),k_("#4f7a35"));o.rotation.x=-Math.PI/2,o.position.y=-.01;for(const[c,h]of[[o,-2],[r,-1]])c.material.depthWrite=!1,c.renderOrder=h,this.scene.add(c);this.plainGround=[r,o],this.scene.add(this.player.root,this.opponent.root),this.scene.add(C_()),this.player.root.add(this.hitboxes.player),this.opponent.root.add(this.hitboxes.opponent);const a=.5,l=new on().setFromPoints([new B(-a,0,-a),new B(a,0,-a),new B(a,0,a),new B(-a,0,a),new B(-a,0,-a)]);this.tileMarker=new a_(l,new Tu({color:"#ff3030",transparent:!0,opacity:.9,depthTest:!1})),this.tileMarker.position.set(.5,.01,.5),this.tileMarker.renderOrder=0,this.scene.add(this.tileMarker),this.bindCamera(t),this.resize(),window.addEventListener("resize",()=>this.resize())}bindCamera(t){window.addEventListener("keydown",r=>{r.key.startsWith("Arrow")&&(this.keys.add(r.key),r.preventDefault())}),window.addEventListener("keyup",r=>this.keys.delete(r.key)),window.addEventListener("blur",()=>this.keys.clear());let e=!1,n=0,s=0;t.addEventListener("mousedown",r=>{r.button===1&&(r.preventDefault(),e=!0,n=r.clientX,s=r.clientY)}),t.addEventListener("auxclick",r=>{r.button===1&&r.preventDefault()}),window.addEventListener("mousemove",r=>{if(e){if(!(r.buttons&4)){e=!1;return}this.yaw-=(r.clientX-n)*.006,this.pitch+=(r.clientY-s)*.004,n=r.clientX,s=r.clientY,this.clampPitch()}}),window.addEventListener("mouseup",r=>{r.button===1&&(e=!1)}),t.addEventListener("wheel",r=>{r.ctrlKey||(this.dist=Math.min(16,Math.max(3.5,this.dist+Math.sign(r.deltaY)*.6)),r.preventDefault())},{passive:!1}),t.addEventListener("contextmenu",r=>r.preventDefault())}clampPitch(){this.pitch=Math.min(1.35,Math.max(.2,this.pitch))}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}render(t,e){const n=1.8*e;this.keys.has("ArrowLeft")&&(this.yaw+=n),this.keys.has("ArrowRight")&&(this.yaw-=n),this.keys.has("ArrowUp")&&(this.pitch+=n*.6),this.keys.has("ArrowDown")&&(this.pitch-=n*.6),this.clampPitch();const s=this.player.root.position,r=this.focus;!this.focusSet||r.distanceTo(s)>500/128?(r.copy(s),this.focusSet=!0):r.lerp(s,1-Math.pow(15/16,e*1e3/20));const o=Math.cos(this.pitch);this.camera.position.set(r.x+Math.sin(this.yaw)*o*this.dist,r.y+1+Math.sin(this.pitch)*this.dist,r.z+Math.cos(this.yaw)*o*this.dist),this.camera.lookAt(r.x,r.y+1,r.z);for(const a of this.props){if(!a.anim)continue;a.anim.player.advance(e*1e3*this.timeScale);const l=a.anim.player.current();a.mesh.setFrame(l,a.anim.maps.get(l.fm)??null)}this.player.update(e*1e3*this.timeScale,t/1e3),this.opponent.update(e*1e3*this.timeScale,t/1e3);for(const a of[this.player,this.opponent])a.root.position.y=this.groundHeight(a.root.position.x,a.root.position.z);this.tileMarker.position.y=this.groundHeight(this.tileMarker.position.x,this.tileMarker.position.z)+.01,this.renderer.render(this.scene,this.camera)}pick(t,e){const n=new jt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);this.raycaster.setFromCamera(n,this.camera);const s=this.raycaster.intersectObjects([this.hitboxes.player,this.hitboxes.opponent],!1);return s.length?s[0].object===this.hitboxes.opponent?"opponent":"player":null}async loadMap(t){const e=`/dh-simulator/assets/osrs/maps/${t}`,n=await(await fetch(`${e}.json`)).json(),s=await(await fetch(`${e}.bin`)).arrayBuffer(),r=new Int16Array(s,0,n.positionBytes/2),o=new Uint8Array(s,n.positionBytes,n.colourBytes),a=new Int16Array(s,n.uvOffset,n.uvBytes/2),l=new Float32Array(256);for(let f=0;f<256;f++)l[f]=new $t().setRGB(f/255,f/255,f/255,Ve).r;const c=new xi,h=[];for(const f of n.parts){const g=f.start*9,v=(f.start+f.count)*9,p=new Float32Array(v-g),m=new Float32Array(v-g);for(let L=g;L<v;L++)p[L-g]=r[L]/128,m[L-g]=l[o[L]];const S=new on;S.setAttribute("position",new Le(p,3)),S.setAttribute("color",new Le(m,3));let M;if(f.texture>=0){const L=new Float32Array(f.count*6);for(let T=0;T<f.count;T++){const I=(f.uvStart+T)*6;for(let Q=0;Q<3;Q++)L[T*6+Q*2]=a[I+Q]/1024,L[T*6+Q*2+1]=a[I+3+Q]/1024}S.setAttribute("uv",new Le(L,2));const k=new Ru().load(Pu(f.texture));k.magFilter=Oe,k.wrapS=k.wrapT=ns,k.colorSpace=Ve,M=new ji({map:k,vertexColors:!0,side:dn,color:new $t(2,2,2),alphaTest:.5})}else M=new ji({vertexColors:!0,side:dn});const E=new Fe(S,M);f.kind==="ground"&&(M.depthWrite=!1,E.renderOrder=-1,h.push(E)),c.add(E)}this.map&&(this.scene.remove(this.map),this.map.traverse(f=>{var v;if(!(f instanceof Fe))return;f.geometry.dispose();const g=f.material;(v=g.map)==null||v.dispose(),g.dispose()})),this.map=c,this.groundMeshes=h,this.mapName=t,this.scene.add(c),this.heights=n.heights,this.mapCentre=n.centre,this.mapBounds=n.bounds;for(const f of this.plainGround)f.visible=!1;this.scene.background=new $t("#000000");const[u,d]=t==="colosseum"?[34,62]:[22,40];this.scene.fog=new Ir("#000000",u,d)}async setProps(t){var e;for(const n of this.props)this.scene.remove(n.mesh.mesh),n.mesh.mesh.geometry.dispose();this.props=[];for(const n of t){const s=(e=this.index.objects)==null?void 0:e[n.object];if(!s)continue;const r=await Promise.all(s.models.map(h=>Kr(h))),o=new qa(r.map(h=>({model:h,recolor:s.recolor})),this.index.textures);o.mesh.scale.set(s.scale[0]/128,s.scale[1]/128,s.scale[2]/128);const a=n.x-this.mapCentre[0]+.5,l=-(n.y-this.mapCentre[1])+.5;o.mesh.position.set(a,this.groundHeight(a,l),l),o.mesh.rotation.y=-n.rot*Math.PI/2;const c=s.anim>0?await mi(s.anim,!0):null;c&&c.player.advance(Math.random()*c.data.lengths.reduce((h,u)=>h+u,0)*20),this.scene.add(o.mesh),this.props.push({mesh:o,anim:c})}}get mapPlace(){return this.mapBounds?{centre:this.mapCentre,bounds:this.mapBounds}:null}groundHeight(t,e){const n=this.heights,s=this.mapBounds;if(!n||!s)return 0;const r=t+this.mapCentre[0]-s.x0,o=this.mapCentre[1]+1-e-s.y0,a=Math.floor(r),l=Math.floor(o);if(a<0||l<0||a>=n.width-1||l>=n.height-1)return 0;const c=r-a,h=o-l,u=(f,g)=>n.values[g*n.width+f];return((u(a,l)*(1-c)+u(a+1,l)*c)*(1-h)+(u(a,l+1)*(1-c)+u(a+1,l+1)*c)*h)/128}pickTile(t,e){const n=new jt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);if(this.raycaster.setFromCamera(n,this.camera),this.groundMeshes.length){const r=this.raycaster.intersectObjects(this.groundMeshes,!1);if(r.length)return ah(r[0].point.x,r[0].point.z)}const s=this.raycaster.ray.intersectPlane(new Yn(new B(0,1,0),0),this.tmp);return s?ah(s.x,s.z):null}get cameraYaw(){return this.yaw}static makeHitbox(){const t=new Fe(new Cl(.38,.38,1.9,8),new ji({visible:!1}));return t.position.y=.95,t}screenAbove(t,e=1.95){const n=t.root.localToWorld(this.tmp.set(0,e,0)).project(this.camera);return{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight,visible:n.z<1}}}const P_={angler:1/0,karambwan:1/0,brew:3,restore:3,sanfew:3,recoil:2,combat:2},L_=[["restore","sanfew"]],Du=i=>L_.find(t=>t.includes(i))??[i];function Xa(i){return P_[i]??1}function lh(i,t){const e=Du(t);return i.inv.filter(n=>n&&e.includes(n.id)).length+Object.values(i.equip).filter(n=>n&&e.includes(n.id)).length}function Iu(i){return!i||!Yt[i.id]?null:Yt[i.id].kind==="potion"?{id:i.id,doses:4}:i.id==="venge_sack"?{id:i.id,qty:40}:i.id==="tab"?{id:i.id,qty:10}:{id:i.id}}function fr(i){return Iu({id:i})}function Uu(){return{inv:Gh(),equip:Wh()}}const D_=new Set(["elder_maul"]);function ch(i,t){var r;if(!t||!Array.isArray(t.inv)||t.inv.length!==28||typeof t.equip!="object")return;const e=JSON.parse(JSON.stringify(t)),n=new Map,s=o=>{if(!Iu(o)||D_.has(o.id))return!1;const a=Du(o.id)[0],l=(n.get(a)??0)+1;return n.set(a,l),l<=Xa(o.id)};i.equip={};for(const[o,a]of Object.entries(e.equip))a&&((r=Yt[a.id])==null?void 0:r.slot)===o&&s(a)&&(i.equip[o]=a);i.inv=e.inv.map(o=>s(o)?o:null)}const hh="/dh-simulator/assets/osrs/fonts";class Pl{constructor(t,e){A(this,"tinted",new Map);this.metrics=t,this.atlas=e}static async load(t){const e=await(await fetch(`${hh}/${t}/metrics.json`)).json(),n=new Image;return await new Promise((s,r)=>{n.onload=()=>s(),n.onerror=()=>r(new Error(`font atlas ${t} failed to load`)),n.src=`${hh}/${t}/atlas.png`}),new Pl(e,n)}glyph(t){return this.metrics.glyphs[t]??this.metrics.glyphs[63]}tint(t,e){const n=`${t}|${e}`;let s=this.tinted.get(n);if(s)return s;const r=this.metrics.glyphs[t];if(!r||r.ax===void 0||r.ay===void 0)return null;s=document.createElement("canvas"),s.width=r.w,s.height=r.h;const o=s.getContext("2d");return o.drawImage(this.atlas,r.ax,r.ay,r.w,r.h,0,0,r.w,r.h),o.globalCompositeOperation="source-in",o.fillStyle=e,o.fillRect(0,0,s.width,s.height),this.tinted.set(n,s),s}width(t){var n;let e=0;for(const s of dh(t,"#000"))for(const r of s.text)e+=((n=this.glyph(uh(r)))==null?void 0:n.advance)??0;return e}get height(){return this.metrics.maxHeight}draw(t,e,n,s,r,o=!0){let a=n;for(const l of dh(e,r))for(const c of l.text){const h=uh(c),u=this.glyph(h);if(u){if(u.w&&u.h){if(o){const f=this.tint(h,"#000");f&&t.drawImage(f,a+u.x+1,s+u.y+1)}const d=this.tint(h,l.color);d&&t.drawImage(d,a+u.x,s+u.y)}a+=u.advance}}return a-n}}function uh(i){const t=i.charCodeAt(0);return t<256?t:63}function dh(i,t){const e=[],n=/<col=([0-9a-fA-F]{6})>|<\/col>/g;let s=t,r=0,o;for(;o=n.exec(i);)o.index>r&&e.push({text:i.slice(r,o.index),color:s}),s=o[1]?"#"+o[1]:t,r=n.lastIndex;return r<i.length&&e.push({text:i.slice(r),color:s}),e}const Nu=new Map;async function I_(){const i=["p11_full","p12_full","b12_full","q8_full"];await Promise.all(i.map(async t=>Nu.set(t,await Pl.load(t))))}function U_(i){const t=Nu.get(i);if(!t)throw new Error(`font ${i} not loaded`);return t}function ye(i,t="p12_full",e="#ff981f",n=!0){const s=U_(t),r=document.createElement("canvas");return r.width=Math.max(1,s.width(i)+(n?1:0)),r.height=s.height+(n?1:0),r.className="osrs-text",s.draw(r.getContext("2d"),i,0,0,e,n),r}const Br=[{id:"combat",label:"Combat options"},{id:"skills",label:"Skills"},{id:"inventory",label:"Inventory"},{id:"equipment",label:"Worn equipment"},{id:"prayer",label:"Prayer"},{id:"magic",label:"Magic"},{id:"settings",label:"Settings"}],Ya=["Escape","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"],Hr=i=>i==="Escape"?"Esc":i,Ll="dhsim.keybinds",Fu={combat:"F1",skills:"F2",inventory:"Escape",equipment:"F4",prayer:"F5",magic:"F6",settings:"F10"};function Zi(){try{const i=Qt(Ll);if(i)return JSON.parse(i)}catch{}return{...Fu}}function N_(){he(Ll,JSON.stringify(Fu))}function Ou(i){he(Ll,JSON.stringify(i))}function F_(i,t){for(const[e,n]of Object.entries(i))if(n===t)return e;return null}const yn=i=>`/dh-simulator/assets/osrs/sprites/${i}`,Ce="#ff981f",hi="#ffff00",Xn="#ffffff",fh="ff9040",O_=[{id:"combat",icon:"combat"},{id:"skills",icon:"skills"},{id:"quests",icon:"character-summary"},{id:"inventory",icon:"inventory"},{id:"equipment",icon:"equipment"},{id:"prayer",icon:"prayer"},{id:"magic",icon:"magic-lunar"},{id:"friends",icon:"friends"},{id:"account",icon:"account"},{id:"clan",icon:"clan"},{id:"settings",icon:"settings"},{id:"emotes",icon:"emotes"},{id:"music",icon:"music"}],B_=["thick-skin","burst-of-strength","clarity-of-thought","sharp-eye","mystic-will","rock-skin","superhuman-strength","improved-reflexes","rapid-restore","rapid-heal","protect-item","hawk-eye","mystic-lore","steel-skin","ultimate-strength","incredible-reflexes","protect-from-magic","protect-from-missiles","protect-from-melee","eagle-eye","mystic-might","retribution","redemption","smite","preserve","chivalry","piety","rigour","augury"],H_={piety:"piety",smite:"smite"},Vo=["lunar-home-teleport","bake-pie","geomancy","cure-plant","monster-examine","npc-contact","cure-other","humidify","moonclan-teleport","tele-group-moonclan","cure-me","ourania-teleport","hunter-kit","waterbirth-teleport","tele-group-waterbirth","cure-group","stat-spy","barbarian-teleport","tele-group-barbarian","spin-flax","superglass-make","tan-leather","khazard-teleport","tele-group-khazard","dream","string-jewellery","stat-restore-pot-share","magic-imbue","fertile-soil","boost-potion-share","fishing-guild-teleport","tele-group-fishing-guild","plank-make","catherby-teleport","tele-group-catherby","recharge-dragonstone","ice-plateau-teleport","tele-group-ice-plateau","energy-transfer","heal-other","vengeance-other","heal-group","vengeance","spellbook-swap"],z_={head:[77,4],cape:[36,43],neck:[77,43],ammo:[118,43],weapon:[21,82],body:[77,82],shield:[133,82],legs:[77,122],hands:[21,162],feet:[77,162],ring:[133,162]};function V_(i){const t=i.doses??4,e=`${t} dose${t===1?"":"s"}`;return i.id==="brew"?`${e} of Saradomin brew.`:i.id==="restore"?`${e} of super restore potion.`:i.id==="combat"?`${e} of super combat potion.`:i.id==="sanfew"?`A ${t} dose Sanfew Serum.`:Yt[i.id].examine}function Ji(i){return`/dh-simulator/assets/osrs/items/${i.doses?`${i.id}_${i.doses}`:i.id}.png`}function Rt(i,t="",e){const n=document.createElement(i);return t&&(n.className=t),e==null||e.append(n),n}function Zt(i,t="",e){const n=Rt("img","spr "+t,e);return n.src=yn(i),n.draggable=!1,n.alt="",n}function zt(i,t,e){return i.style.left=t+"px",i.style.top=e+"px",i}function ae(i,t,e,n,s="p12_full",r=Ce,o=!0,a=!1){const l=ye(t,s,r,o);return l.style.position="absolute",zt(l,a?Math.round(e-l.width/2):e,n),i.append(l),l}class G_{constructor(t,e,n){A(this,"tab","inventory");A(this,"panel");A(this,"content");A(this,"tabRow");A(this,"chatLines");A(this,"chatBox");A(this,"menu");A(this,"hover");A(this,"orbs",{});A(this,"binds",Zi());A(this,"reorderSpells",!1);A(this,"spellDrag",null);A(this,"messages",[]);A(this,"drag",null);A(this,"settingsScroll",0);A(this,"boosts",[]);A(this,"xpBox",null);A(this,"oppDot",null);A(this,"mapImg");A(this,"mapInfo",null);A(this,"pidStatus",null);A(this,"pidBox",null);A(this,"vengeBox",null);A(this,"vengeSecs",null);A(this,"vengedBox",null);A(this,"opponentBox",null);A(this,"opponentUntil",0);A(this,"opponentKey","");A(this,"lastPanelKey","");this.root=t,this.p=e,this.send=n;const s=Rt("div","minimap",t),r=Rt("div","minimap-map",s);this.mapImg=Rt("img","mm-img",r),this.mapImg.alt="",this.mapImg.hidden=!0,Rt("div","mm-dot you",r),Rt("div","mm-dot opp",r),Zt("minimap/frame.png","minimap-frame",s),zt(Zt("minimap/compass.png","minimap-compass",s),2,1),zt(Zt("minimap/xp-orb.png","abs",s),2,50),zt(Zt("minimap/worldmap.png","abs",s),156,126),zt(Zt("minimap/wiki.png","abs",s),140,150),zt(Zt("minimap/logout-x.png","abs",s),158,0);const o={hp:[-4,70],prayer:[-4,104],run:[6,136],spec:[28,161]};for(const p of["hp","prayer","run","spec"]){const m=zt(Rt("div","orb",s),...o[p]);Zt("orbs/frame.png","orb-frame",m);const S=zt(Rt("div","orb-ball",m),27,4);Zt("orbs/fill-empty.png","abs",S);const M=Rt("div","orb-fill",S);M.style.backgroundImage=`url(${yn(`orbs/fill-${p}.png`)})`,Zt(`orbs/icon-${p}.png`,"abs orb-icon",S),Rt("div","orb-num",m),this.orbs[p]=m}this.orbs.spec.addEventListener("pointerdown",p=>{p.preventDefault(),this.send({type:"spec"})}),this.orbs.prayer.addEventListener("pointerdown",p=>{p.preventDefault(),this.selectTab("prayer")}),this.orbs.run.addEventListener("pointerdown",p=>{p.preventDefault(),p.button===0&&this.send({type:"toggleRun"})}),this.oppDot=s.querySelector(".mm-dot.opp");const a=Rt("div","chatbox",t);this.chatBox=a;const l=Zt("chat/background.png","abs",a);this.chatLines=zt(Rt("div","chat-lines",a),8,6);const c=zt(Rt("div","chat-strip",a),0,142);Zt("chat/buttons-strip.png","abs",c);let h=1,u=!0;const d=[],f=()=>d.forEach((p,m)=>{p.src=yn(m===h&&u?"chat/tab-button-selected.png":"chat/tab-button.png")});["All","Game","Public","Private","Channel","Clan","Trade"].forEach((p,m)=>{const S=zt(Rt("div","chat-button",c),5+m*62,1);d.push(Zt("chat/tab-button.png","abs",S)),ae(S,p,28,5,"p11_full",Xn,!0,!0),S.addEventListener("pointerdown",M=>{M.preventDefault(),M.button===0&&(u=!(u&&m===h),h=m,l.hidden=!u,this.chatLines.hidden=!u,a.classList.toggle("collapsed",!u),f())})}),f();const g=zt(Rt("div","chat-button",c),438,1);Zt("chat/report-button.png","abs",g),ae(g,"Report",40,5,"p11_full",Xn,!0,!0);const v=Rt("div","side",t);this.panel=Rt("div","side-panel",v),Zt("side/panel-default.png","abs",this.panel),this.content=zt(Rt("div","side-content",this.panel),7,7),this.tabRow=Rt("div","tab-row",v),this.menu=Rt("div","ctxmenu",t),this.menu.hidden=!0,this.hover=zt(Rt("div","hovertext",t),4,4),this.buildTabs(),document.addEventListener("pointerdown",p=>{!this.menu.hidden&&!this.menu.contains(p.target)&&this.closeMenu()}),document.addEventListener("pointermove",p=>this.onDragMove(p)),document.addEventListener("pointerup",p=>this.onDragEnd(p)),window.addEventListener("keydown",p=>this.onKey(p)),this.refresh()}refreshBoosts(){if(!this.boosts.length){const e=Rt("div","boosts",this.root.querySelector(".minimap"));for(const n of["attack","strength","defence","magic"]){const s=Rt("div","boost",e);Zt(`skills/${n}.png`,"boost-icon",s),this.boosts.push({skill:n,label:Rt("div","boost-num",s),shown:""})}}const t=this.root.querySelector(".boosts");if(t.hidden=!Wo(),!t.hidden)for(const e of this.boosts){const n=this.p.level[e.skill],s=this.p.base[e.skill];e.label.parentElement.hidden=n===s;const r=n>s?"#00ff00":"#ff3030",o=`${n}|${r}`;o!==e.shown&&(e.shown=o,e.label.innerHTML="",e.label.append(ye(String(n),"p11_full",r,!0)))}}xpDrop(t,e,n){this.xpBox||(this.xpBox=Rt("div","xp-drops",this.root.querySelector(".minimap")));const s=Rt("div","xp-drop",this.xpBox);for(const a of t)Zt(`skills/${a}.png`,"xp-icon",s);const r=ye(String(e),"p12_full",Xn,!0);r.className="xp-text",s.append(r);const o=Rt("div","xp-hit",s);o.style.backgroundImage=`url(${yn("hitsplats/damage.png")})`,o.append(ye(String(n),"p11_full",Xn,!0)),requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.add("rise"))),setTimeout(()=>s.remove(),2100)}setMinimap(t,e,n){this.mapInfo={centre:e,bounds:n},this.mapImg.hidden=!1,this.mapImg.src=t}setMinimapView(t,e,n){const s=this.mapInfo;if(!s)return;const r=(t+s.centre[0]-s.bounds.x0)*4,o=(s.bounds.y1-(s.centre[1]+1-e))*4;this.mapImg.style.transformOrigin=`${r}px ${o}px`,this.mapImg.style.transform=`translate(${76-r}px, ${76-o}px) rotate(${n}rad)`}setMinimapDot(t,e,n){if(!this.oppDot)return;const s=t*Math.cos(n)-e*Math.sin(n),r=-t*Math.sin(n)-e*Math.cos(n);zt(this.oppDot,Math.round(75+s*4),Math.round(75-r*4))}message(t){t!==void 0&&this.messages.push(t),this.messages.length>8&&this.messages.shift();const e=gh();this.chatBox.classList.toggle("clear",e);const n=r=>e?r.replace(/<col=0000ff>/gi,"<col=9090ff>"):r;this.chatLines.innerHTML="",this.messages.forEach((r,o)=>{const a=ye(n(r),"p12_full",e?"#ffffff":"#000000",e);a.style.position="absolute",zt(a,0,o*14+(8-this.messages.length)*14),this.chatLines.append(a)});const s=ye(n(`${this.p.name}: <col=0000ff>*</col>`),"p12_full",e?"#ffffff":"#000000",e);s.style.position="absolute",zt(s,0,116),this.chatLines.append(s)}setupPractice(t){const e=Rt("div","pp",this.root);e.style.zoom=String(Es());const n=Rt("div","pp-top",e);this.pidBox=Rt("div","pp-pid",n),this.pidStatus=Rt("div","pp-pid-text",this.pidBox),this.vengeBox=Rt("div","pp-venge",n),Zt("magic/lunar/vengeance-on.png","pp-venge-icon",this.vengeBox),this.vengeSecs=Rt("span","pp-venge-secs",this.vengeBox),this.vengeBox.hidden=!0,this.vengedBox=Rt("div","pp-venged",n),Zt("magic/lunar/vengeance-on.png","pp-venged-icon",this.vengedBox),this.vengedBox.title="Your Vengeance is up: the next hit that does damage on you sends 75% back",this.vengedBox.hidden=!0;const s=(l,c,h)=>{const u=Rt("div",l,e);return u.textContent=c,u.addEventListener("pointerdown",d=>{d.preventDefault(),d.button===0&&(h(),this.refresh(!0))}),u},r=s("pp-spec","",t.restoreSpec);r.textContent="",Zt("orbs/icon-spec.png","pp-spec-icon",r),Rt("span","pp-spec-label",r).textContent="Restore spec";const o=s("pp-reset","",t.resetFight);o.innerHTML='<svg class="pp-reset-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg><span class="pp-spec-label">Reset fight</span>';const a=s("pp-reset","",t.menu);a.innerHTML='<svg class="pp-reset-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg><span class="pp-spec-label">Menu</span>',this.refreshPractice()}refreshPractice(){this.pidBox&&(this.pidBox.style.visibility=Go()?"visible":"hidden")}refreshVengeTimer(){if(!this.vengeBox||!this.vengeSecs)return;const t=this.p.timers.venge,e=t>0&&$o();this.vengeBox.hidden=!e,e&&(this.vengeSecs.textContent=`${Math.ceil(t*.6)}s`),this.vengedBox&&(this.vengedBox.hidden=!(this.p.vengeActive&&qo()))}setPid(t){!this.pidStatus||!this.pidBox||(this.pidBox.classList.toggle("yes",t),this.pidBox.classList.toggle("no",!t),this.pidStatus.textContent=t?"PID: YES":"PID: NO")}showOpponent(t,e,n){this.opponentUntil=performance.now()+1e4;const s=`${t}|${e}|${n}`;if(this.opponentBox||(this.opponentBox=zt(Rt("div","opp-box",this.root),4,24)),this.opponentBox.style.zoom=String(Es()),this.opponentBox.hidden=!1,s===this.opponentKey)return;this.opponentKey=s;const r=this.opponentBox;r.innerHTML="",ae(r,t,64,3,"b12_full",Xn,!0,!0);const o=zt(Rt("div","opp-bar",r),4,19);zt(Rt("div","opp-fill",o),0,0).style.width=`${Math.round(120*Math.max(0,e)/n)}px`,ae(o,`${Math.max(0,e)}/${n}`,60,2,"p11_full",Xn,!0,!0)}updateOpponent(t){this.opponentBox&&t>this.opponentUntil&&(this.opponentBox.hidden=!0)}setHover(t){if(this.hover.innerHTML="",!(t!=null&&t.length))return;const e=t[0],n=t.filter(r=>r.label!=="Cancel").length-1,s=`${e.label}${e.target?` <col=${e.targetColor??fh}>${e.target}</col>`:""}${n>0?`<col=ffffff> / ${n} more options</col>`:""}`;this.hover.append(ye(s,"b12_full",Xn,!0))}buildTabs(){this.tabRow.innerHTML="",O_.forEach((t,e)=>{const n=zt(Rt("div","tab",this.tabRow),e*33,0);Zt(this.tab===t.id?"tabs/stone-selected.png":"tabs/stone.png","abs",n),Zt(`tabs/${t.icon}.png`,"abs",n),n.addEventListener("pointerdown",s=>{s.preventDefault(),this.toggleTab(t.id)})}),this.panel.hidden=this.tab===null}toggleTab(t){this.tab=this.tab===t?null:t,this.buildTabs(),this.refresh()}selectTab(t){this.tab=t,this.buildTabs(),this.refresh()}onKey(t){if(!Ya.includes(t.key))return;t.preventDefault(),this.binds=Zi();const e=F_(this.binds,t.key);e&&this.selectTab(e)}panelKey(){var s,r;const t=this.p,e=t.inv.map(o=>o?`${o.id}:${o.doses??""}:${o.qty??""}`:"-").join(","),n=Object.entries(t.equip).map(([o,a])=>`${o}=${a==null?void 0:a.id}`).join(",");switch(this.tab){case"inventory":return`inv|${e}|${(s=this.drag)!=null&&s.ghost?this.drag.slot:""}`;case"equipment":return`eq|${n}`;case"combat":return`cb|${(r=t.equip.weapon)==null?void 0:r.id}|${t.spec}|${t.specArmed}|${JSON.stringify(t.styleIndex)}|${t.autoRetaliate}`;case"prayer":return`pr|${[...t.prayers].join(",")}|${t.level.prayer}`;case"magic":return`mg|${t.level.magic}|${e}|${t.timers.venge>1}`;case"skills":return`sk|${Object.values(t.level).join(",")}`;default:return`tab|${this.tab}`}}refresh(t=!1){if(this.chatBox.classList.contains("clear")!==gh()&&this.message(),this.refreshOrbs(),this.content.querySelectorAll(".inv-slot.used").forEach(n=>n.classList.remove("used")),this.refreshVengeTimer(),this.refreshPractice(),this.refreshBoosts(),this.panel.hidden=this.tab===null,this.tab===null)return;const e=`${this.tab}|${this.panelKey()}`;if(!(!t&&e===this.lastPanelKey))switch(this.lastPanelKey=e,this.content.classList.remove("scrolls"),this.content.onscroll=null,this.content.scrollTop=0,this.content.innerHTML="",this.tab){case"inventory":return this.renderInventory();case"equipment":return this.renderEquipment();case"combat":return this.renderCombat();case"prayer":return this.renderPrayer();case"magic":return this.renderMagic();case"skills":return this.renderSkills();case"settings":{const n=this.settingsScroll;this.content.classList.add("scrolls"),this.renderSettings(),this.content.scrollTop=n,this.content.onscroll=()=>{this.settingsScroll=this.content.scrollTop};return}default:ae(this.content,"Not part of this simulator.",95,120,"p12_full",Ce,!0,!0)}}refreshOrbs(){const t=this.p,e=(n,s,r)=>{const o=this.orbs[n],a=Math.max(0,Math.min(1,s/r)),l=a>.75?"#00ff00":a>.5?"#ffff00":a>.25?"#ff981f":"#ff0000",c=o.querySelector(".orb-num");c.innerHTML="";const h=ye(String(s),"p11_full",l,!0);h.style.position="absolute",zt(h,Math.round(26-h.width),0),c.append(h),o.querySelector(".orb-fill").style.height=Math.round(26*a)+"px"};e("hp",t.level.hitpoints,t.base.hitpoints),this.orbs.hp.querySelector(".orb-fill").style.backgroundImage=`url(${yn(t.venom>0?"orbs/fill-hp-venom.png":t.poison>0?"orbs/fill-hp-poison.png":"orbs/fill-hp.png")})`,e("prayer",t.level.prayer,t.base.prayer),e("run",100,100),this.orbs.run.querySelector(".orb-fill").style.backgroundImage=`url(${yn(t.running?"orbs/fill-run-active.png":"orbs/fill-run.png")})`,this.orbs.run.querySelector(".orb-icon").src=yn(t.running?"orbs/icon-run.png":"orbs/icon-walk.png"),e("spec",t.spec,100),this.orbs.prayer.querySelector(".orb-fill").style.backgroundImage=`url(${yn(t.prayers.size?"orbs/fill-prayer-active.png":"orbs/fill-prayer.png")})`,this.orbs.spec.querySelector(".orb-fill").style.backgroundImage=`url(${yn(t.specArmed?"orbs/fill-spec-active.png":"orbs/fill-spec.png")})`}renderInventory(){this.p.inv.forEach((t,e)=>{var s;const n=zt(Rt("div","inv-slot",this.content),14+e%4*42,6+Math.floor(e/4)*36);if(n.dataset.slot=String(e),t){const r=Rt("img","item",n);r.src=Ji(t),r.draggable=!1,r.alt=Mn(t),((s=this.drag)==null?void 0:s.slot)===e&&this.drag.ghost&&(r.style.opacity="0.4"),t.qty!==void 0&&ae(n,String(t.qty),0,-2,"p11_full",hi),n.addEventListener("pointerenter",()=>this.setHover(this.itemOptions(e,t))),n.addEventListener("pointerleave",()=>this.setHover(null))}n.addEventListener("pointerdown",r=>this.onSlotDown(r,e)),n.addEventListener("contextmenu",r=>r.preventDefault())})}onSlotDown(t,e){const n=this.p.inv[e];if(n){if(t.preventDefault(),t.button===2){t.stopPropagation(),this.openMenu(t.clientX,t.clientY,this.itemOptions(e,n));return}t.button===0&&(this.drag&&!this.drag.ghost&&this.useItem(this.drag.slot),this.drag={slot:e,x:t.clientX,y:t.clientY,at:performance.now(),ghost:null})}}onDragMove(t){const e=this.drag;if(e){if(!e.ghost){if(performance.now()-e.at<As()||Math.hypot(t.clientX-e.x,t.clientY-e.y)<4)return;const n=this.p.inv[e.slot];if(!n){this.drag=null;return}const s=Rt("img","drag-ghost",document.body);s.onload=()=>{s.style.width=`${s.naturalWidth*this.uiScale()}px`},s.src=Ji(n),e.ghost=s,this.refresh()}e.ghost.style.left=t.clientX-18*this.uiScale()+"px",e.ghost.style.top=t.clientY-16*this.uiScale()+"px"}}onDragEnd(t){var s;const e=this.drag;if(!e)return;if(this.drag=null,!e.ghost){this.useItem(e.slot);return}e.ghost.remove();const n=(s=document.elementFromPoint(t.clientX,t.clientY))==null?void 0:s.closest(".inv-slot");if((n==null?void 0:n.dataset.slot)!==void 0){const r=Number(n.dataset.slot),o=this.p.inv;[o[e.slot],o[r]]=[o[r],o[e.slot]]}this.refresh()}useItem(t){var s;const e=this.p.inv[t],n=e?Yt[e.id].kind:null;(n==="food"||n==="combo"||n==="potion")&&((s=this.content.querySelector(`.inv-slot[data-slot="${t}"]`))==null||s.classList.add("used")),this.send({type:"item",slot:t})}itemOptions(t,e){const n=Yt[e.id],s=Mn(e);return[{label:n.action,target:s,run:()=>this.useItem(t)},{label:"Use",target:s,run:()=>this.message("Nothing interesting happens.")},e.id==="orb"?{label:"Destroy",target:s,run:()=>this.message("You can't destroy items in this simulator.")}:{label:"Drop",target:s,run:()=>this.message("You can't drop items in this simulator.")},{label:"Examine",target:s,run:()=>this.message(V_(e))},{label:"Cancel",run:()=>{}}]}openMenu(t,e,n){const s=this.uiScale();this.menu.innerHTML="";const r=n.map(u=>`${u.label}${u.target?` <col=${u.targetColor??fh}>${u.target}</col>`:""}`),o=Math.max(...r.map(u=>ye(u,"b12_full").width),ye("Choose Option","b12_full").width)+8;this.menu.style.width=o+"px",Rt("div","ctx-head",this.menu).append(ye("Choose Option","b12_full","#5d5447",!1)),r.forEach((u,d)=>{const f=Rt("div","ctx-row",this.menu),g=ye(u,"b12_full",Xn,!0),v=ye(u.replace(/<col=[0-9a-f]{6}>|<\/col>/gi,""),"b12_full",hi,!0);v.hidden=!0,f.append(g,v),f.addEventListener("pointerenter",()=>{g.hidden=!0,v.hidden=!1}),f.addEventListener("pointerleave",()=>{g.hidden=!1,v.hidden=!0}),f.addEventListener("pointerdown",p=>{p.preventDefault(),p.stopPropagation(),this.closeMenu(),n[d].run()})}),this.menu.hidden=!1;const l=this.menu.getBoundingClientRect().height/s,c=Math.min(Math.max(2,t/s-o/2),window.innerWidth/s-o-2),h=Math.min(Math.max(2,e/s-2),window.innerHeight/s-l-2);zt(this.menu,c,h)}closeMenu(){this.menu.hidden=!0}uiScale(){return Es()}renderEquipment(){for(const[t,[e,n]]of Object.entries(z_)){const s=zt(Rt("div","equip-slot",this.content),e,n);Zt("equipment/slot.png","abs",s);const r=this.p.equip[t];if(!r){zt(Zt(`equipment/empty-${t}.png`,"abs",s),2,2);continue}const o=Rt("img","item",s);o.src=Ji(r),o.draggable=!1;const a=[{label:"Remove",target:Mn(r),run:()=>this.send({type:"unequip",slot:t})},{label:"Examine",target:Mn(r),run:()=>this.message(Yt[r.id].examine)},{label:"Cancel",run:()=>{}}];s.addEventListener("pointerenter",()=>this.setHover(a)),s.addEventListener("pointerleave",()=>this.setHover(null)),s.addEventListener("contextmenu",l=>l.preventDefault()),s.addEventListener("pointerdown",l=>{l.preventDefault(),l.button===2?(l.stopPropagation(),this.openMenu(l.clientX,l.clientY,a)):l.button===0&&this.send({type:"unequip",slot:t})})}ae(this.content,`Melee strength: +${_d(this.p)}`,95,214,"p11_full",Ce,!0,!0),ae(this.content,`Prayer: +${$h(this.p)}`,95,230,"p11_full",Ce,!0,!0)}renderCombat(){const t=this.p,e=t.equip.weapon,n=e?Yt[e.id]:null,s=Pe(t),r=ol[s],o=r.styles.indexOf(Nn(t));ae(this.content,n?n.name:"Unarmed",95,4,"b12_full",Ce,!0,!0),ae(this.content,`Combat Lvl: ${t.combatLevel}`,95,19,"p11_full",Ce,!0,!0),r.styles.forEach((u,d)=>{const f=zt(Rt("div","style-btn",this.content),20+d%2*80,45+Math.floor(d/2)*55);Zt(d===o?"combat/style-button-selected.png":"combat/style-button.png","abs",f),zt(Zt(`combat/icons/${u.icon}.png`,"abs",f),18,6),ae(f,u.name,35,30,"p11_full",Ce,!0,!0),f.addEventListener("pointerdown",g=>{g.preventDefault(),t.styleIndex[s]=d,mh(t),this.refresh(!0)})});const a=zt(Rt("div","style-btn wide",this.content),20,154);Zt(t.autoRetaliate?"combat/autoretaliate-selected.png":"combat/autoretaliate.png","abs",a),ae(a,"Auto Retaliate",92,10,"p11_full",Ce,!0,!0),ae(a,t.autoRetaliate?"(On)":"(Off)",92,23,"p11_full",Ce,!0,!0),a.addEventListener("pointerdown",u=>{u.preventDefault(),t.autoRetaliate=!t.autoRetaliate,mh(t),this.refresh(!0)});const l=zt(Rt("div","spec-bar",this.content),20,204);Zt("combat/spec-bar.png","abs",l);const c=zt(Rt("div","spec-fill",l),3,7);c.style.width=Math.round(144*this.p.spec/100)+"px",c.classList.toggle("armed",this.p.specArmed);const h=!!(n!=null&&n.spec);ae(l,`Special Attack: ${this.p.spec}%`,75,7,"p11_full",this.p.specArmed?hi:"#000000",this.p.specArmed,!0),h||l.classList.add("disabled"),l.addEventListener("pointerdown",u=>{u.preventDefault(),u.button===0&&this.send({type:"spec"})}),ae(this.content,`Category: ${r.category}`,95,241,"p11_full",Ce,!0,!0)}renderPrayer(){B_.forEach((t,e)=>{const n=6+e%5*37,s=11+Math.floor(e/5)*37,r=zt(Rt("div","prayer",this.content),n-2,s-2),o=H_[t];o&&this.p.prayers.has(o)&&zt(Zt("prayer/active-glow.png","abs",r),0,0),zt(Zt(`prayer/${t}-on.png`,"abs",r),2,2);const a=t.replace(/-/g," ").replace(/^./,c=>c.toUpperCase()),l=[{label:o&&this.p.prayers.has(o)?"Deactivate":"Activate",target:a,run:()=>o&&this.send({type:"prayer",id:o})},{label:"Cancel",run:()=>{}}];r.addEventListener("pointerenter",()=>this.setHover(l)),r.addEventListener("pointerleave",()=>this.setHover(null)),r.addEventListener("pointerdown",c=>{c.preventDefault(),o?this.send({type:"prayer",id:o}):this.message("Only Piety and Smite are used in this simulator.")})}),zt(Zt("skills/prayer.png","abs",this.content),12,238),ae(this.content,`${this.p.level.prayer} / ${this.p.base.prayer}`,36,241,"p12_full",Ce),this.filtersButton(124,238)}filtersButton(t,e){const n=zt(Rt("div","tile-btn",this.content),t,e);n.style.width="58px",n.style.height="18px",this.tile(n,"grey"),ae(n,"Filters",29,3,"p11_full",Ce,!0,!0)}tile(t,e){for(const n of["nw","nc","ne","cw","cc","ce","sw","sc","se"])Rt("div",`tile-part ${n}`,t).style.backgroundImage=`url(${yn(`tile/${e}-${n}.png`)})`}renderMagic(){const t=Z_();t.forEach((e,n)=>{const s=zt(Rt("div","spell",this.content),3+n%6*32,2+Math.floor(n/6)*30);s.dataset.spell=String(n);const r=e==="vengeance",o=!r||this.p.level.magic>=94&&this.p.timers.venge<=1&&this.p.inv.some(a=>(a==null?void 0:a.id)==="venge_sack");if(Zt(`magic/lunar/${e}-${o?"on":"off"}.png`,"abs",s),this.reorderSpells){s.classList.add("reorder");const a=l=>{[t[l],t[n]]=[t[n],t[l]],this.spellDrag=null,J_(t),this.refresh(!0)};s.addEventListener("pointerdown",l=>{if(l.preventDefault(),l.button===0){if(this.spellDrag!==null&&this.spellDrag!==n){a(this.spellDrag);return}this.spellDrag=n,s.classList.add("picked")}}),s.addEventListener("pointerup",()=>{this.spellDrag!==null&&this.spellDrag!==n&&a(this.spellDrag)})}else if(r){const a=[{label:"Cast",target:"Vengeance",run:()=>this.send({type:"cast",spell:"vengeance"})},{label:"Cancel",run:()=>{}}];s.addEventListener("pointerenter",()=>this.setHover(a)),s.addEventListener("pointerleave",()=>this.setHover(null)),s.addEventListener("pointerdown",l=>{l.preventDefault(),l.button===0&&this.send({type:"cast",spell:"vengeance"})})}}),this.stoneButton(51,238,88,this.reorderSpells?"Done":"Reorder",this.reorderSpells,()=>{this.reorderSpells=!this.reorderSpells,this.spellDrag=null,this.refresh(!0)})}renderSkills(){const t=["attack","hitpoints","mining","strength","agility","smithing","defence","herblore","fishing","ranged","thieving","cooking","prayer","crafting","firemaking","magic","fletching","woodcutting","runecraft","slayer","farming","construction","hunter","sailing"],e=new Set(["attack","strength","defence","hitpoints","ranged","prayer","magic"]);t.forEach((s,r)=>{const o=zt(Rt("div","skill-tile",this.content),r%3*63,Math.floor(r/3)*31);this.tile(o,"grey"),zt(Zt(`skills/${s}.png`,"abs skill-icon",o),4,3);const a=e.has(s)?this.p.level[s]:99,l=e.has(s)?this.p.base[s]:99,c=a>l?"#00ff00":a<l?"#ff0000":hi;ae(o,String(a),31,2,"p11_full",c,!0),o.append($_()),ae(o,String(l),43,14,"p11_full",hi,!0)});const n=zt(Rt("div","skill-total",this.content),0,248);ae(n,`Total level: ${t.length*99}`,95,1,"p12_full",hi,!0,!0)}renderSettings(){this.binds=Zi(),ae(this.content,"Keybinding",95,2,"b12_full",Ce,!0,!0),Br.forEach(({id:r,label:o},a)=>{const l=17+a*17;ae(this.content,o,6,l+2,"p11_full",Ce);const c=this.binds[r];this.stoneButton(118,l,66,c?Hr(c):"None",!1,h=>{const u=[...Ya,""].map(d=>({label:d?Hr(d):"None",run:()=>{for(const f of Object.keys(this.binds))d&&this.binds[f]===d&&delete this.binds[f];d?this.binds[r]=d:delete this.binds[r],Ou(this.binds),this.refresh(!0)}}));u.push({label:"Cancel",run:()=>{}}),this.openMenu(h.clientX,h.clientY,u)},16).id="kb-"+r});const e=17+Br.length*17+1,n=r=>e+r*18;this.stepper("Interface size",n(0),()=>`${Math.round(In("ui")*100)}%`,r=>Is(this.root,"ui",In("ui")+r*.1)),this.stepper("Minimap size",n(1),()=>`${Math.round(In("map")*100)}%`,r=>Is(this.root,"map",In("map")+r*.1)),this.stepper("Drag delay",n(2),()=>`${As()}ms`,r=>Hu(As()+r*50)),this.stepper("Sound volume",n(3),()=>sn()===0?"Muted":`${sn()}%`,r=>Bh(sn()+r*10));const s=(r,o,a,l,c,h)=>{ae(this.content,r,6,n(o)+2,"p11_full",Ce),this.stoneButton(118,n(o),66,c?a:l,c,()=>{h(),this.refresh(!0)},16)};s("Scaling",4,"Smooth","Crisp",ja(),()=>tx(this.root,!ja())),s("Tile marker",5,"On","Off",Za(),()=>he("dhsim.tileMarker",Za()?"0":"1")),s("Venge timer",6,"On","Off",$o(),()=>he("dhsim.vengeTimer",$o()?"0":"1")),s("Boosted levels",7,"On","Off",Wo(),()=>he("dhsim.boosts",Wo()?"0":"1")),s("PID indicator",8,"On","Off",Go(),()=>he("dhsim.pidIndicator",Go()?"0":"1")),s("Venge active",9,"On","Off",qo(),()=>he("dhsim.venged",qo()?"0":"1")),Rt("div","settings-end",this.content).style.top=n(10)+"px"}stoneButton(t,e,n,s,r,o,a=18){const l=zt(Rt("div","tile-btn",this.content),t,e);return l.style.width=n+"px",l.style.height=a+"px",this.tile(l,r?"red":"grey"),ae(l,s,n/2,(a-12)/2,"p11_full",Ce,!0,!0),l.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),c.button===0&&o(c)}),l}stepper(t,e,n,s){ae(this.content,t,6,e+2,"p11_full",Ce),this.stoneButton(118,e,18,"-",!1,()=>{s(-1),this.refresh(!0)},16),ae(this.content,n(),151,e+2,"p11_full",hi,!0,!0),this.stoneButton(166,e,18,"+",!1,()=>{s(1),this.refresh(!0)},16)}}const W_=1.5,Dl={ui:"dhsim.uiScale",map:"dhsim.mapScale"};function $_(){const i=document.createElement("canvas");i.width=20,i.height=21,i.style.position="absolute",zt(i,31,3);const t=i.getContext("2d");t.fillStyle="#000000";for(let e=0;e<=19;e++)t.fillRect(Math.round(1+(19-e)*18/19),e+1,1,1);return i}function Ka(){try{return JSON.parse(Qt("dhsim.loadout")??"null")}catch{return null}}function q_(i){he("dhsim.loadout",JSON.stringify(i))}function ph(i){try{const t=JSON.parse(Qt("dhsim.combat")??"null");t!=null&&t.styleIndex&&(i.styleIndex={...t.styleIndex}),typeof(t==null?void 0:t.autoRetaliate)=="boolean"&&(i.autoRetaliate=t.autoRetaliate)}catch{}}function mh(i){he("dhsim.combat",JSON.stringify({styleIndex:i.styleIndex,autoRetaliate:i.autoRetaliate}))}function In(i){const t=Number(Qt(Dl[i]));return t>=.5&&t<=3?t:W_}const Es=()=>In("ui");function ja(){return Qt("dhsim.uiSmooth")==="1"}function Za(){return Qt("dhsim.tileMarker")!=="0"}function gh(){return Qt("dhsim.chatClear")!=="0"}function X_(){return Qt("dhsim.botThoughts")==="1"}function Y_(){return Qt("dhsim.attackTimer")==="1"||Bu()}function Ja(){const i=Number(Qt("dhsim.ping"));return Qt("dhsim.ping")!==null&&i>=0&&i<=300?i:20}function Bu(){return Qt("dhsim.attackTimerLarge")==="1"}function K_(){return Qt("dhsim.metronomeSound")==="1"}function j_(){return Qt("dhsim.metronomeVisual")==="1"}function Go(){return Qt("dhsim.pidIndicator")!=="0"}function Wo(){return Qt("dhsim.boosts")!=="0"}function $o(){return Qt("dhsim.vengeTimer")!=="0"}function qo(){return Qt("dhsim.venged")!=="0"}function Z_(){try{const i=JSON.parse(Qt("dhsim.lunarOrder")??"null");if(i&&i.length===Vo.length&&Vo.every(t=>i.includes(t)))return i}catch{}return[...Vo]}function J_(i){he("dhsim.lunarOrder",JSON.stringify(i))}function As(){const i=Number(Qt("dhsim.dragDelay"));return i>=50&&i<=600?i:150}function Hu(i){he("dhsim.dragDelay",String(Math.min(600,Math.max(50,Math.round(i/50)*50))))}function Q_(i){Us?Is(Us,"map",i):he(Dl.map,String(Math.round(Math.min(3,Math.max(.5,i))*100)/100))}function Is(i,t,e){const n=Math.round(Math.min(3,Math.max(.5,e))*100)/100;he(Dl[t],String(n)),Il(i)}function tx(i,t){he("dhsim.uiSmooth",t?"1":"0"),Il(i)}let Us=null;function ex(i){Us&&Is(Us,"ui",i)}function Il(i){Us=i;for(const t of Array.from(i.children))t.style.zoom=String(In(t.classList.contains("minimap")?"map":"ui"));document.body.classList.toggle("ui-smooth",ja()),i.dataset.wheel||(i.dataset.wheel="1",window.addEventListener("wheel",t=>{var s,r;if(!t.ctrlKey)return;t.preventDefault();const n=!!((r=(s=t.target)==null?void 0:s.closest)!=null&&r.call(s,".minimap"))?"map":"ui";Is(i,n,In(n)+(t.deltaY<0?.05:-.05))},{passive:!1}))}const Xo=i=>`/dh-simulator/assets/osrs/sprites/${i}`,vh=new Map;function Yo(i){const t=()=>{let e=vh.get(i.src);if(e===void 0){const n=document.createElement("canvas");n.width=i.naturalWidth,n.height=i.naturalHeight;const s=n.getContext("2d",{willReadFrequently:!0});if(!s||!n.width)return;s.drawImage(i,0,0);const r=s.getImageData(0,0,n.width,n.height).data;let o=n.width,a=-1,l=n.height,c=-1;for(let h=0;h<n.height;h++)for(let u=0;u<n.width;u++)r[(h*n.width+u)*4+3]!==0&&(u<o&&(o=u),u>a&&(a=u),h<l&&(l=h),h>c&&(c=h));e=a<0?"0px 0px":`${Math.round(n.width/2-(o+a+1)/2)}px ${Math.round(n.height/2-(l+c+1)/2)}px`,vh.set(i.src,e)}i.style.translate=e};i.complete&&i.naturalWidth?t():i.addEventListener("load",t,{once:!0})}const nx={head:[77,4],cape:[36,43],neck:[77,43],ammo:[118,43],weapon:[21,82],body:[77,82],shield:[133,82],legs:[77,122],hands:[21,162],feet:[77,162],ring:[133,162]},ix=["angler","karambwan","brew","restore","sanfew","combat","tentacle","voidwaker","gmaul","dh_axe","ags","nox_halberd","dh_helm","dh_body","dh_legs","avernic","infernal","rancour","ferocious","treads","recoil","ultor","orb","venge_sack","tab"];class sx{constructor(t,e,n,s){A(this,"inv");A(this,"equip");A(this,"drag",null);A(this,"hint");A(this,"invBox");A(this,"equipBox");A(this,"pickBox");A(this,"onMove",t=>{const e=this.drag;if(e&&!(!e.ghost&&Math.hypot(t.clientX-e.x,t.clientY-e.y)<5)){if(!e.ghost){const n=this.at(e.from);if(!n)return;e.ghost=document.createElement("img"),e.ghost.className="le-ghost",e.ghost.src=Ji(n),Yo(e.ghost),document.body.append(e.ghost)}e.ghost.style.left=`${t.clientX}px`,e.ghost.style.top=`${t.clientY}px`}});A(this,"onUp",t=>{var o;const e=this.drag;if(!e)return;if(this.drag=null,!e.ghost&&e.from.kind==="pick"){const a=this.inv.findIndex(l=>!l);a<0?this.draw("Your inventory is full: remove something first (drag it onto the bin, or right-click it)."):this.move(e.from,{kind:"inv",i:a});return}if(!e.ghost)return;e.ghost.remove();const n=(o=document.elementFromPoint(t.clientX,t.clientY))==null?void 0:o.closest("[data-ref]");if(!n)return;const[s,r]=n.dataset.ref.split(":");this.move(e.from,s==="inv"?{kind:"inv",i:Number(r)}:s==="equip"?{kind:"equip",slot:r}:{kind:"bin"})});this.onSave=n,this.onBack=s;const r=JSON.parse(JSON.stringify(e));this.inv=r.inv,this.equip=r.equip;const o=document.createElement("div");o.className="le",t.append(o);const a=document.createElement("div");a.className="le-panels",o.append(a),this.invBox=this.panel(a,"Inventory"),this.equipBox=this.panel(a,"Worn equipment");const l=document.createElement("div");l.className="le-col le-pickcol";const c=document.createElement("div");c.className="le-title",c.textContent="Add items",this.pickBox=document.createElement("div"),this.pickBox.className="le-picker",this.pickBox.dataset.ref="bin:",l.append(c,this.pickBox),o.append(l);const h=document.createElement("div");h.className="ss-hint le-help",h.textContent="Drag items to swap them. Drop gear on its slot to wear it. Click or drag items from the list to add them; drag an item onto the bin (or right-click it) to remove it.",this.hint=document.createElement("div"),this.hint.className="ss-hint le-hint",o.append(h,this.hint);const u=document.createElement("div");u.className="le-buttons",o.append(u);const d=(f,g,v)=>{const p=document.createElement("button");p.className=g,p.textContent=f,p.addEventListener("click",v),u.append(p)};d("Back","le-btn",()=>this.onBack()),d("Reset to standard","le-btn",()=>{const f=Uu();this.inv=f.inv,this.equip=f.equip,this.draw("Back to the standard loadout (not saved yet).")}),d("Save loadout","le-btn le-save",()=>this.onSave({inv:this.inv,equip:this.equip})),window.addEventListener("pointermove",this.onMove,!0),window.addEventListener("pointerup",this.onUp,!0),this.draw("")}destroy(){var t,e;window.removeEventListener("pointermove",this.onMove,!0),window.removeEventListener("pointerup",this.onUp,!0),(e=(t=this.drag)==null?void 0:t.ghost)==null||e.remove()}panel(t,e){const n=document.createElement("div");n.className="le-col";const s=document.createElement("div");s.className="le-title",s.textContent=e;const r=document.createElement("div");return r.className="le-panel",r.style.backgroundImage=`url(${Xo("side/panel-default.png")})`,n.append(s,r),t.append(n),r}draw(t){t!==void 0&&(this.hint.textContent=t),this.invBox.innerHTML="",this.inv.forEach((s,r)=>{const o=this.cell(this.invBox,"le-inv",21+r%4*42,13+Math.floor(r/4)*36,{kind:"inv",i:r},s);o.dataset.ref=`inv:${r}`}),this.equipBox.innerHTML="";for(const[s,[r,o]]of Object.entries(nx)){const a=this.cell(this.equipBox,"le-equip",7+r,7+o,{kind:"equip",slot:s},this.equip[s]??null,s);a.dataset.ref=`equip:${s}`}this.pickBox.innerHTML="";const e={inv:this.inv,equip:this.equip};for(const s of ix){const r=lh(e,s),o=Xa(s),a=r>=o,l=document.createElement("div");l.className="le-pick"+(a?" full":""),l.dataset.ref=`pick:${s}`,l.title=Yt[s].name+(a?o===1?" (you have it)":` (max ${o})`:"");const c=document.createElement("img");c.className="le-pickimg",c.src=Ji(fr(s)),Yo(c),c.draggable=!1;const h=document.createElement("div");h.className="le-count",h.textContent=o===1/0?`×${r}`:`${r}/${o}`;const u=document.createElement("div");u.className="le-pickicon",u.append(c),l.append(u,h),l.addEventListener("pointerdown",d=>{d.button===0&&(d.preventDefault(),this.drag={from:{kind:"pick",id:s},ghost:null,x:d.clientX,y:d.clientY})}),this.pickBox.append(l)}const n=document.createElement("div");n.className="le-pick le-bin",n.dataset.ref="bin:",n.title="Remove: drop an item here",n.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v7M14 10v7"/></svg><div class="le-count">Remove</div>',n.addEventListener("pointerdown",s=>{s.button===0&&(s.preventDefault(),this.draw("Drag an item onto the bin to remove it (or right-click the item)."))}),this.pickBox.append(n)}cell(t,e,n,s,r,o,a){const l=document.createElement("div");if(l.className=e,l.style.left=`${n}px`,l.style.top=`${s}px`,t.append(l),a){const c=document.createElement("img");if(c.className="le-slotbg",c.src=Xo("equipment/slot.png"),l.append(c),!o){const h=document.createElement("img");h.className="le-empty",h.src=Xo(`equipment/empty-${a}.png`),l.append(h)}}if(o){const c=document.createElement("img");c.className="le-item",c.src=Ji(o),Yo(c),c.draggable=!1,l.append(c),l.title=Mn(o)}return l.addEventListener("contextmenu",c=>{c.preventDefault(),o&&this.remove(r)}),l.addEventListener("pointerdown",c=>{c.button===0&&(c.preventDefault(),o&&(this.drag={from:r,ghost:null,x:c.clientX,y:c.clientY}))}),l}same(t,e){return!!t&&JSON.stringify(t)===JSON.stringify(e)}at(t){return t.kind==="inv"?this.inv[t.i]:t.kind==="equip"?this.equip[t.slot]??null:t.kind==="pick"?fr(t.id):null}remove(t){t.kind==="inv"?this.inv[t.i]=null:t.kind==="equip"&&delete this.equip[t.slot],this.draw("")}add(t,e){const n=this.at(e);if((n==null?void 0:n.id)===t){this.draw();return}const s=Xa(t);if(lh({inv:this.inv,equip:this.equip},t)>=s){const r=Yt[t].name;this.draw(s===1?`You already have a ${r}: one of each.`:t==="restore"||t==="sanfew"?`Limit reached: up to ${s} super restores and Sanfew serums together.`:`Limit reached: up to ${s} ${r}s.`);return}if(e.kind==="inv")this.inv[e.i]=fr(t),this.draw(n?`Replaced the ${Mn(n)}.`:"");else if(e.kind==="equip"){if(Yt[t].slot!==e.slot){this.draw(`${Yt[t].name} doesn't go in the ${e.slot} slot.`);return}const r=this.inv.findIndex(o=>!o);if(r<0){this.draw("Make a free inventory spot first: what you wear now goes back to your inventory.");return}this.inv[r]=fr(t),this.wear(r,e.slot)||(this.inv[r]=null)}}move(t,e){if(this.same(t,e)){this.draw();return}if(t.kind==="pick"){this.add(t.id,e);return}if(t.kind==="bin"){this.draw();return}if(e.kind==="bin"||e.kind==="pick"){this.remove(t);return}if(t.kind==="inv"&&e.kind==="inv"){[this.inv[t.i],this.inv[e.i]]=[this.inv[e.i],this.inv[t.i]],this.draw("");return}if(t.kind==="inv"&&e.kind==="equip"){this.wear(t.i,e.slot);return}if(t.kind==="equip"&&e.kind==="inv"){const n=this.inv[e.i];n?Yt[n.id].slot===t.slot?this.wear(e.i,t.slot):this.draw(`${Mn(n)} can't be worn there: drop it on an empty spot instead.`):(this.inv[e.i]=this.equip[t.slot],delete this.equip[t.slot],this.draw(""));return}this.draw()}wear(t,e){const n=this.inv[t];if(!n)return this.draw(),!1;const s=Yt[n.id];if(s.slot!==e)return this.draw(`${Mn(n)} doesn't go in the ${e} slot.`),!1;const r=e==="weapon"&&s.twoHanded&&this.equip.shield?"shield":e==="shield"&&this.equip.weapon&&Yt[this.equip.weapon.id].twoHanded?"weapon":null,o={inv:[...this.inv],equip:{...this.equip}};if(this.inv[t]=this.equip[e]??null,this.equip[e]=n,r){const a=this.equip[r];delete this.equip[r];const l=this.inv.findIndex(c=>!c);if(l<0)return this.inv=o.inv,this.equip=o.equip,this.draw(`No room: ${Mn(n)} is two-handed, so the ${Mn(a)} needs a free inventory spot.`),!1;this.inv[l]=a}return this.draw(""),!0}}const un="#ff981f",Ts="#ffff00",Rs="#ffffff",Qa=[{id:"colosseum",name:"Fortis Colosseum",desc:"Sol Heredit’s arena: between the four pillars, walled in by gladiators with shields"},{id:"ge",name:"Grand Exchange",desc:"North side, by the Varrock wall"}];function tl(){return Qt("dhsim.botNoTab")==="1"}function el(){const i=Qt("dhsim.arena");return Qa.some(t=>t.id===i)?i:"colosseum"}const zu=["easy","medium","hard","elite","god"];function Vu(){const i=Qt("dhsim.level");return i&&zu.includes(i)?i:"hard"}function bs(){try{const i=JSON.parse(Qt("dhsim.training")??"[]");return Rr.map(t=>t.id).filter(t=>i.includes(t))}catch{return[]}}function nl(){return Qt("dhsim.useSavedLoadout")!=="0"}function Ul(){try{return JSON.parse(Qt("dhsim.record")??"{}")}catch{return{}}}function rx(i,t){const e=Ul(),n=e[i]??{w:0,l:0};t?n.w++:n.l++,e[i]=n,he("dhsim.record",JSON.stringify(e))}function tt(i,t,e,n){const s=document.createElement(i);return s.className=t,n!==void 0&&(s.textContent=n),e==null||e.append(s),s}function ke(i,t,e,n,s=1,r=""){const o=ye(t,e,n,!0);return o.className="ss-gametext "+r,o.style.width=`${o.width*s}px`,o.style.height=`${o.height*s}px`,i.append(o),o}class ox{constructor(t,e){A(this,"root");A(this,"level",Vu());A(this,"onArena",()=>{});A(this,"editor",null);A(this,"view","main");A(this,"fightBtn",null);this.onFight=e,this.root=tt("div","ss-overlay",t),this.root.hidden=!0;for(const n of["pointerdown","pointerup","wheel","contextmenu"])this.root.addEventListener(n,s=>s.stopPropagation())}get visible(){return!this.root.hidden}show(){this.render(),this.root.hidden=!1}hide(){this.root.hidden=!0}render(){var E;(E=this.editor)==null||E.destroy(),this.editor=null,this.root.innerHTML="";const t=tt("div","ss-panel",this.root);if(this.view==="loadout"){this.renderEditor(t);return}if(this.view==="training"){this.renderTraining(t);return}if(this.view==="settings"){this.renderSettings(t);return}if(this.view==="keys"){this.renderKeys(t);return}if(this.view==="help"){this.renderHelp(t);return}const e=tt("div","ss-head",t);ke(e,"DH Simulator","q8_full",un,3,"ss-title"),tt("div","ss-sub",e,"Pick your opponent, check your setup, and fight."),this.section(t,"Opponent");const n=tt("div","ss-levels",t),s=Ul();for(const L of xd){const k=mn[L],T=tt("button","ss-card"+(L===this.level?" selected":""),n);if(ke(T,k.name,"b12_full",L===this.level?Ts:un,2),tt("div","ss-blurb",T,k.blurb),!zu.includes(L)){T.disabled=!0,tt("div","ss-record",T,"Coming soon");continue}const I=s[L];tt("div","ss-record",T,I?`${I.w} won · ${I.l} lost`:"No fights yet"),T.dataset.level=L,T.addEventListener("click",()=>this.pick(L))}this.section(t,"Loadout");const r=tt("div","ss-row",t),o=Qt("dhsim.loadout")&&Qt("dhsim.loadout")!=="null",a=tt("div","ss-loadrow",r),l=tt("div","ss-seg",a),c=(L,k,T=!1)=>{const I=tt("button","ss-segbtn"+(nl()===L&&!(L&&!o)?" on":""),l,k);I.disabled=T,I.addEventListener("click",()=>{he("dhsim.useSavedLoadout",L?"1":"0"),this.render()})};c(!0,"My saved loadout",!o),c(!1,"Standard loadout"),tt("button","ss-editbtn",a,"Edit loadout").addEventListener("click",()=>this.open("loadout")),tt("div","ss-hint",r,o?"Set up your inventory and gear before the fight with Edit loadout.":"No saved loadout yet: set one up with Edit loadout."),this.section(t,"Arena");const u=tt("div","ss-row",t),d=tt("div","ss-seg",u),f=el();for(const L of Qa)tt("button","ss-segbtn"+(L.id===f?" on":""),d,L.name).addEventListener("click",()=>{L.id!==el()&&(he("dhsim.arena",L.id),this.onArena(L.id),this.render())});tt("div","ss-hint",u,Qa.find(L=>L.id===f).desc);const g=tt("div","ss-tiles",t),v=bs();this.tile(g,"Training",v.length?Rr.filter(L=>v.includes(L.id)).map(L=>L.label).join(", "):"Practise eating specific combos",v.length>0,()=>this.open("training")),this.tile(g,"Settings","Attack timer, metronome, PID indicator, bot thoughts, sound",!1,()=>this.open("settings"));const p=Zi();this.tile(g,"Keybinds",Br.filter(L=>p[L.id]).slice(0,4).map(L=>`${L.label.replace("Worn equipment","Equipment").replace("Combat options","Combat")} ${Hr(p[L.id])}`).join(", ")+"…",!1,()=>this.open("keys"));const m=tt("button","ss-fight",t);this.fightBtn=m,this.labelFight(),m.addEventListener("click",()=>{he("dhsim.level",this.level),this.hide(),this.onFight(this.level)});const S=tt("div","ss-foot",t);tt("button","ss-editbtn",S,"How to play").addEventListener("click",()=>this.open("help")),tt("div","ss-credits",S,"A free fan-made practice tool. Not affiliated with or endorsed by Jagex. Old School RuneScape and its models, sounds and maps are © Jagex Ltd.")}renderHelp(t){const e=this.page(t,"How to play","Practise Dharok’s (DH) fights from Old School RuneScape against a bot, as close to the real game as we could make it."),n=(s,r)=>{this.section(e,s);const o=tt("div","ss-help",e);for(const a of r)tt("p","",o,a)};n("The fight",["You and the bot both wear Dharok’s: the lower your HP, the harder your hits, above all with the DH axe. Hit with the whip, and look for the moment to spec (granite maul, Voidwaker or AGS) or axe for the KO.","Eat out of KO range, keep your prayer and boosts up, and use Vengeance. You win by KO, or when the other runs out of food. Tabbing out (the teleport tab in your inventory) ends the round; you can’t tab within a few ticks of speccing.","PID matters: whoever has it has their clicks and hits go first that tick. Turn on the PID indicator in Settings to see who has it."]),n("Controls",["It plays like the game in fixed mode, on a PC with mouse and keyboard. Click the bot to attack it, click the ground to walk, right-click for more options.","Inventory: click food and potions to eat and drink, and gear to wear it. Your specs: the spec orb by the minimap, or the bar in the combat tab.","Tabs on F-keys: F1 combat, F4 equipment, F5 prayer, F6 magic (Vengeance), Esc inventory. You can change them in the game’s own settings tab."]),n("Opponents",["Easy is new to DH and makes lots of mistakes. Medium is decent but beatable. Hard knows the tricks. Elite is a strong risk fighter. God is as good as a human can be: it only knows what you could know, and it learns from how you play (in your browser, so it learns from you, not from others). Each fight it plays a slightly different style.","Training (on the start screen) makes the bot throw the combos you pick, so you can practise eating them."]),n("After a fight",["Things to improve shows the moments that mattered: mistakes, close calls and good plays, judged on the real KO odds and on what the level you fought would actually do. Watch replays any moment in the arena.","Your settings, loadout and records are saved in this browser only."])}open(t){var e;this.view=t,this.render(),(e=this.root.querySelector(".ss-panel"))==null||e.scrollTo(0,0)}labelFight(){if(!this.fightBtn)return;this.fightBtn.innerHTML="";const t=mn[this.level].name;ke(this.fightBtn,bs().length?`Train vs ${t}!`:`Fight ${t}!`,"b12_full",Rs,2)}tile(t,e,n,s,r){const o=tt("button","ss-tile"+(s?" on":""),t),a=tt("div","ss-tiletop",o);tt("div","ss-tilename",a,e),tt("div","ss-tilego",a,s?"On ›":"›"),tt("div","ss-tilestatus",o,n),o.addEventListener("click",r)}page(t,e,n){const s=tt("div","ss-head",t);ke(s,e,"q8_full",un,3,"ss-title"),tt("div","ss-sub",s,n);const r=tt("div","ss-page",t),o=tt("button","ss-fight ss-done",t);return ke(o,"Done","b12_full",Rs,2),o.addEventListener("click",()=>this.open("main")),r}renderTraining(t){const e=this.page(t,"Training","Pick one or more combos to practise. The bot fights normally, and throws in the ones you pick on top."),n=tt("div","ss-explain",e);tt("div","ss-explainhead",n,"How it works");const s=tt("ul","ss-list",n);for(const a of["About every 30 seconds one of your picked combos comes, never on a fixed beat: sometimes two close together, sometimes a longer wait.","The bot has PID the whole time (no PID swaps), so you always eat them off PID, the hard way.","Apart from your combos it just fights plainly: no other KO attempts or mind games. It’s for learning, not for outplaying the bot.","Get hit, eat up, repot, keep fighting: the next one can come any moment.","Its spec is topped up for each one, and it never fakes them.","After each one the chat tells you how it went (in orange): survived, and your HP before and after, or KO’d.","Training fights don’t count for your win/loss record."])tt("li","",s,a);this.section(e,"Combos");const r=tt("div","ss-train",e),o=bs();for(const a of Rr){const l=tt("button","ss-chip"+(o.includes(a.id)?" on":""),r),c=tt("div","ss-tiletop",l);tt("div","ss-chipname",c,a.label);const h=tt("div","ss-check",c,o.includes(a.id)?"✓":"");tt("div","ss-chipdesc",l,a.desc),tt("div","ss-chiptip",l,a.tip),l.addEventListener("click",()=>{const u=bs(),d=u.includes(a.id)?u.filter(f=>f!==a.id):[...u,a.id];he("dhsim.training",JSON.stringify(d)),l.classList.toggle("on",d.includes(a.id)),h.textContent=d.includes(a.id)?"✓":""})}}renderSettings(t){const e=this.page(t,"Settings","Everything here is saved, and you can change it again between fights.");this.section(e,"Training aids");const n=tt("div","ss-opts ss-opts1",e);this.toggle(n,"Attack timer","A number under your health bar: the ticks until you can attack again (1 means a click now attacks on the next tick). Only for you, like the RuneLite plugin; the bot’s timer stays hidden.","dhsim.attackTimer",!1),this.toggle(n,"Large attack timer","The attack timer at double size, easier to see mid-fight (turns the attack timer on by itself).","dhsim.attackTimerLarge",!1),this.toggle(n,"Metronome sound","A tick-tock click every game tick (0.6 s), to get a feel for tick timing.","dhsim.metronomeSound",!1),this.toggle(n,"Metronome box","A small box at the top of the screen that switches colour every game tick.","dhsim.metronomeVisual",!1),this.section(e,"Interface");const s=tt("div","ss-opts ss-opts1",e);this.toggle(s,"Transparent chatbox","See the fight through the chat: no background, white text, and clicks go through to the game (like the game’s resizable mode).","dhsim.chatClear",!0),this.toggle(s,"PID indicator","Shows whether you have PID (green) or not (red). Off: read it yourself from the hitsplats, like in the real game.","dhsim.pidIndicator",!0),this.toggle(s,"Venge timer","Your Vengeance cooldown in seconds, next to the PID card.","dhsim.vengeTimer",!0),this.toggle(s,"Venge active",'Shows "Venged" next to the PID card while your Vengeance is up and not broken yet (it goes the moment a hit procs it).',"dhsim.venged",!0),this.toggle(s,"Boosted levels","Small boxes by the spec orb with your boosted or drained levels.","dhsim.boosts",!0),this.toggle(s,"Tile marker","An outline on the tile you’re really standing on (your true tile).","dhsim.tileMarker",!0),this.section(e,"Bot");const r=tt("div","ss-opts ss-opts1",e);this.toggle(r,"Fight to the death","The bot never tabs out: it eats everything it has and fights until one of you dies. For when you just want to practise, not win the supply battle.","dhsim.botNoTab",!1),this.toggle(r,"Bot thoughts","The bot explains its decisions in the chat (purple): what it saw, and why it went for a KO. Interesting, but it gives its plans away.","dhsim.botThoughts",!1),this.section(e,"Sound");const o=tt("div","ss-opts ss-opts1",e),a=tt("div","ss-opt",o),l=tt("div","ss-optlabel",a);tt("div","ss-optname",l,"Sound volume"),tt("div","ss-optdesc",l,sn()===0?"Muted":`${sn()}%`);const c=tt("input","ss-slider",a);c.type="range",c.min="0",c.max="100",c.step="10",c.value=String(sn()),c.addEventListener("input",()=>{Bh(Number(c.value)),l.lastChild.textContent=sn()===0?"Muted":`${sn()}%`}),this.section(e,"Connection");const h=tt("div","ss-opts ss-opts1",e),u=tt("div","ss-opt",h),d=tt("div","ss-optlabel",u);tt("div","ss-optname",d,"Ping");const f=tt("div","ss-optdesc",d,""),g=()=>{const b=Ja();f.textContent=`${b} ms${b===0?" (no delay)":b<=30?" (good connection)":b<=80?" (average)":" (laggy)"}: your clicks reach the server half a ping later, and you see the result half a ping after that, like the real game.`};g();const v=tt("input","ss-slider",u);v.type="range",v.min="0",v.max="200",v.step="10",v.value=String(Ja()),v.addEventListener("input",()=>{he("dhsim.ping",v.value),g()}),this.section(e,"Interface size");const p=tt("div","ss-opts ss-opts1",e),m=tt("div","ss-opt",p),S=tt("div","ss-optlabel",m);tt("div","ss-optname",S,"Inventory and interface");const M=()=>`${Math.round(Es()*100)}% (also Ctrl + mouse wheel in the game)`,E=tt("div","ss-optdesc",S,M()),L=tt("input","ss-slider",m);L.type="range",L.min="0.8",L.max="2.5",L.step="0.05",L.value=String(Es()),L.addEventListener("input",()=>{ex(Number(L.value)),E.textContent=M()});const k=tt("div","ss-opt",p),T=tt("div","ss-optlabel",k);tt("div","ss-optname",T,"Minimap");const I=()=>`${Math.round(In("map")*100)}%`,Q=tt("div","ss-optdesc",T,I()),_=tt("input","ss-slider",k);_.type="range",_.min="0.5",_.max="3",_.step="0.1",_.value=String(In("map")),_.addEventListener("input",()=>{Q_(Number(_.value)),Q.textContent=I()})}renderKeys(t){const e=this.page(t,"Keybinds","Which key opens which tab during a fight, like the game’s keybinding settings. Also in the game itself: the wrench tab.");this.section(e,"Tabs");const n=tt("div","ss-opts ss-opts1",e),s=Zi();for(const{id:d,label:f}of Br){const g=tt("div","ss-opt",n),v=tt("div","ss-optlabel",g);tt("div","ss-optname",v,f);const p=tt("select","ss-select",g);for(const m of["",...Ya])p.append(new Option(m?Hr(m):"None",m));p.value=s[d]??"",p.addEventListener("change",()=>{const m=Zi(),S=p.value;for(const M of Object.keys(m))S&&m[M]===S&&delete m[M];S?m[d]=S:delete m[d],Ou(m),this.render()})}tt("button","ss-editbtn ss-keyreset",e,"Reset to default").addEventListener("click",()=>{N_(),this.render()}),this.section(e,"Mouse");const o=tt("div","ss-opts ss-opts1",e),a=tt("div","ss-opt",o),l=tt("div","ss-optlabel",a);tt("div","ss-optname",l,"Drag delay");const c=tt("div","ss-optdesc",l,""),h=()=>{c.textContent=`${As()} ms: how long you hold an inventory item before it starts dragging (higher: fewer accidental drags while clicking fast).`};h();const u=tt("input","ss-slider",a);u.type="range",u.min="50",u.max="600",u.step="50",u.value=String(As()),u.addEventListener("input",()=>{Hu(Number(u.value)),h()})}renderEditor(t){const e=tt("div","ss-head",t);ke(e,"Loadout","q8_full",un,3,"ss-title"),tt("div","ss-sub",e,"Arrange your inventory and pick what you wear. Saved loadouts are used for every fight."),this.editor=new sx(t,Ka()??Uu(),n=>{q_(n),he("dhsim.useSavedLoadout","1"),this.open("main")},()=>this.open("main"))}pick(t){this.level=t;for(const e of this.root.querySelectorAll(".ss-card")){const n=e.dataset.level===t;e.classList.toggle("selected",n);const s=e.querySelector("canvas");s&&s.replaceWith(ke(document.createElement("div"),mn[e.dataset.level].name,"b12_full",n?Ts:un,2))}this.labelFight()}section(t,e){tt("div","ss-section",t,e)}toggle(t,e,n,s,r){const o=()=>{const h=Qt(s);return h===null?r:h==="1"},a=tt("label","ss-opt",t),l=tt("div","ss-optlabel",a);tt("div","ss-optname",l,e),tt("div","ss-optdesc",l,n);const c=tt("button","ss-switch"+(o()?" on":""),a);tt("span","ss-knob",c),c.addEventListener("click",h=>{h.preventDefault(),he(s,o()?"0":"1"),c.classList.toggle("on",o())})}}class ax{constructor(t){A(this,"root");A(this,"timer",0);A(this,"counting",!1);this.root=tt("div","ff-layer",t);for(const e of["pointerdown","pointerup","wheel"])this.root.addEventListener(e,n=>n.stopPropagation())}get showing(){return this.root.children.length>0}clear(){clearTimeout(this.timer),this.counting=!1,this.root.innerHTML="",this.root.classList.remove("blocking")}ready(t,e){this.clear();const n=tt("div","ff-card",this.root);tt("div","ff-label",n,"Next opponent"),ke(n,`${t} bot`,"b12_full",un,2),tt("div","ff-hint",n,"Pot up and get set. You can’t attack until the countdown ends.");const s=tt("button","ss-fight ff-btn",n);ke(s,"Ready","b12_full",Rs,2),s.addEventListener("click",()=>e())}tabbed(t,e,n,s,r,o=!1){this.clear(),this.root.classList.add("blocking");const a=tt("div","ff-card",this.root);ke(a,t,"q8_full",un,3),tt("div","ff-hint",a,`No KO: both reset (HP, spec, inventory). Against the ${e} bot.`);const l=tt("div","ff-row",a),c=tt("button","ss-fight ff-btn",l);ke(c,"Go again","b12_full",Rs,2),c.addEventListener("click",()=>n());const h=tt("button","ff-secondary",l);if(ke(h,"Menu","b12_full",un,2),h.addEventListener("click",()=>s()),r&&this.reviewButton(a,r),o){const u=tt("label","ff-check",a),d=tt("input","",u);d.type="checkbox",d.checked=tl(),tt("span","",u,"Don’t let the bot tab out: fight to the death"),d.addEventListener("change",()=>he("dhsim.botNoTab",d.checked?"1":"0"))}}reviewButton(t,e){const n=tt("button","ff-secondary ff-review",t);ke(n,"Things to improve","b12_full",Ts,2),n.addEventListener("click",()=>e())}countdown(t){this.clear();const e=["3","2","1","FIGHT!"],n=s=>{try{this.root.innerHTML="";const r=tt("div","ff-count",this.root);ke(r,e[s],"q8_full",s===3?Ts:un,s===3?4:5)}catch(r){console.error(r)}if(s===3){this.counting=!1,t(),this.timer=window.setTimeout(()=>this.clear(),900);return}this.timer=window.setTimeout(()=>n(s+1),1e3)};this.counting=!0,n(0)}result(t,e,n,s,r,o){this.clear(),this.root.classList.add("blocking");const a=tt("div","ff-card",this.root),l={won:"KO!",lost:"You got KO’d","won-food":"You won","lost-food":"You died","you-tabbed":"You tabbed out","bot-tabbed":"The bot tabbed out"}[t];ke(a,l,"q8_full",t==="won"||t==="won-food"||t==="bot-tabbed"?Ts:t==="you-tabbed"?un:"#ff5040",3),tt("div","ff-hint",a,`${t==="won-food"?"It was out of real food: no KO. ":t==="lost-food"?"You were out of real food: no KO. ":t==="you-tabbed"||t==="bot-tabbed"?"No KO: reset and go again. ":""}Against the ${e} bot${n?` • KOs ${n.w}–${n.l}`:""}`);const u=tt("div","ff-row",a),d=tt("button","ss-fight ff-btn",u);ke(d,"Rematch","b12_full",Rs,2),d.addEventListener("click",()=>s());const f=tt("button","ff-secondary",u);ke(f,"Menu","b12_full",un,2),f.addEventListener("click",()=>r()),o&&this.reviewButton(a,o)}}function ws(i){const t={angler:0,karambwan:0,brew:0,restore:0,combat:0,sanfew:0};for(const e of i.inv)e&&(e.id==="angler"||e.id==="karambwan"?t[e.id]++:(e.id==="brew"||e.id==="restore"||e.id==="combat"||e.id==="sanfew")&&(t[e.id]+=e.doses??4));return t}const Bi=(i,t)=>{var e;return((e=i.equip.weapon)==null?void 0:e.id)===t||i.inv.some(n=>(n==null?void 0:n.id)===t)};function _h(i,t){var n;const e=ne(i,"voidwaker");return{hp:i.level.hitpoints,maxHp:i.base.hitpoints,spec:i.spec,weapon:((n=i.equip.weapon)==null?void 0:n.id)??"none",venge:i.vengeActive,vengeCd:i.timers.venge,atk:i.timers.attack,food:i.timers.food,combo:i.timers.combo,potion:i.timers.potion,str:i.level.strength,baseStr:i.base.strength,prayer:i.level.prayer,piety:i.prayers.has("piety"),supplies:ws(i),freeSlots:i.inv.filter(s=>!s).length,max:{tentacle:ne(i,"tentacle"),gmaul:ne(i,"gmaul"),vwSpec:Math.floor(ne(i,"voidwaker")*1.5),axe:ne(i,"dh_axe"),agsSpec:Math.floor(Math.floor(ne(i,"ags")*1.1)*1.25)},rolls:{tentacle:Ue(i,t,"tentacle"),gmaul:Ue(i,t,"gmaul"),ags:Ue(i,t,"ags","ags"),axe:Ue(i,t,"dh_axe"),vw:[Math.floor(e*.5),Math.floor(e*1.5)]},has:{gmaul:Bi(i,"gmaul"),voidwaker:Bi(i,"voidwaker"),axe:Bi(i,"dh_axe"),ags:Bi(i,"ags"),orb:Bi(i,"orb"),tab:Bi(i,"tab")}}}function xh(i,t){var e,n;return{pos:{...i.pos},via:i.steps.length===2?{...i.steps[0]}:null,moved:i.moved,facing:i.targetId===t.id,worn:Object.values(i.equip).filter(Boolean).map(s=>s.id),weapon:((e=i.equip.weapon)==null?void 0:e.id)??null,shield:((n=i.equip.shield)==null?void 0:n.id)??null,smite:i.prayers.has("smite"),hp:i.level.hitpoints,maxHp:i.base.hitpoints}}function lx(i,t){const e=[];for(const n of Object.keys(i))for(let s=t[n];s<i[n];s++)e.push(n);return e}class cx{constructor(){A(this,"ticks",[]);A(this,"pending",[]);A(this,"eaters",new Set);A(this,"last",null);A(this,"visuals",[]);A(this,"withVisuals",!1);A(this,"recording",!1)}start(t,e){this.ticks=[],this.pending=[],this.visuals=[],this.eaters.clear(),this.last={you:ws(t),opp:ws(e)},this.recording=!0}attack(t,e,n,s=1){this.recording&&this.pending.push({type:"attack",who:t,weapon:e,special:n,hits:s})}hit(t,e){this.recording&&this.pending.push({type:"hit",on:t,from:e.from,damage:e.damage,kind:e.kind,special:!!e.special})}anim(t,e){this.recording&&(e==="eat"||e==="drink"?this.eaters.add(t):e==="cast"?this.pending.push({type:"cast",who:t}):e==="orb"?this.pending.push({type:"orb",who:t}):e==="tab"&&this.pending.push({type:"tab",who:t}))}thought(t){this.recording&&this.pending.push({type:"thought",text:t})}death(t){this.recording&&this.pending.push({type:"death",who:t})}visual(t){this.recording&&this.withVisuals&&this.visuals.push(t)}endTick(t,e,n,s){if(!this.recording)return;const r={you:ws(n),opp:ws(s)},o=this.pending.splice(0);for(const l of["you","opp"]){const c=this.last?lx(this.last[l],r[l]):[];(c.length||this.eaters.has(l))&&o.unshift({type:"consume",who:l,items:c})}this.eaters.clear(),this.last=r;const a={tick:t,pid:e,you:_h(n,s),opp:_h(s,n),events:o};this.withVisuals&&(a.look={you:xh(n,s),opp:xh(s,n)},a.fx=this.visuals.splice(0)),this.ticks.push(a)}finish(t,e,n){if(!this.recording)return null;this.recording=!1;const s=this.ticks[this.ticks.length-1];return s&&(s.events.push(...this.pending.splice(0)),s.fx&&s.fx.push(...this.visuals.splice(0))),{ticks:this.ticks,end:t,level:e,training:n}}}function Cs(i){const t=Math.round(i*.6);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}const He="the bot",hx=10,ux=.2,Ko=.08,dx=.4,yh=.08,Ns=22,Gu=18,fx=16,px=5,zr={gmaul:"granite maul",voidwaker:"Voidwaker",dh_axe:"DH axe",ags:"AGS",tentacle:"whip",elder_maul:"Elder maul",nox_halberd:"Noxious halberd",none:"fists"};function Mh(i){const t=i.rolls,e=ve(t.tentacle),n=ve(t.gmaul),s=ve(t.ags),r=ml(t.vw[0],t.vw[1]),o=Math.floor(i.spec/50),a=[{name:"whip",hits:[e]}];return i.has.axe&&a.push({name:"DH axe",hits:[ve(t.axe)]}),o>=1&&i.has.gmaul&&a.push({name:"whip into maul",hits:[e,n]}),o>=1&&i.has.voidwaker&&a.push({name:"Voidwaker",hits:[r]}),o>=1&&i.has.ags&&a.push({name:"AGS",hits:[s]}),o>=2&&i.has.gmaul&&a.push({name:"double maul",hits:[n,n]}),o>=2&&i.has.gmaul&&i.has.voidwaker&&a.push({name:"Voidwaker into maul",hits:[r,n]}),o>=2&&i.has.gmaul&&i.has.ags&&a.push({name:"AGS into maul",hits:[s,n]}),a}const mx={"whip into maul":"single maul","instant maul":"single maul",Voidwaker:"Voidwaker",AGS:"AGS","double maul":"tentacle into double maul","instant double maul":"tentacle into double maul","Voidwaker into maul":"Voidwaker into insta maul","AGS into maul":"AGS into insta maul"};function gx(i){const t=Object.values(mn).find(n=>n.name===i);if(!t)return()=>1;const e=(t.play.newbie??0)>0?.35:1;return n=>{if(n==="whip")return 1;if(n==="DH axe")return e<1?.5:1;const s=mx[n];return s?Math.min(1,t.combos[s]??0)*e:1}}function ys(i,t,e=()=>1){let n={p:-1,raw:0,combo:Mh(i)[0]};for(const s of Mh(i)){const r=Ne(s.hits,t),o=r*e(s.name);o>n.p&&(n={p:o,raw:r,combo:s})}return n}function jo(i,t){const e=i.rolls,n=[],s=[];for(const o of t)if(o.weapon==="gmaul"&&o.special){for(let a=0;a<o.hits;a++)n.push(ve(e.gmaul));s.push(o.hits>1?"double maul":"maul")}else o.weapon==="voidwaker"&&o.special?(n.push(ml(e.vw[0],e.vw[1])),s.push("Voidwaker")):o.weapon==="ags"&&o.special?(n.push(ve(e.ags)),s.push("AGS")):o.weapon==="dh_axe"?(n.push(ve(e.axe)),s.push("DH axe")):(n.push(ve(e.tentacle)),s.push(zr[o.weapon]??o.weapon));return{name:s.join(" into ").replace("maul into maul","double maul")||"whip",hits:n}}function Zo(i,t){return i.events.reduce((e,n)=>e+(n.type==="hit"&&n.on===t&&(n.kind==="melee"||n.kind==="magic")?n.damage:0),0)}function Jo(i,t){return i.events.reduce((e,n)=>e+(n.type==="hit"&&n.on===t?n.damage:0),0)}const Hi=(i,t)=>i.events.some(e=>e.type==="consume"&&e.who===t),jn=(i,t)=>i.events.filter(e=>e.type==="attack"&&e.who===t),_n=(i,t)=>jn(i,t).filter(e=>e.special),bh=i=>i.food<=1&&i.supplies.angler+i.supplies.karambwan>0;function il(i){let t=0;return i.food<=1&&i.supplies.angler&&(t+=Ns),i.potion<=1&&i.supplies.brew&&(t+=fx),i.combo<=1&&i.supplies.karambwan&&(t+=Gu),t}const Qo=i=>il(i)>Ns+Gu?"triple eat":il(i)>Ns?"double eat":"eat";function wh(i,t,e){var r;const n=[],s=[i[t-1],i[t]].filter(Boolean).flatMap(o=>jn(o,e)).find(o=>!o.special&&o.weapon==="tentacle");for(let o=t;o<=Math.min(i.length-1,t+2);o++)n.push(...jn(i[o],e).filter(a=>a.special||o>t&&a.weapon==="dh_axe"));return s&&((r=n[0])==null?void 0:r.weapon)==="gmaul"&&n.unshift(s),n}function vx(i){var J;const t=i.ticks,e=gx(i.level),n={Easy:.6,Medium:.3,Hard:.2,Elite:.12,God:.1}[i.level]??.2,s=i.level==="Easy"?" An Easy bot rarely punishes this; stronger ones will.":i.level==="Medium"?" A decent chance for it to catch you off guard: it doesn’t always go for it, but it can.":" A real chance to get caught; a good player takes those.",r=[],o=R=>r.push({until:R.at,...R}),a=new Set,l=(R,N)=>{for(let Y=Math.max(0,R);Y<=N;Y++)a.add(Y)},c=[];t.forEach((R,N)=>{c[N]=jn(R,"opp").length?N:N>0?c[N-1]:-100});const h=(R,N)=>{const Y=t[R].opp,rt=t[R].pid==="you"?.5:1;if(Y.atk<=1){const kt=ys(Y,N,e);return{...kt,p:kt.p*rt}}const lt=Math.floor(Y.spec/50);if(!Y.has.gmaul||lt<1||R-c[R]>px)return{p:0,raw:0,combo:{name:"whip",hits:[]}};const ot=ve(Y.rolls.gmaul),ut=lt>=2?{name:"instant double maul",hits:[ot,ot]}:{name:"instant maul",hits:[ot]},C=Ne(ut.hits,N);return{p:C>=dx?C*e(ut.name)*rt:0,raw:C,combo:ut}},u=R=>bh(t[R].you)&&!Hi(t[R],"you")&&ys(t[R].opp,t[R].you.hp,e).p>=Ko,d=R=>u(R)&&h(R,t[R].you.hp).p>=Ko,f=t.findIndex(R=>R.events.some(N=>N.type==="death"&&N.who==="you"));if(f>0){let R=f;for(let H=f-1;H>=Math.max(0,f-3);H--)Jo(t[H],"you")>0&&(R=H);const N=Math.max(0,R-1),Y=t[N].you,rt=t.slice(R,f+1).reduce((H,xt)=>H+Jo(xt,"you"),0),lt=jo(t[N].opp,t.slice(Math.max(0,R-2),f+1).flatMap(H=>jn(H,"opp"))),ot=Ne(lt.hits,Y.hp),ut=t.slice(Math.max(0,R-2),f+1).flatMap(H=>_n(H,"opp"))[0];let C=-1;for(let H=Math.max(0,R-2);H<=f&&C<0;H++)_n(t[H],"opp").length&&(C=H);let kt=C;for(;ut&&kt>0&&t[kt-1].opp.weapon===ut.weapon;)kt--;const Et=C>=0?C-kt:0,Vt=C>=0&&t[C].pid==="you",Lt=Et+(Vt?1:0),Xt=ut?zr[ut.weapon]??ut.weapon:"",P=Ne(lt.hits,Math.min(Y.maxHp+16,Y.hp+il(Y)));let y=0,x=0;for(let H=R-1;H>=0&&u(H);H--)y++,d(H)&&x++;x||(y=0);let U,j,nt="mistake";if(i.end==="lost-food")U="Out of food",j=`You died with no real food left (no double eat). Watch your supplies against ${He}'s: tab out (once both specs are used) before it comes to this.`,nt="note";else if(ot<yh){const H=t.slice(Math.max(0,R-2),f+1).some(xt=>_n(xt,"opp").length);U=H?"A Hail Mary that worked":"Unlucky",j=H?`From ${Y.hp} HP its ${lt.name} had only about ${we(ot)} to KO you: it needed top rolls (it hit ${rt}). Nothing to train on here.`:`From ${Y.hp} HP its ${lt.name} needed a near-max hit (a ${we(ot)} chance) and got it (${rt}). Unlucky; staying a few HP higher takes even that away.`,nt="note"}else Lt>=1&&P<ot*.5?(U="One tick too slow",j=`${Et>=1?`${He} had its ${Xt} out ${Et} tick${Et>1?"s":""} before the spec, with you at ${Y.hp} HP.`:`You had PID, so its ${Xt} landed a tick after the swing: you could see it coming at ${Y.hp} HP.`} From there its ${lt.name} had ${we(ot)} to KO you; a ${Qo(Y)} ${Et>=1?"when it showed":"on the swing"} would have dropped that to ${we(P)}. One tick quicker would likely have saved you.`):y>=2?(U="KO’d from KO range",j=`You sat at ${t[R-1].you.hp} HP for ${y} ticks with food ready while its ${lt.name} had ${we(ot)} to KO you. ${C<0?`Its next hit was coming either way (${rt} damage): eating first was the play.`:`${Vt?"The spec came without a warning":"It had PID, so the spec landed the moment it swung"} (${rt} damage): the time to eat was before it.`} A ${Qo(Y)} would have made it ${we(P)}.`):ot>=.3?(U="KO’d in range",j=`At ${Y.hp} HP its ${lt.name} had ${we(ot)} to KO you. Stay higher when it has spec: a ${Qo(Y)} would have made it ${we(P)}.`):(U="KO’d on a real chance",j=`From ${Y.hp} HP its ${lt.name} had ${we(ot)} to KO you and it landed (${rt}). A risky spot more than a big mistake: a bit higher is safer.`,nt="note");o({at:N,until:f,kind:nt,title:U,text:j,weight:100}),l(N-y,f)}let g=0;for(let R=1;R<t.length;R++){if(!_n(t[R],"opp").length||_n(t[R-1],"opp").length||a.has(R))continue;const N=jo(t[R-1].opp,wh(t,R,"opp")),Y=[t[R],t[R+1],t[R+2]].filter(Boolean).reduce((C,kt)=>C+Zo(kt,"you"),0);if(!t.slice(R,R+3).every(C=>C.you.hp>0))continue;const lt=[t[R-1],t[R]].some(C=>Hi(C,"you")),ot=t[Math.max(0,R-2)].you.hp,ut=Ne(N.hits,ot);if(lt&&ut>=ux&&g<3)g++,o({at:R,kind:"good",title:"Ate the combo",text:`${He} went for a ${N.name} (${we(ut)} to KO you from ${ot}) and you ate in time: it hit ${Y} and you lived. That's the read.`,weight:20+ut*20});else if(!lt&&Ne(N.hits,t[R-1].you.hp)>=.35){const C=Ne(N.hits,t[R-1].you.hp);o({at:R,kind:"mistake",title:"Got away with it",text:`${He}'s ${N.name} had ${we(C)} to KO you from ${t[R-1].you.hp} HP and you didn't eat: you lived on its rolls (${Y}), not on your play.${t[R].pid==="opp"?` It had PID, so it all landed right away: when it has spec and PID, eat on its ${N.name.startsWith("whip")?"whip":"first hit"}, not after the specs.`:" You had PID, so you saw it coming a tick before it landed: that was the time to eat."}`,weight:35+C*30}),l(R-2,R+2)}}const v=[];for(let R=0;R<t.length;R++){const N=Zo(t[R],"you"),Y=N+(R+1<t.length?Zo(t[R+1],"you"):0);if(N<15||Y<25)continue;const rt=t[Math.min(R+1,t.length-1)].you;if(rt.hp<=0)continue;let lt=R;for(;lt<t.length&&!Hi(t[lt],"you");)lt++;if(lt>=t.length)continue;const ot=lt-R;v.push(ot);let ut={p:0,raw:0,combo:{name:""}},C=-1;for(let kt=R+1;kt<lt;kt++){const Et=h(kt,t[kt].you.hp);Et.p>ut.p&&(ut=Et,C=kt)}ot>=3&&ut.p>=Ko&&bh(rt)&&!a.has(R)&&(o({at:R,until:lt,kind:ut.p>=n?"mistake":"note",title:`Ate ${ot} ticks after a big hit`,text:`You took ${Y} and were left at ${rt.hp} HP. While you waited, ${He} could hit again${C>=0&&t[C].you.hp!==rt.hp?` (you at ${t[C].you.hp})`:""}: its ${ut.combo.name} had ${we(ut.raw)} to KO you, and the next eat only came ${ot} ticks (${(ot*.6).toFixed(1)} s) later.${s}`,weight:30+ot*3+ut.p*40}),l(R,lt)),R=lt}let p=0;const m=[];for(let R=0;R<t.length;R++){if(!u(R))continue;let N=R;for(;N+1<t.length&&u(N+1);)N++;const Y=N-R+1;let rt=0;for(let ot=R+1;ot<=N;ot++)d(ot)&&rt++;p+=rt;const lt=[...Array(Y).keys()].every(ot=>!a.has(R+ot));if(Y>=3&&rt>=1&&lt){let ot={p:0,raw:0,hp:0,name:"",spec:0,pid:!1};for(let C=R+1;C<=N;C++){if(!d(C))continue;const kt=h(C,t[C].you.hp);kt.p>ot.p&&(ot={p:kt.p,raw:kt.raw,hp:t[C].you.hp,name:kt.combo.name,spec:t[C].opp.spec,pid:t[C].pid==="opp"})}const ut=f>=0&&N>=f-8;m.push({i:R,j:N,len:Y,chances:rt,died:ut,worst:ot}),l(R,N)}R=N}const S=R=>/into maul|double maul/.test(R)?" Reacting can work, but the maul comes a single tick (0.6 s) after the first hit: one slow tick and both land. Eating up front means you never have to win that race.":"";if(m.length===1){const{i:R,j:N,len:Y,chances:rt,died:lt,worst:ot}=m[0],ut=ot.name!=="whip"&&ot.name!=="DH axe";o({at:R,until:N,kind:ot.p>=n?"mistake":"note",title:"Sat in KO range",text:`You stayed around ${ot.hp} HP for ${(Y*.6).toFixed(1)} s with food ready, and ${rt===1?"once":`${rt} times`} in that time ${He} could hit you (${Math.floor(ot.spec)}% spec): its ${ot.name} had ${we(ot.raw)} to KO you there.${ut&&ot.pid?" It had PID, so that would land the moment it clicked: really hard to eat.":ot.pid?"":" You had PID, which buys you a tick to eat, but only if you’re watching for it."}${lt?"":s}`,weight:15+Y+rt*4+ot.p*40})}else if(m.length>1){const R=m.reduce((C,kt)=>kt.worst.p>C.worst.p?kt:C),N=m.map(C=>C.worst.hp),Y=Math.min(...N),rt=Math.max(...N),lt=m.reduce((C,kt)=>C+kt.len,0)*.6,ot=R.worst,ut=ot.pid?" At the worst one it had PID, so it would have landed the moment it clicked.":"";o({at:R.i,until:R.j,kind:ot.p>=n?"mistake":"note",title:"A habit: sitting in KO range",text:`You often stayed around ${Y===rt?Y:`${Y}–${rt}`} HP with food ready while ${He} could hit you (${m.length} times, ${lt.toFixed(0)} s in all). Its ${ot.name} had up to ${we(ot.raw)} to KO you there.${S(ot.name)}${ut} A good player looks for exactly these small openings. The worst one (${ot.hp} HP, ${Cs(R.i)}) is below: watch it.${/Easy|Medium/.test(i.level)?s:""}`,weight:20+m.length*4+lt/2+ot.p*40})}const M=new Set;for(let R=1;R<t.length;R++){const N=_n(t[R],"you");if(!N.length)continue;const Y=t[R-1],rt=t[R].pid==="you"?R:R+1,lt=(((J=t[rt])==null?void 0:J.events)??[]).find(kt=>kt.type==="hit"&&kt.on==="you"&&kt.kind==="venge");if(lt&&M.has(lt))continue;if(Y.opp.venge&&lt&&lt.type==="hit"){if(M.add(lt),N.every(Xt=>Xt.weapon==="gmaul")){t.slice(R+1,R+3).some(P=>jn(P,"you").some(y=>y.special||y.weapon==="dh_axe"))&&o({at:R,kind:"good",title:"Popped its Venge with the maul",text:`Your maul took ${He}'s Vengeance (only ${lt.damage} came back), so the big hit after it wasn't reflected.`,weight:16});continue}if(lt.damage<12)continue;let kt=R-1;for(;kt>0&&t[kt-1].opp.venge;)kt--;const Et=R-kt,Vt=_n(Y,"you").some(Xt=>Xt.weapon==="gmaul"),Lt=zr[N[0].weapon]??N[0].weapon;if(Et<=2||Vt){o({at:R,kind:"note",title:"Unlucky Venge timing",text:Vt?`Your maul hit a 0, so it didn't pop ${He}'s Vengeance, and your ${Lt} sent ${lt.damage} back. The right idea; the roll went against you.`:`${He} cast Vengeance just before your ${Lt} went out (${(Et*.6).toFixed(1)} s), too late to react to; ${lt.damage} came back. Nothing to fix, just be ready to eat after.`,weight:8});continue}o({at:R,kind:"mistake",title:"Spec into its Venge",text:`${He}'s Vengeance had been up for ${(Et*.6).toFixed(1)} s and your ${Lt} spec sent ${lt.damage} back at you. Check for its Venge before a big spec, or pop it first (a maul or a whip).`,weight:25+lt.damage});continue}if(_n(Y,"you").length)continue;const ot=jo(Y.you,wh(t,R,"you")),ut=Ne(ot.hits,Y.opp.hp),C=t.slice(R,R+4).some(kt=>kt.events.some(Et=>Et.type==="death"&&Et.who==="opp"));C&&ut<yh?o({at:R,kind:"note",title:"A Hail Mary that worked",text:`Your ${ot.name} only had about ${we(ut)} to KO it from ${Y.opp.hp} HP. It worked this time; don't build your game on it.`,weight:30}):!C&&ut<.05&&Y.opp.hp>=50&&ot.name!=="maul"?o({at:R,kind:Y.opp.hp>=70?"mistake":"note",title:"Low-odds spec",text:`Your ${ot.name} had about ${we(ut)} to KO it from ${Y.opp.hp} HP, and it could just eat. Specs pay off when it's in range or caught off guard; this one mostly cost you spec energy.`,weight:14+(Y.opp.hp-50)/4}):!C&&ut>=.35&&o({at:R,kind:"good",title:"Good spot",text:`Your ${ot.name} had ${we(ut)} to KO it from ${Y.opp.hp} HP: the right moment to go. It ${Hi(t[R-1],"opp")||Hi(t[R],"opp")?"ate in time":"survived on your rolls"}.`,weight:18+ut*10})}for(let R=1;R<t.length;R++){const N=t[R].events.find(rt=>rt.type==="hit"&&rt.on==="you"&&rt.kind==="venge");if(!N||N.type!=="hit"||N.damage<20||M.has(N))continue;M.add(N),[t[R],t[R-1]].flatMap(rt=>jn(rt,"you")).find(rt=>!rt.special&&rt.weapon==="dh_axe")&&o({at:R,kind:"mistake",title:"Axe into its Venge",text:`Your axe hit into ${He}'s Vengeance: ${N.damage} came straight back. With Venge up on the other side, an axe is a gamble on your own HP.`,weight:25+N.damage})}for(let R=0;R<t.length;R++){const N=jn(t[R],"you").find(ut=>ut.weapon==="dh_axe"),Y=t[Math.max(0,R-1)].you,rt=[1,2].some(ut=>{var kt;const C=t[R-ut];return!C||!C.events.some(Et=>Et.type==="hit"&&Et.on==="you"&&Et.from==="opp"&&(Et.kind==="melee"||Et.kind==="magic"))?!1:((kt=t[R-ut-1])==null?void 0:kt.you.weapon)==="dh_axe"||C.you.weapon==="dh_axe"}),lt=[t[R-1],t[R-2]].some(ut=>ut&&_n(ut,"you").length),ot=Y.max.axe>=t[Math.max(0,R-1)].opp.hp;if(N&&!rt&&!lt&&!ot&&Y.hp>=75&&Y.max.axe<Y.max.tentacle*1.5){o({at:R,kind:"note",title:"Axe at high HP",text:`You axed at ${Y.hp} HP, where its max is only ${Y.max.axe} (your whip's is ${Y.max.tentacle}). The axe is strong when you're low; up here it's a slow whip.`,weight:12});break}}const E=R=>!_n(R,"you").length&&!Hi(R,"opp")&&R.you.hp>0&&ys(R.you,R.opp.hp).combo.name!=="whip"&&ys(R.you,R.opp.hp).p>=.35;for(let R=0;R<t.length;R++){if(!E(t[R]))continue;let N=R;for(;N+1<t.length&&E(t[N+1]);)N++;const Y=N-R+1;if(Y>=3&&!a.has(R)){const rt=ys(t[R].you,t[R].opp.hp),lt=t.slice(R,N+1).filter(ot=>ot.pid==="you").length;o({at:R,until:N,kind:"note",title:"A KO chance",text:`${He} sat at ${t[R].opp.hp} HP for ${(Y*.6).toFixed(1)} s without eating: your ${rt.combo.name} had ${we(rt.p)} to KO it.${lt?" You had PID for part of it, so your specs would have landed first.":""}`,weight:15+Y*2+rt.p*15})}R=N}let L=0,k={at:-1,hp:0,lost:0};for(let R=1;R<t.length;R++){const N=t[R].events.find(lt=>lt.type==="consume"&&lt.who==="you");if(!N||N.type!=="consume"||!N.items.includes("angler"))continue;const Y=t[R-1].you.hp,rt=Math.max(0,Y+Ns-t[R].you.maxHp);rt>=10&&(L+=rt,rt>k.lost&&(k={at:R,hp:Y,lost:rt}))}k.at>=0&&L>=20&&o({at:k.at,kind:"note",title:"Food with HP to spare",text:`You ate an angler at ${k.hp} HP: ${k.lost} of its ${Ns} heal was wasted (${L} in the whole fight). Sitting near full is "safing"; around 80 is where good players hover.`,weight:10});let T=0,I=-1,Q=0,_=-1;for(let R=0;R<t.length;R++){const N=t[R].you;!N.piety&&N.prayer>0?T++===0&&(I=R):T<10&&(T=0),N.str<=N.baseStr+2&&N.supplies.combat>0&&N.potion<=1?Q++===0&&(_=R):Q<50&&(Q=0)}T>=10&&o({at:I,kind:"mistake",title:"Fighting without Piety",text:`You fought ${(T*.6).toFixed(0)} s without Piety on: less accuracy, damage and defence for free.`,weight:18}),Q>=50&&o({at:_,kind:"note",title:"Strength not boosted",text:`Your Strength was barely boosted for ${(Q*.6).toFixed(0)} s (brews drain it) while you still had a combat potion. Your max hits, and so your KO chances, were lower than they could be.`,weight:10});const b=t.findIndex(R=>R.events.some(N=>N.type==="death"&&N.who==="opp"));if(b>=0&&i.end==="won"){let R=b;for(let Y=b-1;Y>=Math.max(0,b-3);Y--)Jo(t[Y],"opp")>0&&(R=Y);const N=t[Math.max(0,R-1)].opp.hp;o({at:Math.max(0,R-1),until:b,kind:"good",title:"KO!",text:`You KO'd ${He} from ${N} HP while it still had food: that's the goal.`,weight:90})}i.end==="bot-tabbed"&&o({at:t.length-1,kind:"good",title:"It tabbed out",text:`${He} ran low enough to tab out: you won the supply battle.`,weight:40});let z=0,W=0,X=0,et=0,q=0,it=0,K=0,vt=0,ft=0;for(const R of t){R.pid==="you"&&ft++;for(const N of R.events)if(N.type==="hit"&&(N.kind==="melee"||N.kind==="magic")&&(N.on==="opp"?(z+=N.damage,X=Math.max(X,N.damage)):(W+=N.damage,et=Math.max(et,N.damage))),N.type==="attack"&&N.who==="you"&&N.special&&(q+=N.hits),N.type==="consume"&&N.who==="you")for(const Y of N.items)Y==="angler"?it++:Y==="karambwan"?K++:Y==="brew"&&vt++}const St={seconds:Math.round(t.length*.6),dealt:z,taken:W,biggestDealt:X,biggestTaken:et,specsUsed:q,anglers:it,karambwans:K,brewSips:vt,eatDelay:v.length?v.reduce((R,N)=>R+N,0)/v.length:null,pid:t.length?ft/t.length:0,inRangeSeconds:Math.round(p*.6)},Ot=[],ct=(R,N)=>R.at<=N.until+2&&N.at<=R.until+2;for(const R of r.sort((N,Y)=>Y.weight-N.weight))Ot.some(Y=>Y.title===R.title&&ct(Y,R))||/^Sat in KO range|^A habit|^Ate \d+ ticks/.test(R.title)&&Ot.some(Y=>Y.kind==="mistake"&&ct(Y,R))||Ot.push(R);const G=Ot.slice(0,hx).sort((R,N)=>R.at-N.at);return{summary:St,moments:G}}function _x(i,t,e=3,n=1){const s=[];for(let r=Math.max(0,t-e);r<=Math.min(i.ticks.length-1,t+n);r++)for(const o of i.ticks[r].events)o.type==="thought"&&s.push({at:r,text:o.text});return s}function Wu(i){const t=[];for(const e of i.events){const n="who"in e?e.who==="you":!1;switch(e.type){case"attack":{const s=zr[e.weapon]??e.weapon;t.push(e.special?`${n?"You spec":"The bot specs"} with the ${s}${e.hits>1?` (×${e.hits})`:""}`:`${n?"You attack":"The bot attacks"} with the ${s}`);break}case"hit":{const s=e.kind==="venge"?" (Venge)":e.kind==="recoil"?" (recoil)":e.kind==="orb"?" (locator orb)":e.kind==="poison"?" (poison)":e.kind==="venom"?" (venom)":e.special?" (spec)":"";t.push(`${e.on==="you"?"You take":"The bot takes"} ${e.damage}${s}`);break}case"consume":t.push(`${n?"You eat":"The bot eats"}: ${e.items.map(s=>s==="brew"?"brew sip":s).join(" + ")||"something"}`);break;case"cast":t.push(`${n?"You cast":"The bot casts"} Vengeance`);break;case"orb":t.push(`${n?"You feel":"The bot feels"} the locator orb`);break;case"tab":t.push(`${n?"You break":"The bot breaks"} a house tab`);break;case"death":t.push(`${n?"You die":"The bot dies"}`);break}}return t}const ta="#ff981f",xx="#4fd16a",yx="#ff5a48",Sh={mistake:"#ff5a48",note:"#ffb347",good:"#4fd16a"},Eh={mistake:"To improve",note:"Worth knowing",good:"Well done"},Ah={mistake:0,note:1,good:2},Mx=i=>`/dh-simulator/assets/osrs/items/${i}.png`;function It(i,t,e,n){const s=document.createElement(i);return s.className=t,n!==void 0&&(s.textContent=n),e==null||e.append(s),s}const bx=i=>i.replace(/^\[[^\]]+\]\s*/,"");class wx{constructor(){A(this,"root",null);A(this,"log");A(this,"review");A(this,"moments",[]);A(this,"cards",[]);A(this,"open_",-1);A(this,"at",0);A(this,"tickView",null);A(this,"onKey",t=>{if(!(!this.root||this.root.hidden)){if(t.key==="Escape"){this.close(),t.preventDefault();return}this.open_<0||(t.key==="ArrowLeft"?(this.go(this.at-1),t.preventDefault()):t.key==="ArrowRight"&&(this.go(this.at+1),t.preventDefault()))}});A(this,"onClose",()=>{});A(this,"onWatch",(t,e,n,s,r)=>r())}get isOpen(){return!!this.root}open(t,e,n){this.close(),this.log=t,this.review=vx(t),this.moments=[...this.review.moments].sort((r,o)=>Ah[r.kind]-Ah[o.kind]||r.at-o.at),this.onClose=e,n&&(this.onWatch=n),this.open_=-1,this.root=It("div","ss-overlay rv-overlay",document.body);for(const r of["pointerdown","pointerup","wheel","contextmenu"])this.root.addEventListener(r,o=>o.stopPropagation());const s=It("div","ss-panel rv-panel",this.root);this.header(s),this.momentsList(s),window.addEventListener("keydown",this.onKey,!0)}canWatch(){var t;return!!((t=this.log.ticks[0])!=null&&t.look)}watch(t,e,n){if(!this.root)return;const s=this.log.ticks.length-1,r=Math.max(0,Math.min(s,t)),o=Math.max(r,Math.min(s,e));this.root.hidden=!0,this.onWatch(this.log,r,o,n,()=>{this.root&&(this.root.hidden=!1)})}close(){this.root&&(window.removeEventListener("keydown",this.onKey,!0),this.root.remove(),this.root=null,this.onClose())}header(t){const e=It("div","rv-head",t),n=It("div","rv-headtext",e),s={won:"You KO’d it",lost:"You got KO’d","won-food":"It ran out of food","lost-food":"You ran out of food","you-tabbed":"You tabbed out","bot-tabbed":"It tabbed out",unfinished:"Fight not finished"}[this.log.end],r=this.log.end==="won"||this.log.end==="won-food"||this.log.end==="bot-tabbed",o=ye(s,"q8_full",r?"#ffff00":this.log.end==="lost"||this.log.end==="lost-food"?"#ff5040":ta,!0);o.className="ss-gametext",o.style.width=`${o.width*2}px`,n.append(o),It("div","ss-sub",n,`Fight review • ${this.log.level} bot${this.log.training?" (training)":""} • ${Cs(this.log.ticks.length)}`);const a=It("button","ff-secondary rv-back",e),l=ye("Back","b12_full",ta,!0);l.className="ss-gametext",l.style.width=`${l.width*2}px`,a.append(l),a.addEventListener("click",()=>this.close());const c=It("button","ff-secondary rv-back",e),h=ye("Save log","b12_full",ta,!0);h.className="ss-gametext",h.style.width=`${h.width*2}px`,c.append(h),c.title="Download this fight as a file (to send in feedback)",c.addEventListener("click",()=>{const g=document.createElement("a");g.href=URL.createObjectURL(new Blob([JSON.stringify(this.log)],{type:"application/json"})),g.download=`dh-fight-${this.log.level.toLowerCase()}-${new Date().toISOString().slice(0,16).replace(/[:T]/g,"-")}.json`,g.click(),setTimeout(()=>URL.revokeObjectURL(g.href),1e3)});const u=It("div","rv-tally",t);for(const g of["mistake","note","good"]){const v=this.moments.filter(m=>m.kind===g).length,p=It("span","rv-chip",u);p.style.setProperty("--kind",Sh[g]),It("b","",p,String(v)),p.append(document.createTextNode(` ${Eh[g].toLowerCase()}`))}const d=this.review.summary,f=It("span","rv-facts-line",u);f.textContent=[d.eatDelay===null?"":`eat after a big hit: ${d.eatDelay.toFixed(1)} ticks`,`in KO range: ${d.inRangeSeconds} s`].filter(Boolean).join(" • "),f.title="Eat after a big hit: average ticks from a big hit (25+) on you to your next eat (0–1 is good). In KO range: time you sat where its spec combo had a real chance to KO you, with food ready."}momentsList(t){const e=It("div","rv-moments",t);this.moments.length||It("div","rv-empty",e,"Nothing stood out: a clean fight."),this.cards=this.moments.map((n,s)=>{const r=It("div","rv-moment",e);r.style.setProperty("--kind",Sh[n.kind]);const o=It("div","rv-momenttop",r);It("span","rv-mkind",o,Eh[n.kind]),It("span","rv-mtitle",o,n.title),It("span","rv-mtime",o,Cs(n.at)),It("div","rv-mtext",r,n.text);const a=It("div","rv-actions",r);return this.canWatch()&&It("button","rv-watch",a,"▶ Watch").addEventListener("click",()=>this.watch(n.at-6,n.until+4,n.title)),It("button","rv-detail",a,"Tick by tick").addEventListener("click",()=>this.toggle(s)),r})}toggle(t){var e;if((e=this.tickView)==null||e.remove(),this.tickView=null,this.cards.forEach(n=>n.classList.remove("on")),this.open_===t){this.open_=-1;return}this.open_=t,this.cards[t].classList.add("on"),this.tickView=It("div","rv-tick",this.cards[t]),this.go(this.moments[t].at)}go(t){const e=this.log.ticks;if(!e.length||!this.tickView)return;this.at=Math.max(0,Math.min(e.length-1,t));const n=e[this.at],s=this.tickView;s.innerHTML="";const r=It("div","rv-nav",s),o=(u,d,f)=>{const g=It("button","rv-navbtn",r,u);g.title=d,g.addEventListener("click",()=>this.go(f()))};o("◀","One tick back (←)",()=>this.at-1),It("div","rv-when",r,`${Cs(this.at)} • tick ${this.at+1} of ${e.length}`),o("▶","One tick on (→)",()=>this.at+1),It("span","rv-keys",r,"← → to step");const a=It("div","rv-sides",s);this.side(a,"You",n.you,n.pid==="you",xx),this.side(a,"Bot",n.opp,n.pid==="opp",yx);const l=Wu(n);It("div","rv-sub",s,"This tick");const c=It("ul","rv-list",s);l.length||It("li","rv-quiet",c,"Nothing happened.");for(const u of l)It("li","",c,u);const h=_x(this.log,this.at);if(h.length){It("div","rv-sub",s,"The bot was thinking");const u=It("ul","rv-list rv-thoughts",s);for(const d of h){const f=It("li","",u);It("span","rv-tt",f,d.at===this.at?"now":`${d.at-this.at>0?"+":""}${d.at-this.at}t`),f.append(document.createTextNode(bx(d.text)))}}}side(t,e,n,s,r){const o=It("div","rv-side",t),a=It("div","rv-sidetop",o);It("span","rv-sidename",a,e).style.color=r,s&&It("span","rv-badge",a,"PID"),n.venge&&It("span","rv-badge rv-venge",a,"Venge");const l=(f,g,v,p)=>{const m=It("div","rv-bar",o);It("span","rv-barlabel",m,f);const S=It("div","rv-track",m),M=It("div",`rv-fill ${p}`,S);M.style.width=`${Math.max(0,Math.min(100,g/v*100))}%`,It("span","rv-barval",m,String(Math.max(0,Math.floor(g))))};l("HP",n.hp,n.maxHp,"rv-hp"),l("Spec",n.spec,100,"rv-spec");const c=It("div","rv-gear",o),h=(f,g)=>{const v=It("div","rv-item",c);if(f!=="none"){const p=It("img","",v);p.src=Mx(f),p.alt=""}It("span","",v,g)};h(n.weapon,"in hand"),h("angler",`×${n.supplies.angler}`),h("karambwan",`×${n.supplies.karambwan}`),n.supplies.brew&&h("brew_4",`${n.supplies.brew} sips`);const u=It("div","rv-facts",o),d=Math.max(0,n.atk);u.textContent=`${d?`next attack in ${d}`:"attack ready"} • ${n.food<=1?"can eat":`food delay ${n.food-1}`} • ${n.vengeCd>1?`Venge in ${Math.ceil((n.vengeCd-1)*.6)} s`:n.venge?"Venge up":"Venge ready"}`}}const Th=[1,.5,.25];function xn(i,t,e,n){const s=document.createElement(i);return s.className=t,n!==void 0&&(s.textContent=n),e==null||e.append(s),s}class Sx{constructor(t,e,n,s,r,o){A(this,"root");A(this,"when");A(this,"caption");A(this,"playBtn");A(this,"fill");A(this,"speedIdx",0);A(this,"onKey",t=>{if(t.key===" ")this.c.toggle(),t.preventDefault();else if(t.key==="ArrowLeft")this.c.step(-1),t.preventDefault();else if(t.key==="ArrowRight")this.c.step(1),t.preventDefault();else if(t.key==="Escape")this.c.close(),t.preventDefault();else return;t.stopPropagation()});this.from=n,this.to=s,this.total=r,this.c=o,this.root=xn("div","rp-bar",t);for(const d of["pointerdown","pointerup","wheel","contextmenu"])this.root.addEventListener(d,f=>f.stopPropagation());const a=xn("div","rp-top",this.root);xn("span","rp-label",a,"Replay"),xn("span","rp-title",a,e),this.when=xn("span","rp-when",a);const l=xn("div","rp-track",this.root);this.fill=xn("div","rp-fill",l),this.caption=xn("div","rp-caption",this.root);const c=xn("div","rp-row",this.root),h=(d,f,g,v="")=>{const p=xn("button",`rp-btn ${v}`,c,d);return p.title=f,p.addEventListener("click",g),p};h("↺","Watch again",()=>o.restart()),h("◀","One tick back (←)",()=>o.step(-1)),this.playBtn=h("⏸","Pause / play (space)",()=>o.toggle(),"rp-play"),h("▶","One tick on (→)",()=>o.step(1));const u=h("1×","Speed: normal, half, quarter",()=>{this.speedIdx=(this.speedIdx+1)%Th.length;const d=Th[this.speedIdx];u.textContent=d===1?"1×":d===.5?"½×":"¼×",o.speed(d)},"rp-speed");h("Back to review","Back to the review (Esc)",()=>o.close(),"rp-back"),window.addEventListener("keydown",this.onKey,!0)}show(t,e){this.when.textContent=`${Cs(t)} • tick ${t+1}/${this.total}`;const n=Math.max(1,this.to-this.from);this.fill.style.width=`${Math.max(0,Math.min(100,(t-this.from)/n*100))}%`,this.caption.textContent=e.length?e.join(" • "):" "}setPlaying(t){this.playBtn.textContent=t?"⏸":"▶︎",this.playBtn.classList.toggle("paused",!t)}remove(){window.removeEventListener("keydown",this.onKey,!0),this.root.remove()}}function Ex(){const i=[50753,50754,50755,50756,50757,50758],t=(n,s)=>i[((n*7+s*13)%i.length+i.length)%i.length],e=[];for(let n=1819;n<=1830;n++)e.push({object:t(n,3099),x:n,y:3099,rot:2},{object:t(n,3114),x:n,y:3114,rot:0});for(let n=3101;n<=3112;n++)e.push({object:t(1832,n),x:1832,y:n,rot:1},{object:t(1817,n),x:1817,y:n,rot:3});return e}const Rh=Ex(),$u={ge:{centre:[3171,3511],solid:[],props:[]},colosseum:{centre:[1824,3106],solid:[{x:1816,y:3098,size:3},{x:1831,y:3098,size:3},{x:1816,y:3113,size:3},{x:1831,y:3113,size:3},...Rh.map(i=>({x:i.x,y:i.y,size:1}))],props:Rh}};function Ax(i){const t=$u[i],e=(rn-1)/2,n=[];for(const s of t.solid)for(let r=0;r<s.size;r++)for(let o=0;o<s.size;o++){const a={x:s.x+r-t.centre[0]+e,y:s.y+o-t.centre[1]+e};a.x>=0&&a.y>=0&&a.x<rn&&a.y<rn&&n.push(a)}return n}const ea=600,na="make odablock proud ;)",Ch=()=>Ja()/2,sl=1.5;function kh(i,t,e){const n=document.createElement("img");n.className="click-cross",n.style.left=`${i}px`,n.style.top=`${t}px`,n.style.transform=`translate(-50%, -50%) scale(${sl})`,Yu.append(n);let s=0;const r=()=>{if(s>3){n.remove();return}n.src=Vi(`cross/${e}-${s++}.png`),setTimeout(r,100)};r()}const Vi=i=>`/dh-simulator/assets/osrs/sprites/${i}`;let jr=1,qu=performance.now(),Xu=performance.now();const Ph=Math.random,Gi=()=>qu+(performance.now()-Xu)*jr;function Lh(i){qu=Gi(),Xu=performance.now(),jr=i}const $i=(i,t)=>{setTimeout(i,t/jr)};function Qe(i,t=1){od(i,t)}document.addEventListener("contextmenu",i=>i.preventDefault());const pr=document.getElementById("game"),mr=document.getElementById("hud"),Yu=document.getElementById("overlay");function ia(i){return Object.values(i.equip).filter(Boolean).map(t=>t.id)}const zi=i=>i==="you"?1:.7,Ku=700,Tx=400,Dh=["hit","hit2","hit3","hit4"];function Rx(i,t,e,n){if(t&&(n=1),t&&i==="gmaul")return Qe("spec_gmaul",n);if(t&&i==="ags")return Qe("spec_ags",n);if(t&&i==="elder_maul")return Qe("spec_elder_maul",n);if(t&&i==="voidwaker"){Qe("spec_voidwaker_cast",n),$i(()=>Qe("spec_voidwaker",n),Ku);return}Qe(i==="dh_axe"?e==="crush"?"attack_dh_axe":"attack_dh_axe_crush":i==="tentacle"?"attack_whip":i==="gmaul"?"attack_gmaul":i==="voidwaker"?"attack_voidwaker":i==="ags"?e==="crush"?"attack_ags_crush":"attack_ags":i==="elder_maul"?"attack_elder_maul":i==="nox_halberd"?e==="slash"?"attack_halberd_slash":"attack_halberd_stab":"attack_unarmed",n)}const gi=class gi{constructor(t,e,n,s=!1){A(this,"head",document.createElement("div"));A(this,"body",document.createElement("div"));A(this,"prayer",document.createElement("img"));A(this,"bar",document.createElement("div"));A(this,"barFront",document.createElement("div"));A(this,"splats",document.createElement("div"));A(this,"barUntil",0);A(this,"timerEl",null);A(this,"timerShown",-1);A(this,"timerLarge",!1);A(this,"slots",[null,null,null,null]);A(this,"sayEl",null);A(this,"sayUntil",0);this.world=t,this.actor=e,this.p=n,this.mine=s,this.head.className="overhead",this.body.className="overhead",this.prayer.className="oh-prayer";const r=document.createElement("img");r.src=Vi("overheads/skull.png"),r.className="oh-skull",this.bar.className="oh-bar",this.bar.style.backgroundImage=`url(${Vi("healthbar/back-30.png")})`,this.barFront.className="oh-bar-front",this.barFront.style.backgroundImage=`url(${Vi("healthbar/front-30.png")})`,this.bar.append(this.barFront),this.splats.className="oh-splats",this.head.append(this.prayer,r,this.bar),this.body.append(this.splats),Yu.append(this.head,this.body)}splat(t,e,n){var h;let s=this.slots.findIndex(u=>!u||u.until<=e);s<0&&(s=this.slots.reduce((u,d,f)=>d.until<this.slots[u].until?f:u,0)),(h=this.slots[s])==null||h.el.remove();const r=document.createElement("div");r.className="splat";const o=n==="poison"||n==="venom"?n:t<=0?"block":n==="max"?"max-hit":"damage";r.style.backgroundImage=`url(${Vi(`hitsplats/${o}.png`)})`;const[a,l]=gi.SLOT_POS[s];r.style.left=`${a-12}px`,r.style.top=`${l-12}px`,r.append(ye(String(t),"p11_full","#ffffff",!0)),this.splats.append(r);const c={el:r,until:e+gi.SPLAT_MS};this.slots[s]=c,$i(()=>{this.slots[s]===c&&(r.remove(),this.slots[s]=null)},gi.SPLAT_MS),this.barUntil=e+6e3}say(t,e){var s;(s=this.sayEl)==null||s.remove();const n=ye(t,"b12_full","#ffff00",!0);n.className="oh-say",n.style.left=`${-Math.round(n.width/2)}px`,this.head.append(n),this.sayEl=n,this.sayUntil=e+3e3}update(t,e){this.sayEl&&t>this.sayUntil&&(this.sayEl.remove(),this.sayEl=null);const n=(o,a)=>{const l=this.world.screenAbove(this.actor,a);o.hidden=!l.visible,o.style.transform=`translate(${l.x}px, ${l.y}px) scale(${e})`};n(this.head,1.55),n(this.body,1.05);const s=this.p.prayers.has("smite");this.prayer.hidden=!s,s&&(this.prayer.src=Vi("overheads/smite.png")),this.bar.style.visibility=t<this.barUntil?"visible":"hidden";const r=Math.max(0,Math.min(1,this.p.level.hitpoints/this.p.base.hitpoints));this.barFront.style.width=Math.ceil(30*r)+"px",this.updateAttackTimer()}updateAttackTimer(){var r;const t=this.mine&&Y_()?Math.max(0,this.p.timers.attack):0,e=Bu();if(t===this.timerShown&&e===this.timerLarge||(this.timerShown=t,this.timerLarge=e,(r=this.timerEl)==null||r.remove(),this.timerEl=null,t<=0))return;const n=ye(String(t),"b12_full","#ffffff",!0),s=e?2:1;n.className="oh-timer",n.style.width=`${n.width*s}px`,n.style.height=`${n.height*s}px`,n.style.left=`${-19-n.width*s}px`,n.style.top=`${Math.round(-1.5-n.height*s/2)}px`,this.head.append(n),this.timerEl=n}};A(gi,"SLOT_POS",[[0,0],[0,-22],[-16,-11],[16,-11]]),A(gi,"SPLAT_MS",1e3);let Vr=gi;async function Cx(){A_()&&await T_();const[i]=await Promise.all([v_(),I_(),sd()]);rd();const t=ui(na,"you");ch(t,nl()?Ka():null),ph(t);const e=ui("Opponent","opp");tc(e);const n=new Or(pr,i),s=P=>(fd(Ax(P)),n.loadMap(P).then(()=>{const y=n.mapPlace;return y&&v.setMinimap(`/dh-simulator/assets/osrs/maps/${P}-minimap.png`,y.centre,y.bounds),n.setProps($u[P].props)}).catch(y=>console.warn("map",y)));s(el());const r={you:n.player,opp:n.opponent},o={you:new Vr(n,n.player,t,!0),opp:new Vr(n,n.opponent,e)};let a,l=!1,c="menu",h=!1,u="ko",d="opp";const f=[],g=P=>{if(P.type==="attack"&&c!=="fight"){v.message("The fight starts after the countdown.");return}f.push({a:P,at:performance.now()})},v=new G_(mr,t,g);Il(mr);const p=new cx;p.withVisuals=!0;let m=null;const S=new wx,M=new Kd(Ph,P=>{p.thought(P),X_()&&v.message(`<col=7f1fff>${P}</col>`)});M.setLevel(Vu());{try{const P=Qt("dhsim.godMemory");P&&M.loadMemory(JSON.parse(P))}catch{}M.onLearn=(P,y)=>he("dhsim.godMemory",JSON.stringify({...P,...y}))}M.onTraining=P=>k(()=>v.message(`<col=ff981f>${P}</col>`)),v.message("Welcome to Old School RuneScape."),v.message("Pick an opponent, press Ready, and fight. Each fight it plays a different style.");const E=()=>{Object.assign(t,ui(na,"you")),ch(t,nl()?Ka():null),ph(t),Object.assign(e,ui("Opponent","opp")),tc(e),M.training.length&&qd(e,M.training),M.training.length||Xd(e),c==="reset"?M.newRound():M.reset();for(const P of Object.values(r))P.reset(),P.root.visible=!0},L=[],k=P=>{L.push(P)},T=P=>{const y=r[P.id];switch(P.k){case"attack":{const x=P.special?{gmaul:1667,voidwaker:11275,ags:7644,elder_maul:11124}[P.weapon]:void 0;y.play(x??Ds.attackAnim(P.weapon,P.style)),Rx(P.weapon,P.special,P.style,zi(P.id));break}case"graphic":P.spot===2834?$i(()=>void y.graphic(P.spot),Ku):y.graphic(P.spot);break;case"say":o[P.id].say(P.text,Gi());break;case"hit":o[P.id].splat(P.damage,Gi(),P.kind==="poison"||P.kind==="venom"?P.kind:P.max?"max":void 0);{const x=P.damage<=0?"block":P.kind==="orb"?"hit3":Dh[Math.floor(Math.random()*Dh.length)];$i(()=>Qe(x,zi(P.id)),Tx)}(P.kind==="melee"||P.kind==="magic")&&y.play(y.blockAnim(),{minor:!0});break;case"anim":P.kind==="eat"||P.kind==="drink"?(y.play(829),P.id==="you"&&Qe(P.kind)):P.kind==="virulence"?(y.play(11514),Qe("spec_halberd",zi(P.id))):P.kind==="cast"?(y.play(8316),y.graphic(726),Qe("venge_cast",zi(P.id))):P.kind==="tab"&&(y.play(4069),y.graphic(678),Qe("tab_teleport",zi(P.id)),$i(()=>{y.root.visible&&y.play(4071,{hold:!0})},880));break;case"death":y.play(836,{hold:!0}),Qe("death",zi(P.id));break;case"vanish":y.root.visible=!1;break;case"sound":P.id==="you"&&Qe(P.key);break}},I=P=>{p.visual(P),k(()=>T(P))};a=new nf({you:t,opp:e},{attack:(P,y,x,U)=>{const j=P==="you"?t:e;p.attack(P,y,x,U),I({k:"attack",id:P,weapon:y,special:x,style:Nn(j).type,hits:U})},graphic:(P,y)=>I({k:"graphic",id:P,spot:y}),say:(P,y)=>I({k:"say",id:P,text:y}),hit:(P,y)=>{const x=e.level.hitpoints;p.hit(P,y),I({k:"hit",id:P,damage:y.damage,kind:y.kind,max:y.max}),(P==="opp"||y.from==="opp")&&k(()=>v.showOpponent(e.name,x,e.base.hitpoints))},anim:(P,y)=>{p.anim(P,y),I({k:"anim",id:P,kind:y})},sound:(P,y)=>{P==="you"&&I({k:"sound",id:"you",key:y})},message:P=>k(()=>v.message(P)),death:P=>{if(p.death(P),c==="fight"){M.reportTraining(),P==="opp"&&M.fightLost(a,e,t),M.remember();const y=Fd(P==="you"?t:e);u=y?"ko":"food",y&&!M.training.length&&rx(M.profile.level,P==="opp"),h=P==="opp",c="over"}I({k:"death",id:P})},teleported:P=>{I({k:"vanish",id:P}),c==="fight"&&(M.reportTraining(),d=P==="you"?"you":"opp",c="reset")},respawn:()=>{E(),l=!0,c==="over"&&k(()=>G()),c==="reset"&&k(()=>it())},pidChanged:P=>k(()=>v.setPid(P==="you")),xp:(P,y)=>{if(P!=="you")return;const x=Nn(t).stance,U=x==="accurate"?["attack"]:x==="aggressive"?["strength"]:x==="defensive"?["defence"]:["attack","strength","defence"];k(()=>v.xpDrop([...U,"hitpoints"],Math.floor(y*16/3),y))}},()=>{},{rng:Ph});const Q=()=>({label:"Attack",target:`${e.name}<col=ffff00>  (level-${e.combatLevel})`,targetColor:"ffffff",run:()=>g({type:"attack",target:"opp"})}),_=(P,y)=>{const x=n.pickTile(P,y);g(x?{type:"walk",to:x}:{type:"walk"})};let b=0,z=0;const W=P=>{const y={label:"Walk here",run:()=>_(b,z)},x={label:"Cancel",run:()=>{}};return P!=="opponent"?[y,x]:[Q(),y,{label:"Examine",target:e.name,targetColor:"ffffff",run:()=>v.message("A worthy opponent.")},x]};pr.addEventListener("pointerdown",P=>{P.button===0?n.pick(P.clientX,P.clientY)==="opponent"?(kh(P.clientX,P.clientY,"red"),Q().run()):(kh(P.clientX,P.clientY,"yellow"),_(P.clientX,P.clientY)):P.button===2&&(P.stopPropagation(),b=P.clientX,z=P.clientY,v.openMenu(P.clientX,P.clientY,W(n.pick(P.clientX,P.clientY))))}),pr.addEventListener("pointermove",P=>v.setHover(W(n.pick(P.clientX,P.clientY)))),v.setupPractice({restoreSpec:()=>{t.spec=100,t.specRegen=0,v.message("Your special attack energy has been restored.")},resetFight:()=>{q(),v.message("The fight has been reset.")},menu:()=>ct()}),v.setPid(a.order[0]==="you");const X=new ax(document.body);function et(){p.recording&&p.finish("unfinished","",!1),a.cancelPending(),E(),a.placeAtStart(),a.setFixedPid(M.training.length?"opp":null),Y(!0),v.refresh(!0)}function q(){et(),c="ready";const P=mn[M.profile.level].name;X.ready(P,()=>{c="countdown",X.countdown(()=>{c="fight",M.neverTab=tl(),p.start(t,e),a.queue("opp",{type:"attack",target:"you"}),v.message(`Fight! (${P} bot)`)})})}function it(){c="ready",X.tabbed(d==="you"?"You tabbed out":"The bot tabbed out",mn[M.profile.level].name,()=>{c="countdown",X.countdown(()=>{c="fight",M.neverTab=tl(),p.start(t,e),a.queue("opp",{type:"attack",target:"you"})})},()=>ct(),m?()=>vt(it):void 0,d==="opp")}function K(){return c==="reset"||u==="tab"?d==="you"?"you-tabbed":"bot-tabbed":u==="food"?h?"won-food":"lost-food":h?"won":"lost"}function vt(P){m&&(X.clear(),S.open(m,P,Ot))}let ft=!1;const St={you:ui(na,"you"),opp:ui("Opponent","opp")};function Ot(P,y,x,U,j){var Ut;const nt=P.ticks;if(!((Ut=nt[y])!=null&&Ut.look)){j();return}ft=!0,mr.style.display="none",o.you.p=St.you,o.opp.p=St.opp;let H=y,xt=!0,mt=0;const bt=(dt,Ht)=>{const Bt=nt[dt],re=Gi();for(const D of["you","opp"]){const pt=Bt.look[D],Z=r[D],st=St[D];st.level.hitpoints=pt.hp,st.base.hitpoints=pt.maxHp,st.prayers=new Set(pt.smite?["smite"]:[]),st.timers.attack=0,Z.setWorn(pt.worn,pt.weapon,pt.shield);const _t=xs(pt.pos);Z.goTo(_t.x,_t.z,Ht?0:pt.moved,re,!Ht&&pt.via?xs(pt.via):void 0)}for(const D of["you","opp"]){const pt=r[D==="you"?"opp":"you"];r[D].face(Bt.look[D].facing||Ht?pt.root.position:null,Ht)}},qt=dt=>{for(const Ht of Object.values(r))Ht.reset(),Ht.root.visible=!0;bt(Math.max(0,dt-1),!0)},at=dt=>{bt(dt,!1);for(const Ht of nt[dt].fx??[])T(Ht);Dt.show(dt,Wu(nt[dt]))},yt=()=>{clearTimeout(mt),xt&&(mt=window.setTimeout(()=>{if(H>=x){xt=!1,Dt.setPlaying(!1);return}H++,at(H),yt()},ea/jr))},Dt=new Sx(document.body,U,y,x,nt.length,{toggle:()=>{H>=x&&!xt&&(H=y,qt(y),at(y)),xt=!xt,Dt.setPlaying(xt),yt()},step:dt=>{xt=!1,Dt.setPlaying(!1),clearTimeout(mt),H=Math.max(0,Math.min(nt.length-1,H+dt)),dt<0&&qt(H),at(H)},restart:()=>{H=y,qt(y),at(y),xt=!0,Dt.setPlaying(!0),yt()},speed:dt=>{Lh(dt),n.timeScale=dt,yt()},close:()=>{clearTimeout(mt),Dt.remove(),Lh(1),n.timeScale=1,ft=!1,o.you.p=t,o.opp.p=e,mr.style.display="";for(const dt of Object.values(r))dt.reset(),dt.root.visible=!0;R(),Y(!0),v.refresh(!0),j()}});qt(y),at(y),Dt.setPlaying(!0),yt()}function ct(){X.clear(),c="menu",et(),J.show()}function G(){const P=M.profile.level;X.result(u==="tab"?d==="you"?"you-tabbed":"bot-tabbed":u==="food"?h?"won-food":"lost-food":h?"won":"lost",mn[P].name,Ul()[P],()=>q(),()=>{X.clear(),J.show()},m?()=>vt(G):void 0)}const J=new ox(document.body,P=>{M.setLevel(P),M.training=bs(),q()});J.onArena=P=>{s(P).then(()=>Y(!0))},J.show(),pr.addEventListener("pointerleave",()=>v.setHover(null));const R=()=>{var P,y,x,U;n.player.setWorn(ia(t),((P=t.equip.weapon)==null?void 0:P.id)??null,((y=t.equip.shield)==null?void 0:y.id)??null),n.opponent.setWorn(ia(e),((x=e.equip.weapon)==null?void 0:x.id)??null,((U=e.equip.shield)==null?void 0:U.id)??null)};R();const N=P=>{const y=ia(P).filter(U=>{var j,nt;return U!==((j=P.equip.weapon)==null?void 0:j.id)&&U!==((nt=P.equip.shield)==null?void 0:nt.id)}),x=[];for(const U of[null,"tentacle","voidwaker","gmaul","dh_axe","ags","elder_maul","nox_halberd"])for(const j of[null,"avernic"])x.push([...y,...U?[U]:[],...j?[j]:[]]);return x};await Promise.all([n.player.preload(N(t)),n.opponent.preload(N(e))]),await Promise.all([...Object.keys(i.sequences).map(P=>mi(Number(P),!1).catch(()=>{})),...Object.values(i.spotanims??{}).map(P=>Kr(P.model).catch(()=>{}))]);const Y=(P=!1)=>{const y=Gi();for(const[U,j]of[[t,n.player],[e,n.opponent]]){const nt=xs(U.pos),H=U.steps.length===2?xs(U.steps[0]):void 0;j.goTo(nt.x,nt.z,U.moved,y,H)}n.player.face(t.targetId||P?n.opponent.root.position:null,P),n.opponent.face(e.targetId||P?n.player.root.position:null,P);const x=xs(t.pos);n.tileMarker.position.set(x.x,n.groundHeight(x.x,x.z)+.01,x.z)};Y(!0);const rt=document.createElement("div");rt.className="metronome",rt.hidden=!0,document.body.append(rt);let lt=0;const ot=()=>{lt++;const P=lt%2===0;K_()&&ad(P),rt.hidden=!j_(),rt.classList.toggle("tock",!P)};let ut=0;function C(){const P=c==="countdown"&&!X.counting||(c==="ready"||c==="over"||c==="reset")&&!X.showing,y=ft||S.isOpen||J.visible||a.busy;if(!P||y){ut=0;return}if(!ut){ut=performance.now();return}performance.now()-ut<3e3||(ut=0,console.warn(`Fight flow repaired (phase ${c}).`),c==="reset"?it():c==="over"?G():q())}function kt(){C();const P=performance.now();for(;f.length&&f[0].at<=P-Ch();)a.queue("you",f.shift().a);c==="fight"&&M.think(a,e,t),a.step(),p.endTick(a.tick,a.order[0],t,e),p.recording&&c!=="fight"&&(m=p.finish(K(),mn[M.profile.level].name,M.training.length>0));const y=l;if(l=!1,ft)return;const x=L.splice(0);$i(()=>{R();for(const U of x)U();Y(y),v.refresh(y),ot()},Ch())}let Et=performance.now()+ea;const Vt=()=>{const P=performance.now();P-Et>2e3&&(Et=P),setTimeout(()=>{kt(),Et+=ea,Vt()},Math.max(0,Et-P))};Vt();let Lt=performance.now();const Xt=P=>{const y=Math.min(.1,(P-Lt)/1e3);Lt=P;const x=Gi();n.render(x,y),n.tileMarker.visible=Za(),o.you.update(x,sl),o.opp.update(x,sl);const U=n.opponent.root.position.clone().sub(n.player.root.position);v.setMinimapDot(U.x,U.z,n.cameraYaw),v.setMinimapView(n.player.root.position.x,n.player.root.position.z,n.cameraYaw),v.updateOpponent(P),requestAnimationFrame(Xt)};requestAnimationFrame(Xt)}Cx().catch(i=>{if(/webgl|context/i.test(String(i))){Lu("Your browser couldn’t start 3D graphics (WebGL).");return}document.body.insertAdjacentHTML("beforeend",`<pre style="position:fixed;left:8px;top:8px;color:#ff0">Failed to start: ${String(i)}</pre>`)});
