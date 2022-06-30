import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'

export const Shimmer = () => (
  <Box sx={{ width: '100%', display: 'flex', gap: '8px' }}>
    <Box sx={{ width: '30%' }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
    <Box sx={{ width: '30%' }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
    <Box sx={{ width: '30%' }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  </Box>
)
