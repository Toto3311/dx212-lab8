import MenuCard from "@/components/MenuCard";
import { filterByBudget, sortByPrice } from "@/lib/logic";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const MENUS = [
  { id: 1, name: "ข้าวมันไก่", price: 45 },
  { id: 2, name: "ก๋วยเตี๋ยว", price: 50 },
  { id: 3, name: "สเต๊กหมู", price: 89 },
];

export default function Index() {
  const [budget, setBudget] = useState(50);

  const result = sortByPrice(filterByBudget(MENUS, budget));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>กินในงบ</Text>

      <View style={styles.row}>
        <Pressable
          onPress={() => setBudget((current) => Math.max(0, current - 10))}
        >
          <Text style={styles.control}>-10</Text>
        </Pressable>

        <Text style={styles.budget}>งบ {budget} บาท</Text>

        <Pressable onPress={() => setBudget(budget + 10)}>
          <Text style={styles.control}>+10</Text>
        </Pressable>
      </View>

      {result.length === 0 && <Text>ไม่มีเมนูในงบนี้</Text>}

      {result.map((m) => (
        <MenuCard key={m.id} name={m.name} price={m.price} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  control: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
  },
  budget: {
    fontSize: 16,
  },
});
