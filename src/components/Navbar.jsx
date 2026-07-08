export default function Navbar ({category, setCategory, pageSize, setPageSize}) {
    return(
        <>
            <nav>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="waifu">waifu</option>
                    <option value="maid">maid</option>
                    <option value="uniform">uniform</option>
                </select>

                <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </select>
            </nav>
        </>
    )
}