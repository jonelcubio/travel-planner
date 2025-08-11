import { Button, Paper, Text, Title } from '@mantine/core';
import classes from '../mantine/ArticleCardImage.module.scss';
import data from '../data/ArticleCardImageData.tsx';

export function ArticleCardImage() {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        
        <Text className={classes.category} size="xs">
          travel
        </Text>
        <Title order={3} className={classes.title}>
          Best forests to visit in North America
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}