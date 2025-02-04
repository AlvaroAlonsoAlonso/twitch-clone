class ApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

class GetBearerError extends ApiError {
  constructor(message: string) {
    super(message)
    this.name = 'GetBearerError'
  }
}

class ConnectionApiError extends ApiError {
  constructor(message: string) {
    super(message)
    this.name = 'ConnectionApiError'
  }
}

export { ApiError, GetBearerError, ConnectionApiError }
