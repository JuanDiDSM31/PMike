import { StyleSheet } from "react-native";

const stylesT = StyleSheet.create({
    card: {
      backgroundColor: '#FFEB3B',
      marginTop: 30,
      borderRadius: 10,
      shadowColor: 'red',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 3,
      borderBottomColor: 'black',
      paddingVertical: 10,
    },
    cell: {
      flex: 1,
      textAlign: 'center',
    },
  });
  