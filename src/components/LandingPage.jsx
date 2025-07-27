import { useState } from 'react';
import { ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

// Combined all alerts into one consistent component
const Alert = ({ message, type = 'error' }) => {
  if (type === 'success') {
    return (
      <div className="mt-2 px-4 py-3 rounded-lg bg-purple-950/50 border border-purple-500/50 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
        <p className="text-purple-200 text-sm font-medium">{message}</p>
      </div>
    );
  }
  
  return (
    <div className="mt-2 px-4 py-3 rounded-lg bg-red-950/50 border border-red-500/50 flex items-center gap-2">
      <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
      <p className="text-red-200 text-sm">{message}</p>
    </div>
  );
};

const ComingSoonBadge = () => (
  <div className="px-6 py-2 flex items-center gap-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
    {/* iOS Icon */}
    <svg viewBox="0 0 384 512" className="w-5 h-5 text-white/70" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
    
    <span className="text-white/70 font-medium">Coming Soon</span>
    
    {/* Android Icon */}
    <svg viewBox="0 0 512 512" className="w-5 h-5 text-white/70" fill="currentColor">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
    </svg>
  </div>
);

const BrandTitle = () => {
  const letters = "Rhine".split("");
  
  return (
    <div className="space-y-6">
      <h1 className="text-6xl font-bold text-center relative z-10">
        <span className="relative inline-block">
          {letters.map((letter, index) => (
            <span 
              key={index} 
              className="inline-block animate-float relative"
              style={{
                animationDelay: `${index * 0.1}s`,
                background: 'linear-gradient(120deg, #4f46e5 0%, #9333ea 25%, #ec4899 50%, #9333ea 75%, #4f46e5 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: `float 3s ease-in-out infinite, shimmer 8s linear infinite`
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      </h1>
      
      <div className="flex justify-center">
        <ComingSoonBadge />
      </div>
    </div>
  );
};

const FlowingButton = () => (
  <>
    <div className="absolute inset-0 blur-2xl opacity-70">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 animate-gradient" />
    </div>
    
    <div className="absolute inset-0">
      <div className="absolute inset-0 border border-white/20 rounded-xl animate-border-flow-1" />
      <div className="absolute inset-0 border border-white/20 rounded-xl animate-border-flow-2" />
    </div>

    <svg className="absolute w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'rgba(124, 58, 237, 0.6)' }} />
          <stop offset="50%" style={{ stopColor: 'rgba(236, 72, 153, 0.6)' }} />
          <stop offset="100%" style={{ stopColor: 'rgba(45, 212, 191, 0.6)' }} />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path 
        className="animate-flow-slow"
        fill="url(#flow-gradient)"
        filter="url(#glow)"
        d="M -100 25 C 50 10, 100 40, 250 25 C 400 10, 450 40, 600 25 L 600 50 L -100 50"
        opacity="0.7"
      />

      <path 
        className="animate-flow-fast"
        fill="url(#flow-gradient)"
        filter="url(#glow)"
        d="M -100 25 C 50 40, 100 10, 250 25 C 400 40, 450 10, 600 25 L 600 50 L -100 50"
        opacity="0.5"
      />
    </svg>
  </>
);

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [validationError, setValidationError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const validateEmail = (email) => {
    if (!email) {
      return 'Please enter an email address';
    }
    if (!email.includes('@')) {
      return "Please include an '@' in the email address";
    }
    if (!email.includes('.')) {
      return "Please include a domain (like '.com') in the email address";
    }
    const [localPart, domain] = email.split('@');
    if (!domain.includes('.')) {
      return "Please include a domain (like '.com') in the email address";
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous status and errors
    setStatus('');
    setValidationError('');
    setSubmitError('');
    
    // Validate email
    const error = validateEmail(email);
    if (error) {
      setValidationError(error);
      return;
    }
    
    setStatus('submitting');
    
    try {
      const response = await fetch('https://vaflxx49e8.execute-api.us-east-2.amazonaws.com/dev/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        if (response.status === 409) {
          throw new Error('This email is already on the waitlist');
        }
        throw new Error(data.error || 'Failed to join waitlist');
      }
  
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setSubmitError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <div className="relative">
        <div className="absolute inset-0">
          <div className="fixed top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2" />
          <div className="fixed top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2" />
        </div>

        <div className="relative max-w-4xl mx-auto pt-8 px-4">
          <div className="space-y-4">
            <BrandTitle />
            
            <h2 className="text-4xl font-bold text-white text-center tracking-tight">
              Discover Your Local Community
            </h2>
            
            <p className="text-lg text-slate-400 text-center">
              Connect with like-minded people and never miss out on local events that matter to you.
            </p>

            <div className="max-w-lg mx-auto w-full pt-2">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative group flex-1">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setValidationError('');
                      setSubmitError('');
                    }}
                    placeholder="Enter your email"
                    className={`relative w-full px-4 py-3 bg-black/40 backdrop-blur-sm border 
                             rounded-xl text-white text-center placeholder-slate-500
                             focus:outline-none focus:ring-2 focus:border-transparent
                             transition-all duration-200 ${
                               validationError || submitError
                                 ? 'border-red-500 focus:ring-red-500' 
                                 : 'border-white/10 focus:ring-purple-500'
                             }`}
                  />
                </div>
                
                <div className="relative h-12 overflow-hidden rounded-xl sm:w-44">
                  <FlowingButton />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="absolute inset-0 w-full px-4 py-3
                             bg-black/40 backdrop-blur-md text-white font-medium
                             transition-transform duration-300 active:scale-[0.98] 
                             flex items-center justify-center gap-3
                             border border-white/20"
                  >
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
                    <ArrowRight className="w-4 h-4 animate-bounce-x" />
                  </button>
                </div>
              </form>

              {validationError && <Alert message={validationError} />}
              {submitError && <Alert message={submitError} />}

              {status === 'success' && (
                <Alert
                  type="success"
                  message="✨ You're in! Welcome to the future of local community discovery."
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 max-w-4xl mx-auto space-y-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">
            How Rhine Works
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">1</div>
              <h3 className="text-xl font-semibold text-white">Create Account</h3>
              <p className="text-slate-300">Login and complete a personality survey to be automatically matched with similar users</p>
            </div>

            <div className="space-y-4 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">2</div>
              <h3 className="text-xl font-semibold text-white">Find Events</h3>
              <p className="text-slate-300">See a map showing scheduled events - taller pins indicate more matches attending</p>
            </div>

            <div className="space-y-4 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">3</div>
              <h3 className="text-xl font-semibold text-white">Attend Events</h3>
              <p className="text-slate-300">There are no profiles, photos, or messaging - just RSVP to show your matches which events to attend</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">
            How Rhine looks
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <img 
                src="/src/assets/Screenshot 2025-07-27 4.27.36 PM.png" 
                alt="Rhine app screenshot 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <img 
                src="/src/assets/Screenshot 2025-07-27 4.28.22 PM.png" 
                alt="Rhine app screenshot 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <img 
                src="/src/assets/Screenshot 2025-07-27 4.28.40 PM.png" 
                alt="Rhine app screenshot 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
