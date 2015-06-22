Router.onBeforeAction(function() {
	this.layout('Layout');
	this.next();
});

Router.route('/', function() {
	this.redirect('/splash');
});

Router.route('/splash', function() {
	this.render('Splash');
});

Router.route('/game', function() {
	Session.set('score', 0);
	this.render('Game');
});

Router.route('/gameover', function() {
	this.render('GameOver');
});

