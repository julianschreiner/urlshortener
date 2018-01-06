import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

Template.body.helpers({
  tasks() {
     return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});


Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    let url = target.text.value;
    let shortened_url = window.location.href;
    shortened_url += "url/"
    shortened_url += makeid();


    console.log(shortened_url);


    // Insert a task into the collection
    Tasks.insert({
      url,
      shortened_url,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
