import axios from "axios";
import { BASE_URL } from "../../constants/Api";
import Layout from "../../components/Layout";
import Head from "../../components/Head";
import Heading from "../../components/Heading";

const url = BASE_URL

export async function getStaticPaths() {
	try {
		
		const response = await axios.get(url);
		
		console.log(response.data.results);
		
		const data = response.data.results;

		const paths = data.map((character) => ({
			params: { id: character.id.toString() },
		}));

		console.log(paths);

		return { paths, fallback: false };

	} catch (error) {
		console.log(error);
	}
}


export const getStaticProps = async (props) => {
	const id = props.params.id;
	const response = await fetch ( url + id );
	const data = await response.json();

	
	console.log(data);

	return {
		props: { character: data}
	}
	
}


const Details = ({ character }) => {
	return (

		<Layout>
		<Head />
		<Heading content="Character Detail" />
		<div className="container_card">
					<div className="card">
						<h2>{ character.name}</h2>
						<img src={character.image} />
						<h3>{ character.species}</h3>
					</div>
		</div>
		</Layout>
	)
}

export default Details;