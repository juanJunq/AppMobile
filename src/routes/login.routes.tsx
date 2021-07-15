import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Cadastrar } from "../pages";
// import HomeStack from "./home.routes";

const Stack = createStackNavigator();

export default function LoginRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      {/* <Stack.Screen name="HomeStack" component={HomeStack} /> */}
    </Stack.Navigator>
  );
}