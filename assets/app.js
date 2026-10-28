/* Interview prep site: track registry, page assembly, rendering and navigation.
   Track content lives in tracks/<name>/{page,data,explain}.js, loaded before this file. */

/* ---------------- Further reading (official docs first), owned by each track ---------------- */
const R={...RN_R,...FL_R,...NX_R,...AN_R,...ND_R,...RJ_R,...PO_R,...BA_R};

function refsHtml(keys,lang){
 if(!keys||!keys.length)return'';
 return `<div class="refs"><b>${lang==='en'?'Read more':'Đọc đầy đủ'}</b>${keys.map(k=>`<a href="${R[k][1]}" target="_blank" rel="noopener">${R[k][0]}</a>`).join('')}</div>`;
}

const HALF=["Ngày 1–3","Ngày 4–7"];
const toPlanWeek=w=>Math.ceil(w/2); // original module 1..8 -> plan week 1..4

/* ---------------- App ---------------- */
// Stack registry: to add a stack, create tracks/<name>/{page,data,explain}.js, load them in index.html,
// add an entry here and in TR below, and add its --{id}/--{id}-soft color tokens in styles.css.
// lc: label of section 05 when the role has no live coding round.
const STACKS=[
 {id:'rn',name:'React Native'},
 {id:'fl',name:'Flutter'},
 {id:'nx',name:'Next.js'},
 {id:'rj',name:'React.js'},
 {id:'an',name:'Android'},
 {id:'nd',name:'Node.js'},
 {id:'po',name:'Product Owner',lc:'Case study'},
 {id:'ba',name:'Business Analyst',lc:'Case study'}
];
const TR={
 rn:{page:RN_PAGE,plan:RN_PLAN,freq:RN_FREQ,total:RN_FREQ_TOTAL,weeks:RN_WEEKS,quiz:RN_QUIZ,qref:RN_QUIZ_REF,iv:RN_IV,ivref:RN_IV_REF,expl:typeof EXPL_RN!=='undefined'?EXPL_RN:{},key:'rn8w-done',qf:0,lf:'all'},
 fl:{page:FL_PAGE,plan:FL_PLAN,freq:FL_FREQ,total:FL_FREQ_TOTAL,weeks:FL_WEEKS,quiz:FL_QUIZ,qref:FL_QUIZ_REF,iv:FL_IV,ivref:FL_IV_REF,expl:typeof EXPL_FL!=='undefined'?EXPL_FL:{},key:'fl8w-done',qf:0,lf:'all'},
 nx:{page:NX_PAGE,plan:NX_PLAN,freq:NX_FREQ,total:NX_FREQ_TOTAL,weeks:NX_WEEKS,quiz:NX_QUIZ,qref:NX_QUIZ_REF,iv:NX_IV,ivref:NX_IV_REF,expl:typeof EXPL_NX!=='undefined'?EXPL_NX:{},key:'nx8w-done',qf:0,lf:'all'},
 an:{page:AN_PAGE,plan:AN_PLAN,freq:AN_FREQ,total:AN_FREQ_TOTAL,weeks:AN_WEEKS,quiz:AN_QUIZ,qref:AN_QUIZ_REF,iv:AN_IV,ivref:AN_IV_REF,expl:typeof EXPL_AN!=='undefined'?EXPL_AN:{},key:'an8w-done',qf:0,lf:'all'},
 nd:{page:ND_PAGE,plan:ND_PLAN,freq:ND_FREQ,total:ND_FREQ_TOTAL,weeks:ND_WEEKS,quiz:ND_QUIZ,qref:ND_QUIZ_REF,iv:ND_IV,ivref:ND_IV_REF,expl:typeof EXPL_ND!=='undefined'?EXPL_ND:{},key:'nd8w-done',qf:0,lf:'all'},
 rj:{page:RJ_PAGE,plan:RJ_PLAN,freq:RJ_FREQ,total:RJ_FREQ_TOTAL,weeks:RJ_WEEKS,quiz:RJ_QUIZ,qref:RJ_QUIZ_REF,iv:RJ_IV,ivref:RJ_IV_REF,expl:typeof EXPL_RJ!=='undefined'?EXPL_RJ:{},key:'rj8w-done',qf:0,lf:'all'},
 po:{page:PO_PAGE,plan:PO_PLAN,freq:PO_FREQ,total:PO_FREQ_TOTAL,weeks:PO_WEEKS,quiz:PO_QUIZ,qref:PO_QUIZ_REF,iv:PO_IV,ivref:PO_IV_REF,expl:typeof EXPL_PO!=='undefined'?EXPL_PO:{},key:'po8w-done',qf:0,lf:'all'},
 ba:{page:BA_PAGE,plan:BA_PLAN,freq:BA_FREQ,total:BA_FREQ_TOTAL,weeks:BA_WEEKS,quiz:BA_QUIZ,qref:BA_QUIZ_REF,iv:BA_IV,ivref:BA_IV_REF,expl:typeof EXPL_BA!=='undefined'?EXPL_BA:{},key:'ba8w-done',qf:0,lf:'all'}
};
const UI={
 vi:{all:'Tất cả',week:'Tuần ',lv:{J:'Junior',M:'Middle',S:'Senior'},n:'câu',pts:'Ý cần có:',topics:'chủ đề'},
 en:{all:'All',week:'Week ',lv:{J:'Junior',M:'Mid-level',S:'Senior'},n:'questions',pts:'What they want to hear:',topics:'topics'}
};
const SECS=['jd','plan','quiz','iv','lc'];
let prefs={track:'rn',sec:'jd',lang:'vi'};
try{Object.assign(prefs,JSON.parse(localStorage.getItem('iv-prefs')||'{}'))}catch(e){}
const h=location.hash.slice(1).split('-');
if(TR[h[0]])prefs.track=h[0];
if(SECS.includes(h[1]))prefs.sec=h[1];
if(!SECS.includes(prefs.sec))prefs.sec='jd';
if(!TR[prefs.track])prefs.track='rn';

const $=id=>document.getElementById(id);
function savePrefs(){try{localStorage.setItem('iv-prefs',JSON.stringify(prefs))}catch(e){}}

function renderFreq(t){const T=TR[t],el=$(t+'-freq');if(!el)return;
 el.innerHTML=T.freq.map(([s,n,nice])=>`<div class="freq-row"><span>${s}</span><span class="bar ${nice?'nice':''}"><i style="width:${n/T.total*100}%"></i></span><span class="n">${n}/${T.total}</span></div>`).join('');}

function topicHtml(t,i,j,k,done){
 const key=`w${i}k${j}`,id=`${t}${key}`,chk=done[key]?'checked':'',x=(TR[t].expl||{})[key];
 if(!x)return `<li><label><input type="checkbox" id="${id}" data-k="${key}" ${chk}><span>${k}</span></label></li>`;
 return `<li class="topic"><input type="checkbox" id="${id}" data-k="${key}" ${chk} aria-label="Đã học"><details class="tx"><summary>${k}</summary><div class="explain">
  <div><span class="lbl">Khái niệm</span>${x.c}</div>
  <div><span class="lbl">Giải thích</span>${x.e}</div>
  <div><span class="lbl">Ví dụ thực tế</span>${x.x}</div></div></details></li>`;
}
function renderWeeks(t){const T=TR[t],el=$(t+'-weeks');if(!el)return;
 let done={};try{done=JSON.parse(localStorage.getItem(T.key)||'{}')}catch(e){}
 const plan=T.plan.map((m,i)=>({...m,mods:[2*i,2*i+1].filter(x=>T.weeks[x]).map(x=>({i:x,w:T.weeks[x]}))}));
 el.innerHTML=plan.map((p,n)=>`
 <div class="week"><div class="idx"><span>TUẦN</span><b>${n+1}</b></div>
  <div class="body"><h3>${p.t}</h3><p class="muted">${p.g}</p>
   ${p.mods.map(({i,w},h)=>`<div class="half">
    <span class="half-label">${HALF[h]} · <span>${w.t}</span></span>
    <ul class="topics">${w.k.map((k,j)=>topicHtml(t,i,j,k,done)).join('')}</ul>
    <div class="lab"><b>Lab · ${HALF[h]}</b>${w.lab}</div>
    <p class="mono muted">Tài liệu: ${w.r}</p></div>`).join('')}
  </div></div>`).join('');
 const total=T.weeks.reduce((a,w)=>a+w.k.length,0);
 const upd=()=>{const n=Object.values(done).filter(Boolean).length,p=total?Math.round(n/total*100):0;
  $(t+'-pct').textContent=p+'%';$(t+'-pctbar').style.width=p+'%';$(t+'-pcttxt').textContent=`${n}/${total} chủ đề`;};
 el.onchange=e=>{const k=e.target.dataset.k;if(!k)return;done[k]=e.target.checked;try{localStorage.setItem(T.key,JSON.stringify(done))}catch(_){}upd();};
 upd();}

function renderQuiz(t){const T=TR[t],L=UI[prefs.lang],en=prefs.lang==='en',f=$(t+'-qfilter'),list=$(t+'-quizlist');if(!f)return;
 const weeks=[...new Set(T.quiz.map(q=>toPlanWeek(q[0])))].sort((a,b)=>a-b);
 f.innerHTML=[0,...weeks].map(w=>`<button aria-pressed="${T.qf===w}" data-w="${w}">${w?L.week+w:L.all}</button>`).join('');
 f.onclick=e=>{const b=e.target.closest('button');if(!b)return;T.qf=+b.dataset.w;renderQuiz(t);};
 list.innerHTML=T.quiz.map((q,i)=>[q,i]).filter(([q])=>!T.qf||toPlanWeek(q[0])===T.qf).map(([q,i])=>`<details><summary><span><span class="mono muted">${en?'W':'T'}${toPlanWeek(q[0])} · </span>${en?q[3]:q[1]}</span></summary><div class="ans"><div>${en?q[4]:q[2]}</div>${refsHtml(T.qref[i],prefs.lang)}</div></details>`).join('');}

function renderIV(t){const T=TR[t],L=UI[prefs.lang],en=prefs.lang==='en',f=$(t+'-lvfilter'),list=$(t+'-ivlist');if(!f)return;
 f.innerHTML=[['all',L.all],['J',L.lv.J],['M',L.lv.M],['S',L.lv.S]].map(([k,n])=>`<button aria-pressed="${T.lf===k}" data-l="${k}">${n}</button>`).join('');
 f.onclick=e=>{const b=e.target.closest('button');if(!b)return;T.lf=b.dataset.l;renderIV(t);};
 list.innerHTML=T.iv.map(g=>{const qs=g.q.filter(q=>T.lf==='all'||q[0]===T.lf);if(!qs.length)return'';
  return `<div class="qgroup"><div class="qhead"><h3>${en?g.e:g.c}</h3><span class="mono muted">${qs.length} ${L.n}</span></div>${qs.map(q=>`<details><summary><span><span class="tag ${q[0]==='S'?'must':q[0]==='M'?'nice':'ok'}">${L.lv[q[0]]}</span> ${en?q[3]:q[1]}</span></summary><div class="ans"><span><b>${L.pts}</b> ${en?q[4]:q[2]}</span>${refsHtml(T.ivref[q[3]],prefs.lang)}</div></details>`).join('')}</div>`}).join('');}

function apply(scroll){
 const {track,sec,lang}=prefs;
 document.documentElement.setAttribute('data-lang',lang);
 document.documentElement.lang=lang;
 const app=$('app');
 app.dataset.track=track;
 app.style.setProperty('--accent',`var(--${track})`);
 app.style.setProperty('--accent-soft',`var(--${track}-soft)`);
 document.querySelectorAll('header.hero').forEach(el=>el.hidden=el.dataset.track!==track);
 document.querySelectorAll('section.panel').forEach(el=>el.hidden=!(el.dataset.track===track&&el.dataset.sec===sec));
 document.querySelectorAll('#trackList button').forEach(b=>b.setAttribute('aria-current',b.dataset.track===track));
 $('trackSelect').value=track;
 document.querySelectorAll('#langSeg button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===lang));
 document.querySelectorAll('#secnav button').forEach(b=>b.setAttribute('aria-current',b.dataset.sec===sec));
 const S=STACKS.find(s=>s.id===track);
 document.title=`${S.name} 4 tuần`;
 $('lcLabel').textContent=S.lc||'Live coding'; // section 05 is a case study round for non-coding roles
 try{history.replaceState(null,'','#'+track+'-'+sec)}catch(e){}
 savePrefs();
 if(scroll)window.scrollTo({top:0});
}
/* ---------------- Page: each track's hero and sections, built from each track's page.js ---------------- */
const panel=(t,sec,body)=>`<section class="panel" data-track="${t}" data-sec="${sec}" hidden>\n${body}\n</section>`;
const planPanel=(t,intro)=>panel(t,'plan',`  <div style="display:grid;gap:8px">
    <h2>Lộ trình 4 tuần</h2>
    <p class="muted">${intro}</p>
  </div>
  <div class="box progress"><span class="mono" id="${t}-pct">0%</span><div class="bar"><i id="${t}-pctbar" style="width:0"></i></div><span class="muted" id="${t}-pcttxt"></span></div>
  <div class="plan-tools" data-tools="${t}"><button data-act="open">Mở hết giải thích</button><button data-act="close">Thu gọn</button></div>
  <div id="${t}-weeks"></div>`);
const quizPanel=t=>panel(t,'quiz',`  <div style="display:grid;gap:8px">
    <h2><span class="l-vi">Câu hỏi luyện tập</span><span class="l-en">Practice questions</span></h2>
    <p class="muted"><span class="l-vi">Tự trả lời thành tiếng trước, sau đó mới mở đáp án. Mục tiêu là nói được trong 1–2 phút có ví dụ cụ thể.</span><span class="l-en">Answer out loud before you open the model answer. Aim for one to two minutes with a concrete example.</span></p>
  </div>
  <div class="filter" id="${t}-qfilter"></div>
  <div id="${t}-quizlist" class="qgroup"></div>`);
const ivPanel=t=>panel(t,'iv',`  <div style="display:grid;gap:8px">
    <h2><span class="l-vi">Câu hỏi phỏng vấn</span><span class="l-en">Interview questions</span></h2>
    <p class="muted"><span class="l-vi">Gom theo dạng nhà tuyển dụng hay hỏi. Mỗi câu có các ý interviewer muốn nghe. Lọc theo cấp độ bạn đang ứng tuyển.</span><span class="l-en">Grouped the way interviewers usually ask them. Each question lists the points they want to hear. Filter by the level you're applying for.</span></p>
  </div>
  <div class="filter" id="${t}-lvfilter"></div>
  <div id="${t}-ivlist" style="display:grid;gap:26px"></div>`);
$('pages').innerHTML=STACKS.map(({id})=>{const P=TR[id].page;return `<header class="hero" data-track="${id}" hidden>\n${P.hero}\n</header>`
 +panel(id,'jd',P.jd)+planPanel(id,P.planIntro)+quizPanel(id)+ivPanel(id)+panel(id,'lc',P.lc);}).join('\n');
// Tables with 3+ columns are shown as cards on phones (see .stack in styles.css); label each cell with its header.
document.querySelectorAll('.tbl table').forEach(tb=>{const hs=[...tb.querySelectorAll('thead th')].map(th=>th.textContent.trim());if(hs.length<3)return;
 tb.classList.add('stack');tb.querySelectorAll('tbody tr').forEach(tr=>[...tr.children].forEach((td,i)=>td.dataset.label=hs[i]||''));});

$('trackList').innerHTML=STACKS.map(s=>`<button data-track="${s.id}" style="--c:var(--${s.id})"><span class="dot"></span><span>${s.name}</span></button>`).join('');
$('trackSelect').innerHTML=STACKS.map(s=>`<option value="${s.id}">${s.name}</option>`).join('');
const setTrack=id=>{if(!TR[id])return;prefs.track=id;apply(true);};
$('trackList').onclick=e=>{const b=e.target.closest('button');if(b)setTrack(b.dataset.track);};
$('trackSelect').onchange=e=>setTrack(e.target.value);
$('langSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;prefs.lang=b.dataset.lang;Object.keys(TR).forEach(t=>{renderQuiz(t);renderIV(t);});apply(false);};
$('secnav').onclick=e=>{const b=e.target.closest('button');if(!b)return;prefs.sec=b.dataset.sec;apply(true);};

document.querySelectorAll('.plan-tools').forEach(el=>el.onclick=e=>{const b=e.target.closest('button');if(!b)return;
 $(el.dataset.tools+'-weeks').querySelectorAll('details.tx').forEach(d=>d.open=b.dataset.act==='open');});
Object.keys(TR).forEach(t=>{renderFreq(t);renderWeeks(t);renderQuiz(t);renderIV(t);});
apply(false);
