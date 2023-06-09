import * as React from "react";
import { Image, Text, TouchableOpacity, ScrollView } from "react-native";
const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 80,
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ff6a6a",
          width: 400,
          height: 240,
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
function Gaziantep({ navigation }) {
  return (
    <ScrollView>
      <Text
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          top: 30,
          
          fontSize: 23,
          
          fontWeight: "normal",
          color: "black",
        }}
      >
        Gaziantep'imizin gezilip görülecek bir çok yeri mevcut. Hadi sen de bu yerler hakkında bilgi sahibi olmak için tıkla
      </Text>
      <TouchableOpacity>
        <ScrollView>
        <Image
        source={{
          uri: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/03/29/1331851601793_2/gaziantep",
        }}
        style={{
          marginTop: 40,
          backgroundColor: "#dcdcdc",
          width: 400,
          height: 280,
        }}
      />
          <CustomButton
            title="Hadi Gezelim"
            onPress={() => navigation.navigate("Giris")}
          />
        </ScrollView>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Gaziantep;
