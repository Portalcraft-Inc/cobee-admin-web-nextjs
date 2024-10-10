'use client'

import { DashboardProvider } from '@/contexts/DashboardContext'
import { Box } from '@mui/material'
import { SnackbarProvider } from 'notistack'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <DashboardProvider>
        <Box component="div">{children}</Box>
      </DashboardProvider>
    </SnackbarProvider>
  )
}

export default DashboardLayout
