import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Profile = () => {

	return (
		<div className="text-center mt-5">
            <h1>Pagina de Perfil</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ante non ante scelerisque blandit. Aliquam sit amet felis sit amet lectus pulvinar facilisis. Donec et dui quis odio faucibus rhoncus eget at diam. Maecenas nec felis non ipsum finibus consequat in nec purus. Etiam venenatis elementum sollicitudin. Pellentesque dolor dolor, tristique a lectus nec, viverra iaculis elit. Ut sed urna in metus tempus hendrerit non et ex. In fermentum dictum mauris, nec rutrum augue gravida id. Nam massa nisi, aliquet elementum vulputate eu, tempor id diam. Suspendisse vitae pellentesque ante, at rutrum urna. Aliquam a neque elit. Suspendisse placerat a nulla ut tincidunt. Nam vitae nunc nec purus elementum consectetur. Vivamus eget dapibus risus.</p>
            <Link to= "/">
			<span className="btn btn-primary btn-lg" href="#" role="button">
					Go to home
				</span>
			</Link>
        </div>
	);
};
