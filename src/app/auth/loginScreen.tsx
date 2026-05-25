import { KeyboardAvoidingView, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const loginscreen = () => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={{ height: "100%", backgroundColor: "#acdbf3" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#1c5679", fontSize: 24, fontWeight: "bold", textAlign: "center", paddingBottom: 10 }}>
                Expense Tracker
                </Text>
                <Text style={{ color: "#1c5679", fontSize: 16, textAlign: "center", }}>
                Welcome Back! Sign in to continue.
                </Text>

                <Text style={{ color: "#1c5679", fontSize: 16, marginTop: 80, paddingRight: 180 }}>
                Phone Number
                </Text>
                <TextInput style={{ width: "80%", height: 40, borderColor: "white", borderWidth: 1, marginTop: 10, backgroundColor: "white", borderRadius: 10 }} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />

                <Text style={{ color: "#1c5679", fontSize: 16, marginTop: 20, paddingRight: 220 }}>
                Password
                </Text>
                <TextInput style={{ width: "80%", height: 40, borderColor: "white", borderWidth: 1, marginTop: 10, backgroundColor: "white", borderRadius: 10 }} placeholder="Password" secureTextEntry />
            </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default loginscreen;