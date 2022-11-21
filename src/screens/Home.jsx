import { Button, Text, View } from "react-native";

export const GHScreenHome = ({ navigation }) => (
    <View>
        <Text>Bem-Vindo!</Text>
        <Button
            title="Vamos para Sobre?"
            onPress={() => navigation.navigate("Sobre")}
        />

        <Button
            title="Vamos para Login"
            onPress={() => navigation.navigate("Login")}
        />
    </View>
)

export default GHScreenHome;