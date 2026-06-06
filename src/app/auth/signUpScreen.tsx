import { useState } from "react";
import axios from "axios";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';

const SignUpScreen = () => {
    const router = useRouter();
    const navigation: any = useNavigation();

    const [SignUpData, setSignUpData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async () => {
        if (
            SignUpData.username === "" ||
            SignUpData.email === "" ||
            SignUpData.phoneNumber === "" ||
            SignUpData.password === ""
        ) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }

        try {
            const response = await axios.post("http://10.211.237.125:3001/user/Create", SignUpData);
            if (response.status === 200 || response.status === 201) {
                Alert.alert("Success", "Account created successfully.");
                router.push("/auth/loginScreen");
            } else {
                Alert.alert("Error", "Failed to create account.");
            }
        } catch (error) {
            Alert.alert("Error", "An error occurred during sign up.");
        }
    };

    const handleLogin = () => {
        router.push('/auth/loginScreen');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#acdbf3" }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ height: "100%" }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>

                            <MaterialCommunityIcons style={{ padding: 20, backgroundColor: "white", borderRadius: 100, elevation: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, }} name="wallet" size={40} color="#043756ff" />

                            <Text style={{ color: "#1c5679", fontSize: 24, fontWeight: "bold", textAlign: "center", paddingBottom: 10, marginTop: 10 }}>Expense Tracker</Text>

                            <Text style={{ color: "#1c5679", fontSize: 16, textAlign: "center", }}>Create an account to get started</Text>

                            <View style={{ width: "90%", alignItems: "flex-start" }}>
                                <Text style={{ color: "#1c5679", fontSize: 16, marginTop: 30 }}>User Name</Text>
                                <TextInput
                                    style={{ width: "100%", height: 48, borderColor: "white", borderWidth: 1, marginTop: 10, backgroundColor: "white", borderRadius: 10, paddingLeft: 12 }}
                                    placeholder="Enter Your Username"
                                    autoCapitalize="none"
                                    value={SignUpData.username}
                                    onChangeText={(text) =>
                                        setSignUpData({ ...SignUpData, username: text })
                                    } />
                            </View>

                            <View style={{ width: "90%", alignItems: "flex-start" }}>
                                <Text style={{ color: "#1c5679", fontSize: 16, marginTop: 20 }}>Email</Text>
                                <TextInput
                                    style={{ width: "100%", height: 48, borderColor: "white", borderWidth: 1, marginTop: 10, backgroundColor: "white", borderRadius: 10, paddingLeft: 12 }}
                                    placeholder="Enter Your Email Address"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    value={SignUpData.email}
                                    onChangeText={(text) =>
                                        setSignUpData({ ...SignUpData, email: text })
                                    } />
                            </View>

                            <View style={{ width: "90%", alignItems: "flex-start" }}>
                                <Text style={{ color: "#1c5679", fontSize: 16, marginTop: 20 }}>Phone Number</Text>
                                <TextInput
                                    style={{ width: "100%", height: 48, borderColor: "white", borderWidth: 1, marginTop: 10, backgroundColor: "white", borderRadius: 10, paddingLeft: 12 }}
                                    placeholder="Enter Your Phone Number"
                                    autoCapitalize="none"
                                    keyboardType="phone-pad"
                                    value={SignUpData.phoneNumber}
                                    onChangeText={(text) =>
                                        setSignUpData({ ...SignUpData, phoneNumber: text })
                                    } />
                            </View>

                            <View style={{ width: "90%", alignItems: "flex-start" }}>
                                <Text style={{ color: "#1c5679", fontSize: 16, marginTop: 20 }}>Password</Text>
                                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: 10, position: "relative" }}>
                                    <TextInput
                                        style={{ width: "100%", height: 48, borderColor: "white", borderWidth: 1, backgroundColor: "white", borderRadius: 10, paddingLeft: 12, paddingRight: 45 }}
                                        placeholder="Enter Your Password"
                                        secureTextEntry={!showPassword}
                                        value={SignUpData.password}
                                        onChangeText={(text) =>
                                            setSignUpData({ ...SignUpData, password: text })
                                        } />
                                    <TouchableOpacity
                                        style={{ position: "absolute", right: 12, height: "100%", justifyContent: "center" }}
                                        onPress={() => setShowPassword(!showPassword)}
                                    >
                                        <MaterialCommunityIcons 
                                            name={showPassword ? "eye-off-outline" : "eye-outline"} 
                                            size={20} 
                                            color="#1c5679" 
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <TouchableOpacity onPress={handleSubmit} style={{ width: "70%", height: 40, borderColor: "#2e8fca", borderWidth: 1, marginTop: 30, backgroundColor: "#2e8fca", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 16 }}>Sign Up</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginTop: 20 }} onPress={handleLogin}>
                                <Text>Already have an account? <Text style={{ color: "#1c5679", fontSize: 14 }}>Login</Text></Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignUpScreen;
