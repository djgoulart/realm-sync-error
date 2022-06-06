import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Realm } from '@realm/react';

import { Form } from '../models/Form/Form';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Realm.Results<Form> | [];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        keyExtractor={task => task._id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            description={item.name}
            isComplete={item.active}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TaskList;
