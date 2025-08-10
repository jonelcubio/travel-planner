import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../assets/favi.png';
import classes from "../mantine/HeaderSimple.module.scss";

const links = [
  { link: '/trip-planner', label: 'Trip Planner' },
  { link: '/budget', label: 'Budget' },
  { link: '/map', label: 'Map' },
  { link: '/settings', label: 'Preferences' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div className="brand-con">
          <img src={logo} alt="logo" className='brand-con-logo' />
          <div className="brand-con-title">Travel Planner</div>
        </div>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}