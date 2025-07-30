'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

/**
 * @param {{ children: React.ReactNode }} props
 */
export function Providers({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}