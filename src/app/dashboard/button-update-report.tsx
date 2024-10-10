'use client'

import { useDashboard } from '@/contexts/DashboardContext'
import { Box, Button } from '@mui/material'
import dynamic from 'next/dynamic'

const Iconify = dynamic(() => import('@/components/iconify').then((mod) => mod.Iconify), {
  ssr: false,
})

const ButtonUpdateReport = () => {
  const { handleUpdateReport } = useDashboard()

  return (
    <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button variant="outlined" color="primary" onClick={handleUpdateReport}>
        Update Report
      </Button>
      <Button
        variant="outlined"
        color="primary"
        sx={{ display: 'flex', alignItems: 'center', columnGap: 0.5 }}
      >
        <Iconify icon="mdi:sync" />
        Sync Data
      </Button>
    </Box>
  )
}

export default ButtonUpdateReport
