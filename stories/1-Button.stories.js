import React from 'react';
import Button from '../components/button';
import NavigationButton from '../components/nav-button';
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'
import Navigation from '../components/navigation'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

export default {
  title: 'Buttons',
};


export const Normal = () => <Button>Save</Button>;
export const Theme = () => <Stack column gap={20}>
  <ThemeButton>Save</ThemeButton>
  <ThemeButton full>Save Full</ThemeButton>
  <ThemeButton full big>Save Big Button</ThemeButton>
</Stack>;
export const Menu = () => <NavigationButton>
  <Home />
  <TextTitle>Home</TextTitle>
</NavigationButton>;
export const Nav = () => <Navigation selectedKey="home" />;
