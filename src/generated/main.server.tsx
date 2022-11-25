import { FC } from "react"

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
}

await sleep()

const logs = [{ id: 1, message: "Log 1" }]

export const config = { path: "/logs", props: { logs, value: "hello" } }


const Page: FC = () => {
  return (
    <div>
      <h1>Logs</h1>

      <ul>
        {logs.map((log) => (
          <li key={log.id}>{log.message}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page