(function() {
    let btn = document.querySelector('.fa-add');
    let btnModify = [...document.querySelectorAll('.fa-pencil')]
    let tbody = document.querySelector('tbody')
    let tr = [...tbody.querySelectorAll('tr')]

    let dataClient = document.querySelector('[data-mission-client]');
    let dataProjet = document.querySelector('[data-mission-projet]');
    let dataPrix = document.querySelector('[data-mission-prix]');
    let dataHopwork = document.querySelector('[data-mission-hopwork]');
    let dataAe = document.querySelector('[data-mission-ae]');

    // ADD PROJECT
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
        updateBtnModify(btnModify)

    };
    btn.addEventListener('click', popUp);


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







    // Datas

    dataClient.textContent = "Lapeyre"
    dataProjet.textContent = "Intégration #1"
    let prix = dataPrix.textContent = 4700
    let hopwork = dataHopwork.textContent = Math.round(prix * 0.12)
    dataAe.textContent = Math.round((prix - hopwork) * 0.249)


    // function dataPrompt(argument) {
    //     let data = prompt('ma valeur')
    //     dataClient.textContent = data
    // }
})();