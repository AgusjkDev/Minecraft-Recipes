const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="flex w-3/4 items-center rounded-full bg-neutral-200 py-2 px-5 sm:w-3/5 md:max-w-xl lg:w-full">
            <label htmlFor="searchBar" className="w-2/5 text-center font-medium text-gray-800">
                Search Recipes
            </label>

            <input
                id="searchBar"
                autoComplete="off"
                type="text"
                placeholder="Search any recipe"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-3/5 rounded bg-neutral-300 p-2 text-sm outline-none placeholder:text-gray-500"
            />
        </div>
    );
};

export default SearchBar;
