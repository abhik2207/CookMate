import Link from "next/link";
import { Button } from "../ui/button";

export default function RecipeDetailsComponent({ recipe }) {
    return (
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full flex flex-col lg:items-start items-center gap-2">
                    <img src={recipe?.image} alt="Recipe Image" className="w-4/5 rounded object-cover" />
                    <Link href='/recipes'>
                        <Button>{"< Back"}</Button>
                    </Link>
                </div>
                <div>
                    <h1 className="text-4xl text-zinc-900 font-extrabold">{recipe?.name}</h1>
                    <h1 className="text-2xl text-zinc-700 font-extrabold mt-3">Rating: {recipe?.rating} ({recipe?.reviewCount})</h1>
                    <div className="flex items-center justify-between mt-12">
                        <p className="text-lg font-medium text-zinc-600">Cuisine: {recipe?.cuisine}</p>
                        <p className="text-lg font-medium text-zinc-600">Meal Type: {recipe?.mealType[0]}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-lg font-medium text-zinc-600">Preparation: {recipe?.prepTimeMinutes} mins</p>
                        <p className="text-lg font-medium text-zinc-600">Cooking: {recipe?.cookTimeMinutes} mins</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-lg font-medium text-zinc-600">Servings: {recipe?.servings}</p>
                        <p className="text-lg font-medium text-zinc-600">Calories: {recipe?.caloriesPerServing} / serving</p>
                    </div>
                    <div className="flex flex-col mt-12">
                        <h3 className="text-2xl text-zinc-700 font-extrabold mb-2">Ingredients</h3>
                        <ul>
                            {
                                recipe && recipe?.ingredients.length > 0 ? (
                                    recipe.ingredients.map((ingredient, index) => (
                                        <li className="text-lg font-medium text-zinc-600" key={index}>• {ingredient}</li>
                                    ))
                                ) : (
                                    <li>No recipe available</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col mt-12">
                        <h3 className="text-2xl text-zinc-700 font-extrabold mb-2">Instructions</h3>
                        <ul>
                            {
                                recipe && recipe?.instructions.length > 0 ? (
                                    recipe.instructions.map((instruction, index) => (
                                        <li className="text-lg font-medium text-zinc-600" key={index}>{index+1}. {instruction}</li>
                                    ))
                                ) : (
                                    <li>No recipe available</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
