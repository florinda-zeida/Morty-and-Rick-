import Link from "next/link";
import Head from "../components/Head";
import Layout from "../components/Layout";
import Heading from "../components/Heading";


export default function Home() {
	
	return (

		<Layout className="container">
			<Head />
			<Heading content="Home" />
			<Link href="/results"><h3 className="link">View Morty and Rick characters</h3></Link>
		</Layout>
	);
}

