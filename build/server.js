require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/Users/znamilya/repos/git/tutorial-app-microblogging-app-with-flux-and-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/Users/znamilya/repos/git/tutorial-app-microblogging-app-with-flux-and-react/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nvar _app = __webpack_require__(2);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/Users/znamilya/repos/git/tutorial-app-microblogging-app-with-flux-and-react/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvaW5kZXguanM/ZDljMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwICBmcm9tICcuL2FwcCc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmVyL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(__dirname) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/Users/znamilya/repos/git/tutorial-app-microblogging-app-with-flux-and-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/Users/znamilya/repos/git/tutorial-app-microblogging-app-with-flux-and-react/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(4);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(5);\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _expressSession = __webpack_require__(6);\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _login = __webpack_require__(7);\n\nvar _login2 = _interopRequireDefault(_login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _express2.default)().set('view engine', 'ejs').set('views', __dirname + '/views').use(_express2.default.static('./public')).use(_bodyParser2.default.urlencoded({ extended: true })).use(_bodyParser2.default.json()).use((0, _cookieParser2.default)()).use((0, _expressSession2.default)({\n    secret: 'fjdssjgtyuylhkbvsjgsjgfkgjkgjfd',\n    resave: false,\n    saveUninitialized: true\n})).use(_login2.default.router).get('/', _login2.default.requireLogin, function (req, res) {\n    res.render('index');\n}).get('*', function (req, res) {\n    res.sendStatus(404);\n}).listen('7676', function () {\n    console.log('Server listening at port 7676');\n});\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/Users/znamilya/repos/git/tutorial-app-microblogging-app-with-flux-and-react/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"app.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, \"src/server\"))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBwLmpzP2QzN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgICAgICAgICAgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciAgICAgICBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgY29va2llUGFyc2VyICAgICBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCBzZXNzaW9uICAgICAgICAgIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XG5cbmltcG9ydCBsb2dpbiAgICAgICAgICAgIGZyb20gJ21vZHVsZXMvbG9naW4nO1xuXG5cbmV4cHJlc3MoKVxuICAgIC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpXG4gICAgLnNldCgndmlld3MnLCBfX2Rpcm5hbWUgKyAnL3ZpZXdzJylcbiAgICAudXNlKGV4cHJlc3Muc3RhdGljKCcuL3B1YmxpYycpKVxuICAgIC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXG4gICAgLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbiAgICAudXNlKGNvb2tpZVBhcnNlcigpKVxuICAgIC51c2Uoc2Vzc2lvbih7XG4gICAgICAgIHNlY3JldDogJ2ZqZHNzamd0eXV5bGhrYnZzamdzamdma2dqa2dqZmQnLFxuICAgICAgICByZXNhdmU6IGZhbHNlLFxuICAgICAgICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcbiAgICB9KSlcbiAgICAudXNlKGxvZ2luLnJvdXRlcilcbiAgICAuZ2V0KCcvJywgbG9naW4ucmVxdWlyZUxvZ2luLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgcmVzLnJlbmRlcignaW5kZXgnKTtcbiAgICB9KVxuICAgIC5nZXQoJyonLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgcmVzLnNlbmRTdGF0dXMoNDA0KTtcbiAgICB9KVxuICAgIC5saXN0ZW4oJzc2NzYnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXIgbGlzdGVuaW5nIGF0IHBvcnQgNzY3NicpO1xuICAgIH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZlci9hcHAuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUVBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImV4cHJlc3NcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = require(\"body-parser\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCI/NDY1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = require(\"cookie-parser\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIj85ZDBkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express-session\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtc2Vzc2lvblwiPzYzYmQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIlxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/Users/znamilya/repos/git/tutorial-app-microblogging-app-with-flux-and-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/Users/znamilya/repos/git/tutorial-app-microblogging-app-with-flux-and-react/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _crypto = __webpack_require__(8);\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nvar _passport = __webpack_require__(9);\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(10);\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _locallydb = __webpack_require__(11);\n\nvar _locallydb2 = _interopRequireDefault(_locallydb);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar db = new _locallydb2.default('../../.data');\nvar users = db.collection('users');\nvar router = _express2.default.Router();\n\nfunction hash(password) {\n    return _crypto2.default.createHash('sha512').update(password).digest('hex');\n}\n\nfunction requireLogin(req, res, next) {\n    if (req.isAuthenticated()) {\n        next();\n    } else {\n        res.redirect('/login');\n    }\n}\n\nfunction redirectLogin(req, res, next) {\n    if (req.isAuthenticated()) {\n        res.redirect('/');\n    } else {\n        next();\n    }\n}\n\n_passport2.default.use(new _passportLocal2.default({\n    usernameField: 'email',\n    passwordField: 'password'\n}, function (email, password, done) {\n    var user = users.where({\n        email: email,\n        passwordHash: hash(password)\n    }).items[0];\n\n    done(null, user || false);\n}));\n\n_passport2.default.serializeUser(function (user, done) {\n    done(null, user.cid);\n});\n\n_passport2.default.deserializeUser(function (cid, done) {\n    done(null, users.get(cid));\n});\n\nrouter.use(_passport2.default.initialize()).use(_passport2.default.session()).get('/login', redirectLogin, function (req, res) {\n    res.render('login');\n}).post('/login', _passport2.default.authenticate('local', {\n    successRedirect: '/',\n    failureRedirect: '/login'\n})).get('/logout', function (req, res) {\n    req.logout();\n    res.redirect('/login');\n}).post('/signup', function (req, res, next) {\n    var _req$body = req.body;\n    var fullname = _req$body.fullname;\n    var email = _req$body.email;\n    var username = _req$body.username;\n    var password = _req$body.password;\n\n\n    if (!(fullname && username && email && password)) {\n        console.log('we need more data!');\n        res.redirect('/login');\n        return;\n    }\n\n    if (users.where({ email: email }).items.length) {\n        console.log('current user alresy exists!');\n        res.redirect('/login');\n        return;\n    }\n\n    var user = {\n        fullname: fullname,\n        email: email,\n        username: username,\n        passwordHash: hash(password),\n        following: []\n    };\n\n    var userId = users.insert(user);\n\n    req.login(users.get(userId), function (err) {\n        if (err) {\n            next(err);\n        }\n\n        res.redirect('/');\n    });\n});\n\nexports.default = {\n    router: router,\n    requireLogin: requireLogin\n};\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/Users/znamilya/repos/git/tutorial-app-microblogging-app-with-flux-and-react/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvbW9kdWxlcy9sb2dpbi9pbmRleC5qcz8yN2U3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzICAgICAgICAgIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNyeXB0byAgICAgICAgICAgZnJvbSAnY3J5cHRvJztcbmltcG9ydCBwYXNzcG9ydCAgICAgICAgIGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCBMb2NhbFN0cmF0ZWd5ICAgIGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCBsb2NhbGx5REIgICAgICAgIGZyb20gJ2xvY2FsbHlkYic7XG5cbmNvbnN0IGRiICAgICA9IG5ldyBsb2NhbGx5REIoJy4uLy4uLy5kYXRhJyk7XG5jb25zdCB1c2VycyAgPSBkYi5jb2xsZWN0aW9uKCd1c2VycycpO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuZnVuY3Rpb24gaGFzaChwYXNzd29yZCkge1xuICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhNTEyJykudXBkYXRlKHBhc3N3b3JkKS5kaWdlc3QoJ2hleCcpO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlTG9naW4ocmVxLCByZXMsIG5leHQpIHtcbiAgICBpZiAocmVxLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMucmVkaXJlY3QoJy9sb2dpbicpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVkaXJlY3RMb2dpbihyZXEsIHJlcywgbmV4dCkge1xuICAgIGlmIChyZXEuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgcmVzLnJlZGlyZWN0KCcvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbn1cblxucGFzc3BvcnQudXNlKG5ldyBMb2NhbFN0cmF0ZWd5KHtcbiAgICB1c2VybmFtZUZpZWxkOiAnZW1haWwnLFxuICAgIHBhc3N3b3JkRmllbGQ6ICdwYXNzd29yZCcsXG59LCAoZW1haWwsIHBhc3N3b3JkLCBkb25lKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IHVzZXJzLndoZXJlKHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkSGFzaDogaGFzaChwYXNzd29yZCksXG4gICAgfSkuaXRlbXNbMF07XG5cbiAgICBkb25lKG51bGwsIHVzZXIgfHwgZmFsc2UpO1xufSkpO1xuXG5wYXNzcG9ydC5zZXJpYWxpemVVc2VyKCh1c2VyLCBkb25lKSA9PiB7XG4gICAgZG9uZShudWxsLCB1c2VyLmNpZCk7XG59KTtcblxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKChjaWQsIGRvbmUpID0+IHtcbiAgICBkb25lKG51bGwsIHVzZXJzLmdldChjaWQpKTtcbn0pO1xuXG5yb3V0ZXJcbiAgICAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSlcbiAgICAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSlcbiAgICAuZ2V0KCcvbG9naW4nLCByZWRpcmVjdExvZ2luLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgcmVzLnJlbmRlcignbG9naW4nKTtcbiAgICB9KVxuICAgIC5wb3N0KCcvbG9naW4nLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsJywge1xuICAgICAgICBzdWNjZXNzUmVkaXJlY3Q6ICcvJyxcbiAgICAgICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJ1xuICAgIH0pKVxuICAgIC5nZXQoJy9sb2dvdXQnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgcmVxLmxvZ291dCgpO1xuICAgICAgICByZXMucmVkaXJlY3QoJy9sb2dpbicpXG4gICAgfSlcbiAgICAucG9zdCgnL3NpZ251cCcsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IGZ1bGxuYW1lLCBlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgICAgICBpZiAoIShmdWxsbmFtZSAmJiB1c2VybmFtZSAmJiBlbWFpbCAmJiBwYXNzd29yZCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZSBuZWVkIG1vcmUgZGF0YSEnKTtcbiAgICAgICAgICAgIHJlcy5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh1c2Vycy53aGVyZSh7IGVtYWlsOiBlbWFpbCB9KS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHVzZXIgYWxyZXN5IGV4aXN0cyEnKTtcbiAgICAgICAgICAgIHJlcy5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICAgICAgZnVsbG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoKHBhc3N3b3JkKSxcbiAgICAgICAgICAgIGZvbGxvd2luZzogW10sXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXNlcklkID0gdXNlcnMuaW5zZXJ0KHVzZXIpO1xuXG4gICAgICAgIHJlcS5sb2dpbih1c2Vycy5nZXQodXNlcklkKSwgZXJyID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBuZXh0KGVycilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzLnJlZGlyZWN0KCcvJylcbiAgICAgICAgfSlcbiAgICB9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb3V0ZXIsXG4gICAgcmVxdWlyZUxvZ2luLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZlci9tb2R1bGVzL2xvZ2luL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 8 */
/***/ function(module, exports) {

	eval("module.exports = require(\"crypto\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiP2VmNDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJjcnlwdG9cIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("module.exports = require(\"passport\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0XCI/MDMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicGFzc3BvcnRcIlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("module.exports = require(\"passport-local\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydC1sb2NhbFwiP2YzZWEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtbG9jYWxcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhc3Nwb3J0LWxvY2FsXCJcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("module.exports = require(\"locallydb\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbGx5ZGJcIj85MWViIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvY2FsbHlkYlwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibG9jYWxseWRiXCJcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);