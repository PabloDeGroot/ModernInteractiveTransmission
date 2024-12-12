//import { Key, up } from "@nut-tree-fork/nut-js"

export abstract class Data {
    abstract type: "BasicInput" | "AdvancedInput"
    IPC!: Electron.IpcRenderer
    username: string
    color: string
    MoveMouse!: (x: number, y: number, selectedTool: string) => void
    Draw!: (x: number, y: number, button: string) => void
    CreateObject!: (x: number, y: number, type: 'image' | 'text', src?: string) => void
    MouseUp!: (button: string) => void
    MouseDown!: (button: string) => void
    AddText = (text: string, x: number, y: number) => {
        this.CreateObject(x, y, "text", text)
    }
    AddImage = (src: string, x: number, y: number) => {
        this.CreateObject(x, y, "image", src)
    }
    abstract Run: () => void

}

abstract class BasicInput extends Data {
    declare type: "BasicInput"
    abstract device: "mouse" | "keyboard"

}

abstract class MouseInput extends BasicInput {
    declare device: "mouse"
    abstract action: "click" | "move" | "scroll" | "draw"
    x: number
    y: number
    constructor(x: number, y: number) {
        let screenWidth = window.screen.width
        let screenHeight = window.screen.height
        super()
        this.x = x * screenWidth
        this.y = y * screenHeight
    }
}

export class ClickInput extends MouseInput {
    declare action: "click"
    button: "left" | "right" | "middle"
    pressed: boolean
    constructor(x: number, y: number, pressed: boolean, button: "left" | "right" | "middle") {
        super(x, y)
        this.button = button
        this.pressed = pressed
    }
    Run = () => {
        if (this.pressed) {
            //this.IPC.send("clickMouse", { x: this.x, y: this.y, type: this.button })
            this.MouseDown(this.button)
        } else {
            this.MouseUp(this.button)
        }
    }
}

export class MoveInput extends MouseInput {
    declare action: "move"
    selectedTool: string

    constructor(x: number, y: number, selectedTool: string) {
        super(x, y)
        this.selectedTool = selectedTool
    }
    Run = () => {
        this.MoveMouse(this.x, this.y, this.selectedTool)
    }
}
export class ScrollInput extends MouseInput {
    Run = () => {
        this.IPC.send("scroll", { scroll: this.direction, x: this.x, y: this.y })

    }
    amount: number
    declare action: "scroll"
    direction: "up" | "down"
    constructor(x: number, y: number, amount: number, direction: "up" | "down") {
        super(x, y)
        this.direction = direction
        this.amount = amount
    }
}
export class KeyboardInput extends BasicInput {

    declare device: "keyboard"
    action: "press" | "release"
    key: string
    constructor(key: string, action: "press" | "release") {
        super()
        this.key = key
        this.action = action
    }
    Run = () => {
        if (this.action === "press") {
            this.IPC.send("sendKey", {
                key: this.key,
                pressed: true
            })
        }
        else if (this.action === "release") {
            this.IPC.send("sendKey", {
                key: this.key,
                pressed: false
            })
        }
    }

}

abstract class AdvancedInput extends Data {
    declare type: "AdvancedInput"
    abstract class: "Object" | "TODO"
}
abstract class ObjectInput extends AdvancedInput {
    declare class: "Object"
    abstract action: "create" | "destroy" | "move"
    abstract objectType: "image" | "text"
    x!: number
    y!: number
}
export class ImageInput extends ObjectInput {
    declare action: "create"
    Run = () => { this.AddImage(this.src, this.x, this.y) }
    declare objectType: "image"
    src?: string
    constructor(src: string, x: number, y: number) {
        super()
        let screenWidth = window.screen.width
        let screenHeight = window.screen.height
        this.x = x * screenWidth
        this.y = y * screenHeight
        this.src = src
    }
}
export class TextInput extends ObjectInput {
    declare action: "create"
    Run = () => { this.AddText(this.text, this.x, this.y) }
    declare objectType: "text"
    text: string
    constructor(text: string) {
        super()
        this.text = text
    }

}







export function Create(data: Data) {
    switch (data.type) {
        case "BasicInput":
            return CreateBasicInput(data as BasicInput)

        case "AdvancedInput":
            return CreateAdvancedInput(data as AdvancedInput)

    }
}
function CreateBasicInput(data: BasicInput) {
    switch (data.device) {
        case "mouse":
            return CreateMouseInput(data as MouseInput)
        case "keyboard":
            return CreateKeyboardInput(data as KeyboardInput)
    }
}
function CreateMouseInput(data: any) {
    switch (data.action) {
        case "click":
            return new ClickInput(data.x, data.y, data.pressed, data.button)

        case "move":
            return new MoveInput(data.x, data.y, data.selectedTool)
        case "scroll":
            return new ScrollInput(data.x, data.y, data.amount, data.direction)
        default:
            throw new Error("Invalid MouseInput")
    }
}

function CreateKeyboardInput(data: any) {
    return new KeyboardInput(data.key, data.action)
}
function CreateAdvancedInput(data: AdvancedInput) {
    switch (data.class) {
        case "Object":
            return CreateObjectInput(data as ObjectInput)
        case "TODO":
            throw new Error("TODO")
    }
}
function CreateObjectInput(data: any) {
    console.log(data)
    switch (data.objectType) {
        case "image":
            return new ImageInput(data.src, data.x, data.y)
        case "text":
            return new TextInput(data.text)
        default:
            throw new Error("Invalid ObjectInput")
    }
}