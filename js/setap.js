'use strict';

var wizardNames = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var wizardCoatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var numbersOfWizards = 4;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var wizardTamplate = document.querySelector('#similar-wizard-template').content;

var getRandomItem = function(list) {
  return list[Math.floor(Math.random()*list.length)];
};

var generateWizard = function(){
  return{
    name: getRandomItem(wizardNames) + ' ' + getRandomItem(wizardSurnames),
    coatColor: getRandomItem(wizardCoatColor),
    eyesColor: getRandomItem(eyesColor)
  };
};

var generateWizardsList = function (number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards.push(generateWizard());
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var element = wizardTamplate.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = wizard.name;
  element.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  element.querySelector ('.wizard-eyes').style.fill = wizard.eyesColor;
  return element;
};

var renderWizardList = function (wizards) {
  var wizardList = setup.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  wizardList.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');
};

renderWizardList(generateWizardsList(numbersOfWizards));
