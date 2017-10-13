(function () {

  //Script MAJ valeurs TTC ou HT & MAJ charges Hopwork

    //Variables
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

  //Variables













})();
