Template.layout.events({
	'click .github-signin-button': function(e, l){
		Meteor.loginWithGithub({}, function(err){
			throw new Meteor.Error("Facebook login failed");
		});
	},
	
	'click .github-logout-button': function(e, l){
		Meteor.logout(function(err){
			if(err){
				throw new Meteor.Error("Logout failed");
			}
		})
	}
});