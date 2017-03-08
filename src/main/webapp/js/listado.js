var listadoCelulares = [
		
		{
			"id": 1,
			"marca": "Motorola",
			"modelo": "G 4 PLAY",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": "5 Pulgadas",
			"pantalla_resolucion": "1280x720",
			"camara_resolucion": "8 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		},
		{
			"id": 2,
			"marca": "Samsung",
			"modelo": "GALAXY J5 J510",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": "5.2 Pulgadas",
			"pantalla_resolucion": "720x1280",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		},
		{
			"id": 3,
			"marca": "Samsung",
			"modelo": "GALAXY J7 J710",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": "5.5 Pulgadas",
			"pantalla_resolucion": "1280x720",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		},
		{
			"id": 4,
			"marca": "Huawei",
			"modelo": "Y360D",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": "4 Pulgadas",
			"pantalla_resolucion": "800x480",
			"camara_resolucion": "5 Mpx",
			"camara_frontal": true,
			"camara_frontal_res": "2 Mpx",
			"memoria_interna": "4 GB",
			"flash": true
		},
		{
			"id": 5,
			"marca": "Lenovo",
			"modelo": "VIBE K5",
			"sistema_operativo": "Android",
			"pantalla_pulgadas": "5 Pulgadas",
			"pantalla_resolucion": "800x480",
			"camara_resolucion": "13 Mpx",
			"camara_frontal": false,
			"camara_frontal_res": "5 Mpx",
			"memoria_interna": "16 GB",
			"flash": true
		}
	];


function agregarElementos() {

	var hola = document.createTextNode("Hola");
	var tarola = document.createElement("p");
	tarola.appendChild(hola);
	nuevosElementos.appendChild(tarola);
	
}

function escribir(){


}



function crearParrafo(){


	var parrafo = document.createElement("p");
	var texto = document.createTextNode(textoAagregar);
	parrafo.appendChild(texto);
	elBoton.appendChild(parrafo);
	
}

for (var cont= 0; cont < listadoCelulares.length; cont++){

	var textoAagregar = listadoCelulares[1].marca;
	crearParrafo(textoAagregar);


}


