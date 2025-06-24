# React Native Awesome Button

A highly customizable, feature-rich button component for React Native applications.

[![npm version](https://img.shields.io/npm/v/react-native-ab-awesome-button.svg)](https://www.npmjs.com/package/react-native-ab-awesome-button)
[![license](https://img.shields.io/npm/l/react-native-ab-awesome-button.svg)](https://github.com/SWE-Arjun-Bahabharat-20/Awesome-Button/blob/main/LICENSE)
[![version](https://img.shields.io/badge/version-4.2.1-blue.svg)](https://github.com/SWE-Arjun-Bahabharat-20/Awesome-Button)


[AwesomeButton Demo](https://github.com/SWE-Arjun-Bahabharat-20/Awesome-Button/blob/master/src/components/assets/screenshots/Image1.jpg)
[AwesomeButton Demo](https://github.com/SWE-Arjun-Bahabharat-20/Awesome-Button/blob/master/src/components/assets/screenshots/Image2.jpg)
[AwesomeButton Demo](https://github.com/SWE-Arjun-Bahabharat-20/Awesome-Button/blob/master/src/components/assets/screenshots/Image3.jpg)

## Features

- 🎨 Multiple style variants (primary, secondary, outline, ghost, danger, success)
- 📏 Different size options (small, medium, large)
- 🔄 Loading state with customizable spinner
- 💪 TypeScript support with comprehensive type definitions
- 🎯 Left and right icon support
- 📱 Works on iOS, Android, and Web
- ✨ Optional animation effects with customizable intensity
- 🔲 Custom border styles (solid, dotted, dashed)
- 🎨 Fully customizable with style props
- 📄 Comprehensive documentation and examples

## Installation

### Using npm

```sh
npm install react-native-ab-awesome-button
```

### Using yarn

```sh
yarn add react-native-ab-awesome-button
```

### iOS Setup
For iOS, you need to install the pods:

```sh
cd ios && pod install
```

### Android Setup
No additional steps required for Android.

## Usage

```jsx
import AwesomeButton from 'react-native-ab-awesome-button';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      {/* Basic usage */}
      <AwesomeButton 
        title="Press Me" 
        onPress={() => alert('Button pressed!')} 
      />
      
      {/* With variants */}
      <AwesomeButton 
        title="Success" 
        variant="success" 
        onPress={() => console.log('Success!')} 
      />
      
      {/* Loading state */}
      <AwesomeButton 
        title="Loading" 
        loading={true} 
      />
      
      {/* With animation */}
      <AwesomeButton 
        title="Animated Button"
        animated={true}
        onPress={() => console.log('With animation!')}
      />
      
      {/* With custom styling */}
      <AwesomeButton 
        title="Custom Style" 
        backgroundColor="#9b59b6"
        textColor="white"
        rounded={true}
        onPress={() => console.log('Custom styled button pressed')} 
      />
    </View>
  );
}
```

## Props

| Prop            | Type                                                       | Default   | Description                              |
|-----------------|-----------------------------------------------------------|-----------|------------------------------------------|
| title           | string                                                     | *required* | Button text content                      |
| variant         | 'primary' \| 'secondary' \| 'outline' \| 'danger' \| 'success' \| 'ghost' | 'primary' | Button style variant                     |
| size            | 'small' \| 'medium' \| 'large'                              | 'medium'  | Button size                              |
| loading         | boolean                                                    | false     | Shows loading indicator                  |
| disabled        | boolean                                                    | false     | Disables the button                      |
| leftIcon        | React.ReactNode                                            | undefined | Icon to display before button text       |
| rightIcon       | React.ReactNode                                            | undefined | Icon to display after button text        |
| buttonStyle     | StyleProp<ViewStyle>                                       | undefined | Custom style for button container        |
| textStyle       | StyleProp<TextStyle>                                       | undefined | Custom style for button text             |
| uppercase       | boolean                                                    | false     | Transform text to uppercase              |
| rounded         | boolean \| number                                          | false     | Use rounded corners (true for pill shape, number for specific radius) |
| fullWidth       | boolean                                                    | false     | Button takes full width of container     |
| disableShadow   | boolean                                                    | false     | Removes button shadow                    |
| backgroundColor | string                                                     | undefined | Custom background color                  |
| textColor       | string                                                     | undefined | Custom text color                        |
| borderColor     | string                                                     | undefined | Custom border color                      |
| borderWidth     | number                                                     | undefined | Custom border width                      |
| borderStyle     | 'solid' \| 'dotted' \| 'dashed'                            | 'solid'   | Border style                             |
| loadingColor    | string                                                     | undefined | Custom loading indicator color           |
| animated        | boolean                                                    | false     | Enable animation effects                 |
| animationScale  | number                                                     | 0.95      | Animation scale intensity (0.0-1.0, lower = stronger) |
| onPress         | () => void                                                 | undefined | Function to call when button is pressed  |

Plus all props from TouchableOpacity.

## Examples

### Basic Buttons

```jsx
<AwesomeButton title="Primary" />
<AwesomeButton title="Secondary" variant="secondary" />
<AwesomeButton title="Outline" variant="outline" />
<AwesomeButton title="Ghost" variant="ghost" />
<AwesomeButton title="Danger" variant="danger" />
<AwesomeButton title="Success" variant="success" />
```

### Button Sizes

```jsx
<AwesomeButton title="Small" size="small" />
<AwesomeButton title="Medium" size="medium" />
<AwesomeButton title="Large" size="large" />
```

### With Icons

```jsx
import { Icon } from 'your-icon-library';

<AwesomeButton 
  title="Download" 
  leftIcon={<Icon name="download" size={16} color="#fff" />} 
/>

<AwesomeButton 
  title="Next" 
  rightIcon={<Icon name="arrow-right" size={16} color="#fff" />} 
/>
```

### Loading State

```jsx
const [isLoading, setIsLoading] = useState(false);

const handlePress = () => {
  setIsLoading(true);
  setTimeout(() => setIsLoading(false), 2000);
};

<AwesomeButton 
  title="Submit" 
  loading={isLoading}
  onPress={handlePress} 
/>
```

### Custom Colors

```jsx
// Custom background and text colors
<AwesomeButton 
  title="Purple Button" 
  backgroundColor="#8e44ad"
  textColor="#ffffff"
  onPress={() => console.log('Custom colors')} 
/>

// Custom border color for outline variant
<AwesomeButton 
  title="Red Outline" 
  variant="outline"
  borderColor="#e74c3c"
  textColor="#e74c3c"
  onPress={() => console.log('Custom outline')} 
/>

// Custom loading indicator color
<AwesomeButton 
  title="Loading" 
  loading={true}
  loadingColor="#f1c40f"
  backgroundColor="#34495e"
  onPress={() => {}} 
/>
```

### Custom Border Styles

```jsx
// Dashed border
<AwesomeButton 
  title="Dashed Border" 
  backgroundColor="#fff" 
  textColor="#333"
  borderColor="#333"
  borderWidth={1}
  borderStyle="dashed"
  onPress={() => console.log('Dashed border pressed')} 
/>

// Dotted border
<AwesomeButton 
  title="Dotted Border" 
  backgroundColor="#fff" 
  textColor="#333"
  borderColor="#333"
  borderWidth={1}
  borderStyle="dotted"
  onPress={() => console.log('Dotted border pressed')} 
/>

// Thick border
<AwesomeButton 
  title="Thick Border" 
  backgroundColor="#fff" 
  textColor="#333"
  borderColor="#333"
  borderWidth={3}
  onPress={() => console.log('Thick border pressed')} 
/>
```

### Custom Border Radius

```jsx
// Specific border radius
<AwesomeButton 
  title="Radius 15" 
  backgroundColor="#3498db"
  rounded={15}
  onPress={() => console.log('Radius 15 pressed')} 
/>

// Pill shape button
<AwesomeButton 
  title="Pill Button" 
  backgroundColor="#3498db"
  rounded={true}
  onPress={() => console.log('Pill button pressed')} 
/>
```

### Animated Buttons

```jsx
// Simple animation
<AwesomeButton 
  title="Animated Button"
  animated={true}
  onPress={() => console.log('Animated button pressed')}
/>

// Strong animation effect
<AwesomeButton 
  title="Strong Animation"
  animated={true}
  animationScale={0.9} // Scales to 90% on press
  onPress={() => console.log('Strong animation pressed')}
/>

// Subtle animation effect
<AwesomeButton 
  title="Subtle Animation"
  animated={true}
  animationScale={0.98} // Scales to 98% on press
  onPress={() => console.log('Subtle animation pressed')}
/>
```

## Customization

You can customize the button appearance with style props:

```jsx
<AwesomeButton 
  title="Custom" 
  backgroundColor="#8e44ad"
  textColor="white"
  rounded={10}
  disableShadow={true}
  uppercase={true}
/>
```

Or use the more detailed style props:

```jsx
<AwesomeButton 
  title="Custom" 
  buttonStyle={{ 
    backgroundColor: '#8e44ad', 
    borderRadius: 10,
    paddingVertical: 15
  }}
  textStyle={{ 
    color: 'white', 
    fontSize: 18,
    fontWeight: '800'
  }}
/>
```

## Version History

### Version 1.0.3
- Added animation support with customizable intensity
- Added custom border styles (solid, dotted, dashed)
- Added support for custom border radius values
- Improved performance and accessibility
- Fixed shadow issues on Android

## License

MIT

## Developer

Developed with ❤️ by [Sanjay Kumar](https://github.com/SWE-Arjun-Bahabharat-20)