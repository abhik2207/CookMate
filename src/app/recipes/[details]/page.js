import RecipeDetailsComponent from "@/components/recipe-details";

export default async function RecipeDetails({ params }) {
    const fetchRecipe = async (recipeId) => {
        try {
            const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
            const data = await apiResponse.json();

            return data;
        }
        catch (err) {
            throw new Error(err);
        }
    }

    const recipe = await fetchRecipe(params?.details);

    return (
        <RecipeDetailsComponent recipe={recipe} />
    )
}
