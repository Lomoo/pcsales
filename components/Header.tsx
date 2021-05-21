import styled from 'styled-components'
import Link from 'next/link'
import { AppBar, Toolbar, Typography, Grid, IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'
import { theme } from '../constants/theme'

const NavBarHeader = styled(Typography)`
  padding: ${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(2)}px;
  text-transform: uppercase;
  &:hover {
    color: ${theme.palette.error.main};
  }
`
const NavBar = styled(AppBar)`
  padding: ${theme.spacing(1)}px 0 ${theme.spacing(1)}px 0;
  font-family: 'Rubik';
}
`
const RightGrid = styled(Grid)`
  margin-left: auto !important;
`

const Header: React.FunctionComponent = () => {
  return (
    <>
      <NavBar position="static">
        <Toolbar>
          <Grid container justify="space-between" direction="row" alignItems="center">
            <Grid item></Grid>
            {NavLinks.map(({ title, path }) => (
              <Grid item key={title}>
                <NavBarHeader variant="h4">
                  <Link href={path}>{title}</Link>
                </NavBarHeader>
              </Grid>
            ))}
            <RightGrid item>
              <IconButton color="secondary">
                <AccountCircle style={{ color: 'white' }} />
              </IconButton>
            </RightGrid>
            <Grid item>
              <IconButton color="secondary">
                <SearchIcon style={{ color: 'white' }} />
              </IconButton>
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
