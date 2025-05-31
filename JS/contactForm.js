  const form = document.getElementById('downloadForm');
  const modal = document.getElementById('modal');

  form.addEventListener('submit', function (e) {
e.preventDefault();

// Resetar erros anteriores
const inputs = form.querySelectorAll('input');
inputs.forEach(input => input.classList.remove('error'));

const nome = document.getElementById('nome');
const whatsapp = document.getElementById('whatsapp');
const email = document.getElementById('email');

let valid = true;

// Validação nome
if (nome.value.trim() === '') {
  nome.classList.add('error');
  nome.focus();
  valid = false;
  return;
}

// Validação whatsapp (ex: (11) 91234-5678)
const telPattern = /^\(\d{2}\)\s9\d{4}-\d{4}$/;
if (!telPattern.test(whatsapp.value)) {
  whatsapp.classList.add('error');
  whatsapp.focus();
  valid = false;
  return;
}

// Validação email simples
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email.value)) {
  email.classList.add('error');
  email.focus();
  valid = false;
  return;
}

// Se tudo estiver válido
modal.style.display = 'flex';
setTimeout(() => {
  modal.style.display = 'none';
  window.open('./FILES/DNC-catalogo.pdf', '_blank');
  form.reset();
}, 2500);
  });

  // Máscara para WhatsApp
  document.getElementById('whatsapp').addEventListener('input', function (e) {
let x = e.target.value.replace(/\D/g, '').slice(0, 11);
if (x.length >= 11) {
  e.target.value = `(${x.slice(0, 2)}) 9${x.slice(3, 7)}-${x.slice(7, 11)}`;
} else if (x.length > 6) {
  e.target.value = `(${x.slice(0, 2)}) 9${x.slice(3, x.length)}`;
} else if (x.length > 2) {
  e.target.value = `(${x.slice(0, 2)}) ${x.slice(2)}`;
} else {
  e.target.value = x;
}
  });
