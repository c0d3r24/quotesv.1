const apiHost   = 'https://tychbees.com/quote_api/';

export default {
    async fetchAllCategories(){
        try {
            const response = await fetch(apiHost + 'categories',{
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                }});
            const responseJson = await response.json();
            return responseJson;
        }catch(error){
            console.error(error);
        }
    },
    async fetchQuotesForCategory(id){
        try {
            const response = await fetch(apiHost + 'categories/' + id,{
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                }});
            const responseJson = await response.json();
            return responseJson;
        }catch(error){
            console.error(error);
        }
    }
}