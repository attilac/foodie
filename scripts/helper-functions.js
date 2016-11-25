'use strict';

/**
 * Shufflar ordningen på en array
 * @param {array} o - listan att shuffla
 * @return {array} o - den shufflade listan
 */
function shuffleArray(o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
  return o;
}

/**
 * Hitta närmaste förälder med en given tag
 * @param {string} tag - taggen att leta efter
 * @param {object} element - elementet att utgå ifrån
 * @return {object} parent - ett DOM element
 */
function findParentNode(tag, element) {
  var parent = element.parentNode;
  var count = 1;
  while (parent.tagName != tag) {
    //console.log('My name is ' + parent.tagName + '. Let\'s try moving up one level to see what we get.');
    parent = parent.parentNode;
    count++;
  }
  // now you have the object you are looking for - do something with it
  //console.log('Finally found ' + parent.tagName + ' after going up ' + count + ' level(s) through the DOM tree');
  return parent;
}

/**
 * Hitta närmaste barn filtrerat av en klass
 * @param {string} className klassnamnet att söka efter
 * @param {object} element - elementet att söka i
 * @return {object} foundElement - ett DOM element
 */
function getChildNodeByClass(element, className) {
  var foundElement = null,
      found;
  function recurse(element, className, found) {
    for (var i = 0; i < element.children.length && !found; i++) {
      var el = element.children[i];
      var classes = el.className != undefined ? el.className.split(' ') : [];
      for (var j = 0, jl = classes.length; j < jl; j++) {
        if (classes[j] == className) {
          found = true;
          foundElement = element.children[i];
          break;
        }
      }
      if (found) break;
      recurse(element.children[i], className, found);
    }
  }
  recurse(element, className, false);
  return foundElement;
}

/**
 * Lägg till en CSS-klass till ett element
 * @param {string} className - klassen att lägga till
 */
function appendClass(element, className) {
  element.classList.add(className);
}

/**
 * Tar bort en CSS-klass från ett element
 * @param {string} className - klassen att ta bort
 */
function removeClass(element, className) {
  element.classList.remove(className);
}
//# sourceMappingURL=helper-functions.js.map
