'use strict';

/**
 * Skapa en array med Recipe-objekt från en JSON-array och lägg till i en RecipeList
 * @param {array} arr - arrayen att parsa ( ursäkta svengelskan :)
 */
function getRecipeData(arr) {
	for (var i = 0; i < arr.length; i++) {
		var recipe = new Recipe(arr[i].title, arr[i].description, arr[i].url, arr[i].thumbnail, arr[i].isVeg);
		recipeList.addRecipe(recipe);
	}
}

/**
 * Eventhandler för refreshknappen.
 */
function refreshHandler(event) {
	event.preventDefault();
	console.log(event);
	var targetElement = document.getElementById(this.dataset.target);

	if (Modernizr.csstransitions) {
		//console.log('Modernizr');	
		transitionOut(targetElement);
	} else {
		var recipe = recipeList.getnextRecipe();
		recipe.updateView(targetElement);
	}
}

/**
 * Eventhandler för checkbox. Hämtar ny data från JSON till RecipeList.recipes och shufflar listan.
 */
function checkBoxHandler() {
	var isVeg = false;
	if (this.checked) {
		isVeg = true;
	}
	getRecipeData(recipeData);
	recipeList.currentIndex = 0;
	recipeList.shuffleRecipes(isVeg);
}

/**
 * Lägger till klassen in för att trigga css-transition in.
 * @param {object} element - elementet att lägga till in-klassen i.
 */
function transitionIn(element) {
	if (!element.classList.contains('in')) {
		appendClass(element, 'in');
	}
	//console.log(element.className);
	console.log('transition in');
}

/**
 * Tar bort klassen in för att trigga css-transition ut.
 * @param {object} element - elementet att ta bort in-klassen från.
 */
function transitionOut(element) {
	if (element.classList.contains('in')) {
		removeClass(element, 'in');
	}
	console.log('transition out');
}

/**
 * Eventhandler för css-transition slut
 */
function onTransitionEnd(event) {
	//console.log(event.target.classList.value);
	if (!event.target.classList.contains('in')) {
		var recipe = recipeList.getnextRecipe();
		recipe.updateView(event.target);
		transitionIn(event.target);
		console.log(recipeList.currentIndex);
		console.log(recipe);
	}
	if (event.target.classList.contains('first')) {
		removeClass(event.target, 'first');
	}
}

/**
 * Triggar klick för att ladda in första receptet. 
 * Väntar tills DOM har laddat färdigt.
 */

document.addEventListener('DOMContentLoaded', function (event) {
	console.log('DOMContentLoaded');
	//refreshBtn.click();
	var recipe = recipeList.getnextRecipe();
	recipe.updateView(recipeBox);
	if (recipeBox.classList.contains('first')) {
		removeClass(recipeBox, 'first');
		console.log('first');
	}
}, false);

// App
var refreshBtn = document.getElementsByClassName('btn-next-recipe')[0];
refreshBtn.addEventListener('click', refreshHandler);

var vegCheckbox = document.getElementById('vegCheckbox');
vegCheckbox.addEventListener('change', checkBoxHandler);

var recipeBox = document.getElementById('recipeBox');
recipeBox.addEventListener('transitionend', function (event) {
	console.log('transition end');
	onTransitionEnd(event);
}, false);

var recipeList = new RecipeList();
getRecipeData(recipeData);
recipeList.shuffleRecipes(vegCheckbox.checked);
//console.log(recipeList.recipes.length);
//# sourceMappingURL=app.js.map
