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
		<footer className="mt-16 bg-black">
			<div className="container mx-auto px-[100px] py-8">
				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<div>
							<h3 className="text-lg font-semibold text-gray-300">Portfolio of Nishtha Nabya</h3>
						</div>
						<div className="mt-4 text-sm text-gray-400 max-w-md">
							Delivering data-driven answers that truly help users succeed.<br />Always learning. Always building.
						</div>
						<nav className="mt-8 flex flex-wrap gap-4 text-sm">
							<a href="/about" className="text-gray-300 hover:text-accent transition-colors">About</a>
							<a href="/work" className="text-gray-300 hover:text-accent transition-colors">Work</a>
							<a href="/projects" className="text-gray-300 hover:text-accent transition-colors">Projects</a>
						</nav>
					</div>
					<div className="relative">
						<div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
							<div className="flex items-center justify-between mb-3">
								<h3 className="text-base font-bold text-white">Let's Connect</h3>
								<div className="flex items-center gap-1">
									<div className="w-1 h-1 bg-accent rounded-full"></div>
									<div className="w-1 h-1 bg-accent/60 rounded-full"></div>
									<div className="w-1 h-1 bg-accent/30 rounded-full"></div>
								</div>
							</div>
							<form onSubmit={handleSubmit} className="space-y-3">
								<input 
									name="name" 
									type="text" 
									placeholder="Your name" 
									required 
									className="w-full rounded-lg border-0 bg-black/50 text-white placeholder-gray-500 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200" 
								/>
								<input 
									name="email" 
									type="email" 
									placeholder="your@email.com" 
									required 
									className="w-full rounded-lg border-0 bg-black/50 text-white placeholder-gray-500 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200" 
								/>
								<textarea 
									name="message" 
									rows={2} 
									placeholder="What's on your mind?" 
									required 
									className="w-full rounded-lg border-0 bg-black/50 text-white placeholder-gray-500 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200 resize-none" 
								/>
								<div className="flex justify-end">
									<button 
										type="submit" 
										className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 "
									>
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="mt-6 pt-4 border-t border-gray-800 text-xs text-gray-500 text-center">
					© {new Date().getFullYear()} Nishtha Nabya. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;









