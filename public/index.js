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

function modalPost(){
    document.getElementById("modal-backdrop2").classList.toggle('hidden2');
    document.getElementById("add-recipes-modal").classList.toggle('hidden2');
}

var readMoreButtons = document.querySelectorAll("[id='read-more-button']");
var modalBackDrops = document.querySelectorAll("[id='modal-backdrop']");
var readMoreModals = document.querySelectorAll("[id='read-more-modal']");
var exitButtonModals = document.querySelectorAll("[id='modal-close']");
var closeButtonModals = document.querySelectorAll("[id='modal-cancel']");

function modalPost1(){
    modalBackDrops[0].classList.toggle('hidden');
    readMoreModals[0].classList.toggle('hidden');
}

function modalPost2(){
    modalBackDrops[1].classList.toggle('hidden');
    readMoreModals[1].classList.toggle('hidden');
}


exitButton.addEventListener('click', sellModalInverse);
cancelButton.addEventListener('click', sellModalInverse);
readMoreButtons[0].addEventListener('click', modalPost1);
closeButtonModals[0].addEventListener('click', modalPost1);
exitButtonModals[0].addEventListener('click', modalPost1);
//readMoreButtons[1].addEventListener('click', modalPost2);
//closeButtonModals[1].addEventListener('click', modalPost2);
//exitButtonModals[1].addEventListener('click', modalPost2);

//readMoreButtons[0].addEventListener('click', sellModalInverse);




var acceptButton = document.getElementById("modal-accept2");

function newPost() {

    var nameText = document.getElementById("your-name").value;
    var descriptionText = document.getElementById("description").value;
    var ingredientsText = document.getElementById("ingredients").value;
    var instructionText = document.getElementById("instruction").value

    var post = {
        "name": nameText,
        "url": ingredientsText,
        "description": descriptionText,
        "author": instructionText
    }

    var post2 = Handlebars.templates.recipeCard(post)

    var section = document.getElementById("posts")

    section.insertAdjacentHTML("beforeend", post2)




    var addrecipes = document.getElementById('add-recipes-modal');
    var modalBackdrop = document.getElementById('modal-backdrop2');

    addrecipes.classList.add('hidden2');
    modalBackdrop.classList.add('hidden2');

    clearSellSomethingModalInputs();

    /*
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
    var foodNameText = document.createTextNode(postText);
    postAnchor.classList.add("recipes-name");
    postAnchor.href = "#";
    postAnchor.appendChild(foodNameText);

    // var postPrice = document.createElement('span');
    // var priceText = document.createTextNode("$" + postPriceText);
    // postPrice.classList.add("post-price");
    // postPrice.appendChild(priceText);

    var nameDiv = document.createElement('div');
    console.log(nameText);
    var nameDivText = document.createTextNode(nameText);
    nameDiv.classList.add("user-name");
    // postCity.classList.add("user-name");
    nameDiv.appendChild(nameDivText);

    var descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add("description");
    descriptionContainer.textContent = "Description:"

    var descriptionTextContainer = document.createElement('div');
    descriptionTextContainer.classList.add("description-text");
    descriptionTextContainer.textContent = descriptionText;

    var recipeInfoContainer = document.createElement('div');
    recipeInfoContainer.classList.add("recipe-info-container");
    recipeInfoContainer.appendChild(postAnchor);
    recipeInfoContainer.appendChild(nameDiv);
    recipeInfoContainer.appendChild(descriptionContainer);
    recipeInfoContainer.appendChild(descriptionTextContainer);

    var readMoreButton = document.createElement('button');
    readMoreButton.id = "read-more-button";
    readMoreButton.textContent = "READ MORE";

    var modalBackdropDiv = document.createElement('div');
    modalBackdropDiv.id = "modal-backdrop";
    modalBackdropDiv.classList.add("hidden");

    var readMoreModalDiv = document.createElement('div');
    readMoreModalDiv.id = "read-more-modal";
    readMoreModalDiv.classList.add("hidden");

    var modalDialogDiv = document.createElement('div');
    modalDialogDiv.classList.add("modal-dialog");


    var modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.classList.add("modal-header");
    var modalHeaderH3 = document.createElement('h3');
    modalHeaderH3.textContent = "More Information About the Recipe";
    var modalExitButton = document.createElement('button');
    modalExitButton.id = "modal-close";
    modalExitButton.classList.add("modal-hide-button");
    modalExitButton.textContent = "×";

    modalHeaderDiv.appendChild(modalHeaderH3);
    modalHeaderDiv.appendChild(modalExitButton);

    var modalBodyDiv = document.createElement('div');
    modalBodyDiv.classList.add("modal-body");

    var recipeInputDiv = document.createElement('div');
    recipeInputDiv.classList.add("recipes-input");

    var ingredientsLabel = document.createElement('label');
    ingredientsLabel.textContent = "Ingredients";
    var ingredientsP = document.createElement('p');
    ingredientsP.textContent = ingredientsText;
    var directionsLabel = document.createElement('label');
    directionsLabel.textContent = "Directions";
    var directionsP = document.createElement('p');
    directionsP.textContent = instructionText;

    recipeInputDiv.appendChild(ingredientsLabel);
    recipeInputDiv.appendChild(ingredientsP);
    recipeInputDiv.appendChild(directionsLabel);
    recipeInputDiv.appendChild(directionsP);

    modalBodyDiv.appendChild(recipeInputDiv);


    var modalFooterDiv = document.createElement('div');
    modalFooterDiv.classList.add("modal-footer");
    var modalFooterButton = document.createElement('button');
    modalFooterButton.id = "modal-cancel";
    modalFooterButton.classList.add("modal-hide-button");
    modalFooterButton.classList.add("action-button");
    modalFooterButton.textContent = "Close";

    modalFooterDiv.appendChild(modalFooterButton);


    modalDialogDiv.appendChild(modalHeaderDiv);
    modalDialogDiv.appendChild(modalBodyDiv);
    modalDialogDiv.appendChild(modalFooterDiv);

    readMoreModalDiv.appendChild(modalDialogDiv);    

    function readMoreModal(){
        console.log(modalExitButton.textContent)
        modalBackdropDiv.classList.toggle('hidden');
        readMoreModalDiv.classList.toggle('hidden');
    }


    readMoreButton.addEventListener('click', readMoreModal);
    modalFooterDiv.addEventListener('click', readMoreModal);
    modalExitButton.addEventListener('click', readMoreModal);


    // var modalBodyDiv
    // var modalFooterDiv


    




    // recipeInfoContainer.appendChild(postCity);

    var postImg = document.createElement('img');
    var imgSRC = document.createAttribute('src');
    var imgDescription = document.createAttribute('alt');
    imgSRC.value = "###";
    imgDescription.value = "###";
    postImg.setAttributeNode(imgSRC);
    postImg.setAttributeNode(imgDescription);

    var postImgDiv = document.createElement('div');
    postImgDiv.classList.add("recipes-image-container");
    postImgDiv.appendChild(postImg);

    var postListing = document.createElement('div');
    postListing.classList.add("post-contents");
    postListing.appendChild(postImgDiv);
    postListing.appendChild(recipeInfoContainer)
    postListing.appendChild(readMoreButton);
    postListing.appendChild(modalBackdropDiv);
    postListing.appendChild(readMoreModalDiv);
    
    //postListing.appendChild(postInfoDiv);

    var newPost = document.createElement('div');
    var recipeImageAttribute = document.createAttribute("recipes-image-container");
    var recipeInfoAtrribute = document.createAttribute("recipe-info-container");
    //var conditionAttribute = document.createAttribute("data-condition")
    //postImgDiv.classList.add("recipes-image-container");
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
    */
}

function clearSellSomethingModalInputs() {

  var postTextInputElements = [
    document.getElementById('your-name'),
    document.getElementById('description'),
    document.getElementById('ingredients'),
    document.getElementById('instruction'),
    document.getElementById("post-text")
  ];

  /*
   * Clear any text entered in the text inputs.
   */
  postTextInputElements.forEach(function (inputElem) {
    inputElem.value = '';
  });

  /*
   * Grab the originally checked radio button and make sure it's checked.
   */
  var checkedPostConditionButton = document.querySelector('#post-condition-fieldset input[checked]');
  checkedPostConditionButton.checked = true;

}

acceptButton.addEventListener('click', newPost);
