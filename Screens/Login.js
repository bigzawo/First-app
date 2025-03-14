import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, FlatList, ActivityIndicator, Snackbar, SafeAreaView, StatusBar } from 'react-native'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';


export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        const data = {
            username,
            password
        }
        //console.log(data);
        setUsers([...users, data]);
        setUsername("");
        setPassword("");
        setLoading(!loading);



        //  Alert.alert(
        //   "Login",
        //   "Login Successful",
        //     [{ text: "OK", onPress: () => console.log("OK Pressed") },
        //     { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "destructive" }
        //       ]);
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1, padding: 20 }}>
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

                <Text style={{ textAlign: "center", marginTop: 10, fontSize: 20, color: "gray" }}>OR</Text>
                <View style={{ flexDirection: "row", gap: 10, }}>
                    <TouchableOpacity style={{ flex: 1, borderColor: "#ebb382", padding: 10, borderRadius: 10, marginVertical: 10, borderWidth: 1 }}>
                        <FontAwesomeIcon icon={faGoogle} size={25} color='#ebb382' style={{ alignSelf: "center" }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, borderColor: "#ebb382", padding: 10, borderRadius: 10, marginVertical: 10, borderWidth: 1 }}>
                        <FontAwesomeIcon icon={faTwitter} size={25} color='#ebb382' style={{ alignSelf: "center" }} />
                    </TouchableOpacity>

                </View>
                <ActivityIndicator animating={loading} style={{ color: "ebb382" }} size={90} />


            </ScrollView>
            {/*<View style={{ flexWrap: "wrap", flexDirection: "row", flex: 1, backgroundColor: "#0000001d", marginTop: 30 }}>
                    <View style={{ backgroundColor: "green", width: 110, height: 110, margin: 3, position: "absolute", right: 0, top: -20 }}></View>
                    <View style={{ backgroundColor: "gray", width: 100, height: 100, margin: 3, }}>
                    </View>
                    <View style={{ backgroundColor: "gray", width: 100, height: 100, margin: 3, }}>
                    </View>
                    <View style={{ backgroundColor: "gray", width: 100, height: 100, margin: 3, }}>
                    </View><Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#ebb382" }}>Google</Text></TouchableOpacity>
                </View><Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#ebb382" }}>X</Text></TouchableOpacity>
            

            {/* <FlatList
                data={users}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
                            <Text>{item.username}</Text>
                            <Text>{item.password}</Text>
                        </View>)
                }}
            /> */}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginTop: StatusBar.currentHeight,
        // padding: 20,
        // justifyContent: "center",
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