(function () {
  //Variables
  const table = document.querySelector('tbody');
  const btnAddRow = document.querySelector('.fa-plus-circle');
  const btnEditRow = table.querySelectorAll('.fa-pencil');
  let tdss = [...table.querySelectorAll('.mission')];
  const submit = document.querySelector('#add-project');

console.log(tdss)
  const tds = []
  tdss.forEach(td => {
   tds.push(td.innerHTML)
  })
  console.log(tds)


    //   function populateList(plates = [], platesList) {
    // platesList.innerHTML = plates.map((plate, i) => {
    //   return `
    //     <li>
    //       <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
    //       <label for="item${i}">${plate.text}</label>
    //     </li>
    //   `;
    // }).join('');

  //Functions

  function addRow(e) {

   const createRow =`
   <tr class="mission">
                <td data-mission-client contenteditable='false'>
                </td>
                <td  data-mission-projet contenteditable='false'>
                </td>
                <td data-mission-prix contenteditable='false'>
                </td>
                <td data-mission-hopwork contenteditable='false'>
                </td>
                <td data-mission-ae contenteditable='false'>
                </td>
                <td class="fa-td">
                  <i class="fa fa-pencil" aria-hidden="false"></i>
                </td>
              </tr>`;
  tds.push(createRow);
  console.log(tds)
  table.innerHTML = tds.join('')
  }




    //Mettre chaque élément de la modale dans une nouvelle ligne du tableau
    //Faire que cette nouvelle ligne soit incluse dans l'eventListener


  function editRow(e) {

    //On a cliqué sur le talbeau : vérifier qu'on a cliqué sur le bouton, et pas sur une case au pif.

    //On sélectionne le bouton Edit
    const target = e.target;
    let btnEdit

    //Si on clique sur le TD, on sélectione l'enfant
    if (target.classList.contains('fa-td')) {
      btnEdit = target.firstChild.nextSibling;
      //Si on clique sur l'enfant, on est content
    } else if (target.classList.contains('fa')) {
      btnEdit = target;
    } else {
      return
    }

    let makeContentEditable = false

    if (btnEdit.classList.contains('fa-pencil')) {

        //Toggle le bouton
        btnEdit.classList.remove('fa-pencil');
        btnEdit.classList.add('fa-check');

        //Autoriser le contenteditable
        makeContentEditable = true;

      } else if (btnEdit.classList.contains('fa-check')) {
        //Toggle le bouton
        btnEdit.classList.remove('fa-check');
        btnEdit.classList.add('fa-pencil');

      } else {
        return;
      }
    //Rendre les contenteditable='true' sur le bon <tr>
      const tdEditables = [...btnEdit.parentElement.parentElement.children]
      for (var i = 0; i < tdEditables.length - 1; i++) {
        const tdEditable = tdEditables[i];
        if (makeContentEditable) {
          tdEditable.contentEditable = "true";
        }
        else {
          tdEditable.contentEditable = "false";
        }
      }
      //Sauvegarder les nouvelles entrées éditées
      // Remettre
    }
  // Event Listeners
  table.addEventListener('click', editRow);
  submit.addEventListener('click', addRow);

})();









  //Script MAJ valeurs TTC ou HT & MAJ charges Hopwork

    //Variables
    let modalClient = document.querySelector('#client-name');
    let modalProjet = document.querySelector('#project-name');

    let invoiceTTC = document.querySelector('#invoice-TTC');
    let invoiceHT = document.querySelector('#invoice-HT');
    let hopworkCharges = document.querySelector('#hopwork-charges')


    //Functions
    function TTCtoHT (e) {
      e.preventDefault(); //Empêche d'être loadé au chargement de la page

      const floatInvoiceTTC = parseFloat(invoiceTTC.value)
      const TTCtoHT = floatInvoiceTTC / 1.2;
      const HopworkHT = TTCtoHT * 0.1;
      invoiceHT.value = `${TTCtoHT.toFixed(2)} € HT`
      invoiceTTC.value = `${floatInvoiceTTC.toFixed(2)} € TTC`
      hopworkCharges.textContent = `= ${HopworkHT.toFixed(2)} € HT`
    };


    function HTtoTTC (e) {
      e.preventDefault(); //Empêche d'être loadé au chargement de la page

      const floatInvoiceHT = parseFloat(invoiceHT.value)
      const HTtoTTC = floatInvoiceHT * 1.2;
      const HopworkHT = floatInvoiceHT * 0.1;
      invoiceTTC.value = `${HTtoTTC.toFixed(2)} € TTC`
      invoiceHT.value = `${floatInvoiceHT.toFixed(2)} € HT`
      hopworkCharges.textContent = `= ${HopworkHT.toFixed(2)} € HT`

    };


    //Event listeners
    invoiceTTC.addEventListener('change', TTCtoHT);

    //On renseigne la valeur HT et on MAJ la valeur TTC
    invoiceHT.addEventListener('change', HTtoTTC);

    //MAJ index.html

  //Variables



//Functions

let btn = document.querySelector('#add-project');

const modalNouveauProjet = document.querySelector('#modalNouveauProjet')
console.log("script: "+invoiceTTC)




    let dataClient = trClassMissionAjout.querySelector('[data-mission-client]');
    let dataProjet = trClassMissionAjout.querySelector('[data-mission-projet]');
    let dataPrix = trClassMissionAjout.querySelector('[data-mission-prix]');
    let dataHopwork = trClassMissionAjout.querySelector('[data-mission-hopwork]');
    let dataAe = trClassMissionAjout.querySelector('[data-mission-ae]');

    dataClient.innerHTML = modalClient.value
    dataProjet.innerHTML = modalProjet.value
    dataPrix.innerHTML = invoiceHT.value
    dataHopwork.innerHTML = hopworkCharges.value
    dataAe.innerHTML = parseFloat(invoiceHT.value) * 0.249





