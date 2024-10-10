// import { BoxProps } from '@mui/material'
import Link, { LinkProps } from 'next/link'
import { forwardRef } from 'react'

// ----------------------------------------------------------------------
export type RouterLinkProps = LinkProps & {
  className?: string
}

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, ...other }, ref) => <Link ref={ref} href={href} {...other} />,
)

RouterLink.displayName = 'RouterLink'
