export interface ErrorResponse {
    statusCode: number;
    error: string;
}
  
export interface SuccessResponse {
    statusCode: number;
    message: string;
    data: unknown;
}