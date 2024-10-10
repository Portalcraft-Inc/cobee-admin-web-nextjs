'use client'

import { useSnackbar } from 'notistack'
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

interface DashboardData {
  users: number
  groups: number
  events: number
  value: string
  paid: string
}

interface DashboardContextType {
  data: DashboardData | null
  loading: boolean
  error: Error | null
  handleUpdateReport: () => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

interface DashboardProviderProps {
  children: ReactNode
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar()

  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard', { signal: abortController.signal })
        const result: DashboardData = await response.json()
        setData(result)
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(error as Error)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      abortController.abort()
    }
  }, [])

  const updateReport = async () => {
    return new Promise((resolve) => setTimeout(resolve, 100))
  }

  const handleUpdateReport = async () => {
    try {
      await updateReport()

      enqueueSnackbar('This is a success message!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        autoHideDuration: 3000,
      })
    } catch (error) {
      setError(error as Error)
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }

  const contextValue = useMemo(
    () => ({
      data,
      loading,
      error,
      handleUpdateReport,
    }),
    [data, loading, error, handleUpdateReport],
  )

  return <DashboardContext.Provider value={contextValue}>{children}</DashboardContext.Provider>
}

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
}
