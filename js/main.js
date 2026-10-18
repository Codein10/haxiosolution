// Haxio Solution – enquiry form
// Sends the visitor's enquiry via WhatsApp or email (no server needed).
(function () {
  var WHATSAPP = '918960401450';
  var EMAIL = 'haxiosolution@gmail.com';
  var form = document.getElementById('enquiry-form');
  if (!form) return;
  var err = document.getElementById('form-error');
  var ok = document.getElementById('form-success');
  function val(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; }

  function buildMessage() {
    return [
      'Hi Haxio Solution, I would like to discuss a project.',
      '',
      'Name: ' + val('f-name'),
      'Phone: ' + val('f-phone'),
      'Email: ' + (val('f-email') || '-'),
      'Service: ' + (val('f-service') || 'Not sure yet'),
      'Budget: ' + (val('f-budget') || 'Not decided'),
      '',
      'Project details: ' + (val('f-msg') || '-')
    ].join('\n');
  }
  function isValid() {
    var good = val('f-name') && val('f-phone');
    err.hidden = !!good;
    if (!good) { ok.hidden = true; (val('f-name') ? document.getElementById('f-phone') : document.getElementById('f-name')).focus(); }
    return !!good;
  }
  form.addEventListener('input', function () { err.hidden = true; });
  form.addEventListener('submit', function (e) { e.preventDefault(); });

  document.getElementById('send-wa').addEventListener('click', function () {
    if (!isValid()) return;
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(buildMessage()), '_blank');
    ok.hidden = false;
  });
  document.getElementById('send-mail').addEventListener('click', function () {
    if (!isValid()) return;
    var subject = 'Project enquiry from ' + val('f-name');
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(buildMessage());
    ok.hidden = false;
  });
})();

/* ===== Work slider ===== */
(function(){
var t=document.getElementById('btTrack');if(!t)return;
var prev=document.getElementById('btPrev'),next=document.getElementById('btNext'),dots=document.querySelector('.bt-dots');
var slides=t.querySelectorAll('.bt-slide');
function step(){return slides[0].getBoundingClientRect().width}
function perView(){return Math.max(1,Math.round(t.clientWidth/step()))}
function pages(){return Math.max(1,slides.length-perView()+1)}
function build(){dots.innerHTML='';for(var i=0;i<pages();i++){(function(i){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Go to project '+(i+1));b.onclick=function(){t.scrollTo({left:i*step()})};dots.appendChild(b)})(i)}}
function update(){var i=Math.round(t.scrollLeft/step()),max=pages()-1;i=Math.min(i,max);
[].forEach.call(dots.children,function(d,k){d.classList.toggle('on',k===i)});
prev.disabled=t.scrollLeft<=2;next.disabled=t.scrollLeft>=t.scrollWidth-t.clientWidth-2}
prev.onclick=function(){t.scrollBy({left:-step()})};
next.onclick=function(){t.scrollBy({left:step()})};
t.addEventListener('scroll',update,{passive:true});
function scaleLive(){[].forEach.call(document.querySelectorAll('.bt-live'),function(c){var f=c.firstElementChild;f.style.transform='scale('+(c.clientWidth/1280)+')'})}
function all(){build();update();scaleLive()}
window.addEventListener('resize',all);all();
})();
