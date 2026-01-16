export class Response {
    constructor(status, totalRecords, pageSize, data = null) {
        this.status = status;
        this.totalRecords = totalRecords;
        this.pageSize = pageSize;
        this.data = data;
    }
}