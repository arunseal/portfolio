import React from 'react';
import { Group, rem, Container, Title, Stack, Box, Divider } from '@mantine/core';
import { Text } from '@mantine/core';
import { IconMailFilled } from '@tabler/icons-react';
import { SOCIALS, THEME_ICON_SIZE } from '../constants/constants';
import { Image as MantineImage } from '@mantine/core';
import Markdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { Anchor } from '@mantine/core';
import classes from '../styles/Link.module.css';
import { useMantineColorScheme } from '@mantine/core';
import remarkGfm from 'remark-gfm';
import { Grid } from '@mantine/core';
import { List, ThemeIcon } from '@mantine/core';
import { SocialItem } from '../components/SocialItem';
import { useMantineTheme } from '@mantine/core';
import { getMarkDown } from '../lib/getMarkDown';

export async function getStaticProps() {
  // Get the path to the markdown file
  const { content } = await getMarkDown('public/markdown/Home.md');

  return {
    props: {
      content,
    },
  };
}

interface HomePageProps {
  content: string;
}

const HomePage: React.FC<HomePageProps> = ({ content }) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container sx={{ height: '100vh', padding: '5px', marginTop: '2%' }} maw="95%">
      <Group position="center" spacing="sm">
        <Stack align="center">
          <Title
            weight={500}
            order={1}
            sx={{
              lineHeight: rem(80),
              fontSize: rem(60),
            }}
          >
            {
              <Text
                weight={500}
                sx={{
                  lineHeight: rem(80),
                  fontSize: rem(60),
                }}
                variant="gradient"
              >
                Hi, I'm Arunava Seal!
              </Text>
            }
          </Title>

          <Title order={2} weight={300} sx={{ fontSize: rem(40) }}>
            ML Infrastructure | Full-Stack Engineering | Autonomy
          </Title>
          <Group>
            <Anchor
              className={`${classes.link} ${classes.one}`}
              href="https://rivian.com/"
              target="_blank"
              underline={false}
            >
              Rivian
            </Anchor>
            <Divider size="lg" orientation="vertical" />
            <Anchor
              className={`${classes.link} ${classes.one}`}
              href="https://mbrdna.com/"
              target="_blank"
              underline={false}
            >
              Mercedes-Benz
            </Anchor>
            <Divider size="lg" orientation="vertical" />
            <Anchor
              className={`${classes.link} ${classes.one}`}
              href="https://umich.edu/"
              target="_blank"
              underline={false}
            >
              University of Michigan
            </Anchor>
          </Group>
        </Stack>
        <MantineImage
          width={200}
          maw={200}
          mx="auto"
          radius={'50%'}
          src="images/portrait.jpeg"
          alt="Random image"
        />
      </Group>
      <Divider my="lg" size="xl" />
      <Grid grow gutter={'sm'}>
        <Grid.Col span={8}>
          <Box
            bg={colorScheme === 'dark' ? 'gray.9' : 'gray.2'}
            p={25}
            m={10}
            sx={{ borderRadius: '25px' }}
          >
            <Markdown
              components={{
                // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                em(props) {
                  const { node, ...rest } = props;
                  return <i style={{ color: theme.colors.yellow[9] }} {...rest} />;
                },
              }}
              remarkPlugins={[remarkGfm]}
              children={content}
            ></Markdown>
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box
            bg={colorScheme === 'dark' ? 'gray.9' : 'gray.2'}
            p={25}
            m={10}
            sx={{ borderRadius: '25px' }}
          >
            <Stack align="center" justify="space-around">
              <Title align="center" order={1} variant="gradient">
                Socials
              </Title>
              <List spacing="xl" size="lg" center>
                <List.Item
                  icon={
                    <ThemeIcon size={THEME_ICON_SIZE} radius="xl">
                      <IconMailFilled />
                    </ThemeIcon>
                  }
                >
                  <Title className={classes.link}>arunavaseal1@gmail.com</Title>
                </List.Item>
                {SOCIALS.map((item) => (
                  <SocialItem name={item.name} url={item.url} icon={item.icon} key={item.name} />
                ))}
              </List>
            </Stack>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HomePage;
