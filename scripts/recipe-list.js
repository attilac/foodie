"use strict";

/**
 * En Recipelista
 * @constructor
 */
function RecipeList() {
  this.recipes = [];
  this.currentIndex = 0;
}

/**
 * Lägger till ett recept till listan.
 * @param {object} - ett Recipe-objekt
 */
RecipeList.prototype.addRecipe = function (recipe) {
  this.recipes.push(recipe);
};

/**
 * Hämta ett slumpat recept från listan
 * @param {boolean} isVeg
 * @return {object} ett Recipe-objekt
 */
RecipeList.prototype.shuffleRecipes = function (isVeg) {
  var recipes = this.getFilteredList(isVeg);
  this.recipes = shuffleArray(recipes);
  //console.log(this.recipes.length);
  //return this.recipes;
};

/**
 * Hämtar nästa recept från listan
 * @return {object} ett Recipe-objekt
 */
RecipeList.prototype.getnextRecipe = function () {
  if (this.currentIndex < this.recipes.length - 1) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0;
  }
  //console.log(this.currentIndex);
  return this.recipes[this.currentIndex];
};

/**
 * Hämta en filtrerad lista - vegetarisk eller inte vegetarisk
 * @param {boolean} isVeg
 * @return {array} filteredList - en array
 */
RecipeList.prototype.getFilteredList = function (isVeg) {
  var filteredList = [];
  if (isVeg === true) {
    var arrByVeg = this.recipes.filter(this.filterByVeg);
    //console.log(typeof arrByVeg);
    filteredList = arrByVeg;
  } else {
    //console.log(this.recipes);	
    filteredList = this.recipes.filter(this.filterOutVeg);
  }
  return filteredList;
};

/**
 * Filtrera listan på vegetarisk alternativ
 */
RecipeList.prototype.filterByVeg = function (element) {
  //console.log(element.isVeg);
  if (element.isVeg) {
    return true;
  } else {
    return false;
  }
};

/**
 * Filtrera listan på icke vegetariska alternativ
 */
RecipeList.prototype.filterOutVeg = function (element) {
  //console.log(! element.isVeg);
  if (!element.isVeg) {
    return true;
  } else {
    return false;
  }
};
//# sourceMappingURL=recipe-list.js.map
