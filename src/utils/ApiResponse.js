class ApiResponse{
    constructor(statusCode, data, meessage = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = this.message
        this.success = this.success < 400
    }
}

export { ApiResponse }