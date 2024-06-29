import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link";
import { Button } from "../ui/button";

export default function RecipeList({ listOfRecipes }) {
    return (
        <>
            <div className="px-4 py-12 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <div className="flex items-start justify-between">
                    <h2 className="text-4xl font-bold text-zinc-800 mb-6">Recipes</h2>
                    <Link href='/'>
                        <Button>{"< Back"}</Button>
                    </Link>
                </div>
                <div className="h-1 w-full bg-zinc-200"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {
                        listOfRecipes && listOfRecipes.length > 0 ? (
                            listOfRecipes.map((recipe) => <Link href={`/recipes/${recipe.id}`}>
                                <Card>
                                    <CardContent className="bg-white rounded-xl flex flex-col gap-1 p-2 items-center justify-center overflow-hidden shadow-xl cursor-pointer hover:scale-[1.05] transition-all">
                                        <div className="w-full sm:h-40 md:h-60 lg:h-80">
                                            <img src={recipe.image} alt="Recipe image" className="h-full w-full rounded-md object-cover object-center" />
                                        </div>
                                        <div className="w-full mt-4">
                                            <h1 className="text-2xl font-bold text-zinc-900">{recipe.name}</h1>
                                        </div>
                                        <div className="w-full">
                                            <h3 className="text-lg font-semibold text-zinc-500">{recipe.cuisine} - {recipe.mealType[0]} for {recipe.servings}</h3>
                                        </div>
                                        <div className="w-full flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-zinc-500">{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</h3>
                                            <h3 className="text-lg font-semibold text-zinc-500">{recipe.difficulty}</h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>)
                        ) : null
                    }
                </div>
            </div>
        </>
    )
}
