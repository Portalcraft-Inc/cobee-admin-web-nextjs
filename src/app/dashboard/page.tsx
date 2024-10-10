'use client'

import { Container } from '@mui/material'
import ButtonUpdateReport from './button-update-report'
import ListData from './list-data'

const DashboardPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <ButtonUpdateReport />
      <ListData />
    </Container>
  )
}

export default DashboardPage
