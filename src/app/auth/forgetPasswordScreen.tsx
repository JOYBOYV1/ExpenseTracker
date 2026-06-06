import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgetPasswordScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#acdbf3" }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                   <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
                       <Text style={{ color: "#1c5679", fontSize: 18, fontWeight: "bold", textAlign: "center", paddingBottom: 10, marginTop: 10 }}>Forget Password?</Text>
                       <View style={{ width: "90%", alignItems: "flex-start" }}>
                            <Text style={{ color: "#1c5679", fontSize: 16, marginTop: 20 }}>Please enter your registered email address to receive password reset instructions.</Text>
                        </View>
                        <TextInput
                            placeholder="Please Enter Your Email"
                            style={{ backgroundColor: "white", width: "90%", height: 50, borderColor: "#1c5679", borderWidth: 1, marginTop: 20, paddingLeft: 10 }}
                        />

                        <TouchableOpacity onPress={() => alert("Password reset instructions sent to your email")} style={{ backgroundColor: "#1c5679", width: "90%", height: 50, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Send Reset Instructions</Text>
                        </TouchableOpacity>
                   </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default ForgetPasswordScreen;