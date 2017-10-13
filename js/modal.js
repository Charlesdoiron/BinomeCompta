(function () {
  let btnModify = [...document.querySelectorAll('.fa-pencil')]
  let tbody = document.querySelector('tbody')
  let tr = [...tbody.querySelectorAll('tr')]


  // ADD PROJECT




  // EDITABLE

  function editable() {
      let trSurLequelJeTaffe = tr[btnModify.indexOf(this)]
      console.log(btnModify.indexOf(this))
      let tds = trSurLequelJeTaffe.querySelectorAll('td')

      tds.forEach(td => {
          if (td.getAttribute('contenteditable') == 'false') {
              td.setAttribute('contenteditable', 'true')

          } else if (td.getAttribute('contenteditable') == 'true') {
              td.setAttribute('contenteditable', 'false')
          }
      })
  }


  function toggleFa() {
      console.log(this)

      if (this.classList.contains('fa-pencil')) {
          this.classList.remove("fa-pencil")
          this.classList.add("fa-check")
      } else if (this.classList.contains('fa-check')) {
          this.classList.remove("fa-check")
          this.classList.add("fa-pencil")
      }
  };

  function updateBtnModify(btnModify) {

      btnModify.forEach((element) => {
          element.addEventListener('click', editable);
      });
      btnModify.forEach((element) => {
          element.addEventListener('click', toggleFa);
      });


  }
  updateBtnModify(btnModify)


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



function popUp() {
    // alert('Ajout d\'un projet')
    let trLenght = tr.length
    let monTexte = `

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
                            <td>
                                <i class="fa fa-pencil" aria-hidden="false"></i>
                            </td>
                  `
    tbody.insertRow(trLenght).classList.add('mission')
    let trClassMissionAjout = tbody.rows[trLenght]
    trClassMissionAjout.innerHTML = monTexte
    btnModify.push(trClassMissionAjout.querySelector('.fa-pencil'))
    tr.push(trClassMissionAjout);

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

    updateBtnModify(btnModify)




};
btn.addEventListener('click', popUp);













})();
