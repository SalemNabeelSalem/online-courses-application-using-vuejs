import http from "../http-common";

class TutorialDataService {

    getAll() {        
        return http.get("/sections");
    }

    get(id) {
        return http.get(`/sections/${id}`);
    }

    create(data) {
        return http.post("/sections", data);
    }

    update(id, data) {
        return http.put(`/sections/${id}`, data);
    }

    delete(id) {
        return http.delete(`/sections/${id}`);
    }
}

export default new TutorialDataService();