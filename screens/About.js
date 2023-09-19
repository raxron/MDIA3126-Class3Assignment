import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore } from '../data/books';
import { useState } from 'react';
import { FAB, CheckBox } from '@rneui/themed';
import stylesHome from './Home.styles';

export default function About({ navigation }) {
    const [data, setData] = useState();
    
    const addingData = () => {
        console.log("started");
        setData(bookStore);
    }
    return (
        <View style={styles.container}>
            <Text>Welcometo the dashboard</Text>
            <Button onPress={() => addingData()} title="Show Data" />
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == "java") {
                        return (
                            <View key={index}>
                                <CheckBox 
                                    uncheckedIcon="bookmark-o"
                                    title={b.title}/>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <View key={ind} >
                                                <FAB
                                                style={{margin:10}}
                                                    size="small"
                                                    title={a}
                                                    icon={{
                                                        name: "add",
                                                        color: "white",
                                                    }}
                                                />
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    }

                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
