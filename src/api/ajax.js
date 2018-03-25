const apiHost   = 'https://tychbees.com/quote_api/';

export default {
    async fetchAllCategories(){
        try {
            const response = await fetch(apiHost + 'categories');
            const responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        }catch(error){
            console.error(error);
        }
    },
    async fetchQuotesForCategory(id){
        try {
            const response = await fetch(apiHost + 'categories/' + id);
            const responseJson = await response.json();
            return responseJson;
        }catch(error){
            console.error(error);
        }
    }
}