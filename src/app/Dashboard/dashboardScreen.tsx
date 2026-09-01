import { KeyboardAvoidingView, Platform, ScrollView, Text, View, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashBoardScreen = ({ route }: any) => {

    const userData: any = route?.params?.userData;

    const handleProfile = () => {
        console.log('Profile');
    };

    const handleMap = () => {
        console.log("map");
    };

    const handleScan = () => {
        console.log('Scan');
    };

    const handleUpi = () => {
        console.log("UPI");
    };

    const handlePhoneNumber = () => {
        console.log("Phone Number");
    };

    const handleMobileRecharge = () => {
        console.log('Mobile Recharge');
    };

    const handleBankTransfer = () => {
        console.log("Bank Transfer");
    };

    const handleSubscription = () => {
        console.log("Subscriptions");
    };

    const handleCheckBalance = () => {
        console.log("check Balance");
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            // backgroundColor: "#acdbf3",
            backgroundColor: "#b849c8ff"
        }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    {/* HEADER NAVIGATION: Profile and Map Icons */}
                    <View style={{ marginHorizontal: 15, marginTop: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity onPress={handleProfile} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 3.84, elevation: 3 }}>
                            <MaterialCommunityIcons name="account" size={32} color="#000" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleMap} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 3.84, elevation: 3 }}>
                            <MaterialCommunityIcons name="map-marker-radius" size={32} color="#000" />
                        </TouchableOpacity>
                    </View>

                    {/* MAIN BODY CONTAINER */}
                    <View style={{ flex: 0, marginTop: 10 }}>
                        {/* HORIZONTAL QUICK ACTIONS SCROLL */}
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 15, paddingRight: 5, alignItems: "center", height: 50, marginTop: 15 }}>
                            <TouchableOpacity onPress={handleScan} style={{ backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginRight: 10 }}>
                                <Text style={{ fontWeight: '600', color: '#1C5679' }}>Scan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleUpi} style={{ backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginRight: 10 }}>
                                <Text style={{ fontWeight: '600', color: '#1C5679' }}>UPI</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePhoneNumber} style={{ backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginRight: 10 }}>
                                <Text style={{ fontWeight: '600', color: '#1C5679' }}>Phone Number</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleMobileRecharge} style={{ backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginRight: 10 }}>
                                <Text style={{ fontWeight: '600', color: '#1C5679' }}>Mobile Recharge</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleBankTransfer} style={{ backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginRight: 10 }}>
                                <Text style={{ fontWeight: '600', color: '#1C5679' }}>Bank Transfer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSubscription} style={{ backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginRight: 10 }}>
                                <Text style={{ fontWeight: '600', color: '#1C5679' }}>Subscriptions</Text>
                            </TouchableOpacity>
                        </ScrollView>

                        {/* CHECK BALANCE BUTTON */}
                        <TouchableOpacity onPress={handleCheckBalance} style={{ marginTop: 20, alignSelf: "center", flexDirection: "row", backgroundColor: "#fff", borderRadius: 40, paddingVertical: 12, paddingHorizontal: 24, alignItems: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 }}>
                            <MaterialCommunityIcons name='bank' size={20} color="#acdbf3" />
                            <Text style={{ paddingLeft: 10, color: "#acdbf3", fontWeight: "bold", fontSize: 15 }}>Check Balance</Text>
                        </TouchableOpacity>

                        {/* RECENT PEOPLE SECTION */}
                        <View style={{ marginHorizontal: 15, marginTop: 25 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C5679' }}>Recent People</Text>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default DashBoardScreen;
