 
    //Script MAJ valeurs TTC ou HT & MAJ charges Hopwork

    //Variables des datas de la modal
    let modalClient = document.querySelector('#client-name');
    let modalProjet = document.querySelector('#project-name');
    let invoiceTTC = document.querySelector('#invoice-TTC');
    let invoiceHT = document.querySelector('#invoice-HT');
    let hopworkCharges = document.querySelector('#hopwork-charges')
    let frais = document.querySelector('#frais')
    let datePicker = document.querySelector('#datepicker')
    let dataObject 
        


    //Functions
    function TTCtoHT(e) {
        e.preventDefault(); //Empêche d'être loadé au chargement de la page

        const floatInvoiceTTC = parseFloat(invoiceTTC.value)
        const TTCtoHT = floatInvoiceTTC / 1.2;
        const HopworkHT = TTCtoHT * 0.1;
        invoiceHT.value = TTCtoHT.toFixed(2)
        invoiceTTC.value = floatInvoiceTTC.toFixed(2)
        hopworkCharges.value = HopworkHT.toFixed(2)
    };
    function HTtoTTC(e) {
        e.preventDefault(); //Empêche d'être loadé au chargement de la page

        const floatInvoiceHT = parseFloat(invoiceHT.value)
        const HTtoTTC = floatInvoiceHT * 1.2;
        const HopworkHT = floatInvoiceHT * 0.1;
        invoiceTTC.value = HTtoTTC.toFixed(2)
        invoiceHT.value = floatInvoiceHT.toFixed(2)
        hopworkCharges.value = HopworkHT.toFixed(2)
    };

    
    //Event listeners
    invoiceTTC.addEventListener('change', TTCtoHT);
    //On renseigne la valeur HT et on MAJ la valeur TTC
    invoiceHT.addEventListener('change', HTtoTTC);
    //Functions

    
