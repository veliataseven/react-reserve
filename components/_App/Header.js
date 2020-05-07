import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';

function Header() {
  const user = true;
  return (
    <Menu fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <Menu.Item>
            <Image
              size="mini"
              src="static/logo.svg"
              style={{ marginRight: '1em' }}
            />
            ReactReserve
          </Menu.Item>
        </Link>
        <Link href="/cart">
          <Menu.Item>
            <Icon name="cart" size="large" />
            Cart
          </Menu.Item>
        </Link>

        {user && (
          <>
            <Link href="/create">
              <Menu.Item>
                <Icon name="add square" size="large" />
                Create
              </Menu.Item>
            </Link>
          </>
        )}

        {user ? (
          <>
            <Link href="/account">
              <Menu.Item>
                <Icon name="user" size="large" />
                Account
              </Menu.Item>
            </Link>

            <Menu.Item>
              <Icon name="sign out" size="large" />
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Link href="/login">
              <Menu.Item>
                <Icon name="sign in" size="large" />
                Login
              </Menu.Item>
            </Link>
            <Link href="/signup">
              <Menu.Item>
                <Icon name="signup" size="large" />
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
