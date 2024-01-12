import './web-components/forest-demo-three.js'
// This is called BEFORE your Elm app starts up
//
// The value returned in this function will be passed as flags
// into your `Shared.init` function
export const flags = ({ env }) => {
    console.log(env)
    return {
        message: "Hello, from Javascript flags!"
    }
}


// This is called AFTER your Elm app starts up
//
// Here you can work with `app.ports` to send messages
// to your elm application, or subscribe to incoming
// messages from Elm
export const onReady = ({ app, env}) => {
    if (app.ports && app.ports.outgoing) {
        app.ports.outgoing.subscribe(({ tag, data}) => {
            // print out the message sent from Elm
            console.log(tag, data)
            switch (tag) {
                case 'OPEN_WINDOW_DIALOG':
                    window.alert(data)
                    return
                default:
                    console.warn(`Unhandled outgoing port: "${tag}"`)
                    return
            }
        })
    }
}