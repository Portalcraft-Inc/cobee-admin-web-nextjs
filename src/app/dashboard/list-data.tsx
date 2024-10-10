import { Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const ListData = () => (
  <Grid container spacing={3}>
    {[
      { title: 'Total Users', value: '0' },
      { title: 'Total Groups', value: '0' },
      { title: 'Total Events', value: '0' },
      { title: 'Total Value', value: '$0' },
      { title: 'Total Paid', value: '$0' },
    ].map((item, index) => (
      <Grid
        size={{
          xs: 12,
          sm: 6,
          md: 4,
          lg: 2.4,
        }}
        key={index}
      >
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 140,
            borderRadius: 2,
            border: '1px solid #e0f2f1',
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {item.title}
          </Typography>
          <Typography component="p" variant="h4">
            {item.value}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
)

export default ListData
