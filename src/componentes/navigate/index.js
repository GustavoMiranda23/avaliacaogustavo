import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text,View } from "react-native";

import { Button } from "react-native-web";

const Stack =

createNativeStackNavigator ();

export const RootNavigation = () => {

    return (

        <Stack.Navigation>

            <Stack.Screen  name="Home"component={Home} />

            <Stack.Screen  name="Sobre"component={Sobre} />

        </Stack.Navigation>

    )

}

const Home = () => (

    <View>

        <Text>Aqui é a Home</Text>

        <Button title= "Vamos para Sobre?" onPress={() => navigation.navigate("Sobre")}></Button>

    </View>

)

const Sobre = () => (

    <View>

        <Text> Aqui é o sobre</Text>

    </View>

)