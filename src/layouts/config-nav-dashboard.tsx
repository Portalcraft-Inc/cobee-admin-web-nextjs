import { Label } from '@/components/label'
import { SvgColor } from '@/components/svg-color'

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
)

export const navData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: icon('ic-analytics'),
  },
  {
    title: 'User',
    path: '/user',
    icon: icon('ic-user'),
  },
  {
    title: 'Group',
    path: '/group',
    icon: icon('ic-cart'),
    info: (
      <>
        <Label color="error" variant="inverted">
          +3
        </Label>
      </>
    ),
  },
  {
    title: 'Live Report',
    path: '/live-report',
    icon: icon('ic-blog'),
  },
  {
    title: 'Package',
    path: '/package',
    icon: icon('ic-lock'),
  },
  {
    title: 'Payment Request',
    path: '/list-payment-request',
    icon: icon('ic-lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic-disabled'),
  // },
]
