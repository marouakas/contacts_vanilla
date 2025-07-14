// 1. Variables globales
let contacts = []; // Stocke tous les contacts
const btnAdd = document.getElementById("btn-add");
const tbody = document.getElementById("contacts-list");
const contactsCount = document.querySelector(".text-gray-600 .font-bold");

// 2. Fonction pour ajouter un contact
function addContact() {
  const firstname = document.getElementById("input-firstname").value;
  const lastname = document.getElementById("input-lastname").value;
  const email = document.getElementById("input-email").value;

  if (firstname && lastname && email) {
    const newContact = { firstname, lastname, email };
    contacts.push(newContact);
    displayContacts(); // Met à jour l'affichage
    clearForm(); // Vide le formulaire
    updateCount(); // Met à jour le compteur
  } else {
    alert("Veuillez remplir tous les champs !");
  }
}

// 3. Afficher tous les contacts
function displayContacts() {
  tbody.innerHTML = ""; // Vide le tableau

  contacts.forEach((contact, index) => {
    const row = `
      <tr class="contact-row">
        <td class="p-4">${contact.firstname}</td>
        <td class="p-4">${contact.lastname}</td>
        <td class="p-4">${contact.email}</td>
        <td class="p-4">
          <div class="flex justify-end space-x-2">
            <button onclick="editContact(${index})" class="btn-edit bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onclick="deleteContact(${index})" class="btn-delete bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// 4. Supprimer un contact
function deleteContact(index) {
  if (confirm("Voulez-vous vraiment supprimer ce contact ?")) {
    contacts.splice(index, 1);
    displayContacts();
    updateCount();
  }
}

// 5. Vider le formulaire
function clearForm() {
  document.getElementById("input-firstname").value = "";
  document.getElementById("input-lastname").value = "";
  document.getElementById("input-email").value = "";
}

// 6. Mettre à jour le compteur
function updateCount() {
  contactsCount.textContent = contacts.length;
}

// 7. Écouteur d'événement pour le bouton "Add"
btnAdd.addEventListener("click", addContact);

// Fonction d'édition (à implémenter plus tard)
function editContact(index) {
  alert("Fonction d'édition à implémenter !");
  // Vous pourrez ajouter cette fonctionnalité ensuite
}