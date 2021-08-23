import React, { useState, createRef } from "react";
import { Modal, Button, TouchableOpacity, View, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { Avatar, Card } from "react-native-paper";
import { useLinkTo } from "@react-navigation/native";
import { connect } from "react-redux";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const agendaRef = createRef();
console.log("the agenda ref is: ", agendaRef);

const OtterCalendar = () => {
  const linkTo = useLinkTo();

  // const [items, setItems] = useState({});

  // const loadItems = (day) => {
  //   setTimeout(() => {
  //     for (let i = 0; i < 5; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);
  //       if (!items[strTime]) {
  //         items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: "Item for " + strTime + " #" + j,
  //             height: Math.max(50, Math.floor(Math.random() * 5)),
  //           });
  //         }
  //         console.log(items);
  //       }
  //     }
  //     const newItems = {};
  //     Object.keys(items).forEach((key) => {
  //       newItems[key] = items[key];
  //     });
  //     setItems(newItems);
  //   }, 1000);
  // };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={{ marginRight: 10, marginTop: 17 }}
        onPress={() => {
          // this.setModalVisible(true);
          item.push({
            "2021-08-19": [{ name: "item 2 - any js object" }],
          });
        }}
      >
        <Card>
          <Card.Content style={{ backgroundColor: "lavender" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>
              <Avatar.Text label="O" style={{ backgroundColor: "#03989e" }} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const _testAlert = (day) => {
    alert("Hello this day is: ", day);
  };

  return (
    <View style={{ flex: 1, marginTop: 33 }}>
      <Agenda
        // ref={agendaRef}
        items={{
          "2021-08-19": [
            { name: "item 1 - any js object" },
            { name: "item 2 - another js object" },
          ],

          "2021-08-23": [{ name: "item 2 - any js object", height: 80 }],
          "2021-08-24": [],
          "2021-08-25": [
            { name: "item 3 - any js object" },
            { name: "any js object" },
          ],
        }}
        // loadItemsForMonth={loadItems}
        // selected={"2021-08-18"}
        renderItem={renderItem}
      />
      <Button title="Add Event" onPress={() => linkTo("/AddEvent")} />
    </View>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(OtterCalendar);
