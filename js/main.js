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
