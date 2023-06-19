const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			token: localStorage.getItem("token") || null
		},

		actions: {
			newUsers: async (user) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/user", {
						method: "POST", //REVISAR ESTO SI VA ASI
						body: JSON.stringify(user),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await resp.json()
					setStore({
						user: data.results
					})
					console.log(data)
					// return data;
				}
				catch (err) {
					console.log(err)
				}
			},

			login: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify({
					  "email": email,
					  "password": password
					})
				  }
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/token`, opts)
					if (!response.ok) {
						alert("There has been some error");
						return false //no se repita
					}
					const data = await response.json();
					setStore({
						token: data.access_token //Aca guarda la data del token en el store
					})
					localStorage.setItem("token", data.access_token)
					// console.log(data.access_token)
				}
				catch (err) {
					console.log(err)
				}
			}


		}
	};
};

export default getState;



















// store: {
// 	message: null,
// 	demo: [
// 		{
// 			title: "FIRST",
// 			background: "white",
// 			initial: "white"
// 		},
// 		{
// 			title: "SECOND",
// 			background: "white",
// 			initial: "white"
// 		}
// 	]
// },

// actions: {
// 	// Use getActions to call a function within a fuction
// 	exampleFunction: () => {
// 		getActions().changeColor(0, "green");
// 	},

// 	getMessage: async () => {
// 		try{
// 			// fetching data from the backend
// 			const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
// 			const data = await resp.json()
// 			setStore({ message: data.message })
// 			// don't forget to return something, that is how the async resolves
// 			return data;
// 		}catch(error){
// 			console.log("Error loading message from backend", error)
// 		}
// 	},
// 	changeColor: (index, color) => {
// 		//get the store
// 		const store = getStore();

// 		//we have to loop the entire demo array to look for the respective index
// 		//and change its color
// 		const demo = store.demo.map((elm, i) => {
// 			if (i === index) elm.background = color;
// 			return elm;
// 		});

// 		//reset the global store
// 		setStore({ demo: demo });
// 	}
// }
