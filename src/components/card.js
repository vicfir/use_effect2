// Creation de 3 boutons 1,2,3 
// Lors du click d'un de celui-ci afficher une cards d'un des 3 users comprenant le nom son email et sa ville. 
// Permettre à l utilisateur de rajouter un prénom, un age et/ou de modifier une des données enregistré.
// ====
// Au moment de l'affichage des cards afficher un bouton "assigner tache" a un User celui-ci permettra de choisir parmi les 3 taches de base et une fois la tache finis la valider avec une checkbox qui modifiera le background de la tache.

import React from 'react'

export const Card = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.name}</div>
            <p className="text-gray-700 text-base">{props.email}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.city}</span>
        </div>
    </div>
  )
}
