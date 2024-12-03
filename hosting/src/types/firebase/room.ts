export default interface Room{
    id: string,
    name: string,
    users: UserRoom[],
    //messages: Message[]

}

export interface UserRoom{
    username: string,
    profilePic: string,
    peerId: string,
    status: "streaming" | "streaming_with_app" | "idle" | "dialing" 
}