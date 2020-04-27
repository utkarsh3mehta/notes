import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CategoryScreen from '../screens/CategoryScreen'
import SingleCategoryScreen from '../screens/SingleCategoryScreen'
import SingleRecipeScreen from '../screens/SingleRecipeScreen'

const RecipeNavigator = createStackNavigator({
    Category: CategoryScreen,
    SingleCategory: SingleCategoryScreen,
    SingleRecipe: SingleRecipeScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: 'white'
    }
})

export default createAppContainer(RecipeNavigator)