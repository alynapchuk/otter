import React from "react";
import { Button, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import { Avatar, Card } from "react-native-paper";
import { useLinkTo } from "@react-navigation/native";
import { connect } from "react-redux";
require('firebase/firestore')

function toDateTime(secs) {
  var t = new Date(1970, 1, 1);
  t.setSeconds(secs);
  let year = t.getFullYear();
  let month = t.getMonth();
  let day = t.getDate()
  return year + "-" + less10(month) + "-" + less10(day);
}

function less10(time) {
  return time < 10 ? "0" + time : time;
}

function OtterCalendar(props) {
  const { currentUser } = props;
  const { events } = props;

  const linkTo = useLinkTo();

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={{ marginRight: 10, marginTop: 17 }}
        onPress={() => {
          item.push({
            "2021-08-19": [{ name: "item 2 - any js object" }],
          });
        }}
      >
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>

              <Avatar.Text label=":)" style={{ backgroundColor: "#03989e" }} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };


  const items = events.map((event, index) => {
    const date = toDateTime(event.event_date.seconds)
    const items = {
      [date]: [{ name: event.event_name }]
    }
    console.log('the items are: ', items)
    return items
  })
  console.log('line 60 items', items)

  const newItems = items.reduce((obj, element) => {
    let x = Object.entries(element)[0];
    let key = x[0];
    let value = x[1];
    obj[key] = value;
    return obj
  }, {})
  console.log('new objects: ', newItems)








  return (
    <>
      <View style={styles.agendaContainer}>
        <Agenda items={newItems} renderItem={renderItem}>
        </Agenda>
      </View>




      <TouchableOpacity style={styles.buttons}
        onPress={() => linkTo("/AddEvent")}>
        <Text style={styles.text}>Add Event</Text>
      </TouchableOpacity>

    </>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  events: store.userState.events
});

export default connect(mapStateToProps, null)(OtterCalendar);

const styles = StyleSheet.create({
  agendaContainer: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 33
  },
  container: {
    backgroundColor: "white",
  },
  buttonContainer: {
    backgroundColor: "white",
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: '#03989e',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
  }
});