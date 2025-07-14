// Initialisation
let contacts = JSON.parse(localStorage.getItem('contacts')) || []

const firstnameInput = document.getElementById('input-firstname')
const lastnameInput = document.getElementById('input-lastname')
const emailInput = document.getElementById('input-email')
const btnAdd = document.getElementById('btn-add')
const contactsList = document.getElementById('contacts-list')
const countDisplay = document.querySelector('p span')

// Fonction pour sauvegarder dans localStorage
function saveContacts() {
  // 
  localStorage.setItem('contacts', JSON.stringify(contacts))
}

// Fonction pour afficher tous les contacts
function renderContacts() {
  contactsList.innerHTML = ''
  contacts.forEach((contact, index) => {
    const tr = document.createElement('tr')
    tr.classList.add('contact-row')

    tr.innerHTML = `
      <td class="p-4">
        <span class="isEditing-hidden">${contact.firstname}</span>
        <input type="text" value="${contact.firstname}" class="input-firstname isEditing-visible w-full px-3 py-2 border rounded-md" />
      </td>
      <td class="p-4">
        <span class="isEditing-hidden">${contact.lastname}</span>
        <input type="text" value="${contact.lastname}" class="input-lastname isEditing-visible w-full px-3 py-2 border rounded-md" />
      </td>
      <td class="p-4">
        <span class="isEditing-hidden">${contact.email}</span>
        <input type="email" value="${contact.email}" class="input-email isEditing-visible w-full px-3 py-2 border rounded-md" />
      </td>
      <td class="p-4">
        <div class="flex justify-end space-x-2">
          <button class="btn-check isEditing-visible bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md"><i class="fa-solid fa-check"></i></button>
          <button class="btn-edit isEditing-hidden bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-md"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn-delete isEditing-hidden bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    `

    // Gérer les boutons
    tr.querySelector('.btn-edit').addEventListener('click', () => {
      tr.classList.add('isEditing')
    })

    tr.querySelector('.btn-check').addEventListener('click', () => {
      const newFirstname = tr.querySelector('.input-firstname').value.trim()
      const newLastname = tr.querySelector('.input-lastname').value.trim()
      const newEmail = tr.querySelector('.input-email').value.trim()

      contacts[index] = { firstname: newFirstname, lastname: newLastname, email: newEmail }
      saveContacts()
      renderContacts()
    })

    tr.querySelector('.btn-delete').addEventListener('click', () => {
      contacts.splice(index, 1)
      saveContacts()
      renderContacts()
    })

    contactsList.appendChild(tr)
  })

  countDisplay.textContent = contacts.length
}

// Ajouter un contact
btnAdd.addEventListener('click', () => {
  const firstname = firstnameInput.value.trim()
  const lastname = lastnameInput.value.trim()
  const email = emailInput.value.trim()

  if (!firstname || !lastname || !email) return

  contacts.push({ firstname, lastname, email })
  saveContacts()
  renderContacts()

  firstnameInput.value = ''
  lastnameInput.value = ''
  emailInput.value = ''
})

// Lancement initial
renderContacts()
