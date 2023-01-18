import * as React from 'react'

import { createStyles, Header, Group, ActionIcon, Container, Text } from '@mantine/core'
import { IconLink } from '@tabler/icons'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start'
    }
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto'
    }
  }
}))

export default function MenuHeader () {
  const { classes } = useStyles()

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Text>krsh</Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Link prefetch={false} href="https://links.krsh.eu.org" rel="noopener noreferrer" target="_blank">
            <ActionIcon size="lg">
              <IconLink size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </Header>
  )
}
