import {useEffect, useState} from "react";
import {addDoc, collection, getDocs, query} from "firebase/firestore";
import {db} from "../fireabaseConfig";
import {Button, FlatList, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";

export default () => {
    const [refreshing, setRefreshing] = useState(false);
    const [items, setItems] = useState([] as any[]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        setRefreshing(true);

        const q = query(collection(db, "test-items"));

        const snapshot = await getDocs(q);

        setItems(snapshot.docs.map(doc => doc.data()));

        setRefreshing(false);
    }

    const addItem = () => {
        addDoc(collection(db, "test-items"), {name: "test"}).then(r =>
            alert("Item added!")).catch(e => alert("Error adding item"));
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadItems} /> }>
                <Text>Hello World!</Text>
                <StatusBar style="auto"/>
                <Button title="Add Item" onPress={addItem} />
                <FlatList data={items} renderItem={({item}) => <Text>{item.name}</Text>}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});