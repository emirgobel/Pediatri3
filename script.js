const form = document.getElementById('doseForm');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const perKgMg = Number(document.getElementById('drug').value);
  const weight = Number(document.getElementById('weight').value);

  if (!weight || weight <= 0) {
    result.textContent = 'Lütfen geçerli bir kilo değeri giriniz.';
    result.style.background = '#fef3f2';
    result.style.borderColor = '#fecdca';
    result.style.color = '#b42318';
    return;
  }

  const mgDose = perKgMg * weight;
  const mlDose = (mgDose / 120) * 5;

  result.textContent = `Önerilen doz: ${mlDose.toFixed(1)} ml (Yaklaşık ${mgDose.toFixed(1)} mg)`;
  result.style.background = '#ecfdf3';
  result.style.borderColor = '#abefc6';
  result.style.color = '#067647';
});
