const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			URL_BASE: "https://swapi.dev/api", 
			personas: [],
			planetas: [],
			favoritos: []

		},
		actions: {
			getPeople: async () => {
				const store = getStore()
				let response = await fetch(`${store.URL_BASE}/people`);
				if (response.ok){
					let body  = await response.json()
					console.log(body)
					setStore({personas:body.results})
				}
			},


			getPlanets: async () => {
				const store = getStore()
				let response = await fetch(`${store.URL_BASE}/planets`);
				if (response.ok){
					let body  = await response.json()
					setStore({planetas:body.results})
				}
			}


			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
					
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
