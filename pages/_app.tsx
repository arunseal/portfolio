import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { readColorScheme, writeColorScheme } from '../lib/colorSchemeCookie';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import AppHeader from '../components/Header';
import { NavbarSimple } from '../components/Navbar';
import { Analytics } from '@vercel/analytics/react';
import '../styles/print.css';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const [opened, setOpened] = useState(false);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    writeColorScheme(nextColorScheme);
  };

  const handleOpened = () => {
    setOpened((r) => !r);
  };

  return (
    <>
      <Head>
        <title>Arunava Seal</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="images/rivian.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <AppShell
            header={<AppHeader opened={opened} handleOpened={handleOpened} />}
            navbar={<NavbarSimple opened={opened} handleOpened={handleOpened} />}
            padding={'sm'}
          >
            <Component {...pageProps} />
            <Analytics />
          </AppShell>
          <Notifications />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: readColorScheme(appContext.ctx) || 'dark',
  };
};
