import { Vote } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center">
          {/* Left — Logo */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Vote className="w-5 h-5 text-saffron" />
            <span className="font-bold text-saffron font-[var(--font-heading)]">Election Saathi</span>
          </div>

          {/* Center — Tagline */}
          <p className="text-sm text-text-muted">
            Non-partisan. Educational. For every Indian citizen.
          </p>

          {/* Right — Powered by */}
          <p className="text-sm text-text-muted sm:text-right">
            Powered by <span className="font-semibold text-text-primary">Google Gemini</span>
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-xs text-text-muted">
          © 2026 Election Saathi — Made with ❤️ for Indian Democracy
        </p>
      </div>

      {/* Tricolor bottom line */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#138808]" />
      </div>
    </footer>
  );
}
