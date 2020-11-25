  
export const validateField = (key, value, module) => {
    let errors = '';
    switch (key) {
      case 'nom':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller remplir le champ nom';
        }
        break;
      case 'prenom':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller remplir le champ prenom';
        }
        break;
      case 'profil':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller choisir un profil';
        }
        break;
      case 'password':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller remplir le champ password';
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)) {
          errors =
            'Le mot de passe doit avoir au moins un caractere special, un nombre et une lettre majiscule';
        }
        break;
      case 'mail':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller remplir le champ password';
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          errors = "Veuiller saisir un format valid pour l'email";
        }
        break;
      case 'tel':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller remplir le champ password';
        }
        if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value)) {
          errors = 'Veuiller saisir un format valid pour le numero telephone';
        }
        break;
      case 'ville':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller Selectionnez une ville';
        }
        break;
      case 'adresse':
        if (value === null || value === '' || value === undefined) {
          errors = "Veuiller remplir l'adresse";
        }
        break;
      case 'dateDebut':
        if (
          (value === null || value === '' || value === undefined) &&
          (module === 'Action' || module === 'Convention')
        ) {
          errors = 'Veuiller remplir la date debut';
        }
        break;
      case 'dateFin':
        if (
          (value === null || value === '' || value === undefined) &&
          (module === 'Action' || module === 'Convention')
        ) {
          errors = 'Veuiller remplir la date fin';
        }
        break;
      case 'status':
        if (
          (value === null || value === '' || value === undefined) &&
          (module === 'Action' || module === 'Convention')
        ) {
          errors = 'Veuiller remplir la status';
        }
        break;
      case 'duree':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller remplir la duree';
        }
        break;
      case 'pourcentage':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller remplir le pourcentage';
        }
        break;
      case 'convention':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller choisir une convention';
        }
        break;
      case 'intervenants':
        if (value === null || value === '' || value === undefined) {
          errors = 'Veuiller choisir au moins un intervenant';
        }
        break;
      default:
        break;
    }
    return errors;
  };