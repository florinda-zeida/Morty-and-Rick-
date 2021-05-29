import axios from "axios";
import { BASE_URL } from "../constants/Api";
import Link from "next/link";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Heading from "../components/Heading";

export async function getStaticProps() {
	
	let results = [];

	try {
		const response = await axios.get(BASE_URL);

		console.log(response.data.results);
	
		results = response.data.results;
	} catch (error) {
		console.log(error);
	}


	return {
		props: { characters: results }
	}
}

const Characters = ({ characters }) => {
	return (
		<Layout>
		<Head />
		<div>
		  <Heading content="Characters Morty and Rick" />
			{characters.map(character => (
			<Link href={`/characters/`+ character.id } key={character.id}>
			<h3 className="link">{ character.name }</h3>
			</Link>

		))}

		</div>
		</Layout>
	)
}

export default Characters;