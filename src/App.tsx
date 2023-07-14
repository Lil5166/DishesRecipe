import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from "@/pages";
import RecipeDetails from "@/components/RecipeDetails";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={RecipeList} />
                <Route exact path="/recipes/:recipeId" component={RecipeDetails} />
            </Switch>
        </Router>
    );
};

export default App;
