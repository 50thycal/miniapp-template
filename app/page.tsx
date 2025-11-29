'use client'

import { AuthCard } from '@/components/AuthCard'
import { useAuthSession } from '@/hooks/useAuthSession'
import { APP_CONFIG } from './config'

export default function Home() {
  const { isInMiniApp, user, status } = useAuthSession()

  if (status === 'loading') {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
        <p>Loading...</p>
      </div>
    )
  }

  if (!isInMiniApp) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '1rem',
      }}>
        <div style={{ maxWidth: '28rem', width: '100%' }}>
          <h1>{APP_CONFIG.title}</h1>
          <p>{APP_CONFIG.description}</p>
          <AuthCard />
        </div>
      </div>
    )
  }

  if (status === 'signedOut' || !user) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '1rem',
      }}>
        <div style={{ maxWidth: '28rem', width: '100%' }}>
          <h1>{APP_CONFIG.title}</h1>
          <p>{APP_CONFIG.description}</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            Sign in with Farcaster to continue.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <AuthCard />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '1rem',
    }}>
      <div style={{ maxWidth: '28rem', width: '100%' }}>
        <h1>{APP_CONFIG.title}</h1>
        <p>{APP_CONFIG.description}</p>

        <AuthCard />

        <section style={{
          marginTop: '1.5rem',
          padding: '1.5rem',
          border: '2px dashed #e5e7eb',
          borderRadius: '0.5rem',
          backgroundColor: '#f9fafb',
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '0.75rem' }}>App Content Area</h2>
          <p style={{ margin: 0, color: '#6b7280' }}>
            Replace this block with your actual mini app features.
          </p>
          <p style={{ marginTop: '0.75rem', marginBottom: 0, fontSize: '14px', color: '#9ca3af' }}>
            You're signed in as FID: <strong>{user.fid}</strong>
            {user.username && <> (@{user.username})</>}
          </p>
        </section>
      </div>
    </div>
  )
}
