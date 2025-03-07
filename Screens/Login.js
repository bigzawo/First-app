import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    function handleLogin() {
        const data = {
            username,
            password
        }
        console.log(data);
        setUsername("");
        setPassword("");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            {/* <Text>{username}</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            {/* <Button title="Login"  color="orange" onPress={() => console.log("Button clicked")} /> */}
            <TouchableOpacity onPress={() => handleLogin()} style={{
                backgroundColor: "orange", padding: 10, borderRadius: 10,
                marginVertical: 10
            }}>
                <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: "100%",
        // marginTop: 50,
        padding: 20,
        justifyContent: "center",
    },
    text: {
        color: "orange",
        fontSize: 35,
        textAlign: "center",
    },
    input: {
        padding: 10,
        borderColor: "orange",
        borderWidth: 1,
        marginVertical: 12,
        borderRadius: 10,
    },


});