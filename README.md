# self-helpers

> Package Javascript contenant un bon nombre des fonctions ou des logiques de code que nous utilisons régulièrement qui sont mis en fonctions

## Installation

Ceci est un [Node.js](https://nodejs.org/en/) module disponible sur
[npm registry](https://www.npmjs.com/).

```bash
$ npm install self-helpers --save
```

## API

```js
const helpers = require('self-helpers');

console.log(helpers.rand(1,99))

```

#### rand(min, max, integer = true)

Permet de renvoyer un nombre aléatoire entre les nombres min et max
* `min` : Le nombre minimal
* `max` : Le nombre maximal
* `integer` : Définie si le aléatoire à retourner doit être un entier ou non

Exemple
```js
const { rand } = require('self-helpers');

console.log(rand(1,99, false));
```

#### stripHtmlTags(str)

Permet d'échapper (supprimer, enlever) les balises html dans la chaine de carctère passée en paramètre
* `str` : La chaine à traquer et supprimer les balises

Exemple
```js
const { stripHtmlTags } = require('self-helpers');

console.log(stripHtmlTags("<h1>Hello world !</h1>")); // Hello world !
```

#### formatDateWithSlash(date_string)

Permet de formater la date avec des slashs

* `date_string` : La chaine de la date à formater

Exemple
```js
const { formatDateWithSlash } = require('self-helpers');

console.log(formatDateWithSlash(new Date())); // d-m-y
```