// Ajouter la balise <style> avec type="text/tailwindcss" au corps s'il n'existe pas déjà
function addTailwindStyle() {
    let header = document.getElementById('id-top');
    // Vérifier si le header contient exactement deux divs
    if (header && header.children.length === 2) {
        const newDiv = document.createElement('div');
        let newDivLogo = document.createElement('div');

        newDivLogo.id = 'contentLogoXsuits';
        newDivLogo.innerHTML = `
                <div class="w-12 h-12">
                    <img src="../htdocs/theme/Xsuits/assest/img/LVoid.png" class="w-full" />
                </div>
            `;
        newDiv.id = 'contentSearch';

        newDiv.innerHTML = document.getElementById('blockvmenusearch').innerHTML;

        header.insertBefore(newDivLogo, header.children[1]);
        header.insertBefore(newDiv, header.children[2]);
        // console.log(header.children[2].querySelector('.select2.select2-container.select2-container--default'));
    } else {
        console.log("Le header ne contient pas exactement deux divs.");
    }
}


// Appel de la fonction pour ajouter le style Tailwind si nécessaire
addTailwindStyle();

let submenu = (submenu) => {
    let elementsubmenu = submenu;
    if (elementsubmenu) {
        if (elementsubmenu.length > 1) {
            // Créer une nouvelle div avec un ID et une classe
            var newDiv = document.createElement('div');
            newDiv.id = 'nouvelleDiv';
            newDiv.className = 'maClasse hidden';

            // Sélectionner la div spécifique où vous souhaitez déplacer la nouvelle div
            var specificDiv = elementsubmenu[0].parentNode.parentNode;
            let idleft = document.getElementById('id-left');
            newDiv.innerHTML = `${idleft.innerHTML}`;
            console.log(idleft);
            // Ajouter la nouvelle div à la fin de la div spécifique
            specificDiv.appendChild(newDiv);
        }
        for (element of elementsubmenu) {

            element.addEventListener('click', function(event) {
                event.preventDefault();
                document.querySelector('.maClasse').classList.toggle('hidden')
            });
        }
    }
}

submenu(document.querySelectorAll('.tmenusel a'));

let colorcard = (elementcard) => {
    let elements = elementcard;

    var colors = ['#005ac8', '#231f20', '#005ac8', '#ff5000', '#005ac8', '#ff5000', '#231f20', '#ff5000', '#005ac8', '#005ac8', '#231f20', '#005ac8'];

    for (var i = 0; i < elements.length; i++) {

        // elements[i].style.background = colors[i % colors.length];
        elements[i].style.setProperty('background-color', colors[i % colors.length], 'important');
        elements[i].parentNode.parentNode.style.setProperty('border-right-width', '4px');
        elements[i].parentNode.parentNode.style.setProperty('border-color', colors[i % colors.length]);
    }
}

colorcard(document.getElementsByClassName('info-box-icon'));