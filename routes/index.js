
/*
 * GET home page.
 */

exports.home = function(req, res) {
  switch (req.route.path) {
    case '/':
      res.render('home', { page: '/' });
      break;
  }
};

exports.help = function(req, res) {
  switch (req.route.path) {
    case '/help':
      res.render('help', { page: 'help' });
      break;
    case '/help-body':
      res.render('body/help');
      break;
  }
};

exports.about = function(req, res) {
  switch (req.route.path) {
    case '/about':
      res.render('about', { page: 'about' });
      break;
    case '/about-body':
      res.render('body/about');
      break;
  }
};

exports.faq = function(req, res) {
  switch (req.route.path) {
    case '/faq':
      res.render('faq', { page: 'faq' });
      break;
  }
};

exports.contribute = function(req, res) {
  switch (req.route.path) {
    case '/contribute':
      res.render('contribute', { page: 'contribute' });
      break;
  }
};

exports.blog = function(req, res, next) {
  switch (req.route.path) {
    case '/blog':
      res.render('blog', { page: 'blog', description: 'Updates about the development of Mailvelope' });
      break;
    case '/blog/:post':
      switch (req.params.post) {
        case 'security-audit-and-v0.6-release':
          res.render('blog', { page: 'security-audit-and-v0.6-release', description: 'First external security audit of Mailvelope published. New release v0.6 resolves found issues.' });
          break;
        case 'release-v0.7.0':
          res.render('blog', { page: 'release-v0.7.0', description: 'Version 0.7.0 of Mailvelope released. Improved key grid and key import. Identify public key in email body.' });
          break;
        default:
          next();
      }
      break;
  }
};