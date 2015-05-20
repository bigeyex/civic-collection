Template.listItem.onRendered(function(){
	$('.list-of-lists .list-title').each(function(){
		$(this).geopattern($(this).text());
	});
});

Template.lists.helpers({
	lists: function(){
		return Lists.find();
	}
});

Template.lists.events({
	'click .new-list-link': function(e, t){
		Lists.insert({
			title: 'New List',
			desc: 'Edit to write descriptions',
			votes: 0,
			voted_users: [],
			repos: [],
			createdAt: new Date()
		});
	}
})

Template.listItem.created = function(){
	this.isEditing = new ReactiveVar(false);
	if(this.data.title === 'New List'){
		this.isEditing.set(true);
	}
}

Template.listItem.helpers({
	'editing': function(){
		return Template.instance().isEditing.get();
	}
});

Template.listItem.events({
	'click .edit-button': function(e, t){
		t.isEditing.set(true);
	},
	
	'click .cancel-button': function(e, t){
		t.isEditing.set(false);
	},
	
	'click .save-button': function(e, t){
		var new_data = {
			title: t.find('[name=title]').value,
			desc: t.find('[name=desc]').value
		};
		t.isEditing.set(false);
		Lists.update(this._id, {$set: new_data});
	}
});