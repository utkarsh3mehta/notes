import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CategoryScreen from '../screens/CategoryScreen'
import SingleCategoryScreen from '../screens/SingleCategoryScreen'
import SingleRecipeScreen from '../screens/SingleRecipeScreen'
import CustomHeaderButton from '../components/CustomHeaderButton'

const RecipeNavigator = createStackNavigator({
    Category: CategoryScreen,
    SingleCategory: SingleCategoryScreen,
    SingleRecipe: SingleRecipeScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: 'white',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Favourite' iconName='ios-star' onPress={() => { console.log('Favorite') }} />
        </HeaderButtons>
    }
})

export default createAppContainer(RecipeNavigator)