import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type MenuCardProps = {
  name: string;
  price: number;
  tag?: string;
};

export default function MenuCard({ name, price, tag }: MenuCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text>
        {price} บาท {tag ? `· ${tag}` : ""}
      </Text>

      <Pressable onPress={() => setLikes(likes + 1)} style={styles.button}>
        <Text>❤️ {likes}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingTop: 10,
  },
});
