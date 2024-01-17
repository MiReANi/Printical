
// Muokkaa sit iha vitusti
const OpenForm = () => {
    async function openform(formData) {
        'use server'
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    return(
        <div className="container mx-auto my-8">
            <form action={openform}>
                <input name="query"/>
                <button className="p-2 bg-blue" type="submit">Submit</button>
            </form>
        </div>
    );
};
export default OpenForm;