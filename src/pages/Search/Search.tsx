import React, {useState} from "react";

import "./Search.css";
import SearchForm from "../../components/SearchForm";
import fetch from "../../utilities/fetch";
import PostCard from "../../components/PostCard";

function Search() {

    const parser = new DOMParser();

    const [error, setError] = useState();
    const [displaySuccess, setDisplaySuccess] = useState(false);
    const [result, setResult] = useState();

    async function search(tags: string, inclusive: string) {
        try {
            setResult(undefined);
            if (inclusive !== "1"){
                inclusive = "0";
            }
            const {Posts} = await fetch("get", `/posts/tags/search?tags=${tags}&inclusive=${inclusive}`);
            setResult(Posts.map((post: any) => <div><PostCard post={post} key={post.itemID}/></div>));
            setDisplaySuccess(true);
            setError(undefined);
        } catch (err: any) {
            setError(err.error);
        }
    }

    return (
        <main id="search">
            <h1>Search Posts</h1>
            <SearchForm onSubmit={search} error={error}/>
            {displaySuccess && <h4>Results</h4>}
            {displaySuccess && result}
        </main>
    )
}

export default Search;