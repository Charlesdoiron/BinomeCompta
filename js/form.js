    //VARIABLES EDIT TABLEAU
    const table = document.querySelector('tbody');
    const btnAddRow = document.querySelector('.fa-plus-circle');
    const btnEditRow = table.querySelectorAll('.fa-pencil');
    const missions = [...table.querySelectorAll('.mission')];
    const submit = document.querySelector('#add-project');
    const rows = [];

    // VARIABLES COLONNES FORMULAIRE
    let dataClient = document.querySelector('[data-mission-client]');
    let dataProjet = document.querySelector('[data-mission-projet]');
    let dataPrix = document.querySelector('[data-mission-prix]');
    let dataHopwork = document.querySelector('[data-mission-hopwork]');
    let dataAe = document.querySelector('[data-mission-ae]');
    let dataBenefice = document.querySelector('[data-mission-benefice]');



    (function() {



        // AJOUT DU ROW

        function addRow() {

            dataObj = {
                client: modalClient.value,
                projet: modalProjet.value,
                prix: parseFloat(invoiceTTC.value).toFixed(2),
                fraisHopwork: parseFloat(hopworkCharges.value).toFixed(2),
                fraisAutoEntreprise: parseFloat((invoiceTTC.value) * 0.249).toFixed(2),
                date: datePicker.value,
                frais: parseFloat(frais.value).toFixed(2),
                benefice: parseFloat((invoiceTTC.value) - (hopworkCharges.value) - ((invoiceTTC.value) * 0.249) - (frais.value)).toFixed(2)
            }

            submitClick(dataObj);

            // let ligne = table.insertRow(-1); //on a ajouté une ligne
            // ligne.className = "mission";
            // ligne.innerHTML = `

            //     <td data-mission-client contenteditable='false'>
            //     ${dataObj.client}
            //     </td>
            //     <td  data-mission-projet contenteditable='false'>
            //     ${dataObj.projet}
            //     </td>
            //     <td data-mission-prix contenteditable='false'>
            //     ${dataObj.prix}
            //     </td>
            //     <td data-mission-hopwork contenteditable='false'>
            //     ${dataObj.fraisHopwork}
            //     </td>
            //     <td data-mission-ae contenteditable='false'>
            //     ${dataObj.fraisAutoEntreprise}
            //     </td>
            //     <td data-mission-benefice contenteditable='false'>
            //     ${dataObj.benefice}
            //     </td>
            //     <td class="fa-td">
            //     <i class="fa fa-pencil" aria-hidden="false"></i>
            //     </td>`;
        }

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
                } else {
                    tdEditable.contentEditable = "false";
                }
            }
            //Sauvegarder les nouvelles entrées éditées
            // Remettre
        }



        function submitClick(object) {
            const firebaseRef = firebase.database().ref();
            firebaseRef.child(`${object.client}`).set(object);
        }

        function populateRows(database) {
            const firebaseRef = firebase.database().ref();
            firebaseRef.on('child_added', dataObj => {
                let ligne = table.insertRow(-1); //on a ajouté une ligne
                ligne.className = "mission";
                ligne.innerHTML = `

                <td data-mission-client contenteditable='false'>
                ${dataObj.child('client').val()}
                </td>
                <td  data-mission-projet contenteditable='false' >
                ${dataObj.child('projet').val()}
                </td>
                <td data-mission-prix contenteditable='false' class="ttc">
                ${dataObj.child('prix').val()}
                </td>
                <td data-mission-hopwork contenteditable='false' class="ttc">
                ${dataObj.child('fraisHopwork').val()}
                </td>
                <td data-mission-ae contenteditable='false' class="ttc">
                ${dataObj.child('fraisAutoEntreprise').val()}
                </td>
                <td data-mission-benefice contenteditable='false' class="ttc">
                ${dataObj.child('benefice').val()}
                </td>
                <td class="fa-td">
                <i class="fa fa-pencil" aria-hidden="false"></i>
                </td>`;
            });
        }





        // Event Listeners
        window.addEventListener("load", populateRows);
        table.addEventListener('click', editRow);
        // submit.addEventListener('click', submitClick);
        submit.addEventListener('click', addRow);

    })();