(async()=>{
 const slides=[...document.querySelectorAll('.slides>section')];
 const nav=document.querySelector('.chapter-nav');
 const blocks=slides.filter(s=>s.dataset.block).map(s=>({id:s.id,label:s.dataset.block,index:slides.indexOf(s)}));
 blocks.forEach(b=>{const a=document.createElement('a');a.href='#/'+b.id;a.textContent=b.label.toUpperCase();nav.append(a)});
 document.querySelectorAll('.progressive>li').forEach(e=>e.classList.add('fragment','fade-up'));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 await Reveal.initialize({width:1280,height:720,margin:.05,center:true,hash:true,controls:true,progress:true,slideNumber:'c/t',transition:reduced?'none':'slide',transitionSpeed:'fast',backgroundTransition:reduced?'none':'fade',autoAnimate:!reduced,autoAnimateDuration:.55,autoAnimateEasing:'ease-out',pdfSeparateFragments:false,pdfMaxPagesPerSlide:1,plugins:[RevealZoom,RevealNotes,RevealSearch,RevealMarkdown,RevealHighlight]});
 function update(){const i=Reveal.getIndices().h;document.body.classList.toggle('dark-ui',Reveal.getCurrentSlide().classList.contains('dark'));[...nav.children].forEach((a,j)=>{const active=i>=blocks[j].index&&(j===blocks.length-1||i<blocks[j+1].index);a.classList.toggle('active',active);active?a.setAttribute('aria-current','step'):a.removeAttribute('aria-current')})}
 Reveal.on('slidechanged',update);update();
 document.querySelector('.key-help').addEventListener('click',e=>{e.preventDefault();Reveal.toggleHelp()});
})().catch(e=>{console.error(e);document.body.insertAdjacentHTML('beforeend','<div class="load-error">Não foi possível iniciar a apresentação. Extraia o pacote completo com as pastas assets e vendor.</div>')});
