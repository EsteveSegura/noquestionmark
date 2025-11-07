import './ChatCrimesList.css'

export function ChatCrimesList(t) {
  const section = document.createElement('section')
  section.className = 'chat-crimes-list'

  const title = document.createElement('h3')
  title.textContent = t.crimesList.title
  section.appendChild(title)

  const list = document.createElement('ul')

  t.crimesList.items.forEach(item => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.href = item.url
    link.textContent = item.text
    li.appendChild(link)
    list.appendChild(li)
  })

  section.appendChild(list)

  return section
}
