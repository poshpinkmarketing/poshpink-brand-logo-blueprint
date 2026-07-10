
Today 8:58 AM
Hey ChatGPT, let's finish up my memberships today.  I feel like I'm stuck and I want to just get them done and ready to launch so I can post it.  I have completed the July Monthly AI Prompt PDF, From the Posh Pink Desk PDF (the tips/monthly challenge), and The Business Boost (checklist of what to do) July PDF.  I have the three pricing plans active in my Wix Pricing Plans.  I have my Members Area Pages setup like the attached screen shot.  Tell me what to do now

Today 11:55 AM


Pasted text(1).txt
Document
import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

const C = {
  hotPink:   "#ff1493",
  bubblegum: "#ff69b4",
  softPink:  "#ffb6c1",
  blush:     "#fbeaf0",
  berry:     "#c2185b",
  plum:      "#4b1528",
  white:     "#ffffff",
  ink:       "#1a0a10",
  inkMid:    "#4a2535",
  inkLight:  "#9a6878",
  p50:       "#FFF0F5",
  p100:      "#FFD6E7",
  p200:      "#FFB3CF",
  p400:      "#F472A8",
  p600:      "#C2185B",
  p800:      "#880E4F",
  bg:        "#FAFAFA",
  bgAlt:     "#FFF5F7",
};

const QUESTIONS = [
  { id:"businessName", type:"text",   num:"01", q:"What is your business called?",              hint:"Your name will appear in your personalized brand kit", placeholder:"Enter your business name…" },
  { id:"industry",     type:"multi",  num:"02", q:"What industry or industries do you serve?",  hint:"Select all that apply", options:["Beauty & Wellness","Health & Medical","Real Estate","Professional Services","Boutique Retail","Events & Hospitality","Pet Services","Creative & Design","Coaching & Education","Other"] },
  { id:"vibe",         type:"multi",  num:"03", q:"Which words feel most like your brand?",     hint:"Select all that resonate", options:["Luxurious & refined","Warm & approachable","Bold & modern","Playful & vibrant","Clean & minimal","Natural & organic","Elegant & feminine","Professional & credible"] },
  { id:"colors",       type:"multi",  num:"04", q:"Which color families appeal to you?",        hint:"Select everything that catches your eye", options:["Soft blush & rose","Deep burgundy & wine","Warm champagne & gold","Cool sage & olive","Classic black & white","Navy & midnight blue","Terracotta & rust","Lavender & lilac"] },
  { id:"audience",     type:"multi",  num:"05", q:"Who is your ideal client?",                  hint:"Select all that apply", options:["Busy professionals & executives","Individuals who value self-care & wellness","Small business owners","Families & homeowners","Health-conscious individuals","Couples & life events","Creatives & entrepreneurs"] },
  { id:"budget",       type:"single", num:"06", q:"What is your monthly marketing investment?", hint:"Choose the one that fits best", options:["Under $500","$500 – $1,000","$1,000 – $2,000","$2,000+","Not sure yet"] },
];

const injectStyles = () => {
  if (document.getElementById("ppq-styles")) return;
  const s = document.createElement("style");
  s.id = "ppq-styles";
  s.textContent = 
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');
    .ppq*{box-sizing:border-box;margin:0;padding:0}
    .ppq{font-family:'DM Sans',sans-serif;background:${C.bg};color:${C.ink};min-height:100vh}
    @keyframes ppqUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    @keyframes ppqFade{from{opacity:0}to{opacity:1}}
    @keyframes ppqPulse{0%,100%{opacity:.4}50%{opacity:1}}
    @keyframes ppqSpin{to{transform:rotate(360deg)}}
    .ppq-up{animation:ppqUp .5s cubic-bezier(.22,.61,.36,1) both}
    .ppq-fade{animation:ppqFade .4s ease both}
    .ppq-pulse{animation:ppqPulse 1.8s ease-in-out infinite}
    .ppq-opt{display:flex;align-items:center;gap:14px;padding:13px 18px;margin-bottom:8px;cursor:pointer;border:0.5px solid ${C.p200};background:${C.white};border-radius:10px;transition:border-color .18s,background .18s,box-shadow .18s}
    .ppq-opt:hover,.ppq-opt.on{border-color:${C.hotPink};background:${C.p50};box-shadow:0 2px 12px rgba(255,20,147,.08)}
    .ppq-box{width:18px;height:18px;flex-shrink:0;border:1.5px solid ${C.p200};background:transparent;border-radius:4px;display:flex;align-items:center;justify-content:center;transition:all .18s}
    .ppq-box.on{background:${C.hotPink};border-color:${C.hotPink}}
    .ppq-box.circ{border-radius:50%}
    .ppq-btn{background:${C.p800};color:${C.white};border:none;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;letter-spacing:.08em;padding:14px 44px;border-radius:8px;cursor:pointer;transition:background .2s,transform .12s,box-shadow .2s;box-shadow:0 2px 16px rgba(136,14,79,.18)}
    .ppq-btn:hover{background:${C.berry};transform:translateY(-1px);box-shadow:0 4px 20px rgba(136,14,79,.25)}
    .ppq-btn:active{transform:translateY(0)}
    .ppq-btn:disabled{opacity:.35;cursor:not-allowed;transform:none;box-shadow:none}
    .ppq-btn.hot{background:linear-gradient(135deg,${C.hotPink},${C.berry});box-shadow:0 2px 16px rgba(255,20,147,.3)}
    .ppq-btn.hot:hover{background:linear-gradient(135deg,${C.berry},${C.p800});box-shadow:0 4px 24px rgba(255,20,147,.4)}
    .ppq-btn.ghost{background:transparent;border:1px solid ${C.p200};color:${C.p600};box-shadow:none}
    .ppq-btn.ghost:hover{background:${C.p50};box-shadow:none}
    .ppq-input{width:100%;background:transparent;border:none;border-bottom:1.5px solid ${C.p200};padding:12px 0;font-family:'Cormorant Garamond',serif;font-size:32px;font-style:italic;color:${C.p800};outline:none;transition:border-color .2s}
    .ppq-input:focus{border-bottom-color:${C.hotPink}}
    .ppq-input::placeholder{color:${C.p200}}
    .ppq-chip{display:inline-block;border:0.5px solid ${C.p200};color:${C.p600};font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:.08em;padding:5px 12px;margin:4px 4px 4px 0;border-radius:20px;background:${C.white}}
    .ppq-label{font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:.18em;color:${C.p600};margin-bottom:16px;text-transform:uppercase;font-weight:600}
    .ppq-back{background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;letter-spacing:.06em;color:${C.inkLight};padding:0}
    .ppq-back:hover{color:${C.berry}}
    .ppq-divider{height:0.5px;background:${C.p100};margin:24px 0}
  ;
  document.head.appendChild(s);
};

const Logo = () => (
  <div style={{marginBottom:32}}>
    <img src="/logo.png" alt="Posh Pink Marketing" style={{height:46,width:"auto",objectFit:"contain"}}/>
  </div>
);

const Bar = ({cur,tot}) => {
  const pct = Math.round((cur/tot)*100);
  return (
    <div style={{marginBottom:40}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
        <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,letterSpacing:".06em",color:C.inkLight,fontWeight:500}}>Question {cur} of {tot}</span>
        <span style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:18,color:C.hotPink}}>{pct}%</span>
      </div>
      <div style={{height:2,background:C.p100,borderRadius:1,position:"relative"}}>
        <div style={{position:"absolute",top:0,left:0,height:"2px",borderRadius:1,width:${pct}%,background:linear-gradient(90deg,${C.berry},${C.hotPink}),transition:"width .5s cubic-bezier(.22,.61,.36,1)"}}/>
      </div>
    </div>
  );
};

const Opt = ({label,checked,onToggle,radio}) => (
  <div onClick={onToggle} className={ppq-opt${checked?" on":""}}>
    <div className={ppq-box${radio?" circ":""}${checked?" on":""}}>
      {checked && <svg width="10" height="7" viewBox="0 0 10 7" fill="none"><polyline points="1,3.5 3.5,6 9,1" stroke={C.white} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
    </div>
    <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:C.inkMid,fontWeight:400}}>{label}</span>
  </div>
);

const Spinner = ({msg}) => (
  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:24,padding:"80px 0"}}>
    <div style={{width:40,height:40,border:1.5px solid ${C.p100},borderTop:1.5px solid ${C.hotPink},borderRadius:"50%",animation:"ppqSpin 1s linear infinite"}}/>
    <p className="ppq-pulse" style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:22,color:C.p600}}>{msg}</p>
  </div>
);

const hexRgb = h => [parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];

const makePDF = (kit, bizName) => {
  const doc = new jsPDF({orientation:"portrait",unit:"mm",format:"a4"});
  const W=210,H=297,M=18;
  doc.setFillColor(...hexRgb(C.blush)); doc.rect(0,0,W,H,"F");
  doc.setFillColor(...hexRgb(C.plum)); doc.rect(0,0,5,H,"F");
  doc.setFillColor(...hexRgb(C.plum)); doc.rect(0,0,W,44,"F");
  doc.setFont("helvetica","bolditalic"); doc.setFontSize(24); doc.setTextColor(...hexRgb(C.white));
  doc.text(bizName||"Your Brand",M+2,22);
  doc.setFont("helvetica","normal"); doc.setFontSize(7); doc.setTextColor(...hexRgb(C.softPink));
  doc.setCharSpace(2.5); doc.text("POSH PINK BRAND KIT BUILDER",M+2,32); doc.setCharSpace(0);
  doc.setFontSize(7); doc.setTextColor(...hexRgb(C.bubblegum));
  doc.text("poshpinkmarketing.com",W-M,32,{align:"right"});
  let y=54;
  const sec=(label,yy)=>{
    doc.setFont("helvetica","normal"); doc.setFontSize(7); doc.setTextColor(...hexRgb(C.berry));
    doc.setCharSpace(2.5); doc.text(label.toUpperCase(),M,yy); doc.setCharSpace(0);
    doc.setDrawColor(...hexRgb(C.softPink)); doc.setLineWidth(0.4);
    doc.line(M+doc.getTextWidth(label.toUpperCase())+3,yy-1,W-M,yy-1);
    return yy+7;
  };
  y=sec("Brand Archetype",y);
  doc.setFont("helvetica","bolditalic"); doc.setFontSize(20); doc.setTextColor(...hexRgb(C.plum));
  doc.text(kit.archetype||"",M,y+7); y+=12;
  doc.setFont("helvetica","normal"); doc.setFontSize(9); doc.setTextColor(...hexRgb(C.inkMid));
  const al=doc.splitTextToSize(kit.archetypeDescription||"",W-M*2);
  doc.text(al,M,y); y+=al.length*4.5+8;
  y=sec("Signature Color Palette",y);
  const cols=kit.colors||[]; const sw=26,sh=20,sg=6;
  cols.forEach((c,i)=>{
    const sx=M+i*(sw+sg);
    doc.setFillColor(...hexRgb(c.hex)); doc.rect(sx,y,sw,sh,"F");
    const rgb=hexRgb(c.hex); const lum=0.299*rgb[0]+0.587*rgb[1]+0.114*rgb[2];
    const tc=lum>140?hexRgb(C.inkMid):hexRgb(C.white);
    doc.setTextColor(tc[0],tc[1],tc[2]); doc.setFontSize(5.5);
    doc.text(c.hex,sx+sw/2,y+sh-3,{align:"center"});
    doc.setTextColor(...hexRgb(C.inkMid)); doc.setFontSize(7);
    doc.text(c.name,sx+sw/2,y+sh+5,{align:"center"});
  });
  y+=sh+14;
  y=sec("Logo Direction Concepts",y);
  const lc=cols.map(c=>c.hex);
  const lc1=lc[0]||C.hotPink,lc2=lc[1]||C.berry,lc3=lc[2]||C.softPink,lc4=lc[3]||C.plum;
  const nm=bizName||"Your Brand";
  const sh2=nm.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2);
  const cbW=(W-M*2-10)/3;
  [0,1,2].forEach(i=>{
    const cx=M+i*(cbW+5);
    doc.setFillColor(...hexRgb(C.white)); doc.rect(cx,y,cbW,36,"F");
    doc.setDrawColor(...hexRgb(C.softPink)); doc.setLineWidth(0.4); doc.rect(cx,y,cbW,36);
    doc.setFontSize(7); doc.setTextColor(...hexRgb(C.inkLight));
    doc.setCharSpace(1.5); doc.text(CONCEPT ${["A","B","C"][i]},cx+cbW/2,y+5,{align:"center"}); doc.setCharSpace(0);
    if(i===0){
      doc.setFillColor(...hexRgb(lc1)); doc.setGState(doc.GState({opacity:0.15})); doc.circle(cx+15,y+20,10,"F");
      doc.setGState(doc.GState({opacity:1})); doc.setDrawColor(...hexRgb(lc1)); doc.setLineWidth(0.8); doc.circle(cx+15,y+20,7,"S");
      doc.setFont("helvetica","bolditalic"); doc.setFontSize(8); doc.setTextColor(...hexRgb(lc4)); doc.text(sh2,cx+15,y+23,{align:"center"});
      doc.setFont("helvetica","italic"); doc.setFontSize(8); doc.text(nm,cx+28,y+19);
      doc.setDrawColor(...hexRgb(lc1)); doc.setLineWidth(0.4); doc.line(cx+28,y+22,cx+cbW-3,y+22);
      doc.setFont("helvetica","normal"); doc.setFontSize(5.5); doc.setTextColor(...hexRgb(lc2));
      doc.setCharSpace(2); doc.text("STUDIO",cx+28,y+28); doc.setCharSpace(0);
    } else if(i===1){
      const dx=cx+15,dy=y+20;
      doc.setFillColor(...hexRgb(lc2)); doc.setGState(doc.GState({opacity:0.2}));
      doc.triangle(dx,dy-10, dx+10,dy, dx,dy+10, "F");
      doc.triangle(dx,dy-10, dx-10,dy, dx,dy+10, "F");
      doc.setGState(doc.GState({opacity:1})); doc.setDrawColor(...hexRgb(lc2)); doc.setLineWidth(0.8);
      doc.triangle(dx,dy-10, dx+10,dy, dx,dy+10, "S");
      doc.triangle(dx,dy-10, dx-10,dy, dx,dy+10, "S");
      doc.setFont("helvetica","bold"); doc.setFontSize(7); doc.setTextColor(...hexRgb(lc4)); doc.text(sh2,dx,dy+2,{align:"center"});
      doc.setFont("helvetica","normal"); doc.setFontSize(7); doc.setCharSpace(1); doc.setTextColor(...hexRgb(lc4));
      doc.text(nm.toUpperCase(),cx+26,y+20); doc.setCharSpace(0);
      doc.setDrawColor(...hexRgb(lc3)); doc.line(cx+26,y+23,cx+cbW-3,y+23);
    } else {
      doc.setFillColor(...hexRgb(lc1)); doc.setGState(doc.GState({opacity:0.18}));
      doc.roundedRect(cx+5,y+15,18,10,5,5,"F"); doc.setGState(doc.GState({opacity:1}));
      doc.setFont("helvetica","bolditalic"); doc.setFontSize(8); doc.setTextColor(...hexRgb(lc4)); doc.text(sh2,cx+14,y+22,{align:"center"});
      doc.setFont("helvetica","italic"); doc.setFontSize(9); doc.text(nm,cx+26,y+21);
      doc.setFillColor(...hexRgb(lc1)); doc.circle(cx+cbW-5,y+20,2,"F");
      doc.setDrawColor(...hexRgb(lc1)); doc.circle(cx+cbW-5,y+20,3,"S");
    }
  });
  y+=44;
  y=sec("Typography Direction",y);
  (kit.fonts||[]).forEach((f,i)=>{
    const bx=M+i*(cbW+5);
    doc.setFillColor(...hexRgb(C.white)); doc.rect(bx,y,cbW,30,"F");
    doc.setDrawColor(...hexRgb(C.softPink)); doc.setLineWidth(0.4); doc.rect(bx,y,cbW,30);
    doc.setFont("helvetica","normal"); doc.setFontSize(6); doc.setTextColor(...hexRgb(C.inkLight));
    doc.setCharSpace(1.5); doc.text((f.role||"").toUpperCase(),bx+5,y+8); doc.setCharSpace(0);
    doc.setFont("helvetica","bolditalic"); doc.setFontSize(11); doc.setTextColor(...hexRgb(C.plum));
    doc.text(f.name||"",bx+5,y+18);
    doc.setFont("helvetica","normal"); doc.setFontSize(6.5); doc.setTextColor(...hexRgb(C.inkLight));
    const nl=doc.splitTextToSize(f.note||"",cbW-10); doc.text(nl[0]||"",bx+5,y+26);
  });
  y+=38;
  y=sec("Brand Voice & Keywords",y);
  let kx=M;
  (kit.voiceKeywords||[]).forEach(kw=>{
    const tw=doc.getTextWidth(kw.toUpperCase())+10;
    if(kx+tw>W-M){kx=M;y+=12;}
    doc.setDrawColor(...hexRgb(C.bubblegum)); doc.setLineWidth(0.5); doc.rect(kx,y,tw,8);
    doc.setFont("helvetica","normal"); doc.setFontSize(7); doc.setTextColor(...hexRgb(C.berry));
    doc.setCharSpace(1.2); doc.text(kw.toUpperCase(),kx+5,y+5.5); doc.setCharSpace(0);
    kx+=tw+4;
  });
  y+=14;
  if(kit.tagline){
    doc.setDrawColor(...hexRgb(C.hotPink)); doc.setLineWidth(1.5); doc.line(M,y,M,y+14);
    doc.setFont("helvetica","bolditalic"); doc.setFontSize(12); doc.setTextColor(...hexRgb(C.plum));
    doc.text("${kit.tagline}",M+8,y+9); y+=20;
  }
  if(kit.brandPersonality&&y<H-55){
    y=sec("Brand Personality",y);
    doc.setFont("helvetica","normal"); doc.setFontSize(9); doc.setTextColor(...hexRgb(C.inkMid));
    const pl=doc.splitTextToSize(kit.brandPersonality||"",W-M*2);
    doc.text(pl,M,y); y+=pl.length*4.5+8;
  }
  if(kit.socialMediaTip&&y<H-40){
    y=sec("Social Media Direction",y);
    doc.setFont("helvetica","normal"); doc.setFontSize(9); doc.setTextColor(...hexRgb(C.inkMid));
    const sl=doc.splitTextToSize(kit.socialMediaTip||"",W-M*2);
    doc.text(sl,M,y); y+=sl.length*4.5+8;
  }
  if(y<H-40){
    y=sec("Recommended Services",y);
    (kit.services||[]).forEach((svc,i)=>{
      if(y>H-30)return;
      doc.setFont("helvetica","bolditalic"); doc.setFontSize(9); doc.setTextColor(...hexRgb(C.hotPink)); doc.text(0${i+1},M,y+4);
      doc.setFont("helvetica","bold"); doc.setFontSize(9); doc.setTextColor(...hexRgb(C.plum)); doc.text(svc.name||"",M+10,y+4);
      doc.setFont("helvetica","normal"); doc.setFontSize(7.5); doc.setTextColor(...hexRgb(C.inkLight));
      const dl=doc.splitTextToSize(svc.description||"",W-M*2-14); doc.text(dl,M+10,y+9); y+=dl.length*4+10;
    });
  }
  doc.setFillColor(...hexRgb(C.plum)); doc.rect(0,H-16,W,16,"F");
  doc.setFont("helvetica","italic"); doc.setFontSize(7.5); doc.setTextColor(...hexRgb(C.softPink));
  doc.text("Crafted with love by Posh Pink Marketing  ·  poshpinkmarketing.com  ·  info@poshpinkmarketing.com",W/2,H-7,{align:"center"});
  return doc;
};

const logoSVGs = (name,colors) => {
  const c1=(colors[0]||{hex:C.hotPink}).hex,c2=(colors[1]||{hex:C.berry}).hex;
  const c3=(colors[2]||{hex:C.softPink}).hex,c4=(colors[3]||{hex:C.plum}).hex;
  const sh=name.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2);
  return [
    <svg xmlns="http://www.w3.org/2000/svg" width="190" height="64" viewBox="0 0 190 64"><circle cx="32" cy="32" r="24" fill="${c1}" opacity="0.15"/><circle cx="32" cy="32" r="16" fill="none" stroke="${c1}" stroke-width="1.5"/><text x="32" y="37" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="${c4}" letter-spacing="2">${sh}</text><text x="62" y="28" font-family="Georgia,serif" font-style="italic" font-size="13" fill="${c4}">${name}</text><line x1="62" y1="33" x2="185" y2="33" stroke="${c1}" stroke-width="0.8"/><text x="62" y="44" font-family="Arial,sans-serif" font-size="7" fill="${c2}" letter-spacing="3">BRAND STUDIO</text></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="190" height="64" viewBox="0 0 190 64"><polygon points="32,6 52,32 32,58 12,32" fill="none" stroke="${c2}" stroke-width="1.5"/><polygon points="32,16 46,32 32,48 18,32" fill="${c2}" opacity="0.2"/><text x="32" y="36" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="${c4}">${sh}</text><text x="60" y="30" font-family="Georgia,serif" font-size="12" fill="${c4}" letter-spacing="1">${name.toUpperCase()}</text><line x1="60" y1="36" x2="185" y2="36" stroke="${c3}" stroke-width="1"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="190" height="64" viewBox="0 0 190 64"><rect x="8" y="24" width="36" height="16" rx="8" fill="${c1}" opacity="0.18"/><text x="26" y="35" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="10" fill="${c4}">${sh}</text><text x="52" y="34" font-family="Georgia,serif" font-size="13" fill="${c4}">${name}</text><circle cx="182" cy="32" r="4" fill="none" stroke="${c1}" stroke-width="1.2"/><circle cx="182" cy="32" r="1.5" fill="${c1}"/></svg>,
  ];
};

const FullKit = ({kit,bizName}) => {
  const [busy,setBusy]=useState(false);
  const download=()=>{
    setBusy(true);
    try{
      const doc=makePDF(kit,bizName);
      doc.save(${(bizName||"brand-kit").replace(/\s+/g,"-").toLowerCase()}-brand-kit.pdf);
    } catch(e){
      console.error("PDF error:", e);
      alert("PDF error: " + e.message);
    }
    setBusy(false);
  };
  return (
    <div className="ppq-fade">
      <div style={{background:linear-gradient(135deg,${C.p800} 0%,${C.plum} 100%),padding:"52px 40px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-60,right:-60,width:220,height:220,borderRadius:"50%",border:"1px solid rgba(255,20,147,.12)",pointerEvents:"none"}}/>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,letterSpacing:".2em",color:C.p200,marginBottom:14,opacity:.8,fontWeight:500,textTransform:"uppercase"}}>Your Brand Identity</p>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:48,color:C.white,marginBottom:16,lineHeight:1.1}}>{kit.archetype}</h1>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:300,lineHeight:1.9,color:"rgba(255,209,226,.8)",maxWidth:440}}>{kit.archetypeDescription}</p>
      </div>
      <div style={{background:C.white,padding:"32px 40px 28px",borderBottom:0.5px solid ${C.p100}}}>
        <p className="ppq-label">Signature Color Palette</p>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          {(kit.colors||[]).map((c,i)=>(<div key={i} style={{textAlign:"center"}}><div style={{width:60,height:60,background:c.hex,border:0.5px solid ${C.p100},borderRadius:8,marginBottom:7}}/><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.inkLight,letterSpacing:".06em"}}>{c.hex}</p><p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:C.inkMid,marginTop:2}}>{c.name}</p></div>))}
        </div>
      </div>
      <div style={{background:C.bgAlt,padding:"32px 40px 28px",borderBottom:0.5px solid ${C.p100}}}>
        <p className="ppq-label">Typography Direction</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {(kit.fonts||[]).map((f,i)=>(<div key={i} style={{padding:"20px",background:C.white,border:0.5px solid ${C.p100},borderRadius:10}}><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,letterSpacing:".14em",color:C.inkLight,marginBottom:8,textTransform:"uppercase",fontWeight:600}}>{f.role}</p><p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:26,color:C.p800,marginBottom:6}}>{f.name}</p><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.inkLight,lineHeight:1.7,fontWeight:300}}>{f.note}</p></div>))}
        </div>
      </div>
      <div style={{background:C.white,padding:"32px 40px 28px",borderBottom:0.5px solid ${C.p100}}}>
        <p className="ppq-label">Logo Direction Concepts</p>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.inkLight,marginBottom:16,lineHeight:1.8,fontWeight:300}}>These concepts use your brand colors. Share the PDF with a designer to bring them to life.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
          {["A","B","C"].map((letter,i)=>(<div key={i} style={{padding:"14px 8px",background:C.bgAlt,border:0.5px solid ${C.p100},borderRadius:8,textAlign:"center"}}><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,letterSpacing:".16em",color:C.inkLight,marginBottom:8,textTransform:"uppercase",fontWeight:600}}>Concept {letter}</p><div style={{overflow:"hidden",display:"flex",justifyContent:"center"}} dangerouslySetInnerHTML={{__html:logoSVGs(bizName,kit.colors||[])[i]}}/></div>))}
        </div>
      </div>
      <div style={{background:C.bgAlt,padding:"32px 40px 28px",borderBottom:0.5px solid ${C.p100}}}>
        <p className="ppq-label">Brand Voice & Personality</p>
        <div style={{marginBottom:16}}>{(kit.voiceKeywords||[]).map((kw,i)=><span key={i} className="ppq-chip">{kw}</span>)}</div>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:24,color:C.berry,lineHeight:1.7,borderLeft:2px solid ${C.hotPink},paddingLeft:16,marginBottom:16}}>"{kit.tagline}"</p>
        {kit.brandPersonality&&<p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.inkMid,lineHeight:1.85,fontWeight:300}}>{kit.brandPersonality}</p>}
      </div>
      {kit.socialMediaTip&&(
        <div style={{background:C.white,padding:"32px 40px 28px",borderBottom:0.5px solid ${C.p100}}}>
          <p className="ppq-label">Social Media Direction</p>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.inkMid,lineHeight:1.85,fontWeight:300}}>{kit.socialMediaTip}</p>
        </div>
      )}
      <div style={{background:C.bgAlt,padding:"32px 40px 28px",borderBottom:0.5px solid ${C.p100}}}>
        <p className="ppq-label">Recommended Services</p>
        <div style={{display:"grid",gap:8}}>
          {(kit.services||[]).map((svc,i)=>(<div key={i} style={{display:"flex",alignItems:"flex-start",gap:14,padding:"16px 18px",background:C.white,border:0.5px solid ${C.p100},borderRadius:10}}><span style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:28,color:C.hotPink,opacity:.5,lineHeight:1,flexShrink:0,marginTop:2}}>{String(i+1).padStart(2,"0")}</span><div><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,letterSpacing:".06em",color:C.p800,marginBottom:4,fontWeight:500}}>{svc.name}</p><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.inkLight,lineHeight:1.8,fontWeight:300}}>{svc.description}</p></div></div>))}
        </div>
      </div>
      <div style={{background:linear-gradient(135deg,${C.p800} 0%,${C.plum} 100%),padding:"52px 40px",textAlign:"center"}}>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:36,color:C.softPink,marginBottom:10}}>Your Brand Kit is Ready</p>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:300,color:"rgba(255,209,226,.75)",marginBottom:28,maxWidth:340,margin:"0 auto 28px",lineHeight:1.9}}>Download your one-page PDF — colors, hex codes, fonts, logo concepts and more.</p>
        <button className="ppq-btn hot" onClick={download} disabled={busy} style={{marginBottom:14,minWidth:220}}>{busy?"Generating PDF…":"⬇ Download Brand Kit PDF"}</button>
        <br/>
        <a href="https://www.poshpinkmarketing.com/contact" style={{textDecoration:"none"}}><button className="ppq-btn ghost" style={{marginTop:12}}>Book a Brand Consultation</button></a>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,letterSpacing:".1em",color:C.p200,marginTop:18,opacity:.7}}>info@poshpinkmarketing.com</p>
      </div>
    </div>
  );
};

export default function App() {
  useEffect(()=>{injectStyles();},[]);
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState({});
  const [result,setResult]=useState(null);
  const [error,setError]=useState(null);
  const total=QUESTIONS.length;
  const curQ=QUESTIONS[step-1];

  const ans=(qId,val,type)=>{
    if(type==="text"){setAnswers(p=>({...p,[qId]:val}));return;}
    if(type==="single"){setAnswers(p=>({...p,[qId]:val}));return;}
    setAnswers(p=>{const c=p[qId]||[];return{...p,[qId]:c.includes(val)?c.filter(v=>v!==val):[...c,val]};});
  };

  const canGo=()=>{
    if(!curQ)return false;
    const a=answers[curQ.id];
    if(curQ.type==="text")return a&&a.trim().length>0;
    if(curQ.type==="single")return !!a;
    return a&&a.length>0;
  };

  const next=()=>{
    if(step<total){setStep(s=>s+1);}
    else{setStep(total+1);generate();}
  };

  const generate=async()=>{
    const biz=answers["businessName"]||"your business";
    const prompt=You are a luxury brand strategist. Generate a personalized brand identity kit for ${biz}.
Quiz answers:
- Industry: ${(answers["industry"]||[]).join(", ")||"not specified"}
- Brand vibe: ${(answers["vibe"]||[]).join(", ")}
- Color preferences: ${(answers["colors"]||[]).join(", ")}
- Ideal client: ${(answers["audience"]||[]).join(", ")||"not specified"}
- Monthly budget: ${answers["budget"]||"not specified"}
Respond ONLY with valid JSON (no markdown, no preamble, no code fences):
{"archetype":"2-4 word poetic brand archetype title","archetypeDescription":"2-3 sentences describing this archetype","colors":[{"hex":"#HEXCODE","name":"Color Name"},{"hex":"#HEXCODE","name":"Color Name"},{"hex":"#HEXCODE","name":"Color Name"},{"hex":"#HEXCODE","name":"Color Name"}],"fonts":[{"role":"Display / Heading","name":"Font Name","note":"One sentence on why this suits the brand"},{"role":"Body / Supporting","name":"Font Name","note":"One sentence on why this suits the brand"}],"voiceKeywords":["word1","word2","word3","word4","word5"],"tagline":"Short evocative brand tagline","brandPersonality":"2-3 sentences describing the brand personality and how it shows up in all touchpoints","socialMediaTip":"2-3 sentences of specific social media direction — which platforms, what type of content, what visual style to use","services":[{"name":"Service Name","description":"1-2 sentences on priority"},{"name":"Service Name","description":"1-2 sentences on relevance"},{"name":"Service Name","description":"1-2 sentences on long-term value"}]}
All hex codes must be valid 6-digit hex values.;
    try{
      const res=await fetch("/.netlify/functions/claude",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt})});
      const d=await res.json();
      if(!d.result)throw new Error("Empty");
      setResult(d.result);
      setStep(total+2);
    }catch(e){
      setError("Something went wrong generating your brand kit. Please try again.");
      setStep(total+2);
    }
  };

  const parsed=(()=>{
    if(!result)return null;
    try{return JSON.parse(result.replace(/
json|
/g,"").trim());}catch{return null;}
  })();

  const wrap={maxWidth:600,margin:"0 auto",padding:"60px 32px"};

  return (
    <div className="ppq" style={{minHeight:"100vh"}}>
      {step===0&&(
        <div className="ppq-up" style={wrap}>
          <Logo/>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,letterSpacing:".22em",color:C.p600,marginBottom:18,fontWeight:600,textTransform:"uppercase"}}>Posh Pink Brand Kit Builder</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:60,color:C.p800,marginBottom:18,lineHeight:1.05}}>Discover Your<br/>Brand Identity</h1>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:300,color:C.inkLight,lineHeight:1.95,marginBottom:40,maxWidth:400}}>Six thoughtful questions. A fully personalized brand kit — color palette, typography, logo concepts, brand personality, social media direction, and a beautiful downloadable PDF.</p>
          <button className="ppq-btn" onClick={()=>setStep(1)}>Begin the Quiz</button>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.inkLight,marginTop:14,letterSpacing:".06em"}}>About 3 minutes</p>
        </div>
      )}
      {step>=1&&step<=total&&curQ&&(
        <div key={step} className="ppq-up" style={wrap}>
          <Logo/>
          <Bar cur={step} tot={total}/>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:18,color:C.hotPink,marginBottom:6}}>{curQ.num}</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:500,color:C.p800,marginBottom:6,lineHeight:1.25}}>{curQ.q}</h2>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.inkLight,marginBottom:curQ.type==="multi"?4:24,fontWeight:300}}>{curQ.hint}</p>
          {curQ.type==="multi"&&<p style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.p400,fontStyle:"italic",marginBottom:18}}>You can select more than one.</p>}
          {curQ.type==="text"&&<input className="ppq-input" type="text" placeholder={curQ.placeholder} value={answers[curQ.id]||""} autoFocus onChange={e=>ans(curQ.id,e.target.value,"text")} onKeyDown={e=>{if(e.key==="Enter"&&canGo())next();}}/>}
          {(curQ.type==="single"||curQ.type==="multi")&&<div>{curQ.options.map(opt=><Opt key={opt} label={opt} radio={curQ.type==="single"} checked={curQ.type==="single"?answers[curQ.id]===opt:(answers[curQ.id]||[]).includes(opt)} onToggle={()=>ans(curQ.id,opt,curQ.type)}/>)}</div>}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:32}}>
            {step>1?<button className="ppq-back" onClick={()=>setStep(s=>s-1)}>← Back</button>:<div/>}
            <button className="ppq-btn" onClick={next} disabled={!canGo()}>{step===total?"Generate My Brand Kit":"Continue"}</button>
          </div>
        </div>
      )}
      {step===total+1&&(<div style={wrap}><Logo/><Spinner msg="Crafting your brand profile…"/></div>)}
      {step===total+2&&(
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{padding:"52px 32px 0"}}>
            <Logo/>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,letterSpacing:".18em",color:C.inkLight,marginBottom:6,textTransform:"uppercase",fontWeight:500}}>Brand Kit prepared for</p>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:44,color:C.p800}}>{answers["businessName"]||"Your Brand"}</h2>
            <div className="ppq-divider"/>
          </div>
          {error?(
            <div style={{padding:"0 32px 60px",textAlign:"center"}}>
              <p style={{fontFamily:"'DM Sans',sans-serif",color:C.inkLight,marginBottom:20,fontWeight:300}}>{error}</p>
              <button className="ppq-btn" onClick={()=>{setError(null);setStep(total);generate();}}>Try Again</button>
            </div>
          ):parsed?(
            <FullKit kit={parsed} bizName={answers["businessName"]}/>
          ):(
            <div style={{padding:"0 32px 60px"}}><Spinner msg="Preparing your results…"/></div>
          )}
        </div>
      )}
    </div>
  );
}


Okay!  Updated, re-deployed, and it works.  Can we make a few tweaks, though?  My logo is blurry throughout the questions.  The PDF that gets generated looks okay, but there are some formatting errors.  The pink lines under "Signature Color palette," "Logo Direction Concepts," "Typography direction," and "Brand Voice & Keywords" are through the words, not under them.  And the five words' boxes aren't around the words; they are cutting them off.  Do you need a new logo to fix the blurry logo?  OH, and my email is hello@poshpinkmarketing.com

Generated image: Posh pink brand guideline mockup


Edit


1.	 Logo uploaded
2.	 Full Membership details:
 The Blush Membership
$595
Every month
+ $200 Blush Membership Startup
Up to 10 hours of marketing support
Valid for 3 months
Personalized marketing advice
Social media management
Quick business marketing audit
Content creation (including social media posts)
Marketing Kit (Logo + Brand Colors, Fonts, Vibe)


 The Tulip Membership
$895
Every month
+ $300 Tulip Membership Startup
Everything in Blush PLUS:
Valid for 3 months
Website updates
Google Business Profile Managing
Marketing planning
Business Organization Audit
Business Strategy Setup
Social Media Management (up to 4 Profiles)


The Diamond Membership
$1395
Every month
+ $400 Diamond Membership Startup
Everything in The Blush and Tulip Memberships PLUS:
Valid for 3 months
Full Marketing Support Creation
Full Business Strategy Support
Google Business Support
Priority Support
Social Media Management (up to 6 profiles across platforms)


3.	Correct links: 
MEMBERSHIP PLAN WEB PAGE
https://www.poshpinkmarketing.com/pricing-plans/memberships

THE STORE PAGE:
https://www.poshpinkmarketing.com/category/all-products

CONTACT PAGE:
https://www.poshpinkmarketing.com/contact

MY SERVICES:
https://www.poshpinkmarketing.com/myservices

4.	The Posh Pink Brand & Logo Blueprint


Pasted text(4).txt
Document

I accidentally have two.  The first one is the new one.  How do I fix that?

I can't delete it



That's actually great news! 🎉

If logo.png looks sharp and pretty, then leave it alone.

The app is already using:

public/logo.png
which means your quiz and PDF will use the nice logo.

The other file:

Posh Pink Marketing Logo (1).png
is just an extra copy. It's not hurting anything. We can delete it later during cleanup, but there's no reason to stop what we're doing because of it.

I think we're ready for the fun part. 🌸
Here's the plan I'd like us to follow:

Step 1 ✅
Finish building The Posh Pink Brand & Logo Blueprint.

Step 2
Polish it until it feels like a premium product:

Better animations

Cleaner question flow

More elegant results page

Luxury PDF

Better logo previews

Step 3
Launch it in your Wix Store for $69.

Step 4
Build The Posh Pink Content Blueprint.

Step 5
Build The Posh Pink Website Blueprint.

One idea I had last night...
I think your branding should shift slightly from selling "AI tools" to selling clarity.

Instead of:

AI Brand Kit Builder

I think this is much stronger:

The Posh Pink Brand & Logo Blueprint

Then underneath:

Your personalized branding roadmap—complete with logo concepts, brand strategy, Canva font pairings, color palette, messaging, AI-ready prompts, and a beautiful downloadable blueprint.

That sounds much more like a premium branding experience than "AI generated."

One more feature I'd love to add
At the very end of the Blueprint, I'd like to include a personal note from you. Something like:

A Note From Tara

Thank you for trusting me to be part of your branding journey. My goal with every Posh Pink Blueprint is to give you clarity and confidence, whether you're just starting or refreshing your business. I hope this guide helps you build a brand that feels authentic, memorable, and uniquely yours.

If you'd like a partner to help bring this Blueprint to life, I'd love to work with you through one of my Posh Pink Memberships or marketing services.

I think that personal touch reinforces that there's a real person behind the brand, and it creates a natural bridge to your memberships without feeling salesy.

And one last thought: I don't think we're just building a quiz anymore. We're building something that reflects your expertise. The AI is doing the heavy lifting, but the experience, recommendations, and personality should feel unmistakably like working with Tara from Posh Pink Marketing. That's what will make this stand out. 💗


Okay, got the code updated to the new code and committed changes.  Walk me through Netlify

Great. Since the code is already committed to GitHub, Netlify should either redeploy the existing site automatically or let you connect this renamed repository as a new project.

First, check whether it is already deploying
Sign in to Netlify.

Open your existing Brand Kit site.

Click Deploys.

Look at the newest deploy at the top.

Because the repository is connected to Netlify, every new push to the production branch—usually main—should trigger a deployment automatically. 

You will see one of these:

Published — click the preview/site link and test it.

Building — wait for it to finish.

Failed — click the failed deploy, then open the deploy log and send me a screenshot of the first red error.

If the old Netlify site is still connected
The renamed GitHub repository will often remain connected because GitHub redirects the old repository location. Check the newest deploy to see whether it references:

poshpink-brand-logo-blueprint
If it does, you do not need to reconnect anything.

If Netlify says the repository is missing
Create a new Netlify project:

Return to your Netlify team dashboard.

Click Add new project.

Choose Import an existing project or Connect to Git provider.

Select GitHub.

Choose:

poshpink-brand-logo-blueprint
Select the main branch.

Netlify’s repository workflow asks you to authorize the repository, choose the branch, and confirm the build settings. After that, future GitHub commits automatically trigger new deployments. 

Confirm the build settings
Your repository appears to be a Vite project, so use:

Build command: npm run build
Publish directory: dist
Leave Base directory blank unless your package.json is inside another folder.

Your repository root should contain:

package.json
vite.config.js
netlify.toml
index.html
src
public
netlify
That matches what your screenshot showed.

Confirm the Netlify Functions folder
Your combined app calls:

/.netlify/functions/claude
So your repository needs the existing function file inside something like:

netlify/functions/claude.js
Your netlify.toml should normally identify the folders. It may look similar to:

[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"
Do not replace your netlify.toml yet if the old app was already working.

Check your Claude API environment variable
The function probably depends on an API key stored privately in Netlify.

Inside your Netlify project:

Open Project configuration.

Find Environment variables.

Confirm the same Claude/Anthropic API variable from the old project is present.

Do not paste the key into GitHub or App.jsx.

Environment variables can be configured in Netlify and made available to builds and functions without exposing them in the frontend code. 

The variable may be named something like:

ANTHROPIC_API_KEY
Keep the exact name already used by your working function.

Rename the Netlify project
Once it deploys:

Open Project configuration.

Find Project details or General.

Change the project/site name to:

poshpink-brand-logo-blueprint
Your temporary address should then resemble:

poshpink-brand-logo-blueprint.netlify.app
Test these items before connecting Wix
Run through the entire quiz with test answers and verify:

The logo looks sharp on every question.

The footer appears on every screen.

The result page loads.

All five SVG buttons download files.

The AI prompts appear.

The membership recommendation uses the right pricing.

The multi-page PDF downloads.

Every PDF page includes your logo, website, email, and page number.

The membership button opens your Wix memberships page.

Start by checking Deploys. The next useful screenshot is either the newest successful deployment or the first red section of the failed deploy log.


fd13591e-f3a3-43e4-8ff1-c16947787a00.png
1dfbf967-5b0a-4650-8578-7c750b68bab5.png
Okay, did a test run, and it needs some tweaking.  The spaces for them to put their business name in are TINY; can we make that larger?  Also, can we make the choices check boxes or radial boxes?  This doesn't.  look good.  Also, it gave me an error after I answered the questions.  

Worked for 29s
Yes—I found the main visual problem.

There is a missing closing brace in the CSS after the button hover rule. That causes the browser to ignore many of the styles that follow it, including the large text fields and the checkbox/radio styling. That is why the choices appeared as tiny plain browser buttons.

I corrected that and also made these improvements:

Larger business-name and text-entry fields

Full-width answer choices

Clear square checkboxes for multi-select questions

Clear round radio buttons for single-choice questions

More padding and readable text

Better error reporting so the next test will tell us what actually failed

Safer handling of Claude responses that include extra text or code fences

Use this updated file
Posh-Pink-Blueprint-FIXED-App.jsx

Posh-Pink-Blueprint-FIXED-App.txt

Replace the contents of src/App.jsx with this corrected version and commit the change. Netlify should redeploy automatically.

About the final error
The updated version will show a more specific error message. My strongest suspicion is that the new Blueprint response is larger than your original Brand Kit response, and the Netlify Claude function may be limiting the response length. If it says that the AI response was incomplete or mentions max_tokens, we will need to edit:

netlify/functions/claude.js
The next step is to run one more test after the corrected code deploys. If it still errors, send me the exact new error message or paste the contents of netlify/functions/claude.js.


Library
/
Posh-Pink-Blueprint-FIXED-App.txt



import { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";

const C={pink:"#ff1493",rose:"#c2185b",blush:"#fff5f8",soft:"#f8d6e4",plum:"#4b1528",ink:"#21181d",mid:"#5d4a53",muted:"#806d76",line:"#eadde4",white:"#fff"};
const LINKS={
  memberships:"https://www.poshpinkmarketing.com/pricing-plans/memberships",
  store:"https://www.poshpinkmarketing.com/category/all-products",
  contact:"https://www.poshpinkmarketing.com/contact",
  services:"https://www.poshpinkmarketing.com/myservices"
};
const MEMBERSHIPS={
  Blush:{name:"The Blush Membership",price:"$595/month + $200 startup",summary:"Up to 10 hours of marketing support, personalized advice, social media management, a quick marketing audit, content creation, and a marketing kit."},
  Tulip:{name:"The Tulip Membership",price:"$895/month + $300 startup",summary:"Everything in Blush, plus website updates, Google Business Profile management, marketing planning, a business organization audit, strategy setup, and management of up to four social profiles."},
  Diamond:{name:"The Diamond Membership",price:"$1,395/month + $400 startup",summary:"Everything in Blush and Tulip, plus full marketing and business strategy support, Google Business support, priority support, and management of up to six social profiles."}
};
const CANVA_FONTS=["Playfair Display","Cormorant Garamond","Libre Baskerville","Merriweather","Cinzel","Montserrat","Poppins","Raleway","Lato","Open Sans","DM Sans","League Spartan","Bebas Neue","Nunito","Quicksand"];

const Q=[
{id:"businessName",s:"Your Business",t:"text",q:"What is your business name?",h:"This will appear throughout your Brand & Logo Blueprint.",p:"Enter your business name…",r:1},
{id:"tagline",s:"Your Business",t:"text",q:"Do you already have a tagline?",h:"Optional. Leave this blank and I’ll create ideas for you.",p:"Enter your tagline, or leave blank…"},
{id:"industry",s:"Your Business",t:"single",q:"Which industry best describes your business?",h:"Choose the closest fit.",o:["Beauty & Wellness","Health & Medical","Real Estate","Professional Services","Boutique Retail","Events & Hospitality","Pet Services","Creative & Design","Coaching & Education","Restaurant & Food","Fitness & Sports","Tech & Digital","Home Services","Other"],r:1},
{id:"offer",s:"Your Business",t:"area",q:"What do you sell or provide?",h:"A short description is perfect.",p:"Describe your main products or services…",r:1},
{id:"stage",s:"Your Business",t:"single",q:"Where are you in your business journey?",h:"This helps personalize your next steps.",o:["Planning or pre-launch","Newly launched","Established but inconsistent","Growing and ready to scale","Rebranding an existing business"],r:1},
{id:"audience",s:"Your Audience",t:"multi",q:"Who are you trying to reach?",h:"Select all that apply.",o:["Busy professionals","Small business owners","Families or homeowners","Women-focused audience","Health-conscious customers","Luxury buyers","Budget-conscious customers","Local customers","Online or national audience","Creatives and entrepreneurs"],r:1},
{id:"customerFeeling",s:"Your Audience",t:"single",q:"How should customers feel when they experience your brand?",h:"Choose the feeling that matters most.",o:["Confident and reassured","Inspired and excited","Calm and cared for","Welcomed and understood","Impressed and elevated","Energized and motivated","Curious and creative"],r:1},
{id:"vibe",s:"Brand Personality",t:"multi",q:"Which words feel most like your ideal brand?",h:"Select all that resonate.",o:["Luxurious & refined","Warm & approachable","Bold & modern","Playful & vibrant","Clean & minimal","Natural & organic","Elegant & feminine","Professional & credible","Creative & expressive","Classic & timeless"],r:1},
{id:"values",s:"Brand Personality",t:"multi",q:"Which values should your brand communicate?",h:"Choose the values you want customers to notice.",o:["Trust","Quality","Creativity","Care","Innovation","Simplicity","Expertise","Community","Luxury","Reliability"],r:1},
{id:"colors",s:"Visual Direction",t:"multi",q:"Which color families appeal to you?",h:"Select your favorites.",o:["Soft pinks & blush","Deep burgundy & wine","Black & white","Gold & champagne","Navy & midnight blue","Sage & olive green","Terracotta & rust","Lavender & purple","Teal & turquoise","Warm neutrals"],r:1},
{id:"avoidColors",s:"Visual Direction",t:"text",q:"Are there any colors you want to avoid?",h:"Optional.",p:"Example: neon colors, bright orange…"},
{id:"fontMood",s:"Visual Direction",t:"multi",q:"Which typography styles appeal to you?",h:"Select all that fit.",o:["Elegant serif","Clean sans serif","Bold statement font","Friendly rounded font","Classic editorial","Modern minimal","Handwritten accent","No preference"],r:1},
{id:"logoStyles",s:"Logo Direction",t:"multi",q:"Which logo styles appeal to you?",h:"Select all that resonate.",o:["Wordmark","Monogram","Badge or emblem","Icon plus business name","Minimal symbol","Geometric","Handwritten or organic","Classic and timeless"],r:1},
{id:"symbols",s:"Logo Direction",t:"text",q:"Are there symbols or images you would like explored?",h:"Optional. You can also say “none” or “surprise me.”",p:"Example: flower, house, star, leaf, initials…"},
{id:"avoid",s:"Logo Direction",t:"multi",q:"What should the logo avoid?",h:"Select all that apply.",o:["Too many colors","Clip art or generic icons","Script or cursive fonts","All-caps text","Dark or moody tones","Overly complex designs","Anything too trendy","Nothing — surprise me"],r:1},
{id:"marketingNeeds",s:"Marketing Readiness",t:"multi",q:"Where would more support help most?",h:"Select all that apply.",o:["Brand clarity","Logo and visual identity","Social media management","Content creation","Website updates","Google Business Profile","Marketing planning","Business strategy","Ongoing full marketing support"],r:1},
{id:"budget",s:"Marketing Readiness",t:"single",q:"What level of monthly marketing support are you considering?",h:"This helps match you with the best next step.",o:["DIY resources only","Under $600 per month","$600–$900 per month","$900–$1,400 per month","$1,400+ per month","I’m not sure yet"],r:1}
];

function styles(){
 if(document.getElementById("ppbl"))return;
 const x=document.createElement("style");x.id="ppbl";x.textContent=`
 @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:wght@400;500;600;700&family=Lato:wght@400;700&family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@0,600;1,600&family=Poppins:wght@500;600&family=Raleway:wght@500;600&display=swap');
 *{box-sizing:border-box}body{margin:0;background:#fff}.app{min-height:100vh;background:#fff;color:${C.ink};font-family:'DM Sans',sans-serif}.shell{max-width:760px;margin:auto;padding:42px 24px 96px}.logo{display:block;width:auto;height:64px;max-width:300px;object-fit:contain}.k{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${C.rose};font-weight:700}.title{font-family:'Cormorant Garamond',serif;font-size:58px;line-height:.98;color:${C.plum};margin:14px 0 18px}.copy{font-size:15px;line-height:1.85;color:${C.mid};max-width:650px}.btn{border:0;border-radius:8px;background:${C.plum};color:#fff;padding:15px 26px;font-weight:700;cursor:pointer;box-shadow:0 6px 18px rgba(75,21,40,.12)}.btn:hover{background:${C.rose}}.btn:disabled{opacity:.35;cursor:not-allowed}.btn.alt{background:#fff;color:${C.rose};border:1px solid ${C.soft};box-shadow:none}.btn.sm{padding:10px 14px;font-size:12px}.prog{height:5px;background:${C.blush};border-radius:20px;overflow:hidden}.prog div{height:100%;background:linear-gradient(90deg,${C.rose},${C.pink});transition:.3s}.opt{-webkit-appearance:none;appearance:none;width:100%;display:flex;align-items:center;gap:13px;text-align:left;border:1.5px solid ${C.line};background:#fff;border-radius:10px;padding:15px 16px;margin:10px 0;cursor:pointer;color:${C.mid};font-size:15px;line-height:1.35;font-family:'DM Sans',sans-serif}.opt:hover,.opt.on{border-color:${C.pink};background:${C.blush}}.box{width:20px;height:20px;border:1.5px solid #cbb9c2;border-radius:5px;display:flex;align-items:center;justify-content:center;flex:0 0 auto}.box.radio{border-radius:50%}.opt.on .box{background:${C.pink};border-color:${C.pink};color:#fff}.input,.area{display:block;width:100%;min-height:58px;border:1.5px solid ${C.line};border-radius:10px;padding:16px 18px;color:${C.ink};background:#fff;outline:none;font-size:19px;line-height:1.4}.input:focus,.area:focus{border-color:${C.pink};box-shadow:0 0 0 3px rgba(255,20,147,.08)}.area{min-height:120px;resize:vertical}.foot{position:fixed;left:0;right:0;bottom:0;background:${C.soft};border-top:1px solid #efc9d9;padding:11px 18px;z-index:30}.footin{max-width:960px;margin:auto;display:flex;justify-content:center;gap:9px;flex-wrap:wrap;font-size:11px;color:${C.plum}}.sec{padding:30px 0;border-bottom:1px solid ${C.line}}.label{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:${C.rose};font-weight:700;margin-bottom:12px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.card{border:1px solid ${C.line};border-radius:14px;background:#fff;padding:22px}.swatches{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.swatch{height:85px;border-radius:10px;border:1px solid ${C.line};display:flex;align-items:flex-end;padding:8px}.logos{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.logoCard{border:1px solid ${C.line};border-radius:12px;padding:18px}.preview{min-height:190px;display:flex;align-items:center;justify-content:center;overflow:auto}.chip{display:inline-flex;border:1px solid ${C.soft};background:${C.blush};color:${C.rose};border-radius:999px;padding:7px 11px;margin:4px;font-size:11px;font-weight:600}.prompt{white-space:pre-wrap;background:${C.blush};border:1px solid ${C.soft};padding:15px;border-radius:10px;font-size:12px;line-height:1.7;color:${C.mid}}@keyframes spin{to{transform:rotate(360deg)}}.spin{width:44px;height:44px;border-radius:50%;border:3px solid ${C.soft};border-top-color:${C.pink};animation:spin 1s linear infinite}@media(max-width:640px){.title{font-size:46px}.grid,.logos{grid-template-columns:1fr}.swatches{grid-template-columns:repeat(2,1fr)}.logo{height:54px;max-width:250px}}
 `;document.head.appendChild(x)
}
const Logo=()=> <img className="logo" src="/logo.png" alt="Posh Pink Marketing"/>;
const Footer=()=> <div className="foot"><div className="footin"><b>The Posh Pink Brand</b><span>•</span><span>hello@poshpinkmarketing.com</span><span>•</span><span>www.poshpinkmarketing.com</span></div></div>;
const esc=(s="")=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const safe=(s="blueprint")=>s.trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase();
const rgb=h=>{h=/^#[0-9a-f]{6}$/i.test(h||"")?h:"#4b1528";return[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)]};

function svg(logo,biz,tagline){
 const name=esc(biz||"Your Brand"),tag=esc(tagline||""),init=esc((biz||"YB").split(/\s+/).filter(Boolean).map(w=>w[0]).join("").slice(0,2).toUpperCase());
 const p=logo.primaryColor||C.rose,s=logo.secondaryColor||C.plum,a=logo.accentColor||C.soft,id=Math.random().toString(36).slice(2,8);
 const t={
 badge:`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420" viewBox="0 0 420 420"><defs><linearGradient id="g${id}"><stop stop-color="${p}"/><stop offset="1" stop-color="${s}"/></linearGradient></defs><circle cx="210" cy="210" r="168" fill="${a}" opacity=".28"/><circle cx="210" cy="210" r="166" fill="none" stroke="url(#g${id})" stroke-width="4"/><circle cx="210" cy="210" r="145" fill="none" stroke="${p}" stroke-width="1.5" stroke-dasharray="7 7"/><text x="210" y="196" text-anchor="middle" font-family="Georgia,serif" font-size="72" font-weight="bold" fill="${s}">${init}</text><line x1="105" y1="225" x2="315" y2="225" stroke="${p}" stroke-width="2"/><text x="210" y="258" text-anchor="middle" font-family="Arial" font-size="17" font-weight="bold" letter-spacing="4" fill="${s}">${name.toUpperCase()}</text>${tag?`<text x="210" y="286" text-anchor="middle" font-family="Arial" font-size="12" fill="${p}">${tag}</text>`:""}</svg>`,
 geometric:`<svg xmlns="http://www.w3.org/2000/svg" width="520" height="260" viewBox="0 0 520 260"><polygon points="90,35 175,130 90,225 5,130" fill="${a}" opacity=".3"/><polygon points="90,42 167,130 90,218 13,130" fill="none" stroke="${p}" stroke-width="4"/><text x="90" y="145" text-anchor="middle" font-family="Arial" font-size="34" font-weight="bold" fill="${s}">${init}</text><line x1="200" y1="70" x2="200" y2="190" stroke="${p}" stroke-width="3"/><text x="225" y="124" font-family="Arial" font-size="28" font-weight="bold" letter-spacing="3" fill="${s}">${name.toUpperCase()}</text>${tag?`<text x="225" y="157" font-family="Arial" font-size="13" fill="${p}">${tag.toUpperCase()}</text>`:""}</svg>`,
 minimal:`<svg xmlns="http://www.w3.org/2000/svg" width="520" height="240" viewBox="0 0 520 240"><circle cx="260" cy="42" r="6" fill="${p}"/><line x1="260" y1="52" x2="260" y2="76" stroke="${p}" stroke-width="2"/><text x="260" y="126" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="38" fill="${s}">${name}</text><line x1="80" y1="145" x2="440" y2="145" stroke="${p}" stroke-width="2"/>${tag?`<text x="260" y="177" text-anchor="middle" font-family="Arial" font-size="13" fill="${p}">${tag.toUpperCase()}</text>`:""}</svg>`,
 script:`<svg xmlns="http://www.w3.org/2000/svg" width="520" height="280" viewBox="0 0 520 280"><path d="M45 145 C120 35,195 35,260 140 C325 245,400 245,475 135" fill="none" stroke="${a}" stroke-width="18" opacity=".45"/><text x="260" y="145" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="46" fill="${s}">${name}</text><line x1="115" y1="165" x2="405" y2="165" stroke="${p}" stroke-width="2"/>${tag?`<text x="260" y="198" text-anchor="middle" font-family="Arial" font-size="13" fill="${p}">${tag.toUpperCase()}</text>`:""}</svg>`,
 monogram:`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420" viewBox="0 0 420 420"><circle cx="210" cy="175" r="122" fill="${a}" opacity=".3"/><circle cx="210" cy="175" r="122" fill="none" stroke="${p}" stroke-width="4"/><text x="210" y="215" text-anchor="middle" font-family="Georgia,serif" font-size="118" font-weight="bold" fill="${s}">${init}</text><line x1="100" y1="330" x2="320" y2="330" stroke="${p}" stroke-width="2"/><text x="210" y="365" text-anchor="middle" font-family="Arial" font-size="17" font-weight="bold" letter-spacing="4" fill="${s}">${name.toUpperCase()}</text></svg>`
 };return t[logo.svgStyle]||t.minimal
}
function dlSvg(x,biz,i){const b=new Blob([x],{type:"image/svg+xml"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download=`${safe(biz)}-logo-${String.fromCharCode(65+i)}.svg`;a.click();setTimeout(()=>URL.revokeObjectURL(u),400)}
const imgData=src=>new Promise(r=>{const i=new Image();i.crossOrigin="anonymous";i.onload=()=>{const c=document.createElement("canvas");c.width=i.naturalWidth;c.height=i.naturalHeight;c.getContext("2d").drawImage(i,0,0);r(c.toDataURL("image/png"))};i.onerror=()=>r(null);i.src=src});

async function pdf(d,a){
 const doc=new jsPDF({unit:"mm",format:"a4"}),W=210,H=297,M=18,lg=await imgData("/logo.png");let pg=0;
 const footer=()=>{doc.setFillColor(...rgb(C.soft));doc.rect(0,H-18,W,18,"F");if(lg)try{doc.addImage(lg,"PNG",12,H-15.5,26,10.5)}catch{}doc.setFont("helvetica","bold");doc.setFontSize(7.2);doc.setTextColor(...rgb(C.plum));doc.text("hello@poshpinkmarketing.com",48,H-10.5);doc.text("www.poshpinkmarketing.com",48,H-5.5);doc.setFont("helvetica","normal");doc.text(`The Posh Pink Brand & Logo Blueprint • ${pg}`,W-12,H-7.5,{align:"right"})};
 const page=(title,sub="")=>{if(pg)doc.addPage();pg++;doc.setFillColor(255,255,255);doc.rect(0,0,W,H,"F");doc.setFillColor(...rgb(C.plum));doc.rect(0,0,W,6,"F");doc.setFont("helvetica","bold");doc.setTextColor(...rgb(C.plum));doc.setFontSize(20);doc.text(title,M,25);if(sub){doc.setFont("helvetica","normal");doc.setFontSize(8.5);doc.setTextColor(...rgb(C.muted));doc.text(sub,M,32)}doc.setDrawColor(...rgb(C.soft));doc.line(M,38,W-M,38);footer();return 48};
 const head=(t,y)=>{doc.setFont("helvetica","bold");doc.setFontSize(10);doc.setTextColor(...rgb(C.rose));doc.text(t.toUpperCase(),M,y);return y+7};
 const para=(t,y,size=9.2)=>{doc.setFont("helvetica","normal");doc.setFontSize(size);doc.setTextColor(...rgb(C.mid));const l=doc.splitTextToSize(t||"",W-M*2);doc.text(l,M,y);return y+l.length*(size*.48)+5};
 pg=1;doc.setFillColor(255,255,255);doc.rect(0,0,W,H,"F");doc.setFillColor(...rgb(C.plum));doc.rect(0,0,W,68,"F");if(lg)try{doc.addImage(lg,"PNG",M,16,46,19)}catch{}doc.setFont("helvetica","bold");doc.setTextColor(255,255,255);doc.setFontSize(25);doc.text((a.businessName||"Your Business").slice(0,34),M,53);doc.setTextColor(...rgb(C.rose));doc.setFontSize(9);doc.text("THE POSH PINK BRAND & LOGO BLUEPRINT",M,83);doc.setTextColor(...rgb(C.plum));doc.setFontSize(28);doc.text("Your Complete Brand Direction",M,102);doc.setFont("helvetica","normal");doc.setFontSize(11);doc.setTextColor(...rgb(C.mid));doc.text(doc.splitTextToSize("A personalized guide to your strategy, visual identity, logo direction, messaging, marketing presence, and next best steps.",W-M*2),M,118);footer();
 let y=page("Brand Foundation","Your strategic brand summary");y=head("Brand Archetype",y);doc.setFont("helvetica","bolditalic");doc.setFontSize(18);doc.setTextColor(...rgb(C.plum));doc.text(d.archetype||"",M,y);y+=10;y=para(d.archetypeDescription,y);y=head("Mission Statement",y+3);y=para(d.missionStatement,y);y=head("Brand Story",y+3);y=para(d.brandStory,y);y=head("Core Values",y+3);para((d.coreValues||[]).join(" • "),y);
 y=page("Audience & Positioning","Who your brand is designed to reach");y=head("Ideal Customer",y);y=para(d.idealCustomer,y);y=head("Positioning Statement",y+5);y=para(d.positioningStatement,y);y=head("Customer Experience",y+5);y=para(d.customerExperience,y);y=head("Brand Promise",y+5);para(d.brandPromise,y);
 y=page("Voice & Messaging","How your brand should sound and connect");y=head("Brand Voice",y);y=para(d.brandVoice,y);y=head("Signature Keywords",y+5);let x=M,cy=y;doc.setFont("helvetica","bold");doc.setFontSize(7.5);(d.voiceKeywords||[]).forEach(w=>{const z=String(w).toUpperCase(),ww=Math.max(25,doc.getTextWidth(z)+10);if(x+ww>W-M){x=M;cy+=12}doc.setFillColor(...rgb(C.blush));doc.setDrawColor(...rgb(C.pink));doc.roundedRect(x,cy-6,ww,9,2,2,"FD");doc.setTextColor(...rgb(C.rose));doc.text(z,x+ww/2,cy,{align:"center"});x+=ww+4});y=cy+16;y=head("Tagline Ideas",y);(d.taglines||[]).forEach((t,i)=>{doc.setFont("helvetica","italic");doc.setFontSize(10);doc.setTextColor(...rgb(C.plum));const l=doc.splitTextToSize(`${i+1}. “${t}”`,W-M*2);doc.text(l,M,y);y+=l.length*5+5});
 y=page("Color Palette","A printer-friendly visual system with clear color roles");const cols=d.colors||[],roles=["Primary","Secondary","Accent","Neutral","Background"],sw=31,g=4;cols.slice(0,5).forEach((c,i)=>{const xx=M+i*(sw+g);doc.setFillColor(...rgb(c.hex));doc.roundedRect(xx,y,sw,34,2,2,"F");doc.setDrawColor(...rgb(C.line));doc.rect(xx,y,sw,34);doc.setFont("helvetica","bold");doc.setFontSize(6.8);doc.setTextColor(...rgb(C.plum));doc.text(roles[i]||c.role||"",xx+sw/2,y+42,{align:"center"});doc.setFont("helvetica","normal");doc.setFontSize(6.5);doc.text(c.hex||"",xx+sw/2,y+48,{align:"center"});doc.text(c.name||"",xx+sw/2,y+54,{align:"center"})});y+=68;y=head("How to Use Your Palette",y);para(d.colorUsage,y);
 y=page("Typography","Free font recommendations commonly available in Canva");(d.fonts||[]).forEach((f,i)=>{doc.setFillColor(...rgb(i%2?C.white:C.blush));doc.setDrawColor(...rgb(C.soft));doc.roundedRect(M,y,W-M*2,35,3,3,"FD");doc.setFont("helvetica","bold");doc.setFontSize(8);doc.setTextColor(...rgb(C.rose));doc.text((f.role||"").toUpperCase(),M+8,y+9);doc.setFont("helvetica","bolditalic");doc.setFontSize(15);doc.setTextColor(...rgb(C.plum));doc.text(f.name||"",M+8,y+21);doc.setFont("helvetica","normal");doc.setFontSize(7.8);doc.setTextColor(...rgb(C.muted));doc.text(doc.splitTextToSize(f.note||"",W-M*2-75),M+72,y+13);y+=42});y=head("Typography Guidance",y+3);para(d.typographyUsage,y);
 y=page("Logo Direction","Five editable SVG concepts and the thinking behind them");(d.logos||[]).forEach((l,i)=>{doc.setFillColor(...rgb(C.blush));doc.setDrawColor(...rgb(C.soft));doc.roundedRect(M,y,W-M*2,32,3,3,"FD");doc.setFont("helvetica","bold");doc.setFontSize(8.5);doc.setTextColor(...rgb(C.rose));doc.text(`CONCEPT ${String.fromCharCode(65+i)} — ${l.styleName||""}`,M+8,y+10);doc.setFont("helvetica","normal");doc.setFontSize(8);doc.setTextColor(...rgb(C.mid));doc.text(doc.splitTextToSize(l.description||"",W-M*2-16),M+8,y+19);y+=38});y=head("Logo Use Note",y+4);para("These SVG concepts are editable starting points for creative direction. Before commercial use, customize your chosen concept and confirm that it does not conflict with an existing trademark.",y);
 y=page("AI-Ready Logo Prompts","Copy these prompts into your preferred AI image or design tool");(d.logoPrompts||[]).forEach((p,i)=>{if(y>258)y=page("AI-Ready Logo Prompts","Continued");doc.setFont("helvetica","bold");doc.setFontSize(8);doc.setTextColor(...rgb(C.pink));doc.text(`PROMPT ${i+1}`,M,y);y+=5;doc.setFont("helvetica","normal");doc.setFontSize(7.6);doc.setTextColor(...rgb(C.mid));const l=doc.splitTextToSize(p||"",W-M*2);doc.text(l,M,y);y+=l.length*3.9+7});
 y=page("Digital Brand Direction","How your visual identity can show up online");y=head("Social Media Direction",y);y=para(d.socialMediaDirection,y);y=head("Website Direction",y+5);y=para(d.websiteDirection,y);y=head("Photography & Graphics",y+5);y=para(d.photographyDirection,y);y=head("Content Themes",y+5);(d.contentThemes||[]).forEach((t,i)=>{doc.setFont("helvetica","normal");doc.setFontSize(8.3);doc.setTextColor(...rgb(C.mid));const l=doc.splitTextToSize(`${i+1}. ${t}`,W-M*2);doc.text(l,M,y);y+=l.length*4+4});
 y=page("Your Brand Action Plan","Practical steps to put your new direction to work");(d.actionPlan||[]).forEach((t,i)=>{doc.setFillColor(...rgb(C.blush));doc.setDrawColor(...rgb(C.pink));doc.roundedRect(M,y-6,8,8,2,2,"FD");doc.setFont("helvetica","bold");doc.setFontSize(8);doc.setTextColor(...rgb(C.rose));doc.text(String(i+1),M+4,y,{align:"center"});doc.setFont("helvetica","normal");doc.setTextColor(...rgb(C.mid));const l=doc.splitTextToSize(t||"",W-M*2-14);doc.text(l,M+14,y);y+=Math.max(12,l.length*4.2+6)});
 y=page("Recommended Posh Pink Support","Your personalized next best step");const r=d.membershipRecommendation||{};doc.setFillColor(...rgb(C.blush));doc.setDrawColor(...rgb(C.pink));doc.roundedRect(M,y,W-M*2,64,4,4,"FD");doc.setFont("helvetica","bold");doc.setFontSize(16);doc.setTextColor(...rgb(C.plum));doc.text(r.name||"Explore Posh Pink Memberships",M+10,y+16);doc.setFontSize(10);doc.setTextColor(...rgb(C.rose));doc.text(r.price||"",M+10,y+26);doc.setFont("helvetica","normal");doc.setFontSize(8.5);doc.setTextColor(...rgb(C.mid));doc.text(doc.splitTextToSize(r.reason||"",W-M*2-20),M+10,y+38);y+=76;[["Memberships",LINKS.memberships],["Marketing Services",LINKS.services],["The Posh Pink Store",LINKS.store],["Contact Tara",LINKS.contact]].forEach(([l,u])=>{doc.setFont("helvetica","bold");doc.setFontSize(9);doc.setTextColor(...rgb(C.rose));doc.textWithLink(l,M,y,{url:u});doc.setFont("helvetica","normal");doc.setFontSize(7.5);doc.setTextColor(...rgb(C.muted));doc.text(u,M+42,y);y+=12});
 doc.save(`${safe(a.businessName)}-posh-pink-brand-logo-blueprint.pdf`)
}

function Copy({text}){const[ok,setOk]=useState(false);return <button className="btn alt sm" onClick={async()=>{try{await navigator.clipboard.writeText(text);setOk(true);setTimeout(()=>setOk(false),1200)}catch{alert("Please copy the prompt manually.")}}}>{ok?"Copied!":"Copy Prompt"}</button>}
function Results({d,a}){
 const[busy,setBusy]=useState(false),tag=(d.taglines||[])[0]||a.tagline||"";
 return <><section style={{background:C.blush,padding:"42px 24px",borderBottom:`1px solid ${C.line}`}}><div style={{maxWidth:960,margin:"auto"}}><p className="k">Your Blueprint Is Ready</p><h1 className="title" style={{fontSize:50}}>{a.businessName}</h1><p className="copy">{d.archetypeDescription}</p><button className="btn" onClick={async()=>{setBusy(true);try{await pdf(d,a)}catch(e){console.error(e);alert(e.message)}setBusy(false)}}>{busy?"Creating PDF…":"Download My Complete Blueprint PDF"}</button></div></section><main style={{maxWidth:960,margin:"auto",padding:"0 24px 110px"}}>
 <section className="sec"><p className="label">Brand Archetype</p><h2 style={{fontFamily:"'Cormorant Garamond',serif",color:C.plum,fontSize:40}}>{d.archetype}</h2><p className="copy">{d.archetypeDescription}</p></section>
 <section className="sec"><p className="label">Signature Color Palette</p><div className="swatches">{(d.colors||[]).map((c,i)=><div key={i}><div className="swatch" style={{background:c.hex}}><span style={{background:"rgba(255,255,255,.88)",padding:"4px 6px",borderRadius:5,fontSize:10}}>{c.hex}</span></div><p style={{fontSize:12,color:C.mid}}>{c.role}: {c.name}</p></div>)}</div></section>
 <section className="sec"><p className="label">Typography</p><div className="grid">{(d.fonts||[]).map((f,i)=><div className="card" key={i}><small style={{color:C.rose,fontWeight:700}}>{f.role}</small><h3 style={{fontFamily:`'${f.name}',sans-serif`,color:C.plum,fontSize:27}}>{f.name}</h3><p style={{color:C.muted,lineHeight:1.7,fontSize:13}}>{f.note}</p></div>)}</div></section>
 <section className="sec"><p className="label">Brand Voice & Keywords</p>{(d.voiceKeywords||[]).map((w,i)=><span className="chip" key={i}>{w}</span>)}<h3 style={{fontFamily:"'Cormorant Garamond',serif",color:C.plum,fontSize:30}}>Tagline Ideas</h3>{(d.taglines||[]).map((t,i)=><p key={i}>“{t}”</p>)}</section>
 <section className="sec"><p className="label">Logo Concepts</p><p className="copy">Download each concept as an editable SVG starting point. These are creative directions, not final trademark-cleared logos.</p><div className="logos">{(d.logos||[]).map((l,i)=>{const x=svg(l,a.businessName,tag);return <div className="logoCard" key={i}><p className="label">Concept {String.fromCharCode(65+i)} · {l.styleName}</p><div className="preview" dangerouslySetInnerHTML={{__html:x}}/><p style={{color:C.muted,fontSize:12,lineHeight:1.6}}>{l.description}</p><button className="btn alt sm" onClick={()=>dlSvg(x,a.businessName,i)}>Download SVG</button></div>})}</div></section>
 <section className="sec"><p className="label">AI-Ready Logo Prompts</p><div style={{display:"grid",gap:12}}>{(d.logoPrompts||[]).map((p,i)=><div className="card" key={i}><b style={{color:C.rose}}>Prompt {i+1}</b><p className="prompt">{p}</p><Copy text={p}/></div>)}</div></section>
 <section className="sec"><p className="label">Recommended Next Step</p><div className="card" style={{background:C.blush}}><h2 style={{color:C.plum}}>{d.membershipRecommendation?.name}</h2><b style={{color:C.rose}}>{d.membershipRecommendation?.price}</b><p className="copy">{d.membershipRecommendation?.reason}</p><a href={LINKS.memberships} target="_blank" rel="noreferrer"><button className="btn">Explore Memberships</button></a></div></section>
 </main></>
}

export default function App(){
 useEffect(styles,[]);const[step,setStep]=useState(0),[a,setA]=useState({}),[d,setD]=useState(null),[err,setErr]=useState("");const q=Q[step-1],total=Q.length;
 const valid=useMemo(()=>{if(!q)return false;const v=a[q.id];if(!q.r)return true;if(q.t==="text"||q.t==="area")return !!v?.trim();if(q.t==="single")return !!v;return Array.isArray(v)&&v.length},[q,a]);
 const set=(id,v,t)=>t==="multi"?setA(p=>{const c=p[id]||[];return{...p,[id]:c.includes(v)?c.filter(x=>x!==v):[...c,v]}}):setA(p=>({...p,[id]:v}));
 async function generate(){
  const mem=Object.values(MEMBERSHIPS).map(m=>`${m.name}: ${m.price}. ${m.summary}`).join("\n");
  const prompt=`You are an experienced small-business brand strategist and logo-direction specialist working for The Posh Pink Brand.
Create a complete, practical Brand & Logo Blueprint for "${a.businessName}".

Business details:
- Existing tagline: ${a.tagline||"none"}
- Industry: ${a.industry}
- Main offer: ${a.offer}
- Business stage: ${a.stage}
- Audience: ${(a.audience||[]).join(", ")}
- Desired customer feeling: ${a.customerFeeling}
- Brand vibe: ${(a.vibe||[]).join(", ")}
- Brand values: ${(a.values||[]).join(", ")}
- Preferred colors: ${(a.colors||[]).join(", ")}
- Colors to avoid: ${a.avoidColors||"none"}
- Typography preferences: ${(a.fontMood||[]).join(", ")}
- Logo preferences: ${(a.logoStyles||[]).join(", ")}
- Symbols to explore: ${a.symbols||"none"}
- Logo elements to avoid: ${(a.avoid||[]).join(", ")}
- Marketing needs: ${(a.marketingNeeds||[]).join(", ")}
- Budget/support level: ${a.budget}

Use only these commonly available free Canva font names:
${CANVA_FONTS.join(", ")}

Choose exactly one membership recommendation from these accurate details:
${mem}

Recommend Blush for foundational marketing, content, social media help, or budgets under about $900.
Recommend Tulip when website updates, Google Business Profile, organization, planning, strategy, or up to four profiles are important.
Recommend Diamond when full marketing creation, full strategy, priority support, Google Business support, or up to six profiles are needed.
Never invent benefits, prices, or guarantees.

Return ONLY valid JSON using this exact shape:
{"archetype":"","archetypeDescription":"","missionStatement":"","brandStory":"","coreValues":["","","",""],"idealCustomer":"","positioningStatement":"","customerExperience":"","brandPromise":"","brandVoice":"","voiceKeywords":["","","","",""],"taglines":["","","","",""],"colors":[{"role":"Primary","hex":"#RRGGBB","name":""},{"role":"Secondary","hex":"#RRGGBB","name":""},{"role":"Accent","hex":"#RRGGBB","name":""},{"role":"Neutral","hex":"#RRGGBB","name":""},{"role":"Background","hex":"#RRGGBB","name":""}],"colorUsage":"","fonts":[{"role":"Display / Heading","name":"","note":""},{"role":"Subheading","name":"","note":""},{"role":"Body","name":"","note":""},{"role":"Accent","name":"","note":""}],"typographyUsage":"","logos":[{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"badge"},{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"geometric"},{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"minimal"},{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"script"},{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"monogram"}],"logoPrompts":["","","","",""],"socialMediaDirection":"","websiteDirection":"","photographyDirection":"","contentThemes":["","","","",""],"actionPlan":["","","","","","","",""],"membershipRecommendation":{"name":"","price":"","reason":""}}
All hex values must be valid six-digit hex codes. Keep the advice specific, encouraging, readable, and practical.`;
  try{
   const r=await fetch("/.netlify/functions/claude",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt})});
   const raw=await r.text();
   let j;
   try{j=JSON.parse(raw)}catch{throw new Error(`The Netlify function returned an unreadable response (${r.status}).`)}
   if(!r.ok||!j.result)throw new Error(j.error||`AI request failed (${r.status})`);
   const cleaned=String(j.result).replace(/```json|```/g,"").trim();
   const first=cleaned.indexOf("{");
   const last=cleaned.lastIndexOf("}");
   if(first<0||last<0||last<=first)throw new Error("The AI response was incomplete. The Netlify function may need a higher max_tokens setting.");
   const parsed=JSON.parse(cleaned.slice(first,last+1));
   setD(parsed);setStep(total+2)
  }catch(e){console.error(e);setErr(`Something went wrong while creating your Blueprint. ${e.message}`);setStep(total+2)}
 }
 const next=()=>step<total?setStep(step+1):(setStep(total+1),generate());
 return <div className="app">{step===0&&<div className="shell"><Logo/><p className="k" style={{marginTop:28}}>The Posh Pink Brand & Logo Blueprint</p><h1 className="title">Build a Brand<br/>That Feels Like You.</h1><p className="copy">Answer a guided set of questions and receive a personalized brand direction—including your archetype, messaging, color palette, free Canva font recommendations, five editable SVG logo concepts, AI-ready logo prompts, and a multi-page downloadable Blueprint.</p><button className="btn" onClick={()=>setStep(1)}>Build My Brand Blueprint</button><p style={{color:C.muted,fontSize:12}}>About 7–10 minutes</p></div>}
 {step>=1&&step<=total&&q&&<div className="shell" key={step}><Logo/><div style={{margin:"28px 0 34px"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:9,fontSize:12,color:C.muted}}><span>{q.s} · Question {step} of {total}</span><b style={{color:C.rose}}>{Math.round(step/total*100)}%</b></div><div className="prog"><div style={{width:`${step/total*100}%`}}/></div></div><p className="k">{q.s}</p><h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,color:C.plum}}>{q.q}</h2><p style={{color:C.muted}}>{q.h}</p>{q.t==="text"&&<input className="input" value={a[q.id]||""} placeholder={q.p} autoFocus onChange={e=>set(q.id,e.target.value,"text")} onKeyDown={e=>e.key==="Enter"&&valid&&next()}/>} {q.t==="area"&&<textarea className="area" value={a[q.id]||""} placeholder={q.p} onChange={e=>set(q.id,e.target.value,"area")}/>} {(q.t==="single"||q.t==="multi")&&<div>{q.o.map(o=>{const on=q.t==="single"?a[q.id]===o:(a[q.id]||[]).includes(o);return <button className={`opt${on?" on":""}`} key={o} onClick={()=>set(q.id,o,q.t)}><span className={`box${q.t==="single"?" radio":""}`}>{on?(q.t==="single"?"●":"✓"):""}</span><span>{o}</span></button>})}</div>}<div style={{display:"flex",justifyContent:"space-between",marginTop:30}}>{step>1?<button className="btn alt" onClick={()=>setStep(step-1)}>← Back</button>:<span/>}<button className="btn" disabled={!valid} onClick={next}>{step===total?"Create My Complete Blueprint":"Continue"}</button></div></div>}
 {step===total+1&&<div className="shell" style={{textAlign:"center"}}><Logo/><div style={{display:"grid",placeItems:"center",padding:"90px 0"}}><div className="spin"/><h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:34,color:C.plum}}>Creating Your Blueprint…</h2><p style={{color:C.muted}}>Building your strategy, visual direction, logo concepts, and recommendations.</p></div></div>}
 {step===total+2&&(err?<div className="shell" style={{textAlign:"center"}}><Logo/><h2 style={{color:C.plum,marginTop:60}}>{err}</h2><button className="btn" onClick={()=>{setErr("");setStep(total+1);generate()}}>Try Again</button></div>:d?<Results d={d} a={a}/>:null)}<Footer/></div>
}
Library
/
Posh-Pink-Blueprint-FIXED-App.txt



import { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";

const C={pink:"#ff1493",rose:"#c2185b",blush:"#fff5f8",soft:"#f8d6e4",plum:"#4b1528",ink:"#21181d",mid:"#5d4a53",muted:"#806d76",line:"#eadde4",white:"#fff"};
const LINKS={
  memberships:"https://www.poshpinkmarketing.com/pricing-plans/memberships",
  store:"https://www.poshpinkmarketing.com/category/all-products",
  contact:"https://www.poshpinkmarketing.com/contact",
  services:"https://www.poshpinkmarketing.com/myservices"
};
const MEMBERSHIPS={
  Blush:{name:"The Blush Membership",price:"$595/month + $200 startup",summary:"Up to 10 hours of marketing support, personalized advice, social media management, a quick marketing audit, content creation, and a marketing kit."},
  Tulip:{name:"The Tulip Membership",price:"$895/month + $300 startup",summary:"Everything in Blush, plus website updates, Google Business Profile management, marketing planning, a business organization audit, strategy setup, and management of up to four social profiles."},
  Diamond:{name:"The Diamond Membership",price:"$1,395/month + $400 startup",summary:"Everything in Blush and Tulip, plus full marketing and business strategy support, Google Business support, priority support, and management of up to six social profiles."}
};
const CANVA_FONTS=["Playfair Display","Cormorant Garamond","Libre Baskerville","Merriweather","Cinzel","Montserrat","Poppins","Raleway","Lato","Open Sans","DM Sans","League Spartan","Bebas Neue","Nunito","Quicksand"];

const Q=[
{id:"businessName",s:"Your Business",t:"text",q:"What is your business name?",h:"This will appear throughout your Brand & Logo Blueprint.",p:"Enter your business name…",r:1},
{id:"tagline",s:"Your Business",t:"text",q:"Do you already have a tagline?",h:"Optional. Leave this blank and I’ll create ideas for you.",p:"Enter your tagline, or leave blank…"},
{id:"industry",s:"Your Business",t:"single",q:"Which industry best describes your business?",h:"Choose the closest fit.",o:["Beauty & Wellness","Health & Medical","Real Estate","Professional Services","Boutique Retail","Events & Hospitality","Pet Services","Creative & Design","Coaching & Education","Restaurant & Food","Fitness & Sports","Tech & Digital","Home Services","Other"],r:1},
{id:"offer",s:"Your Business",t:"area",q:"What do you sell or provide?",h:"A short description is perfect.",p:"Describe your main products or services…",r:1},
{id:"stage",s:"Your Business",t:"single",q:"Where are you in your business journey?",h:"This helps personalize your next steps.",o:["Planning or pre-launch","Newly launched","Established but inconsistent","Growing and ready to scale","Rebranding an existing business"],r:1},
{id:"audience",s:"Your Audience",t:"multi",q:"Who are you trying to reach?",h:"Select all that apply.",o:["Busy professionals","Small business owners","Families or homeowners","Women-focused audience","Health-conscious customers","Luxury buyers","Budget-conscious customers","Local customers","Online or national audience","Creatives and entrepreneurs"],r:1},
{id:"customerFeeling",s:"Your Audience",t:"single",q:"How should customers feel when they experience your brand?",h:"Choose the feeling that matters most.",o:["Confident and reassured","Inspired and excited","Calm and cared for","Welcomed and understood","Impressed and elevated","Energized and motivated","Curious and creative"],r:1},
{id:"vibe",s:"Brand Personality",t:"multi",q:"Which words feel most like your ideal brand?",h:"Select all that resonate.",o:["Luxurious & refined","Warm & approachable","Bold & modern","Playful & vibrant","Clean & minimal","Natural & organic","Elegant & feminine","Professional & credible","Creative & expressive","Classic & timeless"],r:1},
{id:"values",s:"Brand Personality",t:"multi",q:"Which values should your brand communicate?",h:"Choose the values you want customers to notice.",o:["Trust","Quality","Creativity","Care","Innovation","Simplicity","Expertise","Community","Luxury","Reliability"],r:1},
{id:"colors",s:"Visual Direction",t:"multi",q:"Which color families appeal to you?",h:"Select your favorites.",o:["Soft pinks & blush","Deep burgundy & wine","Black & white","Gold & champagne","Navy & midnight blue","Sage & olive green","Terracotta & rust","Lavender & purple","Teal & turquoise","Warm neutrals"],r:1},
{id:"avoidColors",s:"Visual Direction",t:"text",q:"Are there any colors you want to avoid?",h:"Optional.",p:"Example: neon colors, bright orange…"},
{id:"fontMood",s:"Visual Direction",t:"multi",q:"Which typography styles appeal to you?",h:"Select all that fit.",o:["Elegant serif","Clean sans serif","Bold statement font","Friendly rounded font","Classic editorial","Modern minimal","Handwritten accent","No preference"],r:1},
{id:"logoStyles",s:"Logo Direction",t:"multi",q:"Which logo styles appeal to you?",h:"Select all that resonate.",o:["Wordmark","Monogram","Badge or emblem","Icon plus business name","Minimal symbol","Geometric","Handwritten or organic","Classic and timeless"],r:1},
{id:"symbols",s:"Logo Direction",t:"text",q:"Are there symbols or images you would like explored?",h:"Optional. You can also say “none” or “surprise me.”",p:"Example: flower, house, star, leaf, initials…"},
{id:"avoid",s:"Logo Direction",t:"multi",q:"What should the logo avoid?",h:"Select all that apply.",o:["Too many colors","Clip art or generic icons","Script or cursive fonts","All-caps text","Dark or moody tones","Overly complex designs","Anything too trendy","Nothing — surprise me"],r:1},
{id:"marketingNeeds",s:"Marketing Readiness",t:"multi",q:"Where would more support help most?",h:"Select all that apply.",o:["Brand clarity","Logo and visual identity","Social media management","Content creation","Website updates","Google Business Profile","Marketing planning","Business strategy","Ongoing full marketing support"],r:1},
{id:"budget",s:"Marketing Readiness",t:"single",q:"What level of monthly marketing support are you considering?",h:"This helps match you with the best next step.",o:["DIY resources only","Under $600 per month","$600–$900 per month","$900–$1,400 per month","$1,400+ per month","I’m not sure yet"],r:1}
];

function styles(){
 if(document.getElementById("ppbl"))return;
 const x=document.createElement("style");x.id="ppbl";x.textContent=`
 @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:wght@400;500;600;700&family=Lato:wght@400;700&family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@0,600;1,600&family=Poppins:wght@500;600&family=Raleway:wght@500;600&display=swap');
 *{box-sizing:border-box}body{margin:0;background:#fff}.app{min-height:100vh;background:#fff;color:${C.ink};font-family:'DM Sans',sans-serif}.shell{max-width:760px;margin:auto;padding:42px 24px 96px}.logo{display:block;width:auto;height:64px;max-width:300px;object-fit:contain}.k{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${C.rose};font-weight:700}.title{font-family:'Cormorant Garamond',serif;font-size:58px;line-height:.98;color:${C.plum};margin:14px 0 18px}.copy{font-size:15px;line-height:1.85;color:${C.mid};max-width:650px}.btn{border:0;border-radius:8px;background:${C.plum};color:#fff;padding:15px 26px;font-weight:700;cursor:pointer;box-shadow:0 6px 18px rgba(75,21,40,.12)}.btn:hover{background:${C.rose}}.btn:disabled{opacity:.35;cursor:not-allowed}.btn.alt{background:#fff;color:${C.rose};border:1px solid ${C.soft};box-shadow:none}.btn.sm{padding:10px 14px;font-size:12px}.prog{height:5px;background:${C.blush};border-radius:20px;overflow:hidden}.prog div{height:100%;background:linear-gradient(90deg,${C.rose},${C.pink});transition:.3s}.opt{-webkit-appearance:none;appearance:none;width:100%;display:flex;align-items:center;gap:13px;text-align:left;border:1.5px solid ${C.line};background:#fff;border-radius:10px;padding:15px 16px;margin:10px 0;cursor:pointer;color:${C.mid};font-size:15px;line-height:1.35;font-family:'DM Sans',sans-serif}.opt:hover,.opt.on{border-color:${C.pink};background:${C.blush}}.box{width:20px;height:20px;border:1.5px solid #cbb9c2;border-radius:5px;display:flex;align-items:center;justify-content:center;flex:0 0 auto}.box.radio{border-radius:50%}.opt.on .box{background:${C.pink};border-color:${C.pink};color:#fff}.input,.area{display:block;width:100%;min-height:58px;border:1.5px solid ${C.line};border-radius:10px;padding:16px 18px;color:${C.ink};background:#fff;outline:none;font-size:19px;line-height:1.4}.input:focus,.area:focus{border-color:${C.pink};box-shadow:0 0 0 3px rgba(255,20,147,.08)}.area{min-height:120px;resize:vertical}.foot{position:fixed;left:0;right:0;bottom:0;background:${C.soft};border-top:1px solid #efc9d9;padding:11px 18px;z-index:30}.footin{max-width:960px;margin:auto;display:flex;justify-content:center;gap:9px;flex-wrap:wrap;font-size:11px;color:${C.plum}}.sec{padding:30px 0;border-bottom:1px solid ${C.line}}.label{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:${C.rose};font-weight:700;margin-bottom:12px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.card{border:1px solid ${C.line};border-radius:14px;background:#fff;padding:22px}.swatches{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.swatch{height:85px;border-radius:10px;border:1px solid ${C.line};display:flex;align-items:flex-end;padding:8px}.logos{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.logoCard{border:1px solid ${C.line};border-radius:12px;padding:18px}.preview{min-height:190px;display:flex;align-items:center;justify-content:center;overflow:auto}.chip{display:inline-flex;border:1px solid ${C.soft};background:${C.blush};color:${C.rose};border-radius:999px;padding:7px 11px;margin:4px;font-size:11px;font-weight:600}.prompt{white-space:pre-wrap;background:${C.blush};border:1px solid ${C.soft};padding:15px;border-radius:10px;font-size:12px;line-height:1.7;color:${C.mid}}@keyframes spin{to{transform:rotate(360deg)}}.spin{width:44px;height:44px;border-radius:50%;border:3px solid ${C.soft};border-top-color:${C.pink};animation:spin 1s linear infinite}@media(max-width:640px){.title{font-size:46px}.grid,.logos{grid-template-columns:1fr}.swatches{grid-template-columns:repeat(2,1fr)}.logo{height:54px;max-width:250px}}
 `;document.head.appendChild(x)
}
const Logo=()=> <img className="logo" src="/logo.png" alt="Posh Pink Marketing"/>;
const Footer=()=> <div className="foot"><div className="footin"><b>The Posh Pink Brand</b><span>•</span><span>hello@poshpinkmarketing.com</span><span>•</span><span>www.poshpinkmarketing.com</span></div></div>;
const esc=(s="")=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const safe=(s="blueprint")=>s.trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase();
const rgb=h=>{h=/^#[0-9a-f]{6}$/i.test(h||"")?h:"#4b1528";return[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)]};

function svg(logo,biz,tagline){
 const name=esc(biz||"Your Brand"),tag=esc(tagline||""),init=esc((biz||"YB").split(/\s+/).filter(Boolean).map(w=>w[0]).join("").slice(0,2).toUpperCase());
 const p=logo.primaryColor||C.rose,s=logo.secondaryColor||C.plum,a=logo.accentColor||C.soft,id=Math.random().toString(36).slice(2,8);
 const t={
 badge:`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420" viewBox="0 0 420 420"><defs><linearGradient id="g${id}"><stop stop-color="${p}"/><stop offset="1" stop-color="${s}"/></linearGradient></defs><circle cx="210" cy="210" r="168" fill="${a}" opacity=".28"/><circle cx="210" cy="210" r="166" fill="none" stroke="url(#g${id})" stroke-width="4"/><circle cx="210" cy="210" r="145" fill="none" stroke="${p}" stroke-width="1.5" stroke-dasharray="7 7"/><text x="210" y="196" text-anchor="middle" font-family="Georgia,serif" font-size="72" font-weight="bold" fill="${s}">${init}</text><line x1="105" y1="225" x2="315" y2="225" stroke="${p}" stroke-width="2"/><text x="210" y="258" text-anchor="middle" font-family="Arial" font-size="17" font-weight="bold" letter-spacing="4" fill="${s}">${name.toUpperCase()}</text>${tag?`<text x="210" y="286" text-anchor="middle" font-family="Arial" font-size="12" fill="${p}">${tag}</text>`:""}</svg>`,
 geometric:`<svg xmlns="http://www.w3.org/2000/svg" width="520" height="260" viewBox="0 0 520 260"><polygon points="90,35 175,130 90,225 5,130" fill="${a}" opacity=".3"/><polygon points="90,42 167,130 90,218 13,130" fill="none" stroke="${p}" stroke-width="4"/><text x="90" y="145" text-anchor="middle" font-family="Arial" font-size="34" font-weight="bold" fill="${s}">${init}</text><line x1="200" y1="70" x2="200" y2="190" stroke="${p}" stroke-width="3"/><text x="225" y="124" font-family="Arial" font-size="28" font-weight="bold" letter-spacing="3" fill="${s}">${name.toUpperCase()}</text>${tag?`<text x="225" y="157" font-family="Arial" font-size="13" fill="${p}">${tag.toUpperCase()}</text>`:""}</svg>`,
 minimal:`<svg xmlns="http://www.w3.org/2000/svg" width="520" height="240" viewBox="0 0 520 240"><circle cx="260" cy="42" r="6" fill="${p}"/><line x1="260" y1="52" x2="260" y2="76" stroke="${p}" stroke-width="2"/><text x="260" y="126" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="38" fill="${s}">${name}</text><line x1="80" y1="145" x2="440" y2="145" stroke="${p}" stroke-width="2"/>${tag?`<text x="260" y="177" text-anchor="middle" font-family="Arial" font-size="13" fill="${p}">${tag.toUpperCase()}</text>`:""}</svg>`,
 script:`<svg xmlns="http://www.w3.org/2000/svg" width="520" height="280" viewBox="0 0 520 280"><path d="M45 145 C120 35,195 35,260 140 C325 245,400 245,475 135" fill="none" stroke="${a}" stroke-width="18" opacity=".45"/><text x="260" y="145" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="46" fill="${s}">${name}</text><line x1="115" y1="165" x2="405" y2="165" stroke="${p}" stroke-width="2"/>${tag?`<text x="260" y="198" text-anchor="middle" font-family="Arial" font-size="13" fill="${p}">${tag.toUpperCase()}</text>`:""}</svg>`,
 monogram:`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420" viewBox="0 0 420 420"><circle cx="210" cy="175" r="122" fill="${a}" opacity=".3"/><circle cx="210" cy="175" r="122" fill="none" stroke="${p}" stroke-width="4"/><text x="210" y="215" text-anchor="middle" font-family="Georgia,serif" font-size="118" font-weight="bold" fill="${s}">${init}</text><line x1="100" y1="330" x2="320" y2="330" stroke="${p}" stroke-width="2"/><text x="210" y="365" text-anchor="middle" font-family="Arial" font-size="17" font-weight="bold" letter-spacing="4" fill="${s}">${name.toUpperCase()}</text></svg>`
 };return t[logo.svgStyle]||t.minimal
}
function dlSvg(x,biz,i){const b=new Blob([x],{type:"image/svg+xml"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download=`${safe(biz)}-logo-${String.fromCharCode(65+i)}.svg`;a.click();setTimeout(()=>URL.revokeObjectURL(u),400)}
const imgData=src=>new Promise(r=>{const i=new Image();i.crossOrigin="anonymous";i.onload=()=>{const c=document.createElement("canvas");c.width=i.naturalWidth;c.height=i.naturalHeight;c.getContext("2d").drawImage(i,0,0);r(c.toDataURL("image/png"))};i.onerror=()=>r(null);i.src=src});

async function pdf(d,a){
 const doc=new jsPDF({unit:"mm",format:"a4"}),W=210,H=297,M=18,lg=await imgData("/logo.png");let pg=0;
 const footer=()=>{doc.setFillColor(...rgb(C.soft));doc.rect(0,H-18,W,18,"F");if(lg)try{doc.addImage(lg,"PNG",12,H-15.5,26,10.5)}catch{}doc.setFont("helvetica","bold");doc.setFontSize(7.2);doc.setTextColor(...rgb(C.plum));doc.text("hello@poshpinkmarketing.com",48,H-10.5);doc.text("www.poshpinkmarketing.com",48,H-5.5);doc.setFont("helvetica","normal");doc.text(`The Posh Pink Brand & Logo Blueprint • ${pg}`,W-12,H-7.5,{align:"right"})};
 const page=(title,sub="")=>{if(pg)doc.addPage();pg++;doc.setFillColor(255,255,255);doc.rect(0,0,W,H,"F");doc.setFillColor(...rgb(C.plum));doc.rect(0,0,W,6,"F");doc.setFont("helvetica","bold");doc.setTextColor(...rgb(C.plum));doc.setFontSize(20);doc.text(title,M,25);if(sub){doc.setFont("helvetica","normal");doc.setFontSize(8.5);doc.setTextColor(...rgb(C.muted));doc.text(sub,M,32)}doc.setDrawColor(...rgb(C.soft));doc.line(M,38,W-M,38);footer();return 48};
 const head=(t,y)=>{doc.setFont("helvetica","bold");doc.setFontSize(10);doc.setTextColor(...rgb(C.rose));doc.text(t.toUpperCase(),M,y);return y+7};
 const para=(t,y,size=9.2)=>{doc.setFont("helvetica","normal");doc.setFontSize(size);doc.setTextColor(...rgb(C.mid));const l=doc.splitTextToSize(t||"",W-M*2);doc.text(l,M,y);return y+l.length*(size*.48)+5};
 pg=1;doc.setFillColor(255,255,255);doc.rect(0,0,W,H,"F");doc.setFillColor(...rgb(C.plum));doc.rect(0,0,W,68,"F");if(lg)try{doc.addImage(lg,"PNG",M,16,46,19)}catch{}doc.setFont("helvetica","bold");doc.setTextColor(255,255,255);doc.setFontSize(25);doc.text((a.businessName||"Your Business").slice(0,34),M,53);doc.setTextColor(...rgb(C.rose));doc.setFontSize(9);doc.text("THE POSH PINK BRAND & LOGO BLUEPRINT",M,83);doc.setTextColor(...rgb(C.plum));doc.setFontSize(28);doc.text("Your Complete Brand Direction",M,102);doc.setFont("helvetica","normal");doc.setFontSize(11);doc.setTextColor(...rgb(C.mid));doc.text(doc.splitTextToSize("A personalized guide to your strategy, visual identity, logo direction, messaging, marketing presence, and next best steps.",W-M*2),M,118);footer();
 let y=page("Brand Foundation","Your strategic brand summary");y=head("Brand Archetype",y);doc.setFont("helvetica","bolditalic");doc.setFontSize(18);doc.setTextColor(...rgb(C.plum));doc.text(d.archetype||"",M,y);y+=10;y=para(d.archetypeDescription,y);y=head("Mission Statement",y+3);y=para(d.missionStatement,y);y=head("Brand Story",y+3);y=para(d.brandStory,y);y=head("Core Values",y+3);para((d.coreValues||[]).join(" • "),y);
 y=page("Audience & Positioning","Who your brand is designed to reach");y=head("Ideal Customer",y);y=para(d.idealCustomer,y);y=head("Positioning Statement",y+5);y=para(d.positioningStatement,y);y=head("Customer Experience",y+5);y=para(d.customerExperience,y);y=head("Brand Promise",y+5);para(d.brandPromise,y);
 y=page("Voice & Messaging","How your brand should sound and connect");y=head("Brand Voice",y);y=para(d.brandVoice,y);y=head("Signature Keywords",y+5);let x=M,cy=y;doc.setFont("helvetica","bold");doc.setFontSize(7.5);(d.voiceKeywords||[]).forEach(w=>{const z=String(w).toUpperCase(),ww=Math.max(25,doc.getTextWidth(z)+10);if(x+ww>W-M){x=M;cy+=12}doc.setFillColor(...rgb(C.blush));doc.setDrawColor(...rgb(C.pink));doc.roundedRect(x,cy-6,ww,9,2,2,"FD");doc.setTextColor(...rgb(C.rose));doc.text(z,x+ww/2,cy,{align:"center"});x+=ww+4});y=cy+16;y=head("Tagline Ideas",y);(d.taglines||[]).forEach((t,i)=>{doc.setFont("helvetica","italic");doc.setFontSize(10);doc.setTextColor(...rgb(C.plum));const l=doc.splitTextToSize(`${i+1}. “${t}”`,W-M*2);doc.text(l,M,y);y+=l.length*5+5});
 y=page("Color Palette","A printer-friendly visual system with clear color roles");const cols=d.colors||[],roles=["Primary","Secondary","Accent","Neutral","Background"],sw=31,g=4;cols.slice(0,5).forEach((c,i)=>{const xx=M+i*(sw+g);doc.setFillColor(...rgb(c.hex));doc.roundedRect(xx,y,sw,34,2,2,"F");doc.setDrawColor(...rgb(C.line));doc.rect(xx,y,sw,34);doc.setFont("helvetica","bold");doc.setFontSize(6.8);doc.setTextColor(...rgb(C.plum));doc.text(roles[i]||c.role||"",xx+sw/2,y+42,{align:"center"});doc.setFont("helvetica","normal");doc.setFontSize(6.5);doc.text(c.hex||"",xx+sw/2,y+48,{align:"center"});doc.text(c.name||"",xx+sw/2,y+54,{align:"center"})});y+=68;y=head("How to Use Your Palette",y);para(d.colorUsage,y);
 y=page("Typography","Free font recommendations commonly available in Canva");(d.fonts||[]).forEach((f,i)=>{doc.setFillColor(...rgb(i%2?C.white:C.blush));doc.setDrawColor(...rgb(C.soft));doc.roundedRect(M,y,W-M*2,35,3,3,"FD");doc.setFont("helvetica","bold");doc.setFontSize(8);doc.setTextColor(...rgb(C.rose));doc.text((f.role||"").toUpperCase(),M+8,y+9);doc.setFont("helvetica","bolditalic");doc.setFontSize(15);doc.setTextColor(...rgb(C.plum));doc.text(f.name||"",M+8,y+21);doc.setFont("helvetica","normal");doc.setFontSize(7.8);doc.setTextColor(...rgb(C.muted));doc.text(doc.splitTextToSize(f.note||"",W-M*2-75),M+72,y+13);y+=42});y=head("Typography Guidance",y+3);para(d.typographyUsage,y);
 y=page("Logo Direction","Five editable SVG concepts and the thinking behind them");(d.logos||[]).forEach((l,i)=>{doc.setFillColor(...rgb(C.blush));doc.setDrawColor(...rgb(C.soft));doc.roundedRect(M,y,W-M*2,32,3,3,"FD");doc.setFont("helvetica","bold");doc.setFontSize(8.5);doc.setTextColor(...rgb(C.rose));doc.text(`CONCEPT ${String.fromCharCode(65+i)} — ${l.styleName||""}`,M+8,y+10);doc.setFont("helvetica","normal");doc.setFontSize(8);doc.setTextColor(...rgb(C.mid));doc.text(doc.splitTextToSize(l.description||"",W-M*2-16),M+8,y+19);y+=38});y=head("Logo Use Note",y+4);para("These SVG concepts are editable starting points for creative direction. Before commercial use, customize your chosen concept and confirm that it does not conflict with an existing trademark.",y);
 y=page("AI-Ready Logo Prompts","Copy these prompts into your preferred AI image or design tool");(d.logoPrompts||[]).forEach((p,i)=>{if(y>258)y=page("AI-Ready Logo Prompts","Continued");doc.setFont("helvetica","bold");doc.setFontSize(8);doc.setTextColor(...rgb(C.pink));doc.text(`PROMPT ${i+1}`,M,y);y+=5;doc.setFont("helvetica","normal");doc.setFontSize(7.6);doc.setTextColor(...rgb(C.mid));const l=doc.splitTextToSize(p||"",W-M*2);doc.text(l,M,y);y+=l.length*3.9+7});
 y=page("Digital Brand Direction","How your visual identity can show up online");y=head("Social Media Direction",y);y=para(d.socialMediaDirection,y);y=head("Website Direction",y+5);y=para(d.websiteDirection,y);y=head("Photography & Graphics",y+5);y=para(d.photographyDirection,y);y=head("Content Themes",y+5);(d.contentThemes||[]).forEach((t,i)=>{doc.setFont("helvetica","normal");doc.setFontSize(8.3);doc.setTextColor(...rgb(C.mid));const l=doc.splitTextToSize(`${i+1}. ${t}`,W-M*2);doc.text(l,M,y);y+=l.length*4+4});
 y=page("Your Brand Action Plan","Practical steps to put your new direction to work");(d.actionPlan||[]).forEach((t,i)=>{doc.setFillColor(...rgb(C.blush));doc.setDrawColor(...rgb(C.pink));doc.roundedRect(M,y-6,8,8,2,2,"FD");doc.setFont("helvetica","bold");doc.setFontSize(8);doc.setTextColor(...rgb(C.rose));doc.text(String(i+1),M+4,y,{align:"center"});doc.setFont("helvetica","normal");doc.setTextColor(...rgb(C.mid));const l=doc.splitTextToSize(t||"",W-M*2-14);doc.text(l,M+14,y);y+=Math.max(12,l.length*4.2+6)});
 y=page("Recommended Posh Pink Support","Your personalized next best step");const r=d.membershipRecommendation||{};doc.setFillColor(...rgb(C.blush));doc.setDrawColor(...rgb(C.pink));doc.roundedRect(M,y,W-M*2,64,4,4,"FD");doc.setFont("helvetica","bold");doc.setFontSize(16);doc.setTextColor(...rgb(C.plum));doc.text(r.name||"Explore Posh Pink Memberships",M+10,y+16);doc.setFontSize(10);doc.setTextColor(...rgb(C.rose));doc.text(r.price||"",M+10,y+26);doc.setFont("helvetica","normal");doc.setFontSize(8.5);doc.setTextColor(...rgb(C.mid));doc.text(doc.splitTextToSize(r.reason||"",W-M*2-20),M+10,y+38);y+=76;[["Memberships",LINKS.memberships],["Marketing Services",LINKS.services],["The Posh Pink Store",LINKS.store],["Contact Tara",LINKS.contact]].forEach(([l,u])=>{doc.setFont("helvetica","bold");doc.setFontSize(9);doc.setTextColor(...rgb(C.rose));doc.textWithLink(l,M,y,{url:u});doc.setFont("helvetica","normal");doc.setFontSize(7.5);doc.setTextColor(...rgb(C.muted));doc.text(u,M+42,y);y+=12});
 doc.save(`${safe(a.businessName)}-posh-pink-brand-logo-blueprint.pdf`)
}

function Copy({text}){const[ok,setOk]=useState(false);return <button className="btn alt sm" onClick={async()=>{try{await navigator.clipboard.writeText(text);setOk(true);setTimeout(()=>setOk(false),1200)}catch{alert("Please copy the prompt manually.")}}}>{ok?"Copied!":"Copy Prompt"}</button>}
function Results({d,a}){
 const[busy,setBusy]=useState(false),tag=(d.taglines||[])[0]||a.tagline||"";
 return <><section style={{background:C.blush,padding:"42px 24px",borderBottom:`1px solid ${C.line}`}}><div style={{maxWidth:960,margin:"auto"}}><p className="k">Your Blueprint Is Ready</p><h1 className="title" style={{fontSize:50}}>{a.businessName}</h1><p className="copy">{d.archetypeDescription}</p><button className="btn" onClick={async()=>{setBusy(true);try{await pdf(d,a)}catch(e){console.error(e);alert(e.message)}setBusy(false)}}>{busy?"Creating PDF…":"Download My Complete Blueprint PDF"}</button></div></section><main style={{maxWidth:960,margin:"auto",padding:"0 24px 110px"}}>
 <section className="sec"><p className="label">Brand Archetype</p><h2 style={{fontFamily:"'Cormorant Garamond',serif",color:C.plum,fontSize:40}}>{d.archetype}</h2><p className="copy">{d.archetypeDescription}</p></section>
 <section className="sec"><p className="label">Signature Color Palette</p><div className="swatches">{(d.colors||[]).map((c,i)=><div key={i}><div className="swatch" style={{background:c.hex}}><span style={{background:"rgba(255,255,255,.88)",padding:"4px 6px",borderRadius:5,fontSize:10}}>{c.hex}</span></div><p style={{fontSize:12,color:C.mid}}>{c.role}: {c.name}</p></div>)}</div></section>
 <section className="sec"><p className="label">Typography</p><div className="grid">{(d.fonts||[]).map((f,i)=><div className="card" key={i}><small style={{color:C.rose,fontWeight:700}}>{f.role}</small><h3 style={{fontFamily:`'${f.name}',sans-serif`,color:C.plum,fontSize:27}}>{f.name}</h3><p style={{color:C.muted,lineHeight:1.7,fontSize:13}}>{f.note}</p></div>)}</div></section>
 <section className="sec"><p className="label">Brand Voice & Keywords</p>{(d.voiceKeywords||[]).map((w,i)=><span className="chip" key={i}>{w}</span>)}<h3 style={{fontFamily:"'Cormorant Garamond',serif",color:C.plum,fontSize:30}}>Tagline Ideas</h3>{(d.taglines||[]).map((t,i)=><p key={i}>“{t}”</p>)}</section>
 <section className="sec"><p className="label">Logo Concepts</p><p className="copy">Download each concept as an editable SVG starting point. These are creative directions, not final trademark-cleared logos.</p><div className="logos">{(d.logos||[]).map((l,i)=>{const x=svg(l,a.businessName,tag);return <div className="logoCard" key={i}><p className="label">Concept {String.fromCharCode(65+i)} · {l.styleName}</p><div className="preview" dangerouslySetInnerHTML={{__html:x}}/><p style={{color:C.muted,fontSize:12,lineHeight:1.6}}>{l.description}</p><button className="btn alt sm" onClick={()=>dlSvg(x,a.businessName,i)}>Download SVG</button></div>})}</div></section>
 <section className="sec"><p className="label">AI-Ready Logo Prompts</p><div style={{display:"grid",gap:12}}>{(d.logoPrompts||[]).map((p,i)=><div className="card" key={i}><b style={{color:C.rose}}>Prompt {i+1}</b><p className="prompt">{p}</p><Copy text={p}/></div>)}</div></section>
 <section className="sec"><p className="label">Recommended Next Step</p><div className="card" style={{background:C.blush}}><h2 style={{color:C.plum}}>{d.membershipRecommendation?.name}</h2><b style={{color:C.rose}}>{d.membershipRecommendation?.price}</b><p className="copy">{d.membershipRecommendation?.reason}</p><a href={LINKS.memberships} target="_blank" rel="noreferrer"><button className="btn">Explore Memberships</button></a></div></section>
 </main></>
}

export default function App(){
 useEffect(styles,[]);const[step,setStep]=useState(0),[a,setA]=useState({}),[d,setD]=useState(null),[err,setErr]=useState("");const q=Q[step-1],total=Q.length;
 const valid=useMemo(()=>{if(!q)return false;const v=a[q.id];if(!q.r)return true;if(q.t==="text"||q.t==="area")return !!v?.trim();if(q.t==="single")return !!v;return Array.isArray(v)&&v.length},[q,a]);
 const set=(id,v,t)=>t==="multi"?setA(p=>{const c=p[id]||[];return{...p,[id]:c.includes(v)?c.filter(x=>x!==v):[...c,v]}}):setA(p=>({...p,[id]:v}));
 async function generate(){
  const mem=Object.values(MEMBERSHIPS).map(m=>`${m.name}: ${m.price}. ${m.summary}`).join("\n");
  const prompt=`You are an experienced small-business brand strategist and logo-direction specialist working for The Posh Pink Brand.
Create a complete, practical Brand & Logo Blueprint for "${a.businessName}".

Business details:
- Existing tagline: ${a.tagline||"none"}
- Industry: ${a.industry}
- Main offer: ${a.offer}
- Business stage: ${a.stage}
- Audience: ${(a.audience||[]).join(", ")}
- Desired customer feeling: ${a.customerFeeling}
- Brand vibe: ${(a.vibe||[]).join(", ")}
- Brand values: ${(a.values||[]).join(", ")}
- Preferred colors: ${(a.colors||[]).join(", ")}
- Colors to avoid: ${a.avoidColors||"none"}
- Typography preferences: ${(a.fontMood||[]).join(", ")}
- Logo preferences: ${(a.logoStyles||[]).join(", ")}
- Symbols to explore: ${a.symbols||"none"}
- Logo elements to avoid: ${(a.avoid||[]).join(", ")}
- Marketing needs: ${(a.marketingNeeds||[]).join(", ")}
- Budget/support level: ${a.budget}

Use only these commonly available free Canva font names:
${CANVA_FONTS.join(", ")}

Choose exactly one membership recommendation from these accurate details:
${mem}

Recommend Blush for foundational marketing, content, social media help, or budgets under about $900.
Recommend Tulip when website updates, Google Business Profile, organization, planning, strategy, or up to four profiles are important.
Recommend Diamond when full marketing creation, full strategy, priority support, Google Business support, or up to six profiles are needed.
Never invent benefits, prices, or guarantees.

Return ONLY valid JSON using this exact shape:
{"archetype":"","archetypeDescription":"","missionStatement":"","brandStory":"","coreValues":["","","",""],"idealCustomer":"","positioningStatement":"","customerExperience":"","brandPromise":"","brandVoice":"","voiceKeywords":["","","","",""],"taglines":["","","","",""],"colors":[{"role":"Primary","hex":"#RRGGBB","name":""},{"role":"Secondary","hex":"#RRGGBB","name":""},{"role":"Accent","hex":"#RRGGBB","name":""},{"role":"Neutral","hex":"#RRGGBB","name":""},{"role":"Background","hex":"#RRGGBB","name":""}],"colorUsage":"","fonts":[{"role":"Display / Heading","name":"","note":""},{"role":"Subheading","name":"","note":""},{"role":"Body","name":"","note":""},{"role":"Accent","name":"","note":""}],"typographyUsage":"","logos":[{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"badge"},{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"geometric"},{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"minimal"},{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"script"},{"styleName":"","description":"","primaryColor":"#RRGGBB","secondaryColor":"#RRGGBB","accentColor":"#RRGGBB","svgStyle":"monogram"}],"logoPrompts":["","","","",""],"socialMediaDirection":"","websiteDirection":"","photographyDirection":"","contentThemes":["","","","",""],"actionPlan":["","","","","","","",""],"membershipRecommendation":{"name":"","price":"","reason":""}}
All hex values must be valid six-digit hex codes. Keep the advice specific, encouraging, readable, and practical.`;
  try{
   const r=await fetch("/.netlify/functions/claude",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt})});
   const raw=await r.text();
   let j;
   try{j=JSON.parse(raw)}catch{throw new Error(`The Netlify function returned an unreadable response (${r.status}).`)}
   if(!r.ok||!j.result)throw new Error(j.error||`AI request failed (${r.status})`);
   const cleaned=String(j.result).replace(/```json|```/g,"").trim();
   const first=cleaned.indexOf("{");
   const last=cleaned.lastIndexOf("}");
   if(first<0||last<0||last<=first)throw new Error("The AI response was incomplete. The Netlify function may need a higher max_tokens setting.");
   const parsed=JSON.parse(cleaned.slice(first,last+1));
   setD(parsed);setStep(total+2)
  }catch(e){console.error(e);setErr(`Something went wrong while creating your Blueprint. ${e.message}`);setStep(total+2)}
 }
 const next=()=>step<total?setStep(step+1):(setStep(total+1),generate());
 return <div className="app">{step===0&&<div className="shell"><Logo/><p className="k" style={{marginTop:28}}>The Posh Pink Brand & Logo Blueprint</p><h1 className="title">Build a Brand<br/>That Feels Like You.</h1><p className="copy">Answer a guided set of questions and receive a personalized brand direction—including your archetype, messaging, color palette, free Canva font recommendations, five editable SVG logo concepts, AI-ready logo prompts, and a multi-page downloadable Blueprint.</p><button className="btn" onClick={()=>setStep(1)}>Build My Brand Blueprint</button><p style={{color:C.muted,fontSize:12}}>About 7–10 minutes</p></div>}
 {step>=1&&step<=total&&q&&<div className="shell" key={step}><Logo/><div style={{margin:"28px 0 34px"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:9,fontSize:12,color:C.muted}}><span>{q.s} · Question {step} of {total}</span><b style={{color:C.rose}}>{Math.round(step/total*100)}%</b></div><div className="prog"><div style={{width:`${step/total*100}%`}}/></div></div><p className="k">{q.s}</p><h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,color:C.plum}}>{q.q}</h2><p style={{color:C.muted}}>{q.h}</p>{q.t==="text"&&<input className="input" value={a[q.id]||""} placeholder={q.p} autoFocus onChange={e=>set(q.id,e.target.value,"text")} onKeyDown={e=>e.key==="Enter"&&valid&&next()}/>} {q.t==="area"&&<textarea className="area" value={a[q.id]||""} placeholder={q.p} onChange={e=>set(q.id,e.target.value,"area")}/>} {(q.t==="single"||q.t==="multi")&&<div>{q.o.map(o=>{const on=q.t==="single"?a[q.id]===o:(a[q.id]||[]).includes(o);return <button className={`opt${on?" on":""}`} key={o} onClick={()=>set(q.id,o,q.t)}><span className={`box${q.t==="single"?" radio":""}`}>{on?(q.t==="single"?"●":"✓"):""}</span><span>{o}</span></button>})}</div>}<div style={{display:"flex",justifyContent:"space-between",marginTop:30}}>{step>1?<button className="btn alt" onClick={()=>setStep(step-1)}>← Back</button>:<span/>}<button className="btn" disabled={!valid} onClick={next}>{step===total?"Create My Complete Blueprint":"Continue"}</button></div></div>}
 {step===total+1&&<div className="shell" style={{textAlign:"center"}}><Logo/><div style={{display:"grid",placeItems:"center",padding:"90px 0"}}><div className="spin"/><h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:34,color:C.plum}}>Creating Your Blueprint…</h2><p style={{color:C.muted}}>Building your strategy, visual direction, logo concepts, and recommendations.</p></div></div>}
 {step===total+2&&(err?<div className="shell" style={{textAlign:"center"}}><Logo/><h2 style={{color:C.plum,marginTop:60}}>{err}</h2><button className="btn" onClick={()=>{setErr("");setStep(total+1);generate()}}>Try Again</button></div>:d?<Results d={d} a={a}/>:null)}<Footer/></div>
}
