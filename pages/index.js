import Link from 'next/link';

export default HomePage;

function HomePage() {
	return (
		<>
			<header>
				<h1>dots</h1>
			</header>
			<nav>
				<Link href="/timed">
					<a>Timed</a>
				</Link>
				<Link href="/moves">
					<a>Moves</a>
				</Link>
			</nav>
		</>
	);
}
