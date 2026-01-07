
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, BookOpen } from 'lucide-react';

const LoginPage: React.FC = () => {
    const { signIn, signUp } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            if (isSignUp) {
                const { error } = await signUp(email, password);
                if (error) {
                    setError(error);
                } else {
                    setSuccess('Account created! Check your email for confirmation.');
                }
            } else {
                const { error } = await signIn(email, password);
                if (error) {
                    setError(error);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
            {/* Logo */}
            <div className="mb-8 text-center">
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl" style={{ backgroundColor: 'var(--accent)' }}>
                    <BookOpen size={40} className="text-white" />
                </div>
                <h1 className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>Noor</h1>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Enlighten Your Journey</p>
            </div>

            {/* Form Card */}
            <div className="w-full max-w-sm rounded-3xl p-8 shadow-2xl" style={{ backgroundColor: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                <h2 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                    {isSignUp ? 'Create Account' : 'Welcome Back'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B8E85]" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-colors"
                            style={{
                                backgroundColor: 'var(--bg-primary)',
                                borderColor: 'var(--bg-secondary)',
                                color: 'var(--text-primary)'
                            }}
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B8E85]" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-colors"
                            style={{
                                backgroundColor: 'var(--bg-primary)',
                                borderColor: 'var(--bg-secondary)',
                                color: 'var(--text-primary)'
                            }}
                            required
                            minLength={6}
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    {success && (
                        <p className="text-green-600 text-sm text-center">{success}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#2D5A4C] text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-transform disabled:opacity-50"
                    >
                        {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => {
                            setIsSignUp(!isSignUp);
                            setError('');
                            setSuccess('');
                        }}
                        className="text-[#6B8E85] text-sm hover:text-[#2D5A4C] transition-colors"
                    >
                        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                    </button>
                </div>
            </div>

            <p className="mt-8 text-[#6B8E85] text-xs text-center max-w-xs">
                Your spiritual journey awaits. Track your Quran reading and Salah all in one place.
            </p>
        </div>
    );
};

export default LoginPage;
