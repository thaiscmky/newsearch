import axios from 'axios';
axios.get(`/api/articles`);
axios.post(`/api/articles` + id);
axios.delete("/api/articles" + id);


export default {

    getArticle: function(){
        return axios.get("*")
    },
    getSavedArticle: function(){
        return axios.get("/api/articles")
    },
    postArticle:function(){
        return axios.post("/api/articles" + id)
    },
    deleteArticle: function(){
        return axios.delete("/api/articles" + id)
    }

}