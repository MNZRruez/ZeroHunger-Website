function submitForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var update = document.getElementById('updates').value;
    var improv = document.getElementById('improv').value;
    
    var hasError = false; 

    if (!name) {
        document.getElementById('name-error').classList.add('active-block');
        hasError = true; // true if error occurs
    } else {
        document.getElementById('name-error').classList.remove('active-block');
    }

    if (!update) {
        document.getElementById('updates-error').classList.add('active-block');
        hasError = true; 
    } else {
        document.getElementById('updates-error').classList.remove('active-block');
    }

    if (!improv) {
        document.getElementById('improv-error').classList.add('active-block');
        hasError = true; 
    } else {
        document.getElementById('improv-error').classList.remove('active-block');
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('mail-error').classList.add('active-block');
        hasError = true;s
    } else {
        document.getElementById('mail-error').classList.remove('active-block');
    }

    // If any error occurred display error message
    if (hasError) {
        return;
    }


    document.getElementById("preview-name").textContent = name;
    document.getElementById("preview-email").textContent = email;
    document.getElementById("preview-ftime").textContent = getRadioValue("first");
    document.getElementById("preview-easy").textContent = getRadioValue("easy");
    document.getElementById("preview-improv").textContent = improv;
    document.getElementById("preview-satis").textContent = getRadioValue("rating");
    document.getElementById("preview-recom").textContent = getRadioValue("recom");
    document.getElementById("preview-updates").textContent = update;
    document.getElementById("preview-req").textContent = document.getElementById("requests").value;


    showPreview();
    
}

function getRadioValue(name){
    const radios = document.getElementsByName(name);
    let value = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            value = radios[i].value;
            break;
        }
      }
    
    return value;
}

function showPreview(){
    const previewSection = document.querySelector(".preview");
    const formSection = document.querySelector(".feed-form");

    formSection.classList.add("active-none");
    previewSection.classList.remove("active-none");
}

function editPreview() {
    // Hide preview section and show form section
    const previewSection = document.querySelector(".preview");
    const formSection = document.querySelector(".feed-form");

    previewSection.classList.add("active-none");
    formSection.classList.remove("active-none");
}

function confirm(){
    alert('Form submitted successfully!');
   
}

function submitFormAndReload() {
    // Submit the form via mailto
    document.getElementById("myForm").action = "mailto:example@example.com";
    document.getElementById("myForm").submit();
    
    // Reload the page after a slight delay to ensure the mailto action has been triggered
    setTimeout(function() {
        location.reload();
    }, 500); // Adjust the delay as needed
}