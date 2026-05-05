// Etat initial
const rowConnexion = document.querySelector('.rowConn')
const rowInsc = document.querySelector('.rowInsc')
connexion(rowConnexion)
// inscription(rowInsc)

const wrapper = document.querySelector('.wrapper');

// document.querySelector('.ins').addEventListener('click', function(e){
//     console.log("Changement vers l'autre");
//     e.preventDefault();
//     wrapper.classList.add('rotate-to-auth');

//     setTimeout(()=>{
//         document.querySelector('.divCol').remove()
//     }, 1000)

// });

// document.querySelector('.conn').addEventListener('click', function(e){
//     e.preventDefault();
//     wrapper.classList.remove('rotate-to-auth');

//     connexion(rowConnexion)
// });



function connexion(row){
    const divCol = document.createElement('div')
    
    divCol.classList.add('col-lg-6', 'text', 'ps-4', 'order-1', 'order-lg-2', 'divCol')
    

    divCol.innerHTML = `
        <div class="logo pe-4">
            <img src="images/indrive-icon-logo.png" alt="">
        </div>
        <div class="titre pe-4">
            <h1>Connectez-vous</h1>
            <p>Choisissez votre prix</p>
        </div>
        <form action="" method="post" class="pe-4">
            <input type="text" class="form-control" placeholder="Nom">
            <input type="password" class="form-control" placeholder="Mots de passe">
            <div class="text-end mt-3">
                <a href="" style="text-decoration: none; color: #000;" class="ms-auto text-end">Etes vous chauffeur?</a>
            </div>
            
            <input type="submit" value="Se connecter" class="btn btn-dark w-50 d-block mx-auto inscri my-4">
            <p class="insc">
                Pas encore de compte? 
                <a href="#" class="ins">S'inscrire</a>
            </p>
        </form>
    `

    row.appendChild(divCol)

    document.querySelector('.ins').addEventListener('click', function(e){
        e.preventDefault();
        wrapper.classList.add('rotate-to-auth');

        inscription(rowInsc)
    
        setTimeout(()=>{
            document.querySelector('.divCol').remove()
        }, 1000) 
    });
}

function inscription(row){
    const divCol2 = document.createElement('div')
    divCol2.classList.add('col-lg-6', 'text', 'divCol2')
    divCol2.innerHTML = `
        <div class="logo px-4">
            <img src="images/indrive-icon-logo.png" alt="">
        </div>
        <div class="titre px-4">
            <h1>Inscrivez-vous</h1>
            <p>Choisissez votre prix</p>
        </div>
        <form action="" method="post" class="px-4">
            <input type="text" class="form-control" placeholder="Nom" value="Rakoto" class="is-invalid">
            <input type="text" class="form-control" placeholder="Prénom">
            <input type="email" class="form-control" placeholder="Email">
            <input type="password" class="form-control" placeholder="Mots de passe">
            <input type="password" class="form-control" placeholder="Vérifier mots de passe">
            <div class="text-end mt-3">
                <a href="" style="text-decoration: none; color: #000;" class="ms-auto text-end">Etes vous chauffeur?</a>
            </div>
            
            <input type="submit" value="S'inscrire" class="btn btn-dark w-50 d-block mx-auto inscri my-4">
            <p>Déja une compte? <a href="" class="conn">Se connecter</a></p>
        </form>
    `

    row.prepend(divCol2)

    document.querySelector('.conn').addEventListener('click', function(e){
        e.preventDefault();
        wrapper.classList.remove('rotate-to-auth');
    
        connexion(rowConnexion)

        setTimeout(()=>{
            document.querySelector('.divCol2').remove()
        }, 1000) 

    });

    
}