import { FC } from "react"
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