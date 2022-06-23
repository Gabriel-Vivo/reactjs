export const listadoProdutos=[
	{	id:1,
		
		content:"",
		description:"Queso pategrás, tomates marinados, lechuga capuchina y alioli",		
        img:"https://www.denirohamburgueseria.com.ar/img/icon_paticomple.png",		
		name:"PATICOMPLÉ"
		
	},
	{	id:2,
		content:"",
		description:"Queso provoleta con chimichurri, morcilla, morrón a la plancha, cebolla roja y ketchup ahumado",		
		img:"https://www.denirohamburgueseria.com.ar/img/icon_parrillera.png",		
		name:"PARRILLERA",
		
	},
		{ id:3,
		
		content:"",
		description:"Queso reggianito, batata frita, sarza (cebolla, limón, jalapeño, cilantro) y salsa HuancaínaS",		
		img:"https://www.denirohamburgueseria.com.ar/img/icon_cuzcoHatuchay.png",		
		name:"CUZCO HATUCHAY",
		
	},

]



export const getProductById = (id) =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(listadoProdutos.length>0){
                resolve(listadoProdutos.find(unProducto => unProducto.id === parseInt(id)))}//recorre el array y nos trae el id solicitado 
            else{
                reject("Sin datos")
            } 
        }, 500);
    })
}
