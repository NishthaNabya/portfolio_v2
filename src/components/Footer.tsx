const Footer = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		console.log({
			name: form.get('name'),
			email: form.get('email'),
			message: form.get('message'),
		});
		alert('Thanks! Your message has been captured locally.');
		e.currentTarget.reset();
	};

	return (
		<footer className="mt-16 border-t border-gray-200">
			<div className="container mx-auto px-[100px] py-10">
				<div className="grid gap-10 md:grid-cols-2">
					<div>
						<div className="flex items-center gap-3">
							<span className="text-accent font-bold text-2xl">LW</span>
							<div className="text-sm text-gray-600">Portfolio of Nishtha Nabya</div>
						</div>
						<div className="mt-4 text-sm text-gray-700 max-w-md">
							Crafting clean, thoughtful experiences across analytics, systems, and design. Always learning. Always building.
						</div>
						<nav className="mt-6 flex flex-wrap gap-4 text-sm">
							<a href="/about" className="text-gray-800 hover:text-accent">About</a>
							<a href="/projects" className="text-gray-800 hover:text-accent">Projects</a>
							<a href="/work" className="text-gray-800 hover:text-accent">Work</a>
							<a href="/leadership" className="text-gray-800 hover:text-accent">Leadership</a>
						</nav>
					</div>
					<div>
						<h3 className="text-lg font-bold text-gray-900">Contact</h3>
						<div className="w-16 h-[3px] bg-accent mt-2" />
						<form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3">
							<input name="name" type="text" placeholder="Your name" required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
							<input name="email" type="email" placeholder="Email" required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
							<textarea name="message" rows={4} placeholder="Message" required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
							<div className="flex justify-end">
								<button type="submit" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-md text-white bg-accent hover:opacity-90">Send</button>
							</div>
						</form>
					</div>
				</div>
				<div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Nishtha Nabya. All rights reserved.</div>
			</div>
		</footer>
	);
};

export default Footer;



