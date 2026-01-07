import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
    public state: State = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#F8FAF9] flex flex-col items-center justify-center px-6 text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mb-6">
                        <AlertTriangle size={40} className="text-red-500" />
                    </div>

                    <h1 className="text-2xl font-bold text-[#2D5A4C] mb-2">
                        Something Went Wrong
                    </h1>

                    <p className="text-[#6B8E85] mb-6 max-w-xs">
                        We encountered an unexpected error. Please try again.
                    </p>

                    <button
                        onClick={this.handleRetry}
                        className="bg-[#2D5A4C] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-lg hover:scale-105 transition-transform"
                    >
                        <RefreshCw size={20} />
                        Try Again
                    </button>

                    {import.meta.env.DEV && this.state.error && (
                        <details className="mt-8 text-left bg-red-50 p-4 rounded-xl max-w-sm">
                            <summary className="text-red-600 font-medium cursor-pointer">
                                Error Details (Dev Only)
                            </summary>
                            <pre className="mt-2 text-xs text-red-800 overflow-auto">
                                {this.state.error.message}
                            </pre>
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
