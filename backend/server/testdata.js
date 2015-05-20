if(Lists.find().count() === 0){
	Lists.insert({
		title: 'Hackerspace',
		desc: 'Tools for organizing a hackerspace.',
		votes: 0,
		voted_users: [],
		repos: [],
		createdAt: new Date()
	});
	
	Lists.insert({
		title: 'City Maps',
		desc: 'Visualizing city data in a map.',
		votes: 0,
		voted_users: [],
		repos: [],
		createdAt: new Date()
	});
}