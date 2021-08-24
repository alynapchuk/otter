import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, TextInput, Text } from "react-native";
import firebase from "firebase";
import DateTimePicker from '@react-native-community/datetimepicker';

require("firebase/firestore");

export default function AddEvent() {
  const [event_name, setEvent] = useState("");
  const [emotion, setEmotion] = useState("");
  const [event_date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || event_date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('event_date');
  };

  const _dateAlert = () => {
    alert(`${event_name} has been added to your calendar!`);
  };


  const sendEvent = () => {
    firebase
      .firestore()
      .collection("events")
      .doc(firebase.auth().currentUser.uid)
      .collection("userEvents")
      .add({
        event_date,
        event_name,
        emotion,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      });
    _dateAlert();
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.buttons}
        onPress={showDatepicker}>
        <Text style={styles.text}>Select Date</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          date={event_date}
          mode={mode}
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            }
          }}
          style={{ width: '100%', backgroundColor: "white" }}
          value={event_date}
          onChange={onChange}
          onDateChange={(event_date) => setDate({ event_date })}
          mode={"date"}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        onChangeText={(event_name) => setEvent(event_name)}
      />
      <TextInput
        style={styles.input}
        placeholder="How do you feel about the upcoming event?"
        onChangeText={(emotion) => setEmotion(emotion)}
      />

      <TouchableOpacity style={styles.buttons}
        onPress={() => sendEvent()}>
        <Text style={styles.text}>Add Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'flex-start',
  },
  buttons: {
    backgroundColor: '#03989e',
    padding: 20,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  input: {
    padding: 20
  }
});