import { Box, Container, Skeleton } from '@mui/material'
import Grid from '@mui/material/Grid2'

export default function Loading() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Skeleton variant="rounded" sx={{ width: 130, height: 36 }} />
      </Box>
      <Grid container spacing={3}>
        {[...Array(5)].map((_, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={index}>
            <Skeleton
              variant="rectangular"
              sx={{
                p: 2,
                height: 140,
                borderRadius: 2,
                width: '100%',
                maxWidth: '100%',
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: '1rem', mb: 1 }} />
              <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
            </Skeleton>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
