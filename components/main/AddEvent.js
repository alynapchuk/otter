import React, { useState } from "react";
import { Button, View } from "react-native";
import firebase from "firebase";
import { TextInput } from "react-native-gesture-handler";
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={showDatepicker} title="Select a date" />
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
          }}}
          style={{width: 80, backgroundColor: "white"}}
          value={event_date}
          onChange={onChange}
        onDateChange={(event_date) => setDate({ event_date })}
        mode={"date"}
      />
      )}
      <TextInput
        placeholder="Add event name"
        onChangeText={(event_name) => setEvent(event_name)}
      />
      <TextInput
        placeholder="How do you feel about the upcoming event?"
        onChangeText={(emotion) => setEmotion(emotion)}
      />

      <Button title="send" onPress={() => sendEvent()} />
    </View>
  );
}
