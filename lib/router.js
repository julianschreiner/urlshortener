import {
  Tasks
} from '../imports/api/tasks.js';

FlowRouter.route('/', {
    action: function(params, queryParams) {
      console.log("start");
    }
});

FlowRouter.route('/url/:urlID', {
  action: function(params, queryParams) {
    console.log("You are trying to access:", params.urlID);

    /*GOTO Original Website*/
    var searchForURL = window.location.href;
    console.log(searchForURL);
    http://localhost:3000/url/lLbjjurl/lLbjj
    setTimeout(function() {

      // Something you want delayed.
      var url = Tasks.findOne({
        shortened_url: searchForURL
      });
      console.log(url.url);
      window.location = url.url
    }, 500); // How long do you want the delay to be (in milliseconds)?

    //FlowRouter.path('/blog/my-post-id');

  }
});
