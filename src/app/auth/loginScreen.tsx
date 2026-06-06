import { useState } from "react";
import axios from "axios";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';

const LoginScreen = () => {

  const router = useRouter();
  const navigation: any = useNavigation();
  const [LoginData, setLoginData] = useState({
    phoneNumber: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {

    const StorageData = {
      phoneNumber: LoginData.phoneNumber,
      password: LoginData.password
    };

    if (LoginData.phoneNumber === "" || LoginData.password === "") {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.get('http://10.211.237.125:3001/user/Login', { params: StorageData });
      if (response.status === 200) {

        if (response.data) {
          const userData = response.data;

          navigation.navigate('Dashboard/dashboardScreen', {
            userData
          });

        }
      } else {
        Alert.alert("Error", "Invalid phone number or password.");
      }
    } catch (error) {
      // Add these logs to see the output in your frontend console:
      Alert.alert("Error", "Invalid phone number or password.");
    }
  };

  const handleForgetPassword = () => {
    console.log("Forger Password");
    router.push("/auth/forgetPasswordScreen");
  };

  const handleSignUp = () => {
    router.push('/auth/signUpScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#acdbf3" }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ height: "100%" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

              <MaterialCommunityIcons style={{ padding: 20, backgroundColor: "white", borderRadius: 100, elevation: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, }} name="wallet" size={40} color="#043756ff" />

              <Text style={{ color: "#1c5679", fontSize: 24, fontWeight: "bold", textAlign: "center", paddingBottom: 10, marginTop: 10 }}>Expense Tracker</Text>

              <Text style={{ color: "#1c5679", fontSize: 16, textAlign: "center", }}>Welcome Back! Sign in to continue.</Text>

              <View style={{ width: "90%", alignItems: "flex-start" }}>

                <Text style={{ color: "#1c5679", fontSize: 16, marginTop: 80 }}>Phone Number</Text>

                <TextInput
                  style={{ width: "100%", height: 48, borderColor: "white", borderWidth: 1, marginTop: 10, backgroundColor: "white", borderRadius: 10, paddingLeft: 12 }}
                  placeholder="Enter Your Phone Number"
                  autoCapitalize="none"
                  value={LoginData.phoneNumber}
                  keyboardType="phone-pad"
                  onChangeText={(text) =>
                    setLoginData({ ...LoginData, phoneNumber: text })
                  } />

              </View>

              <View style={{ width: "90%", alignItems: "flex-start" }}>

                <Text style={{ color: "#1c5679", fontSize: 16, marginTop: 20 }}>Password</Text>

                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: 10, position: "relative" }}>
                  <TextInput
                    style={{ width: "100%", height: 48, borderColor: "white", borderWidth: 1, backgroundColor: "white", borderRadius: 10, paddingLeft: 12, paddingRight: 45 }}
                    placeholder="Enter Your Password"
                    secureTextEntry={!showPassword}
                    value={LoginData.password}
                    onChangeText={(text) =>
                      setLoginData({ ...LoginData, password: text })
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

              <TouchableOpacity style={{ width: "90%", alignItems: "flex-end", marginTop: 10 }} onPress={handleForgetPassword}>

                <Text style={{ color: "#1c5679", fontSize: 14 }}>Forgot Password?</Text>

              </TouchableOpacity>

              <TouchableOpacity onPress={handleSubmit} style={{ width: "70%", height: 40, borderColor: "#2e8fca", borderWidth: 1, marginTop: 20, backgroundColor: "#2e8fca", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>

                <Text style={{ color: "white", fontSize: 16 }}>Login</Text>

              </TouchableOpacity>

              <TouchableOpacity style={{ marginTop: 20 }} onPress={handleSignUp}>

                <Text>Don't have an account? <Text style={{ color: "#1c5679", fontSize: 14 }}>Sign Up</Text></Text>

              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen;