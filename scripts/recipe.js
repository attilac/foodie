'use strict';

/**
 * Ett Recept-objekt
 * @constructor
 */
function Recipe(title, description, url, thumbnail, isVeg) {
	this.title = title;
	this.description = description;
	this.url = url;
	this.thumbnail = thumbnail;
	this.isVeg = isVeg;
}

/**
 *
 */
Recipe.prototype.updateView = function (element) {
	//appendClass(element, 'test-class');
	var recipeHeading = getChildNodeByClass(element, 'recipe-heading');
	var recipeDesc = getChildNodeByClass(element, 'recipe-description');
	var recipeUrl = getChildNodeByClass(element, 'recipe-url');
	var recipeThumb = getChildNodeByClass(element, 'recipe-thumb');
	recipeHeading.innerHTML = this.title;
	recipeDesc.innerHTML = this.description;
	recipeUrl.href = this.url;
	recipeThumb.innerHTML = '<img class="img-circle img-responsive" src="' + 'images/' + this.thumbnail + '" alt=""/>';
};
//# sourceMappingURL=recipe.js.map
