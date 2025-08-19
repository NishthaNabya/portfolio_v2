const ContactStrip = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get('name');
		const email = form.get('email');
		const message = form.get('message');
		console.log({ name, email, message });
		alert('Thanks! Your message has been captured locally.');
		e.currentTarget.reset();
	};

	return (
		<section className="py-16 px-4 bg-white">
			<div className="flex justify-between items-end mb-6">
				<div>
					<h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
					<div className="w-24 h-1 bg-accent mt-2" />
				</div>
			</div>

			<div className="rounded-2xl border border-gray-200 p-6 md:p-8 bg-gray-50">
				<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					<div>
						<label htmlFor="name" className="block text-sm text-gray-700 mb-1">Name</label>
						<input id="name" name="name" type="text" required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
					</div>
					<div>
						<label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
						<input id="email" name="email" type="email" required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
					</div>
					<div className="md:col-span-2">
						<label htmlFor="message" className="block text-sm text-gray-700 mb-1">Message</label>
						<textarea id="message" name="message" rows={4} required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
					</div>
					<div className="md:col-span-2 flex justify-end">
						<button type="submit" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-md text-white bg-accent hover:opacity-90">Send message</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ContactStrip;



