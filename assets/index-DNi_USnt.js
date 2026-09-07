(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const s={cardCount:25,loremText:"Рыбный текст — это просто текст-заполнитель, который используется в типографике и веб-дизайне. Он помогает визуально оценить, как будет выглядеть страница с контентом, не отвлекаясь на смысл.",cardTitle:"Карточка",categoryPrefix:"Категория"},d=document.getElementById("cards-grid");for(let t=1;t<=s.cardCount;t++){const o=document.createElement("div");o.className="card",o.innerHTML=`
        <div class="card_image">
            <img src="https://picsum.photos/seed/${t}/400/400" alt="${s.cardTitle} ${t}" loading="lazy">
        </div>
        <div class="card_content">
            <h3 class="card_title">${s.cardTitle} ${t}</h3>
            <p class="card_text">${s.loremText.slice(0,80)}...</p>
        </div>
        <div class="card_footer">
            <span class="card_tag">${s.categoryPrefix} ${t%4+1}</span>
            <a href="#" class="card_link">→</a>
        </div>
    `,d.appendChild(o)}function f(){const t=d.querySelectorAll(".card"),o=getComputedStyle(d).gridTemplateColumns.split(" ").length,n=Math.floor(t.length/o)*o;t.forEach((c,e)=>{c.style.display=e<n?"":"none"})}f();let a;window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(f,200)});const u=document.getElementById("burgerToggle"),i=document.getElementById("sidebar");u&&i&&(u.addEventListener("click",()=>{i.classList.toggle("is-open"),document.body.style.overflow=i.classList.contains("is-open")?"hidden":""}),document.querySelectorAll(".sidebar_link").forEach(t=>{t.addEventListener("click",()=>{i.classList.remove("is-open"),document.body.style.overflow=""})}));
