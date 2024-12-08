type Data = { description?: any, candidate?: any, id: number };
export interface ISignalingChannel {

    send(data: Data): void;
    onmessage?: (message: Data) => void;
}