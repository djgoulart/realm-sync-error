import React, { useCallback, useMemo } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import IntroText from "./app/components/IntroText";
import TaskList from "./app/components/TaskList";

import { MainContext } from "./app/models";
import { Form } from "./app/models/Form/Form";

import colors from "./app/styles/colors";

const { useRealm, useQuery } = MainContext;

function App() {
  const realm = useRealm();
  const result = useQuery(Form);

  const forms = useMemo(() => result.sorted("name"), [result]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        {forms.length === 0 ? (
          <IntroText />
        ) : (
          <TaskList tasks={forms} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

export default App;
