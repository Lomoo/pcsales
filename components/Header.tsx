import styled from 'styled-components'
import Link from 'next/link'
import { Button, AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import { theme } from '../constants/theme'

const NavBarHeader = styled(Typography)`
  padding: ${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(2)}px;
  text-transform: uppercase;
`
const NavBar = styled(AppBar)`
  background-color: #fff;
  background-size: cover;
`
const RightGrid = styled(Grid)`
  margin-left: auto !important;
`
// const NavButtons = styled(Button)`
//   // justify-content: flex-end;
// `

const Header: React.FunctionComponent = () => {
  return (
    <>
      <NavBar position="static">
        <Toolbar>
          <Grid container direction="row" alignItems="center">
            {NavLinks.map(({ title, path }) => (
              <Grid item key={title}>
                <NavBarHeader variant="h4">
                  <Link href={path}>{title}</Link>
                </NavBarHeader>
              </Grid>
            ))}
            <RightGrid item justify="flex-end">
              <Button> Login1 </Button>
            </RightGrid>
            <Grid item justify="flex-end">
              <Button> Signup </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </NavBar>
    </>
  )
}

interface NavLink {
  title: string
  path: string
}

const NavLinks: Array<NavLink> = [
  { title: 'home', path: '/' },
  { title: 'brands', path: '/brands' },
  { title: 'deals', path: '/deals' },
]

export default Header
