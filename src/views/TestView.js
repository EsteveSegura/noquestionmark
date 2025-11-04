export function TestView(t) {
  const container = document.createElement('div')

  const div = document.createElement('div')
  div.innerHTML = `<strong>${t.test}</strong>`;
  container.appendChild(div);

  return container;
}
