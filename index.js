/**
 * @package self-helpers
 * @description Package contenant un bon nombre des fonctions ou des logiques de code que nous utilisons régulièrement qui sont mis en fonctions
 * @author Don de Dieu Bolenge <dondedieubolenge@gmail.com>
 */

/**
 * Permet d'échapper les balises html dans la chaine de carctère passée en paramètre
 * @param {String} str La chaine à traquer et supprimer les balises
 * @return {String} str_striped
 */
exports.stripHtmlTags = (str) => {
    if (typeof str !== 'string') {
      return '';
    }
  
    return str.replace(/<[^>]*>/g, '');
};

/**
* Permet de formater la date avec des slashs
* @param {String} date_string chaine de la date à formater
* @returns {String} date_formated
*/
exports.formatDateWithSlash = function (date_string) {
    let date = new Date(date_string);
    let day = date.getDate() < 10 ? 0+''+date.getDate() : date.getDate();
    let month = date.getMonth() + 1;
    month = month == 13 ? 1 : month;
    month = month < 10 ? 0+''+month : month;
    let year = date.getFullYear();
 
    return day+'/'+month+'/'+year;
 }

 /**
* Permet de renvoyer un nombre aléatoire entre le min et le max
* @param {Number} min Le nombre minimum
* @param {Number} max Le nombre maximum
* @param {Boolean} integer Demande si le nombre doit être entier ou pas
*/
exports.rand = (min, max, integer = true) => {
    if(!integer) {
        return Math.random() * (max - min) + min;
    }else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

/**
 * Vérifie si un object est vide
 * @param {Object} object L'objet à tester
 * @return {Boolean}
 */
exports.objectEmpty = (object) => {

    return Object.keys(object).length <= 0;
}