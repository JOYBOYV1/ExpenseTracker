import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ForgetPasswordScreen = () => {
    const router = useRouter();

    const handleBackScreen = () => {
     router.push("./loginScreen");
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#acdbf3" }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TouchableOpacity onPress={handleBackScreen} style={{ flexDirection: "row", alignItems: "center", marginTop: 16, marginLeft: 16, alignSelf: "flex-start", paddingVertical: 6, paddingHorizontal: 8, backgroundColor: "white", borderRadius: 20, elevation: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84,}}>
                    <MaterialCommunityIcons name="arrow-left" size={16} color="#043756" />
                    <Text style={{ marginLeft: 6, color: "#043756", fontWeight: "600" }}>Back</Text>
                </TouchableOpacity>
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
