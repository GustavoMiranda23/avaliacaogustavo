import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import GHScreenHome, { } from "../screens/Home";
import { Login } from "../screens/Login";
import GHScreenSobre, {  } from "../screens/Sobre";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator()

export const RootNavigation = () => {
    return (
        <MBNav.Navigator
            activeColor="#fff"
            inactiveColor="rgba(255,255,255,0.5)"
        >
            <MBNav.Screen
                name="Home"
                component={GHScreenHome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Sobre"
                component={GHScreenSobre}
                options={{
                    tabBarLabel: 'Sobre',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="BiPhotoAlbum" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </MBNav.Navigator>
    )
}


