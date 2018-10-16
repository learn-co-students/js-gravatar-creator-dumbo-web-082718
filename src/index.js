document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#identicon-form");
  let current;
  form.addEventListener('submit', handleSubmit);
});

function handleSubmit(e) {
  e.preventDefault();
  document.querySelectorAll('#identicon span').forEach((el) => { el.style.backgroundColor = '' })
    if (e.target['input-field'].value !== '') {
    current = new Identicon(e.target['input-field'].value);
    current.makeGrid();
    e.target['input-field'].value = ''
  }
}
