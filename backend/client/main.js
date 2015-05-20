Template.layout.events({
	'click .github-signin-button': function(e, l){
		Meteor.loginWithGithub();
	}
});