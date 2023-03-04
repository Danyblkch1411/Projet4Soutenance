
// InputValidity , objet de propriétés booléennes
// par défaut positionnées à false
// passe à true quand le input respectif est correctement renseigné

const InputValidity = {
    checkPrenom: false,
    checkNom: false,
    checkEmail: false,
    checkDate: false,
    checkQuantite: false,
    checkOption: false,
    checkConditions: true
  }
  
  // -------------------------------
  
  
  
  const inputValidation = document.querySelector('form');
  
  const formulaire = document.querySelector('form');
  formulaire.addEventListener("submit", checkValidationsForm)
  
  //  btnFermer bouton pour fermer la modale
  const btnFermer =  document.querySelector('.closeButon');
  
  
  // msgUtilisateur accède aux message-alert, msg erreur affiché pour chaque input
  const msgUtilisateur = document.querySelectorAll('.message-alert');
  
    var conditionsSelectaff = document.querySelector('#Conditions  #checkbox1');
  
  
   // launch modal form
   function launchModal() {
  
    // reeset des message-error
    const keys = Object.keys(InputValidity)
    for (i=0;i<keys.length;i++) {
     showValidated({index: i, validation: true})
    }
  
    modalbg.style.display = "block";
    // inputValidation.addEventListener('submit', validSaisie)
    document.reserve.reset();
    btnFermer.classList.add("nonActif")
  
    inputValidation.addEventListener('submit', checkValidationsForm)
  }
  
  
  // -------- function checkValidationsForm, fonction validation des input -----------------------
  // listInput, liste de tous les input du formulaire
  const listInput = document.querySelectorAll('form input');
  
  // fonction de validation des input
  // renvoie msg d'erreurs pour les input non renseignés
  
    function checkValidationsForm(e) {
      e.preventDefault()
       //retourne un tableau de propriétés
      const keys = Object.keys(InputValidity)
    
  
      // failedInputs contient input de InputValidity
      // qui ont échoué au test de validité, donc qui sont à false
      const failedInputs = keys.filter(key => !InputValidity[key]) 
      console.log("!!!! failedInputs", failedInputs)
  
        if (failedInputs.length)
         { 
            failedInputs.forEach(input => {
            const index = keys.indexOf(input)
            showValidated({index: index, validation: false})
            })
        }
        else
          {
            e.preventDefault();
            formulaire.classList.add("nonActif")
            var SaisieIncomplete6 =  document.querySelector('#myOption'); 
            SaisieIncomplete6.style.opacity = 0;  
            var SaisieIncomplete7 =  document.querySelector('#Conditions'); 
            SaisieIncomplete7.style.opacity = 0;
            btnFermer.classList.remove("nonActif")
            var effTextLabel =  document.querySelector('.text-label'); 
            effTextLabel.style.opacity = 0;  
            
            // var  affichageMerciInscription = document.querySelector('#affMercii'); 
            affichageMerciInscription.innerHTML = "Merci pour votre inscription ";
            // affichageMerciInscription.style.text-align = center;
            affichageMerciInscription.style.textAlign = "center";
            
            // affichageMerciInscription.setAttribute ("text-align",  center)
            affichageMerciInscription.style.display = "";
  
            // Fermeture de la modal";
  
            btnFermer.addEventListener('click', fermerModal); 
            
  
            // reset du formulaire
            document.reserve.reset();
  
          }
    }
   
  // -------- Fin checkValidationsForm, fonction validatio des input -----------------------  
  
  
  
  // -------- function showValidated, fonction affichage message d'erreur ------------------
  // showValidated est appelée par fonction checkValidationsForm
  // si argument validation = false , on affiche le message d'erreur
  // vià l'index de l'input contenu dans msgUtilisateur[index]
  
  function showValidated ({index, validation}) {
      if (validation===true) {
            msgUtilisateur[index].style.display = "inline"
            msgUtilisateur[index].style.display = "none"
        }
      else { 
        msgUtilisateur[index].style.display = "inline"
        msgUtilisateur[index].style.display = "block"
    }
  }
   
  
  // --------FIN  function showValidated, fonction affichage message d'erreur ------------------
  
  // -------- function boolPrenom, fonction saisie du Prénom ------------------
  // si le input est non renseigné, affichage du message d'erreur et  InputValidity.checkPrenom = false 
  // si bien renseigné, InputValidity.checkPrenom = true
  
  // on accède à l'input du prénom vià le DOM, 
  const inputPrenom = document.querySelector('.formData:nth-child(1) input'); 
  
  // appel de boolPrenom suite à  évènement déclenché sur la sélection de l'input, blur 
  inputPrenom.addEventListener("blur", boolPrenom)
  
  // appel de boolPrenom suite à  évènement déclenché sur la saisie dans l'input, input 
  inputPrenom.addEventListener("input", boolPrenom)
  
  function boolPrenom (e) {
    // regex 2 lettres alphabétiques et 2 caractères minimuns
    const regexPrenom = /^[A-Za-z]{2,20}$/;
  
    if((e.target.value.length >= 2) && (e.target.value.match(regexPrenom))) {
  
      msgUtilisateur[0].style.display = "inline"
      msgUtilisateur[0].style.display = "none"
      InputValidity.checkPrenom = true
    }
    else { 
      msgUtilisateur[0].style.display = "inline"
      msgUtilisateur[0].style.display = "block"
      InputValidity.checkPrenom = false
    }
  
  }   // --------FIN function boolPrenom, fonction saisie du Prenom ------------------
  
  
  
  // -------- function boolNom, fonction saisie du Nom ------------------
  // si le input est non renseigné, affichage du message d'erreur et  InputValidity.checkNom = false 
  // si bien renseigné, InputValidity.checkNom = true
  
  // on accède à l'input du Nom vià le DOM, 
  const inputNom = document.querySelector('.formData:nth-child(2) input'); 
  
  // appel de boolNom suite à  évènement déclenché sur la sélection de l'input, blur 
  inputNom.addEventListener("blur", boolNom)
  
  // appel de boolPrenom suite à  évènement déclenché sur la saisie dans l'input, input 
  inputNom.addEventListener('input', boolNom)
  
  function boolNom (e) {
    var  inputPrenomDiv = document.querySelector('.formData:nth-child(2) div'); 
    // regex 2 lettres alphabétiques et 2 caractères minimuns
    const regexNom = /^[A-Za-z]{2,20}$/;
     
        // if ((e.target.value.length >= 2) && (e.target.value.match(regexNom)))  {
         if (e.target.value.match(regexNom))  {
  
      msgUtilisateur[1].style.display = "inline"
      msgUtilisateur[1].style.display = "none"
      InputValidity.checkNom = true
      checkNom = 1;
    }
    else { 
  
      msgUtilisateur[1].style.display = "inline"
      msgUtilisateur[1].style.display = "block"
  
      InputValidity.checkNom = false
      checkNom = 0;
    }
  }   // --------FIN function boolNom, fonction saisie du Nom ------------------
  
  
  
  // -------- function boolEmail, fonction saisie du Mail ------------------
  // si le input est non renseigné, affichage du message d'erreur et  InputValidity.checkEmail = false 
  // si bien renseigné, InputValidity.checkEmail = true
  
  // on accède à l'input du Nom vià le DOM, 
  const inputEmail = document.querySelector('.formData:nth-child(3) input'); 
  
  // appel de boolEmail suite à  évènement déclenché sur la sélection de l'input, blur 
  inputEmail.addEventListener("blur", boolEmail)
  
  // appel de boolEmail suite à  évènement déclenché sur la saisie dans l'input, input 
  inputEmail.addEventListener('input', boolEmail)
  
  function boolEmail (e) {
    // var  inputEmail = document.querySelector('.formData:nth-child(3)'); 
    // \S+ tous les caractères différents des espaces
    const regexEmail = /\S+@\S+\.\S+/;
  
    if (e.target.value.search(regexEmail) === 0) {
    
      msgUtilisateur[2].style.display = "inline"
      msgUtilisateur[2].style.display = "none"
    InputValidity.checkEmail = true
    // checkEmail = 1;
    }
  
    else if (e.target.value.search(regexEmail) === -1){
      msgUtilisateur[2].style.display = "inline"
      msgUtilisateur[2].style.display = "block"
      InputValidity.checkEmail = false
      // checkEmail = 0;
    }  
  }   // --------FIN function boolEmail, fonction saisie de Email ------------------
  
  
  
  
  // -------- function boolDate, fonction saisie de la date de naissance ------------------
  // si le input est non renseigné, affichage du message d'erreur et  InputValidity.checkDate = false 
  // si bien renseigné, InputValidity.checkDate = true
  
  const inputDate = document.querySelector('.formData:nth-child(4) input');
  
  // appel de boolDate suite à  évènement déclenché sur la sélection de l'input, blur 
  inputDate.addEventListener('blur', boolDate)
  
  // appel de boolDate suite à  évènement déclenché sur la saisie dans l'input, input 
  inputDate.addEventListener('input', boolDate)
  
  function boolDate (e) {
    var  date = document.querySelector('.formData:nth-child(4) input ');
  
   const regexDate =  /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
   
   var  annee = (e.target.value).substr(0, 4);
   let anneeMinimun = parseInt(annee, 10);
  
  
    if ((e.target.value.search(regexDate) === 0) && (anneeMinimun >= 1900 )) {
      msgUtilisateur[3].style.display = "inline"
      msgUtilisateur[3].style.display = "none"
      InputValidity.checkDate = true
  
    }  
   
      else if (e.target.value.search(regexDate) === -1){
        msgUtilisateur[3].style.display = "inline"
        msgUtilisateur[3].style.display = "block"
      InputValidity.checkDate = false
    }
  }   // --------FIN function boolDate, fonction saisie de la date de naissance -----------
   
  
  // -------- function boolQuantite, fonction saisie du nombre de tournois effectués ------------------
  // si le input est non renseigné, affichage du message d'erreur et  InputValidity.checkQuantite = false 
  // si bien renseigné, InputValidity.checkQuantite = true
  const inputQuantite = document.querySelector('#myQuantity input'); 
  
  // appel de boolQuantite suite à  évènement déclenché sur la sélection de l'input, blur 
  inputQuantite.addEventListener('blur', boolQuantite) 
  
  // appel de boolQuantite suite à  évènement déclenché sur la saisie dans l'input, input 
  inputQuantite.addEventListener('change', boolQuantite) 
  
  function boolQuantite (e){
  
    var  inputQuantite = document.querySelector('#myQuantity'); 
    if (e.target.value  === "")
    {  
      msgUtilisateur[4].style.display = "inline"
      msgUtilisateur[4].style.display = "block"
     InputValidity.checkQuantite = false;
    checkQuantite = 0;
    }
  
    else
    {  
      msgUtilisateur[4].style.display = "inline"
      msgUtilisateur[4].style.display = "none"
       InputValidity.checkQuantite = true;
      checkQuantite = 1;
    }
  
  }   // --------FIN function boolQuantite, fonction saisie nombre de tournois -----------
  
  
  // -------- function boolOption, fonction saisie du choix de la ville ------------------
  // si le input est non renseigné, affichage du message d'erreur et  InputValidity.checkOption = false 
  // si bien renseigné, InputValidity.checkOption = true
  const surveilleOption = document.getElementById('myOption');
  
  // appel de boolOption suite à  évènement déclenché sur la saisie dans l'input, input 
  surveilleOption.addEventListener('change', boolOption);
  
  function boolOption  (){
    var boutonSelect = document.querySelectorAll('#myOption  input');
    for (var i = 0; i < boutonSelect.length; i++) {
      if ( boutonSelect[i].checked === true ) {
        msgUtilisateur[5].style.display = "inline"
        msgUtilisateur[5].style.display = "none"
        InputValidity.checkOption = true;
        break;
      } 
    }
  
    if(InputValidity.checkOption === false) {
      msgUtilisateur[5].style.display = "inline"
      msgUtilisateur[5].style.display = "block"
      InputValidity.checkOption = false;
    }
  
  }
  
  
  // ---------------------------------------------------------------
  
  
  
  const surveilleConditions =  document.getElementById('Conditions');
  
    surveilleConditions.addEventListener('change', boolConditions);
  
    function boolConditions  (){
      var  inputConditions = document.querySelector('#Conditions ');
      var conditionsSelect = document.querySelector('#Conditions  #checkbox1');
      var  boolSelect = false; 
  
      
        if ( conditionsSelect.checked === true ) {    
          msgUtilisateur[6].style.display = "inline"
          msgUtilisateur[6].style.display = "none"
          InputValidity.checkConditions = true;
          checkConditions = 1;
        } 
      
  else
      {
  
        msgUtilisateur[6].style.display = "inline"
        msgUtilisateur[6].style.display = "block"
        InputValidity.checkConditions = false;
        checkConditions = 0;      
      }
    
    }
  
  
  
  // ---------------------------------------------------------------
  
  var  affichageMerciInscription = document.querySelector('#affMercii'); 
  
  const inputLocation = document.querySelector('input[name=location]').checked; 
  
  const allSpan = document.querySelectorAll('span'); 
  
  // ---------------------------------------------------------------
  
  function editNav() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    
    // DOM Elements
    const modalbg = document.querySelector(".bground");
    const modalBtn = document.querySelectorAll(".modal-btn");
    const formData = document.querySelectorAll(".formData");
   
  
    // launch modal event
    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
    
    // fermer modal form
    function fermerModal(e) {
  
         var SaisieIncomplete6 =  document.querySelector('#myOption'); 
         SaisieIncomplete6.style.opacity = 1;  
         var SaisieIncomplete7 =  document.querySelector('#Conditions'); 
        SaisieIncomplete7.style.opacity = 1; 
  
          formulaire.classList.remove("nonActif")
          btnFermer.classList.add("nonActif")
          InputValidity.checkPrenom =  false,
          InputValidity.checkNom = false,
          InputValidity.checkEmail = false,
          InputValidity.checkDate = false,
          InputValidity.checkQuantite = false,
          InputValidity.checkOption = false,
          InputValidity.checkConditions = true
        document.reserve.reset();
        affichageMerciInscription.innerHTML = "";
        affichageMerciInscription.style.display =  "none";
        modalbg.style.display = "none";
      }
  
  