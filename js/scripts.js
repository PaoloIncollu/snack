/*SNACK 1
Un album discografico è composto da più canzoni.
Ogni canzone ha le seguenti particolarità: titolo, nome cantante, anno, durata, autori.
Stampiamo la struttura in console.
Stampare a schermo la canzone che dura di più.*/


const album = [
    {
        titolo:'Lose Control',
        nomeCantante: 'Teddy Swims',
        anno: 2012,
        durata: 60,
        autori:'Teddy Swims'

    },

    {
        titolo:'Inertia',
        nomeCantante: 'The Hustlers',
        anno:2006,
        durata:167,
        autori:'The Hustlers'

    },

    {
        titolo:"L'Amour Toujour",
        nomeCantante: "Gigi D'Agostino",
        anno:2010,
        durata:260,
        autori:"Gigi D'Agostino"
    },

    {
        titolo:'Occhi da Orientale',
        nomeCantante: 'Daniele Silvestri',
        anno:2000,
        durata:220,
        autori:'Daniele Silvestri'
    }

];

let currentMusic = 0;
console.table(album);

for ( let i = 0; i < album.length; i++ )

    {
        if( album[i].durata > currentMusic){

            currentMusic=album[i].durata;
        }
    }

    console.table(currentMusic);

for ( let j=0; j< album.length; j ++){

    if (currentMusic == album[j].durata){

        console.table(album[j]);

    }
    
}









/*SNACK 2
Creare un array di oggetti: ogni oggetto descriverà un’automobile con le seguenti proprietà: nome, marca, cilindrata, colori disponibili e consumo (litri/km).
Stampare la struttura in console.
Stampare a schermo il nome e la marca dell’auto che consuma meno.*/