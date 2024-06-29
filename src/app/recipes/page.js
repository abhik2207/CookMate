import RecipeList from '@/components/recipe-list';

export default async function Recipes() {
    const fetchListOfRecipes = async () => {
        try {
            const apiResponse = await fetch('https://dummyjson.com/recipes?limit=48');
            const data = await apiResponse.json();

            return data?.recipes;
        }
        catch (err) {
            throw new Error(err);
        }
    }

    const listOfRecipes = await fetchListOfRecipes();

    return (
        <RecipeList listOfRecipes={listOfRecipes} />
    )
}
