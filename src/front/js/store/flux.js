const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			perfil: {},
			token: localStorage.getItem("token") || null
		},

		actions: {
			newUsers: async (user) => { //registro-1
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
			newPerfil: async (perfil) => { //registro-2
			try {
				const resp = await fetch(process.env.BACKEND_URL + "/api/perfil", {
					method: "POST",
					body: JSON.stringify(perfil),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const data = await resp.json()
				setStore({
					perfil: data.results
				})
				console.log(data);
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
			},
			logout: () => {
				localStorage.removeItem("token")
				console.log("Loging out")
				setStore({ token: null })
			},
			newimage: async (perfil) =>{

				try {

					const apiUrl = `https://api.cloudinary.com/v1_1/datq8v8mk/image/upload`

					const formMultimedia = new FormData()

					formMultimedia.append("upload_preset", "v9oseeuk")
					formMultimedia.append("file", perfil.photo)

					const respMediaBucket = await fetch(apiUrl, {
						method: "POST",
						body: formMultimedia
					})

					const dataCloudinary = await respMediaBucket.json()

					console.log(dataCloudinary)

					const resp = await fetch(process.env.BACKEND_URL + "/api/perfil",{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							"name": perfil.name,
							"last_name": perfil.last_name,
							"phone": perfil.phone,
							"age": perfil.age,
							"country": perfil.country,
							"state": perfil.state,
							"user_id": user.state,
							"image_url": dataCloudinary.url
						})
					})
					const data = await resp.json();
					
					console.log(data)
					
				} catch (error) {
					console.log(error)
				}
			},
			guardarcategoria: async (categoria)=>{
				try {

					const bodyfetch = {categorie_name: categoria }

					const resp = await fetch (process.env.BACKEND_URL + "/api/categories/seleccionar", {
						method: "POST",
						body: JSON.stringify(bodyfetch),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await resp.json()
					console.log(data);
					
				} catch (error) {
					
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
