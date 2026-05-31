let photos=[];
fetch('photos.json').then(r=>r.json()).then(data=>{
 photos=data;
 document.getElementById('stats').textContent=`${data.length} photos`;
 render(data);
});

function render(items){
 const g=document.getElementById('gallery');
 g.innerHTML='';
 items.forEach(p=>{
  const d=document.createElement('div');
  d.className='card';
  d.innerHTML=`<img src="${p.file}" alt=""><h3>${p.name}</h3>`;
  d.onclick=()=>openLightbox(p);
  g.appendChild(d);
 });
}

document.getElementById('search').addEventListener('input',e=>{
 const q=e.target.value.toLowerCase();
 render(photos.filter(x=>x.name.toLowerCase().includes(q)));
});

function openLightbox(p){
 document.getElementById('lightbox-img').src=p.file;
 document.getElementById('lightbox-title').textContent=p.name;
 document.getElementById('lightbox').classList.remove('hidden');
}
document.getElementById('close').onclick=()=>document.getElementById('lightbox').classList.add('hidden');
