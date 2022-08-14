const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="py-2 px-5 w-3/4 sm:w-3/5 lg:w-full md:max-w-xl bg-neutral-200 rounded-full flex items-center">
            <label htmlFor="searchBar" className="w-2/5 font-medium text-gray-800 text-center">
                Search Recipes
            </label>

            <input
                id="searchBar"
                autoComplete="off"
                type="text"
                placeholder="Search any recipe"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="p-2 w-3/5 bg-neutral-300 rounded text-sm placeholder:text-gray-500 outline-none"
            />
        </div>
    );
};

export default SearchBar;
