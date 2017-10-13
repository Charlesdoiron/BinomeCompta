(function() {
    let btn = document.querySelector('#add-project');
    let btnModify = [...document.querySelectorAll('.fa-pencil')]
    let tbody = document.querySelector('tbody')
    let tr = [...tbody.querySelectorAll('tr')]
    const modalNouveauProjet = document.querySelector('#modalNouveauProjet')

    let dataClient = document.querySelector('[data-mission-client]');
    let dataProjet = document.querySelector('[data-mission-projet]');
    let dataPrix = document.querySelector('[data-mission-prix]');
    let dataHopwork = document.querySelector('[data-mission-hopwork]');
    let dataAe = document.querySelector('[data-mission-ae]');

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







    // Datas

/*    dataClient.textContent = "Lapeyre"
    dataProjet.textContent = "Intégration #1"
    let prix = dataPrix.textContent = 4700
    let hopwork = dataHopwork.textContent = Math.round(prix * 0.12)
    dataAe.textContent = Math.round((prix - hopwork) * 0.249)*/


    // function dataPrompt(argument) {
    //     let data = prompt('ma valeur')
    //     dataClient.textContent = data
    // }
})();


