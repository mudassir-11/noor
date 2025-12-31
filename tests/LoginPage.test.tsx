import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Mock supabase
vi.mock('../services/supabaseClient', () => ({
    supabase: {
        auth: {
            getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
            getUser: vi.fn().mockResolvedValue({ data: { user: null } }),
            onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
        },
        from: vi.fn().mockReturnValue({
            select: vi.fn().mockReturnValue({
                order: vi.fn().mockResolvedValue({ data: [], error: null }),
            }),
        }),
    },
}));

// Import after mocking
import LoginPage from '../components/LoginPage';
import { AuthProvider } from '../contexts/AuthContext';

describe('LoginPage', () => {
    it('renders the login form', async () => {
        render(
            <AuthProvider>
                <LoginPage />
            </AuthProvider>
        );

        // Check that the login elements are present
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('has a link to sign up', () => {
        render(
            <AuthProvider>
                <LoginPage />
            </AuthProvider>
        );

        expect(screen.getByText(/don't have an account/i)).toBeInTheDocument();
    });

    it('shows the app name', () => {
        render(
            <AuthProvider>
                <LoginPage />
            </AuthProvider>
        );

        expect(screen.getByText('Nur')).toBeInTheDocument();
    });
});
