import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CategoryScreen from '../screens/CategoryScreen'
import SingleCategoryScreen from '../screens/SingleCategoryScreen'
import SingleRecipeScreen from '../screens/SingleRecipeScreen'
import CustomHeaderButton from '../components/CustomHeaderButton'
import FavoriteScreen from '../screens/FavoriteScreen'

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

const RecipeTabNavigator = createBottomTabNavigator({
    Recipes: RecipeNavigator,
    Favorites: FavoriteScreen,
})

export default createAppContainer(RecipeTabNavigator)