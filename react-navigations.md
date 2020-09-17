# React Navigations

## On Native Apps

### 1. Stack Navigation

```js
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'

const Navigator = createStackNavigator({
    'Screen1': Screen1,
    'Screen2': Screen2
})

export default Navigator
```

#### How to access stack navigation functions

Once you've added tha navigator, the components inside the navigator get a special navigation prop. `` props.navigation ``

#### Stack Navigation Functions

1. ``props.navigations.navigate({ 'screen1' })``: To navigate to a specific screen. The new screen is pushed to the screen. Navigating to the same screen doesn't do anything.
1. ``props.navigations.push({ 'screen1'})``: To navigate to a specific page. The new page is pushed to the screen. You can push the same screen on top of itself.
1. ``props.navigations.goBack()``: Self explainatory
1. ``props.navigations.pop()``: Pop the last screen on the stack
1. ``props.navigations.popToTop()``: Pop all the screens and take the user to the first page on the stack
1. ``props.navigations.replace({ 'screen1' })``: Redirect the user to a different screen. No stack managed.

