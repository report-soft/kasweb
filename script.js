// script.js - small helpers
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  // Demo behavior: submit via fetch to your backend endpoint
  const form = e.target;
  const data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data
  }).then(r => {
    if(r.ok) alert('Thank you — we will contact you for a demo.');
    else alert('Network error. Please email info@shuleni.example');
  }).catch(()=> alert('Network error. Please email info@shuleni.example'));
});
