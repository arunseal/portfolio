import { useState } from 'react';
import { createStyles, Navbar, getStylesRef, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.lg,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

const PAGES = [
  { link: '/', label: 'Home' },
  { link: '/experience', label: 'Experience' },
  { link: '/education', label: 'Education' },
  { link: '/publications', label: 'Publications' },
  { link: '/patents', label: 'Patents' },
  { link: '/certifications', label: 'Certifications' },
  { link: '/extracurriculars', label: 'Extra-Curriculars' },
  { link: '/resume', label: 'Resume' },
];

type NavbarProps = {
  opened: boolean;
  handleOpened: () => void;
};

export const NavbarSimple = ({ opened, handleOpened }: NavbarProps) => {
  const router = useRouter();
  // Access the current page from the router object
  const currentPageLink = router.pathname;
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(currentPageLink);

  const links = PAGES.map((item) => (
    <Button
      size="lg"
      variant="subtle"
      className={cx(classes.link, { [classes.linkActive]: item.link === active })}
      component={Link}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.link);
        handleOpened();
      }}
    >
      {item.label}
    </Button>
  ));

  return (
    <Navbar
      height={'100vh'}
      sx={{ overflow: 'inherit' }}
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 180, lg: 200 }}
    >
      <Navbar.Section>{links}</Navbar.Section>
    </Navbar>
  );
};
