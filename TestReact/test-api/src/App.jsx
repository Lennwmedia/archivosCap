import { useEffect, useState } from "react"

const ENPPOINT_POSTS_RAMDOM_URL = 'https://jsonplaceholder.typicode.com/comments'
// const ENDPOINT_IMAGE_RAMDOW_URL = `https://dummyimage.com/800x430/FFFFFF/${firstWord}=jsonplaceholder.org&json=true`

export function App() {
    const [body, setBody] = useState()

    useEffect(() => {
        fetch(ENPPOINT_POSTS_RAMDOM_URL)
            .then(res => res.json())
            .then(data => {
                const { body } = data
                setBody(body)

                const threeFirstWords = body.split(' ', 3).join(' ')
                console.log(threeFirstWords)
            })
    }, [])

    return(
        <main>
            <h3>Hellooo PEOPLEEEEEEEEEE</h3>
           {body && <p>{body}</p>}
        </main>
    )
}