/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Sean Curtis
 * Email: curtisse@oregonstate.edu
 */


var addRecipesVar = document.getElementById("add-recipes-button");

function toggleModal() {

    document.getElementById("modal-backdrop2").classList.toggle('hidden2');
    document.getElementById("add-recipes-modal").classList.toggle('hidden2');
}

function addRecipes() {
    toggleModal();
}

addRecipesVar.addEventListener('click', addRecipes);

var exitButton = document.getElementById("modal-close2");
var cancelButton = document.getElementById("modal-cancel2");

function clear_input() {
    document.getElementById("post-text").value = "";
    document.getElementById("your-name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("instruction").value = "";
}


function sellModalInverse() {
    toggleModal();
    clear_input();
}

exitButton.addEventListener('click', sellModalInverse);
cancelButton.addEventListener('click', sellModalInverse);


var acceptButton = document.getElementById("modal-accept2");

function newPost() {
    var postText = document.getElementById("post-text").value;
    var nameText = document.getElementById("your-name").value;
    var descriptionText = document.getElementById("description").value;
    var ingredientsText = document.getElementById("ingredients").value;
    var instructionText = document.getElementById("instruction").value;
    // var conditionInput = document.querySelector("instru");
    // var condition = conditionInput.getAttribute('value');

    if (postText.length == 0) {
        window.alert("post-text");
        return false;
    }

    if (nameText.length == 0) {
        window.alert("your-name");
        return false;
    }

    if (descriptionText.length == 0) {
        window.alert("description");
        return false;
    }

    if (ingredientsText.length == 0) {
        window.alert("ingredients");
        return false;
    }

    if (instructionText.length == 0) {
        window.alert("instruction");
        return false;
    }

    var postAnchor = document.createElement('a');
    var descriptionText = document.createTextNode(postText);
    postAnchor.classList.add("post-title")
    postAnchor.href = "#";
    postAnchor.appendChild(descriptionText);

    // var postPrice = document.createElement('span');
    // var priceText = document.createTextNode("$" + postPriceText);
    // postPrice.classList.add("post-price");
    // postPrice.appendChild(priceText);

    var nameDiv = document.createElement('div');
    console.log(nameText);
    var nameDivText = document.createTextNode(nameText);
    // postCity.classList.add("user-name");
    nameDiv.appendChild(nameDivText);

    var recipeInfoContainer = document.createElement('div');
    recipeInfoContainer.classList.add("post-info-container");
    recipeInfoContainer.appendChild(postAnchor);
    recipeInfoContainer.appendChild(nameDiv);
    // recipeInfoContainer.appendChild(postCity);

    var postImg = document.createElement('img');
    var imgSRC = document.createAttribute('src');
    var imgDescription = document.createAttribute('alt');
    imgSRC.value = "";
    imgDescription.value = "";
    postImg.setAttributeNode(imgSRC);
    postImg.setAttributeNode(imgDescription);

    var postImgDiv = document.createElement('div');
    postImgDiv.classList.add("post-image-container");
    postImgDiv.appendChild(postImg);

    var postListing = document.createElement('div');
    postListing.classList.add("post-contents");
    postListing.appendChild(postImgDiv);
    postListing.appendChild(recipeInfoContainer)
    //postListing.appendChild(postInfoDiv);

    var newPost = document.createElement('div');
    var recipeImageAttribute = document.createAttribute("recipes-image-container");
    var recipeInfoAtrribute = document.createAttribute("recipe-info-container");
    //var conditionAttribute = document.createAttribute("data-condition")
    newPost.classList.add("post");
    // priceAttribute.value = recipeImageAttribute;
    // cityAtrribute.value = recipeInfoAtrribute;
    // conditionAttribute.value = condition;
    // newPost.setAttributeNode(priceAttribute);
    // newPost.setAttributeNode(cityAtrribute);
    // newPost.setAttributeNode(conditionAttribute);

    var postList = [];
    var bennysPosts = document.getElementsByClassName('post');
    for (var i = 0; i < bennysPosts.length; i++) {
        postList.push(bennysPosts[i])
    }
        newPost.appendChild(postListing);

    var posts = document.getElementById('posts');
    posts.appendChild(newPost);
    postList.push(newPost);

    toggleModal();
    clear_input();
}

acceptButton.addEventListener('click', newPost);