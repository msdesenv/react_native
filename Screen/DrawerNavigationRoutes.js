Skip to content
About React
Home
Just Started
Beginner
Advance
Pro Level
Useful Components
Navigation Examples
Frequent Issues
Online Emulator
Useful
Example of Splash, Login and Sign Up in React Native
 Example of Login and Register
This is an example of Splash, Login, and Sign Up in React Native. Login and SignUp is the base of any application. Whenever we need user management we need Login/SignIn and Register/SignUp as it is the most basic flow which we prepare. For example finance, E-Commerce, Social Media, etc. everyone needs this flow.

This is also the most requested example which I prepared 3 times but due to some updates or anything else I was unable to post it. I hope this will help you and I’ll try to keep it updated for you so that it can provide you ready to use code to make your development fast.

I am also planning to make some more ready to use examples, If you have any suggestions please suggest me from here.

Now without any delay Let’s Start with the example of Splash, log in and Sign Up in React Native.

Navigation Explained for the Login SignUp
If you have spent some time with React Native then you know React Navigation is the most popular Navigator in React Native. In this example, we are going to use the same React Navigation.

Some of the regular users will think why I am explaining React Navigation here? and the reason is when I get queries from your side I feel many of the readers struggle with React Navigation and in this example React Navigation is the only thing that plays the major role. The main reason for Login and Sign Up example is to provide you the basic structure of Login and SignUp as well as the understanding of React Navigation.

I think I have cleared my motive. Now let’s start with the Navigation understanding.

Understanding of Different Screens for the Login Sign Up in React Native
We have a total of 5 Screen in this example:

Splash Screen/App intro screen
It will come for the 5 Second and then will disappear after that On the same screen, we will have an image and ActivityIndicator component. We will use a setTimeout function to manage the screen visibility. This setTimeout will call a function after 5 seconds which will check for the login session in AsyncStorage and if found the value for user_id it will switch the screen to Home screen or if found blank/null it will redirect the screen to Login Screen. I am using AsyncStorage to store the session variable but is you have any better option then you can use that.

Login Screen
It will have 2 inputs for the user Email and Password (with basic empty field checks) and a button to trigger an authentication service.

Register Screen
It will have 5 inputs for Name, Email, Password, Age, and Address (with basic empty field checks) and a button to trigger a registration service.

Home Screen
It is the landing screen after login or from the Splash Screen directly in case the user has already logged in. This is a dummy screen with some text. This screen is a part of the Navigation Drawer which has Home, Setting, and Logout options.

Setting Screen
It shares the navigation drawer with Home Screen. It also has some dummy content.

Logout
As I mentioned the project has only 5 Screens but at this point, I want to mention Logout. In the home navigation drawer, I have added a logout option that will ask for the confirmation of logout and if clicks “Yes” then it will clear the session and will redirect to Login Screen and If the user clicks  “No” then the confirmation alert will disappear.

Understanding of Different Navigator used for the Login Signup
I hope you are clear with the Screens. Now let’s see how I have used the different navigators to arrange the above-mentioned screens. We are going to use three navigators in this example:

Stack Navigator which I have used to navigate between Auth Screens (Login and SignUp) and also for the internal navigation of Home or Setting screen
Drawer Navigator which I have used to set up the landing screen which is having three options HomeScreen, Setting Screen and Logout
You can understand it better after looking at the below image

Login Register Navigator Summery

I hope you are clear with the screens and navigators now. Let’s see the project file structure.

Project Directory/File Structure
To start with this example you need to create the following directory/file structure after creating the React Native app. This structure will have Image, Screen, Screen/Components, Screen/drawerScreens directories, and other files.

Don’t worry about the files and directory. I have shared a command below to create the structure using the command line in once (after creating the project)


For the better understanding here is the screenshot of the directory structure in which you can see red arrows that represent the new files/directory which we have to create (Others are default one).

SingnIn Signup Example Structure

Here are the png files, To download and to place in the Image directory

1. aboutreact_icon.png     2. success_icon.ong
You can see
App.js contains main Navigation
SplashScreen.js for the Splash Screen
LoginScreen.js for the Login Screen
RegisterScreen.js for the Register Screen
DrawerNavigationRoutes.js contains the Drawer Navigation for the landing Screens
HomeScreen.js for the Home Screen under Navigation Drawer
SettingsScreen.js for the Setting Screen under Navigation Drawer
NavigationDrawerHeader.js, our custom header component used for Navigation Drawer header
loader.js, our loader component to notify loading during the web API call
CustomSidebarMenu.js, our custom sidebar/drawer component which will replace the default sidebar/drawer
Images under Image directory will be used in Splash Screen, log in and sign up screen
Huh! That was a lot of things. I hope you got the things which I want to share. Now Let’s do something interesting and see the code to complete this Login, SignUp example. Please follow the below steps.

Node Server Setup
We will need Registration and authentication APIs for this example. You can use your own APIs or can  follow below steps to setup a node server for Registration and authentication. You can visit this for more details about the APIs, payload and response.

1. Clone Repo

git clone https://github.com/SnehalAgrawal/about-react-dummy-apis.git
2. Jump into the directory

cd about-react-dummy-apis
3. Install node_module

npm install
4. Run Node Server

npm start
This will start your node server on localhost:3000, You can paste localhost:3000 in your browser to check. Once you start your server you can move to next step to create React Native App.

To Make a React Native App
Getting started with React Native will help you to know more about the way you can make a React Native project. We are going to use react native command line interface to make our React Native App.

If you have previously installed a global react-native-cli package, please remove it as it may cause unexpected issues:


npm uninstall -g react-native-cli @react-native-community/cli
Run the following commands to create a new React Native project

npx react-native init ProjectName
If you want to start a new project with a specific React Native version, you can use the --version argument:

npx react-native init ProjectName --version X.XX.X
Note If the above command is failing, you may have old version of react-native or react-native-cli installed globally on your pc. Try uninstalling the cli and run the cli using npx.

This will make a project structure with an index file named App.js in your project directory.

Installation of Dependencies
We will need navigators in this project and to use them we need to install the following dependencies

cd ProjectName
1. For React Navigation

npm install @react-navigation/native --save
2. Other supporting libraries for react-navigation

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save
3. For Navigation Drawer

npm install @react-navigation/drawer --save
4. For Stack Navigation

npm install @react-navigation/stack --save
4. Install async-storage to use AsyncStorage

npm install --save @react-native-community/async-storage
These commands will copy all the dependencies into your node_module directory.

CocoaPods Installation
Please use the following command to install CocoaPods

cd ios && pod install && cd ..
Create Directory/File Structure
mkdir Image Screen ./Screen/Components ./Screen/DrawerScreens
touch ./Screen/DrawerNavigationRoutes.js ./Screen/LoginScreen.js ./Screen/RegisterScreen.js ./Screen/SplashScreen.js ./Screen/Components/CustomSidebarMenu.js ./Screen/Components/NavigationDrawerHeader.js ./Screen/Components/Loader.js ./Screen/DrawerScreens/HomeScreen.js ./Screen/DrawerScreens/SettingsScreen.js

This command will create the structure only you need to replace the code and have to download and copy the images by your own

Code for the Login Sign Up in React Native
Now Open App.js in any code editor and replace the code with the following code

App.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
Open Screen/SplashScreen.js in any code editor and replace the code with the following code.

SplashScreen.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/aboutreact.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
Open Screen/LoginScreen.js in any code editor and replace the code with the following code.

LoginScreen.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Loader from './Components/Loader';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Image/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
Open Screen/RegisterScreen.js in any code editor and replace the code with the following code.

RegisterScreen.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Loader from './Components/Loader';

const RegisterScreen = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please fill Age');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      age: userAge,
      address: userAddress,
      password: userPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Image/aboutreact.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAge) => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder="Enter Age"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current &&
                addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAddress) =>
                setUserAddress(UserAddress)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Address"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              ref={addressInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
Open Screen/DrawerNavigatorRoutes.js in any code editor and replace the code with the following code.

DrawerNavigatorRoutes.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
Open Screen/DrawerScreens/HomeScreen.js in any code editor and replace the code with the following code.

HomeScreen.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example of Splash, Login and Sign Up in React Native
            {'\n\n'}
            This is the Home Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
Open Screen/DrawerScreens/SettingsScreen.js in any code editor and replace the code with the following code.

SettingsScreen.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example of Splash, Login and Sign Up in React Native
            {'\n\n'}
            This is the Settings Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
Open Screen/Components/CustomSidebarMenu.js in any code editor and replace the code with the following code.

CustomSidebarMenu.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {'About React'.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          AboutReact
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => 
            <Text style={{color: '#d8d8d8'}}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});
Open Screen/Components/Loader.js in any code editor and replace the code with the following code.

Loader.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

const Loader = (props) => {
  const {loading, ...attributes} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color="#000000"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
Open Screen/Components/NavigationDrawerHeader.js in any code editor and replace the code with the following code.

NavigationDrawerHeader.js
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
To Run the React Native App
Open the terminal again and jump into your project using.

cd ProjectName
1. Start Metro Bundler

First, you will need to start Metro, the JavaScript bundler that ships with React Native. To start Metro bundler run following command

npx react-native start
Once you start Metro Bundler it will run forever on your terminal until you close it. Let Metro Bundler run in its own terminal. Open a new terminal and run the application.

2. Start React Native Application

To run the project on an Android Virtual Device or on real debugging device

npx react-native run-android
or on the iOS Simulator by running (macOS only)

npx react-native run-ios
Download Source Code
Output Screenshots
Splash Screenshot  Login Screenshot 1  Login Screenshot 2  Login Screenshot 3  Register Screenshot 1 Register Screenshot 2  Register Screenshot 3  Home Screenshot 1  Home Screenshot 2
That was the example of Splash, login, and Sign Up in React Native. If you have any doubts or you want to share something about the topic you can comment below or contact us here. There will be more posts coming soon. Stay tuned!

Hope you liked it. 🙂

React Native Bridge Example to Send Direct SMS from React Native AppReact Native Floating Action Button
37 thoughts on “Example of Splash, Login and Sign Up in React Native”

shanto halder
Perfectly Working. Thank you so much for share nice tutorial.

Reply

Gugan
Perfectly working thanks for tutorial

Reply

Oyivo Samuel
This is a good place to learn and improve ☺️🙂🙂… love it…and am staying 😎

Reply

gyuuu
thx for tutorial!.

( there is a typo.
DrawerNavigatorRoutes.js
import SettingsScreen from ‘./DrawerScreens/SettingScreen’;
-> you shoud rewrite ‘SettingScreen’ to ‘SettingsScreen’)

Reply

Snehal Agrawal
Updated the same, Thanks for pointing.

Reply

Miguel Rivas
Thank you very much!. This is actually the common case for Authentication and there are not many people who explain this scenario.
So, I really appreciate your job.

Reply

suresh dobariya
ios in back areow near display parent screen name

Reply

Snehal Agrawal
That will come automatically you don’t need any extra setting for that, yeah it also adjust the name so if space is not enough to show the name of parent then it will show back/home

Reply

Omodunbi Precious
Hello, can you please provide the package.json file for this App?

Reply

Snehal Agrawal
You can download it from here
https://files.aboutreact.com/?ps=1611367296

Reply

amonpan
I cannot for register in this project –> Error : Network Request Failed

Reply

Snehal Agrawal
You need to run API server for that.

Reply

cyra
how?

Reply

Aftab
I am unable to get state data (redux) in CustomSidebarMenu.js, I want to replace ‘About React’ text with username which is from state, I have tried every thing unable to connect redux state to this file, rest all files are working fine.

Reply

labike
thanks your article, i’m learn more knowledge about react-native, i hope the website better and better

Reply

Ahmet
I’m using windows and I did everything that you clarified. It doesn’t work on my computer. I couldn’t install cocoapods because it only works for iOS I guess. Is there any advice? Thank you:)

Reply

John
Hi I’m still new to react native, I followed all the structure and it gives me blank page when i test. PS: I work with Expo Cli, what should I do?

Reply

HasanEmre
thanx for tutorial. It’s very usefull.
Would you make firebase auth for this project?

Best regards

Reply

Neha
Awesome! , thank you, perfect solution to get started with such a great explanation.

Reply

Fody
I have been searching for this for a week, then i use duck duck go before i found this your website. please how can i display username on nav drawer after login

Reply

Disha
Hi , i am getting an error, its showing…”Cannot read property ‘reduce’ of undefined ”
Please help me in resolving this error.

Reply

Atulkumar Panchal
super cool tutorial very useful for new developer

Reply

Silvi
I am getting network request failed .

Reply

cyra
same, did you end up fixing it?

Reply

mateen
http://10.0.2.2:3000/api/auth/login
change the url like that

Reply

Bhaupatil
Component Exception Error
I am getting Below Error
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it’s defined in, or you might have mixed up default and named imports.]

Please help.

Reply

Mzito
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ‘:app:mergeDebugAssets’.
> Could not resolve all files for configuration ‘:app:debugRuntimeClasspath’.
> Failed to transform react-native-reanimated-65-jsc.aar (project :react-native-reanimated) to match attributes {artifactType=android-assets}.

Reply

asha
cannot see the drawer navigation

Reply

essam zahra
it does not work. react-native-reanimated does not work .
i searched a lot how to fix it but no one have a real solution .
can you help me what should i do ??

Reply

Raj
I faced the same problem. finally this solution worked for me. Try the first solution offered with four steps.

https://stackoverflow.com/questions/67130651/reanimated-2-failed-to-create-a-worklet-maybe-you-forgot-to-add-reanimateds-ba

Reply

hoa
Hello, you can share file login.php and register.php for me ? Thank you

Reply

Niharika
Hello sir I am facing this error. Could you please help out asap? Thankyou in advance.

Network request failed
at node_modules\whatwg-fetch\dist\fetch.umd.js:535:17 in setTimeout$argument_0
at node_modules\react-native\Libraries\Core\Timers\JSTimers.js:214:12 in _allocateCallback$argument_0
at node_modules\react-native\Libraries\Core\Timers\JSTimers.js:112:14 in _callTimer
at node_modules\react-native\Libraries\Core\Timers\JSTimers.js:357:16 in callTimers
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:417:4 in __callFunction
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:114:6 in __guard$argument_0
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:368:10 in __guard
at node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:113:4 in callFunctionReturnFlushedQueue

Reply

Jitendra Kumar
Perfectly working, but only one issue I facing. How to keep the user logged in after navigate to home screen. for example, once user is logged in then when user open the application again then user will directly navigate to home instant of login screen.
Please let me know. thanks in advance.

Reply

Mateen
When i set login page it says network request fail

Reply

Mateen
I am using the react apis site you provided i cloned it and npm install then npm start as you guide my server localhost:3000 also running still this message

BUNDLE ./index.js

LOG Running “NavigationTuts” with {“rootTag”:111}
ERROR [TypeError: Network request failed]

Reply

Mesh Stems
Very good tutorial. Please do you have YouTube channel and a video for all you shared here?
Will love to subscribe. Thanks.

Reply

Snehal Agrawal
Not right now but I can plane after reading your comment :p

Reply
Leave a Comment
Comment

Name
Name *
Email
Email *
Website
Website
This site uses Akismet to reduce spam. Learn how your comment data is processed.

Animation
Collapsible Toolbar- Animated
Flip Image Horizontally
Blinking Animation
Rotate Image Animation
React Native Lottie
Icon
Vector Icons
Social Icons
Ionicons
Font-Awesome Icons
RN Currency Symbols
Local Database
RN AsyncStorage
Local Database
SQLite Database
See SQLite Database Data
Pre Populated SQLite DB
Test SQLite Queries Online
Realm Database
See Realm DB Data
Offline App using PouchDB-CouchDB
Language & Fonts
React Native Custom Fonts
Multi Language (Localization)
ThirdParty Integration
Integrate Firebase in App
React Native Map
Getting SHA1 Fingerprint
Google Sign-in
Getting Key Hash for Facebook Console
Facebook Sign-in
YouTube Video Integration
File System Access
RN File Picker
React Native File Viewer
RN Image Picker
Make PDF from HTML Text
Print HTML as a Document
Upload/Download Files
File Upload to Server
React Native Download Image
Upload Image to AWS S3 Bucket
Store/Retrieve Files on Google Drive
React Native Firebase
React Native + Firebase Analytics
React Native + Cloud Firestore
React Native + Cloud Storage
React Native + In-App Messaging
React Native + Firebase Crashlytics
RN + Firebase Authentication
React Native + AdMob
React Native + Cloud Messaging
State Management
React Native + Redux
React Native Bridge
React Native Bridge, Send Direct SMS
Example Applications
Splash + Login + Registration
Move to Next Section >>




Copyright © 2023 AboutReact
www.aboutreact.com
Copied!