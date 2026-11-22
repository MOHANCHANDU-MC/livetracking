import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Loader2,
  X
} from 'lucide-react';
import { Tooltip, Alert, IconButton } from '@mui/material';

// Zod Validation Schema (Preserved exactly)
const loginSchema = z.object({
  loginId: z
    .string()
    .min(1, 'Login ID or Email is required')
    .refine((val) => val.trim().length > 0, 'Login ID cannot be empty spaces'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters')
});

export const LoginPanel = ({ onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [toast, setToast] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      loginId: '',
      password: ''
    }
  });

  const showToastNotification = (message, type = 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 6000);
  };

  const onSubmit = async (data) => {
    setErrorMsg('');

    try {
      // Execute REAL HTTP request to POST /api/auth/login
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          loginId: data.loginId,
          password: data.password
        })
      });

      if (!response.ok) {
        throw new Error(
          `API Endpoint /api/auth/login returned HTTP ${response.status} (${response.statusText || 'Not Found'}).`
        );
      }

      const resData = await response.json();

      if (resData && (resData.success || resData.data)) {
        if (resData.data?.user) {
          sessionStorage.setItem('avyoma_user', JSON.stringify(resData.data.user));
        } else {
          sessionStorage.setItem('avyoma_user', JSON.stringify({ id: 'USR-001', email: data.loginId }));
        }

        if (resData.data?.organization) {
          sessionStorage.setItem('avyoma_organization', JSON.stringify(resData.data.organization));
        }

        showToastNotification('Login successful! Redirecting to Dashboard...', 'success');
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        const errorText = resData.message || 'Authentication failed. Invalid credentials.';
        setErrorMsg(errorText);
        showToastNotification(errorText, 'error');
      }
    } catch (err) {
      const failureMessage =
        err.message || 'Failed to connect to POST /api/auth/login backend API endpoint.';
      setErrorMsg(failureMessage);
      showToastNotification(failureMessage, 'error');
    }
  };

  return (
    <>
      {/* Floating Toast Notification Alert */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            top: '28px',
            right: '28px',
            zIndex: 1000,
            background:
              toast.type === 'error'
                ? 'rgba(220, 38, 38, 0.95)'
                : 'rgba(16, 185, 129, 0.95)',
            color: '#FFFFFF',
            padding: '14px 22px',
            borderRadius: '14px',
            boxShadow:
              '0 14px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '14px',
            fontWeight: 600,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animation: 'floatUp 0.3s ease-out'
          }}
        >
          {toast.type === 'error' ? (
            <AlertCircle size={20} />
          ) : (
            <ShieldCheck size={20} />
          )}
          <span>{toast.message}</span>
          <button
            onClick={() => setToast(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              marginLeft: '8px',
              display: 'flex',
              alignItems: 'center',
              opacity: 0.8
            }}
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Glassmorphic Login Card */}
      <div className="boss-glass-card" style={{ width: '100%', maxWidth: '480px', padding: '48px 40px', boxSizing: 'border-box' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              margin: '0 0 8px 0',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Welcome back
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--boss-text-gray)',
              margin: 0,
              fontWeight: 400
            }}
          >
            Sign in to your BOSS workspace.
          </p>
        </div>

        {/* API Failure Alert Banner */}
        {errorMsg && (
          <Alert
            severity="error"
            variant="filled"
            icon={<AlertCircle size={20} />}
            onClose={() => setErrorMsg('')}
            sx={{
              marginBottom: '24px',
              borderRadius: '8px',
              backgroundColor: 'rgba(239, 68, 68, 0.16)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              color: '#FCA5A5',
              fontSize: '13px',
              lineHeight: 1.4,
              '& .MuiAlert-icon': {
                color: '#EF4444'
              }
            }}
          >
            {errorMsg}
          </Alert>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Login ID Input Field */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '10px'
              }}
            >
              BOSS Login ID
            </label>
            <div style={{ position: 'relative' }}>
              <User
                size={20}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: errors.loginId ? '#EF4444' : 'var(--boss-text-muted)',
                  transition: 'color 0.2s'
                }}
              />
              <input
                type="text"
                {...register('loginId')}
                placeholder="Enter your Login ID"
                disabled={isSubmitting}
                className={`boss-input ${errors.loginId ? 'has-error' : ''}`}
                style={{ paddingLeft: '48px' }}
              />
            </div>
            {errors.loginId && (
              <span style={{ display: 'block', color: '#F87171', fontSize: '12px', marginTop: '6px', fontWeight: 500 }}>
                {errors.loginId.message}
              </span>
            )}
          </div>

          {/* Password Input Field */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '10px'
              }}
            >
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock
                size={20}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: errors.password ? '#EF4444' : 'var(--boss-text-muted)',
                  transition: 'color 0.2s'
                }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Enter your password"
                disabled={isSubmitting}
                className={`boss-input ${errors.password ? 'has-error' : ''}`}
                style={{ paddingLeft: '48px', paddingRight: '48px' }}
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                size="small"
                aria-label="toggle password visibility"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--boss-text-muted)',
                  padding: '4px'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </IconButton>
            </div>
            {errors.password && (
              <span style={{ display: 'block', color: '#F87171', fontSize: '12px', marginTop: '6px', fontWeight: 500 }}>
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Remember Me & Forgot Password Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" className="boss-checkbox" />
              <span style={{ color: '#FFFFFF', fontSize: '14px' }}>Remember me</span>
            </label>
            <a
              href="#forgot"
              onClick={(e) => {
                e.preventDefault();
                showToastNotification('Password reset request dispatched to administrator.', 'info');
              }}
              style={{
                fontSize: '14px',
                color: 'var(--boss-blue-light)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--boss-cyan)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--boss-blue-light)')}
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="boss-btn-primary"
            style={{ marginTop: '16px' }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span style={{ fontSize: '18px', fontWeight: 600 }}>Login</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

      </div>
    </>
  );
};
