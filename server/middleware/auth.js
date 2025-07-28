import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const protect = async (req, res, next) => {
    console.log('=== AUTH MIDDLEWARE DEBUG ===');
    console.log('Headers:', req.headers);
    console.log('Authorization header:', req.headers.authorization);
    
    const token = req.headers.authorization;
    
    if (!token) {
        console.log('❌ No token found');
        return res.json({ success: false, message: "not authorized" });
    }
    
    try {
        // Remove 'Bearer ' prefix if it exists
        let cleanToken = token;
        if (token.startsWith('Bearer ')) {
            cleanToken = token.slice(7);
        }
        
        console.log('🔍 Clean token:', cleanToken);
        console.log('🔑 JWT_SECRET exists:', !!process.env.JWT_SECRET);
        
        const userId = jwt.verify(cleanToken, process.env.JWT_SECRET);
        console.log('✅ Decoded userId:', userId);
        
        if (!userId) {
            console.log('❌ No userId in token');
            return res.json({ success: false, message: "not authorized" });
        }
        
        const user = await User.findById(userId).select("-password");
        console.log('👤 User found:', !!user);
        
        if (!user) {
            console.log('❌ User not found in database');
            return res.json({ success: false, message: "not authorized" });
        }
        
        req.user = user;
        console.log('✅ Auth successful');
        next();
        
    } catch (error) {
        console.log('❌ Auth error:', error.message);
        console.log('Error name:', error.name);
        return res.json({ success: false, message: "not authorized" });
    }
};

export default protect;