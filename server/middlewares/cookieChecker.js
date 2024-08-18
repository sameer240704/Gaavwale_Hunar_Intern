const cookieChecker = (req, res, next) => {
    console.log('Cookies received:', req.cookies);
    
    const { userId, userType } = req.cookies;

    if (!userId || !userType) {
        return res.status(401).json({ message: 'Unauthorized: Missing cookies' });
    }

    const validUserTypes = ['PATIENT', 'DOCTOR', 'ADMIN'];
    if (!validUserTypes.includes(userType)) {
        return res.status(403).json({ message: 'Forbidden: Invalid user type' });
    }
    next();
};

module.exports = cookieChecker;
