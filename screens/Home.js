import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Button } from 'react-native';

import stylesHome from './Home.styles';

import { Avatar, CheckBox, FAB, Skeleton } from '@rneui/themed';

export default function Home({ navigation }) {

    return (
        <View style={stylesHome.container}>
            <TouchableOpacity>
                <Button onPress={() => navigation.push('About')} title="Navigate to About" />
            </TouchableOpacity>
            <Text>Welcome!</Text>
            <StatusBar style="auto" />
            <Pressable>

            </Pressable>
            <Avatar
                size={32}
                rounded
                icon={{ name: "pencil", type: "font-awesome" }}
                containerStyle={{ backgroundColor: "#9700b9" }}
            />
            <CheckBox
                checkedIcon="heart-o"
                uncheckedIcon="heart"
                uncheckedColor="red"
            />
            <FAB
                style={{margin: 20 }}
                size="small"
                title="Extended"
                icon={{
                    name: "place",
                    color: "white",
                }}
            />
            <Skeleton circle width={40} height={40} />
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
