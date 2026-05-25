import { Redirect, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Redirect href="/auth/loginScreen" />
        </SafeAreaView>
    )
};