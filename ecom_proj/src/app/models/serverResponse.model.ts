export class ServerResponse<T> {
    public responseCode: number;
    public success: boolean;
    public message: string;
    public results: T[];


}