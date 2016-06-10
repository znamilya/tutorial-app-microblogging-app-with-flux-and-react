import express          from 'express';
import crypto           from 'crypto';
import passport         from 'passport';
import LocalStrategy    from 'passport-local';
import locallyDB        from 'locallydb';

const db     = new locallyDB('../../.data');
const users  = db.collection('users');
const router = express.Router();

function hash(password) {
    return crypto.createHash('sha512').update(password).digest('hex');
}

function requireLogin(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
}

function redirectLogin(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        next();
    }
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    const user = users.where({
        email,
        passwordHash: hash(password),
    }).items[0];

    done(null, user || false);
}));

passport.serializeUser((user, done) => {
    done(null, user.cid);
});

passport.deserializeUser((cid, done) => {
    done(null, users.get(cid));
});

router
    .use(passport.initialize())
    .use(passport.session())
    .get('/login', redirectLogin, (req, res) => {
        res.render('login');
    })
    .post('/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    }))
    .get('/logout', (req, res) => {
        req.logout();
        res.redirect('/login')
    })
    .post('/signup', (req, res, next) => {
        const { fullname, email, username, password } = req.body;

        if (!(fullname && username && email && password)) {
            console.log('we need more data!');
            res.redirect('/login');
            return;
        }
        
        if (users.where({ email: email }).items.length) {
            console.log('current user alresy exists!');
            res.redirect('/login');
            return;
        }

        const user = {
            fullname,
            email,
            username,
            passwordHash: hash(password),
            following: [],
        };

        const userId = users.insert(user);

        req.login(users.get(userId), err => {
            if (err) {
                next(err)
            }

            res.redirect('/')
        })
    })


export default {
    router,
    requireLogin,
};
